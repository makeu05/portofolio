import type { CSSProperties } from "react";

/**
 * Decorative figure for the home page. It combines the three subjects of the
 * site: a network topology (left), files linked by their fingerprints (right)
 * and a timeline of events (bottom). The file names and hash prefixes are the
 * ForenC test fixtures. The figure is hidden from assistive tools.
 *
 * On load the lines are drawn once, then the nodes and labels fade in. With
 * reduced motion the figure is simply static (see globals.css).
 */
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function EvidenceGraph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 450"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {/* topology edges */}
      <path
        d="M110 64 L60 140 M110 64 L160 140 M60 140 L160 140 M60 140 L30 216 M60 140 L90 216 M160 140 L150 216 M160 140 L220 216"
        pathLength={1}
        className="eg-draw stroke-steel/45"
        strokeWidth="1"
        style={delay(250)}
      />

      {/* file relations */}
      <path
        d="M360 56 L300 140 M360 56 L380 160 M360 56 L440 120"
        pathLength={1}
        className="eg-draw stroke-steel/45"
        strokeWidth="1"
        style={delay(500)}
      />

      {/* log source to file */}
      <path
        d="M220 216 L380 160"
        className="eg-fade stroke-cyan/70"
        strokeWidth="1"
        strokeDasharray="3 5"
        style={delay(1100)}
      />

      {/* guides down to the timeline */}
      <g
        className="eg-fade stroke-steel/35"
        strokeWidth="1"
        strokeDasharray="1 5"
        style={delay(1300)}
      >
        <path d="M220 228 L220 366" />
        <path d="M380 236 L380 366" />
      </g>

      {/* topology nodes */}
      <g
        className="eg-fade fill-midnight stroke-cyan"
        strokeWidth="1.5"
        style={delay(700)}
      >
        <circle cx="110" cy="64" r="10" />
        <circle cx="60" cy="140" r="10" />
        <circle cx="160" cy="140" r="10" />
      </g>
      <g
        className="eg-fade fill-slate stroke-steel"
        strokeWidth="1.2"
        style={delay(900)}
      >
        <circle cx="30" cy="216" r="6" />
        <circle cx="90" cy="216" r="6" />
        <circle cx="150" cy="216" r="6" />
        <circle cx="220" cy="216" r="6" />
      </g>
      <g
        className="eg-fade stroke-cyan"
        strokeWidth="1.2"
        strokeLinecap="round"
        style={delay(800)}
      >
        <path d="M104 64 H116 M110 58 V70" />
        <path d="M54 140 H66 M60 134 V146" />
        <path d="M154 140 H166 M160 134 V146" />
      </g>
      <g className="eg-fade fill-steel font-mono" fontSize="10" style={delay(1000)}>
        <text x="126" y="58">core</text>
        <text x="22" y="244">access</text>
      </g>

      {/* file nodes */}
      <g
        className="eg-fade fill-slate stroke-steel"
        strokeWidth="1.2"
        style={delay(900)}
      >
        <rect x="352" y="48" width="16" height="16" />
        <rect x="292" y="132" width="16" height="16" />
        <rect x="432" y="112" width="16" height="16" />
      </g>
      <rect
        x="372"
        y="152"
        width="16"
        height="16"
        className="eg-fade fill-bordeaux stroke-ink"
        strokeWidth="1.2"
        style={delay(1200)}
      />
      <g className="eg-fade fill-steel font-mono" fontSize="10" style={delay(1100)}>
        <text x="288" y="36">manifest.json</text>
        <text x="262" y="168">document.txt</text>
        <text x="262" y="181">4e8a405b</text>
        <text x="398" y="146">system.log</text>
        <text x="398" y="159">ac5c33f4</text>
        <text x="352" y="188">auth.log</text>
        <text x="352" y="201">d487e80d</text>
      </g>
      <g className="eg-fade" style={delay(1500)}>
        <rect x="352" y="210" width="62" height="18" className="fill-bordeaux" />
        <text
          x="383"
          y="223"
          textAnchor="middle"
          className="fill-paper font-mono"
          fontSize="9.5"
          letterSpacing="0.6"
        >
          MODIFIED
        </text>
      </g>

      {/* timeline */}
      <path
        d="M24 366 H456"
        pathLength={1}
        className="eg-draw stroke-steel/55"
        strokeWidth="1"
        style={delay(900)}
      />
      <g
        className="eg-fade stroke-steel/55"
        strokeWidth="1"
        style={delay(1300)}
      >
        <path d="M60 360 V372 M140 360 V372 M220 360 V372 M300 360 V372 M380 360 V372 M440 360 V372" />
      </g>
      <g
        className="eg-fade fill-midnight stroke-cyan"
        strokeWidth="1.5"
        style={delay(1400)}
      >
        <circle cx="60" cy="366" r="3.5" />
        <circle cx="140" cy="366" r="3.5" />
        <circle cx="220" cy="366" r="3.5" />
        <circle cx="300" cy="366" r="3.5" />
        <circle cx="440" cy="366" r="3.5" />
      </g>
      <circle
        cx="380"
        cy="366"
        r="9"
        className="eg-ping stroke-bordeaux"
        strokeWidth="2"
        style={{ ...delay(2000), opacity: 0 }}
      />
      <circle
        cx="380"
        cy="366"
        r="5.5"
        className="eg-fade fill-bordeaux stroke-ink"
        strokeWidth="1.5"
        style={delay(1600)}
      />
      <g
        className="eg-fade fill-steel font-mono"
        fontSize="10"
        textAnchor="middle"
        style={delay(1500)}
      >
        <text x="60" y="394">t0</text>
        <text x="140" y="394">t1</text>
        <text x="220" y="394">t2</text>
        <text x="300" y="394">t3</text>
        <text x="380" y="394">t4</text>
        <text x="440" y="394">t5</text>
      </g>
    </svg>
  );
}
