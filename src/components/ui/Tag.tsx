import styled, { css } from 'styled-components'
import type { ProjectHue } from '../../data/projects'

const hueColor = (hue: ProjectHue | undefined) => (theme: import('styled-components').DefaultTheme) => {
  switch (hue) {
    case 'blue':
      return theme.color.blue
    case 'peach':
      return theme.color.peach
    case 'purple':
    default:
      return theme.color.accent2
  }
}

// Mono tag used for both project-card category labels and tech-stack chips
// (DESIGN.md §5 "Cards"). `$variant="category"` picks up the card's `hue`
// (purple/blue/peach, DESIGN.md §2) instead of a single fixed accent color —
// this round replaced the old "amber for every category tag" rule with a
// per-project hue so cards read as visually distinct, not a repeating
// pattern. Both variants get a considered hover treatment per Gene's
// feedback: color/border brighten + a small lift, not just an opacity tweak.
export const Tag = styled.span<{ $variant?: 'category' | 'tech'; $unset?: boolean; $hue?: ProjectHue }>`
  display: inline-block;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  padding: 4px 9px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.color.text[3]};
  transition: color 0.25s ease, border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.color.text[1]};
    border-color: ${({ theme }) => theme.color.accent2};
    transform: translateY(-1px);
  }

  ${({ $variant, $hue, theme }) =>
    $variant === 'category' &&
    css`
      color: ${hueColor($hue)(theme)};
      border-color: ${hueColor($hue)(theme)}66;
      text-transform: uppercase;
      letter-spacing: 0.03em;

      &:hover {
        color: ${hueColor($hue)(theme)};
        border-color: ${hueColor($hue)(theme)};
      }
    `}

  ${({ $unset }) =>
    $unset &&
    css`
      border-style: dashed;

      &:hover {
        transform: none;
      }
    `}
`
