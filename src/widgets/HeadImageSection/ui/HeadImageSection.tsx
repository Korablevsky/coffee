import React from "react";
import { HeadImageSectionType } from "../types/HeadImageSectionType";

export  function HeadImageSection({
    title,
    className,
}: HeadImageSectionType) {
    return (
        <section
            className={`bg-center bg-no-repeat max-[800px]:pt-[90px] pt-[130px] pb-[84px] max-[800px]:pb-[44px] bg-cover ${className}`}
        >
            <h1 className=" text-[40px] max-[800px]:text-[32px] text-white text-center">{title}</h1>
        </section>
    );
}
