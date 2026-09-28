import { useRef, useState } from 'react'
import { capabilities, capabilityTabs } from '../data/content.js'
import './Capabilities.css'

export function Capabilities() {
  const [tab, setTab] = useState('key')
  const tabsRef = useRef(null)

  const match = (c) => (tab === 'key' ? Boolean(c.key) : c.category === tab)

  // Roving focus: arrows move between tabs, Home/End jump to the ends.
  const onKeyDown = (e) => {
    const i = capabilityTabs.findIndex((t) => t.id === tab)
    const last = capabilityTabs.length - 1
    let next = null
    if (e.key === 'ArrowRight') next = i === last ? 0 : i + 1
    else if (e.key === 'ArrowLeft') next = i === 0 ? last : i - 1
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = last
    if (next === null) return
    e.preventDefault()
    setTab(capabilityTabs[next].id)
    tabsRef.current?.querySelectorAll('[role="tab"]')[next]?.focus()
  }

  return (
    <section className="section section--alt" id="capabilities">
      <div className="shell">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2>What I work with</h2>
          </div>
          <p className="section-lede">
            A practical mix of finance, analytical and technical skills from
            professional experience, coursework and hands-on projects.
          </p>
        </div>

        <div
          className="caps__tabs reveal"
          role="tablist"
          aria-label="Filter capabilities"
          ref={tabsRef}
          onKeyDown={onKeyDown}
        >
          {capabilityTabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`caps-tab-${t.id}`}
              aria-selected={tab === t.id}
              aria-controls="caps-panel"
              tabIndex={tab === t.id ? 0 : -1}
              className="caps__tab"
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Every card stays mounted and is hidden instead of filtered out, so
            switching tabs doesn't replay the reveal animation. */}
        <div
          className="caps__panel reveal"
          id="caps-panel"
          role="tabpanel"
          tabIndex={0}
          aria-labelledby={`caps-tab-${tab}`}
        >
          <ul className="caps__grid">
            {capabilities.map((c) => (
              <li key={c.code} className="caps__card card" hidden={!match(c)}>
                <span className="caps__code num" aria-hidden="true">
                  {c.code}
                </span>
                <div>
                  <b>{c.title}</b>
                  <p>{c.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
