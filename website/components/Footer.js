import { whatsappLink, PHONE_DISPLAY, EMAIL } from "@/lib/contact";

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white">
      <div className="kanga-stripe h-3" />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-extrabold md:text-6xl">
            Ready for your safari?
          </h2>
          <p className="mt-4 max-w-md text-lg text-white/80">
            Tell us your dates and how many people are travelling. We will reply
            with a plan and a price.
          </p>
          <a
            href={whatsappLink("Hello Swahili Spirit Tours, I would like to plan a safari.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-sun px-7 py-3 font-bold text-ink hover:bg-white"
          >
            Message us on WhatsApp
          </a>
        </div>
        <div className="space-y-5 text-lg md:pt-3">
          <p>
            <span className="block text-sm text-white/60">Phone and WhatsApp</span>
            {PHONE_DISPLAY}
          </p>
          <p>
            <span className="block text-sm text-white/60">Email</span>
            {EMAIL}
          </p>
        </div>
      </div>
      <p className="px-6 pb-8 text-center text-sm text-white/50">
        Swahili Spirit Tours &amp; Travels. Wildlife photos from Unsplash.
      </p>
    </footer>
  );
}