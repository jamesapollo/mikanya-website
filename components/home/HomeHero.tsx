'use client';

import { useState } from 'react';
import Link from 'next/link';

const TABS = [
  {
    label: 'Homes',
    body: 'A leaking tap, a power outage, a chef for Sunday lunch — submitted in two minutes, handled by an associate.',
  },
  {
    label: 'Businesses',
    body: 'Catering, cleaning crews, drivers, courier riders — managed bookings with verified providers.',
  },
  {
    label: 'Events',
    body: 'Pull together hair, makeup, catering, transport and crew under one coordinated request.',
  },
];

export default function HomeHero() {
  const [tab, setTab] = useState(0);

  return (
    <section className="container" style={{ paddingTop: 8 }}>
      <div className="hero-shell page-enter">
        {/* Dark gradient overlay */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.55) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            padding: 'clamp(24px, 4vw, 40px) clamp(20px, 4vw, 36px) 32px',
            minHeight: 'clamp(480px, 70vw, 640px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: 'white',
          }}
        >
          <div style={{ maxWidth: 820 }}>
            <h1 className="display display-1 on-image" style={{ marginTop: 28 }}>
              Trusted tasks.<br />
              Reliable providers.<br />
              <span style={{ color: 'var(--amber-400)' }}>Professionally managed.</span>
            </h1>
            <p
              className="on-image"
              style={{
                marginTop: 20,
                fontSize: 17,
                lineHeight: 1.55,
                maxWidth: 520,
                opacity: 0.92,
              }}
            >
              Painting. Plumbing. Drivers. Catering. Hair, beauty and more. You send the request — a Mikanya associate reviews, picks the right person, and stays with you until it&apos;s done.
            </p>
          </div>

          {/* Bottom strip */}
          <div className="grid-hero-bottom">
            {/* Associate card */}
            <div className="card" style={{ padding: 18, color: 'var(--zinc-900)' }}>
              <div className="row" style={{ gap: 12 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 999,
                    background: 'linear-gradient(135deg, #f3a23a, #b9701a)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: 15,
                  }}
                >
                  AW
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>Achieng Wanjiku</div>
                  <div className="muted" style={{ fontSize: 12 }}>Associate · on call now</div>
                </div>
              </div>
              <Link href="/request" className="btn btn-amber" style={{ width: '100%', marginTop: 14, display: 'flex' }}>
                Request a service
                <span className="arrow-icon" />
              </Link>
              <div className="row between" style={{ marginTop: 10, fontSize: 12, color: 'var(--zinc-500)' }}>
                <span>Avg. assignment</span>
                <span style={{ color: 'var(--zinc-900)', fontWeight: 500 }}>under 45 min</span>
              </div>
            </div>

            {/* Tabs */}
            <div style={{ color: 'white' }}>
              <div className="seg" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(6px)' }}>
                {TABS.map((t, i) => (
                  <button
                    key={t.label}
                    className={tab === i ? 'on' : ''}
                    onClick={() => setTab(i)}
                    style={tab === i ? {} : { color: 'rgba(255,255,255,0.78)' }}
                  >
                    {(i + 1).toString().padStart(2, '0')} · {t.label}
                  </button>
                ))}
              </div>
              <p
                className="on-image"
                style={{ marginTop: 14, fontSize: 14.5, lineHeight: 1.5, opacity: 0.92, maxWidth: 480 }}
              >
                {TABS[tab].body}
              </p>
              <div style={{ display: 'flex', gap: 4, marginTop: 12 }}>
                {TABS.map((_, i) => (
                  <span
                    key={i}
                    style={{
                      height: 3,
                      flex: 1,
                      maxWidth: 100,
                      background: tab === i ? 'var(--amber-400)' : 'rgba(255,255,255,0.25)',
                      borderRadius: 999,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Stat card */}
            <div className="card" style={{ padding: 18, color: 'var(--zinc-900)' }}>
              <div style={{ fontSize: 48, fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1 }}>
                1,200<span style={{ color: 'var(--amber-500)' }}>+</span>
              </div>
              <div className="muted" style={{ fontSize: 13, marginTop: 8, lineHeight: 1.5 }}>
                Verified providers across<br />our managed network
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
