import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 md:px-8 ${className}`}>
      {children}
    </div>
  );
}

/** Renders `code` spans written with backticks inside a string. */
export function RichText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const parts = text.split("`");
  return (
    <span className={`rich ${className}`}>
      {parts.map((part, i) =>
        i % 2 === 1 ? <code key={i}>{part}</code> : <span key={i}>{part}</span>,
      )}
    </span>
  );
}

/** Numbered section with the heading in a narrow left column. */
export function Section({
  id,
  index,
  label,
  title,
  children,
}: {
  id: string;
  index: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-16 border-t border-line py-20 md:py-28"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-4">
            <header>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
                {index} / {label}
              </p>
              <h2
                id={`${id}-title`}
                className="mt-4 max-w-[18ch] font-heading text-2xl font-semibold leading-tight text-ink md:text-[1.75rem]"
              >
                {title}
              </h2>
            </header>
          </Reveal>
          <Reveal className="md:col-span-8">{children}</Reveal>
        </div>
      </Container>
    </section>
  );
}
