import { keywords } from '../data/content.js'

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

// Longest first, so "bank reconciliation" wins over "reconciliation" and
// "SAP S/4HANA" over "SAP". Boundaries are spelled out rather than using \b,
// because terms like FP&A, S/4HANA and R2R contain characters \b treats as
// word edges.
const PATTERN = new RegExp(
  `(?<![A-Za-z0-9])(${[...keywords]
    .sort((a, b) => b.length - a.length)
    .map(escape)
    .join('|')})(?![A-Za-z0-9])`,
  'gi',
)

/**
 * Wraps the finance and FP&A vocabulary in a piece of copy so it carries the
 * same emphasis the résumé gives it. Returns React nodes — never raw HTML —
 * so nothing in content.js can inject markup.
 */
export function hl(text) {
  if (typeof text !== 'string') return text

  const out = []
  let last = 0
  let i = 0

  PATTERN.lastIndex = 0
  for (const match of text.matchAll(PATTERN)) {
    const at = match.index
    if (at > last) out.push(text.slice(last, at))
    out.push(
      <b className="kw" key={`k${i++}`}>
        {match[0]}
      </b>,
    )
    last = at + match[0].length
  }

  if (last === 0) return text
  if (last < text.length) out.push(text.slice(last))
  return out
}
