"use client";

import { useState } from "react";
import heroVector from '@/public/heroVector.png'
import Image from "next/image";
import MembersStack from "./MembersStack";
import person1 from '@/public/avatars/Person1.png'
import person2 from '@/public/avatars/Person2.png'
import person3 from '@/public/avatars/Person3.png'
import person4 from '@/public/avatars/Person4.png'
import person5 from '@/public/avatars/Person5.png'
import star from '@/public/star.svg'
const Hero = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [members, setMembers] = useState([
        person1, person2, person3, person4, person5
    ])
    const handleLoadedData = () => {
        setVideoLoaded(true);
    };
    return (
        <div className="relative z-10 min-h-dvh lg:pt-[116px] pt-16">
            <div className="h-[50vh] w-[30vw] rounded-full -translate-x-[10vw] -translate-y-[10vh] bg-[#F2EFC9] blur-[200px] opacity-50 absolute left-0 top-0 -z-[1] block">
            </div>
            <div className="h-[100vh] w-[45vw] rounded-full translate-x-[12vw] -translate-y-[10vh] bg-aqua/10 blur-[200px] opacity-50 absolute right-0 top-0 -z-[1] block">
            </div>
            <div className="h-[50vh] w-[30vw] rounded-full -translate-x-[3vw] bg-[#D0C9F1] blur-[150px] opacity-50 absolute left-0 bottom-0 -z-[1] block">
            </div>
            <div className="container mx-auto  p-4 sm:p-0">
                <div className="grid grid-cols-12  relative gap-4 z-10  ">
                    <div className="col-span-12 lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                        <h1 className="mt-6 lg:mt-28 text-[#301466] text-[27px] sm:text-4xl xl:text-[44px] 2xl:text-[56px] font-extrabold flex flex-col sm:gap-4 gap-1">
                            <span className="leading-none whitespace-nowrap">Modern Communication</span>
                            <div className="inline-flex items-center gap-4 2xl:gap-10">
                                <span className="leading-none whitespace-nowrap">Platform by</span>
                                <video
                                    className={`xl:h-[70px] lg:h-[60px] h-[50px] max-w-[152px] lg:max-w-[270px] xl:w-auto transition-opacity duration-500`}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    onLoadedData={handleLoadedData}
                                >
                                    <source src={'/heroTitleAnimation.mp4'} type="video/mp4" />
                                </video>
                            </div>
                            <span className="leading-none whitespace-nowrap">Like Never Before</span>
                        </h1>
                        <p className="text-black text-base sm:text-xl mt-8 font-medium">Manage Inbound and Outbound Calls, Messaging, Voicemails, and Team Collaboration—All in One Place.</p>
                        <div className="inline-flex mt-8 mb-14 bg-white border border-[#D3C7FB] p-1 lg:rounded-[20px] rounded-2xl">
                            <input className="w-full max-w-max sm:max-w-[450px] bg-transparent px-2 sm:px-6 lg:text-base text-sm font-normal placeholder:text-[#676767] text-dark !outline-none" type="text" placeholder="Work email address" />
                            <button className="whitespace-nowrap bg-livi text-white lg:text-base text-sm font-bold px-3 sm:px-6 2xl:min-h-[56px] min-h-[48px] lg:rounded-2xl rounded-xl hover:bg-vi smooth">Sign Up For Free</button>
                        </div>
                        <div className=" flex items-center gap-3 sm:gap-6 sm:flex-row flex-col ">
                            <MembersStack members={members} />
                            <div className="block">
                                <p className=" text-sm sm:text-base text-black font-medium leading-none">Over <span className="text-livi text-lg  sm:text-2xl font-bold px-1">42k</span> satisfied users</p>
                                <p className="text-black font-normal text-sm sm:text-base inline-flex items-center leading-none"><Image className="mr-1" src={star} alt={'star'} /> <strong className="font-bold px-1">4.9 </strong> from <strong className="font-bold">2k reviews</strong></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <Image className="w-full h-auto" src={heroVector} alt={'heroVector'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero