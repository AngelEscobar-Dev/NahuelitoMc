---
name: Nahuelito Design System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#3d494c'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#6d797d'
  outline-variant: '#bcc9cd'
  surface-tint: '#00687a'
  primary: '#00687a'
  on-primary: '#ffffff'
  primary-container: '#06b6d4'
  on-primary-container: '#00424f'
  inverse-primary: '#4cd7f6'
  secondary: '#006780'
  on-secondary: '#ffffff'
  secondary-container: '#76dcff'
  on-secondary-container: '#006077'
  tertiary: '#006877'
  on-tertiary: '#ffffff'
  tertiary-container: '#00b7cf'
  on-tertiary-container: '#00434d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#acedff'
  primary-fixed-dim: '#4cd7f6'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5c'
  secondary-fixed: '#b7eaff'
  secondary-fixed-dim: '#6cd3f7'
  on-secondary-fixed: '#001f28'
  on-secondary-fixed-variant: '#004e61'
  tertiary-fixed: '#a2eeff'
  tertiary-fixed-dim: '#2fd9f4'
  on-tertiary-fixed: '#001f25'
  on-tertiary-fixed-variant: '#004e5a'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 20px
---

## Brand & Style

The brand personality for this design system is energetic, modern, and community-focused, specifically tailored for a Minecraft gaming audience. It moves away from the typical "dark mode" gamer aesthetic to embrace a clean, high-performance "Light Mode" that feels fresh and professional.

The design style is **Modern Minimalism with Pixel Accents**. It utilizes a "Clean Gaming" aesthetic: high-quality whitespace, crisp typography, and subtle depth through soft shadows, contrasted by pixel-inspired display elements that pay homage to the game's core identity. The emotional response should be one of clarity, reliability, and excitement.

## Colors

The palette is centered around a vibrant **Cyan** primary axis, symbolizing the energy of a "charged" Minecraft environment. 

- **Primary (#06B6D4):** Used for main actions, active states, and brand highlights.
- **Surface (#F8FAFC):** A slightly off-white "Slate 50" base to reduce eye strain while maintaining a clean look.
- **Pure White (#FFFFFF):** Used for cards and elevated containers to create a distinct layer against the background.
- **Neutral (#0F172A):** A deep navy "Slate 900" for text to ensure high contrast and accessibility.

## Typography

This design system uses a pairing of **Space Grotesk** and **Inter**. While the user requested a pixel font, Space Grotesk is selected for headlines as it provides a technical, "geometric-pixel" feel that remains highly legible and modern across all screen sizes.

- **Headlines:** Space Grotesk offers a sharp, tech-forward look that mirrors the blocks and precision of the game.
- **Body & UI:** Inter is used for its exceptional legibility in data-heavy views (player stats, server logs, shop descriptions).
- **Scale:** On mobile devices, headline sizes scale down significantly to ensure the content remains "above the fold" and avoids awkward line breaks.

## Layout & Spacing

The layout follows a **Mobile-First, Fluid Grid** philosophy. 

- **Grid:** A 12-column system is used for desktop, collapsing to 4 columns on mobile.
- **Spacing Rhythm:** Based on a 4px baseline, but utilizing 24px (md) as the standard padding for cards and containers to create a "breathable" feel.
- **Responsive Behavior:** 
    - **Mobile (<768px):** 16px side margins. Cards stack vertically.
    - **Tablet (768px - 1024px):** 24px side margins. 2-column grid for server cards.
    - **Desktop (>1024px):** Max container width of 1200px. Standard 3 or 4 column grid.

## Elevation & Depth

To maintain the "Modern & Clean" style, depth is achieved through **Ambient Shadows** and **Tonal Layering** rather than heavy borders.

- **Base Layer:** The `#F8FAFC` background.
- **Level 1 (Cards):** White background with a soft, diffused shadow: `0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)`.
- **Level 2 (Hover States/Modals):** A more pronounced shadow to simulate physical lift: `0 10px 15px -3px rgb(0 0 0 / 0.1)`.
- **Interactivity:** Elements should transition smoothly (200ms ease-out) between elevation levels when hovered.

## Shapes

The shape language is **Rounded (Level 2)**. 

- **Standard Components:** Buttons and inputs use a 0.5rem (8px) radius.
- **Containers:** Large cards and section containers use a 1rem (16px) radius to emphasize a soft, friendly appearance.
- **Accents:** Occasional 0px (sharp) accents can be used for small decorative "pixel" icons or badges to maintain the Minecraft connection without compromising the modern UI feel.

## Components

### Buttons
- **Primary:** Solid Cyan (`#06B6D4`) background with white text. 8px corner radius. Subtle "lift" shadow.
- **Secondary:** Transparent background with a 2px Cyan border.
- **Ghost:** No background or border; Cyan text. Used for less important actions.

### Cards (Server Info / Shop Items)
- **Styling:** Pure white background, 16px corner radius, soft ambient shadow.
- **Structure:** Content should have 24px internal padding. Images (like world screenshots) should be flush with the top and sides, inheriting the 16px top corner radius.

### Input Fields
- **Styling:** Light gray background (`#F1F5F9`) with a 1px border that turns Cyan on focus.
- **Feedback:** Success and error states should use green and red tints respectively, but keep the 8px rounded corners.

### Status Chips
- **Online State:** Small pill-shaped badges with a soft green background and dark green text.
- **Player Count:** A "Cyan-on-Cyan" tonal chip used to highlight server population.

### Progress Bars (XP / Goal Bars)
- **Styling:** Height of 12px, fully rounded (pill), using a light cyan track and a vibrant primary cyan fill.