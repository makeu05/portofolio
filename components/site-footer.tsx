import { Container } from "./ui";
import { site } from "@/content/site";
import type { Dictionary } from "@/content/types";

export function SiteFooter({ footer }: { footer: Dictionary["footer"] }) {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-4 text-sm text-steel sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-heading text-ink">{site.name}</span>
          <span className="ml-3 font-mono text-xs">{new Date().getFullYear()}</span>
        </p>
        <a
          href="#top"
          className="font-mono text-xs text-steel underline-offset-4 hover:text-cyan hover:underline"
        >
          {footer.top}
        </a>
      </Container>
    </footer>
  );
}
