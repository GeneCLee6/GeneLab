import { useEffect, useRef, useState } from 'react'

// Fires once, true when the observed element first scrolls into view — the
// primitive behind `components/ui/Reveal.tsx`.
//
// The safety net matters more than the animation here. Reveal starts its
// children at opacity 0, so anything that stops the observer from firing
// leaves the page permanently blank. That is not hypothetical: a tab opened
// in the background can lay out at zero size, so nothing ever "intersects,"
// and the visitor sees an empty page until they happen to scroll. Two
// guards, either of which alone is enough to prevent that:
//
//   1. If the element is already within the viewport on mount, reveal it
//      immediately instead of waiting for an intersection event.
//   2. Reveal unconditionally after a short timeout, whatever the observer
//      did or didn't report.
export function useInView<T extends HTMLElement = HTMLDivElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // No IntersectionObserver (or a non-browser test environment): fail open.
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    // Guard 1 — already on screen at mount.
    const rect = node.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px', ...options },
    )

    observer.observe(node)

    // Guard 2 — content becomes visible regardless of observer behaviour.
    const failsafe = window.setTimeout(() => setInView(true), 1500)

    return () => {
      observer.disconnect()
      window.clearTimeout(failsafe)
    }
  }, [options])

  return { ref, inView }
}
