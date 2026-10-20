import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Flame, MapPin } from "lucide-react";
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
            <article key={item.id} className="group flex h-full min-w-0 items-stretch gap-3 rounded border border-zinc-800 bg-surface-card p-3 transition-colors duration-200 hover:border-zinc-700">
              <div className="flex min-w-0 flex-1 flex-col">
                <h3 className="font-display text-base font-bold uppercase leading-tight text-white">{item.name}</h3>
                <div className="mt-1 flex flex-wrap items-baseline gap-1.5">
                  <span className="font-display text-sm font-semibold text-crimson">{item.pricePrefix ? "from " : ""}Rs. {item.price}</span>
                  {item.originalPrice && <del className="text-[11px] font-semibold text-zinc-400">Rs. {item.originalPrice}</del>}
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
                className="h-24 w-24 shrink-0 self-start overflow-hidden sm:h-[104px] sm:w-[104px]"
                imageClassName="card-image-zoom transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100"
                sizes="104px"
              />
            </article>
          ))}
        </div>
        <p className="mt-6 rounded border border-surface-border bg-surface-lowest px-4 py-3 text-center text-xs text-zinc-400">Listed prices may change; check Foodpanda before ordering.</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="text-center">
            <span className="font-display text-xs font-semibold uppercase tracking-widest text-amber-brand">Fast &amp; Furious Cafe</span>
            <h2 className="mt-1 font-display text-2xl font-bold uppercase text-white sm:text-3xl">Explore the Cafe</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Link href="/menu" className="rounded-lg border border-surface-border bg-surface-card p-6">
              <div className="flex items-center gap-3 text-crimson"><Flame aria-hidden="true" className="h-5 w-5" /><h3 className="font-display text-sm font-bold uppercase text-white">Browse the Menu</h3></div>
              <p className="mt-3 text-xs leading-relaxed text-zinc-400">Burgers, shawarma, paratha rolls, fries, sides, and drinks.</p>
            </Link>
            <a href={siteConfig.location.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-surface-border bg-surface-card p-6">
              <div className="flex items-center gap-3 text-amber-brand"><MapPin aria-hidden="true" className="h-5 w-5" /><h3 className="font-display text-sm font-bold uppercase text-white">Find Us</h3></div>
              <p className="mt-3 text-xs leading-relaxed text-zinc-400">Circular Road, opposite Pakistan Gym, Kainchi Mohalla, Sialkot.</p>
            </a>
            <a href={siteConfig.ordering.foodpandaUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-surface-border bg-surface-card p-6">
              <div className="flex items-center gap-3 text-zinc-300"><ExternalLink aria-hidden="true" className="h-5 w-5" /><h3 className="font-display text-sm font-bold uppercase text-white">Foodpanda Listing</h3></div>
              <p className="mt-3 text-xs leading-relaxed text-zinc-400">View the cafe listing to check current menu and ordering details.</p>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
