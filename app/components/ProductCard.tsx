import { categoryLabels, type MenuItem } from "../data/menuItems";

export default function ProductCard({ item }: { item: MenuItem }) {
  return (
    <article className="motion-surface flex flex-col justify-between space-y-4 rounded-lg border border-surface-border bg-surface-card p-5">
      <div>
        <span className="font-display text-[10px] font-semibold uppercase tracking-widest text-amber-brand">
          {categoryLabels[item.category]}
        </span>
        <h2 className="mt-2 font-display text-lg font-bold uppercase text-white">{item.name}</h2>
      </div>
      <div className="border-t border-zinc-800 pt-4">
        <span className="font-display text-lg font-bold text-amber-brand">
          PKR {item.price.toLocaleString("en-PK")}
        </span>
      </div>
    </article>
  );
}
