import type { MetadataRoute } from "next";
import { detailSlugs } from "@/content/projects";
import { siteUrl } from "@/content/site";
import { languages } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...detailSlugs.map((slug) => `/projects/${slug}`)];
  return languages.flatMap((lang) =>
    paths.map((path) => ({
      url: `${siteUrl}/${lang}${path}`,
      alternates: {
        languages: Object.fromEntries(
          languages.map((l) => [l, `${siteUrl}/${l}${path}`]),
        ),
      },
    })),
  );
}
