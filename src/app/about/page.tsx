import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { areas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Quadri Taxi Service in South Goa",
  description:
    "Meet Quadri Taxi Service — a 24/7 private transportation and tour provider based at Gogol Housing Board, Margao, Goa 403601. Local commutes, outstation travel, and tailored holidays.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">About</p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl">A South Goa taxi desk that still answers the phone at 3am</h1>
      <div className="mt-10 grid items-start gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 text-foam/75 leading-relaxed">
          <p>
            Quadri Taxi Service is a 24/7 private transportation and tour provider based
            in South Goa. We exist for the unglamorous moments that make a holiday work:
            the delayed Mopa landing, the wedding guest list that grew overnight, the
            grandparents who would rather not change cars three times.
          </p>
          <p>
            From our base at Gogol Housing Board in Margao, we cover local
            commutes across Salcete, outstation corridors into Maharashtra and Karnataka,
            and holiday itineraries that treat Goa as more than a beach transfer.
          </p>
          <p>
            The fleet is deliberately mixed — airport sedans, corporate cars, luxury SUVs,
            and minibuses — so a couple, a board, and a church group can all book the same
            trusted desk.
          </p>
          <p>
            Drivers who work with us are expected to know the difference between a tourist
            rush and a family pace: when to wait at a church porch, when to skip a crowded
            beach parking lot, and how to brief a guest in English, Hindi, or Konkani
            without filling the cabin with chatter.
          </p>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
          <Image
            src="/images/church.jpg"
            alt="Old Goa church façade under tropical trees"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>
      </div>

      <dl className="mt-16 grid gap-6 rounded-[2rem] border border-white/10 p-8 sm:grid-cols-3">
        <div>
          <dt className="text-xs uppercase tracking-[0.2em] text-gold">Base</dt>
          <dd className="mt-2">{site.address.line}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.2em] text-gold">Hours</dt>
          <dd className="mt-2">{site.hours}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.2em] text-gold">Coverage</dt>
          <dd className="mt-2">South Goa, North Goa, outstation India</dd>
        </div>
      </dl>

      <section className="mt-16">
        <h2 className="font-display text-4xl">What we will not do</h2>
        <p className="mt-4 max-w-2xl text-foam/70">
          We do not run shared tourist buses, meter-only surprises on quoted packages, or
          itineraries that treat every guest like a checklist. If a stop will ruin the
          rest of your day, we say so before you leave the hotel.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              t: "Local first",
              d: "Salcete roads, feast calendars, and monsoon shortcuts are part of the job — not a GPS afterthought.",
            },
            {
              t: "One conversation",
              d: "Airport, wedding, and outstation bookings stay on the same number so you are not passed between apps.",
            },
            {
              t: "Clear cars",
              d: "You know the vehicle type before pickup. If we must upgrade or substitute, we tell you first.",
            },
          ].map((item) => (
            <article key={item.t} className="rounded-3xl bg-white/[0.04] p-6">
              <h3 className="font-display text-2xl">{item.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foam/65">{item.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-4xl">Where the cars actually go</h2>
        <p className="mt-4 max-w-2xl text-foam/70">
          Daily work is South Goa heavy. North Goa and outstation jobs are scheduled,
          not improvised at midnight — unless you need an emergency airport run, which
          we still take.
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {areas.map((area) => (
            <li key={area} className="rounded-full border border-white/10 px-4 py-2 text-sm">
              {area}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-foam/60">
          Languages in the cabin: English, Hindi, Konkani. GST invoices for corporate
          accounts. Child seats on request.
        </p>
      </section>

      <section className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="relative min-h-[280px] overflow-hidden rounded-[2rem]">
          <Image
            src="/images/beach.jpg"
            alt="South Goa shoreline"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="font-display text-3xl">Visit the desk — or never see it</h2>
          <p className="mt-4 text-foam/70">
            Most guests never come to Gogol. The car comes to the hotel. If you are local
            and prefer to confirm a wedding fleet in person, we are at Gogol Housing Board,
            Margao, Goa 403601.{" "}
            <Link href="/contact" className="text-gold hover:underline">
              Map and booking form
            </Link>
            .
          </p>
        </div>
      </section>

      <div className="mt-16">
        <CtaBanner
          title="Need a chauffeur who already knows South Goa?"
          text="Send dates, passenger count, and whether this is an airport, a wedding, or a slow holiday car. We reply with a vehicle and a fare."
        />
      </div>
    </div>
  );
}
