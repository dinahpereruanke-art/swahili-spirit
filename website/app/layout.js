import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import WhatsAppButton from "@/components/WhatsAppButton";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});
const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Swahili Spirit Tours & Travels | Kenya Safaris",
  description:
    "Safaris across Kenya: wildlife, coast and culture, planned by a local team.",
  // Draft mode: keeps Google from listing the site. Delete this line when it goes live.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable}`}
    >
      <body className="antialiased">
        <Nav />
        {children}
        <Footer />
        <WhatsAppButton />
        <PageTransition />
      </body>
    </html>
  );
}