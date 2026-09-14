"use client";

import { FormEvent, useState } from "react";
import { cabServiceLocations, fleet, rentalPackages, whatsappHref } from "@/lib/site";

export function RentalPackageForm({
  compact = false,
  selectedPackage,
  onPackageChange,
}: {
  compact?: boolean;
  selectedPackage?: string;
  onPackageChange?: (label: string) => void;
}) {
  const [vehicleId, setVehicleId] = useState(fleet[0].id);
  const [internalPackage, setInternalPackage] = useState(rentalPackages[3].label);
  const packageLabel = selectedPackage ?? internalPackage;
  const selected = fleet.find((car) => car.id === vehicleId) ?? fleet[0];

  function setPackage(label: string) {
    if (onPackageChange) {
      onPackageChange(label);
      return;
    }
    setInternalPackage(label);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const pickup = String(data.get("pickup") || "");
    const drop = String(data.get("drop") || "");
    const when = String(data.get("when") || "");
    const notes = String(data.get("notes") || "");
    const text = `Rental package request from ${name} (${phone}). Package: ${packageLabel}. Vehicle: ${selected.name} (${selected.seats}). Pickup: ${pickup}. Drop: ${drop}. Start date/time: ${when}. Notes: ${notes}`;
    window.open(whatsappHref(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      id="rental-form"
      onSubmit={onSubmit}
      className={`grid scroll-mt-28 gap-4 rounded-3xl border border-white/10 p-6 ${
        compact ? "bg-ink/80 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl" : ""
      }`}
    >
      <h2 className="title-rainbow font-display text-2xl">Book a rental package</h2>
      <p className="text-sm text-foam/60">
        Hourly hire with a matching kilometre limit. Extra hours and extra km are quoted
        before you extend.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          Name
          <input
            required
            name="name"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-gold/40 focus:ring-2"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm">
          Phone
          <input
            required
            name="phone"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-gold/40 focus:ring-2"
            placeholder="+91"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm">
        Rental package
        <select
          required
          name="package"
          value={packageLabel}
          onChange={(event) => setPackage(event.target.value)}
          className="rounded-xl border border-white/10 bg-[#0c1c18] px-4 py-3 outline-none ring-gold/40 focus:ring-2"
        >
          {rentalPackages.map((pkg) => (
            <option key={pkg.hours} value={pkg.label}>
              {pkg.label}
            </option>
          ))}
        </select>
      </label>
      <div className="flex flex-wrap gap-2">
        {rentalPackages
          .filter((pkg) => [1, 4, 8, 12].includes(pkg.hours))
          .map((pkg) => (
            <button
              key={pkg.hours}
              type="button"
              onClick={() => setPackage(pkg.label)}
              className={`rounded-full px-3 py-1.5 text-xs ${
                packageLabel === pkg.label
                  ? "bg-gold font-semibold text-ink"
                  : "border border-white/15 text-foam/70 hover:border-gold/50"
              }`}
            >
              {pkg.label}
            </button>
          ))}
      </div>
      <label className="grid gap-2 text-sm">
        Vehicle
        <select
          name="vehicle"
          value={vehicleId}
          onChange={(event) => setVehicleId(event.target.value)}
          className="rounded-xl border border-white/10 bg-[#0c1c18] px-4 py-3 outline-none ring-gold/40 focus:ring-2"
        >
          {fleet.map((car) => (
            <option key={car.id} value={car.id}>
              {car.name} — {car.tag} ({car.seats})
            </option>
          ))}
        </select>
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          Pickup location
          <select
            required
            name="pickup"
            className="rounded-xl border border-white/10 bg-[#0c1c18] px-4 py-3 outline-none ring-gold/40 focus:ring-2"
            defaultValue=""
          >
            <option value="" disabled>
              Select pickup location
            </option>
            {cabServiceLocations.map((place) => (
              <option key={place} value={place}>
                {place}
              </option>
            ))}
            <option value="Other">Other (add in notes)</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm">
          Drop location
          <select
            required
            name="drop"
            className="rounded-xl border border-white/10 bg-[#0c1c18] px-4 py-3 outline-none ring-gold/40 focus:ring-2"
            defaultValue=""
          >
            <option value="" disabled>
              Select drop location
            </option>
            {cabServiceLocations.map((place) => (
              <option key={place} value={place}>
                {place}
              </option>
            ))}
            <option value="Other">Other (add in notes)</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm">
        Start date & time
        <input
          required
          name="when"
          type="datetime-local"
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-gold/40 focus:ring-2"
        />
      </label>
      <label className="grid gap-2 text-sm">
        Places you want to cover
        <textarea
          name="notes"
          rows={compact ? 3 : 4}
          className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-gold/40 focus:ring-2"
          placeholder="Beaches, church, market, or extra hours"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-gold py-3.5 font-semibold text-ink hover:bg-sand"
      >
        Send rental request on WhatsApp
      </button>
    </form>
  );
}
