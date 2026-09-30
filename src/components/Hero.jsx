import { Icon } from './Icon.jsx'
import { hl } from '../lib/highlight.jsx'
import { useCountUp } from '../hooks/useCountUp.js'
import { focus, heroStats, person } from '../data/content.js'
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

        <aside className="hero__focus" aria-labelledby="hero-focus-title">
          <p className="hero__status">
            <i aria-hidden="true" />
            {focus.status}
          </p>

          <h2 className="hero__focusTitle" id="hero-focus-title">
            {focus.title}
          </h2>

          <ul className="hero__areas">
            {focus.areas.map((a) => (
              <li key={a.n}>
                <span className="hero__areaN num" aria-hidden="true">
                  {a.n}
                </span>
                <div>
                  <b>{a.title}</b>
                  <p>{a.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="hero__systems">
            {focus.systems.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </p>
        </aside>
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
