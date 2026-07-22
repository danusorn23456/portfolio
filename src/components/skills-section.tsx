import { portfolio } from "@/lib/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Skills</h2>
      <p className="mt-2 text-muted">Technologies and tools I work with.</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {portfolio.skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-medium text-muted">{group.category}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
