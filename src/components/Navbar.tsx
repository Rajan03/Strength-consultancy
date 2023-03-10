'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {LOGO_IMG} from "@/constant/Images";
import {NavData} from "@/constant/data";
import {Bars3BottomLeftIcon} from "@heroicons/react/20/solid";
import NavSidebar from "@/components/NavSidebar";

export default function Navbar(): JSX.Element {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    return (
        <>
            <nav className="bg-transparent w-full flex justify-between items-center mx-auto
		                        pt-[2rem] px-10 container z-20 min-h-[96px] max-h-[96px]">
                {/*	LOGO */}
                <Link href={'/'}>
                    <Image src={LOGO_IMG} alt="logo" width={100} height={50}
                           className="cursor-pointer max-w-[7rem]"/>
                </Link>

                {/*	NAV LINKS */}
                <ul className="hidden lg:flex items-center space-x-[3rem]">
                    {NavData.map((link, index) => (
                        <li key={index} className="cursor-pointer text-3xl lg:text-2xl text-primary-800 font-semibold">
                            <Link href={link.route}>{link.name}</Link>
                        </li>
                    ))}
                </ul>

                {/*	Small Screen Sidebar */}
                <div className="lg:hidden flex flex-col items-center justify-center cursor-pointer"
                     onClick={() => setIsSidebarOpen(p => !p)}>
                    <Bars3BottomLeftIcon className={'w-16 h-16 text-primary-600'}/>
                </div>
            </nav>

            {/*	Sidebar */}
            {isSidebarOpen && (
                <NavSidebar onClose={() => setIsSidebarOpen(p => !p)}/>
            )}
        </>
    )
}
