"use client";

import ClientsReview from "./components/ClientsReview";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Industries from "./components/Industries";
import Industry from "./components/Industry";
import Heading from "./components/Heading";
import Layer from "@/public/Layer-1.svg";
import Image from "next/image";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <Hero />
      <Industry />
      <Features />
      <Industries />
      <ClientsReview />
      <div className="2xl:container mx-auto 2xl:p-20 xl:p-12 lg:p-9 p-5">
        <div className="relative 2xl:p-20 xl:p-14 lg:p-10 p-9 !pb-20 text-center 2xl:rounded-[50px] rounded-3xl bg-[linear-gradient(to_right,_rgba(228,_246,_250,_1)_0%,_rgba(255,_253,_236,_0.8)_45%,_rgba(255,_204,_255,_0.4)_75%,_rgba(228,_246,_250,_0.9)_91%)]">
          <Heading
            className={"text-black font-semibold mt-0 tracking-[-1px]"}
            title={"Ready to Elevate Your Communication?"}
          />
          <p className="mt-4 text-base font-normal text-black">
            Experience seamless communication and teamwork like never before.
          </p>
          <div className="mt-8 inline-flex flex-wrap items-center gap-4">
            <button className="min-w-[202px] px-6 py-4 rounded-2xl bg-livi text-base hover:bg-vi smooth font-semibold text-white ">
              Start Your Free Trial
            </button>
            <button className="px-6 rounded-2xl text-base text-[#1A1A1A] font-semibold border border-[#666666] bg-white hover:bg-livi hover:border-livi hover:text-white smooth h-14 ">
              Book A Demo
            </button>
          </div>
          <Image
            src={Layer}
            className="absolute left-1/2 xl:bottom-[10px] bottom-4 lg:translate-x-0 -translate-x-[15vw] w-[196px] xl:h-[58px] h-12"
            alt="Layer"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}