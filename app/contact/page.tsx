import {
  Clock,
  ExternalLink,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";
import { siteConfig } from "../config/site";
import { createPageMetadata } from "../config/metadata";

export const metadata = createPageMetadata(
  "/contact",
  "Contact & Location",
  "Find the address, phone, email and map for Fast & Furious Cafe on Circular Road in Sialkot.",
);

export default function ContactPage() {
  return (
    <div className="space-y-12 pb-16">
      <section className="border-b border-surface-border bg-surface-lowest pb-8 pt-10">
        <div className="mx-auto max-w-7xl space-y-3 px-4 sm:px-6 lg:px-8">
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-amber-brand">
            Fast &amp; Furious Cafe Sialkot
          </span>
          <h1 className="font-display text-4xl font-bold uppercase text-white sm:text-5xl">VISIT US IN SIALKOT</h1>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">
            Find Fast and Furious Cafe on Circular Road, opposite Pakistan Gym, Kainchi Mohalla, Sialkot.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href={siteConfig.location.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 rounded bg-crimson px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-crimson-hover">
              <Navigation className="h-3.5 w-3.5" /><span>Get Directions</span>
            </a>
            <a href={siteConfig.contact.phoneTel} className="inline-flex items-center space-x-2 rounded px-4 py-2.5 text-xs font-semibold text-zinc-300 transition-colors hover:bg-surface-card hover:text-white">
              <Phone className="h-3.5 w-3.5 text-amber-brand" /><span>Call {siteConfig.contact.phone}</span>
            </a>
            <a href={siteConfig.ordering.foodpandaUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 rounded px-4 py-2.5 text-xs font-semibold text-zinc-300 transition-colors hover:bg-surface-card hover:text-white">
              <span>Order on Foodpanda</span><ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <article className="space-y-3 rounded-lg border border-surface-border bg-surface-card p-6">
              <div className="flex items-center space-x-2 font-display text-xs font-semibold uppercase tracking-wider text-amber-brand"><MapPin className="h-4 w-4" /><span>Address</span></div>
              <h2 className="font-display text-lg font-bold uppercase text-white">CIRCULAR ROAD, SIALKOT</h2>
              <address className="not-italic text-xs leading-relaxed text-zinc-300">{siteConfig.location.address}</address>
              <div className="border-t border-zinc-800 pt-2 text-xs text-zinc-400"><span className="font-semibold uppercase text-zinc-500">Landmark:</span> {siteConfig.location.landmark}.</div>
            </article>

            <article className="space-y-3 rounded-lg border border-surface-border bg-surface-card p-6">
              <div className="flex items-center justify-between gap-2 text-xs">
                <div className="flex items-center space-x-2 font-display font-semibold uppercase tracking-wider text-amber-brand"><Clock className="h-4 w-4" /><span>Operating Hours</span></div>
                <span className="rounded border border-amber-brand/30 bg-amber-brand/10 px-2 py-0.5 font-display text-[10px] uppercase text-amber-brand">Confirm Schedule</span>
              </div>
              <div className="font-display text-2xl font-bold text-white">{siteConfig.hours.display}</div>
              <p className="text-xs text-zinc-400">{siteConfig.hours.caveat}. Call to confirm today’s hours.</p>
            </article>

            <article className="space-y-4 rounded-lg border border-surface-border bg-surface-card p-6">
              <div className="flex items-center justify-between gap-3 border-b border-zinc-800 pb-3">
                <div><span className="block font-display text-[10px] uppercase tracking-wider text-zinc-500">Phone</span><a href={siteConfig.contact.phoneTel} className="font-display text-base font-bold text-white hover:text-amber-brand">{siteConfig.contact.phone}</a></div>
                <a href={siteConfig.contact.phoneTel} className="flex items-center space-x-1 rounded bg-crimson px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-hover"><Phone className="h-3 w-3" /><span>Call</span></a>
              </div>
              <div className="flex items-center justify-between gap-3">
                <div><span className="block font-display text-[10px] uppercase tracking-wider text-zinc-500">Email</span><a href={siteConfig.contact.emailMailto} className="text-xs text-zinc-300 hover:text-white">{siteConfig.contact.email}</a></div>
                <a href={siteConfig.contact.emailMailto} className="button-dark rounded px-3 py-1.5 text-xs font-semibold uppercase tracking-wider">Send Email</a>
              </div>
            </article>

            <article className="space-y-3 rounded-lg border border-surface-border bg-surface-card p-6">
              <span className="block font-display text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Online Ordering</span>
              <p className="text-xs text-zinc-300">Visit the external Foodpanda listing for ordering options.</p>
              <a href={siteConfig.ordering.foodpandaUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-amber-brand">
                <span>Open Foodpanda</span><ExternalLink className="h-3.5 w-3.5" />
              </a>
            </article>
          </div>

          <div className="flex flex-col justify-between space-y-6 rounded-lg border border-surface-border bg-surface-card p-6 lg:col-span-7 lg:p-8">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-3">
                <span className="font-display text-xs font-semibold uppercase tracking-wider text-amber-brand">Location &amp; Directions</span>
                <a href={siteConfig.location.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 font-display text-xs uppercase tracking-wider text-zinc-400 hover:text-white">
                  <span>Open in Google Maps</span><ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
              <div className="overflow-hidden rounded-lg">
                <iframe
                  title="Map showing Fast & Furious Cafe on Circular Road, Sialkot"
                  src={`https://www.google.com/maps?output=embed&q=${encodeURIComponent(siteConfig.location.address)}`}
                  className="block h-72 w-full border-0 sm:h-96"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="space-y-1 rounded border border-zinc-800 bg-surface-lowest p-4 text-xs text-zinc-500">
              <span className="block font-display text-[11px] font-semibold uppercase text-zinc-400">Questions?</span>
              <p>Call {siteConfig.contact.phone} to check current hours, menu prices and service options.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
