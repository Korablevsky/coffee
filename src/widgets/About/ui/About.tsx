import React from "react";
import Image from "next/image";
import { aboutPageType } from "../types/aboutPageType";
import AboutTitle from '@/shared/ui/aboutTitle'

export  function About({
    dataAboutPage,
    className,
}: {
    dataAboutPage: aboutPageType;
    className: string;
}) {
    const { title, firstText, secondText } = dataAboutPage;

    return (
        <section
            className={`flex justify-center items-center flex-col ${className}`}
        >
           <AboutTitle title={title}/>
            <p className="mt-[40px] text-[14px]  text-center">{firstText}</p>
            <p className="mt-[15px] text-[14px]  text-center">{secondText}</p>
        </section>
    );
}
