"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield, Terminal, Wifi, Code, Lock,
  Mail, Phone, MapPin, ChevronDown,
  Award, GraduationCap, Briefcase, Link
} from "lucide-react";

/* ──────────────────────────────────────────────
   DATA
────────────────────────────────────────────── */
const skills = [
  { category: "Cybersécurité & Audit", icon: Shield, color: "#00e5ff", items: ["Audit SI (ISO 27001, ISO 27005, COSO, COBIT)", "Pentest & analyse de vulnérabilités", "Kali Linux / Parrot OS", "Analyse de trafic réseau — Wireshark", "Scripts d'automatisation Bash & Python"] },
  { category: "Réseaux Informatiques", icon: Wifi, color: "#00ff9d", items: ["TCP/IP, VLAN, VPN", "Routage & adressage IPv4/IPv6", "Segmentation réseau", "EVE-NG, GNS3, Wireshark"] },
  { category: "Développement & IoT", icon: Code, color: "#7b2fff", items: ["Python, Shell Bash", "C / C++", "Arduino & Raspberry Pi", "Réseaux IoT LTE-M"] },
];

const projects = [
  {
    title: "Audit SI d'une Application",
    period: "03/2025 – 06/2025",
    desc: "Création d'un outil d'aide à l'audit basé sur les référentiels ISO 27001, ISO 27005, COSO et COBIT. Réalisation d'un audit technique complet et rédaction des recommandations.",
    tags: ["ISO 27001", "COBIT", "Audit", "Python"],
    color: "#00e5ff",
    icon: Shield,
  },
  {
    title: "Architecture Réseau Sécurisée 3-Tiers",
    period: "09/2025 – 12/2025",
    desc: "Conception et déploiement sous EVE-NG d'une architecture DMZ / LAN / WAN. Mise en place de VLAN et configuration des règles de pare-feu.",
    tags: ["EVE-NG", "VLAN", "Firewall", "DMZ"],
    color: "#00ff9d",
    icon: Lock,
  },
  {
    title: "Application IA — Planning Familial",
    period: "01/2024 – 07/2024",
    desc: "Conception complète UML/MERISE avec intégration d'algorithmes d'IA pour un système de recommandation intelligent. Projet d'équipe de 6 mois.",
    tags: ["IA", "UML", "MERISE", "Machine Learning"],
    color: "#7b2fff",
    icon: Terminal,
  },
  {
    title: "Réseau IoT Santé Connectée — LTE-M",
    period: "02/2025 – 06/2025",
    desc: "Conception d'un réseau de capteurs IoT pour la collecte de données biométriques en temps réel (fréquence cardiaque, température). Programmation Arduino.",
    tags: ["IoT", "LTE-M", "Arduino", "Biométrie"],
    color: "#ff6b35",
    icon: Wifi,
  },
];

const certifications = [
  { name: "Fortinet Certified Fundamentals Cybersecurity", org: "Fortinet", year: "2025" },
  { name: "Fortinet Certified Associate Cybersecurity", org: "Fortinet", year: "2025" },
  { name: "ISO/IEC 27001:2022 Information Security Associate", org: "SkillFront", year: "2026" },
  { name: "Blue Team Junior Analyst", org: "Security Blue Team", year: "2026" },
  { name: "SecNumAcademie", org: "ANSSI", year: "2024" },
  { name: "Introduction to Cybersecurity", org: "Cisco", year: "2026" },
  { name: "Data Analytics Job Simulation", org: "Deloitte Australia (Forage)", year: "2026" },
];

/* ──────────────────────────────────────────────
   SUBCOMPONENTS
────────────────────────────────────────────── */
function TerminalTyping({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) { clearInterval(iv); setDone(true); }
    }, 40);
    return () => clearInterval(iv);
  }, [text]);
  return (
    <span className="font-mono-tech text-[#00e5ff]">
      {displayed}{!done && <span className="cursor">█</span>}
    </span>
  );
}

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-14 text-center">
      <p className="font-mono-tech text-xs text-[#00e5ff] tracking-[0.3em] mb-3 uppercase opacity-70">
        &gt;_ {label}
      </p>
      <h2 className="font-orbitron text-3xl md:text-4xl font-bold gradient-text">{title}</h2>
      <div className="mt-4 flex items-center justify-center gap-3">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00e5ff]" />
        <div className="w-2 h-2 rotate-45 bg-[#00e5ff]" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00e5ff]" />
      </div>
    </div>
  );
}

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   MAIN PAGE
────────────────────────────────────────────── */
export default function Home() {
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#020b12]">
      <div className="scanline" />

      {/* ── NAV ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navScrolled ? "bg-[#020b12]/90 backdrop-blur-md border-b border-[rgba(0,229,255,0.1)]" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-orbitron text-sm font-bold text-[#00e5ff] tracking-widest">SB.MAKEU</span>
          <div className="hidden md:flex gap-8 font-mono-tech text-xs text-[#4a7a8a] tracking-widest">
            {["À propos", "Compétences", "Projets", "Certifications", "Contact"].map((item, i) => (
              <a
                key={i}
                href={`#${["about","skills","projects","certifications","contact"][i]}`}
                className="hover:text-[#00e5ff] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="about" className="relative min-h-screen flex flex-col items-center justify-center grid-bg hex-pattern overflow-hidden px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020b12]" />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#00e5ff] opacity-[0.04] blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-[#7b2fff] opacity-[0.06] blur-3xl" />

        <div className="relative z-10 text-center max-w-4xl">
          {/* Avatar placeholder */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-8 w-28 h-28 rounded-full border-2 border-[#00e5ff] flex items-center justify-center relative"
            style={{ boxShadow: "0 0 30px rgba(0,229,255,0.3), 0 0 60px rgba(0,229,255,0.1)" }}
          >
            <Shield size={40} className="text-[#00e5ff]" />
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#00ff9d] animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-mono-tech text-xs text-[#00e5ff] tracking-[0.4em] mb-4 opacity-70"
          >
            &gt;_ INITIALISATION DU PROFIL...
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-black mb-2 leading-tight"
          >
            <span className="gradient-text glow-cyan">Stely Belva</span>
            <br />
            <span className="text-white">MAKEU TENKU</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="mt-6 mb-8 h-8 flex items-center justify-center"
          >
            <TerminalTyping text="Ingénieure en Cybersécurité & Investigation Numérique — ENSPY Yaoundé" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-[#4a7a8a] text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light mb-10"
          >
            Passionnée par la protection des systèmes d'information, l'audit de sécurité et l'investigation numérique.
            Je conçois des architectures sécurisées et explore les failles pour mieux les corriger.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="mailto:belvarose150@gmail.com"
              className="px-8 py-3 font-orbitron text-xs font-bold tracking-widest text-[#020b12] bg-[#00e5ff] rounded hover:bg-[#00ff9d] transition-colors"
              style={{ boxShadow: "0 0 20px rgba(0,229,255,0.4)" }}
            >
              ME CONTACTER
            </a>
            <a
              href="#projects"
              className="px-8 py-3 font-orbitron text-xs font-bold tracking-widest text-[#00e5ff] border border-[#00e5ff] rounded hover:bg-[rgba(0,229,255,0.05)] transition-colors"
            >
              MES PROJETS
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-[#4a7a8a]"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <SectionTitle label="COMPÉTENCES" title="Domaines d'Expertise" />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div
                  className="neon-border rounded-lg p-6 bg-[#040f1a] hover:bg-[#071828] transition-all duration-300 h-full group"
                  style={{ borderColor: `${s.color}25` }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded flex items-center justify-center"
                      style={{ background: `${s.color}15`, border: `1px solid ${s.color}40` }}
                    >
                      <s.icon size={20} style={{ color: s.color }} />
                    </div>
                    <h3 className="font-orbitron text-sm font-bold" style={{ color: s.color }}>{s.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {s.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#8aa8b8]">
                        <span style={{ color: s.color }} className="mt-1 font-mono-tech text-xs">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-24 px-6 grid-bg">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <SectionTitle label="PROJETS" title="Réalisations & Travaux" />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div
                  className="rounded-lg bg-[#040f1a] p-6 h-full transition-all duration-300 hover:-translate-y-1 group cursor-default"
                  style={{
                    border: `1px solid ${p.color}20`,
                    boxShadow: `0 0 0 rgba(0,0,0,0)`,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 8px 30px ${p.color}15`)}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded flex items-center justify-center"
                      style={{ background: `${p.color}15` }}
                    >
                      <p.icon size={20} style={{ color: p.color }} />
                    </div>
                    <span className="font-mono-tech text-xs text-[#4a7a8a]">{p.period}</span>
                  </div>
                  <h3 className="font-orbitron text-base font-bold text-white mb-3 leading-snug">{p.title}</h3>
                  <p className="text-sm text-[#7a9aaa] leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t, j) => (
                      <span
                        key={j}
                        className="font-mono-tech text-xs px-2 py-1 rounded"
                        style={{ color: p.color, background: `${p.color}12`, border: `1px solid ${p.color}25` }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE + EDUCATION ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">

          {/* Experience */}
          <AnimatedSection>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase size={20} className="text-[#00e5ff]" />
                <h3 className="font-orbitron text-xl font-bold text-white">Expériences</h3>
              </div>
              <div className="space-y-6">
                {[
                  {
                    role: "Formatrice — SMART KIDS Holiday",
                    org: "DHI ACADEMY",
                    period: "07/2025 – 08/2025 · Yaoundé",
                    desc: "Conception et animation d'ateliers de codage HTML et robotique Arduino/Raspberry Pi pour enfants (8–15 ans). 15 à 20 apprenants par session.",
                    color: "#00e5ff",
                  },
                  {
                    role: "Stagiaire Informatique",
                    org: "MEGASOFT SARL",
                    period: "04/2023 – 06/2023 · Yaoundé",
                    desc: "Développement et maintenance d'applications métier en Java. Cycle complet : analyse, codage, tests et débogage.",
                    color: "#00ff9d",
                  },
                ].map((exp, i) => (
                  <div key={i} className="relative pl-5" style={{ borderLeft: `2px solid ${exp.color}30` }}>
                    <div
                      className="absolute -left-[5px] top-1 w-2 h-2 rounded-full"
                      style={{ background: exp.color }}
                    />
                    <h4 className="font-orbitron text-sm font-bold text-white">{exp.role}</h4>
                    <p className="font-mono-tech text-xs mt-0.5" style={{ color: exp.color }}>{exp.org}</p>
                    <p className="text-xs text-[#4a7a8a] mt-0.5 mb-2">{exp.period}</p>
                    <p className="text-sm text-[#7a9aaa] leading-relaxed">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection delay={0.2}>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap size={20} className="text-[#7b2fff]" />
                <h3 className="font-orbitron text-xl font-bold text-white">Formation</h3>
              </div>
              <div className="space-y-6">
                {[
                  {
                    degree: "Cybersécurité & Investigation Numérique",
                    school: "ENSPY — École Nationale Supérieure Polytechnique de Yaoundé",
                    period: "09/2024 – Aujourd'hui",
                    note: "Diplôme d'ingénieur de conception",
                    color: "#7b2fff",
                  },
                  {
                    degree: "Licence en Génie Informatique",
                    school: "IUT Fotso Victor — Bandjoun",
                    period: "2021 – 2024",
                    note: "Grade B+",
                    color: "#00e5ff",
                  },
                ].map((ed, i) => (
                  <div key={i} className="relative pl-5" style={{ borderLeft: `2px solid ${ed.color}30` }}>
                    <div
                      className="absolute -left-[5px] top-1 w-2 h-2 rounded-full"
                      style={{ background: ed.color }}
                    />
                    <h4 className="font-orbitron text-sm font-bold text-white">{ed.degree}</h4>
                    <p className="text-xs text-[#7a9aaa] mt-0.5">{ed.school}</p>
                    <p className="font-mono-tech text-xs text-[#4a7a8a] mt-0.5">{ed.period}</p>
                    <span
                      className="inline-block mt-2 font-mono-tech text-xs px-2 py-0.5 rounded"
                      style={{ color: ed.color, background: `${ed.color}12`, border: `1px solid ${ed.color}25` }}
                    >
                      {ed.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" className="py-24 px-6 hex-pattern">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <SectionTitle label="CERTIFICATIONS" title="Badges & Accréditations" />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="neon-border rounded-lg p-4 bg-[#040f1a] flex items-start gap-3 hover:bg-[#071828] transition-colors">
                  <div className="w-8 h-8 rounded flex-shrink-0 flex items-center justify-center bg-[rgba(0,229,255,0.1)]">
                    <Award size={16} className="text-[#00e5ff]" />
                  </div>
                  <div>
                    <p className="text-sm text-white font-medium leading-snug">{c.name}</p>
                    <p className="font-mono-tech text-xs text-[#4a7a8a] mt-1">{c.org} · {c.year}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <SectionTitle label="CONTACT" title="Entrons en Contact" />
            <p className="text-[#4a7a8a] text-base mb-12 font-light leading-relaxed">
              Disponible pour des opportunités de stage, projets de recherche ou collaborations en cybersécurité.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                { icon: Mail, label: "Email", value: "belvarose150@gmail.com", href: "mailto:belvarose150@gmail.com", color: "#00e5ff" },
                { icon: Phone, label: "Téléphone", value: "+237 672 520 108", href: "tel:+237672520108", color: "#00ff9d" },
                { icon: Link, label: "LinkedIn", value: "stely-belva-makeu", href: "https://www.linkedin.com/in/stely-belva-makeu", color: "#7b2fff" },
              ].map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="neon-border rounded-lg p-5 bg-[#040f1a] hover:bg-[#071828] flex flex-col items-center gap-2 transition-all group"
                  style={{ borderColor: `${c.color}25` }}
                >
                  <c.icon size={22} style={{ color: c.color }} />
                  <p className="font-mono-tech text-xs text-[#4a7a8a]">{c.label}</p>
                  <p className="text-xs text-white text-center break-all group-hover:underline">{c.value}</p>
                </a>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 text-[#4a7a8a]">
              <MapPin size={14} />
              <span className="font-mono-tech text-xs">Yaoundé, Melen — Cameroun</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-6 border-t border-[rgba(0,229,255,0.08)] text-center">
        <p className="font-mono-tech text-xs text-[#4a7a8a]">
          &gt;_ © 2025 Stely Belva MAKEU TENKU · Conçu avec passion pour la cybersécurité
        </p>
      </footer>
    </main>
  );
}
