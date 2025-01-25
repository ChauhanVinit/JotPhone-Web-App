"use client";
import React from "react";
import Image from "next/image";
import industires from "../data/industires";
import IndustryCarouselItem from "./utils/IndustryCarouselItem";
import { Splide, SplideSlide } from "@splidejs/react-splide";
const Industry = () => {

  return (
    <div className="container mx-auto  lg:p-10 p-4  xl:p-[60px]  2xl:p-20 mt-4">
      <div className="grid grid-cols-12 gap-4 xl:gap-0  ">
        <div className="2xl:col-span-7 xl:col-span-6 col-span-12">
          <h3 className=" text-xl lg:text-2xl lg:leading-8 xl:text-3xl xl:leading-10 font-bold text-[#061237] max-w-[303px]">
            Trusted By Industry Leaders
          </h3>
        </div>
        <div className="2xl:col-span-5 xl:col-span-6 col-span-12">
          <Splide
            aria-label="My Favorite Images"
            options={{
              type: 'loop',
              perMove: 1,
              rewind: true,
              perPage: 1,
              gap: '24px',
              autoplay: true,
              arrows: false,
              interval: 3000,
              pagination: false,
            }}
            className="dots:absolute dots:right-auto dots:left-[calc(100%+80px)] dots:p-0 dots:min-w-[300px] dots:justify-start dot:!bg-[#DDE6F0] dot:w-2.5 dot:h-2.5 activeDot:scale-100 activeDot:!bg-[#9DBBC2] dot:shadow-none dot:outline-none"
          >
            {industires.map((item) => (
              <SplideSlide key={item.id}>
                <IndustryCarouselItem item={item} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
      {/* invisible-scroll overflow-x-auto */}
      <div className="flex xl:flex-nowrap flex-wrap items-center xl:justify-between justify-center mt-12 rounded-[20px] gap-3 py-4 bg-[#F6F6F6] xl:overflow-x-auto invisible-scroll">
        {industires.map((industry, index) => (
          <div className="inline-flex mx-6 min-w-[120px] max-h-10" key={index}>
            <Image src={industry.comapnyLogo} className="w-full h-auto aspect-[16/4]" alt={'industryLogo'} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Industry;