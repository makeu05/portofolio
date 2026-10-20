# Portfolio

Personal portfolio of MAKEU TENKU STELY BELVA, cybersecurity and digital forensics engineer.
Bilingual (English and French), static pages generated with Next.js.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000, redirects to /en or /fr
npm run build      # production build
npm run start      # serve the production build
npm run lint
npx tsc --noEmit
```

## Where to edit

Everything a visitor reads or clicks comes from `content/`. No text is written in the components.

| File | Content |
|---|---|
| `content/site.ts` | name, email, GitHub, LinkedIn, résumé path, repository URLs |
| `content/en.ts`, `content/fr.ts` | all interface text, one dictionary per language, checked against `content/types.ts` |
| `content/projects.ts` | project list shown on the home page (set `hidden: true` to unpublish one) |
| `content/details/forenc.ts`, `content/details/locard.ts` | full write-ups, in both languages |
| `public/cv/` | résumé PDF |

To add a detailed study: create `content/details/<slug>.ts`, register it in `content/details/index.ts`,
and set `detail: true` on the matching entry in `content/projects.ts`.

To replace the résumé, put the new PDF in `public/cv/` and update `cv` in `content/site.ts`.

## Themes

Dark and light themes. The first visit follows the system setting, the toggle in the header saves
the choice in the browser. Colours are defined once in `app/globals.css` as roles (background,
surface, text, secondary text, accent, line). The light accent and secondary text are darker than
their dark equivalents so text keeps at least 4.5:1 contrast. Muted Bordeaux is identical in both
themes and is never used for text.

## Structure

```
app/[lang]/          pages (home, project studies), layout, not-found, error, social image
app/sitemap.ts       sitemap with language alternates
proxy.ts             sends / to /en or /fr from the Accept-Language header
components/          display components, no content
content/             all text and data
lib/i18n.ts          language helpers
```

## Deploy

Set `NEXT_PUBLIC_SITE_URL` to the public address (for example `https://example.org`) so that
canonical links, the sitemap and the social image use it. Any host that runs Next.js works.
The site needs a server runtime for `proxy.ts` (language redirect on `/`).

## Editorial rules used for the text

No em dashes, no percentages for skill levels, no school name, grades or ranking, and no project
that cannot be checked. Where a feature is planned or unfinished, the page says so.
