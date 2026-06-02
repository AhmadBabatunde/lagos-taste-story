import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/kurnchi-logo.jpg.asset.json";
import { INSTAGRAM, WHATSAPP_LINK } from "@/lib/menu-data";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--ink)] text-cream relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 gold-rule" />
      <div className="container-wide grid gap-12 py-20 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-4">
            <img src={logoAsset.url} alt="Kurnchi" className="h-14 w-14 rounded-full" width={56} height={56} />
            <div>
              <div className="font-display text-2xl">Kurnchi</div>
              <div className="eyebrow !text-cream/60">Chinese Restaurant · Lagos</div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-cream/70 font-light leading-relaxed">
            Where the soul of Cantonese fire-cooking meets the warmth of Lagos hospitality.
            Slow food, fast friends — served nightly in Gbagada.
          </p>
          <div className="mt-6 font-han text-2xl text-[var(--gold)]">慢食快友</div>
        </div>

        <div>
          <div className="eyebrow mb-4">Visit</div>
          <p className="text-cream/80 leading-relaxed font-light">
            12 Diya Street, Gbagada<br />
            Lagos, Nigeria
          </p>
          <p className="mt-4 text-cream/60 font-light text-sm">
            Mon – Sun · 12:00 – 23:00
          </p>
        </div>

        <div>
          <div className="eyebrow mb-4">Connect</div>
          <ul className="space-y-2 text-cream/80 font-light">
            <li><a href={WHATSAPP_LINK} className="link-underline" target="_blank" rel="noreferrer">+234 810 575 4994</a></li>
            <li><a href="mailto:hello@kurnchi.ng" className="link-underline">hello@kurnchi.ng</a></li>
            <li><a href={INSTAGRAM} className="link-underline" target="_blank" rel="noreferrer">@kurrynchilligbagada</a></li>
          </ul>
          <div className="mt-6 flex gap-5 text-[0.72rem] tracking-[0.24em] uppercase text-cream/60">
            <Link to="/menu" className="hover:text-[var(--gold)]">Menu</Link>
            <Link to="/reservations" className="hover:text-[var(--gold)]">Reserve</Link>
            <Link to="/contact" className="hover:text-[var(--gold)]">Contact</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10 py-6">
        <div className="container-wide flex flex-col gap-2 md:flex-row items-center justify-between text-xs text-cream/40 tracking-wide">
          <span>© {new Date().getFullYear()} Kurnchi Chinese Restaurant. All rights reserved.</span>
          <span>Crafted in Lagos · 火</span>
        </div>
      </div>
    </footer>
  );
}
