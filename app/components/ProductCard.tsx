import { Flame } from "lucide-react";
import { popularItemIds, type MenuItem } from "../data/menuItems";
import MenuImage from "./MenuImage";

export default function ProductCard({ item }: { item: MenuItem }) {
  const isPopular = popularItemIds.some((id) => id === item.id);

  return (
    <article className="flex min-w-0 items-start gap-3 rounded border border-surface-border bg-surface-card p-3">
      <div className="min-w-0 flex-1">
        <h2 className="font-display text-base font-bold uppercase leading-tight text-white">
          {item.name}
        </h2>
        <div className="mt-1 flex flex-wrap items-baseline gap-1.5">
          <span className="font-display text-sm font-semibold text-crimson">
            {item.pricePrefix ? "from " : ""}Rs. {item.price.toLocaleString("en-PK")}
          </span>
          {item.originalPrice && (
            <del className="text-[11px] text-zinc-500">
              Rs. {item.originalPrice.toLocaleString("en-PK")}
            </del>
          )}
        </div>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-zinc-400">
          {item.description}
        </p>
        {isPopular && (
          <span className="mt-1.5 inline-flex items-center gap-1 text-[11px] text-zinc-300">
            <Flame aria-hidden="true" className="h-3 w-3 text-crimson" />
            Popular
          </span>
        )}
      </div>
      <MenuImage
        src={item.image}
        alt={`${item.name} from Fast & Furious Cafe`}
        className="h-24 w-24 shrink-0 sm:h-[104px] sm:w-[104px]"
        sizes="104px"
      />
    </article>
  );
}
