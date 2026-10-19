import Link from "next/link";
import Image from "next/image";
import { Clock, ExternalLink, Flame, Phone, ShieldCheck } from "lucide-react";
import { siteConfig } from "./config/site";
import { popularItems } from "./data/menuItems";
import { createPageMetadata } from "./config/metadata";
import MenuImage from "./components/MenuImage";

export const metadata = createPageMetadata(
  "/",
  "Fast & Furious Cafe",
  "Explore burgers, shawarma, paratha rolls and fries at Fast & Furious Cafe on Circular Road in Sialkot.",
);

const highlights = popularItems.slice(0, 4);

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16 lg:space-y-24">
      <section className="relative border-b border-surface-border pt-12 lg:pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 pb-16 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              <h1 className="font-display text-4xl font-bold uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
                CRAVE THE SPEED.<br />TASTE THE <span className="text-crimson">FIRE.</span>
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                Burgers, shawarma, paratha rolls and fries on Circular Road, Sialkot.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/menu" className="rounded bg-crimson px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-crimson-hover">View Menu</Link>
                <Link href="/deals" className="button-dark rounded px-5 py-3 text-xs font-semibold uppercase tracking-wider">View Deals</Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden lg:col-span-5">
              <Image
                src="/images/hero.avif"
                alt="Food served at Fast and Furious Cafe"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 42vw"
                className="hero-image-drift object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between border-b border-surface-border pb-4">
          <div><span className="font-display text-xs font-semibold uppercase tracking-widest text-amber-brand">Menu Selection</span><h2 className="mt-1 font-display text-3xl font-bold uppercase text-white">Menu Highlights</h2></div>
          <Link href="/menu" className="flex items-center space-x-1 font-display text-xs uppercase tracking-wider text-zinc-400 hover:text-white"><span>Full Menu</span><span aria-hidden="true">→</span></Link>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <article key={item.id} className="flex h-full min-w-0 items-stretch gap-3 rounded border border-surface-border bg-surface-card p-3">
              <div className="flex min-w-0 flex-1 flex-col">
                <h3 className="font-display text-base font-bold uppercase leading-tight text-white">{item.name}</h3>
                <div className="mt-1 flex flex-wrap items-baseline gap-1.5">
                  <span className="font-display text-sm font-semibold text-crimson">{item.pricePrefix ? "from " : ""}Rs. {item.price}</span>
                  {item.originalPrice && <del className="text-[11px] text-zinc-500">Rs. {item.originalPrice}</del>}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">{item.description}</p>
                <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-crimson/15 px-2 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-crimson">
                  <Flame aria-hidden="true" className="h-3 w-3 fill-current" />
                  Popular
                </span>
                <Link href="/menu" className="mt-auto inline-flex min-h-10 items-center text-xs font-semibold uppercase tracking-wider text-amber-brand transition-colors hover:text-white hover:underline">View on Menu →</Link>
              </div>
              <MenuImage
                src={item.image}
                alt={`${item.name} from Fast & Furious Cafe`}
                className="h-24 w-24 shrink-0 self-start sm:h-[104px] sm:w-[104px]"
                sizes="104px"
              />
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-[11px] text-zinc-500">Listed prices may change; check Foodpanda before ordering.</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 rounded-lg border border-surface-border bg-surface-card p-8 text-center sm:p-12">
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-amber-brand">Made for Every Craving</span>
          <p className="credo-reveal mx-auto max-w-3xl text-lg leading-relaxed text-white sm:text-xl">
            Explore the menu, check the deals, or find us on Circular Road in Sialkot.
          </p>
          <p className="font-display text-xs uppercase tracking-widest text-zinc-500">FAST AND FURIOUS CAFE • CIRCULAR RD, SIALKOT</p>
          <div className="grid grid-cols-1 gap-6 border-t border-zinc-800 pt-8 text-left md:grid-cols-3">
            <div className="space-y-1"><div className="flex items-center space-x-2 font-display text-sm font-bold uppercase text-crimson"><Flame className="h-4 w-4" /><span>Menu</span></div><p className="text-xs text-zinc-400">Burgers, shawarma, paratha rolls and fries.</p></div>
            <div className="space-y-1"><div className="flex items-center space-x-2 font-display text-sm font-bold uppercase text-amber-brand"><ShieldCheck className="h-4 w-4" /><span>Find Us</span></div><p className="text-xs text-zinc-400">Circular Road, opposite Pakistan Gym, Kainchi Mohalla.</p></div>
            <div className="space-y-1"><div className="flex items-center space-x-2 font-display text-sm font-bold uppercase text-zinc-300"><Clock className="h-4 w-4" /><span>Hours</span></div><p className="text-xs text-zinc-400">{siteConfig.hours.display}. {siteConfig.hours.caveat}.</p></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 border-y border-surface-border py-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-1">
            <span className="block font-display text-xs font-semibold uppercase tracking-widest text-amber-brand">Hours</span>
            <p className="text-sm text-zinc-200">{siteConfig.hours.display}</p>
            <p className="text-xs text-zinc-500">{siteConfig.hours.caveat}</p>
          </div>
          <div className="space-y-1">
            <span className="block font-display text-xs font-semibold uppercase tracking-widest text-amber-brand">Location</span>
            <p className="text-sm text-zinc-200">Circular Road, Opp. Pakistan Gym</p>
            <a href={siteConfig.location.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-zinc-400 transition-colors hover:text-white">
              Directly opposite Pakistan Gym in Kainchi Mohalla <ExternalLink aria-hidden="true" className="h-3 w-3" />
            </a>
          </div>
          <div className="space-y-1">
            <span className="block font-display text-xs font-semibold uppercase tracking-widest text-amber-brand">Ordering</span>
            <a href={siteConfig.ordering.foodpandaUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-zinc-200 transition-colors hover:text-crimson">
              Foodpanda <ExternalLink aria-hidden="true" className="h-3 w-3" />
            </a>
            <p className="text-xs text-zinc-500">External ordering listing</p>
          </div>
          <div className="space-y-1">
            <span className="block font-display text-xs font-semibold uppercase tracking-widest text-amber-brand">Call</span>
            <a href={siteConfig.contact.phoneTel} className="inline-flex items-center gap-2 text-sm text-zinc-200 transition-colors hover:text-white">
              <Phone aria-hidden="true" className="h-4 w-4 text-amber-brand" />{siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
