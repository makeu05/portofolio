"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Category } from "@/content/types";
import type { Lang } from "@/lib/i18n";

export type ProjectItem = {
  slug: string;
  categories: Category[];
  year?: string;
  tech: string[];
  repo?: string;
  detail?: boolean;
  title: string;
  description: string;
  status?: string;
};

type Labels = {
  filterLabel: string;
  all: string;
  categories: Record<Category, string>;
  count: string;
  readStudy: string;
  sourceCode: string;
  opensInNewTab: string;
};

export function ProjectList({
  lang,
  items,
  labels,
}: {
  lang: Lang;
  items: ProjectItem[];
  labels: Labels;
}) {
  const [filter, setFilter] = useState<Category | "all">("all");

  // Offer only the domains that have at least one published project.
  const available = (Object.keys(labels.categories) as Category[]).filter((c) =>
    items.some((item) => item.categories.includes(c)),
  );
  const visible =
    filter === "all" ? items : items.filter((i) => i.categories.includes(filter));

  const chip = (active: boolean) =>
    `rounded-sm border px-3 py-1.5 font-mono text-xs transition-colors ${
      active
        ? "border-cyan bg-cyan text-midnight"
        : "border-line text-steel hover:border-steel hover:text-ink"
    }`;

  return (
    <div>
      <div role="group" aria-label={labels.filterLabel} className="flex flex-wrap gap-2">
        <button
          type="button"
          aria-pressed={filter === "all"}
          onClick={() => setFilter("all")}
          className={chip(filter === "all")}
        >
          {labels.all}
        </button>
        {available.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={filter === category}
            onClick={() => setFilter(category)}
            className={chip(filter === category)}
          >
            {labels.categories[category]}
          </button>
        ))}
      </div>
      <p aria-live="polite" className="mt-4 font-mono text-xs text-steel">
        {labels.count.replace("{n}", String(visible.length))}
      </p>

      <ul className="mt-6 border-t border-line">
        {visible.map((project) => (
          <li
            key={project.slug}
            className="grid gap-3 border-b border-line py-8 md:grid-cols-[9rem_1fr] md:gap-6"
          >
            <div className="font-mono text-xs leading-relaxed text-steel">
              <p>{labels.categories[project.categories[0]]}</p>
              {project.year && <p className="mt-1 text-cyan">{project.year}</p>}
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold leading-snug text-ink">
                {project.detail ? (
                  <Link
                    href={`/${lang}/projects/${project.slug}`}
                    className="underline-offset-4 hover:text-cyan hover:underline"
                  >
                    {project.title}
                  </Link>
                ) : (
                  project.title
                )}
              </h3>
              <p className="mt-3 max-w-[62ch] leading-relaxed text-steel">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-ink">
                {project.tech.map((tech) => (
                  <li key={tech} className="border border-line px-2 py-0.5">
                    {tech}
                  </li>
                ))}
              </ul>

              {(project.detail || project.repo || project.status) && (
                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                  {project.detail && (
                    <Link
                      href={`/${lang}/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 font-medium text-cyan underline-offset-4 hover:underline"
                    >
                      {labels.readStudy}
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-steel underline-offset-4 hover:text-ink hover:underline"
                    >
                      {labels.sourceCode}
                      <ArrowUpRight size={14} aria-hidden="true" />
                      <span className="sr-only"> ({labels.opensInNewTab})</span>
                    </a>
                  )}
                  {project.status && (
                    <span className="font-mono text-xs text-steel">{project.status}</span>
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
