#!/usr/bin/env node
/**
 * A malformed rule in one stylesheet silently swallows every rule bundled after
 * it — the page still builds, still loads, and simply loses its styling from
 * that point on. Cheap structural checks catch that before it ships.
 *
 * Run with `npm run check:css`.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const roots = ['src']
const files = []

const walk = (dir) => {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) walk(full)
    else if (entry.endsWith('.css')) files.push(full)
  }
}
for (const r of roots) walk(r)

/** Strip comments and strings so braces inside them don't count. */
const strip = (css) =>
  css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/"(?:[^"\\]|\\.)*"/g, '""')
    .replace(/'(?:[^'\\]|\\.)*'/g, "''")

let failed = 0

for (const file of files) {
  const raw = readFileSync(file, 'utf8')
  const css = strip(raw)
  const problems = []

  // 1. balanced braces
  let depth = 0
  let line = 1
  let negativeAt = 0
  for (const ch of css) {
    if (ch === '\n') line++
    else if (ch === '{') depth++
    else if (ch === '}') {
      depth--
      if (depth < 0 && !negativeAt) negativeAt = line
    }
  }
  if (depth > 0) problems.push(`${depth} unclosed block(s) — a rule or @media is missing its "}"`)
  if (negativeAt) problems.push(`stray "}" at line ${negativeAt}`)

  // 2. no nested @media (valid in CSS nesting, but here it always means a
  //    closing brace went missing above it)
  const nested = css.match(/@media[^{]*\{(?:[^{}]|\{[^{}]*\})*?@media/)
  if (nested) problems.push('a nested @media — almost always a missing "}" above it')

  if (problems.length) {
    failed++
    console.error(`FAIL  ${file}`)
    for (const p of problems) console.error(`      ${p}`)
  }
}

if (failed) {
  console.error(`\n${failed} stylesheet(s) malformed.`)
  process.exit(1)
}
console.log(`ok — ${files.length} stylesheets well-formed`)
