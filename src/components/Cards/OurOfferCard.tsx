import Image, {StaticImageData} from "next/image";
import {LayerButton} from "@/components";
import {NavLinks} from "@/constant/data";

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
    let {title, description, includes, button: {text}, image, className} = props;

    return (
        <div className={"flex flex-col lg:flex-row gap-16 justify-start items-stretch " + className}>
            <div className="min-h-1/2 w-full lg:w-1/2 relative">
                <Image priority src={image} alt={title} className={'object-cover bg-center no-repeat'}/>
                <div className="absolute inset-0 bg-secondary-100 rotate-3 z-[-1]" />
                <div className="absolute inset-0 bg-secondary-100/20" />
            </div>

            <div className={'flex-1 flex flex-col justify-start items-start pt-2'}>
                <p className={'text-2xl font-light text-primary-300 mb-8'}>WHAT WE OFFER</p>
                <h3 className={'text-3xl font-semibold text-primary-500 mb-8'}>{title}</h3>
                <p className={'text-xl text-neutral-500'}>{description}</p>

                <div className={'flex-1 flex flex-col gap-y-4 mt-8'}>
                    <p className={'text-2xl font-normal text-primary-300 mt-9 mb-6 capitalize'}>Includes: </p>
                    {includes.map((i, index) => (
                        <div key={index} className={'flex flex-row gap-4 items-center'}>
                            <div className={'w-3 h-3 bg-primary-300 rounded-full'} />
                            <p className={'text-xl text-neutral-500'}>{i}</p>
                        </div>
                    ))}
                </div>

                <div className={'mt-16 lg:mt-0'}>
                    <LayerButton text={text} link={NavLinks.CONTACT} />
                </div>
            </div>
        </div>
    )
}
