import Link from "next/link";
import { Clock, ExternalLink, Flame, MapPin, Phone, ShieldCheck, Utensils } from "lucide-react";
import { siteConfig } from "./config/site";
import { categoryLabels, menuItems } from "./data/menuItems";
import { dealsData } from "./data/deals";
import ScrollReveal from "./components/ScrollReveal";

export const metadata = {
  title: "Fast & Furious Cafe | Sialkot",
  description:
    "Burgers, shawarma, paratha rolls and fries at Fast & Furious Cafe on Circular Road, Sialkot.",
};

const highlightIds = [
  "furious-zinger",
  "sialkot-special-shawarma",
  "chicken-tikka-paratha-roll",
  "loaded-pizza-fries",
];
const highlights = menuItems.filter((item) => highlightIds.includes(item.id));
const featuredDeal = dealsData.find((deal) => deal.id === "furious-duo-feast");

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16 lg:space-y-24">
      <ScrollReveal><section className="relative border-b border-surface-border pt-12 lg:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 pb-16 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center space-x-2 rounded border border-amber-brand/30 bg-amber-brand/10 px-3 py-1 font-display text-xs uppercase tracking-wider text-amber-brand">
                <Utensils className="h-3.5 w-3.5" />
                <span>Cafe • Sialkot</span>
              </div>
              <h1 className="font-display text-4xl font-bold uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
                CRAVE THE SPEED.<br />TASTE THE <span className="text-crimson">FIRE.</span>
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                Burgers, shawarma, paratha rolls and fries on Circular Road, Sialkot.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/menu" className="motion-control rounded bg-crimson px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-crimson-hover">View Menu</Link>
                <Link href="/deals" className="motion-control rounded border border-zinc-700 bg-surface-card px-5 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-200 transition hover:bg-zinc-800">View Deals</Link>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-surface-border pt-5">
                <div><span className="block font-display text-[10px] uppercase text-zinc-500">Hours</span><span className="font-medium text-zinc-300">{siteConfig.hours.display}</span><span className="block text-[10px] text-zinc-500">{siteConfig.hours.caveat}</span></div>
                <div><span className="block font-display text-[10px] uppercase text-zinc-500">Location</span><span className="font-medium text-zinc-300">Circular Road</span><span className="block text-[10px] text-zinc-500">Opp. Pakistan Gym</span></div>
                <div><span className="block font-display text-[10px] uppercase text-zinc-500">Service Options</span><span className="font-medium text-zinc-300">{siteConfig.services.map((service) => service.title).join(" • ")}</span><span className="block text-[10px] text-zinc-500">Call to check availability</span></div>
              </div>
            </div>

            {featuredDeal && <div className="motion-surface space-y-4 rounded-lg border border-surface-border bg-surface-card p-6 lg:col-span-5">
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="rounded border border-amber-brand/30 bg-amber-brand/10 px-2 py-0.5 font-display text-[11px] uppercase tracking-wider text-amber-brand">Featured Deal</span>
              </div>
              <h2 className="font-display text-2xl font-bold uppercase text-white">{featuredDeal.name}</h2>
              <p className="text-xs text-zinc-400">{featuredDeal.items.join(" + ")}.</p>
              <p className="font-display text-xl font-bold text-amber-brand">PKR {featuredDeal.price.toLocaleString("en-PK")}</p>
              <p className="text-[11px] text-zinc-500">Call to check this deal’s price and availability.</p>
              <div className="flex flex-wrap gap-2 pt-2">
                <a href={siteConfig.ordering.foodpandaUrl} target="_blank" rel="noopener noreferrer" className="motion-control flex-1 rounded bg-foodpanda py-2 text-center text-xs font-bold uppercase tracking-wider text-white transition hover:bg-foodpanda-hover">Order on Foodpanda</a>
                <Link href="/deals" className="motion-control rounded bg-zinc-800 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-200 transition hover:bg-zinc-700">All Deals</Link>
              </div>
            </div>}
          </div>
        </div>
      </section></ScrollReveal>

      <ScrollReveal><section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between border-b border-surface-border pb-4">
          <div><span className="font-display text-xs font-semibold uppercase tracking-widest text-amber-brand">Menu Selection</span><h2 className="mt-1 font-display text-3xl font-bold uppercase text-white">Menu Highlights</h2></div>
          <Link href="/menu" className="flex items-center space-x-1 font-display text-xs uppercase tracking-wider text-zinc-400 hover:text-white"><span>Full Menu</span><span aria-hidden="true">→</span></Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 65}>
            <article className="motion-surface flex flex-col justify-between space-y-3 rounded-lg border border-surface-border bg-surface-card p-5">
              <div><span className="font-display text-[10px] font-semibold uppercase tracking-wider text-amber-brand">{categoryLabels[item.category]}</span><h3 className="mt-1 font-display text-lg font-bold uppercase text-white">{item.name}</h3></div>
              <div className="flex items-center justify-between border-t border-zinc-800 pt-3"><span className="font-display font-bold text-amber-brand">PKR {item.price}</span><Link href="/menu" className="font-display text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-crimson">View on Menu →</Link></div>
            </article>
            </ScrollReveal>
          ))}
        </div>
        <p className="mt-6 text-center text-[11px] text-zinc-500">Prices are listed in PKR. Call to confirm current prices.</p>
      </section></ScrollReveal>

      <ScrollReveal><section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 rounded-lg border border-surface-border bg-surface-card p-8 text-center sm:p-12">
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-amber-brand">Our Credo</span>
          <blockquote className="mx-auto max-w-3xl font-display text-2xl font-bold uppercase leading-tight text-white sm:text-3xl lg:text-4xl">“{siteConfig.statement}”</blockquote>
          <p className="font-display text-xs uppercase tracking-widest text-zinc-500">FAST AND FURIOUS CAFE • CIRCULAR RD, SIALKOT</p>
          <div className="grid grid-cols-1 gap-6 border-t border-zinc-800 pt-8 text-left md:grid-cols-3">
            <div className="space-y-1"><div className="flex items-center space-x-2 font-display text-sm font-bold uppercase text-crimson"><Flame className="h-4 w-4" /><span>Menu</span></div><p className="text-xs text-zinc-400">Burgers, shawarma, paratha rolls and fries.</p></div>
            <div className="space-y-1"><div className="flex items-center space-x-2 font-display text-sm font-bold uppercase text-amber-brand"><ShieldCheck className="h-4 w-4" /><span>Find Us</span></div><p className="text-xs text-zinc-400">Circular Road, opposite Pakistan Gym, Kainchi Mohalla.</p></div>
            <div className="space-y-1"><div className="flex items-center space-x-2 font-display text-sm font-bold uppercase text-zinc-300"><Clock className="h-4 w-4" /><span>Hours</span></div><p className="text-xs text-zinc-400">{siteConfig.hours.display}. {siteConfig.hours.caveat}.</p></div>
          </div>
        </div>
      </section></ScrollReveal>

      <ScrollReveal><section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 rounded-lg border border-surface-border bg-surface-card p-6 sm:p-8 md:flex-row md:items-center">
          <div className="space-y-2"><span className="font-display text-xs font-semibold uppercase tracking-widest text-amber-brand">Find the Cafe</span><h2 className="font-display text-2xl font-bold uppercase text-white">Circular Road, Sialkot</h2><p className="text-xs text-zinc-300">{siteConfig.location.address}</p><p className="text-[11px] text-zinc-500">{siteConfig.hours.display} — {siteConfig.hours.caveat}</p></div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a href={siteConfig.location.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 rounded bg-crimson px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-crimson-hover"><span>Open in Google Maps</span><ExternalLink className="h-3.5 w-3.5" /></a>
            <Link href="/contact" className="rounded border border-zinc-700 bg-surface-lowest px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-200 transition hover:bg-zinc-800">Contact</Link>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-5 text-xs text-zinc-400 sm:justify-start">
          <a href={siteConfig.contact.phoneTel} className="flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4 text-amber-brand" />{siteConfig.contact.phone}</a>
          <a href={siteConfig.location.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><MapPin className="h-4 w-4 text-amber-brand" />{siteConfig.location.landmark}</a>
        </div>
      </section></ScrollReveal>
    </div>
  );
}
