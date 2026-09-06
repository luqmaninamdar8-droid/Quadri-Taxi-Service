"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { fleet, site, whatsappHref } from "@/lib/site";

export function BookingForm() {
  const [sent, setSent] = useState(false);
  const [vehicleId, setVehicleId] = useState(fleet[0].id);
  const selected = fleet.find((car) => car.id === vehicleId) ?? fleet[0];

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const service = String(data.get("service") || "");
    const when = String(data.get("when") || "");
    const notes = String(data.get("notes") || "");
    const text = `Booking request from ${name} (${phone}). Service: ${service}. Vehicle: ${selected.name} (${selected.seats}). Date/time: ${when}. Notes: ${notes}`;
    window.open(whatsappHref(text), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-gold/30 bg-gold/10 p-8 text-center">
        <p className="font-display text-2xl text-gold">WhatsApp is opening</p>
        <p className="mt-2 text-sm text-foam/70">
          {selected.name} noted. If WhatsApp did not open, message us at {site.phoneDisplay} or email{" "}
          {site.email}.
        </p>
      </div>
    );
  }

  return (
    <div className="grid items-start gap-8 lg:grid-cols-2">
      <form onSubmit={onSubmit} className="grid gap-4 rounded-3xl border border-white/10 p-6">
        <h2 className="font-display text-2xl">Book a car</h2>
        <p className="text-sm text-foam/60">
          Select a vehicle below or tap a car on the right. We reply with a fixed fare.
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
            rows={4}
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

      <aside>
        <h2 className="font-display text-2xl">Choose your vehicle</h2>
        <p className="mt-2 text-sm text-foam/60">Tap a car to select it for the booking.</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {["innova-crysta", "ertiga", "swift-dzire"].map((id) => {
            const car = fleet.find((item) => item.id === id);
            if (!car) return null;
            const active = car.id === vehicleId;
            return (
              <button
                key={car.id}
                type="button"
                onClick={() => setVehicleId(car.id)}
                className={`overflow-hidden rounded-[1.5rem] border text-left transition ${
                  car.id === "swift-dzire" ? "sm:col-span-2" : ""
                } ${
                  active ? "border-gold ring-2 ring-gold/40" : "border-white/10 hover:border-gold/40"
                }`}
              >
              <div className="relative bg-[#081410]">
                <Image
                  src={car.image}
                  alt={`${car.name} — ${car.tag} for Quadri Taxi Service`}
                  width={1600}
                  height={1600}
                  className="h-auto w-full object-contain"
                  sizes="(min-width: 1024px) 28vw, 100vw"
                />
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
