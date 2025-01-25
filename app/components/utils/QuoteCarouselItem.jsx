import React from 'react'
import quoteSign from "@/public/Quotation.svg";
import Image from 'next/image';
const QuoteCarouselItem = ({ item }) => {
    const { quoteBanner, quoteText, quotedBy = {} } = item; // Use an empty object as a fallback
    const { logo = '', name = 'Unknown', designation = 'Unknown' } = quotedBy; // Default fallback values
    return (
        <div className='basis-1/2 xl:p-6 p-3 rounded-3xl bg-[linear-gradient(to_bottom,_rgba(241,_235,_255,_0.7)_0%,_rgba(234,_251,_251,_0.7)_100%)]'>
            <div className="relative">
                <Image
                    src={quoteBanner}
                    className="w-full h-auto"
                    alt="qbanner"
                />
                <div className="absolute -bottom-[18px] left-[10px] w-14 h-[52px] inline-flex items-center justify-center rounded-2xl bg-[#33D6D6]">
                    <Image
                        src={quoteSign}
                        className="w-6 h-auto"
                        alt="quotation"
                    />
                </div>
            </div>
            <p className="mt-6 text-xl text-black font-normal">
                {quoteText}
            </p>
            <div className="flex items-center gap-2 mt-6">
                {logo && (
                    <Image
                        className="w-10 h-10"
                        src={logo}
                        alt="ReviewImageOne"
                    />
                )}
                <div>
                    <h3 className="text-base font-semibold text-black">
                        {name}
                    </h3>
                    <p className="mt-[2px] text-xs font-normal text-black">
                        {designation}
                    </p>
                </div>
            </div>
        </div>
    );
};


export default QuoteCarouselItem