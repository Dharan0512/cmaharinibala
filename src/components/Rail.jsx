import { useEffect, useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { nav } from '../data/content.js'
import './Rail.css'

const ITEMS = [...nav, { id: 'contact', label: 'Contact' }]
const IDS = ITEMS.map((i) => i.id)

/**
 * The dot rail down the right edge: one marker per section, the current one
 * stretched into a pill. It stays out of the way until the hero has been
 * scrolled past, and there is no room for it on narrow screens.
 */
export function Rail() {
  const active = useActiveSection(IDS)
  const [show, setShow] = useState(
    () => typeof window === 'object' && window.scrollY > window.innerHeight * 0.6,
  )

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        setShow(window.scrollY > window.innerHeight * 0.6)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <nav className={`rail${show ? ' is-show' : ''}`} aria-label="Page sections">
      {ITEMS.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={active === item.id ? 'is-active' : undefined}
          aria-current={active === item.id ? 'true' : undefined}
        >
          <span className="rail__label">{item.label}</span>
          <i className="rail__dot" aria-hidden="true" />
        </a>
      ))}
    </nav>
  )
}
