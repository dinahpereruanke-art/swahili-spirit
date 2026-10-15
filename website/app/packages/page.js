import PackageCard from "@/components/PackageCard";
import { packages } from "@/data/packages";

export const metadata = {
  title: "Safari Packages | Swahili Spirit Tours & Travels",
};

export default function PackagesPage() {
  return (
    <main>
      <section className="bg-ocean">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="font-display text-5xl font-extrabold md:text-8xl">
            Our safaris
          </h1>
          <p className="mt-4 max-w-xl text-lg">
            Pick one as it is, or tell us what you want and we will build your own.
          </p>
        </div>
        <div className="kanga-stripe h-3" />
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          {packages.map((p, i) => (
            <PackageCard key={p.slug} p={p} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}