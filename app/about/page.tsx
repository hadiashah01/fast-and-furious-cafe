import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "../config/site";
import { createPageMetadata } from "../config/metadata";
import { menuItems } from "../data/menuItems";
import MenuImage from "../components/MenuImage";

export const metadata = createPageMetadata(
  "/about",
  "About the Cafe",
  "Learn about Fast & Furious Cafe, its listed menu, and its location on Circular Road in Sialkot.",
);

const standards = [
  {
    title: "Burgers & Zingers",
    description: "Zinger Burger, Chicken Burger, Chapli Burger, Double Zinger Burger, Tower Burger and Spicy Grand Chicken Burger.",
    imageId: "zinger-burger",
    imageAlt: "Zinger burger with a crispy chicken patty",
  },
  {
    title: "Rolls & Shawarma",
    description: "Chicken Shawarma, Platter Shawarma, Zinger Shawarma, and three paratha rolls.",
    imageId: "platter-shawarma",
    imageAlt: "Platter shawarma from the cafe menu",
  },
  {
    title: "Fries & Sides",
    description: "Fries, Masala Fries, Loaded Fries, Garlic Mayo Fries, and four sauces.",
    imageId: "loaded-fries",
    imageAlt: "Loaded fries with cheese and chicken",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-12 pb-16">
      <section className="border-b border-surface-border bg-surface-lowest py-10">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-3">
            <span className="font-display text-xs font-semibold uppercase tracking-widest text-amber-brand">About the Cafe</span>
            <h1 className="font-display text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl">ABOUT THE CAFE</h1>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
              Find us on Circular Road, opposite Pakistan Gym in Kainchi Mohalla, Sialkot. Our menu includes burgers, shawarma, paratha rolls and fries.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src="/images/hero.avif"
              alt="Burger with cheese, vegetables, and sauce"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 rounded-lg border border-amber-brand/20 bg-surface-card p-8 text-center sm:p-12">
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-amber-brand">What We Believe</span>
          <blockquote className="mx-auto max-w-3xl font-display text-2xl font-bold uppercase leading-tight text-white sm:text-3xl">“{siteConfig.statement}”</blockquote>
          <p className="font-display text-xs uppercase tracking-widest text-zinc-500">FAST &amp; FURIOUS CAFE — CIRCULAR RD, SIALKOT</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-amber-brand">Our Menu</span>
          <h2 className="mt-1 font-display text-2xl font-bold uppercase text-white sm:text-3xl">On the Menu</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {standards.map(({ title, description, imageId, imageAlt }) => {
            const image = menuItems.find((item) => item.id === imageId)?.image;
            return (
              <article key={title} className="space-y-3 rounded-lg border border-amber-brand/20 bg-surface-card p-4">
                <MenuImage
                  src={image}
                  alt={imageAlt}
                  className="aspect-[16/9] w-full"
                  sizes="(max-width: 767px) 100vw, 33vw"
                />
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">{title}</h3>
                <p className="text-xs leading-relaxed text-zinc-400">{description}</p>
              </article>
            );
          })}
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

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-lg border border-amber-brand/20 bg-surface-card p-5 sm:p-8 md:grid-cols-2">
          <div className="flex flex-col items-start justify-center gap-3">
            <span className="font-display text-xs font-semibold uppercase tracking-widest text-amber-brand">Visit</span>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-white">Circular Road, Sialkot</h2>
            <p className="text-sm text-zinc-300">{siteConfig.location.address}</p>
            <p className="text-xs text-zinc-500">{siteConfig.hours.display} — {siteConfig.hours.caveat}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={siteConfig.location.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 rounded bg-crimson px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-crimson-hover"><span>Open in Google Maps</span><ExternalLink className="h-3.5 w-3.5" /></a>
              <Link href="/contact" className="button-dark rounded px-5 py-2.5 text-xs font-semibold uppercase tracking-wider">Contact</Link>
            </div>
          </div>
          <div className="overflow-hidden rounded">
            <iframe
              title="Map showing Fast & Furious Cafe on Circular Road, Sialkot"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.location.address)}&output=embed`}
              className="block h-64 w-full border-0 sm:h-72"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
