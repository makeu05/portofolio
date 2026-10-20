import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "./ui";
import type { Dictionary } from "@/content/types";
import type { Lang } from "@/lib/i18n";

export function About({
  lang,
  about,
}: {
  lang: Lang;
  about: Dictionary["about"];
}) {
  const href = (to: "forenc" | "locard" | "projects") =>
    to === "projects" ? `/${lang}#projects` : `/${lang}/projects/${to}`;

  return (
    <Section id="about" index="01" label={about.label} title={about.title}>
      <p className="max-w-[60ch] text-xl leading-relaxed text-ink">{about.lead}</p>
      <p className="mt-5 max-w-[60ch] leading-relaxed text-steel">{about.body}</p>

      <ol className="mt-14 border-t border-line">
        {about.pillars.map((pillar, i) => (
          <li
            key={pillar.title}
            className="grid gap-3 border-b border-line py-8 md:grid-cols-[7rem_1fr] md:gap-6"
          >
            <div className="flex items-baseline gap-3 md:block">
              <span className="font-mono text-xs text-cyan">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-xl font-semibold text-ink md:mt-1">
                {pillar.title}
              </h3>
            </div>
            <div>
              <p className="max-w-[58ch] leading-relaxed text-steel">{pillar.text}</p>
              <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                <span className="font-mono text-xs text-steel">{about.seenIn}</span>
                {pillar.links.map((link) => (
                  <Link
                    key={link.label}
                    href={href(link.to)}
                    className="inline-flex items-center gap-1.5 text-cyan underline-offset-4 hover:underline"
                  >
                    {link.label}
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                ))}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
