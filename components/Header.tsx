'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/request', label: 'Request' },
  { href: '/provider', label: 'Providers' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container row between" style={{ gap: 24 }}>
        <Link href="/">
          <Logo />
        </Link>
        <nav className="nav-pill hide-mobile">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={pathname === n.href ? 'active' : ''}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="row" style={{ gap: 10 }}>
          <Link href="/request" className="btn btn-amber btn-sm hide-mobile">
            Request a service
            <span className="arrow-icon" />
          </Link>
          <button
            className="btn btn-ghost btn-sm hide-desktop"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="container hide-desktop" style={{ marginTop: 12 }}>
          <div className="card" style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                style={{
                  padding: '12px 14px',
                  borderRadius: 12,
                  background: pathname === n.href ? 'var(--zinc-900)' : 'transparent',
                  color: pathname === n.href ? 'white' : 'var(--zinc-800)',
                  fontWeight: 500,
                  fontSize: 14,
                }}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
