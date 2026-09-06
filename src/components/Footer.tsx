import Link from "next/link";
import { nav, site, telHref, whatsappHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050f0c]">
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-lagoon/40 blur-3xl" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <p className="font-display text-2xl text-foam">
            Quadri <span className="text-gold">Taxi Service</span>
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-foam/65">
            24/7 private transportation and tour provider based in South Goa —
            local commutes, outstation travel, and tailored holiday itineraries.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={whatsappHref()} className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink">
              WhatsApp booking
            </a>
            <a href={telHref()} className="rounded-full border border-white/15 px-4 py-2 text-sm">
              {site.phoneDisplay}
            </a>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Explore</p>
          <ul className="mt-4 grid gap-2 text-sm text-foam/70">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Visit</p>
          <address className="mt-4 not-italic text-sm leading-relaxed text-foam/70">
            {site.address.line}
            <br />
            {site.hours}
            <br />
            <a href={`mailto:${site.email}`} className="mt-2 inline-block text-gold hover:underline">
              {site.email}
            </a>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-foam/45">
        © {new Date().getFullYear()} {site.name}. Private taxis across Goa.
      </div>
    </footer>
  );
}
