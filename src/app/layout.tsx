import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Quadri Taxi Service | 24/7 Taxis & Tours in South Goa",
    template: "%s | Quadri Taxi Service",
  },
  description: site.description,
  keywords: [
    "taxi in Goa",
    "South Goa taxi",
    "Margao taxi",
    "Dabolim airport taxi",
    "Mopa airport taxi",
    "Goa private cab",
    "Quadri Taxi Service",
    "Goa tour itinerary",
    "luxury taxi Goa",
    "minibus hire Goa",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: "Quadri Taxi Service | 24/7 Taxis & Tours in South Goa",
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Quadri Taxi Service | South Goa",
    description: site.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth">
      <body className={`${fraunces.variable} ${outfit.variable} antialiased`}>
        <JsonLd />
        <Header />
        <main className="pt-[72px]">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
