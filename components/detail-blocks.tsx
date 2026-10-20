import { ArrowUpRight } from "lucide-react";
import { RichText } from "./ui";
import type { Block, StatusState } from "@/content/details/types";

const stateGlyph: Record<StatusState, React.ReactNode> = {
  tested: (
    <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
      <rect x="2" y="2" width="12" height="12" className="fill-cyan" />
    </svg>
  ),
  exists: (
    <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
      <rect x="2.75" y="2.75" width="10.5" height="10.5" className="stroke-cyan" strokeWidth="1.5" fill="none" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
      <rect x="2.75" y="2.75" width="10.5" height="10.5" className="stroke-cyan" strokeWidth="1.5" fill="none" />
      <path d="M3 13 L13 3 V13 Z" className="fill-cyan" />
    </svg>
  ),
  planned: (
    <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
      <rect x="2.75" y="2.75" width="10.5" height="10.5" className="stroke-steel" strokeWidth="1.5" strokeDasharray="2.5 2.5" fill="none" />
    </svg>
  ),
};

export function Blocks({
  blocks,
  statusLabel,
}: {
  blocks: Block[];
  statusLabel: string;
}) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i} className="max-w-[64ch] leading-relaxed text-steel">
                <RichText text={block.text} />
              </p>
            );

          case "ul":
            return (
              <ul key={i} className="max-w-[66ch] space-y-3 text-steel">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <span
                      aria-hidden="true"
                      className="mt-[0.7rem] h-1 w-1 shrink-0 bg-cyan"
                    />
                    <RichText text={item} />
                  </li>
                ))}
              </ul>
            );

          case "code":
            return (
              <figure key={i} className="border border-line bg-slate">
                <figcaption className="border-b border-line px-4 py-2 font-mono text-xs text-steel">
                  {block.label}
                </figcaption>
                {/* tabIndex lets keyboard users scroll long lines */}
                <pre
                  tabIndex={0}
                  className="overflow-x-auto p-4 font-mono text-[0.8rem] leading-relaxed text-ink"
                >
                  <code>{block.code}</code>
                </pre>
              </figure>
            );

          case "dl":
            return (
              <dl key={i} className="border-t border-line">
                {block.rows.map((row) => (
                  <div
                    key={row.term}
                    className="grid gap-2 border-b border-line py-5 md:grid-cols-[14rem_1fr] md:gap-6"
                  >
                    <dt className="font-heading text-base font-semibold leading-snug text-ink">
                      {row.term}
                    </dt>
                    <dd className="max-w-[62ch] leading-relaxed text-steel">
                      <RichText text={row.text} />
                    </dd>
                  </div>
                ))}
              </dl>
            );

          case "note":
            return (
              <aside
                key={i}
                className="max-w-[66ch] border-l-4 border-bordeaux bg-slate px-5 py-4 leading-relaxed text-ink"
              >
                <RichText text={block.text} />
              </aside>
            );

          case "link":
            return (
              <p key={i}>
                <a
                  href={block.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm text-cyan underline-offset-4 hover:underline"
                >
                  {block.label}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </p>
            );

          case "status":
            return (
              <div key={i} role="group" aria-label={statusLabel} className="border-t border-line">
                {block.groups.map((group) => (
                  <section key={group.state} className="border-b border-line py-7">
                    <h4 className="flex items-center gap-3 font-heading text-base font-semibold text-ink">
                      {stateGlyph[group.state]}
                      {group.title}
                    </h4>
                    <ul className="mt-4 max-w-[66ch] space-y-3 pl-7 text-steel">
                      {group.items.map((item) => (
                        <li key={item} className="leading-relaxed">
                          <RichText text={item} />
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            );
        }
      })}
    </div>
  );
}
