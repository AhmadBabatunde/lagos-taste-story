import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { RESERVE_WHATSAPP, WHATSAPP_NUMBER } from "@/lib/menu-data";
import interiorUrl from "../../KURNCHI_IMAGE_3.png";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reserve a Table — Kurnchi, Gbagada Lagos" },
      { name: "description", content: "Book your table at Kurnchi. Quick form, WhatsApp confirmation, lanterns lit on arrival." },
      { property: "og:title", content: "Reserve a Table — Kurnchi" },
      { property: "og:description", content: "Book your table at Kurnchi in Gbagada, Lagos." },
      { property: "og:url", content: "/reservations" },
    ],
    links: [{ rel: "canonical", href: "/reservations" }],
  }),
  component: ReservationsPage,
});

function ReservationsPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "19:00",
    guests: "2",
    notes: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Kurnchi, I'd like to reserve a table.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0ADate: ${form.date}%0ATime: ${form.time}%0AGuests: ${form.guests}%0ANotes: ${form.notes}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <div>
      <section className="relative h-[45svh] min-h-[360px] bg-ink overflow-hidden">
        <img src={interiorUrl} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 to-ink" />
        <div className="container-wide relative h-full flex items-end pb-16">
          <div>
            <div className="eyebrow mb-4">Reservations</div>
            <h1 className="font-display text-5xl md:text-7xl text-cream leading-[1] text-balance">
              Reserve your <span className="italic text-gold">evening</span>.
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-wide grid gap-16 lg:grid-cols-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5">
            <div className="eyebrow mb-4">How it works</div>
            <h2 className="font-display text-4xl leading-tight">Two minutes. Then it's tonight's problem solved.</h2>
            <ol className="mt-10 space-y-6">
              {[
                ["01", "Tell us when", "Pick a night, a time, and how many seats to set."],
                ["02", "We confirm on WhatsApp", "A real human writes back within minutes during opening hours."],
                ["03", "Arrive. Be welcomed.", "Your table is set, the menus open, the lanterns warm."],
              ].map(([n, t, d]) => (
                <li key={n} className="grid grid-cols-[auto_1fr] gap-5">
                  <span className="font-display text-3xl text-gold leading-none">{n}</span>
                  <div>
                    <div className="font-display text-xl">{t}</div>
                    <p className="text-foreground/65 font-light leading-relaxed mt-1">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-12 border-t border-border pt-8">
              <div className="eyebrow mb-3">For private events</div>
              <p className="text-foreground/70 font-light">
                Birthdays, business dinners, weddings — three private rooms,
                seating up to 40. <a href={RESERVE_WHATSAPP} target="_blank" rel="noreferrer" className="text-crimson link-underline">Plan with us →</a>
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 bg-card p-8 md:p-12 border border-border"
          >
            <h3 className="font-display text-3xl mb-8">Book your table</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Full name" required>
                <input required value={form.name} onChange={update("name")} className={inputCls} />
              </Field>
              <Field label="Phone (WhatsApp)" required>
                <input required type="tel" value={form.phone} onChange={update("phone")} className={inputCls} />
              </Field>
              <Field label="Date" required>
                <input required type="date" value={form.date} onChange={update("date")} className={inputCls} />
              </Field>
              <Field label="Time" required>
                <select required value={form.time} onChange={update("time")} className={inputCls}>
                  {Array.from({ length: 22 }, (_, i) => {
                    const h = 12 + Math.floor(i / 2);
                    const m = i % 2 === 0 ? "00" : "30";
                    return `${String(h).padStart(2, "0")}:${m}`;
                  }).map((t) => <option key={t}>{t}</option>)}
                </select>
              </Field>
              <Field label="Guests" required>
                <select required value={form.guests} onChange={update("guests")} className={inputCls}>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>)}
                  <option value="13+">13+ (private room)</option>
                </select>
              </Field>
              <Field label="Occasion / notes" className="md:col-span-2">
                <textarea value={form.notes} onChange={update("notes")} rows={3} placeholder="Birthday, dietary needs, seating preference…" className={inputCls + " resize-none"} />
              </Field>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 items-center">
              <button type="submit" className="btn-primary">Send via WhatsApp</button>
              <p className="text-xs text-foreground/55 font-light">We'll confirm in minutes during opening hours (12 – 23h).</p>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}

const inputCls = "w-full bg-background border border-border focus:border-gold outline-none px-4 py-3 text-sm";

function Field({ label, required, className, children }: { label: string; required?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="block eyebrow !text-foreground/60 mb-2">{label}{required && <span className="text-crimson"> *</span>}</span>
      {children}
    </label>
  );
}