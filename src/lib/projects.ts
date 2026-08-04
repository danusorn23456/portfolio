import type { StaticImageData } from "next/image";
import gowego from "@/assets/gowego.jpg";
import mindgym from "@/assets/friday.png";
import ventureswap from "@/assets/ventureswap.png";
import manta from "@/assets/manta.png"
import meety from "@/assets/meety.png"
import fo2of from "@/assets/fo2of.png"

export interface Project {
  title: string;
  description: string;
  tag: string[];
  image: StaticImageData;
  url?: string
  hidden?: boolean
}

export const projects: Project[] = [
  {
    title: "GoWeGo",
    description: "Gowego is an online travel booking platform for intercity transportation in Thailand. It brings together trusted transport operators so travelers can search, compare, and book trips with confidence through a single, user-friendly interface.",
    tag: ["Website", "Online Travel Agency", "Booking Plaform"],
    image: gowego,
    url: "https://gowego.co/th"
  },
  {
    title: "Friday",
    description: "Friday is an interactive mental wellness application designed to help users better understand and improve their emotional well-being. Through mood tracking, self-reflection, and guided exercises, the platform supports healthier daily habits and a more mindful lifestyle.",
    tag: ["Mobile Application", "HealthTech", "Mood Tracker"],
    image: mindgym,
    url: "https://fridayclinic.com/th/application"
  },
  {
    title: "VentureSwap",
    description: "Venture Swap is an online marketplace for buying and selling SMEs in Thailand. It helps connect business owners with serious buyers while supporting the transaction journey with tools for valuation, discovery, confidentiality, and expert guidance.",
    tag: ["Website", "SME Marketplace", "M$A Thailand", "Business For Sale"],
    image: ventureswap,
    url: "https://ventureswap.co/en"
  },
  {
    title: "Meety",
    description: "Meety helps people discover and join local sports and social meetups, from badminton and pickleball to running clubs. Users can browse nearby events, see who's joining, and RSVP in a few taps.",
    tag: ["Mobile Application", "Social Events", "Meetup Discovery"],
    image: meety,
  },
  {
    title: "Manta",
    description: "Manta is a clinic management system built to streamline daily operations for healthcare providers. It centralizes patient records, treatment history, billing, and clinical workflows so clinics can deliver more efficient and organized care.",
    tag: ["WebApplication", "Clinic Management System", "B2BSoftware"],
    image: manta,
  },
  {
    title: "FO2OF",
    description: "FO2OF (Fantasy Online 2 Outfit Finder) is a fan-made companion tool for the game Fantasy Online 2. It lets players mix and match equipment to preview and share character outfits, and simulate stat builds before committing points in-game.",
    tag: ["Website", "Fan Project", "Game Companion Tool"],
    image: fo2of,
    url: "https://fo2of.vercel.app/",
    hidden: true
  }
];
