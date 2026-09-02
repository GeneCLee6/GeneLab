import styled, { css } from 'styled-components'

// Shared primary/secondary button per DESIGN.md §5 "Buttons". Renders as an
// <a> by default; pass `as={Link}` for internal routes (react-router) or
// `as="button"` for a real button element. `$compact` shrinks padding/font
// for tight contexts like the header (see DESIGN.md §5 "Header / nav").
export const Button = styled.a<{ $variant?: 'primary' | 'secondary'; $compact?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  font-family: ${({ theme }) => theme.font.body};
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.md};
  white-space: nowrap;
  cursor: pointer;

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

  ${({ theme, $variant }) =>
    $variant === 'secondary'
      ? css`
          background: transparent;
          border: 1px solid ${theme.color.border};
          color: ${theme.color.text[1]};

          &:hover {
            border-color: ${theme.color.accent2};
            color: ${theme.color.text[1]};
          }
        `
      : css`
          background: ${theme.color.accent};
          border: 1px solid transparent;
          color: ${theme.color.ink[950]};

          &:hover {
            filter: brightness(1.08);
            color: ${theme.color.ink[950]};
          }
        `}

  &:hover {
    text-decoration: none;
  }
`

// Icon-only variant for the header's GitHub/LinkedIn links — a square
// bordered pill matching the resume button's weight without the label.
export const IconButton = styled.a<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.color.text[1]};

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
            border-color: ${theme.color.accent2};
            color: ${theme.color.text[1]};
            text-decoration: none;
          }
        `}
`
