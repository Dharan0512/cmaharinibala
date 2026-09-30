import { useCallback, useEffect, useState } from 'react'

/**
 * Which project case study is open, kept in the URL as `#/project/<id>`.
 *
 * Putting it in the hash rather than in state means a case study can be linked
 * to and shared, the browser's back button closes it, and a reload lands back
 * on the same page — all without pulling in a router.
 */

const read = () => {
  if (typeof location !== 'object') return null
  const match = /^#\/project\/([\w-]+)$/.exec(location.hash)
  return match ? match[1] : null
}

export function useProjectRoute() {
  const [openId, setOpenId] = useState(read)

  useEffect(() => {
    const onHash = () => setOpenId(read())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const open = useCallback((id) => {
    location.hash = `#/project/${id}`
  }, [])

  const close = useCallback(() => {
    location.hash = '#projects'
  }, [])

  return { openId, open, close }
}
