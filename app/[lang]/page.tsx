import { notFound } from "next/navigation";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { Background, Research, Skills } from "@/components/sections";
import { getDictionary } from "@/content";
import { site } from "@/content/site";
import { isLang } from "@/lib/i18n";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const dict = getDictionary(lang);

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.jobTitle,
    sameAs: [site.github, site.linkedin],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <Hero lang={lang} hero={dict.hero} />
      <About lang={lang} about={dict.about} />
      <ProjectsSection lang={lang} projects={dict.projects} />
      <Skills skills={dict.skills} />
      <Research research={dict.research} />
      <Background background={dict.background} />
      <Contact contact={dict.contact} />
    </>
  );
}
