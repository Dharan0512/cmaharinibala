import { hl } from '../lib/highlight.jsx'
import { Experience } from './Experience.jsx'
import { Education } from './Education.jsx'
import { about, person } from '../data/content.js'
import './About.css'

export function About() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <div className="about__intro reveal">
          <p className="eyebrow">About</p>
          <h2>{person.role}, Chennai</h2>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 32)} className="about__para">
              {hl(p)}
            </p>
          ))}
        </div>

        <Experience />
        <Education />
      </div>
    </section>
  )
}
