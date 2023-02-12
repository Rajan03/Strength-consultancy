type Props = {
    title: string,
    percent: number,
    description: string
}

export default function StatProgress(props: Props): JSX.Element {

    return (
        <>
            <div className="flex flex-col justify-start items-start gap-y-7">
                {/* Title */}
                <h3 className="text-neutral-50 text-3xl font-medium uppercase tracking-widest">{props.title}</h3>

                {/* Percent and bar */}
                <div className="self-stretch flex flex-row justify-start items-center gap-x-4">
                    <p className={"text-neutral-50 text-3xl font-semibold"}>
                        {props.percent}%
                    </p>
                    <div className="flex-1 h-[1rem] bg-neutral-50 rounded-full">
                        <div className="h-full rounded-full bg-primary-100"
                             style={{width: (props.percent < 100 ? props.percent : 100) + "%"}}></div>
                    </div>
                </div>

                {/* Description */}
                <p className="text-neutral-50 text-2xl font-normal">{props.description}</p>
            </div>
        </>
    )
}
