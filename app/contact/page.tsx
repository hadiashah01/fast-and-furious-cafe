import type { Metadata } from "next";
import { Clock, ExternalLink, MapPin, Navigation, Phone } from "lucide-react";
import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: "Contact Us & Location Map",
  description:
    "Get location directions, phone number, and operating hours for Fast & Furious Cafe on Circular Road, Sialkot.",
};

export default function ContactPage() {
  return (
    <div className="pb-12">
      <section className="px-4 py-10 md:py-12">
        <div className="mx-auto max-w-7xl space-y-3 px-4 sm:px-6 lg:px-8">
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-amber-brand">
            Fast &amp; Furious Cafe Sialkot
          </span>
          <h1 className="font-display text-4xl font-bold uppercase text-white sm:text-5xl">
            VISIT US IN SIALKOT
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">
            Hours, contact details, and directions for visiting Fast &amp;
            Furious Cafe.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={siteConfig.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 rounded bg-crimson px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-crimson-hover"
            >
              <Navigation className="h-3.5 w-3.5" />
              <span>Get Directions</span>
            </a>
            <a
              href={siteConfig.contact.phoneTel}
              className="inline-flex items-center space-x-2 rounded px-4 py-2.5 text-xs font-semibold text-zinc-300 transition-colors hover:bg-surface-card hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-amber-brand" />
              <span>Call {siteConfig.contact.phone}</span>
            </a>
            <a
              href={siteConfig.ordering.foodpandaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 rounded px-4 py-2.5 text-xs font-semibold text-zinc-300 transition-colors hover:bg-surface-card hover:text-white"
            >
              <span>Order on Foodpanda</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-7 lg:col-span-5">
            <section className="space-y-3 border-t border-zinc-800 pt-5">
              <div className="flex items-center space-x-2 font-display text-xs font-semibold uppercase tracking-wider text-amber-brand">
                <MapPin className="h-4 w-4" />
                <span>Address</span>
              </div>
              <h2 className="font-display text-lg font-bold uppercase text-white">
                Circular Road, Sialkot
              </h2>
              <address className="not-italic text-sm leading-relaxed text-zinc-300">
                {siteConfig.location.address}
              </address>
            </section>

            <section className="space-y-3 border-t border-zinc-800 pt-5">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center space-x-2 font-display text-xs font-semibold uppercase tracking-wider text-amber-brand">
                  <Clock className="h-4 w-4" />
                  <span>Operating Hours</span>
                </div>
                <span className="font-display text-[10px] uppercase tracking-wider text-zinc-500">
                  Confirm Schedule
                </span>
              </div>
              <div className="font-display text-xl font-bold text-white sm:text-2xl">
                {siteConfig.hours.display}
              </div>
              <p className="text-sm text-zinc-400">
                {siteConfig.hours.caveat}. Call to confirm today’s hours.
              </p>
            </section>

            <section className="space-y-3 border-t border-zinc-800 pt-5">
              <span className="block font-display text-xs font-semibold uppercase tracking-wider text-amber-brand">
                Phone
              </span>
              <a
                href={siteConfig.contact.phoneTel}
                className="inline-flex items-center gap-2 font-display text-base font-bold text-white hover:text-amber-brand"
              >
                <Phone
                  aria-hidden="true"
                  className="h-4 w-4 text-amber-brand"
                />
                {siteConfig.contact.phone}
              </a>
            </section>

            <section className="space-y-3 border-t border-zinc-800 pt-5">
              <span className="block font-display text-xs font-semibold uppercase tracking-wider text-amber-brand">
                Email
              </span>
              <a
                href={siteConfig.contact.emailMailto}
                className="block break-all text-sm text-zinc-300 hover:text-white"
              >
                {siteConfig.contact.email}
              </a>
            </section>

            <section className="space-y-3 border-t border-zinc-800 pt-5">
              <span className="block font-display text-xs font-semibold uppercase tracking-wider text-amber-brand">
                Online Ordering
              </span>
              <p className="text-sm text-zinc-400">
                Visit the external Foodpanda listing for ordering options.
              </p>
              <a
                href={siteConfig.ordering.foodpandaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-amber-brand"
              >
                <span>Open Foodpanda</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </section>
          </div>

          <div className="lg:col-span-7">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <span className="font-display text-xs font-semibold uppercase tracking-wider text-amber-brand">
                Location &amp; Directions
              </span>
              <a
                href={siteConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 font-display text-xs uppercase tracking-wider text-zinc-400 hover:text-white"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="h-[480px] overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl">
              <iframe
                title="Map showing Fast & Furious Cafe on Circular Road, Sialkot"
                src={siteConfig.location.googleMapsEmbedUrl}
                className="block h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
