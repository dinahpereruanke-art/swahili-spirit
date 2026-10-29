"use client";
import { useState } from "react";
   import { packages as allPackages } from "../data/packages";

const packages = [...allPackages.map((p) => p.name), "Custom safari"];

export default function EnquiryForm() {
  const [f, setF] = useState({ name: "", date: "", guests: 2, pkg: packages[0], notes: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const send = () => {
    const msg =
      `Hello Swahili Spirit Tours!\nName: ${f.name}\nPackage: ${f.pkg}\n` +
      `Travel date: ${f.date}\nGuests: ${f.guests}\nNotes: ${f.notes}`;
    window.open(`https://wa.me/254705592583?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const input = { padding: 12, borderRadius: 10, border: "2px solid #e8d5b5", fontSize: 16, width: "100%" };

  return (
    <section id="enquire" style={{ maxWidth: 560, margin: "60px auto", padding: 24, background: "#fff7e6", borderRadius: 20 }}>
      <h2 style={{ color: "#b3261e", marginBottom: 16 }}>Plan your safari</h2>
      <div style={{ display: "grid", gap: 12 }}>
        <input style={input} placeholder="Your name" value={f.name} onChange={set("name")} />
        <select style={input} value={f.pkg} onChange={set("pkg")}>
          {packages.map((p) => <option key={p}>{p}</option>)}
        </select>
        <input style={input} type="date" value={f.date} onChange={set("date")} />
        <input style={input} type="number" min="1" value={f.guests} onChange={set("guests")} />
        <textarea style={input} rows={3} placeholder="Anything else?" value={f.notes} onChange={set("notes")} />
        <button
          onClick={send}
          style={{ background: "#b3261e", color: "#fff", padding: 14, border: 0, borderRadius: 10, fontWeight: 700, fontSize: 16, cursor: "pointer" }}
        >
          Send enquiry on WhatsApp
        </button>
      </div>
    </section>
  );
}