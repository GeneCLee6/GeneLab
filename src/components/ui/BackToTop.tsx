import { useEffect, useState } from 'react'
import styled from 'styled-components'

// Floating back-to-top control.
//
// Its real justification is mobile. On desktop the sticky header keeps every
// section one click away, so this is a small convenience; but under 780px the
// header's nav links are hidden, which leaves a reader who has scrolled to the
// bottom with no way back up at all. That gap is what this closes.
//
// It stays out of the way until it is plausibly wanted: hidden until the
// reader is a full viewport down, and it fades rather than popping.

const Button = styled.button<{ $visible: boolean }>`
  position: fixed;
  right: ${({ theme }) => theme.space[5]};
  bottom: ${({ theme }) => theme.space[5]};
  z-index: 30;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;

  color: ${({ theme }) => theme.color.text[2]};
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '6px')});
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transition: opacity 0.22s ease, transform 0.22s ease, border-color 0.18s ease,
    background-color 0.18s ease, color 0.18s ease;

  &:hover {
    color: ${({ theme }) => theme.color.text[1]};
    background: ${({ theme }) => theme.color.surfaceHover};
    border-color: ${({ theme }) => theme.color.borderStrong};
  }

  svg {
    transition: transform 0.18s ease;
  }

  &:hover svg {
    transform: translateY(-2px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: opacity 0.01ms;
  }
`

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => {
    // `scroll-behavior: smooth` on <html> already reverts to auto under
    // prefers-reduced-motion, so honouring it here too keeps the two in step
    // rather than forcing a smooth scroll the user asked not to have.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <Button $visible={visible} onClick={toTop} aria-label="Back to top" title="Back to top">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="M6 11l6-6 6 6" />
      </svg>
    </Button>
  )
}
