import { useEffect, useState } from 'react'
import { Icon } from './Icon.jsx'
import { useActiveSection, useScrollProgress } from '../hooks/useActiveSection.js'
import { nav, person } from '../data/content.js'
import './Nav.css'

const IDS = [...nav.map((n) => n.id), 'contact']

export function Nav({ theme, onToggleTheme }) {
  const active = useActiveSection(IDS)
  const progress = useScrollProgress()
  const [open, setOpen] = useState(false)

  // Lock the page behind the mobile menu, and let Escape close it.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className={`site-nav${progress > 0.004 ? ' is-stuck' : ''}`}>
      <div className="site-nav__bar shell">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand__mark num" aria-hidden="true">
            {person.initials}
          </span>
          <span className="brand__text">
            <b>{person.name}</b>
            <span>{person.role}</span>
          </span>
        </a>

        <nav className="site-nav__links" aria-label="Sections">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? 'is-active' : undefined}
              aria-current={active === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-nav__actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} className="icon-btn__svg" />
          </button>

          <a className="btn btn--primary site-nav__cta" href="#contact">
            Get in touch
          </a>

          <button
            type="button"
            className="icon-btn site-nav__burger"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} className="icon-btn__svg" />
          </button>
        </div>
      </div>

      <div className="site-nav__progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>

      {open && (
        <div className="site-nav__sheet" onClick={() => setOpen(false)}>
          <nav aria-label="Sections">
            {nav.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
                <Icon name="arrow" />
              </a>
            ))}
            <a href="#contact">
              Get in touch
              <Icon name="arrow" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
