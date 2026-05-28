'use client';

import { useState } from 'react';

function ContactMethod({
  kind,
  value,
  sub,
  href,
  accent,
}: {
  kind: string;
  value: string;
  sub?: string;
  href?: string;
  accent?: boolean;
}) {
  const inner = (
    <div
      className="card"
      style={{
        padding: 22,
        display: 'flex',
        alignItems: 'center',
        gap: 18,
        background: accent ? 'linear-gradient(180deg, #ffffff 0%, #fef9ed 100%)' : 'white',
        cursor: href ? 'pointer' : 'default',
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 14,
          background: accent ? 'var(--amber-500)' : 'var(--paper)',
          color: accent ? '#1a1407' : 'var(--zinc-900)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
          fontSize: 18,
        }}
      >
        {kind[0]}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="step-num">{kind}</div>
        <div style={{ fontWeight: 600, fontSize: 16, letterSpacing: '-0.01em', marginTop: 2 }}>{value}</div>
        {sub && <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>{sub}</div>}
      </div>
      {href && <span style={{ color: 'var(--zinc-500)' }}>↗</span>}
    </div>
  );
  return href ? <a href={href} style={{ display: 'block' }}>{inner}</a> : inner;
}

const SOCIAL_PILL: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px 18px',
  background: 'white',
  borderRadius: 999,
  border: '1px solid rgba(0,0,0,0.06)',
  fontSize: 13,
  fontWeight: 500,
  color: 'var(--zinc-800)',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const update = (k: keyof typeof form, v: string) => setForm((s) => ({ ...s, [k]: v }));

  return (
    <main className="page-enter">
      <section className="container" style={{ paddingTop: 8 }}>
        <div className="grid-2" style={{ alignItems: 'start', gap: 'clamp(32px, 6vw, 64px)' }}>
          {/* Left: info */}
          <div>
            <span className="eyebrow-pill">
              <span className="dot" />
              Contact us
            </span>
            <h1 className="display display-2" style={{ marginTop: 24 }}>
              Talk to a real<br />Mikanya associate.
            </h1>
            <p className="muted" style={{ fontSize: 16, lineHeight: 1.65, marginTop: 20, maxWidth: 460 }}>
              For a service request, the form on the request page is fastest. For everything else — partnerships, press, complaints, careers — these channels are open.
            </p>

            <div className="col" style={{ gap: 12, marginTop: 32 }}>
              <ContactMethod
                kind="Call us"
                value="0714 579 360"
                href="tel:+254714579360"
                sub="Mon–Sat · 07:00–20:00 EAT"
              />
              <ContactMethod
                kind="WhatsApp"
                value="0714 579 360"
                href="https://wa.me/254714579360"
                sub="Replies within 15 minutes during hours"
                accent
              />
              <ContactMethod
                kind="Email"
                value="mika@mikanyalogistics.com"
                href="mailto:mika@mikanyalogistics.com"
                sub="Reply within one working day"
              />
              <ContactMethod
                kind="Office"
                value="Westlands, Nairobi"
                sub="Visits by appointment only"
              />
            </div>

            <div className="row" style={{ gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
              <a href="#" style={SOCIAL_PILL}>Instagram</a>
              <a href="#" style={SOCIAL_PILL}>Facebook</a>
              <a href="#" style={SOCIAL_PILL}>TikTok</a>
              <a href="#" style={SOCIAL_PILL}>LinkedIn</a>
            </div>
          </div>

          {/* Right: form + map */}
          <div className="col" style={{ gap: 16 }}>
            <div className="card" style={{ padding: 32 }}>
              {sent ? (
                <div className="col" style={{ gap: 14, alignItems: 'flex-start' }}>
                  <div
                    className="center"
                    style={{ width: 56, height: 56, borderRadius: 999, background: 'var(--amber-500)', color: 'white', fontSize: 24 }}
                  >
                    ✓
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.01em', margin: 0 }}>Message sent</h3>
                  <p className="muted" style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                    We&apos;ll reply to {form.email || 'you'} within one working day.
                  </p>
                  <button
                    className="btn btn-ghost"
                    onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', message: '' }); }}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <div className="col" style={{ gap: 16 }}>
                  <div style={{ fontWeight: 600, fontSize: 18, letterSpacing: '-0.01em' }}>Send us a message</div>
                  <div className="field">
                    <label>Your name</label>
                    <input value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your name" />
                  </div>
                  <div className="grid-form-pair">
                    <div className="field">
                      <label>Email</label>
                      <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" />
                    </div>
                    <div className="field">
                      <label>Phone <span style={{ color: 'var(--zinc-500)' }}>· optional</span></label>
                      <input value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="0714 579 360" />
                    </div>
                  </div>
                  <div className="field">
                    <label>Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      placeholder="What's on your mind?"
                    />
                  </div>
                  <button
                    className="btn btn-amber"
                    disabled={!form.name || !form.email || form.message.length < 5}
                    style={!form.name || !form.email || form.message.length < 5 ? { opacity: 0.4, pointerEvents: 'none' } : {}}
                    onClick={() => setSent(true)}
                  >
                    Send message
                    <span className="arrow-icon" />
                  </button>
                </div>
              )}
            </div>

            {/* Map placeholder */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div
                style={{
                  position: 'relative',
                  height: 240,
                  background: `radial-gradient(circle at 60% 50%, rgba(243,162,58,0.18) 0%, transparent 30%),
                                linear-gradient(180deg, #efece2 0%, #e2dcc8 100%)`,
                }}
              >
                <svg
                  viewBox="0 0 400 200"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.45 }}
                  aria-hidden="true"
                >
                  <path d="M 0 60 L 180 90 L 320 70 L 400 110" stroke="#bda57a" strokeWidth="1.2" fill="none" />
                  <path d="M 60 0 L 80 70 L 70 200" stroke="#bda57a" strokeWidth="1.2" fill="none" />
                  <path d="M 0 140 L 140 150 L 200 130 L 400 180" stroke="#bda57a" strokeWidth="1.2" fill="none" />
                  <path d="M 220 0 L 240 80 L 230 200" stroke="#bda57a" strokeWidth="1.2" fill="none" />
                  <path d="M 320 0 L 320 200" stroke="#bda57a" strokeWidth="1.2" fill="none" />
                </svg>
                <div
                  style={{
                    position: 'absolute',
                    left: '60%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: 999,
                      background: 'var(--amber-500)',
                      boxShadow: '0 0 0 8px rgba(243,162,58,0.25), 0 0 0 16px rgba(243,162,58,0.15)',
                    }}
                  />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: 20,
                    bottom: 16,
                    background: 'white',
                    padding: '8px 14px',
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 500,
                    boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
                  }}
                >
                  Westlands, Nairobi · Kenya
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
