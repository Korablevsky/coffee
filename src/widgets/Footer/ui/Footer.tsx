import React from "react";
import Link from "next/link";
import Image from "next/image";

export  function Footer() {
    return (
        <footer className="container text-black	flex flex-col items-center	 mt-[30px] px-[35px] pb-[15px] max-[500px]:hidden">
            <div className="flex items-end">
                <Link href="/">
                    <Image
                        src="/coffeeLogoBlack.svg"
                        width={35}
                        height={35}
                        alt="Logo"
                    />
                </Link>
                <nav className="space-x-7 ">
                    <Link className="" href="/">
                        Coffee house
                    </Link>
                    <Link className="" href="/ourCoffee">
                        Our coffee
                    </Link>
                    <Link className="" href="/forYourPleasure">
                        For your pleasure
                    </Link>
                </nav>
            </div>
            <Image
                className="mt-[20px]"
                src="/Beans_logo_black.svg"
                width={200}
                height={30}
                alt="Been"
            />
        </footer>
    );
}
