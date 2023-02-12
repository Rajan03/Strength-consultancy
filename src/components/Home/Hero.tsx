import React from "react";
import Image, {StaticImageData} from "next/image";
import {BACKGROUND_JPG} from "@/constant/Images";
import {LayerButton} from "@/components";

export default function Hero(props: IHero): JSX.Element {

    return (
        <>
            <Image src={BACKGROUND_JPG} alt={'bg'} priority className={'absolute min-h-screen top-0 left-0 right-0 ' +
                'max-h-full min-w-full object-cover z-[-1] bg-top'}/>

            <div className="flex-1 min-w-full min-h-screen flex flex-col-reverse lg:flex-row gap-y-[8rem] lg:gap-y-0
                            justify-center items-center">
                {/*	Content */}
                <div className="flex flex-col gap-y-8 justify-center items-start p-[1rem]">
                    <h1 className="text-6xl font-bold text-primary-800">{props.heading}</h1>
                    <p className="text-4xl text-primary-500">{props.description}</p>

                    <LayerButton text={props.cta.text} link={props.cta.link}
                                 classes={'mt-[4rem]'}></LayerButton>
                </div>

                {/*	Image */}
                <div className="flex justify-center items-center relative">
                    <Image src={props.image} alt="hero" width={600} height={600}
                           className={'min-w-[35rem] rounded-tr-[4rem] rounded-bl-[4rem] border-4' +
                               ' border-secondary-200'}/>
                    <div className={'absolute w-full h-full rounded-tr-[4rem] rounded-bl-[4rem] ' +
                        'bottom-[1.5rem] left-[1.5rem] border-4 border-primary-500'}></div>
                    <div className={'absolute bottom-[-5rem] min-w-[40rem] h-1/2 rounded-b-[4rem] ' +
                        'bg-primary-100 z-[-1]'}></div>
                </div>

            </div>
        </>
    )
}

interface IHero {
    heading: string,
    description: string,
    cta: {
        text: string,
        link: string
    },
    image: StaticImageData
}
