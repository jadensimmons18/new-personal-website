import { useAtmosphericCanvas } from '../../hooks/useAtmosphericCanvas'

export default function HeroCanvas({ enabled = true }) {
  const canvasRef = useAtmosphericCanvas(enabled)

  return (
    <canvas
      ref={canvasRef}
      className="hero-canvas"
      aria-hidden="true"
    />
  )
}
