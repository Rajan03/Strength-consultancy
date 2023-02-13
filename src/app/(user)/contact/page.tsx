import {ContactData} from "@/constant/data";

export default function Contact(): JSX.Element {
    const {heading, subHeading, card, faq, form} = ContactData
    return (
        <>
            <div className={"h-1/2 flex flex-col gap-y-8 justify-center items-center"}>
                <h1 className={"text-6xl font-bold text-primary-800"}>
                    {heading}
                </h1>
                <p className={"text-3xl lg:text-2xl text-primary-500"}>
                    {subHeading}
                </p>
            </div>

        </>
    )
}
