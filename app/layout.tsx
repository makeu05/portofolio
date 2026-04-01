import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stely Belva MAKEU TENKU — Cybersécurité & Investigation Numérique",
  description: "Portfolio de Stely Belva MAKEU TENKU, ingénieure en cybersécurité à l'ENSPY. Pentest, audit SI, réseaux, IoT.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
