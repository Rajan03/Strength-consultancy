import {FooterData} from "@/constant/data";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const {logo, links, location} = FooterData;

    return (
        <footer className={'flex flex-row justify-center items-stretch min-h-32'}>

            <div className={'flex-1 flex flex-row justify-between items-center p-16 bg-gradient-to-l ' +
                'from-primary-300 to-primary-100 min-w-[100vw] relative left-0'}>
                {/* LOGO */}
                <Image src={logo} alt={'logo'} className={'w-[8rem] h-[12rem]'}/>

                {/* LINKS */}
                <ul className={'hidden sm:flex flex-row space-x-16'}>
                    {links.map((link, index) => (
                        <li key={link.name + index} className={'text-2xl text-neutral-700 font-medium'}>
                            <Link href={link.route}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* LOCATION */}
                <div className={'flex flex-col text-xl text-neutral-700'}>
                    <p>{location.address}</p>
                    <p>{location.phone}</p>
                    <p>{location.mail}</p>
                </div>

                <div className={'text-lg text-neutral-50 flex flex-row items-center gap-6 absolute bottom-[10px]' +
                    ' right-[10px]'}>
                    <p>© 2023 - All Rights Reserved</p>
                    <p className={'flex flex-row items-center'}>
                        <span>Developed by &nbsp;</span>
                        <a href="https://github.com/Rajan03" target="_blank" rel="noreferrer">
                            Rajan Verma
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
