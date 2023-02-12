import {StaticImageData} from "next/image";
import {AnimatedDiv, BgImgCard, SectionHeading} from "@/components";

type Props = {
    heading: string;
    description: string;
    cards: {
        image: StaticImageData;
        icon: (className: string) => JSX.Element;
        heading: string,
        subHeading: string,
        description: string
    }[]
}
export default function WhyUs(props: Props): JSX.Element {

    return (
        <>
            <AnimatedDiv isStaggered
                         className="flex flex-col justify-start items-stretch min-w-full min-h-screen py-20">
                <SectionHeading heading={props.heading} description={props.description}/>

                <div className="flex-1 flex flex-col lg:flex-row justify-between items-stretch lg:items-start gap-20
                                mt-20 lg:mt-40">
                    {props.cards.map((card, i) => {

                        return (
                            <div key={i} className={'flex-1 overflow-hidden'}>
                                <BgImgCard image={card.image} icon={card.icon} heading={card.heading}
                                           description={card.description} subHeading={card.subHeading}/>
                            </div>
                        )
                    })
                    }
                </div>
            </AnimatedDiv>
        </>
    )
}
