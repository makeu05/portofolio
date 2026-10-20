import { Section } from "./ui";
import { ProjectList, type ProjectItem } from "./project-list";
import { publishedProjects } from "@/content/projects";
import type { Dictionary } from "@/content/types";
import type { Lang } from "@/lib/i18n";

export function ProjectsSection({
  lang,
  projects,
}: {
  lang: Lang;
  projects: Dictionary["projects"];
}) {
  const items: ProjectItem[] = publishedProjects.map((p) => ({
    slug: p.slug,
    categories: p.categories,
    year: p.year,
    tech: p.tech,
    repo: p.repo,
    detail: p.detail,
    ...p.text[lang],
  }));

  const { label, title, intro, ...labels } = projects;

  return (
    <Section id="projects" index="02" label={label} title={title}>
      <p className="mb-10 max-w-[58ch] leading-relaxed text-steel">{intro}</p>
      <ProjectList lang={lang} items={items} labels={labels} />
    </Section>
  );
}
