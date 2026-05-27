import Link from 'next/link';

const STATS = [
  ['1,200+', 'Verified providers'],
  ['18', 'Service categories'],
  ['98%', 'Same-day assignment'],
  ['4.8★', 'Avg. client rating'],
] as const;

const VALUES = [
  ['Managed, not listed', 'A real associate reviews every request — no faceless directory, no algorithm guessing what you meant.'],
  ['Verified before referred', 'Background checks, references, sample work, ID. We meet most providers in person before they enter the network.'],
  ['Quality is followed up', "We don't disappear after the booking. The same associate stays on the thread until you say the job is done."],
  ['Fair pricing, fair pay', 'Clients see costs up front. Providers keep what they earn — minus a transparent commission, no hidden cuts.'],
] as const;

const TEAM = [
  ['Achieng Wanjiku', 'Lead associate', 30],
  ['Brian Mwangi', 'Operations', 70],
  ['Esther Njoki', 'Provider relations', 110],
  ['Samuel Kiplangat', 'Quality & follow-up', 150],
] as const;

function initials(name: string) {
  return name.split(' ').map((s) => s[0]).join('').slice(0, 2);
}

export default function About() {
  return (
    <main className="page-enter">
      {/* Hero */}
      <section className="container" style={{ paddingTop: 8, marginBottom: 80 }}>
        <div
          style={{
            position: 'relative',
            borderRadius: 32,
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #2a3a52 0%, #1b2233 100%)',
            padding: '64px 48px',
            color: 'white',
            minHeight: 440,
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 100%)',
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 880 }}>
            <span className="eyebrow-pill" style={{ background: 'rgba(255,255,255,0.92)' }}>
              <span className="dot" />
              About Mikanya Logistics
            </span>
            <h1 className="display display-2 on-image" style={{ marginTop: 24 }}>
              Helping Kenyans access trusted service providers — quickly, and safely.
            </h1>
            <p
              className="on-image"
              style={{ maxWidth: 640, fontSize: 17, lineHeight: 1.6, marginTop: 20, opacity: 0.94 }}
            >
              We&apos;re a managed marketplace, not a directory. Submit what you need and a Mikanya associate reviews the request, picks the right provider, and stays with you until the work is signed off.
            </p>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="container">
        <div className="card" style={{ padding: '8px', overflow: 'hidden' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            }}
          >
            {STATS.map(([n, l], i) => (
              <div
                key={l}
                style={{
                  padding: '28px 24px',
                  borderRight: i < STATS.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                }}
              >
                <div
                  style={{
                    fontSize: 44,
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                  }}
                >
                  {n}
                </div>
                <div className="muted" style={{ fontSize: 13, marginTop: 8 }}>
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="container" style={{ marginTop: 100 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)',
            gap: 56,
            alignItems: 'start',
          }}
        >
          <div>
            <span className="eyebrow-pill">
              <span className="dot" />
              Our mission
            </span>
            <h2 className="section-h" style={{ marginTop: 20 }}>
              Make it normal to call a stranger to your home.
            </h2>
          </div>
          <div className="col" style={{ gap: 18, color: 'var(--zinc-700)', fontSize: 16, lineHeight: 1.7 }}>
            <p style={{ margin: 0 }}>
              In most Kenyan cities, finding a trustworthy painter, electrician or driver still happens by WhatsApp forwards and &ldquo;do you know someone?&rdquo; calls. The good providers are out there — but they&apos;re invisible to anyone outside their immediate network.
            </p>
            <p style={{ margin: 0 }}>
              Mikanya exists to make that introduction safe and predictable. We meet providers in person, check their work and ID, take responsibility for the match, and stay close after the job. Clients get the relief of a managed service. Providers get steady, well-paying work and a brand to stand behind.
            </p>
            <p style={{ margin: 0 }}>
              We started in Nairobi in 2024. Today the network covers homes, businesses and events across the city — and we&apos;re expanding to Mombasa, Nakuru and Kisumu through 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container" style={{ marginTop: 100 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr)', gap: 24 }}>
          <div>
            <span className="eyebrow-pill">
              <span className="dot" />
              What we believe
            </span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0,2fr) minmax(0,1fr)',
              gap: 32,
              alignItems: 'end',
            }}
          >
            <h2 className="section-h">Four operating principles.</h2>
            <p className="muted" style={{ fontSize: 15, lineHeight: 1.6, margin: 0 }}>
              Everything below sits behind the experience you get when you tap &lsquo;Request a service&rsquo;. None of it is window dressing.
            </p>
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
            marginTop: 36,
          }}
        >
          {VALUES.map(([t, b], i) => (
            <div key={t} className="card" style={{ padding: 28 }}>
              <div className="row between">
                <span className="step-num">PRINCIPLE 0{i + 1}</span>
                <span style={{ width: 10, height: 10, borderRadius: 999, background: 'var(--amber-500)' }} />
              </div>
              <div style={{ marginTop: 24, fontWeight: 600, fontSize: 20, letterSpacing: '-0.01em' }}>{t}</div>
              <p className="muted" style={{ fontSize: 14, lineHeight: 1.6, marginTop: 10, marginBottom: 0 }}>{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="container" style={{ marginTop: 100 }}>
        <div
          className="card"
          style={{
            padding: 40,
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: 48,
            alignItems: 'center',
          }}
        >
          <div>
            <span className="eyebrow-pill">
              <span className="dot" />
              The associates
            </span>
            <h3
              className="section-h"
              style={{ marginTop: 20, fontSize: 'clamp(28px, 3vw, 40px)' }}
            >
              Real people, on the other end of every request.
            </h3>
            <p className="muted" style={{ fontSize: 15, lineHeight: 1.7, marginTop: 16 }}>
              Mikanya associates are full-time employees — not gig workers, not chatbots. Each one handles a portfolio of clients and providers, and they&apos;re measured on how well the matches actually go.
            </p>
            <div className="row" style={{ marginTop: 24, gap: 10 }}>
              <Link href="/contact" className="btn btn-dark">
                Talk to an associate
                <span className="arrow-icon" />
              </Link>
              <Link href="/provider" className="btn btn-ghost">
                Become a provider
              </Link>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {TEAM.map(([n, r, hue], i) => (
              <div key={n} className="card" style={{ padding: 16, background: 'var(--paper)' }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 999,
                    background: `linear-gradient(135deg, hsl(${hue}, 50%, 60%), hsl(${hue}, 60%, 40%))`,
                    color: 'white',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {initials(n)}
                </div>
                <div style={{ marginTop: 12, fontWeight: 600, fontSize: 14 }}>{n}</div>
                <div className="muted" style={{ fontSize: 12 }}>{r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
