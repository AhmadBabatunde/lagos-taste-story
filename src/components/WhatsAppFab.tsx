import { RESERVE_WHATSAPP } from "@/lib/menu-data";

export function WhatsAppFab() {
  return (
    <a
      href={RESERVE_WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Reserve on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-[var(--gold)]/40 blur-xl group-hover:bg-[var(--gold)]/60 transition" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/30 ring-1 ring-white/20 transition-transform group-hover:scale-110">
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
          <path d="M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.1 1.6 5.9L0 24l6.4-1.7a11.9 11.9 0 005.6 1.4h.1c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.5-8.3zM12 21.5a9.5 9.5 0 01-4.8-1.3l-.4-.2-3.8 1 1-3.7-.2-.4a9.6 9.6 0 1117.7-5.1c0 5.3-4.3 9.7-9.5 9.7zm5.5-7.2c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.7-.8-2.9-1.5-4-3.5-.3-.5.3-.5.9-1.5.1-.2.1-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/>
        </svg>
      </span>
    </a>
  );
}
