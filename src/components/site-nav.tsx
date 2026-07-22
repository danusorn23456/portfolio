import Link from "next/link";
import { portfolio } from "@/lib/portfolio";
import { DownloadResumeButton } from "@/components/download-resume-button";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="#top"
          className="min-w-0 shrink truncate font-mono text-sm font-semibold tracking-tight"
        >
          {portfolio.profile.name}
        </Link>
        <DownloadResumeButton className="shrink-0 whitespace-nowrap rounded-full bg-accent px-4 py-2 text-xs font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60" />
      </div>
      <nav className="border-t border-border/60">
        <ul className="mx-auto flex w-full max-w-5xl items-center gap-6 overflow-x-auto px-6 py-2 text-sm text-muted">
          {links.map((link) => (
            <li key={link.href} className="shrink-0">
              <Link
                href={link.href}
                className="whitespace-nowrap transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
