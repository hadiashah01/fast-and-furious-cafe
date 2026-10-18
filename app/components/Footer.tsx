import Link from "next/link";
import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "../config/site";
import BrandWordmark from "./BrandWordmark";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <ScrollReveal><footer className="border-t border-surface-border bg-surface-lowest pb-8 pt-12 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <BrandWordmark />
            <p className="mt-4 text-xs italic leading-relaxed text-zinc-400">
              “{siteConfig.statement}”
            </p>
          </div>
          <div>
            <h2 className="mb-4 border-b border-zinc-800 pb-2 font-display text-xs font-semibold uppercase tracking-widest text-zinc-200">
              Quick Links
            </h2>
            <ul className="space-y-2 text-xs">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">{item.label}</Link>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.ordering.foodpandaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 transition hover:text-foodpanda"
                >
                  <span>Foodpanda Store</span><ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 border-b border-zinc-800 pb-2 font-display text-xs font-semibold uppercase tracking-widest text-zinc-200">
              Contact Details
            </h2>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start space-x-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-brand" />
                <span>{siteConfig.location.address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-3.5 w-3.5 shrink-0 text-amber-brand" />
                <a href={siteConfig.contact.phoneTel} className="transition hover:text-white">{siteConfig.contact.phone}</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-3.5 w-3.5 shrink-0 text-amber-brand" />
                <a href={siteConfig.contact.emailMailto} className="transition hover:text-white">{siteConfig.contact.email}</a>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-brand" />
                <span>{siteConfig.hours.display} — {siteConfig.hours.caveat}</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 border-b border-zinc-800 pb-2 font-display text-xs font-semibold uppercase tracking-widest text-zinc-200">
              Visit or Order
            </h2>
            <div className="space-y-2.5">
              <a
                href={siteConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded border border-zinc-700 bg-surface-card px-3 py-2 text-xs font-medium text-zinc-200 transition hover:bg-zinc-800"
              >
                <span>GET DIRECTIONS</span><ExternalLink className="h-3.5 w-3.5 text-amber-brand" />
              </a>
              <a
                href={siteConfig.ordering.foodpandaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded bg-foodpanda px-3 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-foodpanda-hover"
              >
                <span>ORDER ONLINE</span><ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="mt-4 border-t border-zinc-800 pt-3">
              <span className="mb-1 block font-display text-[10px] uppercase tracking-wider text-zinc-500">Ask About</span>
              <p className="text-[11px] text-zinc-400">{siteConfig.services.map((service) => service.title).join(" • ")} • Foodpanda</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 border-t border-zinc-800 pt-6 text-[11px] text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Fast &amp; Furious Cafe Sialkot. All rights reserved.</p>
          <p className="font-display uppercase tracking-widest text-zinc-400">Circular Road • Sialkot</p>
        </div>
      </div>
    </footer></ScrollReveal>
  );
}
