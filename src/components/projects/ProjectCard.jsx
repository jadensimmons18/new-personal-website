import { ArrowRight } from 'lucide-react'

export default function ProjectCard({
  index,
  category,
  title,
  titleLine2,
  titleItalic,
  subtitle,
  description,
  href,
}) {
  return (
    <div>
      <div className="mb-5 font-mono text-[11px] tracking-[0.14em] text-brand-600">
        {String(index).padStart(2, '0')}&nbsp;&nbsp;·&nbsp;&nbsp;{category}
      </div>

      <h2 className="m-0 text-project-heading font-bold text-neutral-950">
        {title}
        {titleLine2 && (
          <>
            <br />
            {titleLine2}
          </>
        )}
        {titleItalic && (
          <>
            <br />
            <span className="font-serif font-medium italic">{titleItalic}</span>
          </>
        )}
      </h2>

      <div className="mt-[34px] text-base font-semibold text-neutral-950">{subtitle}</div>

      <p className="mt-3.5 max-w-[400px] text-[14.5px] font-light leading-[1.72] text-neutral-950/60">
        {description}
      </p>

      <a
        href={href}
        className="mt-[30px] inline-flex items-center gap-2 border-b border-brand-600/35 pb-[5px] font-mono text-[11.5px] tracking-[0.12em] text-brand-600 transition-opacity hover:opacity-70"
      >
        VIEW&nbsp;CASE&nbsp;STUDY
        <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" />
      </a>
    </div>
  )
}
