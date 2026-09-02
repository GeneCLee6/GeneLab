# DESIGN.md — Visual Design System

This is the written spec behind the design canvas ("Home" and "Resume" artboards)
drafted for GeneLab. It exists so implementation work stays consistent with the
approved direction without needing to re-open the canvas every time.

## 1. Direction

**Technical minimalism.** Dark, code-editor-adjacent UI with one accent color, a
geometric display face, and monospace used deliberately (nav labels, tags,
section markers styled as code comments — `// experience`). The goal is "clean,
modern, credible software engineer" — not a marketing site, not a resume
template. Avoid: gradient-blob hero backgrounds, rounded cards with a
left-border accent stripe, emoji as UI icons, stock "Inter everywhere" typography.

## 2. Color palette

| Token | Hex | Usage |
|---|---|---|
| `color.ink.950` | `#0B0D12` | Page background |
| `color.ink.900` | `#12151C` | Card / surface background |
| `color.ink.800` | `#171B24` | Elevated surface (rarely needed) |
| `color.border` | `#262B36` | Card borders, dividers, input borders |
| `color.border.soft` | `#1B1F28` | Faint background grid lines only |
| `color.text.1` | `#EDEFF3` | Primary text, headings |
| `color.text.2` | `#9AA3B2` | Secondary text, body copy on dark surfaces |
| `color.text.3` | `#5B6472` | Tertiary text, timestamps, placeholder labels |
| `color.accent` | `#7C6FFF` | Primary interactive color — buttons, focus rings |
| `color.accent.2` | `#9C90FF` | Links, hover states, lighter accent text |
| `color.accent.amber` | `#FFB454` | Sparing secondary accent — category tags only |

Notes:
- `text.1` on `ink.950` is ~15:1 contrast (comfortably AAA).
- `text.2` on `ink.950` / `ink.900` is roughly 7–8:1 (AAA for normal text).
- Primary buttons use `accent` background with `ink.950` text (not white) —
  the mid-light purple reads better against near-black text than white text.
- `accent.amber` is used in exactly one place (project category tags) —
  it is not a second brand color, just a scannability aid.
- There is no light mode in v1. If one is added later, keep the same token
  *roles* (background / surface / border / text-1/2/3 / accent) and only
  change the concrete hex values, same pattern CoverCompass uses for its
  dark mode.

## 3. Typography

Three Google Fonts, one job each:

| Font | Role |
|---|---|
| **Space Grotesk** (500, 700) | Display — all headings, logo wordmark |
| **IBM Plex Sans** (400, 500, 600) | Body copy, buttons, nav (non-mono items) |
| **IBM Plex Mono** (400, 500) | Section eyebrows (`// projects`), tags, code-styled UI (the contact block), nav links |

```css
font-family: 'Space Grotesk', system-ui, sans-serif;   /* display */
font-family: 'IBM Plex Sans', system-ui, sans-serif;   /* body */
font-family: 'IBM Plex Mono', ui-monospace, 'SFMono-Regular', monospace; /* mono */
```

### Type scale (base = 16px)

| Token | Size | Weight | Font | Usage |
|---|---|---|---|---|
| `display` | 60px / 1.1 | 700 | Space Grotesk | Hero headline |
| `h1` | 42px / 1.15 | 700 | Space Grotesk | Page title (Resume name) |
| `h2` | 34px / 1.2 | 700 | Space Grotesk | Section heading ("Selected work") |
| `h3` | 20–22px / 1.3 | 700 | Space Grotesk | Card / entry titles |
| `body-lg` | 19px / 1.65 | 400 | IBM Plex Sans | Hero sub-paragraph |
| `body` | 14.5–15.5px / 1.6 | 400 | IBM Plex Sans | General copy |
| `mono-label` | 11–13px / 1.4, uppercase, 0.04–0.06em tracking | 400–500 | IBM Plex Mono | Eyebrows, nav, tags |

## 4. Spacing scale

4px base unit, same convention as the sibling projects:

`space.1=4px, space.2=8px, space.3=12px, space.4=16px, space.5=24px, space.6=32px, space.7=48px, space.8=64px, space.9=96px, space.10=128px`

- **Content max-width**: 1120px for the home page, 880px for the resume
  (narrower measure — it's read top-to-bottom like a document, not scanned
  like a landing page).
- **Side padding**: 64px desktop, down to 20–24px mobile.
- **Section vertical rhythm**: ~100–130px top/bottom padding between major
  sections on the home page.

## 5. Component patterns

### Header / nav
- Sticky, `rgba(11,13,18,0.86)` background + `backdrop-filter: blur(8px)`,
  1px `color.border` bottom edge.
- Logo wordmark: **`Gene` in `text.1`, `Lab` in `accent.2`, both Space
  Grotesk 700, capitalized** ("GeneLab" as a wordmark, not the lowercase
  `genelab` package-name styling) — capitalization reads as a credible
  brand name rather than a raw npm-package label. No cursor or blink
  animation next to it — an earlier draft had a blinking block cursor here;
  it read as a gimmick rather than a "technical" flourish, so it was cut.
  If a static technical touch is wanted later, a small bracket glyph is the
  safer direction — not motion.
- Nav links: IBM Plex Mono, uppercase, letter-spacing 0.04em, `text.2` →
  `text.1` on hover/active, no underline. Hidden below ~640px in favor of
  the trailing link group (below), which stays visible at every width.
- **Trailing link group** (always visible, right-aligned): a GitHub icon
  link and a LinkedIn icon link, each a 34×34 bordered square with an
  inline stroke-style glyph (`</>`-bracket paths for GitHub, not the octocat
  mark; a simple "in" glyph for LinkedIn) and no text label at this size —
  plus a compact "Resume" secondary button (§ Buttons, `$compact`) linking
  to `/resume.pdf`. This trio exists so a first-time visitor can find both
  profile links and the résumé download from any page without hunting,
  per Gene's explicit ask. LinkedIn renders in its unset/placeholder state
  (dashed border, `text.3`, non-interactive) until a real URL is supplied —
  see § Placeholder convention. All three links are sourced from
  `src/data/social.ts`, not hardcoded per-component.

### Buttons
- **Primary**: `accent` background, `ink.950` text, weight 600, `border-radius: 6px`,
  `14px 24px` padding, trailing arrow icon on action buttons.
- **Secondary**: transparent background, `1px solid color.border`, `text.1` text.
  Same radius/padding as primary.
- No all-caps button text (buttons use `body`-weight sentence case, only nav
  and tags use mono/uppercase).
- **Compact variant**: `8px 14px` padding, 12.5px font — used for the
  header's Resume button so it sits comfortably next to the icon link
  group without dominating the nav bar.

### Cards (project cards)
- `ink.900` background, `1px solid color.border`, `border-radius: 10px`,
  `28px` padding — **no left-border accent stripe** (deliberately avoided,
  see §1).
- Structure top-to-bottom: mono category tag (`accent.amber`, uppercase) →
  `h3` title → body description → wrapped tech-stack tag row → divider
  (`1px solid border`) → mono "View repository" link with arrow icon.
- Tags (tech stack): mono, 11px, `1px solid border`, `4px` radius, `text.3`.

### Section labels
- Every major section opens with a mono "eyebrow" styled as a code comment:
  `// projects`, `// contact`, `// experience`, `// skills`, `// education`.
  This is the recurring structural device that ties the whole site together —
  reuse it for any new section rather than inventing a different heading style.

### Contact block
- Rendered as a mock terminal panel: `ink.900` surface, mono type,
  `$ contact --info` prompt line in `text.3`, then `key   value` rows —
  `email`, `github`, `linkedin`, `resume`. Placeholder values render in
  `text.3` (unset) vs. `accent.2`/link color (set) so it's visually obvious
  what still needs filling in. `github` and `resume` are set (real handle,
  wired download link); `email` and `linkedin` stay unset until Gene
  supplies them. This is the second of the two places the GitHub/LinkedIn/
  Resume links repeat (the first being the header) — both sourced from the
  same `src/data/social.ts`.

### Background texture
- Subtle only: a faint 48px×48px grid (`border.soft`, 1px lines) plus one
  low-opacity (~0.08–0.10) radial glow in `accent` near a top corner. No
  large gradient washes, no blur blobs.

## 6. Placeholder convention

Any fact that isn't independently verifiable from the sibling repos (name,
title, work history, education, contact details) is written as a bracketed
placeholder — `[Add role]`, `[Add company name]`, `[Add contact email]` — and
styled in `text.3` (or the placeholder tag's dashed border) so it visually
reads as "not filled in yet" rather than as real content. The **Skills**
section is the one exception: those tags are grounded in the tech actually
used across CoverCompass / MelCoverCompare / WearCast, not invented.
