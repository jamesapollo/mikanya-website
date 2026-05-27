const LOGOS = ['Safaricom', 'KCB', 'Java House', 'Sarit Centre', 'Two Rivers', 'Karen Hospital'];

export default function Partners() {
  return (
    <section
      style={{
        marginTop: 80,
        background: 'white',
        borderTop: '1px solid rgba(0,0,0,0.05)',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
      }}
    >
      <div className="container" style={{ padding: '36px 28px' }}>
        <div className="row between" style={{ marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
          <span className="label-eyebrow">Trusted by clients across Nairobi</span>
          <span className="tiny muted">Selected partners</span>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: 32,
            alignItems: 'center',
          }}
        >
          {LOGOS.map((l) => (
            <div
              key={l}
              style={{
                textAlign: 'center',
                fontWeight: 600,
                fontSize: 22,
                color: 'var(--zinc-400)',
                letterSpacing: '-0.01em',
              }}
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
