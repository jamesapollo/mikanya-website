import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 40,
            paddingBottom: 32,
          }}
        >
          <div className="col" style={{ gap: 16 }}>
            <Logo />
            <p className="muted" style={{ fontSize: 13, lineHeight: 1.6, margin: 0, maxWidth: 280 }}>
              Trusted tasks. Reliable providers. Professionally managed — across Kenya and East Africa.
            </p>
          </div>
          <div className="col" style={{ gap: 10 }}>
            <div className="label-eyebrow">Company</div>
            <FootLink href="/">Home</FootLink>
            <FootLink href="/about">About</FootLink>
            <FootLink href="/services">Services</FootLink>
            <FootLink href="/contact">Contact</FootLink>
          </div>
          <div className="col" style={{ gap: 10 }}>
            <div className="label-eyebrow">For clients</div>
            <FootLink href="/request">Request a service</FootLink>
            <FootLink href="/services">Browse services</FootLink>
            <FootLink href="/contact">Talk to an associate</FootLink>
          </div>
          <div className="col" style={{ gap: 10 }}>
            <div className="label-eyebrow">For providers</div>
            <FootLink href="/provider">Join as a provider</FootLink>
            <FootLink href="/provider">Benefits</FootLink>
            <FootLink href="/provider">Pricing</FootLink>
          </div>
          <div className="col" style={{ gap: 10 }}>
            <div className="label-eyebrow">Reach us</div>
            <a className="muted" style={{ fontSize: 13 }} href="tel:+254700000000">+254 700 000 000</a>
            <a className="muted" style={{ fontSize: 13 }} href="https://wa.me/254700000000">WhatsApp</a>
            <a className="muted" style={{ fontSize: 13 }} href="mailto:hello@mikanya.co.ke">hello@mikanya.co.ke</a>
            <span className="muted" style={{ fontSize: 13 }}>Nairobi, Kenya</span>
          </div>
        </div>
        <div
          className="row between"
          style={{
            borderTop: '1px solid rgba(0,0,0,0.06)',
            paddingTop: 24,
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <span className="tiny muted">© 2026 Mikanya Logistics Ltd.</span>
          <div className="row" style={{ gap: 18 }}>
            <a className="tiny muted" href="#">Instagram</a>
            <a className="tiny muted" href="#">Facebook</a>
            <a className="tiny muted" href="#">Terms</a>
            <a className="tiny muted" href="#">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FootLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} style={{ fontSize: 14, color: 'var(--zinc-800)' }}>
      {children}
    </Link>
  );
}
