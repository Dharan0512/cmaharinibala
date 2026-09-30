import { useEffect, useRef, useState } from 'react'
import { Icon } from './Icon.jsx'
import { hl } from '../lib/highlight.jsx'
import { Insights } from './Insights.jsx'
import { syncFrame } from '../hooks/useTheme.js'
import { useProjectRoute } from '../hooks/useProjectRoute.js'
import { projects, work } from '../data/content.js'
import './FeaturedProject.css'

/** The grid entry: enough of the numbers to be worth a click, and no more. */
function ProjectCard({ project, index }) {
  const [lead, ...rest] = project.metrics

  return (
    <li className="pcard reveal">
      <a
        className="pcard__open"
        href={`#/project/${project.id}`}
        aria-labelledby={`${project.id}-card-title`}
      >
        <div className="pcard__cover">
          <span className="pcard__no num" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>

          <div className="pcard__lead">
            <b className="num">{lead.value}</b>
            <span>{lead.label}</span>
          </div>

          <ul className="pcard__mini">
            {rest.map((m) => (
              <li key={m.label}>
                <b className="num">{m.value}</b>
                <span>{m.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pcard__body">
          <p className="pcard__kicker num">{project.tools.slice(0, 3).join(' · ')}</p>
          <h3 id={`${project.id}-card-title`}>{project.title}</h3>
          <p className="pcard__sum">{project.kicker}</p>
          <span className="pcard__more">
            View case study
            <Icon name="arrow" />
          </span>
        </div>
      </a>

      <div className="pcard__foot">
        <span className="pcard__live">
          <i aria-hidden="true" />
          Live dashboard
        </span>
        <a
          className="pcard__out"
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open
          <Icon name="external" />
        </a>
      </div>
    </li>
  )
}

/** One project in full: metric strip, live demo, case study, insights. */
function ProjectCase({ project, theme, index, total, next, onClose }) {
  const frameRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

  // The demos are same-origin, so they can be told which theme the page is in.
  const onFrameLoad = () => {
    setLoaded(true)
    syncFrame(frameRef.current, theme)
  }

  const titleId = `${project.id}-title`

  return (
    <article className="work__project" id={project.id} aria-labelledby={titleId}>
      <header className="work__projectHead">
        <a className="work__back" href="#projects" onClick={onClose}>
          <Icon name="arrow" />
          All projects
        </a>

        <span className="work__count num">
          Project {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <h3 id={titleId}>{project.title}</h3>
        <p className="section-lede work__kicker">{project.kicker}</p>
      </header>

      <ul className="work__metrics reveal">
        {project.metrics.map((m) => (
          <li key={m.label}>
            <span className="num">{m.value}</span>
            <span>{m.label}</span>
          </li>
        ))}
      </ul>

      <p className="work__dataset num reveal">{project.dataset}</p>

      {/* Live demo ---------------------------------------------------- */}
      <figure className="demo reveal">
        <div className="demo__chrome">
          <span className="demo__dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="demo__url num">{project.demoLabel}</span>
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
          <span>{project.demoCaption}</span>
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
          View live dashboard
        </a>
        {project.excelUrl && (
          <a className="btn" href={project.excelUrl} download={project.excelFileName}>
            <Icon name="sheet" />
            Download Excel model
          </a>
        )}
      </div>

      {/* Case study --------------------------------------------------- */}
      <div className="work__study">
        <div className="work__narrative">
          {project.narrative.map((block, i) => (
            <section key={block.heading} className="work__block reveal">
              <span className="work__n num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h4>{block.heading}</h4>
                {block.body && <p>{hl(block.body)}</p>}
                {block.bullets && (
                  <ul className="work__tracks">
                    {block.bullets.map((b) => (
                      <li key={b}>{hl(b)}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>

        <aside className="work__aside reveal">
          <div className="card work__tools">
            <h4>Skills used</h4>
            <ul>
              {project.tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Insights ----------------------------------------------------- */}
      <div className="work__findings">
        <div className="work__sub reveal">
          <h4>Key insights from the analysis</h4>
          <p>What the numbers actually said once the filters came off.</p>
        </div>

        <Insights items={project.insights} idBase={project.id} />
      </div>

      {next && (
        <a className="work__next reveal" href={`#/project/${next.id}`}>
          <span className="num">Up next</span>
          <b>{next.title}</b>
          <Icon name="arrow" />
        </a>
      )}
    </article>
  )
}

export function FeaturedProject({ theme }) {
  const { openId, close } = useProjectRoute()
  const index = projects.findIndex((p) => p.id === openId)
  const open = index === -1 ? null : projects[index]
  // Wraps round to the first, so the last case study still offers somewhere
  // to go. With only one project there is nothing to point at.
  const next = projects.length > 1 ? projects[(index + 1) % projects.length] : null

  // Opening a case study from halfway down a card should start at its top.
  useEffect(() => {
    if (!openId) return
    document.getElementById('projects')?.scrollIntoView({ block: 'start' })
  }, [openId])

  return (
    <section className="section work" id="projects">
      <div className="shell">
        {open ? (
          <ProjectCase
            project={open}
            theme={theme}
            index={index}
            total={projects.length}
            next={next}
            onClose={close}
          />
        ) : (
          <>
            <div className="section-head reveal">
              <div>
                <p className="eyebrow">{work.eyebrow}</p>
                <h2>{work.title}</h2>
                <p className="section-lede work__kicker">{work.lede}</p>
              </div>

              <p className="work__tally num">
                {String(projects.length).padStart(2, '0')} projects
              </p>
            </div>

            <ul className="pgrid">
              {projects.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  )
}
