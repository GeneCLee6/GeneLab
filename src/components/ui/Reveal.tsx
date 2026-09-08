import styled from 'styled-components'
import type { ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'

// Scroll-triggered reveal wrapper — fade in + translateY, fires once per
// element as it enters the viewport (DESIGN.md §1 "Motion"). Used across
// every major Home section so content builds in as the user scrolls rather
// than dumping everything on load. `delay` (ms) staggers repeated children —
// e.g. `projects.map((p, i) => <Reveal delay={i * 90}>...`.
//
// Respects `prefers-reduced-motion: reduce`: the reduced-motion branch skips
// the transform/opacity animation entirely rather than just shortening it,
// per the brief ("content just appears").
const RevealBox = styled.div<{ $inView: boolean; $delay: number }>`
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: translateY(${({ $inView }) => ($inView ? '0' : '22px')});
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${({ $delay }) => $delay}ms,
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${({ $delay }) => $delay}ms;
  will-change: opacity, transform;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`

interface RevealProps {
  children: ReactNode
  /** Stagger delay in ms — for repeated siblings (card grids, lists). */
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <RevealBox ref={ref} $inView={inView} $delay={delay} className={className}>
      {children}
    </RevealBox>
  )
}
