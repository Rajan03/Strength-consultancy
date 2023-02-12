import Image, {StaticImageData} from "next/image";
import {AnimatedDiv} from "@/components";
import {navVariants} from "@/constant/animation";

type Props = {
    image: StaticImageData;
    icon: (className: string) => JSX.Element;
    heading: string,
    subHeading: string,
    description: string,
    classes?: string
}

export default function BgImgCard(props: Props): JSX.Element {
    const anim = navVariants;

    return (
        <>
            <AnimatedDiv initial={anim.hidden} whileInView={anim.show} viewport={{once: true}}
                         className={"flex flex-row justify-start items-end min-w-xs lg:min-w-xs max-h-[300px]" +
                             " p-[2rem] min-h-[250px] lg:min-h-[300px] rounded-lg overflow-hidden" +
                             " relative bg-gradient-to-t from-neutral-600 to-neutral-400 cursor-pointer" +
                             " shadow-2xl" + props.classes}>
                <Image src={props.image} alt={'card-bg'} width={300} height={300}
                       className={'absolute top-0 left-0 min-w-full min-h-full object-cover' +
                           ' mix-blend-overlay'}/>

                <div className={'flex flex-row gap-4 justify-start items-center'}>
                    <div>{props.icon('h-[4.2rem] text-white')}</div>

                    <div className={'flex-1 flex flex-col justify-start items-stretch'}>
                        <h1 className={'text-4xl lg:text-2xl font-bold text-white'}>{props.heading}</h1>
                        <h2 className={'text-3xl lg:text-lg text-white'}>{props.subHeading}</h2>
                    </div>
                </div>
            </AnimatedDiv>
        </>
    )
}
