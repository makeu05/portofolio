import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/detail-page";
import { getDictionary } from "@/content";
import { details } from "@/content/details";
import { detailSlugs } from "@/content/projects";
import { isLang, languages } from "@/lib/i18n";

type Props = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return languages.flatMap((lang) => detailSlugs.map((slug) => ({ lang, slug })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const entry = details[slug];
  if (!isLang(lang) || !entry) return {};
  const detail = entry[lang];

  return {
    title: detail.title,
    description: detail.metaDescription,
    alternates: {
      canonical: `/${lang}/projects/${slug}`,
      languages: { en: `/en/projects/${slug}`, fr: `/fr/projects/${slug}` },
    },
    openGraph: {
      title: `${detail.title} | ${detail.kicker}`,
      description: detail.metaDescription,
      url: `/${lang}/projects/${slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { lang, slug } = await params;
  const entry = details[slug];
  if (!isLang(lang) || !entry) notFound();

  return (
    <DetailPage
      lang={lang}
      slug={slug}
      detail={entry[lang]}
      labels={getDictionary(lang).detail}
    />
  );
}
