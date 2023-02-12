import React from "react";
import Link from "next/link";
import Image from "next/image";
import {LOGO_IMG} from "@/constant/Images";
import {NavData} from "@/constant/data";

export default function Navbar(): JSX.Element {

	return (
		<nav className="bg-transparent min-h-[50px] w-full flex justify-between items-center  m-auto
		pt-[2rem] sticky top-0 z-20">
			{/*	LOGO */}
			<Link href={'/'}>
				<Image src={LOGO_IMG} alt="logo" width={100} height={50} className="cursor-pointer max-w-[7rem]"/>
			</Link>

			{/*	NAV LINKS */}
			<ul className="flex items-center space-x-[3rem]">
				{NavData.map((link, index) => (
					<li key={index} className="cursor-pointer text-3xl text-primary-800 font-semibold">
						<Link href={link.route}>{link.name}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
