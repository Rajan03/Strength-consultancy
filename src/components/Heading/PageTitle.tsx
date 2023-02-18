type Props = {
    heading: string;
    subHeading: string;

    className?: string;
}
export default function PageTitle(props: Props): JSX.Element {
    const {heading, subHeading, className} = props;

    return (
        <>
            <div className={"flex flex-col gap-y-8 justify-center items-center relative " + className}>
                <h1 className={"text-7xl font-bold text-primary-800"}>
                    {heading}
                </h1>
                <p className={"text-3xl lg:text-2xl text-primary-500 text-center"}>
                    {subHeading}
                </p>

                {/*    Scroll down btn */}
                <div className={"absolute -bottom-full"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="h-10 w-10 animate-bounce text-primary-500">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
            </div>
        </>
    )
}
