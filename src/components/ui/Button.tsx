import React, { forwardRef } from "react";
import { designTokens } from "./design-tokens";

// Button Component
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const base = "button";
    const variants = {
      primary: "button-primary",
      secondary: "button",
      ghost: "button-ghost",
    };
    const sizes = {
      sm: "button-sm",
      md: "button-md",
      lg: "button-lg",
    };

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className || ""}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);