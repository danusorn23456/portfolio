import { portfolio, totalExperienceYears } from "@/lib/portfolio";

export function ExperienceSection() {
  const years = totalExperienceYears(portfolio.experience);

  return (
    <section id="experience" className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-16">
      <h2 className="flex items-baseline gap-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        Experience
        <span className="text-sm font-normal text-muted">{years}+ years</span>
      </h2>
      <p className="mt-2 text-muted">Where I&apos;ve worked and what I&apos;ve built.</p>

      <ol className="mt-10 space-y-10 border-l border-border pl-8">
        {portfolio.experience.map((job) => (
          <li key={`${job.company}-${job.period.start}`} className="relative">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="flex flex-wrap items-baseline gap-2 text-lg font-semibold">
                <span>
                  {job.role} <span className="text-muted">· {job.company}</span>
                </span>
                {job.workType ? (
                  <span className="rounded-full border border-border bg-surface px-2 py-0.5 text-xs font-medium text-muted">
                    {job.workType}
                  </span>
                ) : null}
              </h3>
              <span className="shrink-0 font-mono text-xs text-muted">
                {job.period.start} — {job.period.end}
              </span>
            </div>

            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
              {job.overview}
            </p>

            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
              {job.keyContributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <ul className="mt-4 flex flex-wrap gap-2">
              {job.techStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
