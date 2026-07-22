export interface Project {
  title: string;
  description: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    title: "GoWeGo — CMS",
    description: "Admin panel for managing travel routes, bookings, and partners for a ferry/transport booking platform.",
    techStack: ["Next.js", "React.js", "Mantine UI", "Apollo client"],
  },
  {
    title: "GoWeGo",
    description: "Customer-facing booking site for ferry and transport tickets between destinations in Thailand.",
    techStack: ["Next.js", "React.js", "Tailwind CSS", "Apollo client", "i18n"],
  },
  {
    title: "MindGym",
    description: "Mobile app for mental wellness — mood tracking, gratitude journaling, and guided breathing exercises.",
    techStack: ["Flutter", "Firebase", "Google & Apple Sign-In", "Native Share", "i18n", "Google Play Console", "App Store Connect"],
  },
  {
    title: "Meety",
    description: "Mobile app for organizing and joining local social meetups and activities.",
    techStack: ["Flutter", "Firebase", "Socket.IO", "Google Cloud Console", "Google & Apple Sign-In", "Native Share", "Google Play Console", "App Store Connect"],
  },
  {
    title: "VentureSwap",
    description: "Marketplace platform for buying and selling businesses.",
    techStack: ["Next.js", "React.js", "Axios", "Mantine UI", "Google Sign-In", "i18n"],
  },
  {
    title: "VentureSwap — CMS",
    description: "Admin panel for managing users, listings, inquiries, and valuations on the VentureSwap platform.",
    techStack: ["Next.js", "React.js", "Mantine UI", "Axios"],
  },
];
