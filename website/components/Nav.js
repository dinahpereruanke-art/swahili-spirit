import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-ink text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl font-extrabold leading-none">
          Swahili Spirit
          <span className="block text-xs font-semibold text-sun">Tours &amp; Travels</span>
        </Link>
        <nav className="flex items-center gap-3 text-sm font-semibold md:gap-8">
          <Link href="/" className="hover:text-sun">Home</Link>
          <Link href="/packages" className="hover:text-sun">Safaris</Link>
          <Link href="/#about" className="hover:text-sun">About</Link>
          <Link
            href="/#contact"
            className="rounded-full bg-kanga px-4 py-2 hover:bg-sun hover:text-ink"
          >
            Contact
          </Link>
        </nav>
      </div>
      <div className="kanga-stripe h-2" />
    </header>
  );
}