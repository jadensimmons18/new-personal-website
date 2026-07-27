import { useEffect, useRef, useState } from 'react'

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label'

function isFinePointer() {
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches
}

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!isFinePointer()) return
    setActive(true)
  }, [])

  useEffect(() => {
    if (!active) return

    const cursor = cursorRef.current
    if (!cursor) return

    document.body.classList.add('has-custom-cursor')

    const onMove = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      cursor.classList.add('is-visible')
      cursor.classList.toggle('is-hover', Boolean(e.target.closest?.(INTERACTIVE)))
      cursor.classList.toggle('is-light', Boolean(e.target.closest?.('.light-section')))
    }

    const onLeave = () => {
      cursor.classList.remove('is-visible', 'is-hover')
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [active])

  if (!active) return null

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
}
