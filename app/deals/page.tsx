import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "../config/site";
import DealBrowser from "../components/DealBrowser";
import { dealsData } from "../data/deals";
import { createPageMetadata } from "../config/metadata";

export const metadata = createPageMetadata(
  "/deals",
  "Foodpanda Deals",
  "Browse 18 exclusive discounted deals and five promotional deals listed for Fast & Furious Cafe in Sialkot.",
);

export default function DealsPage() {
  return (
    <div className="pb-12">
      <section className="px-4 py-10 md:py-12">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-7">
            <span className="block font-display text-xs font-bold uppercase tracking-widest text-amber-brand">
              Fast &amp; Furious Cafe — Circular Road, Sialkot
            </span>
            <h1 className="font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
              DEALS <span className="text-crimson">&amp; COMBOS</span>
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
              Compare the exclusive discounted and promotional deals available in the cafe listing.
            </p>
            <p className="text-[11px] text-zinc-500">
              {siteConfig.hours.display}. {siteConfig.hours.caveat}.
            </p>
            <p className="text-[11px] text-zinc-500">
              Foodpanda lists 10% off selected items, auto-applied. App-only offers may also appear in its listing.
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.ordering.foodpandaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded bg-crimson px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-crimson-hover"
              >
                <span>Order on Foodpanda</span><ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden lg:col-span-5">
            <Image
              src="/images/man-eats-doner-bread-with-meat-tomatoes-french-fries.avif"
              alt="Doner meal with tomatoes and fries"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <DealBrowser />

      <section className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 md:py-10 lg:px-8">
        <p className="text-xs text-zinc-400">
          {dealsData.length} deals: 18 exclusive discounted deals and five promotional deals.
          Ordering is available through the external Foodpanda listing or by phone.
        </p>
      </section>
    </div>
  );
}
