"use client"
import React from "react";

const Heading = ({title,className}) => {
  return (
    <>
      <h1 className={`mt-4  2xl:text-[40px] xl:text-4xl text-3xl  2xl:leading-[48px] font-bold  text-[#222A5B] ${className}  `}>
        {title}
      </h1>
    </>
  );
};

export default Heading;
