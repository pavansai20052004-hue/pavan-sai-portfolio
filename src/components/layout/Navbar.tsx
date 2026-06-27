import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { designTokens } from "../ui/design-tokens";

export interface NavLink {
  label: string;
  href: string;
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links: NavLink[] = [
    { label: "Proof", href: "#proof" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="site-header" style={{ backgroundColor: designTokens.colors.bgPanel }}>
      <a className="brand" href="#home" aria-label="Go to home">
        <span
          className="brand-mark"
          style={{ background: designTokens.gradients.tech }}
        >
          PS
        </span>
        <span>G. Janaki Venkata Pavan Sai</span>
      </a>

      <nav className={`nav-links ${isOpen ? "is-open" : ""}`} aria-label="Primary navigation">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <button
        className="icon-button menu-toggle"
        type="button"
        aria-label="Toggle menu"
        onClick={() => setIsOpen((value) => !value)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
};
