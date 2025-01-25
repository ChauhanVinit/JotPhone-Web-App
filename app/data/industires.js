import Lendora from "@/public/industries/Lendora.svg";
import assistifySupport from "@/public/industries/assistify-support.svg";
import Merchnest from "@/public/industries/Merchnest.svg";
import Logistix from "@/public/industries/Logistix.svg";
import DwelloraIcon from "@/public/industries/Dwellora.svg";
import Supportify from "@/public/industries/Supportify.svg";
import Healthcare from "@/public/industries/Healthcare.svg";
import { nanoid } from "nanoid";

const industries = [
    {
        id: nanoid(),
        description: `"Jotphone gives us insights into all interactions: how many texts we’re sending, how long each call lasts, which agents are closing the most business -"`,
        comapnyLogo: assistifySupport,
        rating: 3.5,
    },
    {
        id: nanoid(),
        description: `"Jotphone gives us insights into all interactions: how many texts we’re sending, how long each call lasts, which agents are closing the most business -"`,
        comapnyLogo: Lendora,
        rating: 4.1,
    },
    {
        id: nanoid(),
        description: `"Jotphone gives us insights into all interactions: how many texts we’re sending, how long each call lasts, which agents are closing the most business -"`,
        comapnyLogo: Merchnest,
        rating: 2.5,
    },
    {
        id: nanoid(),
        description: `"Jotphone gives us insights into all interactions: how many texts we’re sending, how long each call lasts, which agents are closing the most business -"`,
        comapnyLogo: Logistix,
        rating: 4.5,
    },
    {
        id: nanoid(),
        description: `"Jotphone gives us insights into all interactions: how many texts we’re sending, how long each call lasts, which agents are closing the most business -"`,
        comapnyLogo:DwelloraIcon,
        rating: 5.0,
    },
    {
        id: nanoid(),
        description: `"Jotphone gives us insights into all interactions: how many texts we’re sending, how long each call lasts, which agents are closing the most business -"`,
        comapnyLogo: Supportify,
        rating: 4.9,
    },
    {
        id: nanoid(),
        description: `"Jotphone gives us insights into all interactions: how many texts we’re sending, how long each call lasts, which agents are closing the most business -"`,
        comapnyLogo: Healthcare,
        rating: 4.5,
    },
];

export default industries