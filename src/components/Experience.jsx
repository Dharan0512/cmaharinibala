import { useState } from 'react'
import { Icon } from './Icon.jsx'
import { hl } from '../lib/highlight.jsx'
import { about, experience } from '../data/content.js'
import './Experience.css'

function Role({ role, expanded, onToggle, id }) {
  return (
    <li className="role reveal">
      <div className="role__rail" aria-hidden="true">
        <span className="role__dot" />
      </div>

      <div className="role__body">
        <p className="role__period num">{role.period}</p>
        <h4>{role.role}</h4>
        <p className="role__company">{role.company}</p>
        {role.summary && <p className="role__summary">{hl(role.summary)}</p>}

        <ul className="role__stack">
          {role.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <button
          type="button"
          className="role__toggle"
          onClick={onToggle}
          aria-expanded={expanded}
          aria-controls={id}
        >
          {expanded ? 'Hide detail' : 'What I did'}
          <Icon name="arrowDown" className={`role__chev${expanded ? ' is-up' : ''}`} />
        </button>

        <div id={id} className="role__points" hidden={!expanded}>
          <ul>
            {role.points.map((p) => (
              <li key={p}>{hl(p)}</li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}

export function Experience() {
  // The most recent role opens by default — it's the one people read.
  const [open, setOpen] = useState(() => new Set([0]))

  const toggle = (i) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })

  return (
    <div className="about__block">
      <div className="about__sub reveal">
        <h3>{about.experienceTitle}</h3>
        <p>{about.experienceNote}</p>
      </div>

      <ol className="timeline">
        {experience.map((role, i) => (
          <Role
            key={role.company}
            role={role}
            id={`role-${i}`}
            expanded={open.has(i)}
            onToggle={() => toggle(i)}
          />
        ))}
      </ol>
    </div>
  )
}
