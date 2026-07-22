import { portfolio } from "@/lib/portfolio";

export function EducationSection() {
  return (
    <section id="education" className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Education</h2>
      <p className="mt-2 text-muted">My academic and training background.</p>

      <ol className="mt-10 space-y-6 border-l border-border pl-8">
        {portfolio.education.map((edu) => (
          <li key={`${edu.school}-${edu.program}`} className="relative">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold">
                {edu.school} <span className="text-muted">· {edu.program}</span>
              </h3>
              {edu.period ? (
                <span className="shrink-0 font-mono text-xs text-muted">
                  {edu.period.start ? `${edu.period.start} — ` : ""}
                  {edu.period.end}
                </span>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
