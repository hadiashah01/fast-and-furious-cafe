import Link from "next/link";
import { ExternalLink, Flame, HeartHandshake, ShieldCheck } from "lucide-react";
import { siteConfig } from "../config/site";
import { createPageMetadata } from "../config/metadata";

export const metadata = createPageMetadata(
  "/about",
  "About the Cafe",
  "Learn about Fast & Furious Cafe, its listed menu, and its location on Circular Road in Sialkot.",
);

const standards = [
  {
    title: "Burgers & Zingers",
    description: "Zinger Burger, Chicken Burger, Chapli Burger, Double Zinger Burger, Tower Burger and Spicy Grand Chicken Burger.",
    icon: Flame,
    tone: "text-crimson border-crimson/30 bg-crimson/10",
  },
  {
    title: "Rolls & Shawarma",
    description: "Chicken Shawarma, Platter Shawarma, Zinger Shawarma, and three paratha rolls.",
    icon: ShieldCheck,
    tone: "text-amber-brand border-amber-brand/30 bg-amber-brand/10",
  },
  {
    title: "Fries & Sides",
    description: "Fries, Masala Fries, Loaded Fries, Garlic Mayo Fries, and four sauces.",
    icon: HeartHandshake,
    tone: "text-zinc-300 border-zinc-700 bg-zinc-800",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-12 pb-16">
      <section className="border-b border-surface-border bg-surface-lowest py-10 text-center">
        <div className="mx-auto max-w-7xl space-y-3 px-4 sm:px-6 lg:px-8">
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-amber-brand">About the Cafe</span>
          <h1 className="font-display text-4xl font-bold uppercase text-white sm:text-5xl">ABOUT THE CAFE</h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            Find us on Circular Road, opposite Pakistan Gym in Kainchi Mohalla, Sialkot. Our menu includes burgers, shawarma, paratha rolls and fries.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 rounded-lg border border-surface-border bg-surface-card p-8 text-center sm:p-12">
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-amber-brand">What We Believe</span>
          <blockquote className="mx-auto max-w-3xl font-display text-2xl font-bold uppercase leading-tight text-white sm:text-3xl">“{siteConfig.statement}”</blockquote>
          <p className="font-display text-xs uppercase tracking-widest text-zinc-500">FAST AND FURIOUS CAFE • CIRCULAR RD, SIALKOT</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-amber-brand">Our Menu</span>
          <h2 className="mt-1 font-display text-2xl font-bold uppercase text-white sm:text-3xl">On the Menu</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {standards.map(({ title, description, icon: Icon, tone }) => (
            <article key={title} className="space-y-3 rounded-lg border border-surface-border bg-surface-card p-6">
              <div className={`flex h-10 w-10 items-center justify-center rounded border ${tone}`}><Icon className="h-5 w-5" /></div>
              <h3 className="font-display text-lg font-bold uppercase text-white">{title}</h3>
              <p className="text-xs leading-relaxed text-zinc-400">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-amber-brand">Get in Touch</span>
          <h2 className="mt-1 font-display text-2xl font-bold uppercase text-white sm:text-3xl">Ordering &amp; Directions</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { category: "01 • External Ordering", name: "Foodpanda", text: "Visit the Foodpanda listing.", href: siteConfig.ordering.foodpandaUrl },
            { category: "02 • Phone", name: "Call the Cafe", text: siteConfig.contact.phone, href: siteConfig.contact.phoneTel },
            { category: "03 • Directions", name: "Google Maps", text: siteConfig.location.shortAddress, href: siteConfig.location.googleMapsUrl },
            { category: "04 • Facebook", name: "Facebook", text: "Fast & Furious Cafe", href: siteConfig.social.facebookUrl },
          ].map((service) => (
            <a key={service.category} href={service.href} target={service.href.startsWith("http") ? "_blank" : undefined} rel={service.href.startsWith("http") ? "noopener noreferrer" : undefined} className="space-y-2 rounded border border-surface-border bg-surface-lowest p-5">
              <span className="font-display text-xs font-bold uppercase tracking-wider text-amber-brand">{service.category}</span>
              <h3 className="font-display text-base font-bold uppercase text-white">{service.name}</h3>
              <p className="text-xs text-zinc-400">{service.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 rounded-lg border border-surface-border bg-surface-card px-6 py-8 sm:px-8 md:flex-row">
        <div className="space-y-2 text-center md:text-left">
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-amber-brand">Visit</span>
          <h2 className="font-display text-2xl font-bold uppercase text-white">Circular Road, Sialkot</h2>
          <p className="text-xs text-zinc-300">{siteConfig.location.shortAddress}</p>
          <p className="text-[11px] text-zinc-500">{siteConfig.hours.display} — {siteConfig.hours.caveat}</p>
        </div>
        <div className="flex shrink-0 flex-wrap justify-center gap-3">
          <a href={siteConfig.location.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 rounded bg-crimson px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-crimson-hover"><span>Open in Google Maps</span><ExternalLink className="h-3.5 w-3.5" /></a>
          <Link href="/contact" className="button-dark rounded px-5 py-2.5 text-xs font-semibold uppercase tracking-wider">Contact</Link>
        </div>
      </section>
    </div>
  );
}
