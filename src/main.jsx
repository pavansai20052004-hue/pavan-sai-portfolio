// src/main.jsx - Complete portfolio application with component architecture
import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// Design system imports
import { ProjectCard } from "./components/ui/ProjectCard";
import { SkillCard } from "./components/ui/SkillCard";
import { CTASection } from "./components/ui/CTASection";
import { Navbar } from "./components/layout/Navbar";
import { SectionHeader } from "./components/sections/SectionHeader";

// Data imports
import { projects } from "./data/projects-data";
import { domainFilters } from "./data/projects-data";
import { proofPillars } from "./data/projects-data";
import { operatingModel } from "./data/projects-data";
import { skillGroups } from "./data/skill-data";
import { roleTracks } from "./data/skill-data";

// Icons
import {
  CloudCog,
  ShieldCheck,
  Database,
  Network,
  BrainCircuit,
  TerminalSquare,
  Cpu,
  Blocks,
  Sparkles,
  Route,
  Server,
  LockKeyhole,
  BarChart3,
  Code2,
  Workflow,
  BriefcaseBusiness,
  Calendar,
  GraduationCap,
  Trophy,
  ArrowUpRight,
  ExternalLink,
  Eye,
  Menu,
  X,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Download,
  Filter
} from "lucide-react";

// Profile data
const profile = {
  name: "G. Janaki Venkata Pavan Sai",
  shortName: "Pavan Sai",
  role: "Full Stack & DevOps Engineer",
  location: "Hyderabad, India",
  phone: "+91 9502589529",
  email: "pavansai20052004@gmail.com",
  linkedin: "https://www.linkedin.com/in/gjv44",
  github: "https://github.com/pavansai20052004-hue",
  resume: "/Pavan-Sai-Resume-2026.pdf"
};

// Metrics for metrics strip
const metrics = [
  { value: "Top 1000", label: "OpenAI x Outskill hackathon shortlist" },
  { value: "Live", label: "DevPilot AI deployed on Vercel" },
  { value: "15+", label: "REST APIs in MERN internship work" }
];

const experience = [
  {
    role: "Data Science and Analytics Intern",
    details: "Zidio Development, Hyderabad | Started May 25, 2026 | Python, analytics, dashboards",
    points: [
      "Started a data science and analytics internship focused on data cleaning, exploratory analysis, and reporting workflows.",
      "Apply Pandas, NumPy, SQL-style analysis, visualization, and model-evaluation concepts to turn structured data into useful insights.",
      "Strengthens the portfolio's data science track alongside CrediSense AI and AI infrastructure projects."
    ]
  },
  {
    role: "DevOps Engineer Intern",
    details: "Skilified Mentor | May 2025 - Aug 2025 | Linux, Git, Maven, Ansible",
    points: [
      "Automated Java build lifecycles with Maven, dependency management, plugins, and executable JAR packaging.",
      "Created Ansible playbooks for Linux provisioning, Nginx service setup, file deployment, and idempotent configuration checks.",
      "Practiced CI/CD-style workflows, YAML configuration, service validation, and repeatable deployment habits."
    ]
  },
  {
    role: "Full Stack Web Development Intern",
    details: "Unified Mentor | Mar 2025 - May 2025 | MERN stack, REST APIs, MVC",
    points: [
      "Built 15+ REST APIs across RentEase and HunarHub with Express.js, MongoDB, and React integration.",
      "Implemented JWT authentication, RBAC authorization, validation, and error middleware.",
      "Organized backend modules using MVC architecture and Agile-style delivery."
    ]
  }
];

const education = [
  "B.Tech in Data Science - Holy Mary Institute of Technology & Science | 2022-2026",
  "Intermediate (MPC) - Glimpses Junior College | 75%",
  "SSC (CBSE) - DAV Public School | 75%"
];

const achievements = [
  "OpenAI x Outskill Hackathon participant; DevPilot AI shortlisted in the Top 1000 worldwide.",
  "Research publication on Ayurvedic herb traceability using blockchain technology, January 2026.",
  "State-level 1st place in 100m athletics.",
  "National-level 100m runner.",
  "State-level cricketer.",
  "Languages: English, Hindi, Telugu."
];

const certifications = [
  "DevOps Engineer - Skilified Mentor",
  "Full Stack Web Development - Unified Mentor",
  "Data Science and Analytics - Zidio Development",
  "Generative AI - Infosys Springboard",
  "Processing and Problem Solving - IBM SkillsBuild"
];

// Orbit signals for hero console
const orbitSignals = [
  "DevPilot AI",
  "OpenAI Hackathon",
  "Cyber Digital Twin",
  "AIOps Cloud",
  "JWT / RBAC",
  "Docker + K8s"
];

const slogan = "Where secure engineering meets beautiful product delivery.";

// Custom hooks
function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    const observeTargets = () => {
      document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((target) => observer.observe(target));
    };

    targets.forEach((target) => observer.observe(target));
    const mutationObserver = new MutationObserver(observeTargets);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, nextProgress)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return progress;
}

function useTilt() {
  useEffect(() => {
    const cards = [...document.querySelectorAll("[data-tilt]")];
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return undefined;

    const cleanups = cards.map((card) => {
      const glowLayer = document.createElement("div");
      glowLayer.style.position = "absolute";
      glowLayer.style.inset = "0";
      glowLayer.style.borderRadius = "inherit";
      glowLayer.style.opacity = "0";
      glowLayer.style.transition = "opacity 300ms ease";
      glowLayer.style.pointerEvents = "none";
      glowLayer.style.zIndex = "1";
      card.appendChild(glowLayer);

      let lastX = 0;
      let lastY = 0;

      const onMove = (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        const tiltX = -y * 8;
        const tiltY = x * 10;
        card.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
        card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
        card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);

        const dx = event.clientX - lastX;
        const dy = event.clientY - lastY;
        lastX = event.clientX;
        lastY = event.clientY;

        const intensity = Math.min(Math.sqrt(dx * dx + dy * dy) / 20, 1);
        glowLayer.style.opacity = String(intensity * 0.4);
        glowLayer.style.background = `radial-gradient(circle at ${event.clientX - rect.left}px ${event.clientY - rect.top}px, ${intensity > 0.5 ? "rgba(98, 228, 205, 0.35)" : "rgba(98, 228, 205, 0.15)"}, transparent 60%)`;
      };

      const onLeave = () => {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
        glowLayer.style.opacity = "0";
      };

      const onClick = () => {
        card.classList.add("card-clicked");
        setTimeout(() => card.classList.remove("card-clicked"), 300);
      };

      card.style.position = "relative";
      card.style.overflow = "hidden";

      card.addEventListener("pointermove", onMove);
      card.addEventListener("pointerleave", onLeave);
      card.addEventListener("click", onClick);

      return () => {
        card.removeEventListener("pointermove", onMove);
        card.removeEventListener("pointerleave", onLeave);
        card.removeEventListener("click", onClick);
        if (glowLayer.parentNode === card) {
          card.removeChild(glowLayer);
        }
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);
}

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleTouchStart = () => setIsTouch(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-noise" aria-hidden="true" />
      <div 
        className="hero-background-effects"
        style={!isTouch ? {
          '--mouse-x': `${mousePosition.x}px`,
          '--mouse-y': `${mousePosition.y}px`
        } : undefined}
      />
      <div className="hero-inner">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">
            <MapPin size={16} />
            {profile.location}
          </p>
          <h1>
            {profile.name.split(" ").map((part, index, parts) => (
              <React.Fragment key={`${part}-${index}`}>
                <span
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: "both"
                  }}
                >
                  {part}
                </span>
                {index < parts.length - 1 ? " " : null}
              </React.Fragment>
            ))}
          </h1>
          <p className="hero-subtitle">
            {slogan}
          </p>
          <div className="hero-badges" aria-label="Portfolio focus areas">
            <span>
              <ShieldCheck size={16} />
              Cyber risk platforms
            </span>
            <span>
              <CloudCog size={16} />
              DevPilot AI
            </span>
            <span>
              <Code2 size={16} />
              Secure full stack
            </span>
          </div>
          <div className="hero-actions" aria-label="Primary links">
            <a className="button primary" href={profile.resume} download>
              <Download size={18} />
              Resume
            </a>
            <a className="button" href={profile.github} target="_blank" rel="noreferrer">
              <Github size={18} />
              GitHub
            </a>
            <a className="button" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>

        <aside className="signal-console" data-reveal data-tilt aria-label="Portfolio signal summary">
          <div className="console-topline">
            <span>Live Capability Map</span>
            <span className="status-dot">Online</span>
          </div>
          <div className="orbit-grid">
            {orbitSignals.map((signal, index) => (
              <span 
                style={{ 
                  "--delay": `${index * 90}ms`,
                  "--float-delay": `${index * 0.5}s`,
                  animationDelay: `${index * 90}ms, ${index * 0.5}s`
                }} 
                key={signal}
              >
                {signal}
              </span>
            ))}
          </div>
          <div className="console-meter" aria-hidden="true">
            <span />
          </div>
          <div className="console-glow" aria-hidden="true" />
          <p>
            Portfolio focus: systems that are useful beyond a demo, with auth, auditability, deployment discipline, and measurable risk logic.
            DevPilot AI is the lead project and was shortlisted Top 1000 worldwide in the OpenAI x Outskill Hackathon.
          </p>
        </aside>

        <div className="scroll-indicator" data-reveal>
          <div className="scroll-dot" />
          <div className="scroll-dot" />
          <div className="scroll-dot" />
        </div>
      </div>
    </section>
  );
}

function MetricsStrip() {
  return (
    <section className="metrics-strip" aria-label="Selected metrics" data-reveal>
      {metrics.map((metric) => (
        <div className="metric" key={metric.label}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </div>
      ))}
      <div className="metric wide">
        <strong>MERN + DevOps + Security</strong>
        <span>A portfolio shaped around production-minded engineering, not only screens.</span>
      </div>
    </section>
  );
}

function ProofEngine() {
  return (
    <section className="section proof-section" id="proof">
      <SectionHeader
        kicker="Proof engine"
        title="Built like a portfolio, presented like an engineering control room."
        body="This layer turns your resume into evidence: what you build, how it is secured, how it operates, and where it creates value."
      />
      <div className="proof-grid">
        {proofPillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <article className="proof-card" data-reveal data-tilt key={pillar.title}>
              <div className="proof-icon">
                <Icon size={21} />
              </div>
              <span>{pillar.stat}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          );
        })}
      </div>

      <div className="operating-model" data-reveal>
        <div className="model-copy">
          <p className="kicker">Operating model</p>
          <h3>From system map to deployable evidence.</h3>
          <p>
            Your best work has a pattern: model the environment, score what matters, apply controls, and ship the result with enough evidence to debug,
            demo, or defend it.
          </p>
        </div>
        <div className="model-flow" aria-label="Engineering operating model">
          {operatingModel.map((step, index) => (
            <div className="model-step" style={{ "--step": index + 1 }} key={step.label}>
              <strong>{step.label}</strong>
              <span>{step.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedTitle, setSelectedTitle] = useState(projects[0].title);
  const filteredProjects = useMemo(
    () => (activeFilter === "All" ? projects : projects.filter((project) => project.domains.includes(activeFilter))),
    [activeFilter]
  );
  const selectedProject = filteredProjects.find((project) => project.title === selectedTitle) || filteredProjects[0];

  useEffect(() => {
    if (!filteredProjects.some((project) => project.title === selectedTitle)) {
      setSelectedTitle(filteredProjects[0].title);
    }
  }, [filteredProjects, selectedTitle]);

  return (
    <section className="section" id="projects">
      <SectionHeader
        kicker="Selected work"
        title="Project systems with real engineering surface area."
        body="DevPilot AI leads the portfolio as the strongest deployed product, followed by cybersecurity simulation, AIOps, full-stack, DevOps, AI/ML, and blockchain work."
      />
      <div className="project-control-row" data-reveal>
        <div className="filter-label">
          <Filter size={18} />
          Focus
        </div>
        <div className="filter-pills" role="list" aria-label="Filter projects by domain">
          {domainFilters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                className={activeFilter === filter.id ? "filter-pill is-active" : "filter-pill"}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                key={filter.id}
              >
                <Icon size={16} />
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className={`project-lab accent-${selectedProject.accent}`} data-reveal>
        <div className="lab-copy">
          <p className="kicker">Selected mission</p>
          <h3>{selectedProject.title}</h3>
          <p className="project-subtitle">{selectedProject.subtitle}</p>
          {selectedProject.recognition ? (
            <p className="project-recognition">
              <Trophy size={16} />
              {selectedProject.recognition}
            </p>
          ) : null}
          <p>{selectedProject.proof}</p>
          <div className="lab-actions">
            <a className="button" href={selectedProject.link} target="_blank" rel="noreferrer">
              {selectedProject.linkLabel === "Live Project" ? <ExternalLink size={18} /> : <Github size={18} />}
              {selectedProject.linkLabel || "Repository"}
            </a>
          </div>
        </div>
        <div className="lab-telemetry" aria-label={`${selectedProject.title} telemetry`}>
          <div>
            <small>Domains</small>
            <strong>{selectedProject.domains.join(" / ")}</strong>
          </div>
          <div>
            <small>Outcome</small>
            <strong>{selectedProject.outcome}</strong>
          </div>
          <div className="stack-radar">
            {selectedProject.stack.slice(0, 5).map((tech, index) => (
              <span style={{ "--radar": index }} key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onClick={() => setSelectedTitle(project.title)}
            isSelected={selectedTitle === project.title}
          />
        ))}
      </div>
    </section>
  );
}

function RoleRadar() {
  return (
    <div className="role-radar" data-reveal>
      <div className="radar-copy">
        <p className="kicker">Role alignment</p>
        <h3>Where the portfolio hits hardest.</h3>
        <p>
          The strongest signal is not one narrow title; it is the overlap between secure product engineering, cloud automation, and data-driven risk logic.
        </p>
      </div>
      <div className="radar-tracks">
        {roleTracks.map((track) => {
          const Icon = track.icon;
          return (
            <article className="radar-track" key={track.title}>
              <div className="track-topline">
                <span>
                  <Icon size={18} />
                  {track.title}
                </span>
                <strong>{track.score}</strong>
              </div>
              <div className="track-bar" aria-hidden="true">
                <span style={{ width: `${track.score}%` }} />
              </div>
              <p>{track.proof}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className="section split-section" id="skills">
      <SectionHeader
        kicker="Technical arsenal"
        title="A wide stack, organized around shipping secure systems."
        body="This site keeps the skills dense and scannable so recruiters and engineering reviewers can see the range quickly."
      />
      <RoleRadar />
      <div className="skill-grid">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <SkillCard
              key={group.title}
              title={group.title}
              icon={Icon}
              skills={group.skills}
            />
          );
        })}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <SectionHeader
        kicker="Experience"
        title="Internship work backed by repeatable engineering habits."
        body="The experience section emphasizes practical delivery: APIs, auth, build automation, Linux workflows, and troubleshooting."
      />
      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item" data-reveal key={item.role}>
            <span className="timeline-icon">
              <BriefcaseBusiness size={18} />
            </span>
            <div>
              <h3>{item.role}</h3>
              <p className="timeline-details">{item.details}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section className="section credential-section" id="credentials">
      <div className="credential-grid">
        <article className="credential-panel" data-reveal>
          <div className="panel-title">
            <GraduationCap size={20} />
            <h2>Education</h2>
          </div>
          <ul className="clean-list">
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="credential-panel" data-reveal>
          <div className="panel-title">
            <Calendar size={20} />
            <h2>Certifications</h2>
          </div>
          <div className="cert-list">
            {certifications.map((cert) => (
              <span key={cert}>{cert}</span>
            ))}
          </div>
        </article>

        <article className="credential-panel" data-reveal>
          <div className="panel-title">
            <Trophy size={20} />
            <h2>Achievements</h2>
          </div>
          <ul className="clean-list">
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

function Contact() {
  const contacts = useMemo(
    () => [
      { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
      { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: Phone },
      { label: "GitHub", value: "pavansai20052004-hue", href: profile.github, icon: Github },
      { label: "LinkedIn", value: "gjv44", href: profile.linkedin, icon: Linkedin }
    ],
    []
  );

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner" data-reveal>
        <p className="kicker">Contact</p>
        <h2>Ready for full-stack, DevOps, security, and AI-backed product work.</h2>
        <p>
          I build systems with the wiring people forget: API discipline, auth, audit trails, deployment paths, and the data needed to reason about risk.
        </p>
        <div className="contact-grid">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <a href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" key={contact.label}>
                <Icon size={19} />
                <span>
                  <small>{contact.label}</small>
                  {contact.value}
                </span>
                <ArrowUpRight size={17} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand-mark">PS</span>
          <span>{profile.shortName}</span>
        </div>
        <div className="footer-links">
          <a href="#proof">Proof</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} {profile.name}. Built with precision engineering.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  useReveal();
  const scrollProgress = useScrollProgress();
  useTilt();

  return (
    <>
      <div className="scroll-progress" style={{ "--progress": scrollProgress / 100 }} aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <MetricsStrip />
        <ProofEngine />
        <Projects />
        <Skills />
        <Experience />
        <Credentials />
        <Contact />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
