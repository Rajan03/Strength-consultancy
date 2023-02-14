import React from "react";
import Image, {StaticImageData} from "next/image";
import {AnimatedDiv, LayerButton, SectionHeading} from "@/components";
import {navVariants} from "@/constant/animation";

type Props = {
    heading: string;
    subHeading: string;
    description: string;
    oneLine: string;
    points: {
        icon: (className: string) => JSX.Element,
        text: string
    }[],
    action: {
        text: string,
        link: string
    },
    image: StaticImageData
}
export default function Resource(props: Props): JSX.Element {
    const anim = navVariants;

    return (
        <AnimatedDiv isStaggered className="flex flex-col justify-start items-end min-w-full min-h-screen py-20
        gap-[8rem]">
            {/* Heading */}
            <div className={"flex justify-end items-stretch lg:mr-[4.5rem]"}>
                <SectionHeading heading={props.heading}/>
            </div>

            {/* Content */}
            <AnimatedDiv initial={anim.hidden} whileInView={anim.show} viewport={{once: true}}
                className="flex flex-col lg:flex-row justify-start items-start gap-[8rem]">
                {/* Image */}
                <div className="flex justify-center items-center relative lg:min-w-[40%]">
                    <Image src={props.image} alt="case study" width={600} height={600}
                           className={'min-w-full rounded-tr-[4rem] rounded-bl-[4rem] border-4 border-secondary-200'}/>

                    <div className={'absolute w-full h-full rounded-tr-[4rem] rounded-bl-[4rem] ' +
                        'bottom-[1.5rem] left-[1.5rem] border-4 border-primary-500'}></div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-start items-start gap-y-8">

                    <div className="flex flex-col gap-y-6">
                        <p className="text-2xl text-primary-600 font-medium">{props.subHeading}</p>
                        <p className="text-2xl text-neutral-500">{props.description}</p>
                        <p className="text-2xl text-neutral-700 font-medium">{props.oneLine}</p>

                        <ul className="flex flex-col gap-y-6 items-stretch mt-7">
                            {props.points.map((point, index) => (
                                <li key={index} className="flex flex-row gap-x-4 items-center">
                                    {point.icon('w-[2rem] h-[2rem] text-secondary-200')}
                                    <p className="text-xl text-secondary-200">{point.text}</p>
                                </li>
                            ))}
                        </ul>

                        <div className="self-end">
                            <LayerButton text={props.action.text} link={props.action.link} classes={'mt-[4rem]'} />
                        </div>
                    </div>
                </div>
            </AnimatedDiv>
        </AnimatedDiv>
    )
}
