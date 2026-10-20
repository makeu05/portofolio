import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import "../globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getDictionary } from "@/content";
import { site, siteUrl } from "@/content/site";
import { isLang, languages, type Lang } from "@/lib/i18n";

// Fonts are stored in app/fonts so no network access is needed to build or run.
const inter = localFont({
  src: "../fonts/inter-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});
const spaceGrotesk = localFont({
  src: "../fonts/space-grotesk-latin-wght-normal.woff2",
  weight: "300 700",
  variable: "--font-space-grotesk",
  display: "swap",
});
const jetbrainsMono = localFont({
  src: "../fonts/jetbrains-mono-latin-wght-normal.woff2",
  weight: "100 800",
  variable: "--font-jetbrains-mono",
  display: "swap",
});

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F7FB" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1220" },
  ],
  colorScheme: "light dark",
};

// Runs before first paint: saved choice, else the system preference.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){}})();`;

export async function generateMetadata({
  params,
}: Pick<LayoutProps, "params">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const { meta } = getDictionary(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: { default: meta.title, template: `%s | ${site.name}` },
    description: meta.description,
    authors: [{ name: site.name, url: site.github }],
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", fr: "/fr" },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: meta.title,
      description: meta.description,
      locale: lang === "fr" ? "fr_FR" : "en_US",
      alternateLocale: lang === "fr" ? ["en_US"] : ["fr_FR"],
      url: `/${lang}`,
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const dict = getDictionary(lang as Lang);

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body id="top">
        <a
          href="#main"
          className="sr-only rounded-sm bg-cyan px-4 py-2 font-semibold text-midnight focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]"
        >
          {dict.nav.skip}
        </a>
        <SiteHeader lang={lang} nav={dict.nav} />
        <main id="main">{children}</main>
        <SiteFooter footer={dict.footer} />
      </body>
    </html>
  );
}
