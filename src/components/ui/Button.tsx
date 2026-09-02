import styled, { css } from 'styled-components'

// Shared primary/secondary button per DESIGN.md §5 "Buttons". Renders as an
// <a> by default; pass `as={Link}` for internal routes (react-router) or
// `as="button"` for a real button element. `$compact` shrinks padding/font
// for tight contexts like the header (see DESIGN.md §5 "Header / nav").
//
// Hover treatment (per Gene's round-3 feedback — the old opacity/border-only
// hover "wasn't good enough"): both variants lift on hover (translateY),
// gain a colored glow shadow, and use a considered easing/duration rather
// than an instant flip.
export const Button = styled.a<{ $variant?: 'primary' | 'secondary'; $compact?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  font-family: ${({ theme }) => theme.font.body};
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.md};
  white-space: nowrap;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s cubic-bezier(0.2, 0.8, 0.2, 1),
    border-color 0.3s ease, background-color 0.3s ease, filter 0.3s ease;

  ${({ $compact }) =>
    $compact
      ? css`
          padding: 8px 14px;
          font-size: 12.5px;
        `
      : css`
          padding: 14px 24px;
          font-size: 15px;
        `}

  svg {
    transition: transform 0.3s ease;
  }

  ${({ theme, $variant }) =>
    $variant === 'secondary'
      ? css`
          background: transparent;
          border: 1px solid ${theme.color.border};
          color: ${theme.color.text[1]};

          &:hover {
            border-color: ${theme.color.accent2};
            background: rgba(139, 110, 255, 0.1);
            color: ${theme.color.text[1]};
            transform: translateY(-3px);
            box-shadow: 0 10px 26px rgba(139, 110, 255, 0.2);
          }
        `
      : css`
          background: ${theme.color.gradient};
          border: 1px solid transparent;
          color: ${theme.color.ink[950]};

          &:hover {
            filter: brightness(1.05);
            color: ${theme.color.ink[950]};
            transform: translateY(-3px);
            box-shadow: 0 14px 32px rgba(139, 110, 255, 0.4), 0 6px 18px rgba(255, 157, 114, 0.25);
          }

          &:hover svg {
            transform: translateX(4px);
          }
        `}

  &:hover {
    text-decoration: none;
  }
`

// Icon-only variant for the header's GitHub/LinkedIn links — a square
// bordered pill matching the resume button's weight without the label.
// Hover fills with the gradient (rather than just brightening the border)
// so it reads as a deliberate interactive state, not a subtle tweak.
export const IconButton = styled.a<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.color.text[1]};
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);

  ${({ $disabled, theme }) =>
    $disabled
      ? css`
          color: ${theme.color.text[3]};
          border-style: dashed;
          cursor: default;
          pointer-events: none;
        `
      : css`
          &:hover {
            border-color: transparent;
            background: ${theme.color.gradient};
            color: ${theme.color.ink[950]};
            text-decoration: none;
            transform: translateY(-3px);
            box-shadow: 0 10px 24px rgba(139, 110, 255, 0.4);
          }
        `}
`
