import { Icon } from './Icon.jsx'
import { nav, person } from '../data/content.js'
import './Footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <div className="site-footer__brand">
          <span className="brand__mark num" aria-hidden="true">
            {person.initials}
          </span>
          <div>
            <b>{person.name}</b>
            <span>
              {person.role} · {person.location}
            </span>
          </div>
        </div>

        <nav className="site-footer__links" aria-label="Footer">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
          <a href="#contact">Contact</a>
        </nav>

        <div className="site-footer__social">
          <a
            href={`mailto:${person.email}`}
            className="icon-btn"
            aria-label={`Email ${person.shortName}`}
            title="Email"
          >
            <Icon name="mail" className="icon-btn__svg" />
          </a>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label={`${person.shortName} on LinkedIn`}
            title="LinkedIn"
          >
            <Icon name="linkedin" className="icon-btn__svg icon-btn__svg--fill" />
          </a>
          <a
            href={person.resume}
            download={person.resumeFileName}
            className="icon-btn"
            aria-label="Download résumé"
            title="Download résumé"
          >
            <Icon name="download" className="icon-btn__svg" />
          </a>
        </div>
      </div>

      <div className="shell site-footer__law">
        <span>© {new Date().getFullYear()} {person.name}</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
