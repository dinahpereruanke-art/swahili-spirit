import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#3b2a1a", color: "#fff", padding: "40px 20px 20px", marginTop: 40 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 28 }}>
        <div>
          <h3 style={{ color: "#e0a100" }}>Swahili Spirit Tours and Travels</h3>
          <p style={{ marginTop: 8, opacity: 0.85 }}>Kenyan safaris, planned with local guides and real care.</p>
        </div>

        <div>
          <h4 style={{ color: "#e0a100" }}>Explore</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: 2 }}>
            <li><Link href="/" style={{ color: "#fff" }}>Home</Link></li>
            <li><Link href="/packages" style={{ color: "#fff" }}>Packages</Link></li>
            <li><Link href="/#about" style={{ color: "#fff" }}>About</Link></li>
            <li><Link href="/#enquire" style={{ color: "#fff" }}>Enquire</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: "#e0a100" }}>Contact</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: 2 }}>
            <li><a href="tel:+254705592583" style={{ color: "#fff" }}>📞 0705 592 583</a></li>
            <li><a href="https://wa.me/254705592583" style={{ color: "#fff" }}>💬 WhatsApp us</a></li>
          </ul>
        </div>
      </div>

      <p style={{ textAlign: "center", marginTop: 28, fontSize: 14, opacity: 0.7 }}>
        © {new Date().getFullYear()} Swahili Spirit Tours and Travels. All rights reserved.
      </p>
    </footer>
  );
}