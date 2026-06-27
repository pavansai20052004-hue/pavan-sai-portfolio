// src/components/ui/ProjectCard.tsx
import React, { useState } from "react";
import { ExternalLink, Trophy } from "lucide-react";
import { designTokens } from "./design-tokens";

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
}

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
  isSelected?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onClick,
  isSelected = false,
}) => {
  const Icon = project.icon;
  const accentColors = {
    teal: designTokens.colors.electricCyan,
    green: designTokens.colors.sageGreen,
    amber: designTokens.colors.amberGlow,
    coral: designTokens.colors.coralRed,
    blue: designTokens.colors.skyBlue,
    stone: designTokens.colors.warmStone,
  };

  return (
    <article
      className={`project-card accent-${project.accent} ${isSelected ? "is-selected" : ""}`}
      data-reveal
      data-tilt
      onClick={onClick}
      style={{
        borderColor: isSelected ? accentColors[project.accent] : designTokens.colors.line,
        background: isSelected
          ? `radial-gradient(circle at center, ${accentColors[project.accent]}22, transparent 14rem), ${designTokens.colors.bgPanel}`
          : `radial-gradient(circle at center, ${designTokens.colors.electricCyan}11, transparent 14rem), ${designTokens.colors.bgPanel}`,
        boxShadow: isSelected ? designTokens.shadows.cardHover : designTokens.shadows.card,
      }}
    >
      <div
        className="project-card-head"
        style={{ borderColor: accentColors[project.accent] + "33" }}
      >
        <span
          className="project-icon"
          style={{ backgroundColor: accentColors[project.accent] + "0f" }}
        >
          <Icon size={21} style={{ color: accentColors[project.accent] }} />
        </span>
        <div className="project-card-actions">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} ${project.linkLabel || "project"}`}
            onClick={(event) => event.stopPropagation()}
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
      <h3 style={{ color: designTokens.colors.ink }}>{project.title}</h3>
      <p
        className="project-subtitle"
        style={{ color: accentColors[project.accent] }}
      >
        {project.subtitle}
      </p>
      {project.recognition && (
        <p className="project-recognition compact">
          <Trophy size={15} style={{ color: designTokens.colors.amberGlow }} />
          <span style={{ color: designTokens.colors.ink }}>
            {project.recognition}
          </span>
        </p>
      )}
      <p style={{ color: designTokens.colors.mutedStone }}>{project.impact}</p>
      <div className="tag-cloud">
        {project.stack.map((tech) => (
          <span
            key={tech}
            style={{
              borderColor: designTokens.colors.line,
              backgroundColor: "rgba(247, 242, 232, 0.055)",
              color: designTokens.colors.mutedStone,
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};
