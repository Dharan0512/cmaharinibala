import { useCallback, useEffect, useState } from 'react'

const KEY = 'hb-theme'

function readStored() {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'dark' || v === 'light' ? v : null
  } catch {
    // private windows and blocked site data throw here — fall back to system
    return null
  }
}

function systemTheme() {
  if (typeof matchMedia !== 'function') return 'dark'
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/**
 * Dark/light with an explicit toggle, persisted per browser.
 * The chosen theme is also pushed into the same-origin dashboard iframe so the
 * embedded demo flips with the page instead of following the OS on its own.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => readStored() ?? systemTheme())

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#080c14' : '#eef2f7')

    try {
      localStorage.setItem(KEY, theme)
    } catch {
      // nothing to do — the theme still applies for this visit
    }

    for (const frame of document.querySelectorAll('iframe[data-theme-sync]')) {
      syncFrame(frame, theme)
    }
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggle }
}

/** Set `data-theme` on a same-origin iframe's document, ignoring races. */
export function syncFrame(frame, theme) {
  try {
    const root = frame.contentDocument?.documentElement
    if (root) root.dataset.theme = theme
  } catch {
    // iframe not ready, or not same-origin — the demo keeps its own default
  }
}
