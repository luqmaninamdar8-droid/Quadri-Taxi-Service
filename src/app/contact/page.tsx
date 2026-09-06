import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { CtaBanner } from "@/components/CtaBanner";
import { areas, faqs, pickupTips, site, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Book a Taxi in Margao, Goa",
  description:
    "Contact Quadri Taxi Service at Gogol Housing Board, Margao, Goa 403601. Book 24/7 airport taxis, tours, luxury cars, and minibuses. Map, WhatsApp, and booking form included.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Contact</p>
      <h1 className="mt-3 font-display text-5xl">Find us in Margao — or let us find you at the airport</h1>
      <p className="mt-4 max-w-2xl text-foam/70">
        Dispatch is awake all night. Share your flight, hotel, or itinerary and we
        confirm a vehicle within minutes. Most bookings start on WhatsApp; the form
        below opens a pre-filled message so nothing is missed.
      </p>
      <p className="mt-4 max-w-2xl text-foam/70">
        Walking in: Gogol Housing Board is on the Margao side of South Goa,
        close to Madgaon railway station and a straightforward drive to Colva and
        Benaulim. If you are a guest, you do not need to visit — we collect you.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 p-6">
            <h2 className="font-display text-2xl">Quadri Taxi Service</h2>
            <address className="mt-3 not-italic leading-relaxed text-foam/75">
              {site.address.line}
            </address>
            <p className="mt-4 text-sm text-foam/60">{site.hours}</p>
            <div className="mt-5 grid gap-2 text-sm">
              <a href={telHref()} className="text-gold hover:underline">
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="text-gold hover:underline">
                {site.email}
              </a>
              <a
                href={site.mapLink}
                target="_blank"
                rel="noreferrer"
                className="text-foam/70 hover:text-gold"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 p-6">
            <h2 className="font-display text-xl">What to send so we can quote fast</h2>
            <ul className="mt-4 grid gap-2 text-sm text-foam/70">
              {pickupTips.map((tip) => (
                <li key={tip} className="flex gap-2">
                  <span className="text-gold">·</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h2 className="font-display text-2xl">Map of Quadri Taxi Service</h2>
          <p className="mt-2 mb-4 text-sm text-foam/60">
            Pin centred on Gogol Housing Board, Margao — our South Goa base.
          </p>
          <div className="overflow-hidden rounded-[2rem] border border-white/10">
            <iframe
              title="Map of Quadri Taxi Service, Gogol Housing Board, Margao, Goa"
              src={site.mapEmbed}
              className="h-[520px] w-full grayscale-[0.2] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <section className="mt-16">
        <BookingForm />
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl">How to reach Gogol Housing Board</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            {
              t: "From Madgaon station",
              d: "A short taxi or auto hop into Gogol Housing Board. Share your train number if you want us waiting at the exit.",
            },
            {
              t: "From Dabolim Airport",
              d: "Usually under an hour depending on traffic via the NH and Margao approaches. We also run the reverse airport drop 24/7.",
            },
            {
              t: "From Palolem or Colva",
              d: "Coastal guests rarely visit the office. Message a pin; the car comes to the villa or hotel porch.",
            },
          ].map((item) => (
            <article key={item.t} className="rounded-3xl border border-white/10 p-6">
              <h3 className="font-display text-xl">{item.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foam/65">{item.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl">Pickup areas we quote every day</h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {areas.map((area) => (
            <li key={area} className="rounded-full border border-white/10 px-4 py-2 text-sm">
              {area}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-3xl">Before you message</h2>
        <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="cursor-pointer list-none font-medium">
                <span className="flex justify-between gap-4">
                  {item.q}
                  <span className="text-gold">+</span>
                </span>
              </summary>
              <p className="mt-2 max-w-3xl text-sm text-foam/65">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="mt-16">
        <CtaBanner
          title="Prefer to talk now?"
          text={`Call ${site.phoneDisplay} or use WhatsApp — both reach the same 24/7 dispatch in Margao.`}
        />
      </div>
    </div>
  );
}
