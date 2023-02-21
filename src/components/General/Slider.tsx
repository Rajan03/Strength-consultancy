'use client'

import {useState} from "react";
import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/20/solid";
import {TestimonialCard} from "@/components";

type Props = {
    testimonials: {
        name: string;
        company: string;
        description: string;
    }[],
    className?: string
}

export default function Slider({testimonials, className}: Props): JSX.Element {
    const [activeIndex, setActiveIndex] = useState(0);
    const [dir, setDir] = useState(0);

    const handlePrevClick = () => {
        setDir(-1)
        setActiveIndex(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1);
    };

    const handleNextClick = () => {
        setDir(1)
        setActiveIndex(activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1);
    };

    return (
        <div className={"relative " + className}>
            <div className="relative overflow-hidden flex justify-center items-center shadow-lg">
                <TestimonialCard {...testimonials[activeIndex]} animDir={dir}/>
            </div>

            <div className="flex justify-center items-center gap-5 mt-12">
                <ArrowLeftIcon onClick={handlePrevClick}
                               className="min-h-[2.5rem] min-w-[2.5rem] h-[2.5rem] w-[2.5rem] p-2 rounded-full text-3xl font-bold bg-primary-100
                                          text-primary-600 cursor-pointer"/>

                <ArrowRightIcon onClick={handleNextClick}
                                className="min-h-[2.5rem] min-w-[2.5rem] h-[2.5rem] w-[2.5rem] p-2 rounded-full text-3xl font-bold bg-primary-100
                                           text-primary-600 cursor-pointer"/>
            </div>
        </div>
    );
}
