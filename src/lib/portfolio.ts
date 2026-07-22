import raw from "../../data.json";
import type { PortfolioData } from "@/types/portfolio";

export const portfolio = raw as PortfolioData;

export function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const MONTHS: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

function parseMonthYear(value: string): Date | null {
  const match = value.match(/^(\w{3})\s+(\d{4})$/);
  if (!match) return null;
  const monthIndex = MONTHS[match[1]];
  if (monthIndex === undefined) return null;
  return new Date(Number(match[2]), monthIndex, 1);
}

export function totalExperienceYears(experience: PortfolioData["experience"]): number {
  const starts = experience
    .filter((job) => job.countsTowardYears !== false)
    .map((job) => parseMonthYear(job.period.start))
    .filter((date): date is Date => date !== null);
  if (starts.length === 0) return 0;

  const earliest = starts.reduce((a, b) => (a < b ? a : b));
  const now = new Date();
  const months =
    (now.getFullYear() - earliest.getFullYear()) * 12 + (now.getMonth() - earliest.getMonth());
  return Math.max(0, Math.floor(months / 12));
}
