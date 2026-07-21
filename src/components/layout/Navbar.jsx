const NAV_LINKS = [
  { label: 'WORK', href: '#projects' },
  { label: 'ABOUT', href: '#about' },
  { label: 'ESSAYS', href: '#essays' },
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
          ELENA&nbsp;PETROVA&nbsp;
          <span className="text-[rgba(140,180,255,0.55)]">//</span>
          &nbsp;EST.&nbsp;1991
        </div>

        <div className="hidden items-center justify-center gap-[30px] text-[11px] font-semibold tracking-nav text-[rgba(224,236,255,0.9)] md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="transition-opacity hover:opacity-70">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-self-end gap-[9px] whitespace-nowrap font-mono text-[10.5px] tracking-[0.14em] text-[rgba(180,205,255,0.62)]">
          <span
            className="h-[6px] w-[6px] rounded-full bg-[#7fd0ff]"
            style={{ boxShadow: '0 0 10px 2px rgba(127,208,255,0.8)' }}
            aria-hidden="true"
          />
          AVAILABLE&nbsp;&apos;26
        </div>
      </div>
    </nav>
  )
}
