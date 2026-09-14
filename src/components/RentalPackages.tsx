"use client";

import { useState } from "react";
import { RentalPackageForm } from "@/components/RentalPackageForm";
import { rentalPackages } from "@/lib/site";

export function RentalPackages() {
  const [selectedPackage, setSelectedPackage] = useState(rentalPackages[3].label);

  function choosePackage(label: string) {
    setSelectedPackage(label);
    document.getElementById("rental-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section id="rental-packages">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Local hire</p>
      <h2 className="title-rainbow mt-3 font-display text-4xl">Rental package</h2>
      <p className="mt-4 max-w-2xl text-foam/70">
        Hourly cabs with a matching kilometre limit. Extra hours and extra km are
        quoted before you extend. Tap a package, then send the form — we reply with a
        fixed fare on WhatsApp.
      </p>
      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {rentalPackages.map((pkg) => {
          const active = selectedPackage === pkg.label;
          return (
            <li key={pkg.hours}>
              <button
                type="button"
                onClick={() => choosePackage(pkg.label)}
                className={`motion-card flex h-full w-full items-center justify-between gap-3 rounded-2xl border px-5 py-4 text-left ${
                  active
                    ? "border-gold bg-gold/10 ring-2 ring-gold/30"
                    : "border-white/10 bg-white/[0.03] hover:bg-gold/5"
                }`}
              >
                <span>
                  <span className="block font-display text-xl">
                    {pkg.hours} {pkg.hours === 1 ? "Hour" : "Hours"}
                  </span>
                  <span className="mt-1 block text-sm text-foam/55">{pkg.km} km</span>
                </span>
                <span className="text-sm text-gold">{active ? "Selected" : "Select →"}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="mt-10 max-w-xl">
        <RentalPackageForm selectedPackage={selectedPackage} onPackageChange={setSelectedPackage} />
      </div>
    </section>
  );
}
