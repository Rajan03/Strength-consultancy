import React from "react";
import {Montserrat} from '@next/font/google';
import {Navbar} from "@/components";
import Image from "next/image";
import '@/styles/globals.css';
import {BACKGROUND_JPG} from "@/constant/Images";

const montserrat = Montserrat({subsets: ['latin']})

export default function RootLayout({children}: { children: React.ReactNode }) {

    return (
        <html lang="en" className={"text-[40%] sm:text-[50%] xl:text-[68.5%]"}>
        <head/>
        <body className={montserrat.className + ' scrollbar-hide'}>
        <div className={'flex flex-col justify-start items-stretch min-h-screen h-screen w-full container mx-auto px-10'}>
            <Image src={BACKGROUND_JPG} alt={'bg'} priority className={'absolute min-h-screen top-0 left-0 right-0 ' +
                'max-h-full min-w-full object-cover z-[-1] bg-top'}/>
            <Navbar/>
            {children}
        </div>
        </body>
        </html>
    )
}
