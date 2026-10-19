import { categoryLabels, type MenuItem } from "../data/menuItems";
import MenuImage from "./MenuImage";

export default function ProductCard({ item }: { item: MenuItem }) {
  return (
    <article className="flex flex-col justify-between space-y-4 rounded-lg border border-surface-border bg-surface-card p-5">
      <MenuImage src={item.image} alt={`${item.name} from Fast & Furious Cafe`} />
      <div>
        <span className="font-display text-[10px] font-semibold uppercase tracking-widest text-amber-brand">
          {categoryLabels[item.category]}
        </span>
        <h2 className="mt-2 font-display text-lg font-bold uppercase text-white">{item.name}</h2>
        <p className="mt-2 text-xs leading-relaxed text-zinc-400">{item.description}</p>
      </div>
      <div className="border-t border-zinc-800 pt-4">
        <div className="flex flex-wrap items-baseline gap-2">
          <span className="font-display text-lg font-bold text-amber-brand">
            {item.pricePrefix ? "from " : ""}Rs. {item.price.toLocaleString("en-PK")}
          </span>
          {item.originalPrice && (
            <del className="text-xs text-zinc-500">
              Rs. {item.originalPrice.toLocaleString("en-PK")}
            </del>
          )}
        </div>
      </div>
    </article>
  );
}
