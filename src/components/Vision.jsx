import { hl } from '../lib/highlight.jsx'
import { vision } from '../data/content.js'
import './Vision.css'

export function Vision() {
  return (
    <section className="section section--alt" id="vision">
      <div className="shell">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow">{vision.lede}</p>
            <h2>{vision.title}</h2>
          </div>
        </div>

        <div className="vision__layout">
          <p className="vision__body reveal">{hl(vision.body)}</p>

          <ol className="vision__track reveal">
            {vision.items.map((item) => (
              <li key={item.n}>
                <span className="vision__n num">{item.n}</span>
                <div>
                  <b>{item.title}</b>
                  <p>{hl(item.body)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
