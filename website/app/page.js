import FeaturedSafaris from "../components/FeaturedSafaris";
import About from "../components/About";
import Image from "next/image";
import Link from "next/link";
import PackageCard from "@/components/PackageCard";
import { packages } from "@/data/packages";
import { gallery } from "@/data/gallery";
import { whatsappLink } from "@/lib/contact";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import EnquiryForm from "../components/EnquiryForm";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      {/* Hero: words on the left, photo mosaic on the right */}
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="font-display text-5xl font-extrabold leading-[0.95] md:text-7xl">
              Kenya, told
              <br />
              the Swahili way.
            </h1>
            <p className="mt-6 max-w-md text-lg text-white/90">
              Wildlife, coast and culture, planned by a local team and guided at
              the pace of the sunrise.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/packages"
                className="rounded-full bg-sun px-7 py-3 font-bold text-ink hover:bg-white"
              >
                See our safaris
              </Link>
              <a
                href={whatsappLink("Hello Swahili Spirit Tours, I would like to plan a safari.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white px-7 py-3 font-bold text-white hover:bg-white hover:text-ink"
              >
                Plan my trip on WhatsApp
              </a>
            </div>
          </div>

          <div className="columns-2 gap-3">
            {gallery.slice(0, 6).map((g, i) => (
              <Image
                key={g.src}
                src={g.src}
                alt={g.alt}
                width={800}
                height={1000}
                priority={i < 2}
                sizes="(min-width: 768px) 25vw, 50vw"
                className={`mb-3 h-auto w-full break-inside-avoid ${
                  i === 0 ? "rounded-t-full rounded-b-2xl" : "rounded-2xl"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="kanga-stripe h-3" />
      </section>

      {/* The kanga proverb */}
      <section className="bg-sun">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="font-display text-4xl font-extrabold md:text-6xl">
            Pole pole ndio mwendo.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-lg">
            Slowly, slowly is the way. It is how we travel: no rushing the
            sunrise, no skipping the elephants.
          </p>
        </div>
        <div className="kanga-stripe h-3" />
      </section>

      {/* Safaris */}
      <section id="safaris" className="scroll-mt-24 bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-extrabold md:text-6xl">
            Pick your journey
          </h2>
          <p className="mt-3 max-w-lg text-lg text-ink/70">
            A short escape or a full week. Every safari can be changed to fit you.
          </p>
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {packages.slice(0, 3).map((p, i) => (
              <div key={p.slug} className={i === 1 ? "lg:mt-16" : ""}>
                <PackageCard p={p} index={i} />
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/packages"
              className="inline-block rounded-full bg-ink px-8 py-3 font-bold text-white hover:bg-kanga"
            >
              See all safaris
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 bg-ocean px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-extrabold md:text-6xl">
              About Swahili Spirit
            </h2>
            <p className="mt-6 max-w-lg text-lg">
              Swahili Spirit Tours &amp; Travels plans safaris across Kenya, from
              the plains of the Maasai Mara to the beaches of the coast. We take
              care of the drives, the stays and the details, so you can spend
              your days watching wildlife and meeting the people who call this
              land home.
            </p>
            <p className="mt-4 max-w-lg text-lg">
              Every trip is built around you: your dates, your budget and your
              pace. Tell us what you want to see and we will plan it.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl bg-white p-6">
              <h3 className="font-display text-2xl font-extrabold">Wildlife</h3>
              <p className="mt-2">
                Game drives with guides who know where the animals are.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6">
              <h3 className="font-display text-2xl font-extrabold">Coast</h3>
              <p className="mt-2">
                White sand beaches and old Swahili towns after the bush.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6">
              <h3 className="font-display text-2xl font-extrabold">Culture</h3>
              <p className="mt-2">
                Meet the communities, taste the food and hear the stories.
              </p>
            </div>
          </div>
        </div>
        <div className="kanga-stripe mx-auto mt-24 h-3 max-w-6xl" />
      </section>
    </main>
  );
}