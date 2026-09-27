import { useEffect, useState } from 'react'
import { Icon } from './Icon.jsx'
import { person } from '../data/content.js'
import './Resume.css'

const HIGHLIGHTS = [
  'FP&A · budgeting, forecasting, variance analysis',
  'Record-to-report · month-end close, accruals, reconciliations',
  'SAP FICO S/4HANA · report variants, GL, bank reconciliation',
  'Statutory compliance · GST and income tax filing, internal audit',
]

/**
 * Narrow mobile browsers won't render a PDF inside an iframe — iOS Safari and
 * Android Chrome both show a blank box. So the embed is only mounted where it
 * works, and everywhere else gets a page image plus buttons to open or
 * download.
 */
export function Resume() {
  const [canEmbed, setCanEmbed] = useState(false)

  useEffect(() => {
    if (typeof matchMedia !== 'function') return
    const mq = matchMedia('(min-width: 860px)')
    const apply = () => setCanEmbed(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  return (
    <section className="section" id="resume">
      <div className="shell">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow">Résumé</p>
            <h2>The one-pager</h2>
          </div>
          <p className="section-lede">
            Read it here, or take the PDF with you.
          </p>
        </div>

        <div className="resume__layout">
          <div className="resume__viewer card reveal">
            {canEmbed ? (
              <iframe
                src={`${person.resume}#view=FitH&toolbar=1`}
                title={`${person.name} — résumé`}
                loading="lazy"
              />
            ) : (
              <a
                className="resume__page"
                href={person.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/resume-preview.jpg"
                  alt={`First page of ${person.name}'s résumé`}
                  width="900"
                  height="1272"
                  loading="lazy"
                />
                <span className="resume__open">
                  <Icon name="external" />
                  Open the PDF
                </span>
              </a>
            )}
          </div>

          <aside className="resume__side reveal">
            <div className="card resume__meta">
              <h3>On the page</h3>
              <ul>
                {HIGHLIGHTS.map((h) => (
                  <li key={h}>
                    <Icon name="check" className="resume__tick" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <a
              className="btn btn--primary resume__dl"
              href={person.resume}
              download={person.resumeFileName}
            >
              <Icon name="download" />
              Download PDF
            </a>
            <a
              className="btn"
              href={person.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="external" />
              Open in a new tab
            </a>
            <a className="btn btn--ghost" href={`mailto:${person.email}`}>
              <Icon name="mail" />
              Ask me anything about it
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
