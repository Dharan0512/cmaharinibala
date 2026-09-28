import { Icon } from './Icon.jsx'
import { about, education } from '../data/content.js'
import './Education.css'

export function Education() {
  return (
    <div className="about__block">
      <div className="about__sub reveal">
        <h3>{about.educationTitle}</h3>
        <p>{about.educationNote}</p>
      </div>

      <ul className="edu__layout reveal">
        {education.map((e) => (
          <li key={e.title} className="edu__item card">
            <Icon name="spark" className="edu__crest" />
            <div>
              <h4>{e.title}</h4>
              <p className="edu__where">{e.where}</p>
            </div>
            <div className="edu__meta">
              {e.score && <span className="edu__score num">{e.score}</span>}
              <span className="num">{e.when}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
