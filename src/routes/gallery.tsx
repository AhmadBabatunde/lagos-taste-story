import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroAsset from "@/assets/hero-main.jpg";
import chefWok from "@/assets/chef-wok.jpg";
import dishSignature from "@/assets/dish-signature.jpg";
import dishChicken from "@/assets/dish-chicken.jpg";
import dishPrawn from "@/assets/dish-prawn.jpg";
import dishSoup from "@/assets/dish-soup.jpg";
import dishNoodles from "@/assets/dish-noodles.jpg";
import interior from "@/assets/kurnchi-interior.png.asset.json";
import dish1 from "@/assets/kurnchi-dish-1.png.asset.json";
import dish2 from "@/assets/kurnchi-dish-2.png.asset.json";
import interiorWide from "@/assets/interior-wide.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Kurnchi Chinese Restaurant, Lagos" },
      { name: "description", content: "A look inside Kurnchi: dishes, the dining room, evenings in Gbagada." },
      { property: "og:title", content: "Gallery — Kurnchi" },
      { property: "og:description", content: "Inside Kurnchi — food, room, atmosphere." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const items = [
  { src: heroAsset, alt: "Dining tables at Kurnchi", span: "row-span-2" },
  { src: dish1.url, alt: "Plated signature dish" },
  { src: chefWok, alt: "Wok flames", span: "row-span-2" },
  { src: dish2.url, alt: "Tabletop spread" },
  { src: interior.url, alt: "Lanterns in the dining room" },
  { src: dishChicken, alt: "Sweet and sour chicken", span: "row-span-2" },
  { src: dishPrawn, alt: "Butterfly king prawn" },
  { src: interiorWide, alt: "Wide view of the dining room" },
  { src: dishSoup, alt: "Hot and sour soup" },
  { src: dishSignature, alt: "Cantonese spread overhead", span: "row-span-2" },
  { src: dishNoodles, alt: "Singapore noodles" },
];

function GalleryPage() {
  return (
    <div>
      <section className="relative h-[45svh] min-h-[360px] bg-ink overflow-hidden">
        <img src={interiorWide} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 to-ink" />
        <div className="container-wide relative h-full flex items-end pb-16">
          <div>
            <div className="eyebrow mb-4">Gallery</div>
            <h1 className="font-display text-5xl md:text-7xl text-cream leading-[1] text-balance">
              A small <span className="italic text-gold">window</span> into our evenings.
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-wide grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-3 md:gap-4">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
              className={`relative overflow-hidden group ${it.span ?? ""}`}
            >
              <img src={it.src} alt={it.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors" />
            </motion.figure>
          ))}
        </div>
      </section>
    </div>
  );
}