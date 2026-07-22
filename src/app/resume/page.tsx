import type { Metadata } from "next";
import { portfolio } from "@/lib/portfolio";
import { ResumePreview } from "./resume-preview";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume for ${portfolio.profile.name}, ${portfolio.profile.description}`,
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumePage() {
  return <ResumePreview />;
}
