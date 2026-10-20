import { Flame } from "lucide-react";
import { popularItemIds, type MenuItem } from "../data/menuItems";
import MenuImage from "./MenuImage";

export default function ProductCard({ item }: { item: MenuItem }) {
  const isPopular = popularItemIds.some((id) => id === item.id);

  return (
    <article className="group flex h-full min-w-0 items-stretch gap-3 rounded border border-zinc-800 bg-surface-card p-3 transition-colors duration-200 hover:border-zinc-700">
      <div className="flex min-w-0 flex-1 flex-col">
        <h2 className="font-display text-base font-bold uppercase leading-tight text-white">
          {item.name}
        </h2>
        <div className="mt-1 flex flex-wrap items-baseline gap-1.5">
          <span className="font-display text-sm font-semibold text-crimson">
            {item.pricePrefix ? "from " : ""}Rs. {item.price.toLocaleString("en-PK")}
          </span>
          {item.originalPrice && (
            <del className="text-[11px] font-semibold text-zinc-400">
              <span className="sr-only">Original price: </span>
              Rs. {item.originalPrice.toLocaleString("en-PK")}
            </del>
          )}
        </div>
        <p className="mt-2 text-xs leading-relaxed text-zinc-400">
          {item.description}
        </p>
      </div>
      <div className="relative h-24 w-24 shrink-0 self-start overflow-hidden rounded sm:h-[104px] sm:w-[104px]">
        <MenuImage
          src={item.image}
          alt={`${item.name} from Fast & Furious Cafe`}
          className="h-full w-full"
          imageClassName="card-image-zoom transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100"
          sizes="104px"
        />
        {isPopular && (
          <span className="absolute left-1 top-1 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500 to-red-600 px-2 py-1 font-display text-[9px] font-bold uppercase tracking-wider text-white shadow">
            <Flame aria-hidden="true" className="h-3 w-3 fill-current" />
            Popular
          </span>
        )}
      </div>
    </article>
  );
}
