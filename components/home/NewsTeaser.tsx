const NEWS = [
  { date: '14.04.26', title: 'Mikanya expands provider screening to Mombasa' },
  { date: '02.04.26', title: 'New M-Pesa Paybill makes settling jobs faster' },
  { date: '21.03.26', title: 'How we vet drivers: behind the scenes' },
  { date: '08.03.26', title: '500 verified providers — and counting' },
];

export default function NewsTeaser() {
  return (
    <section className="container" style={{ marginTop: 80 }}>
      <div className="row between" style={{ alignItems: 'end', flexWrap: 'wrap', gap: 20 }}>
        <div>
          <span className="eyebrow-pill" style={{ marginBottom: 16, display: 'inline-flex' }}>
            <span className="dot" />
            News
          </span>
          <h2 className="section-h" style={{ marginTop: 16 }}>
            Latest from the<br />Mikanya network
          </h2>
        </div>
        <a href="#" className="btn btn-amber">
          More news
          <span className="arrow-icon" />
        </a>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 16,
          marginTop: 36,
        }}
      >
        {NEWS.map((n) => (
          <article
            key={n.title}
            style={{
              position: 'relative',
              minHeight: 280,
              borderRadius: 20,
              overflow: 'hidden',
              background: 'repeating-linear-gradient(135deg, #ece6d5 0 12px, #e2dcc8 12px 24px)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.6) 100%)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 14,
                left: 14,
                background: 'white',
                borderRadius: 999,
                padding: '6px 12px',
                fontSize: 12,
                fontWeight: 500,
              }}
            >
              {n.date}
            </div>
            <div
              style={{
                position: 'absolute',
                left: 14,
                right: 14,
                bottom: 16,
                color: 'white',
                fontSize: 15,
                fontWeight: 600,
                lineHeight: 1.35,
                letterSpacing: '-0.01em',
              }}
            >
              {n.title}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
