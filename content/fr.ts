import type { Dictionary } from "./types";

export const fr: Dictionary = {
  meta: {
    title: "MAKEU TENKU STELY BELVA | Ingénieure en cybersécurité et investigation numérique",
    description:
      "Portfolio d'une ingénieure en cybersécurité et investigation numérique. Études techniques de ForenC et Locard, laboratoires d'architecture réseau, analyse de binaires et axes de recherche en sécurité.",
  },
  nav: {
    about: "À propos",
    projects: "Projets",
    skills: "Compétences",
    research: "Recherche",
    background: "Parcours",
    contact: "Contact",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    menu: "Navigation principale",
    language: "Langue",
    theme: "Thème clair",
    skip: "Aller au contenu",
    home: "Accueil",
  },
  hero: {
    eyebrow: "CYBERSÉCURITÉ / INVESTIGATION NUMÉRIQUE / RÉSEAUX",
    title:
      "Comprendre les systèmes. Examiner les traces numériques. Construire des infrastructures sûres.",
    text: "Je travaille sur des problématiques de cybersécurité, d'investigation numérique et d'architecture réseau. Mon approche repose sur l'expérimentation, l'analyse technique et la conception d'outils dont le fonctionnement peut être expliqué et vérifié.",
    ctaProjects: "Voir les projets",
    ctaResume: "Consulter le CV",
    ctaContact: "Me contacter",
    status: [
      "Élève-ingénieure en dernière année, diplôme prévu en 2027",
      "Recherche un stage de fin d'études de 5 à 6 mois à partir de février 2027",
    ],
  },
  about: {
    label: "À propos",
    title: "Une approche technique de la sécurité.",
    lead: "Je m'intéresse à la manière dont les systèmes fonctionnent, aux traces qu'ils laissent et aux méthodes qui permettent d'analyser leur comportement. Je conçois des outils techniques et j'expérimente autour de la cybersécurité, de l'investigation numérique et des architectures réseau.",
    body: "Mon travail alterne entre trois activités : des réseaux que je conçois et teste en simulation, des preuves que j'essaie de lire sans les altérer, et des outils que j'écris pour que ces étapes puissent être refaites par quelqu'un d'autre. Quand je ne sais pas expliquer comment un résultat a été obtenu, je ne lui fais pas encore confiance.",
    seenIn: "Dans mes travaux",
    pillars: [
      {
        title: "Comprendre",
        text: "Comprendre un système, ses composants et leurs interactions avant de tirer des conclusions. Dans les laboratoires MPLS VPN, il s'agissait de concevoir une topologie puis de la valider en simulation. Dans l'étude de XZ Utils, il s'agissait de distinguer un vrai changement du bruit de recompilation.",
        links: [{ label: "Travaux réseau et d'analyse", to: "projects" }],
      },
      {
        title: "Examiner",
        text: "Examiner les traces disponibles, confronter les observations et documenter les résultats. Sur un poste Windows compromis, je suis partie d'une image disque vérifiée et j'ai reconstitué la chaîne d'attaque étape par étape, cartographiée selon MITRE ATT&CK.",
        links: [{ label: "Travaux d'investigation", to: "projects" }],
      },
      {
        title: "Construire",
        text: "Développer des outils et des expérimentations qui rendent certaines opérations plus reproductibles et plus faciles à vérifier. ForenC calcule des empreintes et compare des ensembles de fichiers. Locard organise les étapes d'une investigation et en garde une trace vérifiable.",
        links: [
          { label: "ForenC", to: "forenc" },
          { label: "Locard", to: "locard" },
        ],
      },
    ],
  },
  projects: {
    label: "Projets sélectionnés",
    title: "Des études techniques, avec leurs limites.",
    intro:
      "Chaque entrée indique le problème, les outils et ce qui manque encore. Deux d'entre elles ont une étude complète.",
    filterLabel: "Filtrer les projets par domaine",
    all: "Tous",
    categories: {
      forensics: "Investigation numérique",
      networking: "Réseaux",
      security: "Analyse de sécurité",
      systems: "Linux et systèmes",
      audit: "Audit et traçabilité",
    },
    count: "{n} affiché(s)",
    readStudy: "Lire l'étude",
    sourceCode: "Code source",
    opensInNewTab: "s'ouvre dans un nouvel onglet",
  },
  skills: {
    label: "Compétences techniques",
    title: "Ce que je pratique.",
    intro:
      "Uniquement des outils et méthodes utilisés en laboratoire, en projet ou en poste. Pas de score de maîtrise.",
    groups: [
      {
        title: "Investigation numérique",
        items: [
          "SHA-256 et vérification d'intégrité",
          "Analyse de fichiers et de métadonnées",
          "Comparaison d'états de fichiers",
          "Analyse de traces numériques",
          "Documentation des résultats",
        ],
      },
      {
        title: "Cybersécurité",
        items: [
          "Méthodes d'audit",
          "MITRE ATT&CK",
          "ISO 27001 et ISO 27005",
          "Environnements de test sous Linux",
        ],
      },
      {
        title: "Réseaux",
        items: [
          "TCP/IP et VLAN",
          "Routage OSPF et BGP",
          "MPLS",
          "Haute disponibilité",
          "Simulation réseau",
          "Cisco ASA, FortiGate, Palo Alto, pfSense",
        ],
      },
      {
        title: "Systèmes et développement",
        items: [
          "C",
          "Python",
          "Bash",
          "TypeScript et SQL",
          "Linux",
          "Git et GCC",
          "GitHub Actions et Terraform",
          "Analyse technique de programmes",
        ],
      },
      {
        title: "Outils",
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
    label: "Recherche",
    title: "Axes de recherche",
    intro:
      "Ce sont des sujets sur lesquels je veux travailler. Ce ne sont ni des publications ni des résultats.",
    axes: [
      {
        title: "Investigation numérique et réponse à incident",
        text: "Comment reconstituer un incident à partir de ce qu'un système laisse derrière lui : images disque, journaux, métadonnées de fichiers. Je tiens à préserver les preuves avant d'y toucher, à respecter l'ordre des opérations et à produire des conclusions qu'un autre analyste peut vérifier pas à pas.",
      },
      {
        title: "Analyse de binaires et sécurité logicielle",
        text: "Distinguer un vrai changement de comportement du bruit de recompilation quand on compare deux versions d'un même logiciel. Mon étude de XZ Utils avec Ghidra et ghidriff était un premier exercice. Je veux apprendre à le faire avec plus de rigueur et sur des bases de code plus grandes.",
      },
      {
        title: "Architectures réseau et systèmes distribués",
        text: "Concevoir et tester en simulation des topologies de type opérateur : MPLS VPN, eBGP entre opérateurs, réseaux de campus à haute disponibilité. Je m'intéresse à l'effet des choix de segmentation, de redondance et d'ingénierie de trafic sur la résilience comme sur la surface d'attaque.",
      },
      {
        title: "Outils de sécurité et analyse reproductible",
        text: "Des outils dont le résultat peut être rejoué et vérifié : manifestes d'empreintes, journaux d'audit chaînés avec SHA-256, limites écrites. ForenC et Locard viennent de cet intérêt. Je veux aussi apprendre à évaluer correctement ces outils, car mes tests actuels utilisent des données que j'ai écrites moi-même.",
      },
    ],
  },
  background: {
    label: "Parcours",
    title: "Formation et expériences techniques.",
    experience: "Expérience",
    education: "Formation",
    training: "Certifications et formations",
    languages: "Langues",
    entries: [
      {
        date: "Depuis juin 2026",
        title: "Software Developer et Lead Implementation",
        org: "NexCQI Solutions LLC",
        text: "Développement full-stack et sécurisation d'un système d'information en production. Déploiements automatisés multi-instances, avec des contrôles de sécurité intégrés au pipeline CI/CD (GitHub Actions, Terraform, GCP).",
      },
      {
        date: "Juil. - Sept. 2026",
        title: "Stagiaire, Réseaux et Cybersécurité",
        org: "Académie de formation",
        text: "Conception et validation d'architectures réseau 3-tiers sous EVE-NG (OSPF, VRRP, VLANs). Configuration de pare-feux Cisco ASA et de clusters FortiGate en haute disponibilité, sur équipements physiques et virtuels.",
      },
      {
        date: "Juil. - Sept. 2026",
        title: "Tutrice, cours de soutien CCNA",
        org: "Académie de formation",
        text: "Animation de cours de soutien sur les premiers modules du CCNA pour un petit groupe d'étudiants.",
      },
    ],
    earlier: "Auparavant",
    earlierEntries: [
      {
        date: "Juil. - Août 2025",
        title: "Formatrice, programme de codage de vacances",
        text: "Ateliers HTML et Arduino/Raspberry Pi pour des enfants de 8 à 15 ans, DHI Academy.",
      },
      {
        date: "Avr. - Juin 2023",
        title: "Stagiaire informatique, MEGASOFT SARL",
        text: "Développement et maintenance d'applications métier en Java.",
      },
    ],
    educationEntries: [
      {
        date: "Prévu en 2027",
        title: "Diplôme d'ingénieur, Cybersécurité et Investigation Numérique",
        text: "Cycle ingénieur de conception. Enseignements : intelligence artificielle, réseaux informatiques, investigation numérique avancée, sécurité des réseaux et des systèmes.",
      },
      {
        date: "2024",
        title: "Licence de Technologie en Génie Informatique",
        text: "Administration système, probabilités et statistiques, programmation en C et Python.",
      },
    ],
    trainingItems: [
      "Fortinet Certified Associate et Fundamentals en cybersécurité",
      "SecNumAcadémie (ANSSI)",
      "IBM SkillsBuild : 7 certifications, dont Incident Response et Systems Forensics, et Cloud Security",
      "Cours CCNP ENCOR terminés, CCNA en préparation",
    ],
    languageItems: ["Français : langue maternelle", "Anglais : B1 à B2"],
  },
  contact: {
    label: "Contact",
    title: "Ouverte aux opportunités de recherche et d'ingénierie.",
    text: "Je suis intéressée par les projets de recherche et d'ingénierie en cybersécurité, investigation numérique, systèmes et réseaux. Je souhaite contribuer à des travaux techniques rigoureux et développer des outils documentés et vérifiables.",
    availability:
      "Disponible pour un stage de fin d'études de 5 à 6 mois à partir de février 2027, en vue d'un doctorat.",
    items: {
      email: "E-mail",
      github: "GitHub",
      linkedin: "LinkedIn",
      resume: "CV (PDF)",
    },
    resumeHint: "en français, 2 pages",
  },
  footer: { top: "Retour en haut" },
  detail: {
    breadcrumb: "Fil d'Ariane",
    back: "Tous les projets",
    onThisPage: "Sur cette page",
    repository: "Dépôt",
    next: "Étude suivante",
    stateLegend: "État de chaque partie",
  },
  notFound: {
    title: "Page introuvable",
    text: "Cette adresse ne correspond à aucune page du site.",
    back: "Retour à l'accueil",
  },
  error: {
    title: "Une erreur est survenue",
    text: "La page n'a pas pu être affichée. Recharger la page suffit en général.",
    retry: "Réessayer",
  },
};
