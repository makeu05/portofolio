import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "MAKEU TENKU STELY BELVA | Cybersecurity & Digital Forensics Engineer",
    description:
      "Portfolio of a cybersecurity and digital forensics engineer. Technical studies of ForenC and Locard, network architecture labs, binary analysis and security research interests.",
  },
  nav: {
    about: "About",
    projects: "Projects",
    skills: "Skills",
    research: "Research",
    background: "Background",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menu: "Main navigation",
    language: "Language",
    theme: "Light theme",
    skip: "Skip to content",
    home: "Home",
  },
  hero: {
    eyebrow: "CYBERSECURITY / DIGITAL FORENSICS / NETWORKS",
    title:
      "Understanding systems. Investigating digital traces. Building secure infrastructure.",
    text: "I work on cybersecurity, digital forensics and network architecture. My approach relies on experimentation, technical analysis and building tools whose behaviour can be explained and verified.",
    ctaProjects: "Explore projects",
    ctaResume: "View résumé",
    ctaContact: "Get in touch",
    status: [
      "Final-year engineering student, degree expected 2027",
      "Looking for a 5 to 6 month end-of-studies internship from February 2027",
    ],
  },
  about: {
    label: "About",
    title: "A technical approach to security.",
    lead: "I am interested in how systems work, in the traces they leave and in the methods that make it possible to analyse their behaviour. I design technical tools and experiment with cybersecurity, digital forensics and network architecture.",
    body: "My work moves between three activities: networks I design and test in simulation, evidence I try to read without altering it, and tools I write so that these steps can be repeated by someone else. When I cannot explain how a result was obtained, I do not trust it yet.",
    seenIn: "Seen in",
    pillars: [
      {
        title: "Understand",
        text: "Understand a system, its components and their interactions before drawing conclusions. In the MPLS VPN labs, the work was to design a topology and then validate it in simulation. In the XZ Utils study, it was to tell a real change from recompilation noise.",
        links: [{ label: "Network and analysis work", to: "projects" }],
      },
      {
        title: "Investigate",
        text: "Examine the available traces, compare observations and document the results. On a compromised Windows workstation I started from a verified disk image and rebuilt the attack chain step by step, mapped to MITRE ATT&CK.",
        links: [{ label: "Forensic work", to: "projects" }],
      },
      {
        title: "Build",
        text: "Develop tools and experiments that make some operations more reproducible and easier to verify. ForenC fingerprints and compares file sets. Locard organises the steps of an investigation and keeps a verifiable record of them.",
        links: [
          { label: "ForenC", to: "forenc" },
          { label: "Locard", to: "locard" },
        ],
      },
    ],
  },
  projects: {
    label: "Selected projects",
    title: "Technical studies, with their limits.",
    intro:
      "Each entry states the problem, the tools and what is known to be missing. Two of them have a full write-up.",
    filterLabel: "Filter projects by domain",
    all: "All",
    categories: {
      forensics: "Digital forensics",
      networking: "Networking",
      security: "Security analysis",
      systems: "Linux and systems",
      audit: "Audit and traceability",
    },
    count: "{n} shown",
    readStudy: "Read the study",
    sourceCode: "Source code",
    opensInNewTab: "opens in a new tab",
  },
  skills: {
    label: "Technical skills",
    title: "What I practise.",
    intro:
      "Only tools and methods I have used in labs, projects or work. No proficiency scores.",
    groups: [
      {
        title: "Digital Forensics",
        items: [
          "SHA-256 and integrity verification",
          "File and metadata analysis",
          "Comparison of file states",
          "Analysis of digital traces",
          "Documentation of results",
        ],
      },
      {
        title: "Cybersecurity",
        items: [
          "Audit methods",
          "MITRE ATT&CK",
          "ISO 27001 and ISO 27005",
          "Test environments on Linux",
        ],
      },
      {
        title: "Networking",
        items: [
          "TCP/IP and VLAN",
          "OSPF and BGP routing",
          "MPLS",
          "High availability",
          "Network simulation",
          "Cisco ASA, FortiGate, Palo Alto, pfSense",
        ],
      },
      {
        title: "Systems & Development",
        items: [
          "C",
          "Python",
          "Bash",
          "TypeScript and SQL",
          "Linux",
          "Git and GCC",
          "GitHub Actions and Terraform",
          "Technical analysis of programs",
        ],
      },
      {
        title: "Tools",
        items: [
          "Wireshark",
          "Ghidra",
          "Autopsy",
          "Volatility",
          "ExifTool",
          "Binwalk",
          "EVE-NG",
          "GNS3",
          "Cisco Packet Tracer",
        ],
      },
    ],
  },
  research: {
    label: "Research",
    title: "Research interests",
    intro:
      "These are topics I want to work on. They are not publications or results.",
    axes: [
      {
        title: "Digital forensics and incident response",
        text: "How an incident can be reconstructed from what a system leaves behind: disk images, logs, file metadata. I care about preserving evidence before touching it, about the order of operations, and about findings that another analyst can check step by step.",
      },
      {
        title: "Binary analysis and software security",
        text: "Telling a real change of behaviour from recompilation noise when two builds of the same software are compared. My study of XZ Utils with Ghidra and ghidriff was a first exercise. I want to learn to do this with more rigour and on larger code bases.",
      },
      {
        title: "Network architectures and distributed systems",
        text: "Designing and testing carrier-style topologies in simulation: MPLS VPN, eBGP between operators, high-availability campus networks. I am interested in how segmentation, redundancy and traffic engineering choices affect both resilience and attack surface.",
      },
      {
        title: "Security tooling and reproducible analysis",
        text: "Tools whose output can be re-run and checked: hash manifests, audit logs chained with SHA-256, written limits. ForenC and Locard come from this interest. I also want to learn how to evaluate such tools properly, since my tests so far use data I wrote myself.",
      },
    ],
  },
  background: {
    label: "Background",
    title: "Education and technical experience.",
    experience: "Experience",
    education: "Education",
    training: "Certifications and training",
    languages: "Languages",
    entries: [
      {
        date: "Since June 2026",
        title: "Software Developer and Lead Implementation",
        org: "NexCQI Solutions LLC",
        text: "Full-stack development and hardening of an information system in production. Automated multi-instance deployments with security checks built into the CI/CD pipeline (GitHub Actions, Terraform, GCP).",
      },
      {
        date: "Jul - Sep 2026",
        title: "Intern, Networks and Cybersecurity",
        org: "Training academy",
        text: "Designed and validated 3-tier network architectures in EVE-NG (OSPF, VRRP, VLANs). Configured Cisco ASA firewalls and FortiGate high-availability clusters on physical and virtual equipment.",
      },
      {
        date: "Jul - Sep 2026",
        title: "CCNA tutor",
        org: "Training academy",
        text: "Ran support classes on the first CCNA modules for a small group of students.",
      },
    ],
    earlier: "Earlier",
    earlierEntries: [
      {
        date: "Jul - Aug 2025",
        title: "Trainer, holiday coding program",
        text: "HTML and Arduino/Raspberry Pi workshops for children aged 8 to 15, DHI Academy.",
      },
      {
        date: "Apr - Jun 2023",
        title: "IT intern, MEGASOFT SARL",
        text: "Development and maintenance of business applications in Java.",
      },
    ],
    educationEntries: [
      {
        date: "Expected 2027",
        title: "Engineering degree, Cybersecurity and Digital Forensics",
        text: "Design engineer programme. Coursework includes artificial intelligence, computer networks, advanced digital forensics and network and system security.",
      },
      {
        date: "2024",
        title: "Bachelor of Technology, Computer Engineering",
        text: "System administration, probability and statistics, programming in C and Python.",
      },
    ],
    trainingItems: [
      "Fortinet Certified Associate and Fundamentals in Cybersecurity",
      "SecNumAcadémie (ANSSI)",
      "IBM SkillsBuild: 7 certifications, including Incident Response and Systems Forensics, and Cloud Security",
      "CCNP ENCOR coursework completed, CCNA in preparation",
    ],
    languageItems: ["French: native", "English: B1 to B2"],
  },
  contact: {
    label: "Contact",
    title: "Open to research and engineering opportunities.",
    text: "I am interested in research and engineering projects in cybersecurity, digital forensics, systems and networks. I want to contribute to rigorous technical work and build documented, verifiable tools.",
    availability:
      "Available for an end-of-studies internship of 5 to 6 months from February 2027, with a doctorate in view.",
    items: {
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      resume: "Résumé (PDF)",
    },
    resumeHint: "French, 2 pages",
  },
  footer: { top: "Back to top" },
  detail: {
    breadcrumb: "Breadcrumb",
    back: "All projects",
    onThisPage: "On this page",
    repository: "Repository",
    next: "Next study",
    stateLegend: "Status of each part",
  },
  notFound: {
    title: "Page not found",
    text: "This address does not match any page of the site.",
    back: "Back to the home page",
  },
  error: {
    title: "Something went wrong",
    text: "The page could not be displayed. Reloading usually fixes it.",
    retry: "Try again",
  },
};
