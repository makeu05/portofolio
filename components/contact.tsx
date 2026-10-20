import { ArrowUpRight, Download, Mail } from "lucide-react";
import { Section } from "./ui";
import { site } from "@/content/site";
import type { Dictionary } from "@/content/types";

export function Contact({ contact }: { contact: Dictionary["contact"] }) {
  const rows = [
    {
      label: contact.items.email,
      value: site.email,
      href: `mailto:${site.email}`,
      icon: <Mail size={16} aria-hidden="true" />,
      external: false,
    },
    {
      label: contact.items.github,
      value: "github.com/makeu05",
      href: site.github,
      icon: <ArrowUpRight size={16} aria-hidden="true" />,
      external: true,
    },
    {
      label: contact.items.linkedin,
      value: "linkedin.com/in/stely-belva-makeu",
      href: site.linkedin,
      icon: <ArrowUpRight size={16} aria-hidden="true" />,
      external: true,
    },
    {
      label: contact.items.resume,
      value: contact.resumeHint,
      href: site.cv,
      icon: <Download size={16} aria-hidden="true" />,
      external: true,
    },
  ];

  return (
    <Section id="contact" index="06" label={contact.label} title={contact.title}>
      <p className="max-w-[58ch] text-lg leading-relaxed text-ink">{contact.text}</p>
      <p className="mt-4 max-w-[58ch] leading-relaxed text-steel">
        {contact.availability}
      </p>

      <ul className="mt-10 border-t border-line">
        {rows.map((row) => (
          <li key={row.label} className="border-b border-line">
            <a
              href={row.href}
              {...(row.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group grid items-center gap-1 py-5 md:grid-cols-[9rem_1fr_auto] md:gap-6"
            >
              <span className="font-mono text-xs text-steel">{row.label}</span>
              <span className="break-all font-heading text-lg text-ink underline-offset-4 group-hover:text-cyan group-hover:underline">
                {row.value}
              </span>
              <span className="hidden text-steel group-hover:text-cyan md:block">
                {row.icon}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
