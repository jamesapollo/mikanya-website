const ITEMS = [
  ['01', 'Verified providers', 'Every painter, driver, chef and electrician on the network is checked, referenced and re-verified.'],
  ['02', 'Real associates, not bots', 'A human reviews your request, picks the right provider, and stays available for follow-up.'],
  ['03', 'Fast assignment', 'Most requests have a named provider on the way in under an hour during business hours.'],
  ['04', 'Quality follow-up', 'After every job we check the work, log the rating, and route repeat business to top performers.'],
] as const;

export default function WhyChoose() {
  return (
    <section className="container mt-section" style={{ marginTop: 120 }}>
      <div style={{ maxWidth: 920 }}>
        <span className="eyebrow-pill">
          <span className="dot" />
          About Mikanya
        </span>
        <h2 className="section-h" style={{ marginTop: 20 }}>
          A logistics company built around customer comfort — not directories.
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16,
          marginTop: 40,
        }}
      >
        {ITEMS.map(([n, t, b]) => (
          <div key={n} className="card" style={{ padding: 24 }}>
            <div className="row between">
              <span className="step-num">{n}</span>
              <span style={{ width: 10, height: 10, borderRadius: 999, background: 'var(--amber-500)' }} />
            </div>
            <div style={{ marginTop: 28, fontWeight: 600, fontSize: 18, letterSpacing: '-0.01em' }}>{t}</div>
            <p className="muted" style={{ fontSize: 13.5, lineHeight: 1.6, marginTop: 8, marginBottom: 0 }}>{b}</p>
          </div>
        ))}
      </div>

      {/* Wide placeholder with text panel below (stacks on mobile) */}
      <div style={{ marginTop: 40 }}>
        <div
          style={{
            borderRadius: 28,
            overflow: 'hidden',
            minHeight: 280,
            background: 'repeating-linear-gradient(135deg, #ece6d5 0 12px, #e2dcc8 12px 24px)',
          }}
        />
        <div
          className="grid-2"
          style={{
            background: 'white',
            border: '1px solid rgba(0,0,0,0.05)',
            borderRadius: 20,
            padding: 24,
            gap: 24,
            marginTop: 12,
          }}
        >
          <p style={{ fontSize: 13.5, lineHeight: 1.6, margin: 0, color: 'var(--zinc-700)' }}>
            Most requests are fulfilled the same day. Your assigned associate stays on WhatsApp from start to finish — no phone tree, no app gymnastics.
          </p>
          <p style={{ fontSize: 13.5, lineHeight: 1.6, margin: 0, color: 'var(--zinc-700)' }}>
            Cleaning a flat, fitting a sink, ferrying a parent to a clinic — we apply the same care and the same follow-up to every category.
          </p>
        </div>
      </div>
    </section>
  );
}
