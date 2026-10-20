import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "./ui";
import { Reveal } from "./reveal";
import { Blocks } from "./detail-blocks";
import { ProjectMark } from "./project-mark";
import { publishedProjects, detailSlugs } from "@/content/projects";
import type { ProjectDetail } from "@/content/details/types";
import type { Dictionary } from "@/content/types";
import type { Lang } from "@/lib/i18n";

export function DetailPage({
  lang,
  slug,
  detail,
  labels,
}: {
  lang: Lang;
  slug: string;
  detail: ProjectDetail;
  labels: Dictionary["detail"];
}) {
  const nextSlug = detailSlugs[(detailSlugs.indexOf(slug) + 1) % detailSlugs.length];
  const nextEntry = publishedProjects.find((p) => p.slug === nextSlug);
  const accent = slug === "locard" ? "bg-bordeaux" : "bg-cyan";

  return (
    <article className="pb-24 pt-28 md:pt-36">
      <Container>
        <nav aria-label={labels.breadcrumb} className="font-mono text-xs text-steel">
          <Link
            href={`/${lang}#projects`}
            className="inline-flex items-center gap-2 underline-offset-4 hover:text-cyan hover:underline"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            {labels.back}
          </Link>
        </nav>

        <header className="anim-up mt-10 grid items-end gap-8 border-b border-line pb-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
              {detail.kicker}
            </p>
            <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              {detail.title}
            </h1>
            <div aria-hidden="true" className={`mt-5 h-1 w-16 ${accent}`} />
            <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-steel">
              {detail.lead}
            </p>
          </div>
          <ProjectMark
            slug={slug}
            className="hidden h-24 w-auto justify-self-end md:col-span-4 md:block"
          />
        </header>

        <dl className="grid gap-x-8 gap-y-4 border-b border-line py-8 sm:grid-cols-2 lg:grid-cols-4">
          {detail.facts.map((fact) => (
            <div key={fact.term}>
              <dt className="font-mono text-xs text-steel">{fact.term}</dt>
              <dd className="mt-1 text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <nav
            aria-label={labels.onThisPage}
            className="lg:sticky lg:top-24 lg:col-span-3 lg:self-start"
          >
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-steel">
              {labels.onThisPage}
            </p>
            <ol className="mt-4 space-y-2 text-sm">
              {detail.sections.map((section, i) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex gap-3 text-steel transition-colors hover:text-cyan"
                  >
                    <span className="font-mono text-xs text-cyan">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-16 lg:col-span-9">
            {detail.sections.map((section, i) => (
              <Reveal key={section.id}>
              <section
                id={section.id}
                aria-labelledby={`${section.id}-title`}
                className="scroll-mt-24"
              >
                <h2
                  id={`${section.id}-title`}
                  className="mb-6 flex items-baseline gap-4 font-heading text-2xl font-semibold text-ink"
                >
                  <span className="font-mono text-sm font-normal text-cyan">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {section.heading}
                </h2>
                <Blocks blocks={section.blocks} statusLabel={labels.stateLegend} />
              </section>
              </Reveal>
            ))}
          </div>
        </div>

        {nextEntry && (
          <footer className="mt-20 border-t border-line pt-8">
            <p className="font-mono text-xs text-steel">{labels.next}</p>
            <Link
              href={`/${lang}/projects/${nextEntry.slug}`}
              className="mt-2 inline-flex items-center gap-3 font-heading text-2xl font-semibold text-ink underline-offset-4 hover:text-cyan hover:underline"
            >
              {nextEntry.text[lang].title}
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </footer>
        )}
      </Container>
    </article>
  );
}
