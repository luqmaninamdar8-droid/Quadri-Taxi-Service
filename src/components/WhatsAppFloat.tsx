import { services, site, telHref, whatsappHref } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-5 right-5 z-50 grid gap-3">
      <a
        href={telHref()}
        className="grid h-14 w-14 place-items-center rounded-full bg-gold text-ink shadow-[0_10px_30px_rgba(228,177,90,0.45)] transition hover:scale-105"
        aria-label={`Call ${site.phoneDisplay}`}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
          <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1.1.5 1.1 1.1V21c0 .6-.5 1.1-1.1 1.1C11.6 22.1 1.9 12.4 1.9 1.9 1.9 1.3 2.4.8 3 .8h3.3c.6 0 1.1.5 1.1 1.1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.2 1.1l-2.2 2Z" />
        </svg>
      </a>
      <a
        href={whatsappHref(
          `Hello Quadri Cabs, I need a ${services[0].title.toLowerCase()} in Goa.`
        )}
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden>
          <path d="M19.1 17.6c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1.1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.5-.6.2-.3a.5.5 0 0 0 0-.5l-.9-2.1c-.2-.6-.5-.5-.6-.5h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4.1 15.7 15.7 0 0 0 1.6.6 3.8 3.8 0 0 0 1.8.1 2.9 2.9 0 0 0 1.9-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3ZM16 5.3A10.7 10.7 0 0 0 6.4 21.3L5 27l5.8-1.5A10.7 10.7 0 1 0 16 5.3Zm0 19.5a8.9 8.9 0 0 1-4.5-1.2l-.3-.2-3.5.9.9-3.4-.2-.3A8.9 8.9 0 1 1 16 24.8Z" />
        </svg>
      </a>
    </div>
  );
}
