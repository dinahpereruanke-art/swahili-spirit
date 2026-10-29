const items = [
  {
    title: "Local expert guides",
    text: "Guides who know the parks and the Maasai communities.",
  },
  {
    title: "Comfortable 4x4 vehicles",
    text: "Pop-up roof vehicles for the best game viewing.",
  },
  {
    title: "Safari plus beach",
    text: "Combine the Mara with Diani or Lamu in one trip.",
  },
  {
    title: "Honest pricing",
    text: "Clear quotes with no hidden costs.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-sun px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-extrabold md:text-6xl">
          Why travel with us
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border-t-8 border-ink bg-white p-6"
            >
              <h3 className="font-display text-2xl font-extrabold">
                {item.title}
              </h3>
              <p className="mt-3 text-ink/80">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}