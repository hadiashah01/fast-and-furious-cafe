"use client";

import { ExternalLink, Menu as MenuIcon, Phone, X } from "lucide-react";
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
    <header className="sticky top-0 z-50 border-b border-surface-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandWordmark />
        <nav className="hidden items-center space-x-1 md:flex lg:space-x-2" aria-label="Main navigation">
          {siteConfig.nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`motion-control px-3 py-2 font-display text-sm uppercase tracking-wider transition-colors ${
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
        <div className="hidden items-center space-x-3 lg:flex">
          <a
            href={siteConfig.contact.phoneTel}
            className="flex items-center space-x-2 rounded border border-zinc-700 bg-surface-card px-3 py-2 text-xs font-semibold text-zinc-200 transition hover:bg-zinc-800"
          >
            <Phone className="h-3.5 w-3.5 text-amber-brand" />
            <span>{siteConfig.contact.phone}</span>
          </a>
          <a
            href={siteConfig.ordering.foodpandaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 rounded bg-foodpanda px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-foodpanda-hover"
          >
            <span>Order on Foodpanda</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setOpenMenuPath(mobileMenuOpen ? null : pathname)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="motion-control p-2 text-zinc-300 hover:text-white focus:outline-none md:hidden"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
      <div
        id="mobile-navigation"
        hidden={!mobileMenuOpen}
        className="space-y-3 border-b border-surface-border bg-surface-lowest px-4 py-5 md:hidden"
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
          <div className="flex flex-col gap-2 border-t border-zinc-800 pt-3">
            <a
              href={siteConfig.ordering.foodpandaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded bg-foodpanda py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white"
            >
              Order on Foodpanda
            </a>
            <a
              href={siteConfig.contact.phoneTel}
              className="w-full rounded border border-zinc-700 bg-surface-card py-2 text-center text-xs font-semibold text-zinc-200"
            >
              Call {siteConfig.contact.phone}
            </a>
          </div>
      </div>
    </header>
  );
}
