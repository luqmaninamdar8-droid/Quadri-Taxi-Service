import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { RentalPackages } from "@/components/RentalPackages";
import { cabServiceLocations, faqs, services, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Airport, Corporate, Luxury & Minibus Taxis in Goa",
  description:
    "Cab services in Varca, Majorda, Betalbatim, Utorda, Cavelossim, Cabo de Rama, Mobor, Panaji, Colva, Benaulim, Calangute, Baga, Candolim, Arpora, Palolem, Madgaon, Dabolim Airport and Madgaon Railway Station.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Taxi services in South Goa | Quadri Taxi Service",
    description:
      "Private airport transfers, corporate cars, long-distance taxis, luxury vehicles, and minibuses.",
  },
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Fleet & services</p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl">A car for every Goa plan</h1>
      <p className="mt-4 max-w-2xl text-foam/70">
        From a solo airport sprint to a 17-seat family circuit, Quadri Taxi Service
        keeps the same 24/7 promise: a private vehicle, a known chauffeur, and a fare
        you agree before the engine starts.
      </p>
      <p className="mt-4 max-w-2xl text-foam/70">
        Book one ride or keep the same car for your whole holiday. We cover Dabolim and
        Mopa airports, Madgaon station, South Goa beaches, North Goa hotels, and
        outstation highways into Maharashtra and Karnataka.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          { k: "Airports", v: "Dabolim (GOI) & Mopa, meet-and-greet" },
          { k: "Local", v: "Margao, Colva, Palolem, Panaji, Calangute" },
          { k: "Outstation", v: "Pune, Mumbai, Hampi, Gokarna, Belagavi" },
        ].map((item) => (
          <div key={item.k} className="rounded-2xl border border-white/10 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">{item.k}</p>
            <p className="mt-2 text-sm text-foam/75">{item.v}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-16">
        {services.map((service, index) => (
          <article
            id={service.slug}
            key={service.slug}
            className="scroll-mt-28 grid items-center gap-8 md:grid-cols-2"
          >
            <div className={`relative aspect-[16/11] overflow-hidden rounded-[2rem] ${index % 2 ? "md:order-2" : ""}`}>
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 45vw, 100vw"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl">{service.title}</h2>
              <p className="mt-4 leading-relaxed text-foam/70">{service.details}</p>
              <p className="mt-3 leading-relaxed text-foam/70">{service.extra}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-gold/30 px-3 py-1 text-xs uppercase tracking-wide text-gold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs uppercase tracking-[0.18em] text-foam/45">Typically includes</p>
              <ul className="mt-2 grid gap-1 text-sm text-foam/70">
                {service.includes.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
              <a
                href={whatsappHref(`Hello Quadri Taxi, I want to book: ${service.title}.`)}
                className="mt-8 inline-block rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink"
              >
                Book {service.title.toLowerCase()}
              </a>
            </div>
          </article>
        ))}
      </div>

      <section id="cab-services" className="mt-20">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Coverage</p>
        <h2 className="mt-3 font-display text-4xl">Cab services</h2>
        <p className="mt-4 max-w-2xl text-foam/70">
          Private cabs for hotel pickups, airport drops, and local hops across these
          Goa locations. Same 24/7 desk, Swift Dzire, Ertiga, or Innova Crysta.
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cabServiceLocations.map((place) => (
            <li key={place}>
              <a
                href={whatsappHref(`Hello Quadri Taxi, I need a cab in ${place}.`)}
                className="flex h-full items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-gold/50 hover:bg-gold/5"
              >
                <span>
                  <span className="block font-display text-xl">{place}</span>
                  <span className="mt-1 block text-xs text-foam/50">Cab service · 24/7</span>
                </span>
                <span className="text-sm text-gold">Book →</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-20">
        <RentalPackages />
      </div>

      <section className="mt-20">
        <h2 className="font-display text-4xl">What stays the same on every booking</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              t: "Fixed quotes",
              d: "You see the fare before you confirm. Tolls and parking for standard airport packages are explained in the quote, not after the ride.",
            },
            {
              t: "Private chauffeur",
              d: "No shared cabs. The car is yours for the booking window — useful with children, elders, and multiple hotel drops.",
            },
            {
              t: "The same desk 24/7",
              d: "Night landings, early temple runs, and feast-day minibuses all go through one WhatsApp and phone number.",
            },
          ].map((item) => (
            <article key={item.t} className="rounded-3xl border border-white/10 p-6">
              <h3 className="font-display text-2xl">{item.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foam/65">{item.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl">Service questions</h2>
        <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
          {faqs.slice(0, 6).map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="cursor-pointer list-none font-medium">
                <span className="flex justify-between gap-4">
                  {item.q}
                  <span className="text-gold">+</span>
                </span>
              </summary>
              <p className="mt-2 text-sm text-foam/65">{item.a}</p>
            </details>
          ))}
        </div>
        <Link href="/contact" className="mt-6 inline-block text-sm text-gold hover:underline">
          Need a mixed fleet for a wedding weekend? →
        </Link>
      </section>

      <div className="mt-16">
        <CtaBanner
          title="Tell us the route. We will name the car."
          text="Sedan for two, Innova for a family, minibus for a parish group — reply with people, bags, and timing and we match the fleet."
        />
      </div>
    </div>
  );
}
