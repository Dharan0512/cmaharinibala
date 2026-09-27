import { Icon } from './Icon.jsx'
import { education } from '../data/content.js'
import './Education.css'

export function Education() {
  return (
    <section className="section" id="education">
      <div className="shell">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow">Education</p>
            <h2>Qualifications</h2>
          </div>
          <p className="section-lede">
            The ICMAI progression, the academic record behind it, and the
            certifications alongside.
          </p>
        </div>

        <div className="edu__layout">
          <section className="edu__cma card reveal">
            <header>
              <div>
                <h3>{education.cma.title}</h3>
                <p>{education.cma.board}</p>
              </div>
              <Icon name="spark" className="edu__crest" />
            </header>

            <ol className="edu__ladder">
              {education.cma.stages.map((s, i) => (
                <li key={s.stage} className={i === 0 ? 'is-current' : undefined}>
                  <span className="edu__stage">{s.stage}</span>
                  <span className="edu__when num">{s.when}</span>
                  <span className="edu__score num">{s.score}</span>
                </li>
              ))}
            </ol>

            <p className="edu__note">{education.cma.note}</p>
          </section>

          <div className="edu__side">
            <section className="reveal">
              <h3 className="edu__label">Academic</h3>
              <ul className="edu__list">
                {education.academic.map((a) => (
                  <li key={a.title} className="card">
                    <div>
                      <b>{a.title}</b>
                      <span>{a.where}</span>
                    </div>
                    <div className="edu__right">
                      <span className="edu__score num">{a.score}</span>
                      <span className="num">{a.when}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="reveal">
              <h3 className="edu__label">Certifications</h3>
              <ul className="edu__list">
                {education.certifications.map((c) => (
                  <li key={c.title} className="card">
                    <div>
                      <b>{c.title}</b>
                      <span>{c.where}</span>
                    </div>
                    <div className="edu__right">
                      <span className="edu__score num">{c.score}</span>
                      <span className="num">{c.when}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
