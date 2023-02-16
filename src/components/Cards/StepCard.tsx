type Props = {
    stepCount?: number;
    title: string;
    icon: (className: string) => JSX.Element,
    description: string,
}

export default function StepCard(props: Props): JSX.Element {
    let {stepCount, title, icon, description} = props;

    return (
        <div className="flex flex-col justify-start items-center gap-y-8 px-2 max-w-md">

            {/* ICON and Step Number */}
            <div className={"flex flex-col gap-y-4 justify-start items-center pb-2 border-b-2 border-primary-200"}>
                <div className="flex justify-center items-center w-[8rem] h-[8rem]
                                rounded-full border-2 border-primary-600">
                    {icon('w-[4rem] h-[4rem] text-primary-600')}
                </div>
                {!!stepCount && <p className="text-2xl text-primary-500 font-normal">STEP {stepCount}</p>}
            </div>

            {/* Title and Description */}
            <div className="flex flex-col gap-y-4 items-center">
                <p className="text-3xl font-medium text-primary-500">{title}</p>
                <p className="text-xl text-neutral-500 text-center">
                    {description}
                </p>
            </div>
        </div>
    )
}
