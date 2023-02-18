'use client'
import React from "react";
import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";

type Props = {
    className?: string
    placeholder: string
    onChange: (v: string) => void
}
export default function Search(props: Props): JSX.Element {
    const {className, placeholder, onChange} = props;
    const [value, setValue] = React.useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value + '';
        setValue(value);
        onChange(value);
    }

    // Search With Icon
    return (
        <div className={`flex flex-row justify-start items-center gap-x-2 relative ${className}`}>
            <MagnifyingGlassIcon className={'w-5 h-5 text-neutral-600 absolute left-3'} />
            <div className={'flex flex-row justify-start items-center gap-x-2'}>
                <input placeholder={placeholder} value={value} onChange={handleChange}
                       className={`form-select appearance-none block w-full pl-10 pr-4 py-4 text-lg font-medium text-neutral-500
                      bg-transparent outline-none bg-clip-padding bg-no-repeat border border-solid border-neutral-300 rounded transition ease-in-out    
                        m-0 focus:text-neutral-600 focus:border-neutral-400 focus:outline-none ${className}`}
                />
            </div>
        </div>
    )
}
