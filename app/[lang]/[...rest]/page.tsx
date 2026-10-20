import { notFound } from "next/navigation";

// Any unknown path under a language renders the localized not-found page.
export default function CatchAll() {
  notFound();
}
