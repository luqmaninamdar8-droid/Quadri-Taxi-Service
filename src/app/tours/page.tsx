import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner } from "@/components/CtaBanner";
import { RentalPackages } from "@/components/RentalPackages";
import { Reveal } from "@/components/Reveal";
import { tours, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Private Goa Holiday Itineraries & Day Tours",
  description:
    "Private Goa holiday itineraries, day tours, and rental packages from 1 Hour 10 km to 12 Hours 120 km with Quadri Taxi Service.",
  alternates: { canonical: "/tours" },
};

export default function ToursPage() {
  return (
    <>
      <section className="relative h-[48vh] min-h-[320px]">
        <Image
          src="/images/coast.jpg"
          alt="Turquoise water and sand on a Goa coastline"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="relative mx-auto flex h-full max-w-6xl items-end px-4 pb-12 md:px-6">
          <div>
            <p className="animate-fade-up text-xs uppercase tracking-[0.3em] text-gold">Tours</p>
            <h1 className="title-rainbow animate-fade-up delay-1 mt-3 font-display text-5xl">Holiday itineraries, written around you</h1>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <p className="max-w-2xl text-foam/70">
          Tell us your hotel, flight, and how much walking you actually want. We stitch
          churches, spice estates, forts, and quiet beaches into a private day — or a
          multi-day car that stays with your family.
        </p>
        <p className="mt-4 max-w-2xl text-foam/70">
          These are sample days, not rigid packages. Monsoon changes waterfall access;
          feast days change church timing; children change lunch stops. We rebuild the
          route the evening before so you are not stuck on someone else’s coach schedule.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { t: "Private car", d: "No sharing seats with strangers. Stop for photographs when you want." },
            { t: "Hotel start", d: "We collect you in Colva, Palolem, Margao, Calangute, or any villa pin." },
            { t: "Flexible hours", d: "Four-hour market loops or ten-hour north-south days — priced before you go." },
          ].map((item) => (
            <article key={item.t} className="motion-card rounded-2xl border border-white/10 p-5">
              <h2 className="font-display text-xl">{item.t}</h2>
              <p className="mt-2 text-sm text-foam/65">{item.d}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {tours.map((tour) => (
            <Reveal key={tour.title}>
            <article className="motion-card rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-gold">{tour.duration}</p>
              <h2 className="title-rainbow mt-2 font-display text-3xl">{tour.title}</h2>
              <p className="mt-2 text-sm text-foam/50">Typical start: {tour.from}</p>
              <p className="mt-4 text-sm leading-relaxed text-foam/75">{tour.blurb}</p>
              <p className="mt-3 text-sm text-foam/55">Best for: {tour.bestFor}</p>
              <ol className="mt-6 grid gap-3">
                {tour.points.map((point, i) => (
                  <li key={point} className="flex gap-3 text-foam/80">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/15 text-xs text-gold">
                      {i + 1}
                    </span>
                    {point}
                  </li>
                ))}
              </ol>
              <a
                href={whatsappHref(`I would like the ${tour.title} itinerary.`)}
                className="mt-8 inline-block text-sm text-gold hover:underline"
              >
                Request this day →
              </a>
            </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
        <div className="mt-16">
          <RentalPackages />
        </div>
        </Reveal>

        <Reveal>
        <section className="mt-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="title-rainbow font-display text-3xl">How a custom day is built</h2>
            <ol className="mt-6 grid gap-4 text-sm text-foam/70">
              <li>1. Hotel or villa pin, dates, and who is travelling (ages help with walking and AC breaks).</li>
              <li>2. Must-sees versus nice-to-haves — we drop a stop rather than rush the whole list.</li>
              <li>3. Lunch style: plantation thali, beach shack, or a quiet café in Fontainhas.</li>
              <li>4. We send a timed outline the evening before, with a weather or feast-day backup.</li>
            </ol>
          </div>
          <div className="motion-card rounded-[2rem] border border-white/10 p-8">
            <h2 className="title-rainbow font-display text-3xl">Season notes</h2>
            <p className="mt-4 text-sm leading-relaxed text-foam/70">
              October to March is the busiest window for North Goa beaches and sunset forts.
              June to September is greener inland — spice estates shine, some waterfall
              viewpoints close or get muddy, and we favour shorter coastal hops. Christmas
              and New Year need cars booked early, especially minibuses and luxury SUVs.
            </p>
          </div>
        </section>
        </Reveal>

        <Reveal>
        <div className="mt-14">
          <CtaBanner
            title="Need something that is not on this list?"
            text="Honeymoon slow-days, church feast logistics, cricket team minibuses, or a Mumbai–Goa overnight — we design the route, rest stops, and vehicle around the group."
            action="Design my itinerary"
            message="I need a custom holiday itinerary in Goa."
          />
        </div>
        </Reveal>
      </div>
    </>
  );
}
