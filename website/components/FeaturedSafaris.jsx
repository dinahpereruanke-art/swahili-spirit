import Link from "next/link";
   import { packages } from "../data/packages";

export default function FeaturedSafaris() {
  return (
    <section id="safaris" style={{ padding: "60px 20px", maxWidth: 1100, margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", color: "#b3261e", fontSize: 32 }}>Our Safaris</h2>
      <p style={{ textAlign: "center", marginBottom: 30 }}>Pick a journey, or ask us to build your own.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
        {packages.map((p) => (
          <article key={p.slug} style={{ background: "#fff7e6", borderRadius: 18, overflow: "hidden", boxShadow: "0 6px 18px rgba(0,0,0,.12)", display: "flex", flexDirection: "column" }}>
            <img src={p.image} alt={p.name} style={{ width: "100%", height: 200, objectFit: "cover" }} />
            <div style={{ padding: 18, display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <span style={{ color: "#e0a100", fontWeight: 700, fontSize: 14 }}>
                {p.days} days · {p.destination}
              </span>
              <h3 style={{ margin: "6px 0" }}>{p.name}</h3>
              <p style={{ flexGrow: 1 }}>{p.summary}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 14 }}>
                <strong style={{ color: "#b3261e", fontSize: 18 }}>From ${p.price}</strong>
                <Link href="/packages" style={{ background: "#b3261e", color: "#fff", padding: "8px 16px", borderRadius: 999, textDecoration: "none", fontWeight: 700 }}>
                  View
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}