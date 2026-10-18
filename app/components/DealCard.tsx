import { Check, ExternalLink, Phone } from "lucide-react";
import { siteConfig } from "../config/site";
import type { Deal } from "../data/deals";

export default function DealCard({ deal }: { deal: Deal }) {
  return (
    <article className="flex flex-col justify-between space-y-5 rounded-lg border border-surface-border bg-surface-card p-6">
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <span className="font-display text-[10px] font-semibold uppercase tracking-widest text-amber-brand">
            {deal.category === "solo" ? "Solo Combo" : deal.category === "sharing" ? "Duo Feast" : "Late Night Bundle"}
          </span>
        </div>
        <h2 className="font-display text-xl font-bold uppercase text-white">{deal.name}</h2>
        <p className="text-xs leading-relaxed text-zinc-400">{deal.summary}</p>
        <div className="space-y-1.5 rounded border border-zinc-800/80 bg-surface-lowest p-3">
          <span className="block font-display text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Included Items:</span>
          {deal.items.map((item) => (
            <div key={item} className="flex items-center space-x-2 text-xs text-zinc-300">
              <Check className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-3 border-t border-zinc-800 pt-3">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="block font-display text-[10px] uppercase tracking-wider text-zinc-500">Price</span>
            <span className="font-display text-2xl font-bold text-amber-brand">PKR {deal.price.toLocaleString("en-PK")}</span>
          </div>
          <span className="text-[11px] text-zinc-500">Verified deal</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <a
            href={siteConfig.ordering.foodpandaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-1 rounded bg-foodpanda px-3 py-2 text-center text-xs font-bold uppercase tracking-wider text-white transition hover:bg-foodpanda-hover"
          >
            <span>Order on Foodpanda</span><ExternalLink className="h-3 w-3" />
          </a>
          <a
            href={siteConfig.contact.phoneTel}
            className="flex items-center justify-center space-x-1 rounded border border-zinc-700 bg-surface-lowest px-3 py-2 text-center text-xs font-semibold uppercase tracking-wider text-zinc-200 transition hover:bg-zinc-800"
          >
            <Phone className="h-3 w-3 text-amber-brand" /><span>Call to Order</span>
          </a>
        </div>
      </div>
    </article>
  );
}
