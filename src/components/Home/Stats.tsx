import {StaticImageData} from "next/image";
import {STATS_BG} from "@/constant/Images";
import StatProgress from "../Cards/StatProgress";

type Props = {
    image: StaticImageData,
    heading: string,
    stats: {
        title: string,
        percent: number,
        description: string
    }[],
    ourData: {
        consultants: {
            count: string,
            text: string
        },
        hours: {
            count: string,
            text: string
        },
        description: string
    },
}

export default function Stats(props: Props): JSX.Element {

    return (
        <>
            <div className="flex flex-col justify-start items-center min-w-full min-h-screen gap-[8rem]">
                <div className="h-screen w-screen relative py-20 bg-center bg-cover
                                bg-no-repeat bg-fixed overflow-hidden flex flex-col"
                     style={{backgroundImage: `url(${STATS_BG.src})`}}>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-primary-600 bg-opacity-70 blur-lg z-[0]"></div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-start items-center relative gap-[4rem] z-10
                                    container m-auto">

                        <div className={"flex-1 flex flex-col justify-around items-start px-[2rem]"}>
                            {/* Stats */}
                            {props.stats.map((stat, index) => (
                                <StatProgress key={index} title={stat.title} percent={stat.percent}
                                              description={stat.description}/>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
