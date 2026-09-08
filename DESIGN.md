# DESIGN.md — Visual Design System

The spec for what is actually built. Round 6 replaced the design wholesale, so
this file was rewritten rather than amended — the earlier rounds' rationale
(warm cream, coral/sage, Fraunces, gradient hero visuals) described a design
that no longer exists anywhere in the codebase, and keeping it would have made
this document misleading rather than historical.

## 1. Direction

**Dark technical.** Near-black neutral base, one cool accent, precise
sans-serif, monospace reserved for metadata. The reference points are the
tools this audience uses daily — Linear, Vercel, the Anthropic console — not
portfolio templates.

### Why this replaced the previous direction

Rounds 4 and 5 pursued a "cozy" aesthetic: warm cream background, Fraunces
serif display face, coral accent. It was executed cleanly, but it was solving
the wrong problem. Gene is applying for AI/backend engineering roles at
technical companies. A warm serif-and-cream palette reads as craft blog or
lifestyle brand; the people screening these applications read it as *not an
engineer*. "Cozy" and "credible engineer" were pulling in opposite directions,
and cozy was winning.

The fix was not more polish on the cream theme. It was changing what the page
is trying to signal.

### What carries the credibility

Density and specificity, not decoration. The single biggest change in round 6
is not the palette — it is that the page now says real things. The previous
hero paired a 76px headline with a fake statistics card and a mock terminal
printing `npm run build`. Any engineer reading that recognizes it instantly as
someone with nothing concrete to show. It was replaced with the actual
engineering detail of the actual projects.

### Deliberately avoided

- Decorative visuals standing in for content — fake dashboards, mock terminals,
  device chrome, blurred gradient blobs.
- Oversized hero type. The headline caps at 52px and must fit two lines.
- Multi-hue palettes. One accent, full stop — a standing correction from an
  earlier round where a rotating three-hue system read as busy ("太花了").
- Hover states that lift, glow, or scale. Border and background shifts only.
- Emoji as UI icons.

## 2. Color

All tokens live in `src/theme/theme.ts`. Never hardcode a hex in a component.

| Token | Value | Role |
| --- | --- | --- |
| `bg` | `#0B0D10` | Page base. Slightly cool near-black; pure black makes elevation unreadable. |
| `band` | `#0E1114` | Section band tint, between `bg` and `surface`. |
| `surface` | `#12151A` | Cards and panels. |
| `surfaceHover` | `#171B22` | Hover state for elevated surfaces. |
| `border` | `#232830` | Hairline. Does the structural work a light theme gives to shadows. |
| `borderStrong` | `#333B47` | Hover/emphasis borders. |
| `text.1` | `#E6E9EF` | Primary. Cool off-white — #FFF vibrates at large sizes on near-black. |
| `text.2` | `#9AA3B0` | Body copy. ~8:1 on `bg`. |
| `text.3` | `#757E8C` | Metadata and labels. ~5:1 on `bg`, still AA for normal text. |
| `accent` | `#6C8EFF` | The only accent. ~6.5:1 on `bg`, so it is safe as small text. |
| `accentHover` | `#8FA9FF` | Hover for accent-colored text and fills. |
| `accentSoft` | `rgba(108,142,255,0.12)` | Soft fills. Alpha, so it composites over both `bg` and `surface`. |
| `accentBorder` | `rgba(108,142,255,0.32)` | Accent-tinted borders. |

**Accent budget.** Roughly one accent element per viewport. Currently: the
emphasized phrase in the hero headline, the `Lab` in the wordmark, links,
primary buttons, stack-group labels, and the active nav route. If a new
accent use is added, check whether an existing one should give way.

**Text on accent fills is `bg`, not white.** The accent is bright enough that
white-on-accent falls under 3:1.

## 3. Type

- **Sans — Inter.** Display and body both. Headings get their character from
  weight (600) and negative tracking (-0.02em to -0.032em), not from a second
  display face.
- **Mono — IBM Plex Mono.** Metadata only: section eyebrows, dates, tech tags,
  key/value rows, the hero stack strip. Never body copy.

| Role | Size | Weight | Tracking |
| --- | --- | --- | --- |
| Hero headline | `clamp(32px, 4.6vw, 52px)` | 600 | -0.032em |
| Page title (resume name) | `clamp(28px, 4vw, 38px)` | 600 | -0.03em |
| Section title | 24px | 600 | -0.02em |
| Card title | 20px | 600 | -0.02em |
| Body / lede | 15–17px | 400 | — |
| Small body | 13.5–14.5px | 400 | — |
| Mono eyebrow | 11.5px upper | 400 | 0.14em |

Measure is capped: headline `17ch`, lede `60ch`, prose `62ch`.

## 4. Layout

- Containers: `home` 1080px, `resume` 820px, `wide` 1240px.
- Sections are separated by a top hairline (`border`) plus `space[9]` padding,
  dropping to `space[8]` under 640px. No alternating background bands — the
  rhythm comes from content shape, not from color blocks.
- Featured project cards are a 1fr / 1.45fr split: identity on the left,
  substance on the right. Collapses to one column at 860px.
- Secondary projects are a 3-up grid, one column at 860px.
- Stack is 4 columns, 2 at 860px, 1 at 520px.

## 5. Components

- **`Button`** — `primary` (accent fill, `bg` text) and `secondary` (bordered,
  transparent). `$compact` for the header. 0.18s transitions on background,
  border and color only.
- **`IconButton`** — 32px square, bordered, for the header's GitHub/LinkedIn.
- **`Tag`** — mono chip in three variants: default (quiet, bordered) for tech
  stack, `accent` for category labels, `muted` (dashed) for states like
  "Private repo" that must read as information rather than a link.
- **`SectionEyebrow`** — uppercase mono label above each section title. Round 6
  dropped its old `// comment` prefix: a code-comment device on something that
  is not code is decoration.
- **`Reveal`** — scroll-triggered fade + translateY. See §7.

## 6. Content honesty

This site is a hiring document, so the design has rules that exist for
non-visual reasons.

- **No dead links.** Three of the five projects are private repos. They render
  a `muted` "Private repo" tag, never a link — the previous version linked to
  repo URLs that 404'd, including two that had never existed under those names.
- **Shipped work and learning are visually separate.** The stack grid lists
  what Gene has built with; `learning` sits below a rule under its own label.
  Merging them is how someone ends up claiming working knowledge in an
  interview they cannot back up.
- **Claims are checked against the code**, not written from memory. Project
  copy describes what is actually in each repo.

## 7. Motion

Scroll-triggered reveal (fade + 22px rise, staggered by 60–120ms) on major
blocks. Fully disabled under `prefers-reduced-motion: reduce`.

**`Reveal` starts its children at opacity 0, which makes the reveal mechanism
load-bearing for whether the page is visible at all.** This previously failed
in production: a tab opened in the background can lay out at zero size, so
nothing ever intersects, the observer never fires, and the visitor gets a blank
page until they happen to scroll. `useInView` now carries two independent
guards — reveal immediately if the element is already within the viewport at
mount, and reveal unconditionally after a 1.5s timeout regardless of what the
observer reported. Either alone prevents a blank page. Do not remove them.

## 8. Accessibility

- Body text meets AA against `bg`; `text.3` is the floor at ~5:1.
- `:focus-visible` gets an explicit 2px accent outline — the browser default is
  nearly invisible on a near-black base.
- Reduced motion disables both reveals and smooth scrolling.
