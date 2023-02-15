'use client'
import {textVariant} from "@/constant/animation";
import {AnimatedDiv} from "@/components";

type Props = {
    heading: string;
    description?: string;

    className?: string; // for description
}

export default function SectionHeading(props: Props): JSX.Element {
    const anim = textVariant(0.1);

    return (
        <>
            <AnimatedDiv initial={anim.hidden} whileInView={anim.show}
                         className="flex flex-col justify-start items-center"
                         viewport={{ once: true}}>
                {/* Heading */}
                <div className="flex flex-col justify-start items-center p-5 relative">
                    {props.heading && <h2 className="text-5xl font-bold text-primary-800 text-center">
                        {props.heading}
                    </h2>}

                    <div className={'min-w-[10rem] w-1/4 h-[1rem] bg-secondary-100 absolute bottom-[-1rem] right-[-1rem]' +
                        ' rounded-2xl'}></div>
                    <div className={'min-w-[10rem] w-1/4 h-[1rem] bg-secondary-100 absolute top-[-1rem] left-[-1rem]' +
                        ' rounded-2xl'}></div>
                </div>

                {/* Description */}
                {props.description && <p className={"text-3xl lg:text-2xl text-primary-500 text-center mt-[4rem]"
                    + " max-w-8xl " + props.className}>
                    {props.description}
                </p>}
            </AnimatedDiv>
        </>
    )
}
