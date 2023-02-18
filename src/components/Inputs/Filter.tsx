'use client'
import React from "react";

type Props = {
    className?: string

    label?: string
    placeholder: string
    options: {id: number, title: string}[]
    onChange: (v: number | null) => void
}
export default function Filter(props: Props): JSX.Element {
    const {className, label, options, placeholder, onChange} = props;
    const [value, setValue] = React.useState<number | string>('all');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value === 'all') {
            setValue('all');
            return onChange(null);
        }

        const value = parseInt(event.target.value);
        setValue(value);
        onChange(value);
    }

    return (
        <div className="xl:w-96 shadow">
            <select placeholder={placeholder} value={value} onChange={handleChange}
                    className={`form-select appearance-none block w-full px-4 py-4 text-lg font-medium text-neutral-500
                    bg-transparent outline-none bg-clip-padding bg-no-repeat border border-solid border-neutral-300 rounded transition ease-in-out
                    m-0 focus:text-neutral-600 focus:border-neutral-400 focus:outline-none ${className}`}>
                <option value={'all'}>All Resources</option>

                {options?.map((option) => (
                    <option key={option.id} value={option.id}>Only {option.title}</option>
                ))}
            </select>
        </div>
    )
}
