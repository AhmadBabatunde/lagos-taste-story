import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import chefWok from "@/assets/chef-wok.jpg";
import interiorUrl from "../../KURNCHI_IMAGE_3.png";
import dish2Url from "../../kurnchi_image_2.png";
import { RESERVE_WHATSAPP } from "@/lib/menu-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Kurnchi Chinese Restaurant, Lagos" },
      { name: "description", content: "The people, the kitchen, and the philosophy behind Kurnchi — Gbagada's home for Cantonese fire-cooking." },
      { property: "og:title", content: "Our Story — Kurnchi" },
      { property: "og:description", content: "The people, the kitchen, and the philosophy behind Kurnchi." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[70svh] min-h-[480px] bg-ink overflow-hidden">
        <img src={chefWok} alt="A wok ignites at Kurnchi" className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-transparent to-ink" />
        <div className="container-wide relative h-full flex items-end pb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className="eyebrow mb-4">Our Story</div>
            <h1 className="font-display text-5xl md:text-7xl text-cream leading-[1] max-w-3xl text-balance">
              A kitchen that <span className="italic text-gold">speaks two languages</span>.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32">
        <div className="container-narrow grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="font-han text-6xl text-crimson">起源</div>
            <div className="eyebrow mt-4">Origin</div>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed font-light text-foreground/85">
            <p>
              Kurnchi was born in 2019 in a quiet corner of Gbagada, on a street where
              jollof rice and pepper soup were the lingua franca. We wanted to add a
              new dialect to that conversation — the bright, fragrant, fire-driven
              language of Cantonese cooking.
            </p>
            <p>
              Our founder spent her twenties between Lagos and Hong Kong, falling in
              love with the night-market culture, the patient broths, the wok-hei
              that defines great Chinese food. She brought that obsession home —
              and built a kitchen where two cultures share one fire.
            </p>
          </div>
        </div>
      </section>

      {/* SPLIT IMG/TEXT */}
      <section className="bg-ink text-cream py-24 md:py-32">
        <div className="container-wide grid gap-16 md:grid-cols-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="md:col-span-6">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={interiorUrl} alt="Inside Kurnchi at dusk" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </motion.div>
          <div className="md:col-span-6">
            <div className="eyebrow mb-4">The Philosophy</div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-balance">
              <span className="italic text-gold">Slow food.</span> Fast friends.
            </h2>
            <div className="gold-rule my-8 w-24" />
            <div className="space-y-5 text-cream/75 leading-relaxed font-light text-lg">
              <p>
                Our wall reads <span className="font-han text-gold">慢食快友</span> — slow food, fast friends.
                It's not a slogan. It's how we cook, how we serve, how we remember
                your favourite table.
              </p>
              <p>
                We source whole fish from the lagoon, prawns from the Bight, and
                vegetables from farms in Epe. Sauces are mixed by hand each morning.
                Stocks simmer for eight hours. Nothing is rushed except the wok itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <div className="eyebrow mb-4">What we believe</div>
          <h2 className="font-display text-4xl md:text-5xl mb-16 max-w-2xl">Four small rituals that shape every plate.</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Fire first", d: "Every wok burns at 800°C. Without char, there is no soul." },
              { n: "02", t: "Day-boat fresh", d: "We refuse anything frozen twice. Fish in by noon, plated by night." },
              { n: "03", t: "Hand-made daily", d: "Spring rolls rolled, dumplings folded, sauces stirred — by humans." },
              { n: "04", t: "Lagos warmth", d: "You are not a table number. You are family by the second course." },
            ].map((v) => (
              <div key={v.n} className="border-t border-border pt-6">
                <div className="font-display text-3xl text-gold">{v.n}</div>
                <h3 className="font-display text-2xl mt-3">{v.t}</h3>
                <p className="mt-3 text-foreground/70 font-light leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM TEASE */}
      <section className="bg-cream py-24 md:py-32 border-t border-gold/30">
        <div className="container-wide grid gap-16 md:grid-cols-12 items-end">
          <div className="md:col-span-6">
            <img src={dish2Url} alt="Kurnchi family table" loading="lazy" className="aspect-[5/4] w-full object-cover" />
          </div>
          <div className="md:col-span-6">
            <div className="eyebrow mb-4">The Team</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
              Forty years of fire,<br />four hands behind the pass.
            </h2>
            <p className="mt-6 text-lg text-foreground/75 font-light leading-relaxed max-w-xl">
              Chef Wei trained in Guangzhou before earning his stripes at Hong Kong's
              Lung King Heen. Our pastry lead, Aisha, spent five years between
              Lagos and Macau perfecting the egg tart. Together they run a small,
              fiercely loyal kitchen of nine.
            </p>
            <Link to="/reservations" className="btn-primary mt-10">Dine with us</Link>
            <a href={RESERVE_WHATSAPP} target="_blank" rel="noreferrer" className="btn-ghost ml-3 mt-10">WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
}