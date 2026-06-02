import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroAsset from "@/assets/hero-main.jpg";
import dishSignature from "@/assets/dish-signature.jpg";
import chefWok from "@/assets/chef-wok.jpg";
import dishChicken from "@/assets/dish-chicken.jpg";
import dishPrawn from "@/assets/dish-prawn.jpg";
import dishSoup from "@/assets/dish-soup.jpg";
import dishNoodles from "@/assets/dish-noodles.jpg";
import interior from "@/assets/kurnchi-interior.png.asset.json";
import dish1 from "@/assets/kurnchi-dish-1.png.asset.json";
import dish2 from "@/assets/kurnchi-dish-2.png.asset.json";
import { RESERVE_WHATSAPP } from "@/lib/menu-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kurnchi — Lagos Chinese Restaurant in Gbagada" },
      { name: "description", content: "Slow-fired Cantonese cuisine, served with Lagos warmth. Reserve a table at Kurnchi in Gbagada, Lagos." },
      { property: "og:title", content: "Kurnchi — Lagos Chinese Restaurant" },
      { property: "og:description", content: "Slow-fired Cantonese cuisine, served with Lagos warmth." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: "Kurnchi",
        servesCuisine: ["Chinese", "Cantonese"],
        priceRange: "₦₦₦",
        address: { "@type": "PostalAddress", streetAddress: "12 Diya Street", addressLocality: "Gbagada", addressRegion: "Lagos", addressCountry: "NG" },
        telephone: "+2348105754994",
        openingHours: "Mo-Su 12:00-23:00",
      }),
    }],
  }),
  component: HomePage,
});

const signatureDishes = [
  { img: dishChicken, name: "Sweet & Sour Chicken", cat: "Chicken Sauce", note: "Glossy chilli glaze, sesame finish." },
  { img: dishPrawn, name: "Butterfly King Prawn", cat: "Starters", note: "Salt-and-chilli crust, whole prawn." },
  { img: dishSoup, name: "Hot & Sour Peking", cat: "Soups", note: "Tofu, chilli, ginger, slow simmer." },
  { img: dishNoodles, name: "Singapore Noodles", cat: "Noodles", note: "Curry-kissed, wok-tossed, prawn." },
];

function HomePage() {
  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-ink">
        <img
          src={heroAsset}
          alt="Kurnchi dining room at night, glowing lanterns above plated Chinese dishes"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />

        <div className="relative z-10 flex h-full items-end pb-20 md:pb-28">
          <div className="container-wide grid gap-10 md:grid-cols-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.7, 0, 0.2, 1] }}
              className="md:col-span-8 text-cream"
            >
              <div className="eyebrow !text-[var(--gold)] mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[var(--gold)]" />
                Gbagada · Lagos · Est. 火
              </div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-balance text-cream">
                Slow food.<br />
                <span className="italic text-[var(--gold)]">Fast friends.</span><br />
                A Lagos love letter to Cantonese fire.
              </h1>
              <p className="mt-8 max-w-xl text-cream/75 text-lg font-light leading-relaxed">
                Hand-rolled dim sum, screaming-hot woks, and the kind of welcome that turns
                first-time guests into family by the second course.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href={RESERVE_WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary">
                  Reserve a Table
                </a>
                <Link to="/menu" className="btn-ghost text-cream border-cream/60 hover:text-ink">
                  View Menu
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1.2 }}
              className="md:col-span-4 hidden md:block text-right text-cream/70"
            >
              <div className="font-han text-7xl text-[var(--gold)] leading-none">慢食</div>
              <div className="mt-2 font-han text-7xl text-[var(--gold)] leading-none">快友</div>
              <p className="mt-6 text-sm tracking-[0.3em] uppercase">Open nightly · 12 — 23h</p>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/60 text-[0.65rem] tracking-[0.4em] uppercase">
          Scroll
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-[var(--gold)]/30 bg-[var(--ink)] text-cream overflow-hidden">
        <div className="container-wide flex items-center gap-12 py-5 text-[0.7rem] tracking-[0.3em] uppercase text-cream/70 whitespace-nowrap overflow-x-auto">
          <span className="text-[var(--gold)]">★</span>
          <span>Lagos' Cantonese Soul</span>
          <span className="text-[var(--gold)]">·</span>
          <span>Wok-fired since day one</span>
          <span className="text-[var(--gold)]">·</span>
          <span>Private dining available</span>
          <span className="text-[var(--gold)]">·</span>
          <span>WhatsApp reservations</span>
          <span className="text-[var(--gold)]">·</span>
          <span>Open 7 nights</span>
        </div>
      </div>

      {/* OUR STORY */}
      <section className="relative py-28 md:py-40">
        <div className="container-wide grid gap-16 md:grid-cols-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="md:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={chefWok}
                alt="Chef flame-firing a wok at Kurnchi"
                loading="lazy"
                width={1280}
                height={1600}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:flex items-center justify-center h-32 w-32 rounded-full bg-[var(--crimson)] text-cream font-display text-xl text-center leading-tight p-4 shadow-2xl">
              Since the <em className="text-[var(--gold)] not-italic">first</em> spark
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="md:col-span-6 md:col-start-7"
          >
            <div className="eyebrow mb-6">Our Story</div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
              Born in <span className="italic text-[var(--crimson)]">Gbagada</span>, with a heart that beats in <span className="font-han">中国</span>.
            </h2>
            <div className="gold-rule my-8 w-24" />
            <p className="text-lg leading-relaxed text-foreground/80 font-light">
              Kurnchi began as a quiet love affair between two cities — the bustling
              night markets of Guangzhou and the lantern-lit corners of Lagos.
              We honour the rituals of the Cantonese kitchen: high heat, fresh
              ingredients, and the patient art of balance. Every plate is a small
              ceremony, every guest a returning friend.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80 font-light">
              Our chefs trained in Hong Kong and Lagos kitchens for a combined
              forty years. What lands on your table is what they would serve
              their own family — generous, fragrant, alive with fire.
            </p>
            <Link to="/about" className="mt-10 inline-flex items-center gap-3 text-[var(--crimson)] link-underline text-sm tracking-[0.25em] uppercase font-medium">
              Read the full story →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="relative bg-[var(--ink)] text-cream py-28 md:py-40 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 font-han text-[20rem] text-[var(--crimson)]/20 leading-none pointer-events-none select-none">
          火
        </div>
        <div className="container-wide relative">
          <div className="grid gap-6 md:grid-cols-12 items-end mb-16">
            <div className="md:col-span-8">
              <div className="eyebrow mb-4">Signature Dishes</div>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
                Plates we'd <span className="italic text-[var(--gold)]">queue</span> for.
              </h2>
            </div>
            <p className="md:col-span-4 text-cream/70 font-light leading-relaxed">
              A small constellation of dishes our regulars order before they're even seated.
            </p>
          </div>

          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {signatureDishes.map((d, i) => (
              <motion.article
                key={d.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 text-[0.65rem] tracking-[0.3em] uppercase text-[var(--gold)] bg-black/40 backdrop-blur px-3 py-1">
                    {d.cat}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl">{d.name}</h3>
                <p className="mt-2 text-sm text-cream/60 font-light leading-relaxed">{d.note}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/menu" className="btn-ghost text-cream border-cream/50 hover:text-ink">
              The Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* DINING EXPERIENCE — editorial split */}
      <section className="py-28 md:py-40">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start"
          >
            <div className="eyebrow mb-6">The Room</div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
              Red lanterns. Warm wood. <span className="italic text-[var(--crimson)]">Lagos laughter.</span>
            </h2>
            <div className="gold-rule my-8 w-24" />
            <p className="text-lg leading-relaxed text-foreground/80 font-light">
              Push through our doors and the city falls away. Carved screens, soft
              tassels, the gentle clink of porcelain — a room built for long
              conversations and longer dinners. Bring the family. Bring the
              date. Bring the deal that needs closing.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4 text-sm">
              {[
                { k: "120", v: "Seats" },
                { k: "3", v: "Private rooms" },
                { k: "7", v: "Nights / week" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-4xl text-[var(--crimson)]">{s.k}</div>
                  <div className="eyebrow !text-foreground/50 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-6 gap-4">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="col-span-4 aspect-[4/5] overflow-hidden">
              <img src={interior.url} alt="Kurnchi dining room interior" loading="lazy" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="col-span-2 aspect-[3/4] overflow-hidden mt-12">
              <img src={dish1.url} alt="Signature plated dish" loading="lazy" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="col-span-3 aspect-square overflow-hidden">
              <img src={dish2.url} alt="A spread of Kurnchi dishes" loading="lazy" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="col-span-3 aspect-square overflow-hidden">
              <img src={dishSignature} alt="Overhead Cantonese spread" loading="lazy" className="h-full w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[var(--cream)] border-y border-[var(--gold)]/30 py-28">
        <div className="container-narrow text-center">
          <div className="eyebrow mb-4">Guest Notes</div>
          <h2 className="font-display text-4xl md:text-5xl">What Lagos is saying</h2>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              { q: "The butterfly prawn alone is worth the drive across the bridge. The room glows.", a: "Tomi A.", t: "Lekki" },
              { q: "Best Chinese in Lagos. Full stop. We've made it a weekly Friday ritual.", a: "Ndidi & Femi", t: "Ikoyi" },
              { q: "Felt like Hong Kong on Diya Street. Service was warm, food was singing.", a: "James K.", t: "Visiting from London" },
            ].map((t, i) => (
              <motion.figure
                key={t.a}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="text-left"
              >
                <div className="text-[var(--gold)] text-2xl mb-4">★★★★★</div>
                <blockquote className="font-display text-xl md:text-2xl leading-snug text-balance">
                  "{t.q}"
                </blockquote>
                <figcaption className="mt-6 text-sm tracking-[0.2em] uppercase text-foreground/60">
                  {t.a} · <span className="text-[var(--crimson)]">{t.t}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVE CTA */}
      <section className="relative isolate overflow-hidden bg-[var(--crimson-deep)] text-cream py-28 md:py-36">
        <div className="absolute inset-0 opacity-30">
          <img src={heroAsset} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[var(--crimson-deep)]/80" />
        <div className="container-narrow relative text-center">
          <div className="font-han text-5xl text-[var(--gold)] mb-6">预约</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance">
            Your table is <span className="italic text-[var(--gold)]">already</span> warm.
          </h2>
          <p className="mt-6 text-cream/80 max-w-xl mx-auto font-light text-lg">
            Book in seconds. We'll confirm by WhatsApp and have the lanterns lit by the time you arrive.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={RESERVE_WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary bg-[var(--gold)] !text-ink border-[var(--gold)] hover:!bg-[var(--gold-soft)]">
              Reserve on WhatsApp
            </a>
            <Link to="/reservations" className="btn-ghost text-cream border-cream/60 hover:text-ink">
              Reservation Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
