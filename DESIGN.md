# Design Brief: Travel Planning & Virtual Guide

## Direction
Editorial travel app inspired by luxury lifestyle magazines. Bold imagery, warm approachable tones, trust-driven interactions. Breadth of destinations paired with clarity of planning.

## Palette
| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| Primary | `0.62 0.12 31` (Terracotta) | `0.72 0.14 36` | CTAs, highlights, accents—travel warmth |
| Secondary | `0.5 0.15 243` (Slate Blue) | `0.62 0.18 250` | Trust, navigation, secondary actions |
| Muted | `0.92 0 0` (Off-white) | `0.25 0 0` | Backgrounds, disabled states |
| Destructive | `0.55 0.22 25` | `0.65 0.19 22` | Errors, cancellations |

## Typography
| Role | Font | Usage |
|------|------|-------|
| Display | Fraunces (serif, 700–900) | Headlines, hero copy, section titles |
| Body | DM Sans (sans, 400–500) | Body text, labels, form inputs |
| Mono | Geist Mono | Code, timestamps, structured data |

## Elevation & Depth
| Zone | Treatment | Contrast |
|------|-----------|----------|
| Header | `bg-card` with `border-b` | Visible separation from content |
| Hero | Full-width image + gradient overlay (135deg, 0.3→0.15 opacity) | Inverted overlay for text readability |
| Cards | `bg-card` + `shadow-sm` (subtle) or `shadow-md` (elevated) | Depth through layers, not opacity |
| Footer | `bg-muted/20` with `border-t` | Receded, intentional separation |

## Structural Zones
1. **Navigation**: Fixed header with logo, nav links (Home, Destinations, Plan Trip, Login), minimal brand statement
2. **Hero**: Full-width travel image with gradient overlay + large centered search bar
3. **Catalog**: Card grid (3 cols desktop, 1 col mobile) with image, destination name, rating, budget tag, activity badges
4. **Forms**: Simple, single-column—no multi-step wizards. Clear labels, ample whitespace
5. **Dashboard**: Welcome section (personalized greeting) + trip cards (horizontal scroll or grid)
6. **Itinerary**: Day-wise accordion or tab structure, activity cards within each day

## Spacing & Rhythm
- Base unit: 4px grid (0.25rem scale)
- Section padding: 2rem (mobile), 3rem (desktop)
- Card gap: 1rem
- Border radius: 0.625rem (cards), 0.375rem (inputs/small), full (badges)
- Uniform 12px–16px gutters between elements

## Component Patterns
- **Buttons**: Primary (terracotta), Secondary (slate blue), Ghost (text-only), Disabled (muted)
- **Cards**: Image + text overlay or beside content. Consistent padding (1rem), subtle shadow
- **Forms**: Stacked labels + inputs, single submit button, clear validation states
- **Navigation**: Horizontal menu, active state with underline + primary color
- **Badges**: Small, rounded-full, background-muted with foreground-muted-dark

## Motion & Interaction
- Smooth transitions: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` on hover/focus
- Hover states: +4% lightness on text-heavy elements, +8% on buttons
- Micro-interactions: Subtle scale (1.02x) on card hover, no bounce animations

## Constraints & Anti-Patterns
- NO rainbow palettes; stick to terracotta + slate blue + greys
- NO full-page gradients; use layered depth instead
- NO overly rounded corners on large elements (card-radius stays 0.625rem)
- NO scattered animations; choreograph motion purposefully
- NO multi-step wizards; split complex flows into separate pages

## Signature Detail
Gradient text overlay on hero section (terracotta → slate blue) for destination names, creating a distinctive blend of warmth + trust in a single moment.
