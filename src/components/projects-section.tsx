import { projects } from "@/lib/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Projects</h2>
      <p className="mt-2 text-muted">Projects I&apos;ve contributed to.</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-2xl border border-border bg-surface p-5"
          >
            <h3 className="font-medium">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
