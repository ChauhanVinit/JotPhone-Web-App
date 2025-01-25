import React from "react";
import Image from "next/image";
import brand from "@/public/logo.svg";
import facebook from "@/public/facebook.svg";
import X from "@/public/X.svg";
import Linkedin from "@/public/Linkedin.svg";
import youtube from "@/public/youtube.svg";
import insta from "@/public/insta.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="2xl:container mx-auto px-20 pt-20 pb-[60px] rounded-[32px] bg-[linear-gradient(to_bottom,_rgba(240,_246,_255,_1)_0%,_rgba(255,_255,_255,_1)_71%)] ">
      <div className=" flex flex-col items-center justify-center pb-10 border-b border-[#212121]/20">
        <Image className="h-[44px] w-auto " src={brand} alt={"brandImage"} />
        <p className=" mt-6 mb-10 text-sm leading-6 font-normal text-[#374049]">
          The Unified Platform for Business Communication
        </p>

        <div className=" flex items-center gap-3">
          <Link
            href={""}
            target="_blank"
            className=" w-8 h-8 inline-flex justify-center bg-white rounded-[9.14px] items-center border border-[#8F9AB3]"
          >
            <Image
              src={facebook}
              className=" w-[13.71px] h-[13.71px]"
              alt="Facebook"
            />
          </Link>
          <Link
            href={""}
            target="_blank"
            className=" w-8 h-8 inline-flex justify-center bg-white rounded-[9.14px] items-center border border-[#8F9AB3]"
          >
            <Image
              src={youtube}
              className=" w-[13.71px] h-[13.71px]"
              alt="youtube"
            />
          </Link>
          <Link
            href={""}
            target="_blank"
            className=" w-8 h-8 inline-flex justify-center bg-white rounded-[9.14px] items-center border border-[#8F9AB3]"
          >
            <Image src={X} className=" w-[13.71px] h-[13.71px]" alt="X" />
          </Link>
          <Link
            href={""}
            target="_blank"
            className=" w-8 h-8 inline-flex justify-center bg-white rounded-[9.14px] items-center border border-[#8F9AB3]"
          >
            <Image
              src={Linkedin}
              className=" w-[13.71px] h-[13.71px]"
              alt="Linkedin"
            />
          </Link>
          <Link
            href={""}
            target="_blank"
            className=" w-8 h-8 inline-flex justify-center bg-white rounded-[9.14px] items-center border border-[#8F9AB3]"
          >
            <Image
              src={insta}
              className=" w-[13.71px] h-[13.71px]"
              alt="insta"
            />
          </Link>
        </div>
      </div>

      <div className=" pt-6 flex xl:flex-row flex-col gap-3 items-center justify-between">
        <p className=" font-semibold text-[13px] leading-[18px] text-[#344054]">
          All Right Reserved by JotPhone Copyright ©2025
        </p>
        <div className=" inline-flex items-center gap-8">
          <Link
            href={""}
            target="_blank"
            className="font-semibold text-[13px] leading-[18px] text-[#344054] relative "
          >
            Terms
          </Link>
          <Link
            href={""}
            target="_blank"
            className="font-semibold text-[13px] leading-[18px] text-[#344054] relative before:absolute before:top-2 before:-left-4 before:w-1 before:h-1 before:rounded-[100px] before:bg-[#344054]"
          >
            Privacy
          </Link>
          <Link
            href={""}
            target="_blank"
            className="font-semibold text-[13px] leading-[18px] text-[#344054] relative before:absolute before:top-2 before:-left-4 before:w-1 before:h-1 before:rounded-[100px] before:bg-[#344054]"
          >
            Security
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
