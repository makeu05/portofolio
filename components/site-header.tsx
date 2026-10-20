"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { LanguageSwitch } from "./language-switch";
import { ThemeToggle } from "./theme-toggle";
import { site } from "@/content/site";
import type { Dictionary } from "@/content/types";
import type { Lang } from "@/lib/i18n";

const sections = [
  "about",
  "projects",
  "skills",
  "research",
  "background",
  "contact",
] as const;

export function SiteHeader({
  lang,
  nav,
}: {
  lang: Lang;
  nav: Dictionary["nav"];
}) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-midnight/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <Link
          href={`/${lang}`}
          aria-label={`${site.name}, ${nav.home}`}
          className="font-heading text-[0.78rem] font-semibold tracking-[0.14em] text-ink"
        >
          <span className="hidden sm:inline">{site.name}</span>
          <span aria-hidden="true" className="sm:hidden">
            MAKEU TENKU S. B.
          </span>
        </Link>

        <nav aria-label={nav.menu} className="hidden items-center gap-7 md:flex">
          {sections.map((id) => (
            <Link
              key={id}
              href={`/${lang}#${id}`}
              className="text-sm text-steel transition-colors hover:text-ink"
            >
              {nav[id]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageSwitch lang={lang} label={nav.language} />
          <ThemeToggle label={nav.theme} />
          <button
            ref={button}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            onClick={() => setOpen((value) => !value)}
            className="-mr-2 inline-flex h-10 w-10 items-center justify-center text-ink md:hidden"
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label={nav.menu}
          className="border-t border-line bg-midnight px-5 pb-6 pt-3 md:hidden"
        >
          <ul>
            {sections.map((id) => (
              <li key={id} className="border-b border-line last:border-b-0">
                <Link
                  href={`/${lang}#${id}`}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 font-heading text-lg text-ink"
                >
                  {nav[id]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
