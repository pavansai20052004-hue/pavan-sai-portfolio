// src/components/ui/SkillCard.tsx
import React from "react";
import { designTokens } from "./design-tokens";

interface SkillCardProps {
  title: string;
  icon: any;
  skills: string[];
}

export const SkillCard: React.FC<SkillCardProps> = ({ title, icon, skills }) => {
  const Icon = icon;

  return (
    <article
      className="skill-card"
      style={{
        borderColor: designTokens.colors.line,
        background: designTokens.colors.bgPanel,
        boxShadow: designTokens.shadows.card,
      }}
    >
      <div className="skill-heading">
        <Icon size={19} style={{ color: designTokens.colors.amberGlow }} />
        <h3 style={{ color: designTokens.colors.ink }}>{title}</h3>
      </div>
      <div className="skill-list">
        {skills.map((skill) => (
          <span
            key={skill}
            style={{
              borderColor: designTokens.colors.line,
              backgroundColor: "rgba(247, 242, 232, 0.055)",
              color: designTokens.colors.mutedStone,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
};