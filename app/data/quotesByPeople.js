import { nanoid } from "nanoid";
import LogoA from "@/public/logos/1.png";
import LogoB from "@/public/logos/2.png";
import QuoteBannerA from "@/public/sayings/1.png";
import QuoteBannerB from "@/public/sayings/2.png";

const sayings = [
    {
        id: nanoid(),
        quoteBanner: QuoteBannerA,
        quoteText: 'Jotphone gives us insights into all interactions: how many texts we’re sending, how long each call lasts, which agents are closing the most business - everything we need to know to optimize processes.”',
        quotedBy: {
            name: 'Victor Kerr',
            logo: LogoA,
            designation: 'Managing Director',
        },
    },
    {
        id: nanoid(),
        quoteBanner: QuoteBannerB,
        quoteText: 'Jotphone empowers us to optimize our processes by providing in-depth insights into all customer interactions, including texting volume, call length, and top-performing agents.',
        quotedBy: {
            name: 'Ralph K',
            logo: LogoB,
            designation: 'CFO',
        },
    },
    {
        id: nanoid(),
        quoteBanner: QuoteBannerB,
        quoteText: 'Jotphone provides comprehensive data on all customer interactions, enabling us to analyze texting frequency, call duration, agent performance, and more, optimizing our business processes.',
        quotedBy: {
            name: 'Ralph K',
            logo: LogoB,
            designation: 'Bussiness Developer',
        },
    },
    {
        id: nanoid(),
        quoteBanner: QuoteBannerB,
        quoteText: 'Jotphone offers a holistic view of customer interactions, providing metrics such as message volume, call duration, and agent conversion rates to inform process optimization strategies.',
        quotedBy: {
            name: 'Simon J',
            logo: LogoB,
            designation: 'Team Lead',
        },
    },
]

export default sayings;