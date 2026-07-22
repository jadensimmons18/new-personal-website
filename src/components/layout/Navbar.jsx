const NAV_LINKS = [
  { label: 'PROJECTS', href: '#projects' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONNECT', href: '#connect' },
]

export default function Navbar({ variant = 'hero' }) {
  return (
    <nav className="navbar">
      <div className="nav-glass navbar__inner">
        <div className="navbar__brand">
          Jaden&nbsp;Simmons&nbsp;
          <span className="navbar__brand-meta">// Software Engineer</span>
        </div>

        <div className="navbar__links">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
