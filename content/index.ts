import type { Lang } from "@/lib/i18n";
import { en } from "./en";
import { fr } from "./fr";
import type { Dictionary } from "./types";

const dictionaries: Record<Lang, Dictionary> = { en, fr };

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}
