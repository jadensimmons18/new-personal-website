import { useAtmosphericCanvas } from '../../hooks/useAtmosphericCanvas'

export default function HeroCanvas({ enabled = true }) {
  const canvasRef = useAtmosphericCanvas(enabled)

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 block h-full w-full"
      aria-hidden="true"
    />
  )
}
