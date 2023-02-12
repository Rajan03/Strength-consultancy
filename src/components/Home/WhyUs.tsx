import {StaticImageData} from "next/image";

type Props = {
    heading: string;
    description: string;
    cards: {
        image: StaticImageData;
        icon: JSX.Element;
        heading: string,
        subHeading: string,
        description: string
    }[]
}
export default function WhyUs(props: Props): JSX.Element {

    return (
        <>
            <div className="flex flex-col justify-start items-stretch min-w-full min-h-screen bg-gradient-to-br">
                Hello
            </div>
        </>
    )
}
