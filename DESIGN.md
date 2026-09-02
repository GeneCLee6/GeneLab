# DESIGN.md — Visual Design System

This is the written spec behind the design canvas ("Home" and "Resume" artboards)
drafted for GeneLab. It exists so implementation work stays consistent with the
approved direction without needing to re-open the canvas every time.

## 1. Direction

**Technical minimalism — now bolder (round 3).** Still a dark, code-editor-
adjacent UI with a geometric display face and monospace used deliberately
(nav labels, tags, section markers styled as code comments — `// experience`).
The goal is still "clean, modern, credible software engineer," not a generic
marketing template — but per Gene's direct round-3 feedback ("too plain/
monotonous," hover states "not well done," wants it "impressive" with more
color: purple, peach, blue) two of the original constraints are explicitly
**superseded**:

- The old "one accent + sparing amber" palette is now a genuine three-hue
  purple/blue/peach system, and gradients between those hues are allowed
  (previously avoided as an "AI slop" gradient-blob trope — see §2 for why
  this reads as controlled, not blob-y).
- "Avoid gradient-blob hero backgrounds" is relaxed to "avoid *uncontrolled*
  gradient washes" — the hero now carries deliberate, contained gradient use
  (headline text-fill, button fills, small blurred glow shapes anchored to a
  hero visual), not a full-bleed gradient wash behind everything.

Still avoided, unchanged from earlier rounds: rounded cards with a
*left*-border accent stripe (the new per-card accent lives on a *top* bar
instead — see §5 "Cards"), emoji as UI icons, stock "Inter everywhere"
typography, fake OS/device chrome (no fake status bars).

**Reference, and what we deliberately did not copy:** Gene pointed at
[cracklingmedia.com/our-services/website-design](https://www.cracklingmedia.com/our-services/website-design)
for tone — a dark-navy hero with a huge all-caps display headline, white
pill-shaped chips, and a layered laptop+phone mockup. We translated the
*principles* (oversized headline treatment, saturated color, pill chips,
layered visual weight on one side of the hero) into GeneLab's own vocabulary
rather than recreating that site's specific look: our headline stays sentence
case with one gradient-filled phrase (not all-caps), our chips are tinted/
translucent per-hue rather than solid white, and the "device mockup" is an
abstract layered terminal-window + stat-card motif (fits the technical-
minimalism brand) rather than a literal phone/laptop illustration.

## 2. Color palette

**Base decision: deepened into a rich purple-navy, not near-black, and not
flipped to light mode.** Staying dark keeps continuity with the two prior
rounds (a full light-mode flip would be a much bigger swing than what Gene
asked for), but the old near-black `#0B0D12` read as flat under a
multi-hue accent system — a purple-tinted dark base lets the palette feel
like one cohesive family instead of "grayscale UI + colorful stickers."

| Token | Hex | Usage |
|---|---|---|
| `color.ink.950` | `#150F2E` | Page background — deep purple-navy |
| `color.ink.900` | `#1E1740` | Card / surface background, full-bleed section band tint |
| `color.ink.800` | `#281F52` | Elevated surface — project cards now sit here (see §5) |
| `color.border` | `#3A2F66` | Card borders, dividers, input borders |
| `color.border.soft` | `#241C48` | Faint background grid lines only |
| `color.text.1` | `#F5F2FC` | Primary text, headings |
| `color.text.2` | `#B6ADD1` | Secondary text, body copy on dark surfaces |
| `color.text.3` | `#766B9B` | Tertiary text, timestamps, placeholder labels |
| `color.accent` (purple) | `#8B6EFF` | Primary interactive color — buttons, focus rings, CoverCompass card hue |
| `color.accent2` | `#B79CFF` | Links, hover states, lighter accent text |
| `color.blue` | `#4F8CFF` | Second accent hue — MelCoverCompare card, chip, glow |
| `color.peach` | `#FF9D72` | Third accent hue — WearCast card, chip, glow |
| `color.gradient` | `linear-gradient(135deg, #8B6EFF 0%, #4F8CFF 55%, #FF9D72 100%)` | Primary buttons, gradient headline word, logo "Lab", nav-link hover underline, contact-panel border |

Notes:
- `text.1` on `ink.950` and `text.2` on `ink.950`/`ink.900` both stay
  comfortably AA/AAA for their use (primary and secondary copy) — checked by
  eye against the old ratios, which were similar orders of magnitude; nothing
  here is intentionally lower-contrast than round 2.
- Primary buttons use the `gradient` background with `ink.950` text (not
  white) — same reasoning as before: dark text reads better against the
  mid-light purple/peach end of the gradient than white does.
- **`accentAmber` is retired.** It was "one sparing secondary accent for
  category tags." Category tags now take their color from each project's
  `hue` (`purple` | `blue` | `peach`, `src/data/projects.ts`) instead of one
  fixed color — this is the mechanism behind "cards don't look identical"
  (§5 "Cards" / "Section variation").
- Gradients are used in exactly five deliberate places (buttons, the hero's
  one gradient-text phrase, the logo "Lab", nav-underline sweep, the contact
  panel's hairline border) — not as a background wash. That restraint is
  what keeps this "bolder," not "busier."
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
| `display` | `clamp(42px, 5vw, 76px)` / 1.06 | 700 | Space Grotesk | Hero headline — **round 3: bumped from a fixed 60px**, per Gene's "too plain/safe" feedback. Fluid via `clamp()` instead of a single breakpoint swap so it scales smoothly instead of jumping. |
| `h1` | 42px / 1.15 | 700 | Space Grotesk | Page title (Resume name) |
| `h2` | 34px / 1.2 | 700 | Space Grotesk | Section heading ("Selected work") |
| `h3` | 20–22px / 1.3 | 700 | Space Grotesk | Card / entry titles |
| `body-lg` | 19px / 1.65 | 400 | IBM Plex Sans | Hero sub-paragraph |
| `body` | 14.5–15.5px / 1.6 | 400 | IBM Plex Sans | General copy |
| `mono-label` | 11–13px / 1.4, uppercase, 0.04–0.06em tracking | 400–500 | IBM Plex Mono | Eyebrows, nav, tags |
| `chip-label` | 12.5px, 0.02em tracking | 400 | IBM Plex Mono | Hero pill chips (new, see § Hero) |

The headline also carries one gradient-filled phrase (`color.gradient`,
`-webkit-background-clip: text`) rather than being uniformly `text.1` — see
§ Hero below. That's the "oversized display headline" fix for "monotonous":
size *and* a color break inside the headline itself, not just more padding
around an unchanged headline (padding-only was already tried and rejected in
round 2).

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
- Sticky, `rgba(21,15,46,0.86)` background (updated to the new `ink.950`
  hue) + `backdrop-filter: blur(8px)`, 1px `color.border` bottom edge.
- Logo wordmark: **`Gene` in `text.1`, `Lab` filled with `color.gradient`
  (was flat `accent.2`), both Space Grotesk 700, capitalized** ("GeneLab" as
  a wordmark) — capitalization decision from round 2 unchanged, only the
  "Lab" fill updated to match the new multi-hue system. No cursor or blink
  animation next to it — that decision from round 2 also stands; a hover
  `filter: brightness(1.15)` is the wordmark's only interactive state.
- Nav links: IBM Plex Mono, uppercase, letter-spacing 0.04em, `text.2` →
  `text.1` on hover/active, plus (**round 3**) a `color.gradient` underline
  that sweeps in from the left on hover/active via `right: 100% → 0`
  transition — replaces the old color-only hover, which read as too subtle
  per Gene's "hover states aren't well done" feedback. Hidden below ~640px
  in favor of the trailing link group (below), which stays visible at every
  width.
- **Trailing link group** (always visible, right-aligned): a GitHub icon
  link and a LinkedIn icon link, each a 34×34 bordered square with an
  inline stroke-style glyph (`</>`-bracket paths for GitHub, not the octocat
  mark; a simple "in" glyph for LinkedIn) and no text label at this size —
  plus a compact "Resume" secondary button (§ Buttons, `$compact`) linking
  to `/resume.pdf`. **Round 3 hover**: the icon squares fill with
  `color.gradient` (border disappears, icon flips to `ink.950`), lift
  `translateY(-3px)`, and gain a purple glow shadow — a considered state
  change, not a border-color tweak. LinkedIn renders in its unset/
  placeholder state (dashed border, `text.3`, non-interactive, no hover)
  until a real URL is supplied — see § Placeholder convention. All three
  links are sourced from `src/data/social.ts`, not hardcoded per-component.

### Buttons
- **Primary**: `color.gradient` background (was flat `accent`), `ink.950`
  text, weight 600, `border-radius: 8px`, `14px 24px` padding, trailing
  arrow icon on action buttons.
- **Secondary**: transparent background, `1px solid color.border`, `text.1`
  text. Same radius/padding as primary.
- **Round 3 hover** (both variants): `translateY(-3px)` lift + a colored
  glow `box-shadow` (purple/peach-tinted for primary, purple-tinted for
  secondary) on a `cubic-bezier(.2,.8,.2,1)` transition, ~300ms. Primary's
  trailing arrow icon also nudges right (`translateX(4px)`) on hover. This
  replaces the old `filter: brightness(1.08)`-only primary hover and the
  border-color-only secondary hover, both called out as "not good enough."
- No all-caps button text (buttons use `body`-weight sentence case, only nav
  and tags use mono/uppercase).
- **Compact variant**: `8px 14px` padding, 12.5px font — used for the
  header's Resume button so it sits comfortably next to the icon link
  group without dominating the nav bar.

### Chips (new, round 3 — hero only)
- Fully-rounded pill (`border-radius: 999px`), translucent hue-tinted fill
  (`rgba(hue, 0.14)`) + matching 1px border, mono 12.5px label. Three
  variants — `purple` / `blue` / `peach` — rotate across the hero's keyword
  row (React / TypeScript / Full-stack / Independent builder). This is a
  deliberately different shape from `Tag` (bordered, square-radius, used on
  cards) — the closest GeneLab equivalent to the reference site's white pill
  buttons, translated into the dark palette. Hover: fill opacity increases,
  a hue-tinted glow shadow appears, `translateY(-2px) scale(1.03)`.

### Hero
- Two-column layout ≥900px (copy left, a decorative visual right), single
  column with the visual hidden below 900px — this is the structural fix
  for "monotonous": the hero is no longer just a taller version of a
  centered text block (that was already tried in round 2 and rejected).
- The oversized headline (§3) carries one `color.gradient`-filled phrase
  (`practical tools`) via `background-clip: text` — the one place gradient
  renders as text fill rather than a background/shadow.
- The hero visual is an abstract "layered device" composition standing in
  for real product screenshots: three blurred, hue-tinted circular glows
  (`filter: blur(60px)`, purple/blue/peach) behind two overlapping rotated
  cards — a small stat-bar card and a mono "terminal" card showing generic
  build/deploy flavor lines (`$ npm run build` / `✓ deployed`). This is the
  one deliberate decorative/interactive touch beyond hover states: on
  hover of the visual, the glows brighten/scale and both cards straighten
  and lift slightly. Kept intentionally simple — no fake device/OS chrome.

### Cards (project cards)
- `ink.800` background (was `ink.900` — bumped one step lighter so cards
  read as distinct from the `ink.900` band they now sit inside; see
  "Section variation" below), `1px solid color.border`, `border-radius:
  12px`, `28px` padding, plus (**round 3**) a 4px **top** accent bar in the
  card's `hue` — still **no left-border accent stripe** (that constraint
  from round 1 stands; the accent moved to the top edge, not the side).
- **Each card now carries a `hue`** (`purple` | `blue` | `peach`, rotating
  CoverCompass → MelCoverCompare → WearCast in `src/data/projects.ts`) that
  colors its top bar, its category tag, and its hover border/glow. This
  replaces the old "every category tag is amber" rule and is the concrete
  fix for the three cards reading as visually identical.
- Structure top-to-bottom: top accent bar → mono category tag (hue-colored,
  uppercase) → `h3` title → body description → wrapped tech-stack tag row →
  divider (`1px solid border`) → mono "View repository" link with arrow icon.
- Tags (tech stack): mono, 11px, `1px solid border`, `4px` radius, `text.3`.
  **Round 3 hover**: brighten to `text.1`, border to `accent2`, small
  `translateY(-1px)` lift.
- **Round 3 card hover**: `translateY(-8px)` lift, border color shifts to
  the card's `hue`, and a matching hue-tinted glow `box-shadow` appears
  (alongside a neutral drop shadow for depth) — `300–350ms`
  `cubic-bezier(.2,.8,.2,1)`. The "View repository" link's arrow also nudges
  right and the link brightens to `text.1` on its own hover.

### Section labels
- Every major section opens with a mono "eyebrow" styled as a code comment:
  `// projects`, `// contact`, `// experience`, `// skills`, `// education`.
  This is the recurring structural device that ties the whole site together —
  reuse it for any new section rather than inventing a different heading style.

### Section variation (round 3 — the other half of "fix monotonous")
- Each major Home section is now its own full-bleed background band instead
  of every section sharing one flat page background inside a single
  max-width wrapper: **Hero** sits on base `ink.950` with the page's corner
  glows; **Projects** sits on a full-width `ink.900` band (bordered top/
  bottom in `border.soft`) so the section reads as a distinct zone, which is
  also why cards themselves moved to `ink.800` (one step lighter, to stay
  visible against their new band); **Contact** sits on its own `ink.950`
  band with a second, different two-corner gradient wash (blue top-right,
  peach bottom-left) so it doesn't repeat Hero's corner glow verbatim.
  Implementation: `Home.tsx`'s `Main` is full-width; a `Container`
  (`max-width: 1120px`, centered) wraps each section's *content*, not the
  section's background — see `ARCHITECTURE.md` if extending this pattern.

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
- **Round 3**: the panel now has a 1px `color.gradient` hairline border
  (via the padding-box/mask-xor technique, ~50% opacity) instead of a flat
  `border` color — the one place the gradient renders as a frame rather
  than a fill. Set contact links (`github`, `resume`) get a hover color
  shift to `accent` plus a soft purple `text-shadow` glow.

### Background texture
- A faint 48px×48px grid (`border.soft`, 1px lines) plus (**round 3**, was
  one) **two** low-opacity (~0.10–0.16) radial glows near the top corners —
  purple top-left, blue top-right — on the page background. Still no large
  gradient wash behind content; the glows stay corner-anchored and low-
  opacity, consistent with §1's "controlled, not blob-y" note.

## 6. Placeholder convention

Any fact that isn't independently verifiable from the sibling repos (name,
title, work history, education, contact details) is written as a bracketed
placeholder — `[Add role]`, `[Add company name]`, `[Add contact email]` — and
styled in `text.3` (or the placeholder tag's dashed border) so it visually
reads as "not filled in yet" rather than as real content. The **Skills**
section is the one exception: those tags are grounded in the tech actually
used across CoverCompass / MelCoverCompare / WearCast, not invented.
