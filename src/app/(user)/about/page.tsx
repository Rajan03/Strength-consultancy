import {PageTitle, SectionHeading, StepCard, OfferCard} from "@/components";
import {AboutUs} from "@/constant/data";

export default function About(): JSX.Element {
    const {heading, subHeading, ourApproach, whatWeOffer} = AboutUs
    return (
        <>
            {/* Page title */}
            <div className="mb-60 min-h-[calc((100%_-_96px)/2)] flex flex-col justify-around items-center gap-y-50">
                <PageTitle heading={heading} subHeading={subHeading} className={""}/>
            </div>

            {/* Our Approach */}
            <div className="mb-60 flex flex-col justify-start items-center gap-y-50 mt-[7rem]">
                <SectionHeading heading={ourApproach.heading} description={ourApproach.subHeading}/>

                <div className="flex flex-col lg:flex-row gap-x-9 gap-y-20 justify-between items-center w-full mt-[9rem]">
                    {ourApproach.steps.map((step, index) => (
                        <div key={index} className={"bg-neutral=50 shadow-xl p-4 cursor-pointer rounded-lg"}>
                            <StepCard title={step.title} icon={step.icon} description={step.description}/>
                        </div>
                    ))}
                </div>
            </div>

            {/* What we offer */}
            <div className="mb-60 flex flex-col justify-start items-center gap-y-50 mt-[10rem]">
                <SectionHeading heading={whatWeOffer.heading} description={whatWeOffer.subHeading}/>

                <div className="flex flex-col gap-y-32 justify-start items-center w-full mt-[9rem]">
                    {whatWeOffer.cards.map((c, i) =>
                        <OfferCard key={c.id} {...c} className={i % 2 === 0 ? 'lg:flex-row-reverse' : ''}/>)}
                </div>
            </div>
        </>
    )
}
