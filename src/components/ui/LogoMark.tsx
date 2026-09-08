// GeneLab's mark: two nodes converging into a third — a graph, which is both
// a generic "systems" glyph and a direct nod to the agent-graph work the site
// leads with.
//
// Constraints it was drawn to: legible at 16px (favicon), so it is three
// filled circles and two straight edges and nothing else — no thin strokes,
// no interior detail, no text. `public/favicon.svg` is the same artwork with
// the colors baked in; change both together.
export function LogoMark({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="7.5" fill="#6C8EFF" />
      <g stroke="#101318" strokeWidth="2" strokeLinecap="round">
        <line x1="11" y1="10.5" x2="21" y2="16" />
        <line x1="11" y1="21.5" x2="21" y2="16" />
      </g>
      <g fill="#101318">
        <circle cx="10.5" cy="10.5" r="3.1" />
        <circle cx="10.5" cy="21.5" r="3.1" />
        <circle cx="21.5" cy="16" r="3.1" />
      </g>
    </svg>
  )
}
