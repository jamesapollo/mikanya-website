'use client';

import { useState } from 'react';
import Link from 'next/link';

const SERVICE_GROUPS = [
  {
    id: 'home',
    label: 'Home & property',
    services: [
      { id: 'painting', name: 'Painting', tag: 'Interior / exterior · 1-3 day turnaround', kes: 'from KES 8,000', desc: 'Walls, ceilings, doors, gates. Vetted painters with own brushes and drop sheets.' },
      { id: 'plumbing', name: 'Plumbing', tag: 'Repairs · installations', kes: 'from KES 1,500', desc: 'Tap fixes, blocked drains, geyser installs, full bathroom retrofits.' },
      { id: 'electrician', name: 'Electrician services', tag: 'Wiring · lighting · faults', kes: 'from KES 2,000', desc: 'Trip-switch faults, lighting installs, inverter and solar add-ons.' },
      { id: 'masonry', name: 'Masonry', tag: 'Construction · repairs', kes: 'from KES 12,000', desc: 'Boundary walls, paving, plastering, structural patch-ups.' },
      { id: 'laundry', name: 'Laundry services', tag: 'Pick-up · drop-off', kes: 'from KES 800', desc: 'Wash, iron, dry-clean. Same-day pickup across Nairobi.' },
      { id: 'cleaning', name: 'Cleaning services', tag: 'Homes · offices · move-in', kes: 'from KES 3,500', desc: 'General, deep, post-build and end-of-tenancy cleaning crews.' },
    ],
  },
  {
    id: 'transport',
    label: 'Transport & delivery',
    services: [
      { id: 'drivers', name: 'Drivers', tag: 'Daily · airport · long-haul', kes: 'from KES 2,500/day', desc: 'Personal drivers and chauffeurs. Background-checked and uniformed.' },
      { id: 'riders', name: 'Motorcycle riders', tag: 'Boda · documents · last-mile', kes: 'from KES 250', desc: 'Reliable boda riders for documents, parcels and short errands.' },
      { id: 'food', name: 'Food delivery', tag: 'Restaurants · home cooks', kes: 'from KES 200', desc: 'Insulated bag, ETA tracking, courteous handover.' },
      { id: 'sand', name: 'Sand delivery', tag: 'Construction supply', kes: 'from KES 6,500/tonne', desc: 'River sand, ballast and aggregate to site, same week.' },
      { id: 'moving', name: 'Moving assistance', tag: 'Households · offices', kes: 'from KES 7,500', desc: 'Pack, lift, transport, unpack. Two-three person crews with truck.' },
      { id: 'crew', name: 'Crew & labour support', tag: 'Events · loading · setup', kes: 'from KES 1,500/day', desc: 'General labour for events, builds and short-term projects.' },
      { id: 'shopping', name: 'Shopping & delivery', tag: 'Groceries · errands · mall runs', kes: 'from KES 500', desc: 'We send a trusted runner to shop, collect or pick up on your behalf — and deliver straight to your door.' },
    ],
  },
  {
    id: 'hospitality',
    label: 'Hospitality & care',
    services: [
      { id: 'catering', name: 'Catering services', tag: 'Events · daily meals', kes: 'from KES 450/plate', desc: 'Full-service catering for parties, board lunches and weddings.' },
      { id: 'chef', name: 'Chef / cook services', tag: 'Private chefs · meal prep', kes: 'from KES 2,500/visit', desc: 'In-home cooks for daily family meals, dinners and meal prep.' },
      { id: 'hair', name: 'Hair specialists', tag: 'Salon-quality · home visits', kes: 'from KES 1,200', desc: 'Braids, cuts, treatments and bridal styling at your home.' },
      { id: 'nails', name: 'Nail specialists', tag: 'Mani-pedi · gel · acrylic', kes: 'from KES 800', desc: 'Mobile nail technicians with own kit and sterilised tools.' },
      { id: 'attorney', name: 'Attorney services', tag: 'Family · property · contracts', kes: 'from KES 5,000', desc: 'Vetted advocates for everyday legal needs — pre-screened.' },
      { id: 'detail', name: 'Car detailing', tag: 'Interior · exterior · polish', kes: 'from KES 2,500', desc: 'Mobile detailing crews. We come to your driveway with everything.' },
      { id: 'nanny', name: 'Day nanny', tag: 'Childcare · home visits', kes: 'from KES 1,800/day', desc: 'Vetted, referenced day nannies for infants and toddlers. Background-checked and first-aid trained.' },
    ],
  },
];

type Service = (typeof SERVICE_GROUPS)[0]['services'][0];

export default function Services() {
  const [groupId, setGroupId] = useState('home');
  const [selected, setSelected] = useState<Service | null>(null);

  const group = SERVICE_GROUPS.find((g) => g.id === groupId)!;

  return (
    <main className="page-enter">
      {/* Header */}
      <section className="container" style={{ paddingTop: 8, marginBottom: 56 }}>
        <div className="grid-services-header">
          <div>
            <span className="eyebrow-pill">
              <span className="dot" />
              What we cover
            </span>
            <h1 className="display display-3" style={{ marginTop: 20 }}>
              Eighteen managed categories.<br />
              <span className="muted">One associate per request.</span>
            </h1>
          </div>
          <p className="muted" style={{ fontSize: 15, lineHeight: 1.65, margin: 0, maxWidth: 380 }}>
            Whatever the job, the workflow is the same: send the brief, an associate matches a provider, the provider delivers, you rate the result.
          </p>
        </div>

        <div className="seg" style={{ marginTop: 36 }}>
          {SERVICE_GROUPS.map((g) => (
            <button
              key={g.id}
              className={groupId === g.id ? 'on' : ''}
              onClick={() => { setGroupId(g.id); setSelected(null); }}
            >
              {g.label}
            </button>
          ))}
        </div>
      </section>

      {/* Service grid */}
      <section className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: selected ? 'minmax(0, 2fr) minmax(0, 1.2fr)' : '1fr',
            gap: 24,
            alignItems: 'start',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 12,
            }}
          >
            {group.services.map((s) => {
              const isSel = selected?.id === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelected(s)}
                  className="card"
                  style={{
                    textAlign: 'left',
                    padding: 24,
                    border: '1px solid',
                    borderRadius: 22,
                    borderColor: isSel ? 'var(--zinc-900)' : 'rgba(0,0,0,0.05)',
                    background: 'white',
                    cursor: 'pointer',
                  }}
                >
                  <div className="row between">
                    <span className="step-num">{s.kes}</span>
                    <span
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 999,
                        border: '1px solid rgba(0,0,0,0.08)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--zinc-500)',
                        fontSize: 13,
                      }}
                    >
                      →
                    </span>
                  </div>
                  <div style={{ marginTop: 24, fontWeight: 600, fontSize: 18, letterSpacing: '-0.01em' }}>
                    {s.name}
                  </div>
                  <div className="muted" style={{ fontSize: 13, marginTop: 6 }}>{s.tag}</div>
                </button>
              );
            })}
          </div>

          {selected && (
            <aside
              className="card fade-up"
              style={{ padding: 28, position: 'sticky', top: 100 }}
            >
              <div className="row between">
                <span className="eyebrow-pill">
                  <span className="dot" />
                  {group.label}
                </span>
                <button
                  onClick={() => setSelected(null)}
                  style={{
                    background: 'transparent',
                    border: 0,
                    color: 'var(--zinc-500)',
                    fontSize: 18,
                    cursor: 'pointer',
                  }}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              <div
                style={{
                  marginTop: 18,
                  fontSize: 28,
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                }}
              >
                {selected.name}
              </div>
              <div className="muted" style={{ fontSize: 13, marginTop: 4 }}>{selected.tag}</div>

              <div
                className="img-ph"
                style={{ height: 180, marginTop: 18 }}
                data-label={selected.name.toLowerCase()}
              />

              <p style={{ fontSize: 14.5, lineHeight: 1.65, color: 'var(--zinc-700)', marginTop: 18 }}>
                {selected.desc}
              </p>

              <div className="card" style={{ padding: 14, background: 'var(--paper)', border: '1px solid rgba(0,0,0,0.04)' }}>
                <div className="row between" style={{ fontSize: 13 }}>
                  <span className="muted">Starting at</span>
                  <span style={{ fontWeight: 600 }}>{selected.kes}</span>
                </div>
                <div className="row between" style={{ fontSize: 13, marginTop: 8 }}>
                  <span className="muted">Avg. dispatch time</span>
                  <span style={{ fontWeight: 500 }}>under 45 min</span>
                </div>
                <div className="row between" style={{ fontSize: 13, marginTop: 8 }}>
                  <span className="muted">Service area</span>
                  <span style={{ fontWeight: 500 }}>Nairobi metro</span>
                </div>
              </div>

              <div className="col" style={{ gap: 8, marginTop: 18 }}>
                <Link href="/request" className="btn btn-amber" style={{ display: 'flex' }}>
                  Request {selected.name.toLowerCase()}
                  <span className="arrow-icon" />
                </Link>
                <Link href="/contact" className="btn btn-ghost" style={{ display: 'flex' }}>
                  Talk to an associate first
                </Link>
              </div>
            </aside>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="container" style={{ marginTop: 100 }}>
        <div
          className="card grid-2"
          style={{
            padding: 'clamp(28px, 5vw, 48px)',
            background: 'linear-gradient(180deg, #ffffff 0%, #fef9ed 100%)',
            alignItems: 'center',
          }}
        >
          <div>
            <h3 className="section-h" style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}>
              Can&apos;t find your category? Ask anyway.
            </h3>
            <p className="muted" style={{ fontSize: 15, lineHeight: 1.65, marginTop: 12, maxWidth: 540 }}>
              Roughly one in eight requests we field is for something not yet on the menu. An associate will tell you on the same call whether we can match a provider.
            </p>
          </div>
          <div className="col" style={{ gap: 10 }}>
            <Link href="/request" className="btn btn-dark btn-lg" style={{ display: 'flex' }}>
              Submit a custom request
              <span className="arrow-icon" />
            </Link>
            <a href="https://wa.me/254714579360" className="btn btn-ghost btn-lg" style={{ display: 'flex' }}>
              WhatsApp an associate
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
