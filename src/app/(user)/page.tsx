import React from "react";
import {HomeData} from '@/constant/data';
import {Hero, WhyUs} from '@/components';

export default function Home(): React.ReactNode {
    const {hero, howWeEnhanceEffectiveness, HowItWorks, stats, freeResources} = HomeData;
    return (
        <>
            <Hero {...hero}/>
            <WhyUs {...howWeEnhanceEffectiveness}/>
        </>
    )
}
