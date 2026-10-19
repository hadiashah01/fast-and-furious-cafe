"use client";

import { ExternalLink, MapPin, Menu as MenuIcon, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../config/site";
import BrandWordmark from "./BrandWordmark";

export default function Header() {
  const pathname = usePathname();
  const [openMenuPath, setOpenMenuPath] = useState<string | null>(null);
  const mobileMenuOpen = openMenuPath === pathname;
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenuPath(null);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-surface/95">
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto] items-center px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <BrandWordmark />
        <nav className="hidden items-center justify-center space-x-1 lg:flex lg:space-x-2" aria-label="Main navigation">
          {siteConfig.nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`px-3 py-2 font-display text-sm uppercase tracking-wider transition-colors ${
                  isActive
                    ? "border-b-2 border-crimson font-bold text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center justify-end gap-2 lg:flex">
          <a
            href={siteConfig.location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open cafe location in Google Maps"
            title="Open cafe location in Google Maps"
            className="button-dark grid h-11 w-11 place-items-center rounded-full"
          >
            <MapPin aria-hidden="true" className="h-5 w-5 text-amber-brand" strokeWidth={2.5} />
          </a>
          <a
            href={siteConfig.contact.phoneTel}
            aria-label="Call Fast and Furious Cafe"
            title="Call Fast and Furious Cafe"
            className="button-dark grid h-11 w-11 place-items-center rounded-full"
          >
            <Phone aria-hidden="true" className="h-5 w-5 text-amber-brand" strokeWidth={2.5} />
          </a>
          <a
            href={siteConfig.ordering.foodpandaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded bg-crimson px-3 py-2 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-crimson-hover"
          >
            <span>Foodpanda</span>
            <ExternalLink aria-hidden="true" className="h-3 w-3" />
          </a>
        </div>
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setOpenMenuPath(mobileMenuOpen ? null : pathname)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="justify-self-end p-2 text-zinc-300 hover:text-white lg:hidden"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
      <div
        id="mobile-navigation"
        hidden={!mobileMenuOpen}
        className="space-y-3 border-b border-surface-border bg-surface-lowest px-4 py-5 lg:hidden"
      >
          <nav className="flex flex-col space-y-2" aria-label="Mobile navigation">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpenMenuPath(null)}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded px-3 py-2 font-display text-base uppercase tracking-wider ${
                    isActive ? "bg-surface-card font-bold text-crimson" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="grid grid-cols-3 gap-2 border-t border-zinc-800 pt-3">
            <a
              href={siteConfig.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
                aria-label="Open cafe location in Google Maps"
                title="Open cafe location in Google Maps"
                className="button-dark grid h-11 w-11 place-items-center justify-self-center rounded-full"
              >
                  <MapPin aria-hidden="true" className="h-5 w-5 text-amber-brand" strokeWidth={2.5} />
            </a>
            <a
              href={siteConfig.contact.phoneTel}
                aria-label="Call Fast and Furious Cafe"
                title="Call Fast and Furious Cafe"
                className="button-dark grid h-11 w-11 place-items-center justify-self-center rounded-full"
              >
                <Phone aria-hidden="true" className="h-5 w-5 text-amber-brand" strokeWidth={2.5} />
            </a>
            <a
              href={siteConfig.ordering.foodpandaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 rounded bg-crimson px-2 py-2 text-[11px] font-bold text-white hover:bg-crimson-hover"
            >
              <span>Foodpanda</span>
              <ExternalLink aria-hidden="true" className="h-3 w-3" />
            </a>
          </div>
      </div>
    </header>
  );
}
