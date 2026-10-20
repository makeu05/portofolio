/**
 * Small identity marks for the two detailed studies.
 * ForenC: a grid of fingerprint blocks where one block has changed.
 * Locard: two bodies in contact, with the shared area marked (exchange principle).
 */
export function ProjectMark({
  slug,
  className = "",
}: {
  slug: string;
  className?: string;
}) {
  if (slug === "forenc") {
    const shades = [0.9, 0.35, 0.6, 0.45, 0.9, 0.3, 0.7, 0.4, 0.55];
    return (
      <svg
        viewBox="0 0 72 72"
        aria-hidden="true"
        focusable="false"
        className={className}
      >
        {shades.map((opacity, i) => {
          const x = (i % 3) * 24;
          const y = Math.floor(i / 3) * 24;
          const changed = i === 5;
          return (
            <rect
              key={i}
              x={x + 1}
              y={y + 1}
              width="22"
              height="22"
              className={changed ? "fill-bordeaux stroke-ink" : "fill-cyan"}
              fillOpacity={changed ? 1 : opacity * 0.55}
              strokeWidth={changed ? 1.5 : 0}
            />
          );
        })}
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 88 72"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <defs>
        <clipPath id="locard-left">
          <circle cx="32" cy="36" r="26" />
        </clipPath>
      </defs>
      <circle cx="32" cy="36" r="26" className="stroke-steel" strokeWidth="1.5" fill="none" />
      <circle cx="56" cy="36" r="26" className="stroke-cyan" strokeWidth="1.5" fill="none" />
      <circle
        cx="56"
        cy="36"
        r="26"
        clipPath="url(#locard-left)"
        className="fill-bordeaux stroke-ink"
        strokeWidth="1.5"
      />
    </svg>
  );
}
