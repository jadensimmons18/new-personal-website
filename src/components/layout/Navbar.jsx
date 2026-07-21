const NAV_LINKS = [
  { label: 'PROJECTS', href: '#projects' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONNECT', href: '#connect' },
]

export default function Navbar({ variant = 'hero' }) {
  const wrapperClass =
    variant === 'hero'
      ? 'absolute top-[26px] left-0 right-0 z-50 flex justify-center px-[34px]'
      : 'relative z-50 flex justify-center px-[34px] pt-[26px]'

  return (
    <nav className={wrapperClass}>
      <div className="nav-glass grid w-full max-w-nav grid-cols-[1fr_auto_1fr] items-center gap-6 px-[22px] py-[13px]">
        <div className="whitespace-nowrap font-mono text-[11px] tracking-label text-[rgba(214,230,255,0.78)]">
          Jaden&nbsp;Simmons&nbsp;
          <span className="text-[rgba(140,180,255,0.55)]">// Software Engineer</span>
        </div>

        <div className="hidden items-center justify-center gap-[30px] text-[11px] font-semibold tracking-nav text-[rgba(224,236,255,0.9)] md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="transition-opacity hover:opacity-70">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
