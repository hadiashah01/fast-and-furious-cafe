import { ExternalLink, Phone } from "lucide-react";
import { siteConfig } from "../config/site";
import DealBrowser from "../components/DealBrowser";
import { dealsData } from "../data/deals";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: "Deals & Combos | Fast & Furious Cafe Sialkot",
  description:
    "See the Furious Duo Feast, Solo Speed Combo and Midnight Roll Bundle from Fast & Furious Cafe in Sialkot.",
};

export default function DealsPage() {
  return (
    <div className="space-y-12 pb-16">
      <ScrollReveal><section className="space-y-3 border-b border-surface-border bg-surface-lowest py-10 text-center">
        <div className="mx-auto max-w-7xl space-y-2 px-4 sm:px-6 lg:px-8">
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-amber-brand">
            Fast &amp; Furious Cafe • Circular Road, Sialkot
          </span>
          <h1 className="font-display text-4xl font-bold uppercase text-white sm:text-5xl">
            DEALS <span className="text-crimson">&amp; COMBOS</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xs italic text-zinc-400 sm:text-sm">“{siteConfig.statement}”</p>
          <p className="text-[11px] text-zinc-500">
            {siteConfig.hours.display}. {siteConfig.hours.caveat}. Call to check deal prices.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href={siteConfig.ordering.foodpandaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 rounded bg-foodpanda px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-foodpanda-hover"
            >
              <span>Order on Foodpanda</span><ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href={siteConfig.contact.phoneTel}
              className="flex items-center space-x-2 rounded border border-zinc-700 bg-surface-card px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-200 transition hover:bg-zinc-800"
            >
              <Phone className="h-3.5 w-3.5 text-amber-brand" />
              <span>Call to Order ({siteConfig.contact.phone})</span>
            </a>
          </div>
        </div>
      </section></ScrollReveal>

      <DealBrowser />

      <ScrollReveal><section className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs text-zinc-400">
          {dealsData.length} deals. Call to check prices and availability.
        </p>
      </section></ScrollReveal>
    </div>
  );
}
