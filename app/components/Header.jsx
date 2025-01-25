"use client";

import Image from "next/image";
import brand from '@/public/logo.svg'
import Link from "next/link";
import { CrossIcon, MenuIcon } from "../icons/hugeicons";
import { useState } from "react";
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <div className="bg-white lg:min-h-[68px] min-h-0 max-w-[1600px] w-[calc(100%-24px)] fixed z-50 2xl:top-6 xl:top-5 top-3 left-1/2 -translate-x-1/2 flex items-center justify-between lg:rounded-3xl rounded-2xl border border-livi/10 p-2.5 pl-4">
            <Image className={'2xl:h-[44px] xl:h-10 h-8 w-auto'} src={brand} alt={'brandImage'} />
            <div className={`grow flex md:flex-row flex-col items-center justify-between lg:relative absolute top-[calc(100%+8px)] left-0 w-full lg:bg-transparent bg-white lg:rounded-none rounded-2xl lg:border-none border border-livi/10 lg:p-0 p-2.5 smooth ${menuOpen ? 'scale-100' : 'lg:scale-100 scale-0'}`}>
                <div className="inline-flex items-center md:gap-4 gap-2 lg:mx-auto md:flex-row flex-col">
                    <Link href={'www.google.com'} className="py-3 px-3 text-base text-[#1A1A1A] inline-flex items-center justify-center font-bold hover:text-livi smooth">Features</Link>
                    <Link href={'www.google.com'} className="py-3 px-3 text-base text-[#1A1A1A] inline-flex items-center justify-center font-bold hover:text-livi smooth">Industries</Link>
                    <Link href={'www.google.com'} className="py-3 px-3 text-base text-[#1A1A1A] inline-flex items-center justify-center font-bold hover:text-livi smooth">Reviews</Link>
                </div>
                <div className="inline-flex items-center md:flex-row flex-col gap-4 md:pb-0 pb-4">
                    <Link href={'www.google.com'} className="py-3 px-3 text-base text-[#1A1A1A] inline-flex items-center justify-center font-bold hover:text-livi smooth">Login</Link>
                    <Link href={'www.google.com'} className="h-[48px] px-6 text-base text-[#1A1A1A] rounded-2xl border border-[#666] inline-flex items-center justify-center font-bold hover:bg-livi hover:border-livi hover:text-white smooth">Sign Up For Free</Link>
                </div>
            </div>
            <button onClick={handleMenu} type="button" className="lg:hidden inline-flex items-center justify-center px-2">
                {menuOpen
                    ? <CrossIcon color={'#000'} />
                    : <MenuIcon color={'#000'} />
                }
            </button>
        </div>
    )
}

export default Header