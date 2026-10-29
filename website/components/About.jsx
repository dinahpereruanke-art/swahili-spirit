export default function About() {
  return (
    <section id="about" style={{ padding: "60px 20px", background: "#fff7e6" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 30, alignItems: "center" }}>
        <img
          src="/images/maasaibeadwork.jpg"
          alt="Maasai beadwork"
          style={{ width: "100%", height: 320, objectFit: "cover", borderRadius: 20 }}
        />
        <div>
          <h2 style={{ color: "#b3261e", fontSize: 32 }}>About Swahili Spirit Tours and Travels</h2>
          <p style={{ marginTop: 12 }}>
            We are a Kenyan safari company that shows visitors the country the way we know it: the wide plains of the Mara,
            the warm coast, the old streets of Lamu and the living culture of the Maasai.
          </p>
          <p style={{ marginTop: 12 }}>
            Every trip is planned with local guides and real care, so you travel comfortably and come home with stories.
          </p>
        </div>
      </div>
    </section>
  );
}