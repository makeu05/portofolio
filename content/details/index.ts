import type { Localized } from "@/lib/i18n";
import { forenc } from "./forenc";
import { locard } from "./locard";
import type { ProjectDetail } from "./types";

export const details: Record<string, Localized<ProjectDetail>> = {
  forenc,
  locard,
};
