import { useEffect, useRef } from 'react'

const BLUES = [
  '150,196,255',
  '110,170,255',
  '80,150,255',
  '185,215,255',
  '60,130,240',
  '130,185,255',
]

const RAY_COUNT = 300

function createRays() {
  const rays = []
  for (let i = 0; i < RAY_COUNT; i++) {
    const white = Math.random() < 0.14
    rays.push({
      a: Math.random() * Math.PI * 2,
      w: 0.004 + Math.random() * Math.random() * 0.03,
      len: 0.45 + Math.random() * 0.95,
      bright: 0.18 + Math.random() * 0.85,
      speed: 0.3 + Math.random() * 1.8,
      phase: Math.random() * Math.PI * 2,
      col: white ? '255,255,255' : BLUES[(Math.random() * BLUES.length) | 0],
    })
  }
  return rays
}

export function useAtmosphericCanvas(enabled = true) {
  const canvasRef = useRef(null)
  const enabledRef = useRef(enabled)

  useEffect(() => {
    enabledRef.current = enabled
  }, [enabled])

  useEffect(() => {
    const cv = canvasRef.current
    if (!cv || !enabled) return undefined

    const ctx = cv.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const rays = createRays()
    let w = 0
    let h = 0
    let cx = 0
    let cy = 0
    let R = 0
    let raf = 0

    const resize = () => {
      const r = cv.getBoundingClientRect()
      w = r.width
      h = r.height
      cv.width = Math.max(1, w * dpr)
      cv.height = Math.max(1, h * dpr)
      cx = w / 2
      cy = h * 0.5
      R = Math.hypot(w, h)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(cv)

    const t0 = performance.now()

    const draw = (now) => {
      if (!enabledRef.current) {
        raf = requestAnimationFrame(draw)
        return
      }

      const t = (now - t0) / 1000
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      ctx.globalCompositeOperation = 'source-over'
      const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.85)
      bg.addColorStop(0, '#0c2247')
      bg.addColorStop(0.4, '#06142e')
      bg.addColorStop(1, '#02060f')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, w, h)

      const breathe = 1 + 0.035 * Math.sin(t * 0.45)
      const rot = t * 0.014

      ctx.globalCompositeOperation = 'lighter'
      for (let i = 0; i < RAY_COUNT; i++) {
        const ray = rays[i]
        const a = ray.a + rot
        const b = ray.bright * (0.5 + 0.5 * Math.sin(t * ray.speed + ray.phase))
        if (b <= 0.02) continue

        const len = R * ray.len * breathe
        const dx = Math.cos(a)
        const dy = Math.sin(a)
        const x2 = cx + dx * len
        const y2 = cy + dy * len
        const ox = -dy
        const oy = dx
        const wPx = ray.w * len + 0.6

        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(x2 + ox * wPx, y2 + oy * wPx)
        ctx.lineTo(x2 - ox * wPx, y2 - oy * wPx)
        ctx.closePath()

        const g = ctx.createLinearGradient(cx, cy, x2, y2)
        g.addColorStop(0, `rgba(${ray.col},0)`)
        g.addColorStop(0.12, `rgba(${ray.col},${b * 0.55})`)
        g.addColorStop(0.55, `rgba(${ray.col},${b * 0.22})`)
        g.addColorStop(1, `rgba(${ray.col},0)`)
        ctx.fillStyle = g
        ctx.fill()
      }

      const pulse = 1 + 0.08 * Math.sin(t * 0.9)
      const br = R * 0.2 * pulse
      const bloom = ctx.createRadialGradient(cx, cy, 0, cx, cy, br)
      bloom.addColorStop(0, 'rgba(255,255,255,0.98)')
      bloom.addColorStop(0.18, 'rgba(214,232,255,0.7)')
      bloom.addColorStop(0.5, 'rgba(120,180,255,0.28)')
      bloom.addColorStop(1, 'rgba(90,150,255,0)')
      ctx.beginPath()
      ctx.arc(cx, cy, br, 0, Math.PI * 2)
      ctx.fillStyle = bloom
      ctx.fill()

      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [enabled])

  return canvasRef
}
