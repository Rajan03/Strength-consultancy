import Image from "next/image";
import {HERO_IMG} from "@/constant/Images";

export default function Testimonials() {

    return (
        <>
            <div className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            What Our Customers Are Saying
                        </h2>
                        <p className="mt-4 text-lg text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum
                            cupiditate veritatis in, accusamus quisquam.
                        </p>
                    </div>
                    <div className="mt-16 space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <Image className="h-12 w-12 rounded-full" alt={'Jane Doe'} width={48} height={48}
                                       src={HERO_IMG}/>
                            </div>
                            <div className="ml-4">
                                <div className="text-lg font-medium text-gray-900">Jane Doe</div>
                                <div className="text-base text-gray-500">CEO, Acme Inc.</div>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere ante velit, sed
                                tincidunt justo vulputate at. Nulla facilisi. Nulla gravida lacus quis libero rhoncus,
                                in imperdiet quam mattis. Vestibulum eu dolor pretium, sagittis magna sit amet,
                                consectetur dolor. Aenean bibendum, nunc in blandit feugiat, nisi nisl vulputate purus,
                                quis vehicula enim tellus vel est. Aliquam congue malesuada risus, vel efficitur dolor
                                volutpat sit amet. Praesent at leo semper, commodo mauris eu, pellentesque lectus. Nam
                                pretium malesuada massa vel pharetra. Nulla facilisi. Donec vel purus vel est volutpat
                                dignissim nec eu nulla.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
