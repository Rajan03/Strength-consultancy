import {ContactData} from "@/constant/data";
import {NotAloneCard, PageTitle, FaqAccordion} from "@/components";
import {CONTACT_BG} from "@/constant/Images";

export default function Contact(): JSX.Element {
    const {heading, subHeading, card, faq, form} = ContactData
    return (
        <>
            {/* Page title and Card */}
            <div className="min-h-[calc(100%_-_96px)] flex flex-col justify-around items-center">
                {/* Page title */}
                <PageTitle heading={heading} subHeading={subHeading} className={'h-1/2'}/>

                {/* Not alone card */}
                <NotAloneCard {...card} image={CONTACT_BG}/>
            </div>

            {/* FAQ */}
            <div className={"min-h-screen flex flex-col gap-y-24 justify-start items-center pt-[10rem]"}>
                {/* Page Title */}
                <PageTitle heading={faq.heading} subHeading={faq.subHeading} />

                {/* FAQ */}
                <div className="grid grid-cols-2 gap-9 justify-start items-center w-full">
                    {faq.questions.map((q, index) => (
                        <FaqAccordion key={index} question={q.question} answer={q.answer}
                        className={'c-auto h-full'}/>
                    ))}
                </div>
            </div>

            {/* Form */}
            <div className={"min-h-screen flex flex-col gap-y-24 justify-start items-center pt-[10rem]"}>
                {/* Page Title */}
                <PageTitle heading={form.heading} subHeading={form.subHeading} />

                {/* FAQ */}
                <div className="flex flex-col gap-9 justify-start items-center w-full">

                </div>
            </div>
        </>
    )
}
