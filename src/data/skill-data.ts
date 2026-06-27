// src/data/skill-data.ts
import { Code2, ShieldCheck, CloudCog, BrainCircuit, Database, Blocks } from "lucide-react";

// Skills data
export const skillGroups = [
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

// Role tracks data for radar
export const roleTracks = [
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