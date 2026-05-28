'use client';

import { useState } from 'react';
import Link from 'next/link';

const BENEFITS = [
  ['Access to clients', 'Managed flow of pre-screened, ready-to-pay clients in your service area.'],
  ['Business visibility', 'A profile your associate can show to clients — your work, your ratings, your face.'],
  ['Priority referrals', 'Top-rated providers see the best jobs first. Quality compounds.'],
  ['Flexible work', "Accept what fits. Decline what doesn't. No exclusivity."],
  ['Real support', 'A Mikanya associate has your back if a job gets complicated.'],
  ['Steady earnings', "We don't keep you waiting on payouts — settled per job via M-Pesa."],
] as const;

const TIERS = [
  {
    name: 'Apprentice',
    price: 'KES 800',
    period: '/ month',
    tag: 'New to the network',
    popular: false,
    features: [
      'Up to 8 referrals per month',
      'Profile listed within your category',
      'Onboarding & ID verification',
      'M-Pesa job settlement',
    ],
  },
  {
    name: 'Trusted',
    price: 'KES 1,800',
    period: '/ month',
    tag: 'Most providers',
    popular: true,
    features: [
      'Unlimited referrals in your area',
      'Profile boosted on category pages',
      'Priority on same-day requests',
      'Tools subsidies (uniforms, kit)',
      'Dedicated associate for support',
    ],
  },
  {
    name: 'Featured',
    price: 'KES 3,500',
    period: '/ month',
    tag: 'Top performers',
    popular: false,
    features: [
      'First-pick on premium requests',
      'Featured on Home & category cards',
      'Free quarterly skills upgrade',
      'Insurance support for site work',
      'Quarterly business review',
    ],
  },
] as const;

const SERVICE_LIST = [
  'Painting', 'Laundry services', 'Masonry', 'Electrician services', 'Car detailing',
  'Drivers', 'Motorcycle riders', 'Food delivery', 'Crew and labour support', 'Sand delivery',
  'Shopping & delivery', 'Attorney services', 'Hair specialists', 'Nail specialists',
  'Catering services', 'Chef / cook services', 'Cleaning services', 'Plumbing',
  'Moving assistance', 'Day nanny',
];

const FAQ = [
  ['How long does verification take?', 'Most providers are onboarded within 5 working days. We meet you, check ID, references and a sample of past work.'],
  ['Do I sign an exclusivity contract?', 'No. You can keep your existing clients and accept other platforms in parallel.'],
  ['How do payouts work?', 'Clients pay via M-Pesa, card or cash. We settle to your provider account within 24 hours of job completion, minus the commission.'],
  ['What does the commission look like?', '10–18% depending on category and tier. Always disclosed before you accept a job.'],
  ["Can I pause my subscription?", "Yes. Pause anytime — you stay on the system but won't receive new referrals until you resume."],
] as const;

function FaqItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="card" style={{ padding: 0 }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '100%',
          textAlign: 'left',
          background: 'transparent',
          border: 0,
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          cursor: 'pointer',
        }}
      >
        <span style={{ fontWeight: 600, fontSize: 16, letterSpacing: '-0.01em' }}>{q}</span>
        <span
          style={{
            width: 28,
            height: 28,
            borderRadius: 999,
            background: open ? 'var(--zinc-900)' : 'var(--paper)',
            color: open ? 'white' : 'var(--zinc-700)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 14,
            flexShrink: 0,
          }}
        >
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div style={{ padding: '0 24px 22px', fontSize: 14, lineHeight: 1.65, color: 'var(--zinc-700)' }}>
          {a}
        </div>
      )}
    </div>
  );
}

function ProviderApply() {
  const [state, setState] = useState({ name: '', phone: '', service: '', area: '', years: '1-3' });
  const [sent, setSent] = useState(false);
  const update = (k: keyof typeof state, v: string) => setState((s) => ({ ...s, [k]: v }));

  return (
    <section className="container" style={{ marginTop: 100 }} id="provider-apply">
      <div className="card grid-apply" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: 40, background: 'var(--zinc-900)', color: 'white' }}>
          <span className="eyebrow-pill" style={{ background: 'rgba(255,255,255,0.95)', color: 'var(--zinc-900)' }}>
            <span className="dot" />
            Apply to join
          </span>
          <h3 className="display display-3" style={{ marginTop: 24, color: 'white' }}>
            One short form. A real call within two days.
          </h3>
          <p style={{ marginTop: 16, fontSize: 14.5, lineHeight: 1.65, color: 'rgba(255,255,255,0.7)', maxWidth: 360 }}>
            Tell us about yourself. If you look like a fit, an associate will arrange a short interview and review your work.
          </p>
          <div className="col" style={{ gap: 14, marginTop: 28 }}>
            {['Bring ID and KRA pin', 'Two recent work references', 'A few photos of past jobs'].map((item) => (
              <div key={item} className="row" style={{ gap: 12, fontSize: 13.5 }}>
                <span style={{ color: 'var(--amber-400)', fontWeight: 700 }}>✓</span>
                <span style={{ opacity: 0.9 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: 40 }}>
          {sent ? (
            <div className="col" style={{ gap: 12, alignItems: 'flex-start' }}>
              <div
                className="center"
                style={{ width: 56, height: 56, borderRadius: 999, background: 'var(--amber-500)', color: 'white', fontSize: 24 }}
              >
                ✓
              </div>
              <h4 style={{ fontSize: 22, fontWeight: 600, margin: 0, letterSpacing: '-0.01em' }}>
                Application received
              </h4>
              <p className="muted" style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                We&apos;ll be in touch with {state.name || 'you'} on {state.phone || 'your number'} within 48 hours.
              </p>
              <button
                className="btn btn-ghost"
                onClick={() => { setSent(false); setState({ name: '', phone: '', service: '', area: '', years: '1-3' }); }}
              >
                Submit another
              </button>
            </div>
          ) : (
            <div className="col" style={{ gap: 16 }}>
              <div className="field">
                <label>Full name</label>
                <input value={state.name} onChange={(e) => update('name', e.target.value)} placeholder="Your name" />
              </div>
              <div className="field">
                <label>Phone (WhatsApp)</label>
                <input value={state.phone} onChange={(e) => update('phone', e.target.value)} placeholder="0714 579 360" />
              </div>
              <div className="field">
                <label>Service you offer</label>
                <select value={state.service} onChange={(e) => update('service', e.target.value)}>
                  <option value="">Pick a category…</option>
                  {SERVICE_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="grid-form-pair">
                <div className="field">
                  <label>Service area</label>
                  <input value={state.area} onChange={(e) => update('area', e.target.value)} placeholder="e.g. Westlands" />
                </div>
                <div className="field">
                  <label>Years of experience</label>
                  <select value={state.years} onChange={(e) => update('years', e.target.value)}>
                    <option>Less than 1</option>
                    <option>1-3</option>
                    <option>3-5</option>
                    <option>5-10</option>
                    <option>10+</option>
                  </select>
                </div>
              </div>
              <button
                className="btn btn-amber btn-lg"
                disabled={!state.name || !state.phone || !state.service}
                style={!state.name || !state.phone || !state.service ? { opacity: 0.4, pointerEvents: 'none' } : {}}
                onClick={() => setSent(true)}
              >
                Submit application
                <span className="arrow-icon" />
              </button>
              <span className="hint" style={{ color: 'var(--zinc-500)', fontSize: 12 }}>
                You&apos;ll receive a confirmation SMS, then a call from an associate.
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Provider() {
  return (
    <main className="page-enter">
      {/* Hero */}
      <section className="container" style={{ paddingTop: 8 }}>
        <div className="card grid-provider-hero" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: 'clamp(24px, 5vw, 48px)' }}>
            <span className="eyebrow-pill">
              <span className="dot" />
              Join as a provider
            </span>
            <h1 className="display display-2" style={{ marginTop: 24 }}>
              Get clients<br />without the hustle.
            </h1>
            <p className="muted" style={{ fontSize: 16, lineHeight: 1.65, marginTop: 20, maxWidth: 480 }}>
              Painters, plumbers, drivers, chefs, stylists — if you do solid work, we&apos;ll keep your week busy. Apply once, get verified, and start receiving referrals from Mikanya associates.
            </p>
            <div className="row" style={{ marginTop: 28, gap: 10 }}>
              <a href="#provider-apply" className="btn btn-amber btn-lg">
                Apply now
                <span className="arrow-icon" />
              </a>
              <a href="#provider-tiers" className="btn btn-ghost btn-lg">
                See pricing
              </a>
            </div>
            <div className="row" style={{ gap: 28, marginTop: 36 }}>
              {[['1,200+', 'Active providers'], ['KES 64k', 'Avg. monthly earnings'], ['24h', 'Avg. payout']].map(
                ([n, l]) => (
                  <div key={l}>
                    <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: '-0.02em' }}>{n}</div>
                    <div className="muted" style={{ fontSize: 12 }}>{l}</div>
                  </div>
                )
              )}
            </div>
          </div>
          <div
            className="provider-hero-image"
            style={{
              minHeight: 'clamp(240px, 40vw, 460px)',
              background: 'repeating-linear-gradient(135deg, #ece6d5 0 12px, #e2dcc8 12px 24px)',
            }}
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="container" style={{ marginTop: 100 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <span className="eyebrow-pill" style={{ width: 'fit-content' }}>
            <span className="dot" />
            Why join
          </span>
          <div className="grid-section-header">
            <h2 className="section-h">Six things providers tell us they like.</h2>
            <p className="muted" style={{ fontSize: 15, lineHeight: 1.6, margin: 0 }}>
              The honest reasons established trades, drivers and home-service crews choose to work through Mikanya rather than alone.
            </p>
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 12,
            marginTop: 36,
          }}
        >
          {BENEFITS.map(([t, b], i) => (
            <div key={t} className="card" style={{ padding: 24 }}>
              <div className="row between">
                <span className="step-num">0{i + 1}</span>
                <span
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 999,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--amber-500)',
                    color: '#1a1407',
                    fontWeight: 600,
                    fontSize: 13,
                  }}
                >
                  +
                </span>
              </div>
              <div style={{ marginTop: 22, fontWeight: 600, fontSize: 17, letterSpacing: '-0.01em' }}>{t}</div>
              <p className="muted" style={{ fontSize: 13.5, lineHeight: 1.6, marginTop: 8, marginBottom: 0 }}>
                {b}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="container" style={{ marginTop: 100 }} id="provider-tiers">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <span className="eyebrow-pill" style={{ width: 'fit-content' }}>
            <span className="dot" />
            Provider pricing
          </span>
          <div className="grid-section-header">
            <h2 className="section-h">Simple monthly subscription.</h2>
            <p className="muted" style={{ fontSize: 15, lineHeight: 1.6, margin: 0 }}>
              We earn from a small commission on completed jobs — your subscription keeps your profile active and unlocks referrals.
            </p>
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 16,
            marginTop: 36,
            alignItems: 'stretch',
          }}
        >
          {TIERS.map((t) => (
            <div
              key={t.name}
              className="card"
              style={{
                padding: 28,
                border: t.popular ? '1px solid var(--zinc-900)' : '1px solid rgba(0,0,0,0.05)',
                background: t.popular ? 'linear-gradient(180deg, #ffffff 0%, #fef9ed 100%)' : 'white',
                position: 'relative',
              }}
            >
              {t.popular && (
                <span
                  style={{
                    position: 'absolute',
                    top: -12,
                    right: 20,
                    background: 'var(--zinc-900)',
                    color: 'var(--amber-400)',
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    padding: '6px 12px',
                    borderRadius: 999,
                    textTransform: 'uppercase',
                  }}
                >
                  Most chosen
                </span>
              )}
              <div style={{ fontWeight: 600, fontSize: 18, letterSpacing: '-0.01em' }}>{t.name}</div>
              <div className="muted" style={{ fontSize: 13, marginTop: 4 }}>{t.tag}</div>
              <div style={{ marginTop: 24, display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span style={{ fontSize: 36, fontWeight: 600, letterSpacing: '-0.02em' }}>{t.price}</span>
                <span className="muted" style={{ fontSize: 13 }}>{t.period}</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {t.features.map((f) => (
                  <li key={f} className="row" style={{ gap: 10, fontSize: 13.5, color: 'var(--zinc-800)' }}>
                    <span style={{ color: 'var(--amber-600)', fontWeight: 600 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#provider-apply"
                className={t.popular ? 'btn btn-dark' : 'btn btn-ghost'}
                style={{ width: '100%', marginTop: 24, display: 'flex' }}
              >
                Choose {t.name}
                <span className="arrow-icon" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <ProviderApply />

      {/* FAQ */}
      <section className="container" style={{ marginTop: 100 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span className="eyebrow-pill" style={{ width: 'fit-content' }}>
            <span className="dot" />
            Provider FAQ
          </span>
          <h2 className="section-h">What to expect, plainly.</h2>
        </div>
        <div className="col" style={{ gap: 8, marginTop: 36, maxWidth: 880 }}>
          {FAQ.map(([q, a], i) => (
            <FaqItem key={q} q={q} a={a} defaultOpen={i === 0} />
          ))}
        </div>
      </section>
    </main>
  );
}
