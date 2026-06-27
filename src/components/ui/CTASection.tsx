import React from "react";
import { Download, Github, Linkedin } from "lucide-react";
import { designTokens } from "./design-tokens";

interface CTALink {
  label: string;
  href: string;
  icon: any;
  variant?: "primary" | "secondary" | "ghost";
}

export const CTASection: React.FC = () => {
  const profile = {
    name: "G. Janaki Venkata Pavan Sai",
    resume: "/Pavan-Sai-Resume-2026.pdf",
    github: "https://github.com/pavansai20052004-hue",
    linkedin: "https://www.linkedin.com/in/gjv44",
  };

  const links: CTALink[] = [
    {
      label: "Resume",
      href: profile.resume,
      icon: Download,
      variant: "primary",
    },
    {
      label: "GitHub",
      href: profile.github,
      icon: Github,
      variant: "secondary",
    },
    {
      label: "LinkedIn",
      href: profile.linkedin,
      icon: Linkedin,
      variant: "secondary",
    },
  ];

  return (
    <section
      className="cta-section"
      style={{
        background: `linear-gradient(135deg, ${designTokens.colors.electricCyan}11, transparent 32%), linear-gradient(315deg, ${designTokens.colors.coralRed}13, transparent 32%), ${designTokens.colors.bgPanel}`,
        boxShadow: designTokens.shadows.signal,
      }}
    >
      <div className="cta-content">
        <h2 style={{ color: designTokens.colors.ink }}>Ready for Your Next Engineering Challenge</h2>
        <p style={{ color: designTokens.colors.mutedStone }}>
          I build systems with the wiring people forget: API discipline, auth, audit trails,
          deployment paths, and the data needed to reason about risk.
        </p>
        <div className="cta-links">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`button ${link.variant}`}
                target="_blank"
                rel="noreferrer"
              >
                <Icon size={18} />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};