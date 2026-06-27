// src/components/ui/design-tokens.ts
/**
 * Design tokens for the 2026 premium portfolio
 * Dark-first color system with tech-specific accents
 */
export const designTokens = {
  // Color System - Premium Dark Mode Essence
  colors: {
    // Primary backgrounds
    bgDeepSpace: '#050605',
    bgCarbonBlack: '#0b0d0b',
    bgPanel: 'rgba(19, 22, 19, 0.78)',
    bgPanelSolid: '#121511',

    // Text hierarchy
    ink: '#f7f2e8',           // Primary text (Ghost White)
    mutedStone: '#b8b2a3',     // Secondary text
    warmGray: '#7f7b70',       // Tertiary/quiet

    // Tech accent colors
    electricCyan: '#62e4cd',   // Primary tech accent (DevPilot AI)
    sageGreen: '#9bd56e',      // Success, deployment
    amberGlow: '#f5bd70',      // AI systems, highlights
    coralRed: '#ff755f',       // Security, alerts
    skyBlue: '#73a9ff',        // Cloud, APIs
    warmStone: '#d5c8ae',      // Neutral, debugging

    // Semantic colors
    securityRed: '#e74c3c',
    dataGreen: '#27ae60',
    aiPurple: '#9b59b6',
    devopsBlue: '#3498db',
  },

  // Gradients
  gradients: {
    tech: 'linear-gradient(90deg, var(--electric-cyan), var(--amber-glow))',
    security: 'linear-gradient(90deg, var(--coral-red), var(--sage-green))',
    deep: 'linear-gradient(180deg, var(--bg-deep-space) 0%, #090a08 43%, #0c0908 100%)',
    accentHero: 'radial-gradient(circle at top left, rgba(98, 228, 205, 0.12), transparent 28rem)',
    accentRight: 'radial-gradient(circle at 80% 20%, rgba(245, 189, 112, 0.12), transparent 24rem)',
  },

  // Typography System
  typography: {
    fontFamily: {
      sans: `'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
      mono: `'JetBrains Mono', monospace`,
    },

    sizes: {
      // H1 (Desktop, Tablet, Mobile)
      h1: {
        desktop: '6.4rem',
        tablet: '5.4rem',
        mobile: '3.7rem',
      },

      // H2 (Desktop, Tablet, Mobile)
      h2: {
        desktop: '3.7rem',
        tablet: '3.1rem',
        mobile: '2.35rem',
      },

      // H3 (Desktop, Tablet/Mobile)
      h3: {
        desktop: '2.2rem',
        tablet: '1.8rem',
        mobile: '1.65rem',
      },

      // Body 1 (Desktop, Tablet, Mobile)
      body1: {
        desktop: '1.24rem',
        tablet: '1.1rem',
        mobile: '1.08rem',
      },

      // Body 2 (Desktop, Tablet/Mobile)
      body2: {
        desktop: '0.92rem',
        tablet: '0.85rem',
        mobile: '0.8rem',
      },

      // Mono (Code samples)
      mono: '0.85rem',
      codeTag: '0.8rem',
    },

    weights: {
      regular: '400',
      medium: '600',
      semibold: '800',
    },

    lineHeights: {
      tight: '0.9',
      normal: '1.62',
      relaxed: '1.55',
      loose: '1.65',
    },

    tracking: {
      tight: '-0.05em',
      normal: '0',
      wide: '0.1em',
    },
  },

  // Spacing Scale (24px base rhythm)
  spacing: {
    '0': '0',
    '1': '4px',
    '2': '8px',
    '3': '16px',
    '4': '24px',
    '5': '32px',
    '6': '48px',
    '7': '64px',
    '8': '96px',
    '9': '128px',
  },

  // Border Radius
  radius: {
    xs: '4px',
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '50%',
  },

  // Shadows
  shadows: {
    card: '0 20px 70px rgba(0, 0, 0, 0.22)',
    cardHover: '0 24px 80px rgba(0, 0, 0, 0.45)',
    console: '0 24px 80px rgba(0, 0, 0, 0.45)',
    button: '0 8px 30px rgba(0, 0, 0, 0.18)',
    signal: '0 24px 80px rgba(0, 0, 0, 0.45)',
  },

  // Animation Durations
  animations: {
    fast: '180ms',
    normal: '700ms',
    slow: '160ms',
    scroll: '700ms',
    cardTilt: '160ms',
    pulse: '2500ms',
    scan: '3600ms',
    float: '800ms',
  },

  // Z-index layers
  zIndex: {
    base: '0',
    raised: '4',
    floating: '8',
    sticky: '20',
    overlay: '40',
  },
};