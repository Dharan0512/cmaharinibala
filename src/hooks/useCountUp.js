import { useEffect, useRef, useState } from 'react'

const DURATION = 900

/**
 * Counts a figure up once, when it first scrolls into view.
 * Returns [ref, displayValue]. Reduced-motion visitors get the final value
 * straight away — the number is the content, the animation is decoration.
 *
 * A backgrounded tab throttles requestAnimationFrame, which would otherwise
 * strand a figure part-way ("0 yrs experience" is worse than no animation), so
 * a timer settles the true value regardless of how many frames actually ran.
 */
export function useCountUp(target, decimals = 0) {
  const ref = useRef(null)
  const [value, setValue] = useState(() => (shouldSkip() ? target : 0))

  useEffect(() => {
    const el = ref.current
    if (!el || shouldSkip()) {
      setValue(target)
      return
    }

    let raf = 0
    let settle = 0
    let start = 0
    let done = false

    const finish = () => {
      done = true
      setValue(target)
      if (raf) cancelAnimationFrame(raf)
      raf = 0
    }

    const step = (now) => {
      if (done) return
      if (!start) start = now
      const t = Math.min(1, (now - start) / DURATION)
      if (t >= 1) {
        finish()
        return
      }
      // easeOutCubic — quick to read, settles without bouncing
      setValue(target * (1 - (1 - t) ** 3))
      raf = requestAnimationFrame(step)
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        raf = requestAnimationFrame(step)
        settle = setTimeout(finish, DURATION + 300)
      },
      { threshold: 0.4 },
    )

    io.observe(el)
    return () => {
      io.disconnect()
      clearTimeout(settle)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [target])

  return [ref, value.toFixed(decimals)]
}

function shouldSkip() {
  return (
    typeof IntersectionObserver !== 'function' ||
    (typeof matchMedia === 'function' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches)
  )
}
