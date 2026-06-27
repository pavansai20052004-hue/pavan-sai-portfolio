// src/data/projects-data.ts
import { CloudCog, ShieldCheck, Database, Network, BrainCircuit, TerminalSquare, Cpu, Blocks, Sparkles, Route, Server, LockKeyhole, BarChart3, Code2, Workflow } from "lucide-react";

export interface Project {
  title: string;
  subtitle: string;
  icon: any;
  link: string;
  linkLabel: string;
  recognition?: string;
  stack: string[];
  impact: string;
  accent: "teal" | "green" | "amber" | "coral" | "blue" | "stone";
  domains: string[];
  proof: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    title: "DevPilot AI",
    subtitle: "Autonomous DevOps incident recovery platform",
    icon: CloudCog,
    link: "https://devpilot-ai-two.vercel.app",
    linkLabel: "Live Project",
    recognition: "OpenAI x Outskill Hackathon - shortlisted Top 1000 worldwide",
    stack: ["Next.js", "React", "FastAPI", "OpenAI API", "Vercel", "Render", "Docker"],
    impact: "Built an AI DevOps engineer that converts logs, CI/CD failures, Kubernetes signals, Terraform drift, security risks, and cost findings into reviewed recovery actions.",
    accent: "teal",
    domains: ["Cloud", "DevOps", "AI/ML", "Full Stack"],
    proof: "Live Vercel product with incident dashboard, log intake, predictive failure analysis, Kubernetes restart and rollback flows, Terraform remediation, security analysis, voice assistant, and SaaS usage metering.",
    outcome: "Highlights the strongest current product: a deployed AI operations platform with demo-ready recovery workflows."
  },
  {
    title: "Cyber Digital Twin",
    subtitle: "Industry-ready attack path simulation platform",
    icon: ShieldCheck,
    link: "https://cyber-digital-twin.vercel.app",
    linkLabel: "Live Project",
    stack: ["Python", "Neo4j-ready", "Docker", "Security analytics"],
    impact: "Models enterprise assets, trust links, vulnerabilities, security controls, adversary profiles, blast radius, control ROI, and what-if defense simulation.",
    accent: "teal",
    domains: ["Cyber", "AI/ML", "DevOps"],
    proof: "Attack-path analytics, blast-radius reasoning, control ROI, audit logs, rollback snapshots, and Docker-ready deployment.",
    outcome: "Turns security posture into a decision console executives and engineers can inspect."
  },
  {
    title: "RentEase",
    subtitle: "Rental management platform",
    icon: Database,
    link: "https://rentease-frontend-sooty.vercel.app",
    linkLabel: "Live Project",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "RBAC"],
    impact: "Built role-based dashboards, secure authentication, MVC backend modules, reusable middleware, CRUD operations, and validation-focused API flows.",
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
    impact: "Delivered a structured full-stack marketplace with 10+ APIs, RBAC logic, MongoDB CRUD flows, and backend error-handling middleware.",
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
    impact: "Created role-based loan screening with approval and default risk scoring, feature engineering, ROC-AUC evaluation, cross-validation, and tuning.",
    accent: "blue",
    domains: ["AI/ML", "Full Stack"],
    proof: "Flask workflows, SQLite-backed dashboards, preprocessing, feature engineering, ROC-AUC evaluation, cross-validation, and hyperparameter tuning.",
    outcome: "Connects ML scoring to a practical decision workflow for credit risk."
  },
  {
    title: "AegisCloud",
    subtitle: "Self-healing AI cloud infrastructure platform",
    icon: CloudCog,
    link: "https://self-healing-ai-cloud-infrastructur.vercel.app",
    linkLabel: "Live Project",
    stack: ["Java 21", "Spring Boot", "FastAPI", "Kubernetes", "Prometheus"],
    impact: "Detects infrastructure anomalies, predicts failure modes, ranks remediation actions, and creates incident intelligence with approval gates and rollback triggers.",
    accent: "amber",
    domains: ["Cloud", "AI/ML", "DevOps"],
    proof: "Spring Boot services, FastAPI prediction APIs, Kubernetes policy manifests, Prometheus alerts, guardrails, approval gates, and audit ledger.",
    outcome: "Connects anomaly detection to controlled remediation instead of stopping at dashboards."
  },
  {
    title: "DevOps Automation Suite",
    subtitle: "Maven build automation and Ansible configuration management",
    icon: TerminalSquare,
    link: "https://github.com/pavansai20052004-hue/devops-ansible-config-management",
    stack: ["Java 17", "Maven", "Ansible", "Linux", "Nginx", "YAML"],
    impact: "Automated compile-test-package lifecycles, executable JAR generation, Linux provisioning, Nginx service setup, and idempotent reruns.",
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
    linkLabel: "Live Project",
    stack: ["Node.js", "Express", "JavaScript", "Gemini API"],
    impact: "Built backend REST endpoints for a generative AI chatbot with secure proxy behavior, async API handling, and real-time frontend communication.",
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
    linkLabel: "Live Project",
    stack: ["Solidity", "Ethereum", "Web3.js", "IPFS"],
    impact: "Designed a tamper-resistant Ayurvedic herb supply-chain traceability concept using immutable records and decentralized storage.",
    accent: "amber",
    domains: ["Blockchain", "Cyber"],
    proof: "Solidity, Ethereum, Web3.js, IPFS, immutable traceability records, and January 2026 research publication.",
    outcome: "Positions blockchain as a trust layer for supply-chain verification."
  }
];

export const domainFilters = [
  { id: "All", label: "All Systems", icon: Sparkles },
  { id: "Cyber", label: "Cyber", icon: ShieldCheck },
  { id: "Cloud", label: "Cloud", icon: CloudCog },
  { id: "DevOps", label: "DevOps", icon: Workflow },
  { id: "Full Stack", label: "Full Stack", icon: Code2 },
  { id: "AI/ML", label: "AI/ML", icon: BrainCircuit },
  { id: "Blockchain", label: "Blockchain", icon: Blocks }
];

export const proofPillars = [
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

export const operatingModel = [
  { label: "Model", detail: "assets, users, APIs, services, data" },
  { label: "Score", detail: "risk, reliability, default probability" },
  { label: "Control", detail: "RBAC, policies, guardrails, approvals" },
  { label: "Ship", detail: "Docker, Maven, Ansible, exports, tests" }
];