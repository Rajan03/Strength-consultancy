import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import {ArrowRightIcon} from "@heroicons/react/20/solid";

type ResourceCardProps = {
    title: string
    description: string
    image: StaticImageData
    price: string
    className?: string
}
export default function ResourceCard({title, description, image, price, className}: ResourceCardProps): JSX.Element {

    // CARD
    return (
        <div className={`flex flex-row justify-start items-stretch gap-x-4 rounded-xl shadow-md
         border-2 border-neutral-100 p-1 cursor-pointer relative ${className}`}>

            {/* Image */}
            <Image src={image} alt={''}
                   className={'rounded-l-xl max-w-[35%] max-h-[25rem] min-h-[20rem] object-cover'}/>

            {/* Content */}
            <div className={'flex-1 flex flex-col justify-start items-start gap-y-1 p-5'}>
                <h3 className={'text-2xl font-bold text-neutral-600 pb-5'}>{title}</h3>
                <p className={'flex-1 text-lg font-medium text-neutral-500'}>{description}</p>

                <div className={'self-stretch flex flex-row justify-between items-center'}>
                    <div className={'flex flex-row justify-start items-center gap-x-2'}>
                        <div className={'text-lg font-medium text-neutral-600'}>Price - </div>
                        <div className={'text-lg font-bold text-primary-600'}>{price}</div>
                    </div>

                    <Link href={'/contact'} passHref className={'flex flex-row justify-start items-center gap-2' +
                        ' relative pb-1'}>
                        <div className={'text-primary-500 text-xl font-normal'}>Buy</div>
                        <ArrowRightIcon className={'w-5 h-5 text-primary-600'}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
