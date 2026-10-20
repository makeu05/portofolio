export type Category =
  | "forensics"
  | "networking"
  | "security"
  | "systems"
  | "audit";

export type Pillar = {
  title: string;
  text: string;
  links: { label: string; to: "forenc" | "locard" | "projects" }[];
};

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    about: string;
    projects: string;
    skills: string;
    research: string;
    background: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    menu: string;
    language: string;
    theme: string;
    skip: string;
    home: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    ctaProjects: string;
    ctaResume: string;
    ctaContact: string;
    status: string[];
  };
  about: {
    label: string;
    title: string;
    lead: string;
    body: string;
    seenIn: string;
    pillars: Pillar[];
  };
  projects: {
    label: string;
    title: string;
    intro: string;
    filterLabel: string;
    all: string;
    categories: Record<Category, string>;
    /** "{n}" is replaced by the number of visible projects. */
    count: string;
    readStudy: string;
    sourceCode: string;
    opensInNewTab: string;
  };
  skills: {
    label: string;
    title: string;
    intro: string;
    groups: { title: string; items: string[] }[];
  };
  research: {
    label: string;
    title: string;
    intro: string;
    axes: { title: string; text: string }[];
  };
  background: {
    label: string;
    title: string;
    experience: string;
    education: string;
    training: string;
    languages: string;
    entries: { date: string; title: string; org?: string; text: string }[];
    earlier: string;
    earlierEntries: { date: string; title: string; text: string }[];
    educationEntries: { date: string; title: string; text: string }[];
    trainingItems: string[];
    languageItems: string[];
  };
  contact: {
    label: string;
    title: string;
    text: string;
    availability: string;
    items: { email: string; github: string; linkedin: string; resume: string };
    resumeHint: string;
  };
  footer: { top: string };
  detail: {
    breadcrumb: string;
    back: string;
    onThisPage: string;
    repository: string;
    next: string;
    stateLegend: string;
  };
  notFound: { title: string; text: string; back: string };
  error: { title: string; text: string; retry: string };
};
