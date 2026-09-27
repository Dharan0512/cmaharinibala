import { useEffect } from 'react'

/**
 * Reveals every `.reveal` element as it scrolls into view. One observer for the
 * whole page, re-scanned whenever the DOM settles. Elements are revealed
 * immediately when IntersectionObserver is unavailable or motion is reduced, so
 * content is never trapped behind an animation that cannot fire.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = () => document.querySelectorAll('.reveal:not(.is-in)')

    const reduced =
      typeof matchMedia === 'function' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced || typeof IntersectionObserver !== 'function') {
      for (const el of nodes()) el.classList.add('is-in')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-in')
          io.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    for (const el of nodes()) io.observe(el)

    // Sections mount expanders and lazy content after the first pass.
    const mo = new MutationObserver(() => {
      for (const el of nodes()) io.observe(el)
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
