import { skills } from '../data/content.js'
import './Skills.css'

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="shell">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2>What I work with</h2>
          </div>
          <p className="section-lede">
            The systems I use daily, the finance work I do in them, and how I go
            about it.
          </p>
        </div>

        <div className="skills__grid">
          {skills.map((group) => (
            <section key={group.group} className="skills__group reveal">
              <header>
                <h3>{group.group}</h3>
                <p>{group.note}</p>
              </header>
              <ul>
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className={item.featured ? 'is-featured' : undefined}
                  >
                    <span>{item.name}</span>
                    {item.level && <span className="skills__level num">{item.level}</span>}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
