import React from "react";
import Tag from "./Tag";
import Heading from "./Heading";
import smartCall from "@/public/Smart-Call.svg";
import unifiedMessaging from "@/public/Unified-Messaging.svg";
import powerfulDialer from "@/public/Powerful-Dialer.svg";
import aIDriven from "@/public/AI-Driven.svg";
import teamCollaboration from "@/public/Team-Collaboration.svg";
import Analytics from "@/public/Analytics.svg";
import Image from "next/image";
const Features = () => {
  const featureData = [
    {
      id: 1,
      videoPath: "/SmartCall-Management.mp4",
      icon: smartCall,
      title: "Smart Call Management",
      description:
        "Efficient routing, recording, and logging for better decision-making.",
      span: "xl:col-span-6 col-span-12  -mt-[80px] xl:-mt-[100px]  2xl:-mt-[120px]",
    },
    {
      id: 2,
      videoPath: "/Unified-Messaging.mp4",
      icon: unifiedMessaging,
      title: "Unified Messaging",
      description: "Seamlessly handle SMS, emails, WhatsApp in one interface. ",
      span: "xl:col-span-3  md:col-span-6 col-span-12  -mt-0 xl:-mt-[100px] 2xl:-mt-[120px]",
    },
    {
      id: 3,
      videoPath: "/Powerful-Dialer.mp4",
      icon: powerfulDialer,
      title: "Powerful Dialer",
      description: "Dial smarter with Power, Dynamic & 10-line Predictive ",
      span: "xl:col-span-3 md:col-span-6  col-span-12  mt-0 xl:-mt-[100px] 2xl:-mt-[120px]",
    },
    {
      id: 4,
      icon: aIDriven,
      title: "AI-Driven Automation",
      description:
        "Efficient routing, recording, and logging for better decision-making.",
      span: "md:col-span-4 col-span-12 !bg-[#FFFFFF]/40",
    },
    {
      id: 5,
      icon: teamCollaboration,
      title: "Team Collaboration",
      description:
        "Seamlessly handle SMS, emails, WhatsApp,and more in one interface. ",
      span: "md:col-span-4 col-span-12 !bg-[#FFFFFF]/40",
    },
    {
      id: 6,
      icon: Analytics,
      title: "Detailed Analytics",
      description:
        "Dial smarter with Power, Dynamic & 10-line Predictive dialers.",
      span: "md:col-span-4 col-span-12 !bg-[#FFFFFF]/40",
    },
  ];

  return (
    <div className="container mx-auto   ">
      <div className=" text-center  pt-20  2xl:px-20 xl:px-[60px] lg:px-10 px-4 pb-14 ">
        <Tag title={"Features"} />
        <Heading title={"Tools That Transform Your Communication"} />
        <p className=" mt-4 text-base lg:text-lg lg:leading-8 font-normal text-[#374049]">
          Built to streamline your workflows, connect your team,
          <br />
          and enhance customer experiences.
        </p>
      </div>

      <div className=" lg:p-10 p-4  xl:p-[60px]  2xl:p-20 bg-white rounded-[40px]">
        <div className=" grid grid-cols-12 lg:gap-x-6 gap-x-3 lg:gap-y-8 gap-y-5 p-10 bg-[linear-gradient(180.86deg,_#DAF5F5_6.16%,_#FFFFFF_99.26%)] rounded-[32px]">
          {featureData.map((item, index) => (
            <div
              key={index}
              className={`${item.span} bg-white border border-[#EAEAEA] rounded-3xl p-4   `}
            >
              {item.videoPath && (
                <video
                  className={`w-auto  min-h-[171px] mb-4 `}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={item.videoPath} type="video/mp4" />
                </video>
              )}
              <Image src={item.icon} className=" w-10 h-10" alt={item.title} />
              <h3 className="mt-4  lg:text-lg text-base  lg:!leading-[22px] text-[#171A1D] font-bold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm lg:text-base font-normal text-[#374049]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
