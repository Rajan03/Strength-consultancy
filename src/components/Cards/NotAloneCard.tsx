import Image, {StaticImageData} from "next/image";

type Props = {
    heading: string;
    subHeading: string;
    description: string;
    image: StaticImageData;

    className?: string;
}

export default function NotAloneCard(props: Props): JSX.Element {
    const {heading, subHeading, description, image, className} = props;
    return (
        <>
            <div className={"flex flex-col items-center justify-center w-full min-h-[45rem] p-9" +
                " rounded-xl shadow-lg relative " + className}>
                <Image src={image} alt={'image'}
                       className="absolute top-0 left-0 object-cover rounded-xl w-full h-full z-[-1]"/>
                <div className="absolute top-0 left-0 w-full h-full bg-neutral-900/60 to-black rounded-xl z-[-1]"/>

                <div className="flex flex-col items-start justify-between w-full h-full py-9">
                    <h3 className="text-4xl font-semibold text-neutral-50 uppercase">{heading}</h3>

                    <div className={"flex flex-col gap-y-3"}>
                        <h4 className="text-3xl font-semibold text-neutral-50">{subHeading}</h4>
                        <p className="text-2xl font-normal text-neutral-50">{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
