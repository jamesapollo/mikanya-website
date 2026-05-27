'use client';

import { useState } from 'react';

const REVIEWS = [
  {
    who: 'Margaret Wairimu',
    role: 'Property manager · Kileleshwa',
    body: 'They sent a plumber the same morning I called. He was clean, polite and the work held up — that almost never happens. I now use Mikanya for every block I manage.',
  },
  {
    who: 'David Otieno',
    role: 'Restaurant owner · Westlands',
    body: "We needed catering crew for a weekend pop-up at 24 hours notice. The associate matched five people who actually showed up on time. Pricing was fair.",
  },
  {
    who: 'Wanjiru Kamau',
    role: 'Homeowner · Karen',
    body: 'I asked for a driver and got a calm, well-presented professional with a clean car. The follow-up call after the job was a nice touch. Highly recommend.',
  },
];

const AVATARS = [
  { x: 8, y: 30, size: 56 },
  { x: 14, y: 70, size: 48 },
  { x: 82, y: 30, size: 56 },
  { x: 86, y: 70, size: 48 },
];

function initials(name: string) {
  return name.split(' ').map((s) => s[0]).join('').slice(0, 2);
}

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const r = REVIEWS[idx];

  return (
    <section className="container" style={{ marginTop: 120 }}>
      <div className="center col" style={{ alignItems: 'center', gap: 14 }}>
        <span className="eyebrow-pill">
          <span className="dot" />
          Reviews
        </span>
        <h2 className="section-h" style={{ textAlign: 'center', maxWidth: 720 }}>
          Customer feedback on<br />our managed services
        </h2>
      </div>

      <div style={{ position: 'relative', marginTop: 56, minHeight: 360 }}>
        {/* Decorative avatars */}
        {AVATARS.map((a, i) => (
          <div
            key={i}
            className="hide-mobile"
            style={{
              position: 'absolute',
              left: `${a.x}%`,
              top: `${a.y}%`,
              width: a.size,
              height: a.size,
              borderRadius: 999,
              background: 'linear-gradient(135deg, #d6cfb9, #b8ad8e)',
              border: '3px solid white',
              boxShadow: '0 4px 18px rgba(0,0,0,0.06)',
            }}
          />
        ))}

        {/* Decorative paths */}
        <svg
          className="hide-mobile"
          aria-hidden="true"
          viewBox="0 0 1000 360"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.18 }}
        >
          <path d="M 60 80 Q 180 80 220 200 Q 260 320 380 320" stroke="#bda57a" strokeWidth="1.5" fill="none" />
          <path d="M 940 80 Q 820 80 780 200 Q 740 320 620 320" stroke="#bda57a" strokeWidth="1.5" fill="none" />
        </svg>

        <div
          className="card"
          style={{
            maxWidth: 720,
            margin: '0 auto',
            padding: 36,
            background: 'linear-gradient(180deg, #ffffff 0%, #fef9ed 100%)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            className="center"
            style={{
              width: 80,
              height: 80,
              borderRadius: 999,
              background: 'linear-gradient(135deg, #f3c768, #b9701a)',
              margin: '0 auto -8px',
              color: 'white',
              fontWeight: 600,
              fontSize: 22,
              border: '4px solid white',
            }}
          >
            {initials(r.who)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 16 }}>
            <div style={{ fontWeight: 600, fontSize: 17 }}>{r.who}</div>
            <div className="muted" style={{ fontSize: 13, marginTop: 4 }}>{r.role}</div>
          </div>
          <p
            style={{
              marginTop: 22,
              fontSize: 16,
              lineHeight: 1.65,
              textAlign: 'center',
              color: 'var(--zinc-800)',
              maxWidth: 560,
              marginInline: 'auto',
            }}
          >
            &ldquo;{r.body}&rdquo;
          </p>

          <div className="row center" style={{ marginTop: 22, gap: 10 }}>
            <button
              className="btn btn-amber btn-sm"
              style={{ width: 40, height: 40, padding: 0 }}
              onClick={() => setIdx((idx - 1 + REVIEWS.length) % REVIEWS.length)}
              aria-label="Previous"
            >
              ←
            </button>
            <button
              className="btn btn-amber btn-sm"
              style={{ width: 40, height: 40, padding: 0 }}
              onClick={() => setIdx((idx + 1) % REVIEWS.length)}
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
