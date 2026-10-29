const reviews = [
  { name: "Client name", from: "Country", text: "Replace with a real review from a past client." },
  { name: "Client name", from: "Country", text: "Replace with a real review from a past client." },
];

export default function Testimonials() {
  return (
    <section style={{ padding: "60px 20px", background: "#3b2a1a", color: "#fff" }}>
      <h2 style={{ textAlign: "center", color: "#e0a100" }}>What our guests say</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, maxWidth: 900, margin: "30px auto 0" }}>
        {reviews.map((r, i) => (
          <blockquote key={i} style={{ background: "rgba(255,255,255,.08)", padding: 20, borderRadius: 14, margin: 0 }}>
            <p>"{r.text}"</p>
            <footer style={{ marginTop: 10, color: "#e0a100" }}>{r.name}, {r.from}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}