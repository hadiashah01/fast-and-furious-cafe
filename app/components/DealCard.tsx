import { ExternalLink, Phone } from "lucide-react";
import { siteConfig } from "../config/site";
import { dealCategoryLabels, type Deal } from "../data/deals";
import MenuImage from "./MenuImage";

export default function DealCard({ deal }: { deal: Deal }) {
  return (
    <article className="rounded border border-surface-border bg-surface-card p-3">
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <span className="font-display text-[10px] font-semibold uppercase tracking-widest text-amber-brand">
            {dealCategoryLabels[deal.category]}
          </span>
          <h2 className="mt-1 font-display text-base font-bold uppercase leading-tight text-white">
            {deal.name}
          </h2>
          <span className="mt-1 block font-display text-sm font-semibold text-crimson">
            Rs. {deal.price.toLocaleString("en-PK")}
          </span>
        </div>
        <MenuImage
          src={deal.image}
          alt={`${deal.name} from Fast & Furious Cafe`}
          className="h-24 w-24 shrink-0 sm:h-[104px] sm:w-[104px]"
          sizes="104px"
        />
      </div>
      <ul className="mt-2 space-y-1 text-xs text-zinc-400">
        {deal.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="mt-3 flex flex-wrap gap-2">
          <a
            href={siteConfig.ordering.foodpandaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 rounded bg-foodpanda px-3 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-foodpanda-hover"
          >
            <span>Foodpanda</span><ExternalLink className="h-3 w-3" />
          </a>
          <a
            href={siteConfig.contact.phoneTel}
            className="button-dark flex items-center justify-center gap-1 rounded px-3 py-2 text-xs font-semibold uppercase tracking-wider"
          >
            <Phone className="h-3 w-3 text-amber-brand" /><span>Call</span>
          </a>
      </div>
    </article>
  );
}
