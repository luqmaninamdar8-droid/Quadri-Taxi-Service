import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { areas, faqs, howWeBook, reviews, services, site, tours, whatsappHref } from "@/lib/site";
import { CtaBanner } from "@/components/CtaBanner";
import { BookingForm } from "@/components/BookingForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "24/7 Private Taxis & Holiday Tours in South Goa",
  description:
    "Book Quadri Cabs for airport pickups, corporate cars, luxury vehicles, minibuses, long-distance travel, and custom Goa holiday itineraries. Based in Margao, Goa.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Palm-lined beach road in Goa at golden hour"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink" />
        <div className="grain pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl items-center px-4 pb-16 pt-28 md:px-6">
          <div>
          <p className="animate-fade-up text-xs uppercase tracking-[0.35em] text-gold">Margao · South Goa</p>
          <h1 className="title-rainbow animate-fade-up delay-1 mt-4 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl lg:text-7xl">
            Private rides that feel like the rest of your Goa holiday.
          </h1>
          <p className="animate-fade-up delay-2 mt-5 max-w-xl text-lg text-foam/75">
            Quadri Cabs is a 24/7 private transportation and tour provider based
            at Gogol Housing Board, Margao. We run airport taxis, corporate cars, long-distance
            outstation trips, luxury vehicles, minibuses, and holiday itineraries written
            around your hotels and flight times — not a packed sightseeing bus.
          </p>
          <div className="animate-fade-up delay-3 mt-8 flex flex-wrap gap-3">
            <a
              href="#book"
              className="rounded-full bg-gold px-6 py-3 font-semibold text-ink hover:bg-sand"
            >
              Book a car now
            </a>
            <Link
              href="/services"
              className="rounded-full border border-white/20 px-6 py-3 text-foam hover:border-gold"
            >
              View services
            </Link>
          </div>
          <dl className="animate-fade-up delay-4 mt-12 grid max-w-3xl grid-cols-3 gap-4 border-t border-white/10 pt-6 text-sm">
            <div>
              <dt className="text-foam/50">Hours</dt>
              <dd className="mt-1 font-medium text-gold">24/7 dispatch</dd>
            </div>
            <div>
              <dt className="text-foam/50">Airports</dt>
              <dd className="mt-1 font-medium">Dabolim & Mopa</dd>
            </div>
            <div>
              <dt className="text-foam/50">Fleet</dt>
              <dd className="mt-1 font-medium leading-snug">
                Swift Dzire / Baleno
                <br />
                Maruti Ertiga
                <br />
                Innova Crysta
                <br />
                Kia Carens
              </dd>
            </div>
          </dl>
          </div>
        </div>
      </section>

      <Reveal>
      <section id="book" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-16 md:px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Packages & booking</p>
        <h2 className="title-rainbow mt-3 font-display text-4xl">Book a car or an hourly package</h2>
        <p className="mt-4 max-w-2xl text-foam/65">
          Share pickup details and a rental package if you need one. We reply with a
          fixed fare on WhatsApp.
        </p>
        <div className="animate-slide-in-right delay-1 mt-10 max-w-xl">
          <BookingForm compact />
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">How booking works</p>
        <h2 className="title-rainbow mt-3 font-display text-4xl">Four messages. Then a car at the door.</h2>
        <p className="mt-4 max-w-2xl text-foam/65">
          Most first bookings take a few minutes on WhatsApp. You do not need an app
          login. Send the brief, lock the fare, meet the chauffeur.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {howWeBook.map((item) => (
            <article key={item.step} className="motion-card rounded-3xl border border-white/10 p-5">
              <p className="text-xs tracking-[0.2em] text-gold">{item.step}</p>
              <h3 className="mt-3 font-display text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foam/65">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section id="services" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Services</p>
            <h2 className="title-rainbow mt-3 font-display text-4xl md:text-5xl">Five ways we move you through Goa</h2>
            <p className="mt-3 max-w-xl text-sm text-foam/60">
              Airport taxis, corporate cars, long-distance outstation trips, luxury vehicles,
              and minibuses — each with a private chauffeur and a fare agreed in advance.
            </p>
          </div>
          <Link href="/services" className="hidden text-sm text-gold hover:underline md:inline">
            All services →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className={`motion-card group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 ? "h-64 md:h-80" : "h-52"}`}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foam/70">{service.summary}</p>
                <Link href={`/services#${service.slug}`} className="mt-4 inline-block text-sm text-gold">
                  Plan this ride →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section className="relative overflow-hidden border-y border-white/10 bg-[#0a1a16] py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/beach.jpg"
              alt="Empty tropical beach in South Goa"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Why Quadri</p>
            <h2 className="title-rainbow mt-3 font-display text-4xl">South Goa based. Whole-state reach.</h2>
            <p className="mt-4 text-foam/70">
              From Gogol Housing Board we dispatch chauffeurs who already know Colva,
              Palolem, the Margao railway station, and the late-night run to Mopa. You get
              a private car, a clear fare, and an itinerary that does not feel like a
              tourist conveyor belt.
            </p>
            <p className="mt-4 text-foam/70">
              Local commutes across Salcete, hotel hops in North Goa, and outstation
              corridors into Maharashtra and Karnataka all sit on the same 24/7 desk.
              English, Hindi, Marathi, and Konkani are spoken in the cabin. Child seats and extra
              luggage space are arranged when you book — not improvised at the kerb.
            </p>
            <ul className="mt-8 grid gap-4 text-sm">
              {[
                "Fixed quotes before you confirm — no meter surprises",
                "English, Hindi, Marathi & Konkani speaking drivers",
                "Child seats, extra luggage, and temple/church-day timing",
                "Multi-day holiday cars that stay with your family",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="mt-8 inline-block text-gold hover:underline">
              Our South Goa story →
            </Link>
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Holiday itineraries</p>
        <h2 className="title-rainbow mt-3 font-display text-4xl">Tours paced like a private driver, not a bus.</h2>
        <p className="mt-4 max-w-2xl text-foam/65">
          Sample days below are starting points. We shorten, swap beaches, add a spice
          lunch, or keep the same car for two days once we know your hotel and energy levels.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {tours.slice(0, 4).map((tour) => (
            <article key={tour.title} className="motion-card rounded-3xl border border-white/10 p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl">{tour.title}</h3>
                <span className="text-sm text-gold">{tour.duration}</span>
              </div>
              <p className="mt-2 text-sm text-foam/50">From {tour.from}</p>
              <p className="mt-3 text-sm leading-relaxed text-foam/70">{tour.blurb}</p>
              <p className="mt-4 text-sm text-foam/75">{tour.points.join(" · ")}</p>
            </article>
          ))}
        </div>
        <Link
          href="/tours"
          className="mt-8 inline-flex rounded-full border border-gold/40 px-5 py-2.5 text-sm text-gold"
        >
          Build a custom itinerary
        </Link>
      </section>
      </Reveal>

      <Reveal>
      <section className="mx-auto max-w-6xl px-4 pb-20 md:px-6">
        <h2 className="title-rainbow font-display text-4xl">Guests remember the car as much as the beach</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {reviews.map((review) => (
            <blockquote key={review.name} className="motion-card rounded-3xl bg-white/[0.04] p-6">
              <p className="text-foam/80">“{review.quote}”</p>
              <footer className="mt-5 text-sm">
                <cite className="not-italic text-gold">{review.name}</cite>
                <span className="block text-foam/45">{review.place}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Coverage</p>
        <h2 className="title-rainbow mt-3 font-display text-4xl">Pickups across South Goa — and the rest of the map</h2>
        <p className="mt-4 max-w-2xl text-foam/65">
          Our desk sits in Margao. Cars fan out daily to the
          beaches, both airports, the railway station, and North Goa hotels.
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {areas.map((area) => (
            <li
              key={area}
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-foam/80"
            >
              {area}
            </li>
          ))}
        </ul>
      </section>
      </Reveal>

      <Reveal>
      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <CtaBanner
          title="Landing tonight? Send the flight number."
          text="We track Dabolim and Mopa arrivals, meet you with a name board, and quote a fixed fare to Colva, Palolem, Calangute, or anywhere you are sleeping."
        />
      </section>
      </Reveal>

      <Reveal>
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-6">
        <h2 className="title-rainbow font-display text-4xl">Questions before you land</h2>
        <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="cursor-pointer list-none font-medium marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-gold group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-sm text-foam/65">{item.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-sm text-foam/50">
          Base: {site.address.line}
        </p>
      </section>
      </Reveal>
    </>
  );
}
