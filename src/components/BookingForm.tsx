"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { cabServiceLocations, fleet, rentalPackages, whatsappHref } from "@/lib/site";

export function BookingForm({ compact = false }: { compact?: boolean }) {
  const [vehicleId, setVehicleId] = useState(fleet[0].id);
  const selected = fleet.find((car) => car.id === vehicleId) ?? fleet[0];

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const service = String(data.get("service") || "");
    const when = String(data.get("when") || "");
    const pickup = String(data.get("pickup") || "");
    const packageLabel = String(data.get("package") || "");
    const notes = String(data.get("notes") || "");
    const text = `Booking request from ${name} (${phone}). Service: ${service}. Vehicle: ${selected.name} (${selected.seats}). Pickup address: ${pickup}. Rental package: ${packageLabel}. Date/time: ${when}. Notes: ${notes}`;
    window.open(whatsappHref(text), "_blank", "noopener,noreferrer");
  }

  const form = (
      <form
        onSubmit={onSubmit}
        className={`grid gap-4 rounded-3xl border border-white/10 p-6 ${
          compact ? "bg-ink/80 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl" : ""
        }`}
      >
        <h2 className="font-display text-2xl">Book a car</h2>
        <p className="text-sm text-foam/60">
          {compact
            ? "Share pickup details. We reply with a fixed fare on WhatsApp."
            : "Select a vehicle below or tap a car on the right. We reply with a fixed fare."}
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
        <div className={`grid gap-4 ${compact ? "sm:grid-cols-2" : ""}`}>
        <label className="grid gap-2 text-sm">
          Service
          <select
            name="service"
            className="rounded-xl border border-white/10 bg-[#0c1c18] px-4 py-3 outline-none ring-gold/40 focus:ring-2"
            defaultValue="Airport taxis"
          >
            <option>Airport taxis</option>
            <option>Corporate taxis</option>
            <option>Long distance taxi</option>
            <option>Luxury vehicles</option>
            <option>Minibus taxi</option>
            <option>Custom holiday itinerary</option>
            <option>Rental package</option>
          </select>
        </label>
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
        </div>
        <div className={`grid gap-4 ${compact ? "sm:grid-cols-2" : ""}`}>
        <label className="grid gap-2 text-sm">
          Pickup address
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
          Rental package
          <select
            required
            name="package"
            className="rounded-xl border border-white/10 bg-[#0c1c18] px-4 py-3 outline-none ring-gold/40 focus:ring-2"
            defaultValue=""
          >
            <option value="" disabled>
              Select package
            </option>
            <option value="No package — airport / one-way">No package — airport / one-way</option>
            {rentalPackages.map((pkg) => (
              <option key={pkg.hours} value={pkg.label}>
                {pkg.label}
              </option>
            ))}
          </select>
        </label>
        </div>
        <label className="grid gap-2 text-sm">
          Pickup date & time
          <input
            required
            name="when"
            type="datetime-local"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-gold/40 focus:ring-2"
          />
        </label>
        <label className="grid gap-2 text-sm">
          Pickup / drop notes
          <textarea
            name="notes"
            rows={compact ? 3 : 4}
            className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-gold/40 focus:ring-2"
            placeholder="Airport, hotel, or sightseeing plan"
          />
        </label>
        <button
          type="submit"
          className="rounded-full bg-gold py-3.5 font-semibold text-ink hover:bg-sand"
        >
          Send booking on WhatsApp
        </button>
      </form>
  );

  if (compact) {
    return form;
  }

  return (
    <div className="grid items-start gap-8 lg:grid-cols-2">
      {form}

      <aside>
        <h2 className="font-display text-2xl">Choose your vehicle</h2>
        <p className="mt-2 text-sm text-foam/60">Tap a car to select it for the booking.</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {fleet.map((car) => {
            const active = car.id === vehicleId;
            return (
              <button
                key={car.id}
                type="button"
                onClick={() => setVehicleId(car.id)}
                className={`motion-card overflow-hidden rounded-[1.5rem] border text-left ${
                  active ? "border-gold ring-2 ring-gold/40" : "border-white/10 hover:border-gold/40"
                }`}
              >
              <div className="relative bg-[#081410]">
                {car.image &&
                ["swift-dzire", "ertiga", "innova-crysta", "baleno", "kia-carens"].includes(car.id) ? (
                <Image
                  src={car.image}
                  alt={`${car.name} — ${car.tag} for Quadri Taxi Service`}
                  width={1600}
                  height={1600}
                  className="h-auto w-full object-contain"
                  sizes="(min-width: 1024px) 28vw, 100vw"
                />
                ) : (
                  <div className="grid min-h-40 place-items-center px-4 py-10 text-center text-foam/50">
                    {car.name}
                  </div>
                )}
                {active ? (
                  <span className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">
                    Selected
                  </span>
                ) : null}
              </div>
              <div className="p-4">
                <p className="font-display text-xl">{car.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold">
                  {car.tag} · {car.seats}
                </p>
                <p className="mt-2 text-sm text-foam/65">{car.blurb}</p>
              </div>
            </button>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
