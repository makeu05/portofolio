import Link from "next/link";
import { Container } from "@/components/ui";

// not-found files receive no params, so both languages are shown.
export default function NotFound() {
  return (
    <Container className="py-40">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">404</p>
      <h1 className="mt-4 font-heading text-4xl font-semibold text-ink">
        Page not found / Page introuvable
      </h1>
      <p className="mt-4 max-w-[52ch] text-steel">
        This address does not match any page of the site. / Cette adresse ne
        correspond à aucune page du site.
      </p>
      <p className="mt-8 flex gap-6 font-mono text-sm">
        <Link href="/en" className="text-cyan underline-offset-4 hover:underline">
          English
        </Link>
        <Link href="/fr" className="text-cyan underline-offset-4 hover:underline">
          Français
        </Link>
      </p>
    </Container>
  );
}
