"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { languages, swapLang, type Lang } from "@/lib/i18n";

export function LanguageSwitch({ lang, label }: { lang: Lang; label: string }) {
  const pathname = usePathname();
  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center font-mono text-xs"
    >
      {languages.map((code, i) => (
        <span key={code} className="flex items-center">
          {i > 0 && (
            <span aria-hidden="true" className="px-1.5 text-line">
              /
            </span>
          )}
          <Link
            href={swapLang(pathname, code)}
            hrefLang={code}
            lang={code}
            aria-current={code === lang ? "true" : undefined}
            className={
              code === lang
                ? "text-cyan"
                : "text-steel transition-colors hover:text-ink"
            }
          >
            {code.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
