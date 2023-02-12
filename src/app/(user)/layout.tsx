import React from "react";
import {Montserrat} from '@next/font/google';
import {Navbar} from "@/components";
import '@/styles/globals.css';

const montserrat = Montserrat({subsets: ['latin']})

export default function RootLayout({children}: { children: React.ReactNode }) {

    return (
        <html lang="en" className={"text-[40%] sm:text-[50%] xl:text-[68.5%]"}>
        <head/>
        <body className={montserrat.className + ' scrollbar-hide'}>
        <div className={'flex flex-col justify-start items-stretch min-h-screen h-screen w-full container m-auto px-10'}>
            <Navbar/>
            {children}
        </div>
        </body>
        </html>
    )
}
