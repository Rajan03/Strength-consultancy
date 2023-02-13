import {SectionHeading} from "@/components";
import {StepCard} from "@/components";

type Props = {
    heading: string;
    subHeading: string;
    steps: {
        title: string;
        icon: (className: string) => JSX.Element,
        description: string
    }[]
}
export default function HowItWorks(props: Props): JSX.Element {
    return (
        <div className="flex flex-col justify-start items-stretch min-w-full min-h-screen py-20 mt-10 gap-[8rem]">

            {/* Heading */}
            <SectionHeading heading={props.heading} description={props.subHeading}/>

            {/* Content */}
            <div className="flex flex-col lg:flex-row justify-around items-center gap-[8rem]">
                {props.steps.map((step, index) => (
                    <StepCard description={step.description} icon={step.icon} stepCount={index + 1}
                              title={step.title} key={index}/>
                ))}
            </div>
        </div>
    );
}
