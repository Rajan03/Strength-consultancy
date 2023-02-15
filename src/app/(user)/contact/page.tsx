import {ContactData} from "@/constant/data";
import {NotAloneCard, PageTitle, FaqAccordion, SectionHeading, ContactForm} from "@/components";
import {CONTACT_BG} from "@/constant/Images";

export default function Contact(): JSX.Element {
    const {heading, subHeading, card, faq, form} = ContactData
    return (
        <div className={'min-h-full flex flex-col justify-start items-stretch gap-y-48'}>
            {/* Page title and Card */}
            <div className="min-h-[calc(100%_-_96px)] flex flex-col justify-around items-center gap-y-50">
                {/* Page title */}
                <PageTitle heading={heading} subHeading={subHeading} className={""}/>

                {/* Not alone card */}
                <NotAloneCard {...card} image={CONTACT_BG} className={""}/>
            </div>

            {/* FAQ */}
            <div className={"flex flex-col gap-y-28 justify-start items-center gap-9"}>
                {/* Page Title */}
                <SectionHeading heading={faq.heading} description={faq.subHeading}/>

                {/* FAQ */}
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 justify-start items-center w-full">
                    {faq.questions.map((q, index) => (
                        <FaqAccordion key={index} question={q.question} answer={q.answer}
                                      className={'c-auto h-full'}/>
                    ))}
                </div>
            </div>

            {/* Form */}
            <div className={"flex flex-col gap-y-24 justify-start items-center gap-9"}>
                {/* Page Title */}
                <SectionHeading heading={form.heading} description={form.subHeading}/>

                {/* Form */}
                <div className="flex flex-col gap-9 justify-start items-center w-full">
                    <ContactForm/>
                </div>
            </div>
        </div>
    )
}
