import { hl } from '../lib/highlight.jsx'
import { impact } from '../data/content.js'
import './Impact.css'

export function Impact() {
  return (
    <section className="section section--alt" id="impact">
      <div className="shell">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow">Results</p>
            <h2>{impact.title}</h2>
          </div>
          <p className="section-lede">{impact.lede}</p>
        </div>

        <ul className="impact__grid">
          {impact.items.map((item) => (
            <li key={item.title} className="impact__card card reveal">
              <div className="impact__top">
                <span className="impact__figure num">{item.figure}</span>
                <span className="impact__tag">{item.tag}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{hl(item.body)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
