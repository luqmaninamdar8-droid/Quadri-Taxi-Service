import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";
import "./globals.css";

const GA_IDS = ["G-H99RLL3X48", "G-DDW2NLQTDG"] as const;

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
    default: "Quadri Cabs | 24/7 Taxis & Tours in South Goa",
    template: "%s | Quadri Cabs",
  },
  description: site.description,
  keywords: [
    "taxi in Goa",
    "South Goa taxi",
    "Margao taxi",
    "Dabolim airport taxi",
    "Mopa airport taxi",
    "Goa private cab",
    "Quadri Cabs",
    "Goa tour itinerary",
    "luxury taxi Goa",
    "minibus hire Goa",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: "Quadri Cabs | 24/7 Taxis & Tours in South Goa",
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Quadri Cabs | South Goa",
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
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_IDS[0]}`} strategy="afterInteractive" />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${GA_IDS.map((id) => `gtag('config', '${id}');`).join("\n            ")}
          `}
        </Script>
        <JsonLd />
        <Header />
        <main className="pt-[72px]">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
