import { hl } from '../lib/highlight.jsx'
import { about, person } from '../data/content.js'
import './About.css'

export function About() {
  return (
    <section className="section section--alt" id="about">
      <div className="shell">
        <div className="about__layout">
          <div className="about__intro reveal">
            <p className="eyebrow">About</p>
            <h2>{person.role}, Chennai</h2>
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 32)} className="about__para">
                {hl(p)}
              </p>
            ))}
          </div>

          <div className="about__ahead reveal">
            <h3>{about.ahead.title}</h3>
            <ol>
              {about.ahead.items.map((item) => (
                <li key={item.n}>
                  <span className="about__n num">{item.n}</span>
                  <div>
                    <b>{item.title}</b>
                    <p>{hl(item.body)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
