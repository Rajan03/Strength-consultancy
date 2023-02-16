type Props = {
    heading: string;
    subHeading: string;

    className?: string;
}
export default function PageTitle(props: Props): JSX.Element {
    const {heading, subHeading, className} = props;

    return (
        <>
            <div className={"flex flex-col gap-y-8 justify-center items-center " + className}>
                <h1 className={"text-7xl font-bold text-primary-800"}>
                    {heading}
                </h1>
                <p className={"text-3xl lg:text-2xl text-primary-500"}>
                    {subHeading}
                </p>
            </div>
        </>
    )
}
