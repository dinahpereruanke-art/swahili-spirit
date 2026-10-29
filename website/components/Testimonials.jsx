// Add only real reviews from real guests, with their permission.
const reviews = [
  // { quote: "Their words here.", name: "Guest name", country: "Country" },
];

export default function Testimonials() {
  if (reviews.length === 0) return null;

  return (
    <section className="bg-ocean px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-extrabold md:text-6xl">
          What our guests say
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-3xl bg-white p-8">
              <blockquote className="text-lg">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 font-bold">
                {r.name}, {r.country}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}