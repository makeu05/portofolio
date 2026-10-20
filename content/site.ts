/**
 * Single source of truth for contact details and external links.
 * Every link shown on the site comes from this file.
 */
export const site = {
  name: "MAKEU TENKU STELY BELVA",
  jobTitle: "Cybersecurity & Digital Forensics Engineer",
  email: "belvarose150@gmail.com",
  github: "https://github.com/makeu05",
  linkedin: "https://www.linkedin.com/in/stely-belva-makeu",
  cv: "/cv/Stely-Belva-Makeu-Tenku-CV-2027.pdf",
  repos: {
    forenc: "https://github.com/makeu05/ForenC",
    locard: "https://github.com/makeu05/forensic-assistant",
  },
} as const;

/** Absolute base URL used for canonical links, sitemap and social images. */
export const siteUrl: string =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
