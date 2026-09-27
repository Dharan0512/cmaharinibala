import { useRef, useState } from 'react'
import { Icon } from './Icon.jsx'
import { hl } from '../lib/highlight.jsx'
import { syncFrame } from '../hooks/useTheme.js'
import { project } from '../data/content.js'
import './FeaturedProject.css'

export function FeaturedProject({ theme }) {
  const frameRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

  // The demo is same-origin, so it can be told which theme the page is in.
  const onFrameLoad = () => {
    setLoaded(true)
    syncFrame(frameRef.current, theme)
  }

  return (
    <section className="section work" id="work">
      <div className="shell">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow">{project.eyebrow}</p>
            <h2>{project.title}</h2>
            <p className="section-lede work__kicker">{project.kicker}</p>
          </div>
        </div>

        <ul className="work__metrics reveal">
          {project.metrics.map((m) => (
            <li key={m.label}>
              <span className="num">{m.value}</span>
              <span>{m.label}</span>
            </li>
          ))}
        </ul>

        {/* Live demo ---------------------------------------------------- */}
        <figure className="demo reveal">
          <div className="demo__chrome">
            <span className="demo__dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="demo__url num">finance-kpi-dashboard</span>
            <span className={`demo__live${loaded ? ' is-on' : ''}`}>
              <i aria-hidden="true" />
              {loaded ? 'Live' : 'Loading'}
            </span>
          </div>

          <div className="demo__stage">
            <iframe
              ref={frameRef}
              src={project.demoUrl}
              title={`${project.title} — interactive demo`}
              loading="lazy"
              onLoad={onFrameLoad}
              data-theme-sync=""
            />
          </div>

          <figcaption>
            <span>
              This is the real dashboard, running here on the page — change the
              year, region or month filters and every tile, chart and row
              recalculates.
            </span>
          </figcaption>
        </figure>

        <div className="work__actions reveal">
          <a
            className="btn btn--primary"
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="expand" />
            Open full screen
          </a>
          <a className="btn" href={project.excelUrl} download={project.excelFileName}>
            <Icon name="sheet" />
            Download the Excel model
          </a>
          <a
            className="btn btn--ghost"
            href={project.artifactUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="external" />
            View the original build
          </a>
        </div>

        {/* Case study --------------------------------------------------- */}
        <div className="work__study">
          <div className="work__narrative">
            {project.narrative.map((block, i) => (
              <article key={block.heading} className="work__block reveal">
                <span className="work__n num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{block.heading}</h3>
                  <p>{hl(block.body)}</p>
                </div>
              </article>
            ))}
          </div>

          <aside className="work__aside reveal">
            <div className="card work__facts">
              <h3>At a glance</h3>
              <dl>
                {project.notes.map((n) => (
                  <div key={n.k}>
                    <dt>{n.k}</dt>
                    <dd>{hl(n.v)}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="card work__tools">
              <h3>What it took</h3>
              <ul>
                {project.tools.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
