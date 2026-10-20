export const languages = ["en", "fr"] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = "en";

export type Localized<T> = Record<Lang, T>;

export function isLang(value: string): value is Lang {
  return (languages as readonly string[]).includes(value);
}

/** Pick the supported language that best matches an Accept-Language header. */
export function negotiateLang(header: string | null): Lang {
  if (!header) return defaultLang;
  const requested = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  for (const { tag } of requested) {
    const base = tag.split("-")[0];
    if (isLang(base)) return base;
  }
  return defaultLang;
}

/** Same page in another language: swap the first path segment. */
export function swapLang(pathname: string, target: Lang): string {
  const parts = pathname.split("/");
  if (parts.length > 1 && isLang(parts[1])) {
    parts[1] = target;
    return parts.join("/") || `/${target}`;
  }
  return `/${target}`;
}
