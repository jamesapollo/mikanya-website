import Link from "next/link";
import Image from "next/image";

const CATEGORIES = [
  {
    label: "Home services",
    tag: "Plumbing · Painting · Cleaning",
    image: "/images/categories/home-services.jpg",
  },
  {
    label: "Transport & delivery",
    tag: "Drivers · Riders · Movers",
    image: "/images/categories/transport.jpg",
  },
  {
    label: "Hospitality & care",
    tag: "Catering · Hair · Beauty",
    image: "/images/categories/hospitality.jpg",
  },
];

export default function ChooseTransport() {
  return (
    <section className="container mt-section-lg" style={{ marginTop: 80 }}>
      <div className="grid-intro">
        <div className="col" style={{ gap: 16 }}>
          <span className="eyebrow-pill">
            <span className="dot" />
            What we cover
          </span>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.6,
              color: "var(--zinc-700)",
              margin: 0,
              maxWidth: 280,
            }}
          >
            Mikanya Logistics — your managed marketplace for trusted everyday
            services.
          </p>
        </div>
        <div>
          <div className="grid-section-header">
            <h2 className="section-h">
              We&apos;ll pick the right person for the request.
            </h2>
            <p
              className="muted"
              style={{ fontSize: 15, lineHeight: 1.6, margin: 0 }}
            >
              Tell us what you need — painting a flat, a chef for Sunday, a
              driver for the school run. An associate reviews each request and
              assigns a vetted provider you&apos;ll actually want to call back.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
              marginTop: 36,
            }}
          >
            {CATEGORIES.map((c) => (
              <Link
                key={c.label}
                href="/services"
                style={{
                  position: "relative",
                  borderRadius: 24,
                  overflow: "hidden",
                  minHeight: 360,
                  display: "block",
                }}
              >
                <Image
                  src={c.image}
                  alt={c.label}
                  fill
                  style={{ objectFit: "none", objectPosition: "center" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 35%, rgba(0,0,0,0.5) 100%)",
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    padding: 22,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    color: "white",
                    pointerEvents: "none",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: 22,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {c.label}
                    </div>
                    <div style={{ fontSize: 13, opacity: 0.85, marginTop: 4 }}>
                      {c.tag}
                    </div>
                  </div>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 999,
                      background: "white",
                      color: "var(--zinc-900)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      alignSelf: "flex-end",
                      fontSize: 18,
                    }}
                  >
                    →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
