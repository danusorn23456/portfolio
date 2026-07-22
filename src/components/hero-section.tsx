import Image from "next/image";
import Link from "next/link";
import { initials, portfolio, totalExperienceYears } from "@/lib/portfolio";
import humanRatio from "@/assets/human-ratio.png";

const RAINBOW_PHRASE =
  "I've learned that good communication and teamwork are just as important as writing good code.";

export function HeroSection() {
  const { profile } = portfolio;
  const [before, after] = profile.description.split(RAINBOW_PHRASE);
  const years = totalExperienceYears(portfolio.experience);
  const quickFacts = [`${years}+ years`, "JavaScript", "React.js", "Node.js", "TypeScript"];

  return (
    <section id="top" className="relative mx-auto w-full max-w-5xl overflow-hidden px-6 pb-20 pt-16 sm:pt-24">
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[420px] max-w-[40%] sm:block">
        <Image
          src={humanRatio}
          alt=""
          aria-hidden
          fill
          priority
          sizes="420px"
          className="object-contain object-right opacity-[0.06] dark:invert"
        />
      </div>

      <div id="about" className="relative flex scroll-mt-24 flex-col items-start gap-8 sm:flex-row sm:items-center">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-accent-soft font-mono text-2xl font-semibold text-accent">
          {initials(profile.name)}
        </div>
        <div>
          <p className="text-sm font-medium text-accent">Hello, I&apos;m</p>
          <div className="mt-1 flex flex-wrap items-center gap-3">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {profile.name}
            </h1>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full border border-accent-foreground/30 bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-foreground opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-foreground" />
              </span>
              Open for hire
            </Link>
          </div>
          <p className="mt-1 text-lg text-muted">
            Software Developer · {profile.age} y.o. · {profile.location}
          </p>
        </div>
      </div>

      <p className="mt-8 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg">
        {before}
        {after !== undefined && (
          <span className="bg-[linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#3b82f6,#8b5cf6)] bg-clip-text font-medium text-transparent">
            {RAINBOW_PHRASE}
          </span>
        )}
        {after}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {quickFacts.map((fact) => (
          <span
            key={fact}
            className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground"
          >
            {fact}
          </span>
        ))}
      </div>
    </section>
  );
}
