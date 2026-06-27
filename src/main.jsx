import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BarChart3,
  Blocks,
  BrainCircuit,
  BriefcaseBusiness,
  Calendar,
  CloudCog,
  Code2,
  Cpu,
  Database,
  Download,
  Eye,
  ExternalLink,
  Filter,
  Github,
  GraduationCap,
  Linkedin,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Route,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Trophy,
  Workflow,
  X
} from "lucide-react";
import "./styles.css";

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

const metrics = [
  { value: "Top 1000", label: "OpenAI x Outskill hackathon shortlist" },
  { value: "Live", label: "DevPilot AI deployed on Vercel" },
  { value: "15+", label: "REST APIs in MERN internship work" }
];

const orbitSignals = [
  "DevPilot AI",
  "OpenAI Hackathon",
  "Cyber Digital Twin",
  "AIOps Cloud",
  "JWT / RBAC",
  "Docker + K8s"
];

const projects = [
  {
    title: "DevPilot AI",
    subtitle: "Autonomous DevOps incident recovery platform",
    icon: CloudCog,
    link: "https://devpilot-ai-two.vercel.app",
    linkLabel: "Live Project",
    recognition: "OpenAI x Outskill Hackathon - shortlisted Top 1000 worldwide",
    stack: ["Next.js", "React", "FastAPI", "OpenAI API", "Vercel", "Render", "Docker"],
    impact:
      "Built an AI DevOps engineer that converts logs, CI/CD failures, Kubernetes signals, Terraform drift, security risks, and cost findings into reviewed recovery actions.",
    accent: "teal",
    domains: ["Cloud", "DevOps", "AI/ML", "Full Stack"],
    proof:
      "Live Vercel product with incident dashboard, log intake, predictive failure analysis, Kubernetes restart and rollback flows, Terraform remediation, security analysis, voice assistant, and SaaS usage metering.",
    outcome: "Highlights the strongest current product: a deployed AI operations platform with demo-ready recovery workflows."
  },
  {
    title: "Cyber Digital Twin",
    subtitle: "Industry-ready attack path simulation platform",
    icon: ShieldCheck,
    link: "https://cyber-digital-twin.vercel.app",
    linkLabel: "Live Project",
    stack: ["Python", "Neo4j-ready", "Docker", "Security analytics"],
    impact:
      "Models enterprise assets, trust links, vulnerabilities, security controls, adversary profiles, blast radius, control ROI, and what-if defense simulation.",
    accent: "teal",
    domains: ["Cyber", "AI/ML", "DevOps"],
    proof: "Attack-path analytics, blast-radius reasoning, control ROI, audit logs, rollback snapshots, and Docker-ready deployment.",
    outcome: "Turns security posture into a decision console executives and engineers can inspect."
  },
  {
    title: "AegisCloud",
    subtitle: "Self-healing AI cloud infrastructure platform",
    icon: CloudCog,
    link: "https://self-healing-ai-cloud-infrastructur.vercel.app",
    linkLabel: "Live Project",
    stack: ["Java 21", "Spring Boot", "FastAPI", "Kubernetes", "Prometheus"],
    impact:
      "Detects infrastructure anomalies, predicts failure modes, ranks remediation actions, and creates incident intelligence with approval gates and rollback triggers.",
    accent: "amber",
    domains: ["Cloud", "AI/ML", "DevOps"],
    proof: "Spring Boot services, FastAPI prediction APIs, Kubernetes policy manifests, Prometheus alerts, guardrails, approval gates, and audit ledger.",
    outcome: "Connects anomaly detection to controlled remediation instead of stopping at dashboards."
  },
  {
    title: "RentEase",
    subtitle: "Rental management platform",
    icon: Database,
    link: "https://rentease-frontend-sooty.vercel.app",
    linkLabel: "Live Project",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "RBAC"],
    impact:
      "Built role-based dashboards, secure authentication, MVC backend modules, reusable middleware, CRUD operations, and validation-focused API flows.",
    accent: "coral",
    domains: ["Full Stack", "Cyber"],
    proof: "12+ workflow APIs, JWT authentication, RBAC dashboards, Express routes, MongoDB models, validation, and clean frontend-backend separation.",
    outcome: "Shows secure product delivery across real user roles and rental operations."
  },
  {
    title: "HunarHub",
    subtitle: "Skill marketplace and talent connect platform",
    icon: Network,
    link: "https://hunar-hub-eight.vercel.app",
    linkLabel: "Live Project",
    stack: ["React", "Node.js", "Express", "MongoDB", "CORS"],
    impact:
      "Delivered a structured full-stack marketplace with 10+ APIs, RBAC logic, MongoDB CRUD flows, and backend error-handling middleware.",
    accent: "green",
    domains: ["Full Stack", "Cyber"],
    proof: "Marketplace architecture with REST APIs, CORS-ready configuration, role-aware access logic, CRUD flows, and reusable backend middleware.",
    outcome: "Proves full-stack structure for a talent marketplace, not only static UI screens."
  },
  {
    title: "CrediSense AI",
    subtitle: "Credit risk decision platform",
    icon: BrainCircuit,
    link: "https://credit-risk-project.vercel.app",
    linkLabel: "Live Project",
    stack: ["Python", "Flask", "Scikit-learn", "Pandas", "SQLite"],
    impact:
      "Created role-based loan screening with approval and default risk scoring, feature engineering, ROC-AUC evaluation, cross-validation, and tuning.",
    accent: "blue",
    domains: ["AI/ML", "Full Stack"],
    proof: "Flask workflows, SQLite-backed dashboards, preprocessing, feature engineering, ROC-AUC evaluation, cross-validation, and hyperparameter tuning.",
    outcome: "Connects ML scoring to a practical decision workflow for credit risk."
  },
  {
    title: "DevOps Automation Suite",
    subtitle: "Maven build automation and Ansible configuration management",
    icon: TerminalSquare,
    link: "https://github.com/pavansai20052004-hue/devops-ansible-config-management",
    stack: ["Java 17", "Maven", "Ansible", "Linux", "Nginx", "YAML"],
    impact:
      "Automated compile-test-package lifecycles, executable JAR generation, Linux provisioning, Nginx service setup, and idempotent reruns.",
    accent: "stone",
    domains: ["DevOps", "Cloud"],
    proof: "Maven lifecycle automation, dependency and plugin management, Ansible playbooks, Linux service validation, and repeatable changed=0 reruns.",
    outcome: "Demonstrates disciplined build and configuration automation that other projects can rely on."
  },
  {
    title: "GenAI-Test",
    subtitle: "Gemini chatbot web application",
    icon: Cpu,
    link: "https://github.com/pavansai20052004-hue/genai-test",
    stack: ["Node.js", "Express", "JavaScript", "Gemini API"],
    impact:
      "Built backend REST endpoints for a generative AI chatbot with secure proxy behavior, async API handling, and real-time frontend communication.",
    accent: "teal",
    domains: ["AI/ML", "Full Stack"],
    proof: "Node/Express backend proxy, async API handling, REST endpoints, and real-time frontend communication with a generative model.",
    outcome: "Shows practical AI integration behind a safer backend boundary."
  },
  {
    title: "Root to Remedy",
    subtitle: "Blockchain traceability research/system",
    icon: Blocks,
    link: "https://github.com/pavansai20052004-hue/paper-publcation",
    stack: ["Solidity", "Ethereum", "Web3.js", "IPFS"],
    impact:
      "Designed a tamper-resistant Ayurvedic herb supply-chain traceability concept using immutable records and decentralized storage.",
    accent: "amber",
    domains: ["Blockchain", "Cyber"],
    proof: "Solidity, Ethereum, Web3.js, IPFS, immutable traceability records, and January 2026 research publication.",
    outcome: "Positions blockchain as a trust layer for supply-chain verification."
  }
];

const domainFilters = [
  { id: "All", label: "All Systems", icon: Sparkles },
  { id: "Cyber", label: "Cyber", icon: ShieldCheck },
  { id: "Cloud", label: "Cloud", icon: CloudCog },
  { id: "DevOps", label: "DevOps", icon: Workflow },
  { id: "Full Stack", label: "Full Stack", icon: Code2 },
  { id: "AI/ML", label: "AI/ML", icon: BrainCircuit },
  { id: "Blockchain", label: "Blockchain", icon: Blocks }
];

const proofPillars = [
  {
    title: "Security-first product thinking",
    icon: LockKeyhole,
    stat: "JWT + RBAC",
    body: "Authentication, authorization, validation, error middleware, audit logs, API-key mode, and security headers show up across the portfolio."
  },
  {
    title: "Cyber risk intelligence",
    icon: Route,
    stat: "Attack paths",
    body: "The digital twin work models assets, trust links, vulnerabilities, controls, adversaries, blast radius, and defense what-if analysis."
  },
  {
    title: "AI DevOps product delivery",
    icon: Server,
    stat: "DevPilot AI",
    body: "A live Vercel product ties incident signals, AI diagnosis, remediation workflows, Kubernetes recovery, Terraform fixes, and SaaS usage metering into one operating surface."
  },
  {
    title: "Data-backed decisions",
    icon: BarChart3,
    stat: "ROC-AUC",
    body: "ML workflows include preprocessing, feature engineering, cross-validation, tuning, and score-driven dashboards instead of isolated notebooks."
  }
];

const operatingModel = [
  { label: "Model", detail: "assets, users, APIs, services, data" },
  { label: "Score", detail: "risk, reliability, default probability" },
  { label: "Control", detail: "RBAC, policies, guardrails, approvals" },
  { label: "Ship", detail: "Docker, Maven, Ansible, exports, tests" }
];

const roleTracks = [
  {
    title: "Security Platform Engineer",
    score: 94,
    icon: ShieldCheck,
    proof: "Cyber digital twin, attack-path analytics, RBAC, audit logging, security headers"
  },
  {
    title: "Full Stack Engineer",
    score: 91,
    icon: Code2,
    proof: "MERN platforms, role dashboards, API validation, MVC structure, frontend-backend separation"
  },
  {
    title: "DevOps / AIOps Engineer",
    score: 93,
    icon: CloudCog,
    proof: "DevPilot AI, Docker, Kubernetes recovery flows, Prometheus alerts, Maven automation, Ansible provisioning"
  },
  {
    title: "AI/ML Systems Builder",
    score: 84,
    icon: BrainCircuit,
    proof: "Credit risk scoring, prediction APIs, feature engineering, ROC-AUC, cross-validation"
  }
];

const skillGroups = [
  {
    title: "Full Stack",
    icon: Code2,
    skills: ["React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "Flask", "FastAPI", "REST APIs", "MVC", "Tailwind"]
  },
  {
    title: "Security",
    icon: ShieldCheck,
    skills: ["JWT", "RBAC", "attack path simulation", "risk scoring", "audit logging", "security headers", "API validation"]
  },
  {
    title: "DevOps",
    icon: CloudCog,
    skills: ["Linux", "Git", "Docker", "Docker Compose", "Kubernetes", "Vercel", "Render", "Maven", "Ansible", "Nginx", "CI/CD fundamentals", "YAML"]
  },
  {
    title: "Data + AI",
    icon: BrainCircuit,
    skills: ["Python", "OpenAI API", "Scikit-learn", "Pandas", "NumPy", "feature engineering", "ROC-AUC", "cross-validation"]
  },
  {
    title: "Data Stores",
    icon: Database,
    skills: ["MongoDB", "MySQL", "SQLite", "PostgreSQL", "Neo4j-ready graphs", "JSON stores"]
  },
  {
    title: "Blockchain",
    icon: Blocks,
    skills: ["Solidity", "Ethereum", "Web3.js", "IPFS", "smart contracts"]
  }
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
    role: "DevOps Intern",
    details: "Skilified Mentor, Hyderabad | Mar 2026 - Apr 2026 | Java 17, Apache Maven, Linux, CI/CD fundamentals",
    points: [
      "Automated Java compile-test-package lifecycle with Maven.",
      "Configured repeatable Java 17 build environments and resolved dependency conflicts.",
      "Practiced structured troubleshooting across deployment-ready tasks."
    ]
  },
  {
    role: "Full Stack Web Development Intern",
    details: "Unified Mentor, Hyderabad | Jan 2026 - Apr 2026 | MERN Stack, REST APIs, MongoDB, JWT, RBAC",
    points: [
      "Developed secure MERN applications with 15+ RESTful APIs.",
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

      const onClick = (e) => {
        if (Math.sqrt(dx * dx + dy * dy) < 5) {
          card.classList.add("card-clicked");
          setTimeout(() => card.classList.remove("card-clicked"), 300);
        }
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

function TwinScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    let disposed = false;
    let cleanupScene = () => {};

    import("three").then((THREE) => {
      if (disposed || !mountRef.current) return;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
      camera.position.set(0, 0, 25);

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      const group = new THREE.Group();
      scene.add(group);

      const pointCloud = createPointCloud(group, THREE);
      const lineSystem = createLineSystem(group, THREE);
      const centralCore = createCentralCore(group, THREE);
      const dynamicRings = createDynamicRings(group, THREE);
      const floatingIcons = createFloatingIcons(group, THREE);
      const lightSystem = createLighting(scene, THREE);

      const pointer = { x: 0, y: 0 };
      const onPointer = (event) => {
        pointer.x = (event.clientX / window.innerWidth - 0.5) * 0.42;
        pointer.y = (event.clientY / window.innerHeight - 0.5) * 0.34;
      };

      const resize = () => {
        const width = mount.clientWidth;
        const height = mount.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      window.addEventListener("pointermove", onPointer);
      window.addEventListener("resize", resize);
      resize();

      let frame = 0;
      const clock = new THREE.Clock();
      const animate = () => {
        frame = window.requestAnimationFrame(animate);
        const elapsed = clock.getElapsedTime();

        if (!prefersReducedMotion) {
          group.rotation.y = elapsed * 0.028 + pointer.x * 0.8;
          group.rotation.x = Math.sin(elapsed * 0.42) * 0.18 + pointer.y * 0.4;
          core.rotation.x = elapsed * 0.28;
          core.rotation.y = elapsed * 0.24;
        }

        centralCore.rotation.z = elapsed * 0.18;
        dynamicRings.forEach((ring, index) => {
          ring.rotation.z = elapsed * (0.08 + index * 0.12);
          ring.rotation.y = Math.sin(elapsed * 0.5 + index * 0.3) * 0.2;
        });

        floatingIcons.forEach((icon, index) => {
          const time = elapsed + index * 0.7;
          icon.position.x = Math.sin(time * 0.8) * 3.5;
          icon.position.y = Math.cos(time * 0.6) * 3.5;
          icon.rotation.y = time * 0.4;
        });

        lightSystem.forEach((light, index) => {
          light.intensity = 0.5 + Math.sin(elapsed * 0.8 + index * Math.PI / 3) * 0.5;
        });

        renderer.render(scene, camera);
      };

      animate();

      cleanupScene = () => {
        window.cancelAnimationFrame(frame);
        window.removeEventListener("pointermove", onPointer);
        window.removeEventListener("resize", resize);
        group.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) object.material.dispose();
        });
        renderer.dispose();
        if (renderer.domElement.parentNode) renderer.domElement.remove();
      };
    });

    return () => {
      disposed = true;
      cleanupScene();
    };
  }, []);

  return <div className="twin-scene" ref={mountRef} aria-hidden="true" />;
}

function createPointCloud(group, THREE) {
  const nodeCount = window.innerWidth < 760 ? 44 : 72;
  const nodes = [];

  for (let i = 0; i < nodeCount; i += 1) {
    const radius = 4.2 + Math.random() * 8;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    nodes.push(new THREE.Vector3(x, y, z));
  }

  const nodePositions = new Float32Array(nodes.length * 3);
  nodes.forEach((node, i) => {
    nodePositions[i * 3] = node.x;
    nodePositions[i * 3 + 1] = node.y;
    nodePositions[i * 3 + 2] = node.z;
  });

  const pointGeometry = new THREE.BufferGeometry();
  pointGeometry.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));
  pointGeometry.setAttribute("size", new THREE.Float32BufferAttribute(
    new Array(nodeCount).fill(0).map(() => 0.08 + Math.random() * 0.2), 1
  ));

  const pointMaterial = new THREE.PointsMaterial({
    color: 0x7cf6de,
    size: 0.085,
    transparent: true,
    opacity: 0.92,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending
  });

  const pointCloud = new THREE.Points(pointGeometry, pointMaterial);
  pointCloud.userData = { type: "points", nodes };
  group.add(pointCloud);

  return pointCloud;
}

function createLineSystem(group, THREE) {
  const nodeCount = window.innerWidth < 760 ? 44 : 72;
  const nodes = [];

  for (let i = 0; i < nodeCount; i += 1) {
    const radius = 4.2 + Math.random() * 8;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    nodes.push(new THREE.Vector3(x, y, z));
  }

  const lineVertices = [];
  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      const distance = nodes[i].distanceTo(nodes[j]);
      if (distance < 2.8 && lineVertices.length < 1200) {
        lineVertices.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z);
      }
    }
  }

  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(lineVertices, 3));

  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x3fbda9,
    transparent: true,
    opacity: 0.18,
    blending: THREE.AdditiveBlending
  });

  const lineSystem = new THREE.LineSegments(lineGeometry, lineMaterial);
  lineSystem.userData = { nodes };
  group.add(lineSystem);

  return lineSystem;
}

function createCentralCore(group, THREE) {
  const coreGeometry = new THREE.IcosahedronGeometry(2.25, 2);
  const coreMaterial = new THREE.MeshBasicMaterial({
    color: 0xffc36b,
    wireframe: true,
    transparent: true,
    opacity: 0.54,
    side: THREE.DoubleSide
  });

  const core = new THREE.Mesh(coreGeometry, coreMaterial);
  core.userData = { type: "core" };
  group.add(core);

  const coreGlow = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2.6, 1),
    new THREE.MeshBasicMaterial({
      color: 0xff6b5d,
      transparent: true,
      opacity: 0.15,
      side: THREE.OutsideOnly
    })
  );
  core.add(coreGlow);

  return core;
}

function createDynamicRings(group, THREE) {
  const rings = [
    { radius: 6.2, color: 0xff6b5d, rotation: [1.2, 0.2, 0], thickness: 0.01 },
    { radius: 7.9, color: 0x8bd166, rotation: [0.25, 1.18, 0.3], thickness: 0.008 },
    { radius: 9.3, color: 0x62a8ff, rotation: [1.55, 0.82, 0.8], thickness: 0.007 }
  ];

  const ringObjects = rings.map((ringConfig) => {
    const torusGeometry = new THREE.TorusGeometry(ringConfig.radius, ringConfig.thickness, 12, 180);

    const gradientMaterial = new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: 0.32,
      blending: THREE.AdditiveBlending
    });

    const ring = new THREE.Mesh(torusGeometry, gradientMaterial);
    ring.rotation.set(...ringConfig.rotation);
    ring.userData = {
      color: ringConfig.color,
      radius: ringConfig.radius,
      baseOpacity: 0.32,
      wavePhase: Math.random() * Math.PI * 2
    };
    group.add(ring);

    return ring;
  });

  return ringObjects;
}

function createFloatingIcons(group, THREE) {
  const iconPositions = [
    { x: 4, y: -3, z: 0, scale: 0.8, color: 0xffc36b },
    { x: -3, y: 4, z: 0, scale: 0.6, color: 0x7cf6de },
    { x: 5, y: 2, z: -2, scale: 0.7, color: 0xff6b5d },
    { x: -4, y: -2, z: 1, scale: 0.5, color: 0x8bd166 }
  ];

  const icons = iconPositions.map((pos, index) => {
    const iconGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.4);
    const iconMaterial = new THREE.MeshBasicMaterial({
      color: pos.color,
      transparent: true,
      opacity: 0.6,
      emissive: pos.color,
      emissiveIntensity: 0.3
    });

    const icon = new THREE.Mesh(iconGeometry, iconMaterial);
    icon.position.set(pos.x, pos.y, pos.z);
    icon.scale.set(pos.scale, pos.scale, pos.scale);
    icon.userData = {
      originalY: pos.y,
      floatSpeed: 0.8 + index * 0.3,
      floatHeight: 2 + index * 0.5,
      rotationSpeed: 1.5 + index * 0.5
    };
    group.add(icon);

    return icon;
  });

  return icons;
}

function createLighting(scene, THREE) {
  const lights = [];

  const ambientLight = new THREE.AmbientLight(0x404040, 0.2);
  scene.add(ambientLight);

  const pointLights = [
    { position: new THREE.Vector3(10, 10, 10), color: 0x7cf6de, intensity: 1 },
    { position: new THREE.Vector3(-10, -10, 5), color: 0xff6b5d, intensity: 0.8 },
    { position: new THREE.Vector3(5, -10, -10), color: 0x8bd166, intensity: 0.6 },
    { position: new THREE.Vector3(-5, 10, -5), color: 0x62a8ff, intensity: 0.7 }
  ];

  pointLights.forEach((config) => {
    const light = new THREE.PointLight(config.color, config.intensity, 50);
    light.position.copy(config.position);
    scene.add(light);
    lights.push(light);
  });

  const hemisphereLight = new THREE.HemisphereLight(0x333333, 0x111111, 0.3);
  scene.add(hemisphereLight);

  return lights;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = ["Proof", "Projects", "Skills", "Experience", "Contact"];

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Go to home">
        <span className="brand-mark">PS</span>
        <span>{profile.shortName}</span>
      </a>
      <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
            {link}
          </a>
        ))}
      </nav>
      <button className="icon-button menu-toggle" type="button" aria-label="Toggle menu" onClick={() => setOpen((value) => !value)}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
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
      <TwinScene />
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
            {profile.name.split(' ').map((part, index) => (
              <span 
                key={index} 
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                {part}
              </span>
            ))}
          </h1>
          <p className="hero-subtitle">
            {profile.role} building DevPilot AI, secure MERN systems, DevOps automation, cybersecurity digital twins, AIOps infrastructure, and AI/ML decision platforms.
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

function SectionHeading({ kicker, title, body }) {
  return (
    <div className="section-heading" data-reveal>
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

function ProofEngine() {
  return (
    <section className="section proof-section" id="proof">
      <SectionHeading
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
      <SectionHeading
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
        {filteredProjects.map((project) => {
          const Icon = project.icon;
          return (
            <article
              className={`project-card accent-${project.accent}${project.title === selectedProject.title ? " is-selected" : ""}`}
              data-reveal
              data-tilt
              key={project.title}
              onPointerEnter={() => setSelectedTitle(project.title)}
            >
              <div className="project-card-head">
                <span className="project-icon">
                  <Icon size={21} />
                </span>
                <div className="project-card-actions">
                  <button type="button" onClick={() => setSelectedTitle(project.title)} aria-label={`Inspect ${project.title}`}>
                    <Eye size={17} />
                  </button>
                  <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} ${project.linkLabel || "repository"}`}>
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <h3>{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              {project.recognition ? (
                <p className="project-recognition compact">
                  <Trophy size={15} />
                  {project.recognition}
                </p>
              ) : null}
              <p>{project.impact}</p>
              <div className="tag-cloud">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          );
        })}
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
      <SectionHeading
        kicker="Technical arsenal"
        title="A wide stack, organized around shipping secure systems."
        body="This site keeps the skills dense and scannable so recruiters and engineering reviewers can see the range quickly."
      />
      <RoleRadar />
      <div className="skill-grid">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <article className="skill-card" data-reveal key={group.title}>
              <div className="skill-heading">
                <Icon size={19} />
                <h3>{group.title}</h3>
              </div>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <SectionHeading
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

function App() {
  useReveal();
  useTilt();
  const scrollProgress = useScrollProgress();

  return (
    <>
      <div className="scroll-progress" style={{ "--progress": scrollProgress / 100 }} aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <MetricsStrip />
        <ProofEngine />
        <Projects />
        <Skills />
        <Experience />
        <Credentials />
        <Contact />
      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
