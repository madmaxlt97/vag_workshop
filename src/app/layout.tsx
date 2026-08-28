import type { Metadata } from "next";
import { Barlow_Condensed, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "@/components/layout/Footer";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "VAG Workshop — Autoservisas Vilniuje",
    template: "%s | VAG Workshop",
  },
  description:
    "VAG autoservisas Vilniuje. Volkswagen, Audi, Porsche, Škoda ir SEAT automobilių diagnostika, techninė priežiūra ir remontas.",

  openGraph: {
    title: "VAG Workshop — Autoservisas Vilniuje",
    description:
      "Specializuotas VAG autoservisas Vilniuje. Diagnostika, techninė priežiūra ir remontas.",
    type: "website",
    locale: "lt_LT",
    siteName: "VAG Workshop",
  },

  authors: [{ name: "VAG Workshop" }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt" data-scroll-behavior="smooth">
      <body className={`${barlowCondensed.variable} ${spaceGrotesk.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
