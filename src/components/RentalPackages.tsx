import { rentalPackages, whatsappHref } from "@/lib/site";

export function RentalPackages() {
  return (
    <section id="rental-packages">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Local hire</p>
      <h2 className="title-rainbow mt-3 font-display text-4xl">Rental package</h2>
      <p className="mt-4 max-w-2xl text-foam/70">
        Hourly cabs with a matching kilometre limit. Extra hours and extra km are
        quoted before you extend. Choose Baleno, Dzire, Ertiga, Innova Crysta, or Kia Carens when you book.
      </p>
      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {rentalPackages.map((pkg) => (
          <li key={pkg.hours}>
            <a
              href={whatsappHref(`Hello Quadri Cabs, I want the rental package: ${pkg.label}.`)}
              className="motion-card flex h-full items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:bg-gold/5"
            >
              <span>
                <span className="block font-display text-xl">
                  {pkg.hours} {pkg.hours === 1 ? "Hour" : "Hours"}
                </span>
                <span className="mt-1 block text-sm text-foam/55">{pkg.km} km</span>
              </span>
              <span className="text-sm text-gold">Book →</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
