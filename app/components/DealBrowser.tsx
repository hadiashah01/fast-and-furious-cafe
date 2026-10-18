"use client";

import { AlertCircle, Clock, MapPin, Utensils } from "lucide-react";
import { useState } from "react";
import { dealCategories, dealsData, type DealCategory } from "../data/deals";
import { siteConfig } from "../config/site";
import DealCard from "./DealCard";

export default function DealBrowser() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | DealCategory>("all");
  const filteredDeals = dealsData.filter((deal) => selectedCategory === "all" || deal.category === selectedCategory);

  return (
    <div className="space-y-12 pb-16">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-surface-border pb-4">
          <div className="flex flex-wrap items-center gap-2">
            {dealCategories.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                aria-pressed={selectedCategory === tab.id}
                className={`rounded px-4 py-2 font-display text-xs uppercase tracking-wider transition ${
                  selectedCategory === tab.id
                    ? "bg-crimson font-bold text-white"
                    : "border border-zinc-800 bg-surface-card text-zinc-400 hover:text-white"
                }`}
              >
                {tab.label} ({tab.id === "all" ? dealsData.length : dealsData.filter((deal) => deal.category === tab.id).length})
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-2 text-xs text-zinc-400">
            <AlertCircle className="h-4 w-4 shrink-0 text-amber-brand" />
            <span>Listed deals • Circular Rd, Sialkot</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          {filteredDeals.length} {filteredDeals.length === 1 ? "deal" : "deals"} shown.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDeals.length > 0 ? (
            filteredDeals.map((deal) => <DealCard key={deal.id} deal={deal} />)
          ) : (
            <p className="col-span-full rounded-lg border border-surface-border bg-surface-card py-16 text-center text-sm text-zinc-400">
              No deals are listed in this category.
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <h2 className="font-display text-xl font-bold uppercase text-white">How to Order Deals</h2>
          <p className="mt-2 text-xs text-zinc-400">
            Contact the cafe to confirm service availability, or check its Foodpanda listing.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex items-start gap-3 rounded-lg border border-surface-border bg-surface-card p-5">
            <Utensils className="h-5 w-5 shrink-0 text-amber-brand" />
            <div><h3 className="font-display text-sm font-bold uppercase text-white">{siteConfig.services[0].title}</h3><p className="mt-1 text-xs text-zinc-400">{siteConfig.services[0].desc}.</p></div>
          </div>
          <div className="flex items-start gap-3 rounded-lg border border-surface-border bg-surface-card p-5">
            <MapPin className="h-5 w-5 shrink-0 text-amber-brand" />
            <div><h3 className="font-display text-sm font-bold uppercase text-white">{siteConfig.services[1].title}</h3><p className="mt-1 text-xs text-zinc-400">{siteConfig.services[1].desc}.</p></div>
          </div>
          <div className="flex items-start gap-3 rounded-lg border border-surface-border bg-surface-card p-5">
            <Clock className="h-5 w-5 shrink-0 text-amber-brand" />
            <div><h3 className="font-display text-sm font-bold uppercase text-white">{siteConfig.services[2].title}</h3><p className="mt-1 text-xs text-zinc-400">{siteConfig.services[2].desc}.</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
