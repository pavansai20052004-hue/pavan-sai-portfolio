// src/components/ui/Badge.tsx
import React from "react";
import { designTokens } from "./design-tokens";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "md",
}) => {
  const variantStyles = {
    default: {
      backgroundColor: "rgba(247, 242, 232, 0.055)",
      borderColor: designTokens.colors.line,
      color: designTokens.colors.mutedStone,
    },
    primary: {
      backgroundColor: `${designTokens.colors.electricCyan}22`,
      borderColor: `${designTokens.colors.electricCyan}44`,
      color: designTokens.colors.electricCyan,
    },
    success: {
      backgroundColor: `${designTokens.colors.sageGreen}22`,
      borderColor: `${designTokens.colors.sageGreen}44`,
      color: designTokens.colors.sageGreen,
    },
    warning: {
      backgroundColor: `${designTokens.colors.amberGlow}22`,
      borderColor: `${designTokens.colors.amberGlow}44`,
      color: designTokens.colors.amberGlow,
    },
    danger: {
      backgroundColor: `${designTokens.colors.coralRed}22`,
      borderColor: `${designTokens.colors.coralRed}44`,
      color: designTokens.colors.coralRed,
    },
  };

  const sizeStyles = {
    sm: "padding: 4px 8px; font-size: 0.75rem;",
    md: "padding: 6px 12px; font-size: 0.85rem;",
    lg: "padding: 8px 16px; font-size: 0.9rem;",
  };

  return (
    <span
      className="badge"
      style={{
        ...variantStyles[variant],
        borderRadius: designTokens.radius.sm,
        borderStyle: "solid",
        borderWidth: "1px",
        fontWeight: designTokens.typography.weights.medium,
        ...sizeStyles[size],
      }}
    >
      {children}
    </span>
  );
};