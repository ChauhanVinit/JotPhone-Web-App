"use client";
import React from "react";
const Tag = ({className,title }) => {
  return (
    <>
      <span className={` text-sm leading-normal font-semibold text-[#1355FF] py-2 px-4 rounded-[100px] border border-[#B6CAFF80]/50 uppercase bg-[linear-gradient(to_right,_rgba(226,_234,_255,_0.7)_0%,_rgba(226,_234,_255,_0.7)_100%)] ${className}  `}>
        {title}
      </span>
    </>
  );
};

export default Tag;
