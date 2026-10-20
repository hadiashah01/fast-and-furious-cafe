import { Flame } from "lucide-react";
import { popularItemIds, type MenuItem } from "../data/menuItems";
import MenuImage from "./MenuImage";

export default function ProductCard({ item }: { item: MenuItem }) {
  const isPopular = popularItemIds.some((id) => id === item.id);

  return (
    <article className="group flex h-full min-w-0 items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-3 transition-colors duration-200 hover:border-zinc-700">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
        <MenuImage
          src={item.image}
          alt={`${item.name} from Fast & Furious Cafe`}
          className="h-full w-full rounded-lg"
          imageClassName="card-image-zoom transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100"
          sizes="80px"
        />
        {isPopular && (
          <span className="absolute left-0.5 top-0.5 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500 to-red-600 px-1.5 py-0.5 font-display text-[8px] font-bold uppercase tracking-wider text-white shadow">
            <Flame aria-hidden="true" className="h-2.5 w-2.5 fill-current" />
            Popular
          </span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h2 className="min-w-0 truncate font-display text-base font-bold uppercase leading-tight text-white">
            {item.name}
          </h2>
          <div className="shrink-0 text-right">
            <span className="block whitespace-nowrap font-display text-sm font-extrabold text-crimson">
              {item.pricePrefix ? "from " : ""}Rs. {item.price.toLocaleString("en-PK")}
            </span>
            {item.originalPrice && (
              <del className="whitespace-nowrap text-[11px] font-semibold text-zinc-400">
                <span className="sr-only">Original price: </span>
                Rs. {item.originalPrice.toLocaleString("en-PK")}
              </del>
            )}
          </div>
        </div>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-zinc-400">
          {item.description}
        </p>
      </div>
    </article>
  );
}
