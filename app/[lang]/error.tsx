"use client";

import { usePathname } from "next/navigation";
import { Container } from "@/components/ui";
import { getDictionary } from "@/content";
import { isLang } from "@/lib/i18n";

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  const first = usePathname().split("/")[1] ?? "";
  const { error } = getDictionary(isLang(first) ? first : "en");

  return (
    <Container className="py-40">
      <h1 className="font-heading text-4xl font-semibold text-ink">{error.title}</h1>
      <p className="mt-4 max-w-[52ch] text-steel">{error.text}</p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-sm border border-steel/40 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-cyan hover:text-cyan"
      >
        {error.retry}
      </button>
    </Container>
  );
}
