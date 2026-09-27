import { useEffect, useRef } from 'react'
import './Ambient.css'

/**
 * The page's atmosphere: a deep gradient ground, three slowly drifting colour
 * fields, a faint ledger grid, and a glow that follows the pointer.
 *
 * The glow is a single GPU-composited layer moved with a transform — no layout,
 * no repaint of anything else — and pointer samples are coalesced into one
 * rAF per frame so fast mouse movement can't queue up work.
 */
export function Ambient() {
  const glowRef = useRef(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    // Deliberately not gated on `(pointer: fine)` — some desktop browsers and
    // Linux setups report no pointer at all and would silently lose the effect.
    // Touch devices simply never fire pointermove outside a drag.
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    let x = innerWidth / 2
    let y = innerHeight / 3
    let shown = false

    const paint = () => {
      frame = 0
      glow.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      if (!shown) {
        shown = true
        glow.classList.add('is-on')
      }
    }

    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      if (!frame) frame = requestAnimationFrame(paint)
    }

    const onLeave = () => {
      shown = false
      glow.classList.remove('is-on')
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div className="ambient" aria-hidden="true">
      <span className="ambient__field ambient__field--a" />
      <span className="ambient__field ambient__field--b" />
      <span className="ambient__field ambient__field--c" />
      <span className="ambient__grid" />
      <span className="ambient__glow" ref={glowRef} />
    </div>
  )
}
