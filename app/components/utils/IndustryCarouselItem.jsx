import React from 'react'
import StarRating from './StarRating'
import Image from 'next/image'

const IndustryCarouselItem = ({ item }) => {
    return (
        <div className="flex   items-center gap-12">
            <div>
                <p className=" text-sm sm:text-base font-normal text-black">
                    {item.description}
                </p>
            </div>
            <div className="flex flex-col gap-1.5">
                <Image
                    src={item.comapnyLogo}
                    className="h-7 min-w-[102px]"
                    alt="Company Logo"
                />
                <StarRating averageRate={item.rating} />
            </div>
        </div>
    )
}

export default IndustryCarouselItem