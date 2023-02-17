import {OFFER_CARD_ONE} from "@/constant/Images";
import Image, {StaticImageData} from "next/image";

type Props = {
    title: string;
    description: string,
    image: StaticImageData,
    includes: string[],
    button: {
        text: string,
        link: string
    },
    className?: string
}

export default function OfferCard(props: Props): JSX.Element {
    let {title, description, includes, button: {text, link}, image, className} = props;

    return (
        <div className={"flex flex-col gap-y-4 justify-start items-center " + className}>
            <div className="min-h-1/2 w-1/2">
                <Image src={image} alt={title} width={300} height={300}/>
            </div>

        </div>
    )
}
