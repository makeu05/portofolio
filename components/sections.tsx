import { Section } from "./ui";
import type { Dictionary } from "@/content/types";

export function Skills({ skills }: { skills: Dictionary["skills"] }) {
  return (
    <Section id="skills" index="03" label={skills.label} title={skills.title}>
      <p className="max-w-[58ch] leading-relaxed text-steel">{skills.intro}</p>
      <dl className="mt-10 border-t border-line">
        {skills.groups.map((group) => (
          <div
            key={group.title}
            className="grid gap-3 border-b border-line py-6 md:grid-cols-[12rem_1fr] md:gap-6"
          >
            <dt className="font-heading text-base font-semibold text-ink">
              {group.title}
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-steel">
                {group.items.map((item) => (
                  <li key={item} className="flex items-baseline gap-2">
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 shrink-0 translate-y-[-0.2em] bg-cyan"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function Research({ research }: { research: Dictionary["research"] }) {
  return (
    <Section id="research" index="04" label={research.label} title={research.title}>
      <p className="max-w-[58ch] leading-relaxed text-steel">{research.intro}</p>
      <ol className="mt-10 grid gap-x-10 gap-y-10 border-t border-line pt-10 sm:grid-cols-2">
        {research.axes.map((axis, i) => (
          <li key={axis.title}>
            <p className="font-mono text-xs text-cyan">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 font-heading text-lg font-semibold leading-snug text-ink">
              {axis.title}
            </h3>
            <p className="mt-3 leading-relaxed text-steel">{axis.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Background({
  background,
}: {
  background: Dictionary["background"];
}) {
  const heading = "font-mono text-xs uppercase tracking-[0.18em] text-cyan";

  return (
    <Section id="background" index="05" label={background.label} title={background.title}>
      <div className="space-y-14">
        <div>
          <h3 className={heading}>{background.experience}</h3>
          <ul className="mt-5 border-t border-line">
            {background.entries.map((entry) => (
              <li
                key={`${entry.date}-${entry.title}`}
                className="grid gap-2 border-b border-line py-6 md:grid-cols-[9rem_1fr] md:gap-6"
              >
                <p className="font-mono text-xs text-steel">{entry.date}</p>
                <div>
                  <h4 className="font-heading text-base font-semibold text-ink">
                    {entry.title}
                    {entry.org && (
                      <span className="font-normal text-steel">, {entry.org}</span>
                    )}
                  </h4>
                  <p className="mt-2 max-w-[62ch] leading-relaxed text-steel">
                    {entry.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-xs text-steel">{background.earlier}</p>
          <ul className="mt-2 space-y-2 text-sm text-steel">
            {background.earlierEntries.map((entry) => (
              <li key={entry.title} className="grid gap-1 md:grid-cols-[9rem_1fr] md:gap-6">
                <span className="font-mono text-xs">{entry.date}</span>
                <span>
                  <span className="text-ink">{entry.title}.</span> {entry.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={heading}>{background.education}</h3>
          <ul className="mt-5 border-t border-line">
            {background.educationEntries.map((entry) => (
              <li
                key={entry.title}
                className="grid gap-2 border-b border-line py-6 md:grid-cols-[9rem_1fr] md:gap-6"
              >
                <p className="font-mono text-xs text-steel">{entry.date}</p>
                <div>
                  <h4 className="font-heading text-base font-semibold text-ink">
                    {entry.title}
                  </h4>
                  <p className="mt-2 max-w-[62ch] leading-relaxed text-steel">
                    {entry.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-10 sm:grid-cols-[2fr_1fr]">
          <div>
            <h3 className={heading}>{background.training}</h3>
            <ul className="mt-4 space-y-2 text-steel">
              {background.trainingItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.6rem] h-1 w-1 shrink-0 bg-cyan"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={heading}>{background.languages}</h3>
            <ul className="mt-4 space-y-2 text-steel">
              {background.languageItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
