import { site } from "../site";
import type { Localized } from "@/lib/i18n";
import type { ProjectDetail } from "./types";

export const locard: Localized<ProjectDetail> = {
  en: {
    kicker: "Digital Forensics / Software Architecture",
    title: "Locard",
    lead: "A platform project to structure the steps of a digital investigation. It guides a person who orders an investigation (the mandataire) and an expert from the mandate to the final report, and keeps a verifiable record of who did what. The name comes from Locard's exchange principle: every contact leaves a trace.",
    metaDescription:
      "Technical study of Locard, a digital investigation platform project: architecture, design choices, what is tested, what is in development, what is only planned, and known limits.",
    facts: [
      { term: "Stack", value: "Python, FastAPI, React, TypeScript" },
      { term: "Data", value: "PostgreSQL (SQLite in development)" },
      { term: "Analysis", value: "spaCy, rules, TF-IDF" },
      { term: "Documents", value: "LaTeX, Jinja2" },
      { term: "State", value: "In development, 172 backend tests passing" },
    ],
    sections: [
      {
        id: "problem",
        heading: "The problem",
        blocks: [
          {
            type: "p",
            text: "An investigation produces many pieces that have to stay connected: the mandate, who was chosen and why, what each witness said, which hypotheses follow, which report supports which conclusion. When they live in separate files and mailboxes, the history of decisions is hard to rebuild and hard to defend.",
          },
          {
            type: "p",
            text: "Locard keeps these pieces in one case, moves them through an ordered workflow and writes every action to an audit trail. It assists the people involved. It does not decide for them.",
          },
        ],
      },
      {
        id: "design",
        heading: "Architecture and design choices",
        blocks: [
          {
            type: "p",
            text: "A case moves through six steps: mandate, experts, contract, preparation, analysis and report. Each step is done by one of the two roles, and the other role can follow along.",
          },
          {
            type: "dl",
            rows: [
              {
                term: "One API, modules as routers",
                text: "A single FastAPI service mounts every module under `/api/v1`: cases, expert matching, contracts, workflow, mission preparation, witness statements, methodology, reports, audit and explainability. The front end is a separate React and TypeScript application.",
              },
              {
                term: "Rules before models",
                text: "spaCy finds people and places in witness statements. Dates, times, amounts and events come from hand-written rules, and so do the contradictions between statements. A language model can suggest extra candidates, but it is optional and its output is labelled as a suggestion.",
              },
              {
                term: "Every result can be explained",
                text: "Each algorithmic result has a button that explains it in plain language: an expert's score, a detected inconsistency, a report's score. Expert matching is keyword similarity (TF-IDF) combined with availability and experience.",
              },
              {
                term: "Documents without injection",
                text: "Contracts, guides and reports are LaTeX templates filled by Jinja2. Everything a user types is escaped first and `pdflatex` runs with `-no-shell-escape`. A test checks that `\\input{/etc/passwd}` is printed as text, never executed.",
              },
              {
                term: "Integrity of stored files and of the log",
                text: "A file's SHA-256 is computed when it is stored and checked each time it is read. The audit log is append-only, and each entry includes the hash of the previous one, with a verification command.",
              },
              {
                term: "Access rules",
                text: "JWT access tokens and single-use refresh tokens, bcrypt passwords and a lockout after five failed logins. A mandataire only sees their own cases. A case a user cannot access answers not found, so identifiers cannot be probed.",
              },
            ],
          },
        ],
      },
      {
        id: "status",
        heading: "Where each part stands",
        blocks: [
          {
            type: "p",
            text: "Four states are used on this page. They are written down so that a working feature is not mistaken for a validated one.",
          },
          {
            type: "status",
            groups: [
              {
                state: "tested",
                title: "Functional and tested",
                items: [
                  "The six-step case workflow, from mandate to a versioned PDF report with a chain-of-custody section.",
                  "Accounts, roles and access rules, including attack cases: forged, expired and `alg: none` tokens, reused refresh tokens, and probing of other users' cases.",
                  "The hash-chained audit log, its integrity check and its rotation.",
                  "SHA-256 verification of stored files, PDF generation, RGPD export and purge, and rate limiting.",
                  "The backend suite: 172 tests pass. In an earlier run the whole suite also passed on PostgreSQL 16. The README reports about 90% code coverage, measured before the assistant module was added.",
                ],
              },
              {
                state: "exists",
                title: "Implemented, not validated in real conditions",
                items: [
                  "Analysis of witness statements. The rules were measured on a small annotated set written together with them, so the result is a regression check, not an accuracy figure.",
                  "Language-model suggestions of contradictions. On synthetic data the setting found 6 of 14 planted contradictions and made 2 wrong suggestions. A fair evaluation needs statements nobody tuned anything on.",
                  "The Docker Compose and Caddy deployment files are written but have never been built.",
                ],
              },
              {
                state: "building",
                title: "In development",
                items: [
                  "An assistant module for case analysis: command recommendations, drafting of report conclusions and a counter-analysis mode. It can use an external language model or a deterministic offline fallback, and every query is hashed and logged to the audit trail.",
                  "Continuous integration, lint clean-up and database migrations.",
                  "Evaluation of the statement analysis on real, anonymised statements.",
                ],
              },
              {
                state: "planned",
                title: "Planned",
                items: [
                  "Use ForenC manifests as the integrity record of evidence attached to a case. This is an objective only. Nothing is implemented and the interface is not defined.",
                  "External timestamping of the audit log, which is tamper-evident but not tamper-proof.",
                  "Password reset, an administration screen, and import of Word and PDF statements with OCR.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "limits",
        heading: "Current limits",
        blocks: [
          {
            type: "ul",
            items: [
              "It does not decide. Inconsistencies and hypotheses are produced by rules, and the expert reads, verifies and signs the conclusion.",
              "The statement analysis needs explicit dates or weekdays and named people.",
              "Expert matching measures keyword similarity, not skill. It is an aid for the mandataire's choice.",
              "There is no acquisition of physical evidence such as disk images or memory. That is out of scope.",
              "The audit log is tamper-evident, not tamper-proof. Someone who controls the database and recomputes the whole chain would produce a consistent log.",
              "The mandate signature is a simple electronic signature, not a qualified one.",
              "Only text statements are accepted: no Word or PDF import and no OCR.",
              "The rate limiter keeps its counters in memory, per API process.",
            ],
          },
        ],
      },
      {
        id: "repository",
        heading: "Repository",
        blocks: [
          {
            type: "p",
            text: "The repository README documents how to run the project, its screenshots, its settings and the full list of limits.",
          },
          {
            type: "link",
            label: "github.com/makeu05/forensic-assistant",
            href: site.repos.locard,
          },
        ],
      },
    ],
  },

  fr: {
    kicker: "Digital Forensics / Architecture logicielle",
    title: "Locard",
    lead: "Un projet de plateforme qui structure les étapes d'une investigation numérique. Il accompagne la personne qui commande l'investigation (le mandataire) et un expert, du mandat au rapport final, et garde une trace vérifiable de qui a fait quoi. Le nom vient du principe d'échange de Locard : tout contact laisse une trace.",
    metaDescription:
      "Étude technique de Locard, un projet de plateforme d'investigation numérique : architecture, choix de conception, ce qui est testé, ce qui est en développement, ce qui est seulement prévu, et limites connues.",
    facts: [
      { term: "Stack", value: "Python, FastAPI, React, TypeScript" },
      { term: "Données", value: "PostgreSQL (SQLite en développement)" },
      { term: "Analyse", value: "spaCy, règles, TF-IDF" },
      { term: "Documents", value: "LaTeX, Jinja2" },
      { term: "État", value: "En développement, 172 tests backend réussis" },
    ],
    sections: [
      {
        id: "problem",
        heading: "Le problème",
        blocks: [
          {
            type: "p",
            text: "Une investigation produit beaucoup d'éléments qui doivent rester reliés : le mandat, qui a été choisi et pourquoi, ce que chaque témoin a dit, quelles hypothèses en découlent, quel rapport soutient quelle conclusion. Quand ils vivent dans des fichiers et des boîtes mail séparés, l'historique des décisions est difficile à reconstituer et à défendre.",
          },
          {
            type: "p",
            text: "Locard garde ces éléments dans un seul dossier, les fait avancer dans un flux ordonné et écrit chaque action dans une piste d'audit. Il assiste les personnes concernées. Il ne décide pas à leur place.",
          },
        ],
      },
      {
        id: "design",
        heading: "Architecture et choix de conception",
        blocks: [
          {
            type: "p",
            text: "Un dossier passe par six étapes : mandat, experts, contrat, préparation, analyse et rapport. Chaque étape est réalisée par l'un des deux rôles, et l'autre peut suivre.",
          },
          {
            type: "dl",
            rows: [
              {
                term: "Une API, des modules en routeurs",
                text: "Un seul service FastAPI monte chaque module sous `/api/v1` : dossiers, appariement d'experts, contrats, flux de travail, préparation de mission, témoignages, méthodologie, rapports, audit et explicabilité. Le front end est une application React et TypeScript séparée.",
              },
              {
                term: "Des règles avant les modèles",
                text: "spaCy repère les personnes et les lieux dans les témoignages. Les dates, heures, montants et événements viennent de règles écrites à la main, tout comme les contradictions entre témoignages. Un modèle de langage peut proposer des candidats supplémentaires, mais il est optionnel et sa sortie est présentée comme une suggestion.",
              },
              {
                term: "Chaque résultat peut être expliqué",
                text: "Chaque résultat algorithmique a un bouton qui l'explique en langage clair : le score d'un expert, une incohérence détectée, le score d'un rapport. L'appariement des experts combine une similarité de mots-clés (TF-IDF), la disponibilité et l'expérience.",
              },
              {
                term: "Des documents sans injection",
                text: "Les contrats, guides et rapports sont des modèles LaTeX remplis par Jinja2. Tout ce que saisit un utilisateur est échappé d'abord, et `pdflatex` s'exécute avec `-no-shell-escape`. Un test vérifie que `\\input{/etc/passwd}` est imprimé comme du texte, jamais exécuté.",
              },
              {
                term: "Intégrité des fichiers stockés et du journal",
                text: "Le SHA-256 d'un fichier est calculé à son stockage et revérifié à chaque lecture. Le journal d'audit est en ajout seul : chaque entrée inclut l'empreinte de la précédente, avec une commande de vérification.",
              },
              {
                term: "Règles d'accès",
                text: "Jetons d'accès JWT et jetons de rafraîchissement à usage unique, mots de passe bcrypt et blocage après cinq échecs de connexion. Un mandataire ne voit que ses dossiers. Un dossier inaccessible répond introuvable, donc les identifiants ne peuvent pas être sondés.",
              },
            ],
          },
        ],
      },
      {
        id: "status",
        heading: "Où en est chaque partie",
        blocks: [
          {
            type: "p",
            text: "Quatre états sont utilisés sur cette page. Ils sont écrits pour qu'une fonction qui marche ne soit pas confondue avec une fonction validée.",
          },
          {
            type: "status",
            groups: [
              {
                state: "tested",
                title: "Fonctionnel et testé",
                items: [
                  "Le flux de dossier en six étapes, du mandat à un rapport PDF versionné avec une section sur la chaîne de conservation.",
                  "Les comptes, rôles et règles d'accès, y compris des cas d'attaque : jetons falsifiés, expirés et `alg: none`, jetons de rafraîchissement réutilisés, sondage des dossiers d'autres utilisateurs.",
                  "Le journal d'audit chaîné par empreintes, sa vérification d'intégrité et sa rotation.",
                  "La vérification SHA-256 des fichiers stockés, la génération de PDF, l'export et la purge RGPD, et la limitation de débit.",
                  "La suite backend : 172 tests réussis. Lors d'une exécution antérieure, toute la suite avait aussi réussi sur PostgreSQL 16. Le README indique environ 90 % de couverture, mesurée avant l'ajout du module assistant.",
                ],
              },
              {
                state: "exists",
                title: "Implémenté, non validé en conditions réelles",
                items: [
                  "L'analyse des témoignages. Les règles ont été mesurées sur un petit jeu annoté écrit en même temps qu'elles : le résultat est un contrôle de non-régression, pas une mesure de précision.",
                  "Les suggestions de contradictions par modèle de langage. Sur des données synthétiques, le réglage retenu a trouvé 6 contradictions plantées sur 14 et fait 2 suggestions fausses. Une évaluation honnête demande des témoignages sur lesquels personne n'a rien réglé.",
                  "Les fichiers de déploiement Docker Compose et Caddy sont écrits mais n'ont jamais été construits.",
                ],
              },
              {
                state: "building",
                title: "En développement",
                items: [
                  "Un module assistant pour l'analyse d'un dossier : recommandations de commandes, rédaction de conclusions de rapport et mode de contre-analyse. Il peut utiliser un modèle de langage externe ou un repli déterministe hors ligne, et chaque requête est hachée et consignée dans la piste d'audit.",
                  "L'intégration continue, le nettoyage du lint et les migrations de base de données.",
                  "L'évaluation de l'analyse des témoignages sur des témoignages réels et anonymisés.",
                ],
              },
              {
                state: "planned",
                title: "Prévu",
                items: [
                  "Utiliser les manifestes de ForenC comme enregistrement d'intégrité des preuves rattachées à un dossier. C'est un objectif seulement. Rien n'est implémenté et l'interface n'est pas définie.",
                  "L'horodatage externe du journal d'audit, qui est résistant à l'altération au sens de la détection, pas de la prévention.",
                  "La réinitialisation du mot de passe, un écran d'administration, et l'import de témoignages Word et PDF avec OCR.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "limits",
        heading: "Limites actuelles",
        blocks: [
          {
            type: "ul",
            items: [
              "Il ne décide pas. Les incohérences et hypothèses viennent de règles, et l'expert lit, vérifie et signe la conclusion.",
              "L'analyse des témoignages demande des dates ou des jours de semaine explicites et des personnes nommées.",
              "L'appariement des experts mesure une similarité de mots-clés, pas une compétence. C'est une aide au choix du mandataire.",
              "Il n'y a pas d'acquisition de preuves physiques comme des images disque ou de la mémoire. C'est hors périmètre.",
              "Le journal d'audit rend l'altération détectable, il ne l'empêche pas. Quelqu'un qui contrôle la base de données et recalcule toute la chaîne produirait un journal cohérent.",
              "La signature du mandat est une signature électronique simple, pas une signature qualifiée.",
              "Seuls les témoignages en texte sont acceptés : pas d'import Word ou PDF, pas d'OCR.",
              "Le limiteur de débit garde ses compteurs en mémoire, par processus d'API.",
            ],
          },
        ],
      },
      {
        id: "repository",
        heading: "Dépôt",
        blocks: [
          {
            type: "p",
            text: "Le README du dépôt décrit comment lancer le projet, ses captures d'écran, ses réglages et la liste complète des limites.",
          },
          {
            type: "link",
            label: "github.com/makeu05/forensic-assistant",
            href: site.repos.locard,
          },
        ],
      },
    ],
  },
};
