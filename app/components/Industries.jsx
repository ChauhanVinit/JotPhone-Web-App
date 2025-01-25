import React from "react";
import Tag from "./Tag";
import Heading from "./Heading";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import ECommerce from "@/public/E-commerce.svg";
import Healthcare from "@/public/Healthcare.svg";
import Finance from "@/public/Finance.svg";
import RealEstate from "@/public/Real-Estate.svg";
import CustomerSupport from "@/public/Customer-Support.svg";
import media1 from "@/public/Industry-image-01.svg";
import Image from "next/image";

const indList = [
  {
    tabName: 'E-commerce',
    tabIcon: ECommerce,
    tabContent: {
      mega: {
        media: media1,
        description: 'Create superior customer experiences with integrated voice and SMS communications.'
      },
      bullets: [
        {
          title: 'Enhance Customer Engagement',
          text: 'Reach out to prospects and customers through calls, texts, and even emails.'
        },
        {
          title: 'Accelerate query resolution',
          text: 'Speed up query resolution with efficient inbound call management.'
        },
        {
          title: 'Deliver Real-Time',
          text: 'Refined communication processes and streamlined operations to achieve greater efficiency and performance.'
        },
      ]
    },
  },
  {
    tabName: 'Healthcare',
    tabIcon: Healthcare,
    tabContent: {
      mega: {
        media: media1,
        description: 'Create superior customer experiences with integrated voice and SMS communications.'
      },
      bullets: [
        {
          title: 'Enhance Customer Engagement',
          text: 'Reach out to prospects and customers through calls, texts, and even emails.'
        },
        {
          title: 'Accelerate query resolution',
          text: 'Speed up query resolution with efficient inbound call management.'
        },
        {
          title: 'Deliver Real-Time',
          text: 'Refined communication processes and streamlined operations to achieve greater efficiency and performance.'
        },
      ]
    },
  },
  {
    tabName: 'Finance',
    tabIcon: Finance,
    tabContent: {
      mega: {
        media: media1,
        description: 'Create superior customer experiences with integrated voice and SMS communications.'
      },
      bullets: [
        {
          title: 'Enhance Customer Engagement',
          text: 'Reach out to prospects and customers through calls, texts, and even emails.'
        },
        {
          title: 'Accelerate query resolution',
          text: 'Speed up query resolution with efficient inbound call management.'
        },
        {
          title: 'Deliver Real-Time',
          text: 'Refined communication processes and streamlined operations to achieve greater efficiency and performance.'
        },
      ]
    },
  },
  {
    tabName: 'Real Estate',
    tabIcon: RealEstate,
    tabContent: {
      mega: {
        media: media1,
        description: 'Create superior customer experiences with integrated voice and SMS communications.'
      },
      bullets: [
        {
          title: 'Enhance Customer Engagement',
          text: 'Reach out to prospects and customers through calls, texts, and even emails.'
        },
        {
          title: 'Accelerate query resolution',
          text: 'Speed up query resolution with efficient inbound call management.'
        },
        {
          title: 'Deliver Real-Time',
          text: 'Refined communication processes and streamlined operations to achieve greater efficiency and performance.'
        },
      ]
    },
  },
  {
    tabName: 'Customer Support',
    tabIcon: CustomerSupport,
    tabContent: {
      mega: {
        media: media1,
        description: 'Create superior customer experiences with integrated voice and SMS communications.'
      },
      bullets: [
        {
          title: 'Enhance Customer Engagement',
          text: 'Reach out to prospects and customers through calls, texts, and even emails.'
        },
        {
          title: 'Accelerate query resolution',
          text: 'Speed up query resolution with efficient inbound call management.'
        },
        {
          title: 'Deliver Real-Time',
          text: 'Refined communication processes and streamlined operations to achieve greater efficiency and performance.'
        },
      ]
    },
  },
]

const Industries = () => {
  return (
    <div className="2xl:container mx-auto xl:p-20 p-4">
      <Tag title={"Industries"} />
      <Heading title={"Built for Every Industry, Tailored to Your Needs"} />
      <p className="mt-4 text-lg leading-8 font-normal text-[#374049]">
        Our platform adapts to businesses across sectors to deliver unmatched
        efficiency.
      </p>

      <div className="mt-20">
        <TabGroup>
          <TabPanels className="mt-3">
            {indList.map(({ tabContent }, tabIndex) => (
              <TabPanel
                key={tabIndex}
                className="rounded-xl bg-white/5 xl:p-3 p-0"
              >
                <div className="grid grid-cols-12 items-center gap-6">
                  <div className="xl:col-span-7 col-span-12 relative">
                    <Image
                      src={tabContent.mega.media}
                      className="w-full h-auto"
                      alt="Industry Image"
                    />
                    <div className="absolute top-0 left-0 w-full h-full xl:rounded-3xl rounded-xl bg-[linear-gradient(to_bottom,rgba(196,196,196,0)_0%,rgba(119,51,255,1)_100%)] p-6">
                      <p className="absolute bottom-6 left-0 px-5 text-white text-[27px] leading-9 font-semibold">
                        {tabContent.mega.description}
                      </p>
                    </div>
                  </div>
                  <div className="xl:col-span-5 col-span-12 flex flex-col gap-6">
                    {tabContent.bullets.map((bullet, bulletIndex) => (
                      <div
                        key={bulletIndex}
                        className="inline-flex gap-4 py-4 xl:px-4 px-2"
                      >
                        <div className="px-2">
                          <div className="p-3 rounded-full bg-[#EDF5FF]">
                            <div className="w-[9px] h-[9px] bg-[#33D6D6] rounded-full"></div>
                          </div>
                          <div className="mt-2 mx-auto border border-[#99EBEB] w-[1px] h-[calc(100%-41px)]"></div>
                        </div>
                        <div className="block">
                          <h3 className="relative mb-2 text-xl text-black font-semibold tracking-[-0.5px]">
                            {bullet.title}
                          </h3>
                          <p className="max-w-[370px] 2xl:text-base text-sm text-[#374049] font-normal">
                            {bullet.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabPanel>
            ))}
          </TabPanels>

          <TabList className="flex xl:gap-4 gap-2 2xl:mt-20 xl:mt-10 mt-6 xl:mb-0 mb-8">
            {indList.map(({ tabName, tabIcon }, tabIndex) => (
              <Tab
                key={tabIndex}
                className="h-[72px] inline-flex flex-1 items-center lg:justify-start justify-center lg:gap-3.5 gap-0 whitespace-nowrap rounded-md md:px-4 px-1 py-2 border-b-2 border-[#E7E7E7] 2xl:text-xl xl:text-base text-sm font-semibold text-[#171A1D] focus-visible:outline-none data-[selected]:bg-background data-[selected]:text-[#7733FF] data-[selected]:border-[#7733FF]"
              >
                <Image src={tabIcon} alt={tabIcon} />
                <span className="lg:block hidden">
                  {tabName}
                </span>
              </Tab>
            ))}
          </TabList>
        </TabGroup>
      </div>
    </div>
  );
};

export default Industries;
