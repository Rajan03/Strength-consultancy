"use client"
import {motion} from "framer-motion";
import {staggerContainer} from "@/constant/animation";

export default function AnimatedDiv(props: any): JSX.Element {

    if (props.isStaggered) {
        return (
            <>
                <motion.div variants={staggerContainer} initial="hidden" whileInView="show"
                            viewport={{once: false, amount: 0.25}} {...props}>
                    {props.children}
                </motion.div>
            </>
        )
    }

    return (
        <>
            <motion.div {...props}>
                {props.children}
            </motion.div>
        </>
    )
}
