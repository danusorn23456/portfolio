import { portfolio } from "@/lib/portfolio";

export function ContactSection() {
  const { contact } = portfolio;

  return (
    <section id="contact" className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Contact</h2>
      <p className="mt-2 text-muted">Let&apos;s work together.</p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={`mailto:${contact.email}`}
          className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground transition-colors hover:bg-background"
        >
          {contact.email}
        </a>
        <a
          href={`tel:${contact.phone.replace(/\s+/g, "")}`}
          className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground transition-colors hover:bg-background"
        >
          {contact.phone}
        </a>
      </div>
    </section>
  );
}
