import { Icon } from './Icon.jsx'
import { hl } from '../lib/highlight.jsx'
import { useCountUp } from '../hooks/useCountUp.js'
import { heroStats, person } from '../data/content.js'
import './Hero.css'

function Stat({ value, suffix = '', decimals = 0, label }) {
  const [ref, shown] = useCountUp(value, decimals)
  return (
    <li className="stat">
      <span ref={ref} className="stat__value num">
        {shown}
        {suffix}
      </span>
      <span className="stat__label">{label}</span>
    </li>
  )
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">{person.discipline}</p>

          <h1 className="hero__name">
            <span className="hero__name--harini">Harini</span> Raamiya&nbsp;<span className="hero__name--bala">Bala</span>
            <span className="hero__cred">, {person.credential}</span>
          </h1>

          <p className="hero__headline">{person.headline}</p>
          <p className="hero__intro">{hl(person.intro)}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              <Icon name="grid" />
              View projects
            </a>
            <a
              className="btn"
              href={person.resume}
              download={person.resumeFileName}
            >
              <Icon name="download" />
              Download résumé
            </a>
            <a className="btn btn--ghost" href="#contact">
              <Icon name="mail" />
              Connect with me
            </a>
          </div>

          <p className="hero__where">
            <Icon name="pin" className="hero__pin" />
            {person.location}
            <span aria-hidden="true">·</span>
            <a href={`mailto:${person.email}`}>{person.email}</a>
          </p>
        </div>

        <figure className="hero__portrait">
          <img
            src={person.photo}
            alt={`${person.name}, ${person.role}`}
            width="900"
            height="1181"
            fetchPriority="high"
          />
        </figure>
      </div>

      <div className="shell">
        <ul className="hero__stats">
          {heroStats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </ul>
      </div>
    </section>
  )
}
