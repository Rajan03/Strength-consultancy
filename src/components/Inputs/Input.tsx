'use client';

type Props = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;

    isTextArea?: boolean;
}

export default function Input(props: Props): JSX.Element {
    const {label, value, onChange, type, isTextArea } = props;

    if (isTextArea) return (
        <>
            <label htmlFor={label} className={"border-2 border-primary-100 relative rounded-xl h-[10rem]" +
                " min-w-[40rem] max-w-[40rem] mx-auto"}>
                <span className={"absolute top-[5px] left-[5px] text-primary-300 text-[1rem] font-medium"}>{label}</span>
                <textarea id={label} value={value}
                          className={"absolute left-0 right-0 bottom-0 h-[80%] w-full bg-transparent" +
                                " outline-none px-2 rounded-xl text-primary-600 text-[1.2rem] font-light"}
                            onChange={(event) => onChange(event.target.value)}/>
            </label>
        </>
    );

    return (
        <>
            <label htmlFor={label} className={"border-2 border-primary-100 relative rounded-xl h-[5rem]" +
                " min-w-[40rem] max-w-[40rem] mx-auto"}>
                <span className={"absolute top-[5px] left-[5px] text-primary-300 text-[1rem] font-medium"}>{label}</span>
                <input type={type} id={label} value={value}
                       className={"absolute left-0 right-0 bottom-0 h-[64%] w-full bg-transparent" +
                           " outline-none px-2 rounded-xl text-primary-600 text-[1.2rem] font-light"}
                       onChange={(event) => onChange(event.target.value)}/>
            </label>
        </>
    );
}
