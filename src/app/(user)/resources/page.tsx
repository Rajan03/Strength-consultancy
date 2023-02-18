'use client'

import React from "react";
import {PageTitle, ResourceCard, Filter} from "@/components";
import {ResourcesData} from "@/constant/data";
import {StaticImageData} from "next/image";
import Search from "@/components/Inputs/Search";

type Group = {
    id: number
    title: string
    selected?: boolean
    items: {
        title: string
        description: string
        image: StaticImageData
        price: string
    }[]
}

export default function Resources(): JSX.Element {
    const {heading, description, groups} = ResourcesData;
    const filteredGroupsDefault = groups.map(group => ({
        ...group,
        selected: true,
    }));
    const [filteredGroups, setFilteredGroups] = React.useState<Group[]>(filteredGroupsDefault);

    const filterGroup = (id: number | null) => {
        if (id === null) {
            setFilteredGroups(filteredGroupsDefault);
            return;
        }

        const newFilteredData = groups
            .map(group => {
                if (group.id === id) {
                    return {...group, selected: true}
                }
                return {...group, selected: false}
            })
            .sort((a, b) => {
                if (a.selected && !b.selected) {
                    return -1;
                }
                if (!a.selected && b.selected) {
                    return 1;
                }
                return 0;
            })
        setFilteredGroups(newFilteredData)
    }

    const filterSearch = (query: string) => {
        if (query?.trim() === '') {
            setFilteredGroups(filteredGroupsDefault);
            return;
        }

        const newFilteredData = groups
            .map(group => {
                const newItems = group.items
                    .filter(item => item.title.toLowerCase().includes(query.toLowerCase()));

                return {
                    ...group,
                    selected: newItems.length > 0,
                    items: newItems
                }
            })
            .sort((a, b) => {
                if (a.selected && !b.selected) {
                    return -1;
                }
                if (!a.selected && b.selected) {
                    return 1;
                }
                return 0;
            })

        setFilteredGroups(newFilteredData)
    }

    return (
        <>
            <div className={'min-h-full flex flex-col justify-start items-center gap-y-60'}>
                {/* Page title */}
                <div className="min-h-[calc((100%_-_96px)/2)] flex flex-col justify-around items-center gap-y-50">
                    <PageTitle heading={heading} subHeading={description} className={""}/>
                </div>

                <div className={'flex flex-col-reverse justify-start items-stretch gap-20 w-full'}>

                    {/* Left side */}
                    <div className={'flex-1 flex flex-col justify-start items-start gap-y-32'}>

                        {!filteredGroups.filter(s => s.selected).length
                            ? <div className={'text-2xl font-semibold text-primary-600'}>
                                No results found
                            </div>
                            : <> {filteredGroups.map((group, index) => (
                                <div key={index} className={'flex flex-col justify-start items-start gap-y-8 relative '
                                    + (!group.selected ? 'opacity-50 cursor-not-allowed' : '')}>
                                    <div className={'text-2xl font-light text-primary-600 pb-2 border-b-2 ' +
                                        'border-primary-100'}>
                                        {index + 1 + '.'} &nbsp; {group.title}
                                    </div>

                                    <div className={'grid grid-cols-1 md:grid-cols-2 justify-start items-start gap-9'}>
                                        {group.items.length
                                            ? group.items.map((item, index) =>
                                                <ResourceCard {...item} key={item.title + index}
                                                              className={'md:max-w-[60rem]'}/>)
                                            : <div className={'text-lg font-normal text-center text-primary-600'}>
                                                No results found
                                            </div>}
                                    </div>

                                    {!group.selected && <div className={'absolute inset-0 bg-transparent'}/>}
                                </div>
                            ))}</>}
                    </div>

                    {/* Right side - Filters */}
                    <div className={'flex flex-row justify-start items-center gap-20'}>
                        <div className={'text-2xl font-semibold text-neutral-600'}>Filter</div>
                        <div className={'flex-1 flex flex-row justify-between items-center'}>
                            <Filter placeholder={'Group'} onChange={filterGroup}
                                    options={groups.map(g => ({title: g.title, id: g.id}))}/>

                            <Search placeholder={'Search'} onChange={filterSearch}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
