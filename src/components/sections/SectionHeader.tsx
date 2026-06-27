// src/components/sections/SectionHeader.tsx
import React from "react";
import { designTokens } from "../ui/design-tokens";

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  body?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  body,
  className = "",
}) => {
  return (
    <div className={`section-heading ${className}`}>
      {kicker && (
        <p
          className="kicker"
          style={{ color: designTokens.colors.electricCyan }}
        >
          {kicker}
        </p>
      )}
      <h2 style={{ fontSize: designTokens.typography.sizes.h2.desktop }}>{title}</h2>
      {body && <p style={{ color: designTokens.colors.mutedStone }}>{body}</p>}
    </div>
  );
};