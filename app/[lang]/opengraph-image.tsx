import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { languages } from "@/lib/i18n";

export const alt = `${site.name}, ${site.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default function Image() {
  const cells = [0.9, 0.35, 0.6, 0.45, 0.9, -1, 0.7, 0.4, 0.55];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B1220",
          color: "#F4F7FB",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 4,
            color: "#00C2FF",
          }}
        >
          CYBERSECURITY / DIGITAL FORENSICS / NETWORKS
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>
              MAKEU TENKU
            </div>
            <div style={{ display: "flex", fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>
              STELY BELVA
            </div>
            <div style={{ display: "flex", width: 96, height: 6, background: "#00C2FF", marginTop: 28 }} />
            <div style={{ display: "flex", fontSize: 32, color: "#A7B3C5", marginTop: 28 }}>
              {site.jobTitle}
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", width: 216 }}>
            {cells.map((o, i) => (
              <div
                key={i}
                style={{
                  width: 64,
                  height: 64,
                  margin: 4,
                  display: "flex",
                  background: o < 0 ? "#7A263A" : "#00C2FF",
                  opacity: o < 0 ? 1 : o * 0.6,
                  border: o < 0 ? "3px solid #F4F7FB" : "none",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
