const items = [
  { icon: "🦁", title: "Local expert guides", text: "Guides who know the parks and the Maasai communities." },
  { icon: "🚙", title: "Comfortable 4x4 vehicles", text: "Pop-up roof vehicles for the best game viewing." },
  { icon: "🏖️", title: "Safari plus beach", text: "Combine the Mara with Diani or Lamu in one trip." },
  { icon: "💰", title: "Honest pricing", text: "Clear quotes with no hidden costs." },
];

export default function WhyChooseUs() {
  return (
    <section style={{ padding: "60px 20px", textAlign: "center" }}>
      <h2 style={{ color: "#b3261e" }}>Why travel with us</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, maxWidth: 1000, margin: "30px auto 0" }}>
        {items.map((i) => (
          <div key={i.title} style={{ background: "#fff7e6", borderRadius: 16, padding: 24, borderTop: "6px solid #e0a100" }}>
            <div style={{ fontSize: 40 }}>{i.icon}</div>
            <h3>{i.title}</h3>
            <p>{i.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}