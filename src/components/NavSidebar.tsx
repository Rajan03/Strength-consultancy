import Link from "next/link";
import {NavData} from "@/constant/data";
import {XCircleIcon} from "@heroicons/react/20/solid";

export default function NavSidebar(props: {onClose: () => void}): JSX.Element {
    return <>
        <div className={"fixed top-0 right-0 h-full w-full bg-primary-200 flex flex-col gap-y-10" +
            " justify-around items-center z-50"}>

            {/* Close Button */}
            <div className={"flex flex-row justify-end items-center w-full px-10"}>
                <button onClick={props.onClose} className={"text-3xl lg:text-2xl text-neutral-50" +
                    " font-regular"}>
                    <XCircleIcon className={'h-20 w-20'} />
                </button>
            </div>

            {/* NavLinks */}
            <div className={"flex flex-col gap-y-32 justify-start items-center"}>
                {NavData.map((link, index) => (
                    <Link href={link.route} key={index} onClick={props.onClose} className={"text-5xl lg:text-2xl" +
                        " text-neutral-50 font-semibold"}>
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Social Links */}
            <div className={"flex flex-row gap-10 justify-start items-center"}>
                <Link href={'/'} className={"text-3xl lg:text-2xl text-neutral-50 font-regular"}>
                    Facebook
                </Link>
                <Link href={'/'} className={"text-3xl lg:text-2xl text-neutral-50 font-regular"}>
                    Instagram
                </Link>
                <Link href={'/'} className={"text-3xl lg:text-2xl text-neutral-50 font-regular"}>
                    Twitter
                </Link>
            </div>

        </div>
    </>
}
