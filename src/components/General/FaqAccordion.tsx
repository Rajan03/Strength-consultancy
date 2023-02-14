import {Icons} from "@/constant/data";
import {AnimatedDiv} from "@/components";
import {textVariant} from "@/constant/animation";

type Props = {
    question: string;
    answer: string;
    className?: string;
}
export default function FaqAccordion(props: Props): JSX.Element {
    const {hidden, show} = textVariant(0.5);

    return (
        <AnimatedDiv initial={hidden}  whileInView={show} viewport={{once: false}}
                     className={"flex flex-col justify-center items-stretch min-w-full py-[2rem] overflow-hidden shadow-md" +
            " rounded-2xl bg-neutral-50 px-4 py-8 " + props.className}>
            {/* Question */}
            <h3 className="flex flex-row justify-start items-start sm:items-center text-2xl font-semibold text-neutral-500">
                {Icons.QUESTION('h-[2rem] w-[2rem] min-h-[2rem] min-w-[2rem] max-h-[2rem] max-w-[2rem]')}
                <span className="ml-2 cursor-pointer">{props.question}</span>
            </h3>

            {/* Answer */}
            <div className="text-lg text-neutral-400 py-4 ">{props.answer}</div>
        </AnimatedDiv>
    );
}
