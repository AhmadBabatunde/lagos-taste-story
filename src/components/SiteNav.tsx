import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoUrl from "../../kurnchi_resturant_logo.jpg";
import { RESERVE_WHATSAPP } from "@/lib/menu-data";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Our Story" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reservations", label: "Reserve" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-[oklch(0.18_0.02_40)/0.92] backdrop-blur-md border-b border-[oklch(1_0_0/0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Kurnchi home">
          <img
            src={logoUrl}
            alt="Kurnchi"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover ring-1 ring-[var(--gold)]/40"
          />
          <span className="font-display text-xl text-cream tracking-wide">
            Kurnchi
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9 text-cream/85 text-[0.78rem] tracking-[0.18em] uppercase">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="link-underline hover:text-cream transition-colors"
              activeProps={{ className: "text-[var(--gold)] link-underline" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href={RESERVE_WHATSAPP} target="_blank" rel="noreferrer" className="btn-ghost text-cream border-[var(--gold)]/60 hover:text-ink">
            Book a Table
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-11 w-11 items-center justify-center text-cream"
        >
          <div className="relative h-4 w-6">
            <span className={`absolute left-0 top-0 h-px w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-2 h-px w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-4 h-px w-6 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.7, 0, 0.2, 1] }}
            className="lg:hidden overflow-hidden border-t border-[oklch(1_0_0/0.08)]"
          >
            <nav className="container-wide flex flex-col gap-1 py-6">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl text-cream py-2"
                  activeProps={{ className: "text-[var(--gold)]" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={RESERVE_WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-4 self-start"
              >
                Reserve on WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
