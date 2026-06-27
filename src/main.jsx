import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import * as THREE from "three";
import { projects } from "./data/projects-data";
import { roleTracks, skillGroups } from "./data/skill-data";
import "./styles.css";

const profile = {
  name: "G. Janaki Venkata Pavan Sai",
  role: "Full Stack Developer & DevOps Engineer",
  location: "Hyderabad, India",
  phone: "+91 9502589529",
  email: "pavansai20052004@gmail.com",
  github: "https://github.com/pavansai20052004-hue",
  linkedin: "https://www.linkedin.com/in/gjv44",
  resume: "/Pavan-Sai-Resume-2026.pdf"
};

const experience = [
  {
    date: "2026-05-25 09:00:00",
    role: "DATA_SCIENCE_ANALYTICS_INTERN",
    org: "ZIDIO_DEVELOPMENT",
    body: "Data cleaning, exploratory analysis, reporting workflows, Pandas, NumPy, SQL-style analysis, visualization, and model-evaluation practice."
  },
  {
    date: "2025-05-01 10:30:00",
    role: "DEVOPS_ENGINEER_INTERN",
    org: "SKILIFIED_MENTOR",
    body: "Automated Java build lifecycles with Maven, created Ansible playbooks, configured Linux/Nginx services, and practiced repeatable CI/CD-style workflows."
  },
  {
    date: "2025-03-01 11:15:00",
    role: "FULL_STACK_WEB_DEVELOPMENT_INTERN",
    org: "UNIFIED_MENTOR",
    body: "Built 15+ REST APIs across MERN projects with JWT authentication, RBAC authorization, validation middleware, MVC structure, and frontend-backend integration."
  }
];

const education = [
  "B.Tech Data Science - Holy Mary Institute of Technology & Science | 2022-2026",
  "Intermediate MPC - Glimpses Junior College | 75%",
  "SSC CBSE - DAV Public School | 75%"
];

const achievements = [
  "OpenAI x Outskill Hackathon - DevPilot AI shortlisted Top 1000 worldwide",
  "Research publication on blockchain-based Ayurvedic herb traceability, January 2026",
  "State-level 1st place in 100m athletics",
  "National-level 100m runner",
  "State-level cricketer"
];

const navItems = [
  { id: "exe", label: "EXE", icon: "terminal", path: "" },
  { id: "src", label: "SRC", icon: "folder_open", path: "src" },
  { id: "log", label: "LOG", icon: "history_edu", path: "log" },
  { id: "sys", label: "SYS", icon: "settings_input_component", path: "sys" }
];

function Icon({ name, className = "", size }) {
  return (
    <span className={`material-symbols-outlined ${className}`} style={size ? { fontSize: size } : undefined}>
      {name}
    </span>
  );
}

function TerminalWindow({ title, icon, children, className = "" }) {
  return (
    <section className={`terminal-window ${className}`}>
      <div className="terminal-header">
        {icon ? <Icon name={icon} size={15} className="header-icon" /> : (
          <>
            <div className="dot red" />
            <div className="dot amber" />
            <div className="dot green" />
          </>
        )}
        <span className="terminal-title">{title}</span>
      </div>
      {children}
    </section>
  );
}

function BootOverlay({ onBoot }) {
  return (
    <button id="boot-overlay" className="boot-overlay" type="button" onClick={onBoot} aria-label="Initialize portfolio system">
      <Icon name="power_settings_new" className="boot-icon" />
      <span className="boot-title">INITIALIZE SYSTEM</span>
      <span className="boot-subtitle">TAP ANYWHERE TO BOOT</span>
    </button>
  );
}

function IntroOverlay({ active, onComplete }) {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!active || !mountRef.current) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const material = new THREE.MeshPhongMaterial({ color: 0xffb800, wireframe: true });
    const core = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.55, 0.55), material);
    core.position.y = prefersReducedMotion ? 0 : 9;
    scene.add(core);
    scene.add(new THREE.AmbientLight(0xffb800, 0.7));
    const light = new THREE.PointLight(0xffb800, 1.2, 30);
    light.position.set(0, 0, 4);
    scene.add(light);

    let frame = 0;
    let completed = false;
    const complete = () => {
      if (completed) return;
      completed = true;
      onComplete();
    };

    if (prefersReducedMotion) {
      renderer.render(scene, camera);
      const timeout = window.setTimeout(complete, 450);
      return () => {
        window.clearTimeout(timeout);
        renderer.dispose();
        renderer.domElement.remove();
      };
    }

    const animate = () => {
      frame = window.requestAnimationFrame(animate);
      core.position.y -= 0.34;
      core.rotation.x += 0.08;
      core.rotation.z += 0.15;
      if (core.position.y <= 0) {
        complete();
      }
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(frame);
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [active, onComplete]);

  return (
    <div id="intro-overlay" className={`intro-overlay ${active ? "is-active" : ""}`}>
      <div ref={mountRef} className="intro-canvas" />
    </div>
  );
}

function Header({ activeView }) {
  const path = navItems.find((item) => item.id === activeView)?.path;
  return (
    <header className="app-header">
      <div className="header-left">
        <Icon name="terminal" className="header-terminal" />
        <h1 id="header-path">~/root/portfolio{path ? `/${path}` : ""}</h1>
      </div>
      <div className="header-actions">
        <a className="download-button" href={profile.resume} download>
          <Icon name="download" size={16} />
          <span>DOWNLOAD.EXE</span>
        </a>
        <span className="version">v3.0.0-terminal</span>
        <span className="online-dot" aria-label="online" />
      </div>
    </header>
  );
}

function HomeView() {
  const strongestProjects = projects.slice(0, 4);
  return (
    <div className="view-stack">
      <TerminalWindow title="system_status.sh">
        <div className="terminal-body status-body">
          <p><span>USER:</span> {profile.name}</p>
          <p><span>ROLE:</span> {profile.role}</p>
          <p><span>LOC:</span> {profile.location}</p>
          <p><span>REPO:</span> pavansai20052004-hue/pavan-sai-portfolio</p>
          <div className="status-ready">
            <p>Ready for deployment<span className="cursor" /></p>
          </div>
        </div>
      </TerminalWindow>

      <TerminalWindow title="devpilot_stats.log" icon="monitoring">
        <div className="terminal-body">
          <h2>Core Competencies</h2>
          <div className="stat-grid">
            {roleTracks.map((track) => (
              <div className="stat-tile" key={track.title}>
                <p>{track.title}</p>
                <strong>{track.score}%</strong>
              </div>
            ))}
          </div>
        </div>
      </TerminalWindow>

      <TerminalWindow title="priority_targets.json" icon="memory">
        <div className="terminal-body project-mini-grid">
          {strongestProjects.map((project) => (
            <a className="mini-project" href={project.link} target="_blank" rel="noreferrer" key={project.title}>
              <span>{project.title}</span>
              <small>{project.subtitle}</small>
            </a>
          ))}
        </div>
      </TerminalWindow>
    </div>
  );
}

function ProjectsView() {
  return (
    <div className="view-stack">
      <h2 className="route-title">/home/pavan/projects</h2>
      {projects.map((project, index) => (
        <article className="terminal-window project-terminal" key={project.title}>
          <div className="terminal-header split-header">
            <span className="terminal-title">{project.title.replace(/\s+/g, "_")}.{index < 2 ? "sys" : "exe"}</span>
            <span className="version">v{index + 2}.{project.stack.length}.{project.domains.length}</span>
          </div>
          <div className="terminal-body">
            <div className="project-topline">
              <div>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
              </div>
              <a className="terminal-link" href={project.link} target="_blank" rel="noreferrer">
                OPEN
                <Icon name="open_in_new" size={15} />
              </a>
            </div>
            <p className="project-impact">{project.impact}</p>
            {project.recognition ? <p className="recognition">! {project.recognition}</p> : null}
            <div className="tag-row">
              {project.stack.slice(0, 6).map((tech) => <span key={tech}>{tech.toUpperCase()}</span>)}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function LogView() {
  return (
    <div className="view-stack">
      <h2 className="route-title">career_history.log</h2>
      <div className="timeline">
        {experience.map((item, index) => (
          <article className="timeline-entry" key={item.role}>
            <span className={`timeline-node ${index === 0 ? "active" : ""}`} />
            <span className="timestamp">[{item.date}]</span>
            <h3>{item.role} @ {item.org}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>

      <TerminalWindow title="credentials.cache" icon="workspace_premium">
        <div className="terminal-body credentials-grid">
          <div>
            <h3>EDUCATION</h3>
            {education.map((item) => <p key={item}>{item}</p>)}
          </div>
          <div>
            <h3>ACHIEVEMENTS</h3>
            {achievements.map((item) => <p key={item}>{item}</p>)}
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
}

function SystemView() {
  const groupedSkills = useMemo(() => skillGroups.flatMap((group) => group.skills.slice(0, 7)), []);
  return (
    <div className="view-stack">
      <TerminalWindow title="connect.sh" icon="settings_input_component">
        <div className="terminal-body contact-panel">
          <div className="contact-copy">
            <h2>Open secure channel</h2>
            <p>Available for full-stack, DevOps, security, cloud, and AI-backed product work.</p>
          </div>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}><Icon name="mail" size={17} /> {profile.email}</a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}><Icon name="call" size={17} /> {profile.phone}</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><Icon name="code" size={17} /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="work" size={17} /> LinkedIn</a>
          </div>
        </div>
      </TerminalWindow>

      <TerminalWindow title="skill_index.bin" icon="data_object">
        <div className="terminal-body">
          <div className="tag-row dense">
            {groupedSkills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
}

function BottomNav({ activeView, setActiveView }) {
  return (
    <nav className="bottom-nav" aria-label="Portfolio terminal navigation">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`nav-btn ${activeView === item.id ? "active" : ""}`}
          type="button"
          onClick={() => {
            setActiveView(item.id);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Icon name={item.icon} />
          <span>{item.label}</span>
          <i />
        </button>
      ))}
    </nav>
  );
}

function App() {
  const [booted, setBooted] = useState(false);
  const [introActive, setIntroActive] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [activeView, setActiveView] = useState("exe");

  const beginBoot = () => {
    setBooted(true);
    setIntroActive(true);
  };

  const completeIntro = () => {
    setIntroActive(false);
    window.setTimeout(() => setRevealed(true), 250);
  };

  useEffect(() => {
    document.body.classList.toggle("boot-locked", !revealed);
  }, [revealed]);

  return (
    <>
      {!booted ? <BootOverlay onBoot={beginBoot} /> : null}
      <IntroOverlay active={introActive} onComplete={completeIntro} />
      <div id="main-content" className={revealed ? "revealed" : ""}>
        <div className="scanlines" />
        <Header activeView={activeView} />
        <main className="terminal-main">
          <section id="view-exe" className={`view-section ${activeView === "exe" ? "active" : ""}`}><HomeView /></section>
          <section id="view-src" className={`view-section ${activeView === "src" ? "active" : ""}`}><ProjectsView /></section>
          <section id="view-log" className={`view-section ${activeView === "log" ? "active" : ""}`}><LogView /></section>
          <section id="view-sys" className={`view-section ${activeView === "sys" ? "active" : ""}`}><SystemView /></section>
        </main>
        <BottomNav activeView={activeView} setActiveView={setActiveView} />
      </div>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
