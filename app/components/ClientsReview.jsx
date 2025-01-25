import React from "react";
import Tag from "./Tag";
import Heading from "./Heading";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import QuoteCarouselItem from "./utils/QuoteCarouselItem";
import sayings from "../data/quotesByPeople";

const ClientsReview = () => {

  return (
    <div className="2xl:container mx-auto 2xl:p-14 xl:p-10 p-5 rounded-[32px] bg-gradient-to-b from-[#F5F0FF] via-[#FFFFFF]/71 to-[#FFFFFF]">
      <div className="grid items-center grid-cols-12 xl:gap-20 gap-10">
        <div className="2xl:col-span-9 xl:col-span-8 col-span-12">
          <Splide
            aria-label="My Favorite Images"
            options={{
              type: 'loop',
              perMove: 1,
              rewind: true,
              perPage: 2,
              gap: '24px',
              autoplay: true,
              arrows: false,
              interval: 2000,
              pagination: true,
              breakpoints: {
                1280: { perPage: 1 },
                0: { pagination: false }
              },
            }}
            className="dots:absolute dots:right-auto dots:left-[calc(100%+80px)] dots:p-0 dots:min-w-[300px] dots:justify-start dot:!bg-[#DDE6F0] dot:w-2.5 dot:h-2.5 activeDot:scale-100 activeDot:!bg-[#9DBBC2] dot:shadow-none dot:outline-none"
          >
            {sayings.map((item) => (
              <SplideSlide key={item.id}>
                <QuoteCarouselItem item={item} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="2xl:col-span-3 xl:col-span-4 col-span-12">
          <Tag title={"Clients review"} />
          <Heading title={"What Our Customers Are Saying"} />
          <p className="mt-4 text-lg leading-8 font-normal text-[#374049]">
            Hear how businesses like yours are thriving with our platform.
          </p>
          <button className="min-w-[164px] mt-8 px-6 py-4 rounded-2xl bg-livi hover:bg-vi smooth text-white text-base font-semibold">
            See all reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientsReview;
