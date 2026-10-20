import { site } from "./site";
import type { Category } from "./types";
import type { Localized } from "@/lib/i18n";

export type ProjectEntry = {
  slug: string;
  categories: Category[];
  year?: string;
  tech: string[];
  repo?: string;
  /** True when a full write-up exists at /[lang]/projects/[slug]. */
  detail?: boolean;
  /** Keep the entry in the data but do not publish it until details exist. */
  hidden?: boolean;
  text: Localized<{ title: string; description: string; status?: string }>;
};

export const projects: ProjectEntry[] = [
  {
    slug: "forenc",
    categories: ["forensics", "audit"],
    year: "2026",
    tech: ["C", "OpenSSL", "json-c", "Make", "Bash"],
    repo: site.repos.forenc,
    detail: true,
    text: {
      en: {
        title: "ForenC",
        description:
          "Command-line tool to compute SHA-256 fingerprints, generate file manifests and compare different states of a data set.",
        status: "Version 0.2.0, MIT licence",
      },
      fr: {
        title: "ForenC",
        description:
          "Outil en ligne de commande pour calculer des empreintes SHA-256, générer des manifestes de fichiers et comparer différents états d'un ensemble de données.",
        status: "Version 0.2.0, licence MIT",
      },
    },
  },
  {
    slug: "locard",
    categories: ["forensics", "audit"],
    year: "2026",
    tech: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "spaCy", "LaTeX"],
    repo: site.repos.locard,
    detail: true,
    text: {
      en: {
        title: "Locard",
        description:
          "Digital investigation platform project, meant to structure analysis operations and help organise the technical elements of an inquiry.",
        status: "In development",
      },
      fr: {
        title: "Locard",
        description:
          "Projet de plateforme d'investigation numérique destiné à structurer les opérations d'analyse et à faciliter l'organisation des éléments techniques d'une enquête.",
        status: "En développement",
      },
    },
  },
  {
    slug: "network-architectures",
    categories: ["networking"],
    year: "2025 - 2026",
    tech: ["EVE-NG", "GNS3", "BGP", "MPLS", "VRF"],
    text: {
      en: {
        title: "Secure network architectures: MPLS VPN and high-availability campus",
        description:
          "MPLS L3 VPN (VRF, eBGP, Route Reflector), L2 VPN (VPLS) and high-availability campus networks, designed and validated in simulation. Includes multi-operator eBGP, traffic engineering, VLAN and DMZ segmentation, and internal intrusion tests.",
        status: "Simulation lab",
      },
      fr: {
        title: "Architectures réseau sécurisées : MPLS VPN et campus haute disponibilité",
        description:
          "MPLS L3 VPN (VRF, eBGP, Route Reflector), L2 VPN (VPLS) et réseaux de campus à haute disponibilité, conçus et validés en simulation. Comprend eBGP multi-opérateurs, ingénierie de trafic, segmentation VLAN et DMZ, et tests d'intrusion internes.",
        status: "Laboratoire de simulation",
      },
    },
  },
  {
    slug: "workstation-investigation",
    categories: ["forensics", "security"],
    year: "2026",
    tech: ["FTK Imager", "Autopsy", "KAPE", "EZ Tools", "PowerShell", "MITRE ATT&CK"],
    text: {
      en: {
        title: "Forensic investigation of a compromised Windows workstation",
        description:
          "The disk image was acquired in E01 format with an integrity check. The full attack chain was then reconstructed and mapped to MITRE ATT&CK.",
      },
      fr: {
        title: "Investigation forensique d'un poste Windows compromis",
        description:
          "L'image disque a été acquise au format E01 avec vérification d'intégrité. La chaîne d'attaque complète a ensuite été reconstituée et cartographiée selon MITRE ATT&CK.",
      },
    },
  },
  {
    slug: "binary-diffing",
    categories: ["security"],
    year: "2026",
    tech: ["Ghidra", "ghidriff"],
    text: {
      en: {
        title: "Binary diffing of two library versions (XZ Utils case)",
        description:
          "Two versions of the library were compared with Ghidra and ghidriff in an isolated virtual environment. The aim was to tell a real change from recompilation noise.",
      },
      fr: {
        title: "Analyse différentielle de deux versions d'une bibliothèque (cas XZ Utils)",
        description:
          "Deux versions de la bibliothèque ont été comparées avec Ghidra et ghidriff dans un environnement virtualisé isolé. L'objectif était de distinguer un vrai changement du bruit de recompilation.",
      },
    },
  },
  {
    slug: "audit-tool",
    categories: ["audit", "security"],
    year: "2025",
    tech: ["Python", "ISO 27001", "ISO 27005", "COSO", "COBIT"],
    text: {
      en: {
        title: "Audit support tool for an information system",
        description:
          "Tool built on the ISO 27001, ISO 27005, COSO and COBIT frameworks, used for a full technical audit of an application and the written recommendations that followed.",
      },
      fr: {
        title: "Outil d'aide à l'audit d'un système d'information",
        description:
          "Outil fondé sur les référentiels ISO 27001, ISO 27005, COSO et COBIT, utilisé pour un audit technique complet d'une application et pour la rédaction des recommandations.",
      },
    },
  },
  {
    // Kept out of the page until a date and a verifiable description exist.
    slug: "linux-kernel",
    categories: ["systems"],
    tech: ["Linux", "Kernel"],
    hidden: true,
    text: {
      en: {
        title: "Contribution to a Linux-based operating system for students",
        description: "Study and modification of the kernel.",
      },
      fr: {
        title: "Contribution à un système d'exploitation basé sur Linux pour étudiants",
        description: "Étude et modification du noyau.",
      },
    },
  },
];

export const publishedProjects = projects.filter((p) => !p.hidden);

export const detailSlugs = publishedProjects
  .filter((p) => p.detail)
  .map((p) => p.slug);
