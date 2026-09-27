import { useEffect, useRef, useState } from 'react'
import { Icon } from './Icon.jsx'
import { contact, person } from '../data/content.js'
import './Contact.css'

const CHANNELS = [
  {
    key: 'email',
    icon: 'mail',
    label: 'Email',
    value: person.email,
    href: `mailto:${person.email}`,
    hint: 'Best way to reach me',
  },
  {
    key: 'linkedin',
    icon: 'linkedin',
    label: 'LinkedIn',
    value: person.linkedinLabel,
    href: person.linkedin,
    external: true,
    hint: 'Connect or message',
  },
  {
    key: 'phone',
    icon: 'phone',
    label: 'Phone',
    value: person.phone,
    href: `tel:${person.phoneHref}`,
    hint: 'Weekdays, IST',
  },
]

function Copy({ text }) {
  const [done, setDone] = useState(false)
  const timer = useRef(0)

  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setDone(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setDone(false), 1800)
    } catch {
      // clipboard blocked (insecure context or denied) — the link still works
    }
  }

  return (
    <button
      type="button"
      className={`contact__copy${done ? ' is-done' : ''}`}
      onClick={copy}
      aria-label={done ? `${text} copied` : `Copy ${text}`}
      title={done ? 'Copied' : 'Copy'}
    >
      <Icon name={done ? 'check' : 'copy'} />
    </button>
  )
}

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="shell">
        <div className="contact__head reveal">
          <p className="eyebrow">Contact</p>
          <h2>{contact.title}</h2>
          <p className="section-lede">{contact.lede}</p>
        </div>

        <ul className="contact__grid">
          {CHANNELS.map((c) => (
            <li key={c.key} className="contact__card card reveal">
              <a
                href={c.href}
                {...(c.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                <span className="contact__icon">
                  <Icon name={c.icon} />
                </span>
                <span className="contact__text">
                  <span className="contact__label">{c.label}</span>
                  <span className="contact__value num">{c.value}</span>
                  <span className="contact__hint">{c.hint}</span>
                </span>
                <Icon name={c.external ? 'external' : 'arrow'} className="contact__go" />
              </a>
              <Copy text={c.key === 'linkedin' ? person.linkedin : c.value} />
            </li>
          ))}
        </ul>

        <div className="contact__foot reveal">
          <p>
            <Icon name="pin" className="contact__pin" />
            Based in {person.location} — open to on-site, hybrid and remote.
          </p>
          <a
            className="btn"
            href={person.resume}
            download={person.resumeFileName}
          >
            <Icon name="download" />
            Download résumé
          </a>
        </div>
      </div>
    </section>
  )
}
