import Image from "next/image";
import { projects } from "@/lib/projects";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-16"
    >
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Projects
      </h2>
      <p className="mt-2 text-muted">Projects I&apos;ve contributed to.</p>

      <div className="mt-10 grid gap-6">
        {projects.filter((project) => !project.hidden).map((project) => (
          <article
            key={project.title}
            className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface sm:flex-row"
          >
            <div className="relative aspect-video w-full shrink-0 sm:aspect-square sm:w-64">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                sizes="(min-width: 640px) 256px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="min-w-0 flex-1 p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 text-sm text-accent hover:underline"
                  >
                    Visit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5"
                      aria-hidden
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                    </svg>
                  </a>
                )}
              </div>
              <ul className="mt-2 flex flex-wrap gap-2">
                {project.tag.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
