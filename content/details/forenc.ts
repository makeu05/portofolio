import { site } from "../site";
import type { Localized } from "@/lib/i18n";
import type { ProjectDetail } from "./types";

const COMMANDS = `$ make
$ ./forenc --version
ForenC version 0.2.0

$ printf 'abc' > abc.txt
$ ./forenc hash abc.txt
SHA-256  ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad  abc.txt

$ ./forenc scan evidence -o baseline.json
$ ./forenc verify baseline.json
$ ./forenc diff baseline.json followup.json`;

const MANIFEST = `{
  "tool": "ForenC",
  "version": "0.1.0",
  "algorithm": "SHA-256",
  "files": [
    {
      "path": "evidence/stable.txt",
      "size": 7,
      "sha256": "2b92ea252be0fbc26f70317cdaa7b6411ea634b50d55338cd8c495e4dbf25d1d"
    }
  ]
}`;

const DIFF_OUTPUT = `$ ./forenc diff baseline.json followup.json
Comparaison des manifestes
Référence : baseline.json
Nouveau   : followup.json

MODIFIED  evidence/modified.txt
DELETED   evidence/deleted.txt
UNCHANGED evidence/stable.txt
ADDED     evidence/added.txt

Résumé de la comparaison
Ajoutés      : 1
Supprimés    : 1
Modifiés     : 1
Inchangés    : 1
Référence    : 3 fichier(s)
Nouveau      : 3 fichier(s)`;

export const forenc: Localized<ProjectDetail> = {
  en: {
    kicker: "Digital Forensics / C Development",
    title: "ForenC",
    lead: "A command-line tool that computes SHA-256 fingerprints, generates JSON manifests of a directory and compares different states of a data set.",
    metaDescription:
      "Technical study of ForenC, a C command-line tool for SHA-256 hashing, file manifests and comparison of evidence snapshots: design, integrity decisions, tests and known limits.",
    facts: [
      { term: "Language", value: "C (C11)" },
      { term: "Libraries", value: "OpenSSL, json-c" },
      { term: "Build", value: "GNU Make, gcc" },
      { term: "Version", value: "0.2.0, MIT licence" },
    ],
    sections: [
      {
        id: "problem",
        heading: "The problem",
        blocks: [
          {
            type: "p",
            text: "When evidence files are copied, moved or examined, two questions come up later. Are these files still the same as when they were collected? If not, which ones changed? `sha256sum` answers the first question for a handful of files. On a whole directory tree it becomes manual work that is easy to get wrong.",
          },
          {
            type: "p",
            text: "ForenC answers both questions on a full tree, with output that can be used in scripts. It is an educational and developmental project. It is written to be understood completely, not to replace established forensic suites.",
          },
        ],
      },
      {
        id: "architecture",
        heading: "Architecture",
        blocks: [
          {
            type: "dl",
            rows: [
              {
                term: "One binary, six source files",
                text: "`main.c` dispatches the commands. `hash.c` computes SHA-256. `scanner.c` walks a directory. `manifest.c` writes the manifest. `verify.c` and `diff.c` read manifests back.",
              },
              {
                term: "A scanner that does not know why it scans",
                text: "`scan_directory()` walks the tree recursively and calls a function for each regular file. The manifest code passes its own callback, so the same walker can serve other commands.",
              },
              {
                term: "OpenSSL EVP for hashing",
                text: "Files are read in 8 KiB chunks and fed to the EVP digest interface, so memory use does not depend on file size. The digest length is checked (32 bytes) before it is converted to hexadecimal.",
              },
              {
                term: "json-c for manifests",
                text: "Manifests are plain JSON that other tools can read. Each entry holds a path, a size and a SHA-256.",
              },
              {
                term: "A strict build",
                text: "The code is compiled as C11 with `-Wall -Wextra -Wpedantic -Werror`, so any warning stops the build.",
              },
            ],
          },
        ],
      },
      {
        id: "commands",
        heading: "How the commands work",
        blocks: [
          {
            type: "p",
            text: "Four commands cover the workflow: `hash` for one file, `scan` to create a manifest of a directory, `verify` to check files against a manifest, and `diff` to compare two manifests. The `abc` example below is the published SHA-256 test vector, also used by the test suite.",
          },
          { type: "code", label: "shell", code: COMMANDS },
          {
            type: "p",
            text: "A manifest looks like this (abridged to one entry):",
          },
          { type: "code", label: "manifest.json", code: MANIFEST },
          {
            type: "p",
            text: "Comparing two scans of the same directory, taken before and after a change, gives the four categories. The messages are in French because the program prints them in French. The order of the first lines follows the order of the baseline manifest.",
          },
          { type: "code", label: "shell", code: DIFF_OUTPUT },
        ],
      },
      {
        id: "integrity",
        heading: "Integrity decisions",
        blocks: [
          {
            type: "dl",
            rows: [
              {
                term: "Symbolic links are not followed",
                text: "The scanner uses `lstat()`, so a link is neither followed nor inventoried. This keeps the scan inside the evidence tree and avoids loops. Only regular files are listed.",
              },
              {
                term: "No partial manifest",
                text: "If one file cannot be read or hashed, scanning stops and no manifest is written. A manifest is either complete or absent.",
              },
              {
                term: "Atomic write",
                text: "The manifest is written to a temporary file and then renamed over the destination. A failed write cannot replace a good manifest with a truncated one.",
              },
              {
                term: "Manifests are validated before use",
                text: "`diff` checks the algorithm field, that every hash has 64 hexadecimal characters and that sizes are not negative. It also rejects duplicate paths. A malformed manifest is refused, not partly read.",
              },
              {
                term: "Size and hash are both compared",
                text: "`verify` and `diff` flag a file when its size or its SHA-256 differs. `verify` also separates a missing file, a non-regular file, an unreadable file and a modified file, and exits with code 1 if any anomaly is found.",
              },
            ],
          },
          {
            type: "note",
            text: "Matching hashes support integrity verification. They do not prove authenticity or who created a file, and ForenC does not provide a legal chain of custody by itself. Work on forensic copies, record acquisition details and keep a documented chain of custody outside the tool.",
          },
        ],
      },
      {
        id: "tests",
        heading: "Tests",
        blocks: [
          {
            type: "p",
            text: "`make test` runs `tests/test_forenc.sh`. The script builds temporary evidence trees, so it does not depend on fixed files. It checks six things:",
          },
          {
            type: "ul",
            items: [
              "the version string",
              "the SHA-256 of the three bytes `abc` against the published test vector",
              "that `verify` passes on an unchanged tree",
              "that `verify` reports MODIFIED after a file is altered",
              "that `diff` reports added, deleted, modified and unchanged files on a prepared scenario",
              "that `diff` rejects an invalid JSON manifest",
            ],
          },
          {
            type: "p",
            text: "These are functional checks of the implemented behaviour. They are not a test of the tool on very large or hostile inputs, and no coverage figure is published.",
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
              "A manifest records path, size and SHA-256 only. Timestamps, permissions, owners and symbolic links are not recorded.",
              "Paths are stored as given on the command line. Scanning the same tree through two different path spellings gives manifests that `diff` reports as entirely deleted and added.",
              "Entries follow the directory listing order, so two manifests of the same tree can differ byte for byte.",
              "`verify` only checks files listed in the manifest. Files added afterwards are found by comparing two scans with `diff`.",
              "A manifest is not signed. Anyone who can edit it and recompute the hashes can forge it, so it must be stored apart from the evidence.",
              "`diff` looks up each path linearly. This is fine for thousands of files and would be slow on very large sets.",
              "POSIX only. The code relies on `dirent` and `lstat` and has not been built for Windows.",
              "The version field written in manifests is fixed at 0.1.0 and is not tied to the program version, 0.2.0.",
              "SHA-256 is the only algorithm.",
              "Symbolic links, permission errors, very large files and non-ASCII paths are not covered by the current tests.",
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
            text: "Source code, build instructions and the MIT licence are in the public repository.",
          },
          { type: "link", label: "github.com/makeu05/ForenC", href: site.repos.forenc },
        ],
      },
    ],
  },

  fr: {
    kicker: "Digital Forensics / Développement en C",
    title: "ForenC",
    lead: "Un outil en ligne de commande qui calcule des empreintes SHA-256, génère des manifestes JSON d'un répertoire et compare différents états d'un ensemble de données.",
    metaDescription:
      "Étude technique de ForenC, un outil en C pour le hachage SHA-256, les manifestes de fichiers et la comparaison d'états de preuves : conception, choix d'intégrité, tests et limites connues.",
    facts: [
      { term: "Langage", value: "C (C11)" },
      { term: "Bibliothèques", value: "OpenSSL, json-c" },
      { term: "Compilation", value: "GNU Make, gcc" },
      { term: "Version", value: "0.2.0, licence MIT" },
    ],
    sections: [
      {
        id: "problem",
        heading: "Le problème",
        blocks: [
          {
            type: "p",
            text: "Quand des fichiers de preuve sont copiés, déplacés ou examinés, deux questions se posent plus tard. Ces fichiers sont-ils identiques à ceux collectés ? Sinon, lesquels ont changé ? `sha256sum` répond à la première question pour quelques fichiers. Sur toute une arborescence, cela devient un travail manuel où les erreurs sont faciles.",
          },
          {
            type: "p",
            text: "ForenC répond aux deux questions sur une arborescence complète, avec une sortie exploitable dans des scripts. C'est un projet pédagogique et de développement. Il est écrit pour être compris en entier, pas pour remplacer les suites forensiques établies.",
          },
        ],
      },
      {
        id: "architecture",
        heading: "Architecture",
        blocks: [
          {
            type: "dl",
            rows: [
              {
                term: "Un binaire, six fichiers source",
                text: "`main.c` distribue les commandes. `hash.c` calcule le SHA-256. `scanner.c` parcourt un répertoire. `manifest.c` écrit le manifeste. `verify.c` et `diff.c` relisent les manifestes.",
              },
              {
                term: "Un parcours qui ignore sa finalité",
                text: "`scan_directory()` parcourt l'arborescence récursivement et appelle une fonction pour chaque fichier régulier. Le code du manifeste fournit sa propre fonction de rappel, ce qui permet de réutiliser le même parcours pour d'autres commandes.",
              },
              {
                term: "OpenSSL EVP pour le hachage",
                text: "Les fichiers sont lus par blocs de 8 Kio et passés à l'interface EVP, donc la mémoire utilisée ne dépend pas de la taille du fichier. La longueur du condensat (32 octets) est vérifiée avant la conversion en hexadécimal.",
              },
              {
                term: "json-c pour les manifestes",
                text: "Les manifestes sont du JSON simple, lisible par d'autres outils. Chaque entrée contient un chemin, une taille et un SHA-256.",
              },
              {
                term: "Une compilation stricte",
                text: "Le code est compilé en C11 avec `-Wall -Wextra -Wpedantic -Werror` : tout avertissement arrête la compilation.",
              },
            ],
          },
        ],
      },
      {
        id: "commands",
        heading: "Fonctionnement des commandes",
        blocks: [
          {
            type: "p",
            text: "Quatre commandes couvrent le flux de travail : `hash` pour un fichier, `scan` pour créer le manifeste d'un répertoire, `verify` pour contrôler des fichiers par rapport à un manifeste, et `diff` pour comparer deux manifestes. L'exemple `abc` ci-dessous est le vecteur de test SHA-256 publié, aussi utilisé par la suite de tests.",
          },
          { type: "code", label: "shell", code: COMMANDS },
          {
            type: "p",
            text: "Un manifeste ressemble à ceci (abrégé à une entrée) :",
          },
          { type: "code", label: "manifest.json", code: MANIFEST },
          {
            type: "p",
            text: "La comparaison de deux scans du même répertoire, pris avant et après une modification, donne les quatre catégories. L'ordre des premières lignes suit celui du manifeste de référence.",
          },
          { type: "code", label: "shell", code: DIFF_OUTPUT },
        ],
      },
      {
        id: "integrity",
        heading: "Choix liés à l'intégrité",
        blocks: [
          {
            type: "dl",
            rows: [
              {
                term: "Les liens symboliques ne sont pas suivis",
                text: "Le parcours utilise `lstat()` : un lien n'est ni suivi ni inventorié. Le scan reste dans l'arborescence de preuves et évite les boucles. Seuls les fichiers réguliers sont listés.",
              },
              {
                term: "Pas de manifeste partiel",
                text: "Si un fichier ne peut pas être lu ou haché, le parcours s'arrête et aucun manifeste n'est écrit. Un manifeste est complet ou absent.",
              },
              {
                term: "Écriture atomique",
                text: "Le manifeste est écrit dans un fichier temporaire, puis renommé vers la destination. Une écriture échouée ne peut pas remplacer un bon manifeste par un manifeste tronqué.",
              },
              {
                term: "Les manifestes sont validés avant usage",
                text: "`diff` contrôle le champ de l'algorithme, que chaque empreinte compte 64 caractères hexadécimaux et que les tailles ne sont pas négatives. Il refuse aussi les chemins en double. Un manifeste mal formé est refusé, pas lu en partie.",
              },
              {
                term: "La taille et l'empreinte sont comparées",
                text: "`verify` et `diff` signalent un fichier dont la taille ou le SHA-256 diffère. `verify` distingue aussi un fichier absent, non régulier, illisible ou modifié, et se termine avec le code 1 en cas d'anomalie.",
              },
            ],
          },
          {
            type: "note",
            text: "Des empreintes identiques soutiennent la vérification d'intégrité. Elles ne prouvent ni l'authenticité ni l'auteur d'un fichier, et ForenC ne fournit pas à lui seul une chaîne de conservation juridique. Il faut travailler sur des copies, consigner les conditions d'acquisition et tenir une chaîne de conservation documentée en dehors de l'outil.",
          },
        ],
      },
      {
        id: "tests",
        heading: "Tests",
        blocks: [
          {
            type: "p",
            text: "`make test` exécute `tests/test_forenc.sh`. Le script construit des arborescences temporaires, donc il ne dépend d'aucun fichier fixe. Il vérifie six points :",
          },
          {
            type: "ul",
            items: [
              "la chaîne de version",
              "le SHA-256 des trois octets `abc` comparé au vecteur de test publié",
              "que `verify` réussit sur une arborescence inchangée",
              "que `verify` signale MODIFIED après l'altération d'un fichier",
              "que `diff` signale les fichiers ajoutés, supprimés, modifiés et inchangés sur un scénario préparé",
              "que `diff` refuse un manifeste JSON invalide",
            ],
          },
          {
            type: "p",
            text: "Ce sont des vérifications fonctionnelles du comportement implémenté. Ce n'est pas un test sur des entrées très volumineuses ou hostiles, et aucun taux de couverture n'est publié.",
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
              "Un manifeste enregistre seulement le chemin, la taille et le SHA-256. Les dates, permissions, propriétaires et liens symboliques ne sont pas enregistrés.",
              "Les chemins sont stockés tels que saisis en ligne de commande. Deux écritures différentes du même chemin donnent des manifestes que `diff` présente comme entièrement supprimés puis ajoutés.",
              "Les entrées suivent l'ordre du répertoire : deux manifestes de la même arborescence peuvent différer octet par octet.",
              "`verify` ne contrôle que les fichiers listés dans le manifeste. Les fichiers ajoutés ensuite se repèrent en comparant deux scans avec `diff`.",
              "Un manifeste n'est pas signé. Quiconque peut le modifier et recalculer les empreintes peut le falsifier : il doit être conservé à part des preuves.",
              "`diff` cherche chaque chemin de façon linéaire. C'est correct pour des milliers de fichiers et lent pour de très grands ensembles.",
              "POSIX uniquement. Le code utilise `dirent` et `lstat` et n'a pas été compilé pour Windows.",
              "Le champ de version écrit dans les manifestes est fixé à 0.1.0 et n'est pas lié à la version du programme, 0.2.0.",
              "SHA-256 est le seul algorithme.",
              "Les liens symboliques, les erreurs de permission, les très gros fichiers et les chemins non ASCII ne sont pas couverts par les tests actuels.",
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
            text: "Le code source, les instructions de compilation et la licence MIT sont dans le dépôt public.",
          },
          { type: "link", label: "github.com/makeu05/ForenC", href: site.repos.forenc },
        ],
      },
    ],
  },
};
