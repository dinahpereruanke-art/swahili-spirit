import Link from "next/link";
import { whatsappLink, PHONE_DISPLAY, EMAIL } from "@/lib/contact";

// Add real links here when the business has the pages. Empty ones are hidden.
const SOCIALS = [
  { name: "Facebook", url: "" },
  { name: "Instagram", url: "" },
  { name: "TikTok", url: "" },
];

export default function Footer() {
  const socials = SOCIALS.filter((s) => s.url);

  return (
    <footer id="contact" className="scroll-mt-24 bg-ink text-white">
      <div className="kanga-stripe h-3" />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        {/* Brand and call to action */}
        <div>
          <p className="font-display text-2xl font-extrabold">
            Swahili Spirit
            <span className="block text-base font-bold text-white/70">
              Tours &amp; Travels
            </span>
          </p>
          <p className="mt-4 max-w-xs text-white/80">
            Safaris across Kenya, planned by a local team. Tell us your dates
            and we will reply with a plan and a price.
          </p>
          <a
            href={whatsappLink("Hello Swahili Spirit Tours, I would like to plan a safari.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-sun px-6 py-3 font-bold text-ink hover:bg-white"
          >
            Message us on WhatsApp
          </a>
        </div>

        {/* Links */}
        <div>
          <p className="text-sm text-white/60">Explore</p>
          <ul className="mt-3 space-y-2 text-lg">
            <li>
              <Link href="/" className="hover:text-sun">Home</Link>
            </li>
            <li>
              <Link href="/packages" className="hover:text-sun">Safaris</Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-sun">About</Link>
            </li>
            <li>
              <Link href="/#enquire" className="hover:text-sun">Plan my trip</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-5 text-lg">
          <p>
            <span className="block text-sm text-white/60">Phone and WhatsApp</span>
            {PHONE_DISPLAY}
          </p>
          <p>
            <span className="block text-sm text-white/60">Email</span>
            <a href={`mailto:${EMAIL}`} className="hover:text-sun">
              {EMAIL}
            </a>
          </p>
          {socials.length > 0 && (
            <p>
              <span className="block text-sm text-white/60">Follow us</span>
              <span className="flex flex-wrap gap-4">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sun"
                  >
                    {s.name}
                  </a>
                ))}
              </span>
            </p>
          )}
        </div>
      </div>
      <p className="px-6 pb-8 text-center text-sm text-white/50">
        &copy; 2026 Swahili Spirit Tours &amp; Travels.
Wildlife photos from Unsplash.
      </p>
    </footer>
  );
}