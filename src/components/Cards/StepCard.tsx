type Props = {
    stepCount: number;
    title: string;
    icon: (className: string) => JSX.Element,
    description: string
}

export default function StepCard(props: Props): JSX.Element {

    return (
        <div className="flex flex-col justify-start items-center gap-y-8 px-2 max-w-md">

            {/* ICON and Step Number */}
            <div className="flex flex-col gap-y-4 justify-start items-center pb-2 border-b-2
                            border-primary-200">
                <div className="flex justify-center items-center w-[8rem] h-[8rem]
                                rounded-full border-2 border-primary-600">
                    {props.icon('w-[4rem] h-[4rem] text-primary-600')}
                </div>
                <p className="text-2xl text-primary-500 font-normal">STEP {props.stepCount}</p>
            </div>

            {/* Title and Description */}
            <div className="flex flex-col gap-y-4 items-center">
                <p className="text-3xl font-medium text-primary-500">{props.title}</p>
                <p className="text-xl text-neutral-500 text-center">
                    {props.description}
                </p>
            </div>
        </div>
    )
}
