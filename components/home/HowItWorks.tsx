import Link from 'next/link';

const STEPS = [
  ['Client submits a request', 'Tell us what you need — text, voice note or the form. Photos welcome.'],
  ['An associate reviews', 'A real Mikanya teammate checks scope, urgency and location.'],
  ['Provider is assigned', 'We match a vetted provider with the right skill, gear and availability.'],
  ['Service is delivered', 'You meet your named provider; they do the work; the associate stays available.'],
  ['You rate the experience', 'Your rating routes future work — and rewards providers who do it well.'],
] as const;

export default function HowItWorks() {
  return (
    <section className="container" style={{ marginTop: 120 }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(260px, 1fr) minmax(0, 2fr)',
          gap: 48,
        }}
      >
        <div>
          <span className="eyebrow-pill">
            <span className="dot" />
            How it works
          </span>
          <h2 className="section-h" style={{ marginTop: 20 }}>
            Five steps,<br />fully managed.
          </h2>
          <p className="muted" style={{ fontSize: 15, marginTop: 16, lineHeight: 1.6, maxWidth: 360 }}>
            From the second your request lands, an associate is handling it — until the job is signed off.
          </p>
          <Link href="/request" className="btn btn-dark" style={{ marginTop: 24, display: 'inline-flex' }}>
            Submit a request
            <span className="arrow-icon" />
          </Link>
        </div>

        <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {STEPS.map(([t, b], i) => (
            <li
              key={t}
              style={{
                padding: '24px 4px',
                borderTop: '1px solid rgba(0,0,0,0.08)',
                display: 'grid',
                gridTemplateColumns: '60px 1fr auto',
                gap: 16,
                alignItems: 'start',
              }}
            >
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 28,
                  color: 'var(--amber-500)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}
              >
                0{i + 1}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 19, letterSpacing: '-0.01em' }}>{t}</div>
                <p className="muted" style={{ fontSize: 14, lineHeight: 1.6, marginTop: 6, marginBottom: 0 }}>
                  {b}
                </p>
              </div>
              <div style={{ paddingTop: 6 }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    borderRadius: 999,
                    border: '1px solid rgba(0,0,0,0.1)',
                    color: 'var(--zinc-500)',
                    fontSize: 14,
                  }}
                >
                  ↗
                </span>
              </div>
            </li>
          ))}
          <li style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: 4 }} />
        </ol>
      </div>
    </section>
  );
}
