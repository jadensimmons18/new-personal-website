import { Mail, Phone } from 'lucide-react'

function GitHubIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.586 2 12.253c0 4.537 2.865 8.383 6.839 9.743.5.094.683-.222.683-.492 0-.243-.01-1.05-.014-1.905-2.782.618-3.37-1.21-3.37-1.21-.454-1.181-1.11-1.496-1.11-1.496-.908-.636.069-.623.069-.623 1.004.072 1.533 1.057 1.533 1.057.892 1.568 2.341 1.115 2.91.853.091-.663.35-1.115.636-1.372-2.22-.259-4.555-1.141-4.555-5.077 0-1.122.39-2.04 1.03-2.759-.103-.26-.447-1.303.098-2.716 0 0 .84-.275 2.75 1.053A9.3 9.3 0 0 1 12 6.84a9.3 9.3 0 0 1 2.504.346c1.909-1.328 2.748-1.053 2.748-1.053.546 1.413.202 2.456.1 2.716.64.719 1.028 1.637 1.028 2.759 0 3.947-2.339 4.815-4.566 5.069.359.317.679.943.679 1.901 0 1.372-.013 2.477-.013 2.814 0 .273.18.591.688.49C19.138 20.633 22 16.787 22 12.253 22 6.586 17.523 2 12 2Z" />
    </svg>
  )
}

function LinkedInIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.98 1.98 0 1 1 0-3.96 1.98 1.98 0 0 1 0 3.96zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const CONNECTIONS = [
  {
    label: 'GitHub',
    href: 'https://github.com/your-username', // TODO: replace with your GitHub URL
    icon: GitHubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/your-username', // TODO: replace with your LinkedIn URL
    icon: LinkedInIcon,
  },
  {
    label: 'Phone',
    href: 'tel:+15555555555', // TODO: replace with your phone number
    icon: Phone,
  },
  {
    label: 'Email',
    href: 'mailto:you@example.com', // TODO: replace with your email
    icon: Mail,
  },
]

export default function FooterSection() {
  return (
    <footer id="connect" className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__eyebrow">Connect</p>

        <ul className="site-footer__links">
          {CONNECTIONS.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                className="site-footer__link"
                href={href}
                {...(href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                <Icon size={16} strokeWidth={1.6} aria-hidden="true" />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="site-footer__credit">
          © {new Date().getFullYear()} Jaden Simmons
        </p>
      </div>
    </footer>
  )
}
