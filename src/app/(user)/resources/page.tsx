import {PageTitle, ResourceCard} from "@/components";
import {ResourcesData} from "@/constant/data";

export default function Resources(): JSX.Element {
    const {heading, description, groups} = ResourcesData
    return (
        <>
            <div className={'min-h-full flex flex-col justify-start items-center gap-y-60'}>
                {/* Page title */}
                <div className="min-h-[calc((100%_-_96px)/2)] flex flex-col justify-around items-center gap-y-50">
                    <PageTitle heading={heading} subHeading={description} className={""}/>
                </div>

                <div className={'flex flex-col-reverse md:flex-row justify-start items-stretch gap-9 w-full'}>

                    {/* Left side */}
                    <div className={'flex-1 flex flex-col justify-start items-start gap-y-32'}>
                        {groups.map((group, index) => (
                            <div key={index} className={'flex flex-col justify-start items-start gap-y-8'}>
                                <div className={'text-2xl font-light text-primary-600 pb-2 border-b-2 ' +
                                    'border-primary-100'}>
                                    {index + 1 + '.'} &nbsp; {group.title}
                                </div>

                                <div className={'grid grid-cols-1 md:grid-cols-2 justify-start items-start gap-9'}>
                                    {group.items.map((item, index) =>
                                        <ResourceCard {...item} key={item.title + index} className={'md:max-w-[60rem]'}/>)}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right side - Filters */}
                    <div className={'flex flex-col justify-start items-start gap-y-20'}>
                        <div className={'text-2xl font-bold text-neutral-900'}>Filters</div>
                        <div className={'flex flex-col justify-start items-start gap-y-2'}>
                            <div className={'flex flex-row justify-start items-center gap-x-2'}>
                                <div className={'text-sm font-medium text-neutral-900'}>Filter 1</div>
                                <div className={'text-sm font-medium text-neutral-500'}>Description 1</div>
                            </div>
                            <div className={'flex flex-row justify-start items-center gap-x-2'}>
                                <div className={'text-sm font-medium text-neutral-900'}>Filter 2</div>
                                <div className={'text-sm font-medium text-neutral-500'}>Description 2</div>
                            </div>
                            <div className={'flex flex-row justify-start items-center gap-x-2'}>
                                <div className={'text-sm font-medium text-neutral-900'}>Filter 3</div>
                                <div className={'text-sm font-medium text-neutral-500'}>Description 3</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
