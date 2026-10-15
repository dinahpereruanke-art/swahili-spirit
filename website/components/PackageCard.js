import { whatsappLink } from "@/lib/contact";

const SKINS = [
  { bg: "bg-kanga", text: "text-white", chip: "bg-sun text-ink" },
  { bg: "bg-ocean", text: "text-ink", chip: "bg-ink text-white" },
  { bg: "bg-flame", text: "text-ink", chip: "bg-white text-ink" },
  { bg: "bg-sun", text: "text-ink", chip: "bg-kanga text-white" },
];

export default function PackageCard({ p, index = 0 }) {
  const skin = SKINS[index % SKINS.length];
  return (
    <article className={`${skin.bg} ${skin.text} rounded-[2rem] p-5 pb-8`}>
      <div className="relative">
        <img
          src={p.image}
          alt={p.name}
          className="aspect-[5/6] w-full rounded-t-full object-cover"
        />
        <p
          className={`${skin.chip} absolute -bottom-4 right-2 -rotate-6 rounded-full px-5 py-2 font-display text-lg font-extrabold`}
        >
          from ${p.price} per person
        </p>
      </div>
      <div className="px-2 pt-8">
        <p className="text-sm font-semibold">
          {p.days} days in {p.destination}
        </p>
        <h3 className="mt-1 font-display text-3xl font-extrabold leading-tight">
          {p.name}
        </h3>
        <p className="mt-3">{p.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2 text-sm font-semibold">
          {p.includes.map((item) => (
            <li key={item} className="rounded-full border-2 border-current px-3 py-1">
              {item}
            </li>
          ))}
        </ul>
        <a
          href={whatsappLink(`Hello, I would like to book the ${p.name} safari.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-ink px-6 py-3 font-bold text-white hover:bg-white hover:text-ink"
        >
          Ask about this safari
        </a>
      </div>
    </article>
  );
}