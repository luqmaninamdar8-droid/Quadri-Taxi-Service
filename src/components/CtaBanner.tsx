import { whatsappHref } from "@/lib/site";

export function CtaBanner({
  title,
  text,
  action = "Book on WhatsApp",
  message,
}: {
  title: string;
  text: string;
  action?: string;
  message?: string;
}) {
  return (
    <aside className="motion-card rounded-[1.5rem] bg-gradient-to-r from-lagoon to-[#12352f] p-6 sm:rounded-[2rem] sm:p-8 md:p-12">
      <h2 className="title-rainbow font-display text-2xl sm:text-3xl">{title}</h2>
      <p className="mt-3 max-w-2xl text-foam/75">{text}</p>
      <a
        href={whatsappHref(message)}
        className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-semibold text-ink"
      >
        {action}
      </a>
    </aside>
  );
}
