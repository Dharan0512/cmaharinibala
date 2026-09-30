import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Icon } from './Icon.jsx'
import { hl } from '../lib/highlight.jsx'
import './Insights.css'

/** Matches a media query and keeps following it. */
function useMedia(query) {
  const [hit, setHit] = useState(
    () => typeof matchMedia === 'function' && matchMedia(query).matches,
  )

  useEffect(() => {
    if (typeof matchMedia !== 'function') return
    const mq = matchMedia(query)
    const onChange = () => setHit(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [query])

  return hit
}

/**
 * The insights of one project, as a tab list beside a single panel: eight
 * findings in the height of one instead of eight stacked cards. An accent bar
 * slides to whichever is selected — down the list on desktop, along it once the
 * list becomes a scrolling strip.
 */
export function Insights({ items, idBase }) {
  const [active, setActive] = useState(0)
  const listRef = useRef(null)
  const stacked = useMedia('(max-width: 900px)')

  const tabs = () => listRef.current?.querySelectorAll('[role="tab"]') ?? []

  // The bar is absolutely positioned inside the list, so the selected tab's own
  // box is the measurement. It is written straight to the list as custom
  // properties rather than held in state — the stylesheet decides which pair of
  // values it reads, and nothing has to re-render to move it.
  const measure = useCallback(() => {
    const list = listRef.current
    const btn = tabs()[active]
    if (!list || !btn) return
    list.style.setProperty('--bar-top', `${btn.offsetTop}px`)
    list.style.setProperty('--bar-height', `${btn.offsetHeight}px`)
    list.style.setProperty('--bar-left', `${btn.offsetLeft}px`)
    list.style.setProperty('--bar-width', `${btn.offsetWidth}px`)
    list.classList.add('is-measured')
  }, [active])

  useLayoutEffect(measure, [measure])

  useEffect(() => {
    const list = listRef.current
    if (!list || typeof ResizeObserver !== 'function') return
    const ro = new ResizeObserver(measure)
    ro.observe(list)
    for (const btn of tabs()) ro.observe(btn)
    return () => ro.disconnect()
  }, [measure])

  // Keep the selection reachable on the strip without scrolling the page.
  const reveal = (i) => {
    const list = listRef.current
    const btn = tabs()[i]
    if (!list || !btn || list.scrollWidth <= list.clientWidth) return
    const b = btn.getBoundingClientRect()
    const r = list.getBoundingClientRect()
    if (b.left < r.left || b.right > r.right) {
      list.scrollTo({ left: btn.offsetLeft - 16, behavior: 'smooth' })
    }
  }

  const select = (i, focus = false) => {
    const next = (i + items.length) % items.length
    setActive(next)
    reveal(next)
    if (focus) tabs()[next]?.focus()
  }

  // Both axes move the selection — the list is vertical on desktop and
  // horizontal on narrow screens, and the keys should work either way.
  const onKeyDown = (e) => {
    const last = items.length - 1
    let next = null
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = active === last ? 0 : active + 1
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = active === 0 ? last : active - 1
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = last
    if (next === null) return
    e.preventDefault()
    select(next, true)
  }

  return (
    <div className="ins reveal">
      <div
        className="ins__list"
        ref={listRef}
        role="tablist"
        aria-label="Key insights"
        aria-orientation={stacked ? 'horizontal' : 'vertical'}
        onKeyDown={onKeyDown}
      >
        <span className="ins__bar" aria-hidden="true" />

        {items.map((item, i) => (
          <button
            key={item.n}
            type="button"
            role="tab"
            id={`${idBase}-ins-tab-${i}`}
            className="ins__tab"
            aria-selected={i === active}
            aria-controls={`${idBase}-ins-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => select(i)}
          >
            <span className="ins__tabN num" aria-hidden="true">
              {item.n}
            </span>
            <span className="ins__tabT">{item.title}</span>
          </button>
        ))}
      </div>

      <div className="ins__stage">
        {/* Every panel stays in the same grid cell, so the box is as tall as the
            longest one and nothing shifts underneath as you click through. */}
        <div className="ins__panels">
          {items.map((item, i) => (
            <article
              key={item.n}
              id={`${idBase}-ins-panel-${i}`}
              role="tabpanel"
              aria-labelledby={`${idBase}-ins-tab-${i}`}
              className={`ins__panel${i === active ? ' is-on' : ''}`}
              tabIndex={i === active ? 0 : -1}
            >
              <span className="ins__n num" aria-hidden="true">
                {item.n}
              </span>
              <h5>{item.title}</h5>
              <p>{hl(item.body)}</p>
            </article>
          ))}
        </div>

        <div className="ins__controls">
          <button
            type="button"
            className="ins__nav ins__nav--prev"
            onClick={() => select(active - 1)}
            aria-label="Previous insight"
          >
            <Icon name="arrow" />
          </button>

          <span className="ins__count num" aria-hidden="true">
            {items[active].n} / {String(items.length).padStart(2, '0')}
          </span>

          <button
            type="button"
            className="ins__nav"
            onClick={() => select(active + 1)}
            aria-label="Next insight"
          >
            <Icon name="arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}
