import {PageTitle, SectionHeading, StepCard} from "@/components";
import {AboutUs} from "@/constant/data";

export default function About(): JSX.Element {
    const {heading, subHeading, ourApproach, whatWeOffer} = AboutUs
    return (
        <div className={'min-h-full flex flex-col justify-start items-center gap-y-60'}>
            {/* Page title */}
            <div className="min-h-[calc((100%_-_96px)/2)] flex flex-col justify-around items-center gap-y-50">
                <PageTitle heading={heading} subHeading={subHeading} className={""}/>
            </div>

            {/* Our Approach */}
            <div className="flex flex-col justify-start items-center gap-y-50 mt-[7rem]">
                <SectionHeading heading={ourApproach.heading} description={ourApproach.subHeading}/>

                <div className="flex flex-col lg:flex-row gap-x-9 gap-y-20 justify-start items-center w-full mt-[9rem]">
                    {ourApproach.steps.map((step, index) => (
                        <div key={index} className={"bg-neutral=50 shadow-xl p-4 cursor-pointer rounded-lg" +
                            " border-[1px] border-neutral-200"}>
                            <StepCard title={step.title} icon={step.icon} description={step.description}/>
                        </div>
                    ))}
                </div>
            </div>

            {/* What we offer */}
            <div className="flex flex-col justify-start items-center gap-y-50 mt-[10rem]">
                <SectionHeading heading={whatWeOffer.heading} description={whatWeOffer.subHeading}/>

                <div className="flex flex-col lg:flex-row gap-x-9 gap-y-20 justify-start items-center w-full mt-[9rem]">

                </div>
            </div>
        </div>
    )
}
