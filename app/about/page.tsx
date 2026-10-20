import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "../config/site";
import { createPageMetadata } from "../config/metadata";
import MenuImage from "../components/MenuImage";

export const metadata = createPageMetadata(
  "/about",
  "About the Cafe",
  "Learn about Fast & Furious Cafe, its listed menu, and its location on Circular Road in Sialkot.",
);

const standards = [
  {
    title: "Burgers & Zingers",
    image: "/images/zinger-burger.avif",
    imageAlt: "Zinger burger with a crispy chicken patty",
  },
  {
    title: "Rolls & Shawarma",
    image: "/images/side-view-doner-with-grilled-chicken-greens-lettuce-tomato-french-fries-table.avif",
    imageAlt: "Chicken doner roll served with greens and fries",
  },
  {
    title: "Fries & Sides",
    image: "/images/delicious-street-food-still-life%20(1).avif",
    imageAlt: "Loaded fries served as street food",
  },
];

export default function AboutPage() {
  return (
    <div className="pb-12">
      <section className="py-10 md:py-12">
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
              src="/images/enjoying-street-food-fest.avif"
              alt="A customer enjoying street food"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 md:py-24 lg:px-8">
        <span className="font-display text-xs font-bold uppercase tracking-widest text-amber-brand">Our Philosophy</span>
        <blockquote className="mt-4 font-display text-2xl font-bold italic leading-tight text-white sm:text-3xl md:text-4xl">“{siteConfig.statement}”</blockquote>
        <p className="mt-5 font-display text-xs uppercase tracking-widest text-zinc-500">FAST &amp; FURIOUS CAFE — CIRCULAR RD, SIALKOT</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <span className="mb-2 block font-display text-xs font-bold uppercase tracking-widest text-amber-brand">Our Menu</span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white md:text-5xl">On the Menu</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {standards.map(({ title, image, imageAlt }) => {
            return (
              <article key={title} className="space-y-4">
                <MenuImage
                  src={image}
                  alt={imageAlt}
                  className="h-56 w-full rounded-xl sm:h-64"
                  sizes="(max-width: 767px) 100vw, 33vw"
                />
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">{title}</h3>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <span className="mb-2 block font-display text-xs font-bold uppercase tracking-widest text-amber-brand">Get in Touch</span>
          <h2 className="font-display text-3xl font-bold uppercase text-white md:text-5xl">Ordering &amp; Directions</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {[
            { category: "01 • External Ordering", name: "Foodpanda", text: "Visit the Foodpanda listing.", href: siteConfig.ordering.foodpandaUrl },
            { category: "02 • Phone", name: "Call the Cafe", text: siteConfig.contact.phone, href: siteConfig.contact.phoneTel },
            { category: "03 • Directions", name: "Google Maps", text: siteConfig.location.shortAddress, href: siteConfig.location.googleMapsUrl },
            { category: "04 • Facebook", name: "Facebook", text: "Fast & Furious Cafe", href: siteConfig.social.facebookUrl },
          ].map((service) => (
            <a key={service.category} href={service.href} target={service.href.startsWith("http") ? "_blank" : undefined} rel={service.href.startsWith("http") ? "noopener noreferrer" : undefined} className="space-y-2 border-t border-surface-border pt-5">
              <span className="font-display text-xs font-bold uppercase tracking-wider text-amber-brand">{service.category}</span>
              <h3 className="font-display text-base font-bold uppercase text-white">{service.name}</h3>
              <p className="text-xs text-zinc-400">{service.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid items-stretch gap-8 md:grid-cols-2 md:gap-12">
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
          <div className="min-h-72 overflow-hidden rounded-xl border border-zinc-800 md:min-h-96">
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
