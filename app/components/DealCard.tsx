import { Check, ExternalLink, Phone } from "lucide-react";
import { siteConfig } from "../config/site";
import { dealCategoryLabels, type Deal } from "../data/deals";
import MenuImage from "./MenuImage";

export default function DealCard({ deal }: { deal: Deal }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded border border-zinc-800 bg-surface-card transition-colors duration-200 hover:border-zinc-700">
      <div className="relative">
        <MenuImage
          src={deal.image}
          alt={`${deal.name} from Fast & Furious Cafe`}
          className="aspect-video w-full rounded-none"
          imageClassName="card-image-zoom transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100"
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-amber-500 to-red-600 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-white shadow">
          {dealCategoryLabels[deal.category]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h2 className="font-display text-base font-bold uppercase leading-tight text-white">
          {deal.name}
        </h2>
        <span className="mt-1 block font-display text-lg font-bold text-crimson">
          <span className="sr-only">Current price: </span>
          Rs. {deal.price.toLocaleString("en-PK")}
        </span>
        <ul className="mt-3 space-y-2 text-xs text-zinc-300">
          {deal.items.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Check aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-brand" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center gap-3 pt-4">
          <a
            href={siteConfig.ordering.foodpandaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded bg-crimson px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-crimson-hover"
          >
            <span>Order on Foodpanda</span><ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a
            href={siteConfig.contact.phoneTel}
            aria-label={`Call Fast & Furious Cafe at ${siteConfig.contact.phone}`}
            title={`Call ${siteConfig.contact.phone}`}
            className="button-dark flex h-10 w-10 shrink-0 items-center justify-center rounded"
          >
            <Phone aria-hidden="true" className="h-4 w-4 text-amber-brand" />
          </a>
        </div>
      </div>
    </article>
  );
}
