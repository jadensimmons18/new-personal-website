// components/SmoothScroll.jsx
import { ReactLenis } from 'lenis/react'
import { frame, cancelFrame, useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import 'lenis/dist/lenis.css'

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return undefined

    function update(data) {
      lenisRef.current?.lenis?.raf(data.timestamp)
    }

    frame.update(update, true)
    return () => cancelFrame(update)
  }, [prefersReducedMotion])

  // Reduced-motion users get plain native scroll — no smoothing.
  if (prefersReducedMotion) return children

  return (
    <ReactLenis root options={{ autoRaf: false, lerp: 0.08 }} ref={lenisRef}>
      {children}
    </ReactLenis>
  )
}