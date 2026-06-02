import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { INSTAGRAM, RESERVE_WHATSAPP, WHATSAPP_LINK, WHATSAPP_NUMBER } from "@/lib/menu-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Find Us — Kurnchi, Gbagada Lagos" },
      { name: "description", content: "Visit Kurnchi at 12 Diya Street, Gbagada, Lagos. WhatsApp, phone, email, hours, map." },
      { property: "og:title", content: "Contact — Kurnchi" },
      { property: "og:description", content: "Find Kurnchi in Gbagada, Lagos." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <div>
      <section className="bg-ink text-cream pt-32 pb-20">
        <div className="container-wide">
          <div className="eyebrow mb-4">Contact</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1] text-balance max-w-3xl">
            Come <span className="italic text-gold">find us</span>, in the heart of Gbagada.
          </h1>
          <div className="mt-16 grid gap-12 md:grid-cols-4">
            {[
              { l: "Address", v: "12 Diya Street\nGbagada Phase 1\nLagos, Nigeria" },
              { l: "Phone & WhatsApp", v: "+234 810 575 4994", href: WHATSAPP_LINK },
              { l: "Email", v: "hello@kurnchi.ng", href: "mailto:hello@kurnchi.ng" },
              { l: "Hours", v: "Mon – Sun\n12:00 – 23:00" },
            ].map((b) => (
              <div key={b.l}>
                <div className="eyebrow mb-3 !text-cream/50">{b.l}</div>
                {b.href ? (
                  <a href={b.href} className="text-cream link-underline whitespace-pre-line font-light text-lg">{b.v}</a>
                ) : (
                  <p className="text-cream whitespace-pre-line font-light text-lg">{b.v}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-7">
            <div className="aspect-[16/10] w-full border border-border overflow-hidden">
              <iframe
                title="Kurnchi location in Gbagada, Lagos"
                src="https://www.google.com/maps?q=Diya+Street+Gbagada+Lagos&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="lg:col-span-5">
            <div className="eyebrow mb-3">Drop us a line</div>
            <h2 className="font-display text-4xl leading-tight">A question, a tip, an event idea?</h2>
            <p className="mt-4 text-foreground/70 font-light leading-relaxed">
              The fastest way to reach the kitchen is WhatsApp. For press, events, and
              partnerships, leave us a note below — we'll reply within a working day.
            </p>

            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-8 space-y-4">
              <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" className="w-full bg-background border border-border focus:border-gold outline-none px-4 py-3 text-sm" />
              <textarea required rows={4} placeholder="Your message" className="w-full bg-background border border-border focus:border-gold outline-none px-4 py-3 text-sm resize-none" />
              <button type="submit" className="btn-primary">Send message</button>
              {sent && <p className="text-sm text-crimson">Thank you — we'll be in touch shortly.</p>}
            </form>

            <div className="mt-10 flex gap-6 text-sm">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="link-underline text-crimson">WhatsApp</a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="link-underline text-crimson">Instagram</a>
              <a href={RESERVE_WHATSAPP} target="_blank" rel="noreferrer" className="link-underline text-crimson">Reserve</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-cream border-t border-gold/30 py-20">
        <div className="container-narrow text-center">
          <div className="font-han text-4xl text-crimson mb-4">书信</div>
          <h2 className="font-display text-4xl md:text-5xl">A short letter, now and then.</h2>
          <p className="mt-3 text-foreground/70 font-light">New dishes, supper clubs, festival menus. Once a month, never more.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input type="email" required placeholder="you@email.com" className="flex-1 bg-background border border-border focus:border-gold outline-none px-4 py-3 text-sm" />
            <button className="btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}