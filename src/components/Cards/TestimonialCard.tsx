'use client'

import {fadeIn} from "@/constant/animation";
import {AnimatedDiv} from "@/components";
import {AnimatePresence} from "framer-motion";

type Props = {
    name: string;
    company: string;
    description: string;

    animDir?: number;

}
export default function TestimonialCard(testimonial: Props): JSX.Element {
    const anim = fadeIn();

    return (
        <AnimatePresence initial={false} custom={testimonial.animDir}>
            <AnimatedDiv variants={anim} animate="show" initial="hidden" exit="exit" key={testimonial.name}
                         custom={testimonial.animDir} className="min-w-full rounded-2xl">
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                    <div className="relative max-w-3xl mx-auto">
                        <svg
                            className="absolute top-0 left-0 transform -translate-x-3 -translate-y-3 h-8 w-8 text-primary-300"
                            fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                            <path d="M16 0a16 16 0 100 32 16 16 0 000-32zm0 30a14 14 0 110-28 14 14 0 010 28z"/>
                            <path d="M16 4a12 12 0 100 24 12 12 0 000-24zm0 22a10 10 0 110-20 10 10 0 010 20z"/>
                            <path d="M16 8a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"/>
                        </svg>
                        <div className="text-xl leading-6 font-normal tracking-tight text-primary-400 sm:text-2xl">
                            {testimonial.description}
                        </div>
                        <div className="mt-6">
                            <p className="text-base text-primary-600">
                                <span className="font-medium">{testimonial.name}</span>
                                <span className="text-primary-300">, {testimonial.company}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </AnimatedDiv>
        </AnimatePresence>
    )
}
