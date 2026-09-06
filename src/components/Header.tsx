"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site, telHref, whatsappHref } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071310]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-gold to-gold-deep text-ink shadow-[0_0_24px_rgba(228,177,90,0.35)]">
            <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden>
              <path
                d="M6 20h20l-1.6-6.2A3 3 0 0 0 21.5 11H10.5a3 3 0 0 0-2.9 2.8L6 20Z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle cx="10" cy="22.5" r="2" fill="currentColor" />
              <circle cx="22" cy="22.5" r="2" fill="currentColor" />
              <path d="M11 11V8.5A2.5 2.5 0 0 1 13.5 6h5A2.5 2.5 0 0 1 21 8.5V11" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </span>
          <span>
            <span className="block font-display text-lg leading-none tracking-tight text-foam">
              Quadri <span className="text-gold">Taxi</span>
            </span>
            <span className="mt-1 block text-[11px] uppercase tracking-[0.22em] text-foam/55">
              South Goa · 24/7
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm transition ${
                  active
                    ? "bg-white/10 text-gold"
                    : "text-foam/75 hover:bg-white/5 hover:text-foam"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href={telHref()}
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-foam/90 hover:border-gold/50 hover:text-gold"
          >
            Call now
          </a>
          <a
            href={whatsappHref()}
            className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink hover:bg-sand"
          >
            Book on WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-foam transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foam ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foam transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-ink px-4 py-4 lg:hidden">
          <nav className="grid gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-foam/90 hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <a href={telHref()} className="rounded-xl border border-white/15 py-3 text-center text-sm">
              Call {site.phoneDisplay}
            </a>
            <a href={whatsappHref()} className="rounded-xl bg-gold py-3 text-center text-sm font-semibold text-ink">
              WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
