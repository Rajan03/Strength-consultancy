import {SectionHeading, Slider} from "@/components";

type Props = {
    heading: string;
    subHeading: string;
    testimonials: {
        name: string;
        company: string;
        description: string;
    }[]
}

export default function Testimonials(props: Props) {
    const {heading, subHeading, testimonials} = props;

    return (
        <>
            <div className="min-w-full py-[10rem]">
                {/* Heading */}
                <SectionHeading heading={heading} description={subHeading}/>

                {/* Content */}
                <div className="max-w-7xl mx-auto">
                    <Slider testimonials={testimonials} className={'mt-[4rem]'}/>
                </div>
            </div>
        </>
    )
}
