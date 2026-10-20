import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { Container } from "./ui";
import { EvidenceGraph } from "./evidence-graph";
import { site } from "@/content/site";
import type { Dictionary } from "@/content/types";
import type { Lang } from "@/lib/i18n";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const primary =
  "group inline-flex items-center gap-2 rounded-sm bg-cyan px-5 py-3 text-sm font-semibold text-midnight transition-colors hover:bg-ink";
const secondary =
  "inline-flex items-center gap-2 rounded-sm border border-steel/40 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-cyan hover:text-cyan";

export function Hero({ lang, hero }: { lang: Lang; hero: Dictionary["hero"] }) {
  const sentences = hero.title.match(/[^.]+\./g) ?? [hero.title];

  return (
    <section
      aria-labelledby="hero-title"
      className="pb-20 pt-32 md:pb-28 md:pt-40"
    >
      <Container>
        <div className="grid items-center gap-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <p className="anim-up font-mono text-xs uppercase tracking-[0.2em] text-cyan">
              {hero.eyebrow}
            </p>
            <h1
              id="hero-title"
              className="mt-6 font-heading text-[2rem] font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl"
            >
              {sentences.map((sentence, i) => (
                <span
                  key={sentence}
                  className="anim-up block"
                  style={delay(150 + i * 170)}
                >
                  {sentence.trim()}
                </span>
              ))}
            </h1>
            <p
              className="anim-up mt-7 max-w-[56ch] text-lg leading-relaxed text-steel"
              style={delay(700)}
            >
              {hero.text}
            </p>

            <div className="anim-up mt-9 flex flex-wrap gap-3" style={delay(850)}>
              <Link href={`/${lang}#projects`} className={primary}>
                {hero.ctaProjects}
                <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={site.cv}
                target="_blank"
                rel="noopener noreferrer"
                className={secondary}
              >
                <FileText size={16} aria-hidden="true" />
                {hero.ctaResume}
                <span className="sr-only"> (PDF)</span>
              </a>
              <a href={`mailto:${site.email}`} className={secondary}>
                <Mail size={16} aria-hidden="true" />
                {hero.ctaContact}
              </a>
            </div>

            <ul
              className="anim-up mt-10 space-y-2 border-t border-line pt-6 font-mono text-xs text-steel"
              style={delay(1000)}
            >
              {hero.status.map((line) => (
                <li key={line} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 bg-cyan"
                  />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto w-full max-w-md md:col-span-5 md:max-w-none">
            <EvidenceGraph className="h-auto w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
}
