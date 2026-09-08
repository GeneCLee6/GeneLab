# DESIGN.md — Visual Design System

The spec for what is actually built. Round 6 replaced the design wholesale, so
this file was rewritten rather than amended — the earlier rounds' rationale
(warm cream, coral/sage, Fraunces, gradient hero visuals) described a design
that no longer exists anywhere in the codebase, and keeping it would have made
this document misleading rather than historical.

## 1. Direction

**Dark technical.** Cool dark neutral base, one cool accent, precise
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
| `bg` | `#101318` | Page base. Cool dark grey. |
| `band` | `#14181E` | Section band tint (used by the footer). |
| `surface` | `#191D24` | Cards and panels. |
| `surfaceHover` | `#1F242C` | Hover state for elevated surfaces. |
| `border` | `#2B313A` | Hairline. Does the structural work a light theme gives to shadows. |
| `borderStrong` | `#3D4552` | Hover/emphasis borders. |
| `text.1` | `#F2F4F7` | Primary. Cool off-white — #FFF vibrates at large sizes. |
| `text.2` | `#BAC1CB` | Body copy. ~10:1 on `bg`. |
| `text.3` | `#929AA6` | Metadata and labels. ~6.4:1 on `bg`. |
| `accent` | `#6C8EFF` | The only accent. ~6.5:1 on `bg`, so it is safe as small text. |
| `accentHover` | `#8FA9FF` | Hover for accent-colored text and fills. |
| `accentSoft` | `rgba(108,142,255,0.12)` | Soft fills. Alpha, so it composites over both `bg` and `surface`. |
| `accentBorder` | `rgba(108,142,255,0.32)` | Accent-tinted borders. |

**These values were raised once already.** The first pass sat at `#0B0D10`
with body text at `#9AA3B0`, which Gene read as too dark overall and too dim
to read comfortably. Lifting the base is what made the brighter text tones
possible — raising text against a near-black base alone would have produced
glare rather than legibility. If this ever needs adjusting again, move the
base and the text together.

**Accent budget.** `accent` (blue) is reserved for *interactive* meaning:
links, primary buttons, the emphasized phrase in the hero headline, the `Lab`
in the wordmark, project category labels, and the active nav route. If a new
accent use is added, check whether an existing one should give way.

### Category colours

| Token | Value | Domain |
| --- | --- | --- |
| `category.ai` | `#B9A0FF` | AI / LLM |
| `category.backend` | `#5FD3A6` | Backend |
| `category.frontend` | `#E8B36B` | Frontend |
| `category.cloud` | `#EE8FA6` | Cloud & tooling |

Each has a matching 10%-alpha `bg` and 28%-alpha `border`. All four clear 8:1
on `bg`, so they are safe at tag sizes.

**This is a taxonomy, not decoration, and that distinction is the whole
point.** `src/data/tech.ts` maps every technology to a domain, and a given
technology renders in its domain's colour *everywhere it appears* — the hero
strip, the stack grid, project cards, and every resume role. A reader can tell
at a glance whether a tag is AI, backend, frontend or infrastructure without
reading it.

This is what makes it different from the earlier round Gene rejected as
"太花了": that one gave each project card a rotating identity colour, so the
colour meant nothing and only added noise. Colour here carries information.
**If you add a technology anywhere, register it in `tech.ts`** — unregistered
names silently fall back to the tooling colour and quietly break the taxonomy.

None of the four is blue, deliberately: `accent` owns blue so interactive
elements stay unambiguous against the tags.

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
| Mono eyebrow | 12px upper | 400 | 0.14em |
| Mono metadata (tags, dates, stack) | 12.5–13.5px | 400 | — |

**The resume summary is justified** (`text-align: justify` with
`hyphens: auto`). Justification without hyphenation opens white "rivers"
between words, which looks worse than the ragged edge it replaces — the two
settings go together or neither does.

**Measure is capped and consistent**: headline `17ch`, lede/prose/card copy
`62ch`, resume body `68ch`. Every paragraph also sets `text-wrap: pretty`.
Without a shared measure, paragraphs in adjacent blocks wrapped at different
widths and the page read as unaligned even though everything shared a left
edge — if you add a new text block, give it one of these measures rather than
letting it run to its container.

**Mono metadata sits at 12.5px and up, not 11px.** The first pass ran mono
labels and the stack list a step smaller; at that size on a dark background
they read as unfinished rather than quiet. Mono has a smaller apparent
x-height than Inter at the same nominal size, so it needs roughly one step
more than the equivalent sans text, not one step less.

## 4. Layout

- Containers: `home` 1080px, `resume` 820px, `wide` 1240px.
- Sections are separated by a top hairline (`border`) plus `space[9]` padding,
  dropping to `space[8]` under 640px. No alternating background bands — the
  rhythm comes from content shape, not from color blocks.
- Featured project cards are a 1fr / 1.45fr split: identity on the left,
  substance on the right. Collapses to one column at 860px.
- Secondary projects use `repeat(auto-fit, minmax(260px, 1fr))`, one column
  under 620px. `auto-fit` rather than a fixed column count so the row stays
  balanced as projects move between the featured and secondary lists —
  promoting WearCast left two cards stranded in a three-column track.
- **Cards in a grid must be equal height regardless of copy length.** The grid
  children are `Reveal` wrappers, not the cards, so the wrapper needs
  `height: 100%` *and* the card does; stretching the wrapper alone leaves the
  card sized to its own content. The tech-stack line uses `margin-top: auto`
  so it sits on the card floor and lines up across the row.
- Stack is 4 columns, 2 at 860px, 1 at 520px.

## 5. Components

- **`Button`** — `primary` (accent fill, `bg` text) and `secondary` (bordered,
  transparent). `$compact` for the header. 0.18s transitions on background,
  border and color only.
- **`IconButton`** — 32px square, bordered, for the header's GitHub/LinkedIn.
- **`Tag`** — mono chip in three variants: default (filled, dimmer than body)
  for tech stack, `accent` for category labels, `muted` (dashed, no fill) for
  states like "In development" that are information rather than something to
  click. The default variant deliberately sits at `text.3`, **not** the body
  tone: when it matched body copy, a row of tech chips read as another line of
  prose and the section looked flat. Metadata should be quieter than the text
  it annotates, and the fill is what makes each chip read as a discrete object.
- **`SectionEyebrow`** — uppercase mono label above each section title. Round 6
  dropped its old `// comment` prefix: a code-comment device on something that
  is not code is decoration.
- **`Reveal`** — scroll-triggered fade + translateY. See §7.
- **`icons.tsx`** — shared glyphs. The download arrow is the important one:
  **every control that hands over a file carries it**, so a resume button is
  never mistaken for a nav link. It appears in exactly three places — the
  header button, the resume page button, and the footer CTA. A fourth copy in
  the footer link column was removed; past three, the repetition stops reading
  as helpful and starts reading as clutter.
  **Icon side follows meaning**: a glyph that *labels* the control leads (the
  mail icon on "Get in touch"); a glyph that describes *what the control does
  to you* trails (the download arrow, the link arrow). Download icons sit on
  the right in all three places.
- **`LogoMark`** — the site's mark: two nodes converging into a third. A graph,
  which reads generically as "systems" and specifically as the agent-graph
  work the site leads with. Drawn to stay legible at 16px, so it is three
  filled circles and two straight edges and nothing else — no thin strokes, no
  interior detail, no lettering. `public/favicon.svg` is the same artwork with
  the colors baked in; **change the two together or the tab icon drifts from
  the header.**
- **`Footer`** — a closing CTA (positioning line + "Get in touch" / "Download
  resume") over a three-column footer and a bottom bar. The CTA exists because
  the page previously ended on a bare copyright line: a visitor who read to the
  bottom and wanted to make contact had to scroll back up to find an address.

## 6. Content honesty

This site is a hiring document, so the design has rules that exist for
non-visual reasons.

- **No repo links at all.** Gene's call: a GitHub URL is not what he wants a
  recruiter clicking, and three of the five repos are private anyway. Each
  project instead carries a `demoUrl`, filled in once it is deployed to its own
  domain; until then the card shows a `status` tag, so the absence reads as
  "not shipped yet" rather than as a missing link.
- **Unfinished work says so.** The three featured projects are all still in
  development and are labelled that way. Overstating readiness is the kind of
  thing that unravels in an interview.
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
