'use client';

import { useState } from 'react';
import Link from 'next/link';

const URGENCY = [
  ['standard', 'Standard', 'Today / tomorrow'],
  ['priority', 'Priority', 'Within 4 hours'],
  ['emergency', 'Emergency', 'Right now'],
] as const;

const PAYMENT = ['M-Pesa', 'Card', 'Cash on completion', 'Bank transfer'];

const ALL_SERVICES = [
  'Painting', 'Laundry services', 'Masonry', 'Electrician services', 'Car detailing',
  'Drivers', 'Motorcycle riders', 'Food delivery', 'Crew and labour support', 'Sand delivery',
  'Attorney services', 'Hair specialists', 'Nail specialists', 'Catering services',
  'Chef / cook services', 'Cleaning services', 'Plumbing', 'Moving assistance',
];

const STEPS = [
  { id: 1, label: 'What & where' },
  { id: 2, label: 'When & how' },
  { id: 3, label: 'Your details' },
  { id: 4, label: 'Confirm' },
];

type FormData = {
  service: string;
  location: string;
  description: string;
  photos: { name: string; size: number }[];
  date: string;
  time: string;
  budget: string;
  urgency: string;
  payment: string;
  name: string;
  email: string;
  phone: string;
};

function Summary({ data }: { data: FormData }) {
  const rows = [
    ['Service', data.service || '—'],
    ['Location', data.location || '—'],
    ['Date / time', `${data.date || '—'} · ${data.time}`],
    ['Urgency', URGENCY.find(([id]) => id === data.urgency)?.[1] ?? '—'],
    ['Budget', data.budget ? `KES ${data.budget}` : '—'],
    ['Payment', data.payment],
    ['Contact', `${data.name || '—'} · ${data.phone || '—'}`],
    ['Photos', data.photos.length ? `${data.photos.length} attached` : 'None'],
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {rows.map(([k, v], i) => (
        <div
          key={k}
          className="row between"
          style={{
            padding: '12px 0',
            borderTop: i === 0 ? 'none' : '1px solid rgba(0,0,0,0.06)',
            fontSize: 13.5,
            gap: 16,
          }}
        >
          <span className="muted">{k}</span>
          <span style={{ fontWeight: 500, textAlign: 'right' }}>{v}</span>
        </div>
      ))}
      {data.description && (
        <div
          style={{
            marginTop: 12,
            paddingTop: 12,
            borderTop: '1px solid rgba(0,0,0,0.06)',
            fontSize: 13.5,
          }}
        >
          <div className="muted" style={{ marginBottom: 6 }}>Description</div>
          <div style={{ color: 'var(--zinc-800)', lineHeight: 1.55 }}>{data.description}</div>
        </div>
      )}
    </div>
  );
}

function PhotoDrop({
  photos,
  onChange,
}: {
  photos: FormData['photos'];
  onChange: (v: FormData['photos']) => void;
}) {
  const onFiles = (files: FileList | null) => {
    if (!files) return;
    const list = Array.from(files).map((f) => ({ name: f.name, size: f.size }));
    onChange([...photos, ...list].slice(0, 6));
  };

  return (
    <div>
      <label
        style={{
          display: 'block',
          padding: 28,
          borderRadius: 18,
          border: '1.5px dashed rgba(0,0,0,0.18)',
          background: 'var(--paper)',
          textAlign: 'center',
          cursor: 'pointer',
        }}
      >
        <div style={{ fontSize: 26, lineHeight: 1, color: 'var(--zinc-500)' }}>+</div>
        <div style={{ marginTop: 8, fontSize: 13.5, fontWeight: 500 }}>Drop photos or browse</div>
        <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>Up to 6 · JPG / PNG / HEIC</div>
        <input
          type="file"
          accept="image/*"
          multiple
          style={{ display: 'none' }}
          onChange={(e) => onFiles(e.target.files)}
        />
      </label>
      {photos.length > 0 && (
        <div className="chip-strip" style={{ marginTop: 12 }}>
          {photos.map((p, i) => (
            <span key={i} className="chip">
              <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--amber-500)' }} />
              {p.name}
              <button
                onClick={() => onChange(photos.filter((_, idx) => idx !== i))}
                style={{ background: 'transparent', border: 0, color: 'var(--zinc-500)', cursor: 'pointer' }}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function RequestSubmitted({ data, reset }: { data: FormData; reset: () => void }) {
  const ref = `MK-${Math.floor(Math.random() * 9000) + 1000}`;
  return (
    <main className="container page-enter" style={{ paddingTop: 60, paddingBottom: 60 }}>
      <div
        className="card"
        style={{
          padding: 48,
          maxWidth: 720,
          margin: '0 auto',
          background: 'linear-gradient(180deg, #ffffff 0%, #fef9ed 100%)',
        }}
      >
        <div
          className="center"
          style={{
            width: 64,
            height: 64,
            borderRadius: 999,
            background: 'var(--amber-500)',
            margin: '0 auto',
            color: 'white',
            fontSize: 28,
          }}
        >
          ✓
        </div>
        <h2 className="display display-3" style={{ textAlign: 'center', marginTop: 24 }}>
          Request sent — an associate is on it.
        </h2>
        <p className="muted" style={{ textAlign: 'center', fontSize: 15, marginTop: 12, lineHeight: 1.6 }}>
          Reference <strong style={{ color: 'var(--zinc-900)' }}>{ref}</strong> · You&apos;ll get a confirmation SMS at {data.phone}. Expect a call back within 15 minutes.
        </p>
        <div className="card" style={{ padding: 22, background: 'var(--paper)', marginTop: 28 }}>
          <Summary data={data} />
        </div>
        <div className="row" style={{ marginTop: 24, gap: 10, justifyContent: 'center' }}>
          <button className="btn btn-dark" onClick={reset}>
            Submit another request
          </button>
          <Link className="btn btn-ghost" href="/">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function Request() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>({
    service: '',
    location: '',
    description: '',
    photos: [],
    date: '',
    time: 'Morning (08:00 - 12:00)',
    budget: '',
    urgency: 'standard',
    payment: 'M-Pesa',
    name: '',
    email: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const update = (k: keyof FormData, v: FormData[keyof FormData]) =>
    setData((d) => ({ ...d, [k]: v }));

  const canNext = () => {
    if (step === 1) return data.service && data.location && data.description.length > 10;
    if (step === 2) return data.date && data.budget;
    if (step === 3) return data.name && data.phone.length >= 7;
    return true;
  };

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  if (submitted)
    return (
      <RequestSubmitted
        data={data}
        reset={() => {
          setSubmitted(false);
          setStep(1);
          setData({ service: '', location: '', description: '', photos: [], date: '', time: 'Morning (08:00 - 12:00)', budget: '', urgency: 'standard', payment: 'M-Pesa', name: '', email: '', phone: '' });
        }}
      />
    );

  return (
    <main className="page-enter">
      <section className="container" style={{ paddingTop: 8 }}>
        <div className="grid-sidebar">
          {/* Left rail */}
          <div style={{ position: 'sticky', top: 100, alignSelf: 'start' }}>
            <span className="eyebrow-pill">
              <span className="dot" />
              Request a service
            </span>
            <h1 className="section-h" style={{ marginTop: 20 }}>
              Tell us<br />what you need.
            </h1>
            <p className="muted" style={{ fontSize: 15, lineHeight: 1.65, marginTop: 18 }}>
              Takes about two minutes. An associate will call back within fifteen minutes during business hours.
            </p>

            <ol style={{ listStyle: 'none', padding: 0, margin: '32px 0 0', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {STEPS.map((s) => {
                const active = s.id === step;
                const done = s.id < step;
                return (
                  <li key={s.id} className="row" style={{ gap: 14, padding: '14px 0', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                    <span
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 999,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 12,
                        fontWeight: 600,
                        background: active ? 'var(--zinc-900)' : done ? 'var(--amber-500)' : 'transparent',
                        color: active || done ? 'white' : 'var(--zinc-500)',
                        border: active || done ? 'none' : '1px solid rgba(0,0,0,0.15)',
                      }}
                    >
                      {done ? '✓' : s.id}
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: active ? 600 : 500,
                        color: active ? 'var(--zinc-900)' : done ? 'var(--zinc-700)' : 'var(--zinc-500)',
                      }}
                    >
                      {s.label}
                    </span>
                  </li>
                );
              })}
              <li style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }} />
            </ol>

            <div className="card" style={{ padding: 18, marginTop: 24, background: 'var(--paper)' }}>
              <div className="row" style={{ gap: 10 }}>
                <span
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 999,
                    background: 'var(--amber-500)',
                    color: '#1a1407',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 600,
                    fontSize: 13,
                  }}
                >
                  AW
                </span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>Achieng Wanjiku</div>
                  <div className="muted" style={{ fontSize: 12 }}>Will handle your request</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form panel */}
          <div className="card" style={{ padding: 36 }}>
            <div className="row between" style={{ marginBottom: 24 }}>
              <span className="label-eyebrow">Step {step} of {STEPS.length}</span>
              <span className="step-num">{STEPS[step - 1].label}</span>
            </div>

            {step === 1 && (
              <div className="col" style={{ gap: 20 }}>
                <div className="field">
                  <label>Type of service required</label>
                  <select value={data.service} onChange={(e) => update('service', e.target.value)}>
                    <option value="">Select a service…</option>
                    {ALL_SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                    <option value="Other">Other — I&apos;ll describe it below</option>
                  </select>
                </div>
                <div className="field">
                  <label>Location</label>
                  <input
                    placeholder="Estate, building name, or pin (e.g. Lavington Green, Block C)"
                    value={data.location}
                    onChange={(e) => update('location', e.target.value)}
                  />
                </div>
                <div className="field">
                  <label>Service description</label>
                  <textarea
                    placeholder="A few sentences. Include scope, problems and anything we should know — e.g. 'Leaking bathroom tap, also want a new shower head fitted. Older copper piping.'"
                    value={data.description}
                    onChange={(e) => update('description', e.target.value)}
                  />
                  <span className="hint">{data.description.length} characters · the more we know, the better the match</span>
                </div>
                <div className="field">
                  <label>Upload photos <span style={{ color: 'var(--zinc-500)' }}>· optional but helpful</span></label>
                  <PhotoDrop photos={data.photos} onChange={(v) => update('photos', v)} />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="col" style={{ gap: 20 }}>
                <div className="grid-form-pair">
                  <div className="field">
                    <label>Date service is required</label>
                    <input type="date" value={data.date} onChange={(e) => update('date', e.target.value)} />
                  </div>
                  <div className="field">
                    <label>Preferred time</label>
                    <select value={data.time} onChange={(e) => update('time', e.target.value)}>
                      <option>Morning (08:00 - 12:00)</option>
                      <option>Afternoon (12:00 - 17:00)</option>
                      <option>Evening (17:00 - 20:00)</option>
                      <option>Anytime — I&apos;m flexible</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label>Urgency level</label>
                  <div className="grid-urgency">
                    {URGENCY.map(([id, label, sub]) => (
                      <button
                        key={id}
                        type="button"
                        onClick={() => update('urgency', id)}
                        style={{
                          textAlign: 'left',
                          padding: 16,
                          borderRadius: 16,
                          background: 'white',
                          border: `1px solid ${data.urgency === id ? 'var(--zinc-900)' : 'rgba(0,0,0,0.08)'}`,
                          cursor: 'pointer',
                        }}
                      >
                        <div style={{ fontWeight: 600, fontSize: 14 }}>{label}</div>
                        <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>{sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="field">
                  <label>Estimated budget (KES)</label>
                  <input
                    placeholder="e.g. 5,000"
                    value={data.budget}
                    onChange={(e) => update('budget', e.target.value)}
                  />
                  <span className="hint">A rough range is fine — we&apos;ll confirm the final quote with you.</span>
                </div>

                <div className="field">
                  <label>Preferred payment method</label>
                  <div className="chip-strip">
                    {PAYMENT.map((p) => (
                      <button
                        key={p}
                        type="button"
                        className="chip"
                        onClick={() => update('payment', p)}
                        style={{
                          background: data.payment === p ? 'var(--zinc-900)' : 'white',
                          color: data.payment === p ? 'white' : 'var(--zinc-700)',
                          borderColor: data.payment === p ? 'var(--zinc-900)' : 'rgba(0,0,0,0.06)',
                          cursor: 'pointer',
                        }}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="col" style={{ gap: 16 }}>
                <div className="field">
                  <label>Full name</label>
                  <input
                    placeholder="Your name"
                    value={data.name}
                    onChange={(e) => update('name', e.target.value)}
                  />
                </div>
                <div className="grid-form-pair">
                  <div className="field">
                    <label>Phone number</label>
                    <input
                      placeholder="0714 579 360"
                      value={data.phone}
                      onChange={(e) => update('phone', e.target.value)}
                    />
                  </div>
                  <div className="field">
                    <label>Email <span style={{ color: 'var(--zinc-500)' }}>· optional</span></label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={data.email}
                      onChange={(e) => update('email', e.target.value)}
                    />
                  </div>
                </div>
                <div className="card" style={{ padding: 16, background: 'var(--paper)' }}>
                  <div className="row" style={{ gap: 10, fontSize: 13, color: 'var(--zinc-700)' }}>
                    <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--amber-500)', flexShrink: 0, marginTop: 6 }} />
                    <span>Your contact details stay between you and the assigned provider. We never sell or share.</span>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="col" style={{ gap: 14 }}>
                <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.01em', margin: 0 }}>
                  Review and submit
                </h3>
                <p className="muted" style={{ fontSize: 14, margin: 0 }}>
                  Quick check before we route this to an associate. You&apos;ll hear back within 15 minutes during business hours.
                </p>
                <div className="card" style={{ padding: 20, background: 'var(--paper)' }}>
                  <Summary data={data} />
                </div>
                <div style={{ fontSize: 13, color: 'var(--zinc-600)' }}>
                  By submitting you agree to our{' '}
                  <a href="#" style={{ color: 'var(--zinc-900)', textDecoration: 'underline' }}>terms</a>{' '}
                  and{' '}
                  <a href="#" style={{ color: 'var(--zinc-900)', textDecoration: 'underline' }}>privacy policy</a>.
                </div>
              </div>
            )}

            {/* Nav */}
            <div className="row between" style={{ marginTop: 32 }}>
              <button
                className="btn btn-quiet"
                onClick={back}
                disabled={step === 1}
                style={step === 1 ? { opacity: 0.4, pointerEvents: 'none' } : {}}
              >
                ← Back
              </button>
              {step < STEPS.length ? (
                <button
                  className="btn btn-amber"
                  onClick={next}
                  disabled={!canNext()}
                  style={!canNext() ? { opacity: 0.4, pointerEvents: 'none' } : {}}
                >
                  Continue
                  <span className="arrow-icon" />
                </button>
              ) : (
                <button className="btn btn-dark" onClick={() => setSubmitted(true)}>
                  Submit request
                  <span className="arrow-icon" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
