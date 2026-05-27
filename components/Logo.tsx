'use client';

export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <div className="row" style={{ gap: 10 }}>
      <span
        className="logo-mark"
        style={{ width: size, height: size, fontSize: size * 0.5 }}
        aria-hidden="true"
      >
        M
      </span>
      <span style={{ fontWeight: 600, fontSize: 16, letterSpacing: '-0.01em' }}>
        Mikanya{' '}
        <span style={{ color: 'var(--zinc-500)', fontWeight: 400 }}>Logistics</span>
      </span>
    </div>
  );
}
