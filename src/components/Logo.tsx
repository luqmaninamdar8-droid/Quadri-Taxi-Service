export function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect width="64" height="64" rx="16" fill="#0a1c16" />
      <rect x="1.5" y="1.5" width="61" height="61" rx="14.5" fill="none" stroke="#e4b15a" strokeOpacity="0.28" />
      <circle cx="30" cy="29" r="15.5" fill="none" stroke="#e4b15a" strokeWidth="5.2" />
      <path d="M41 40.5 48 48" stroke="#e4b15a" strokeWidth="5.2" strokeLinecap="round" />
      <circle cx="48.2" cy="48.2" r="7.2" fill="#e4b15a" />
      <circle cx="48.2" cy="48.2" r="3.1" fill="#0a1c16" />
      <circle cx="48.2" cy="48.2" r="1.15" fill="#e4b15a" />
    </svg>
  );
}

export function Logo({ showTagline = true }: { showTagline?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark className="h-11 w-11 shrink-0 drop-shadow-[0_0_18px_rgba(228,177,90,0.28)]" />
      <span>
        <span className="title-rainbow block font-display text-lg leading-none tracking-tight">
          Quadri Cabs
        </span>
        {showTagline ? (
          <span className="mt-1 block text-[11px] uppercase tracking-[0.22em] text-foam/55">
            South Goa · 24/7
          </span>
        ) : null}
      </span>
    </span>
  );
}
