import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { menuCategories, RESERVE_WHATSAPP } from "@/lib/menu-data";
import dishSignature from "@/assets/dish-signature.jpg";
import menuPdf from "../../Kurry n chilli menu_compressed.pdf";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Kurnchi Chinese Restaurant, Lagos" },
      { name: "description", content: "Starters, soups, wok-fired beef, prawn and fish, fragrant rice and noodles. The full Kurnchi menu." },
      { property: "og:title", content: "Menu — Kurnchi" },
      { property: "og:description", content: "The full Kurnchi menu — Cantonese fire, Lagos warmth." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState<string>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menuCategories
      .filter((c) => active === "all" || c.id === active)
      .map((c) => ({
        ...c,
        items: c.items.filter((i) =>
          q === "" || i.name.toLowerCase().includes(q) || (i.description ?? "").toLowerCase().includes(q),
        ),
      }))
      .filter((c) => c.items.length > 0);
  }, [active, query]);

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[55svh] min-h-[420px] bg-ink overflow-hidden">
        <img src={dishSignature} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 to-ink" />
        <div className="container-wide relative h-full flex items-end pb-16">
          <div>
            <div className="eyebrow mb-4">The Menu</div>
            <h1 className="font-display text-5xl md:text-7xl text-cream leading-[1] text-balance">
              From the <span className="italic text-gold">wok</span>, to your table.
            </h1>
            <p className="mt-6 text-cream/70 max-w-xl font-light text-lg">
              Prices in Naira. Vegetarian options on request. Spice levels — gentle,
              warm, or full Lagos heat — your call.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="sticky top-[68px] z-30 bg-background/90 backdrop-blur border-b border-border">
        <div className="container-wide flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 overflow-x-auto -mx-1 px-1">
            {[{ id: "all", name: "All" }, ...menuCategories].map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`whitespace-nowrap px-4 py-2 text-[0.7rem] tracking-[0.2em] uppercase border transition-colors ${
                  active === c.id
                    ? "bg-crimson text-cream border-crimson"
                    : "border-border hover:border-gold hover:text-crimson"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
          <label className="relative lg:w-72">
            <span className="sr-only">Search dishes</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes…"
              className="w-full bg-transparent border border-border focus:border-gold outline-none px-4 py-2.5 text-sm placeholder:text-foreground/40"
            />
          </label>
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="py-20 md:py-28">
        <div className="container-wide space-y-24">
          {filtered.length === 0 && (
            <p className="text-center text-foreground/60 font-display text-2xl">No dishes match "{query}".</p>
          )}
          {filtered.map((c, ci) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              id={c.id}
            >
              <div className="grid gap-10 md:grid-cols-12 mb-10">
                <div className="md:col-span-4">
                  <div className="eyebrow mb-3">{String(ci + 1).padStart(2, "0")} · Category</div>
                  <h2 className="font-display text-4xl md:text-5xl leading-tight">{c.name}</h2>
                  <p className="mt-3 text-foreground/65 font-light italic">{c.tagline}</p>
                </div>
                <div className="md:col-span-8">
                  <ul className="divide-y divide-border">
                    {c.items.map((it) => (
                      <li key={it.name} className="py-5 flex items-baseline gap-6 group">
                        <div className="flex-1">
                          <div className="flex items-baseline gap-3">
                            <h3 className="font-display text-xl group-hover:text-crimson transition-colors">{it.name}</h3>
                            <span className="flex-1 border-b border-dotted border-border/60 mb-1" />
                            {it.price && <span className="text-gold tabular-nums font-medium tracking-wider">{it.price}</span>}
                          </div>
                          {it.description && (
                            <p className="mt-1 text-sm text-foreground/60 font-light leading-relaxed max-w-prose">{it.description}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-cream py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-display text-4xl md:text-5xl">Tonight, then?</h2>
          <p className="mt-4 text-cream/70 font-light">Reserve a table or order direct on WhatsApp.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={menuPdf} target="_blank" rel="noreferrer" className="btn-ghost text-cream border-[var(--gold)]/60 hover:text-ink">
              Download PDF Menu
            </a>
            <a href={RESERVE_WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary bg-gold !text-ink border-gold">Order on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
}