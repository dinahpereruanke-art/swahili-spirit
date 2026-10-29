export default function WhatsAppButton() {
  const number = "254705592583";
  const text = encodeURIComponent("Hello Swahili Spirit Tours, I'd like to ask about a safari.");
  return (
    <a
      href={`https://wa.me/${number}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed", bottom: 20, right: 20, zIndex: 50,
        background: "#25D366", color: "#fff", borderRadius: 999,
        padding: "14px 20px", fontWeight: 700, textDecoration: "none",
        boxShadow: "0 6px 18px rgba(0,0,0,.3)",
      }}
    >
      💬 Chat with us
    </a>
  );
}