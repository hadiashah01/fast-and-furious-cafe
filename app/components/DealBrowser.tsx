"use client";

import { AlertCircle, MapPin, Phone, Utensils } from "lucide-react";
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
                    : "button-dark text-zinc-400"
                }`}
              >
                {tab.label} ({tab.id === "all" ? dealsData.length : dealsData.filter((deal) => deal.category === tab.id).length})
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-2 text-xs text-zinc-400">
            <AlertCircle className="h-4 w-4 shrink-0 text-amber-brand" />
            <span>Deals • Circular Road, Sialkot</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          {filteredDeals.length} {filteredDeals.length === 1 ? "deal" : "deals"} shown.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDeals.length > 0 ? (
            filteredDeals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))
          ) : (
            <p className="col-span-full rounded-lg border border-surface-border bg-surface-card py-16 text-center text-sm text-zinc-400">
              No deals in this category.
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <h2 className="font-display text-xl font-bold uppercase text-white">How to Order Deals</h2>
          <p className="mt-2 text-xs text-zinc-400">
            Call to check availability or order through Foodpanda.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <a href={siteConfig.ordering.foodpandaUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 rounded-lg border border-surface-border bg-surface-card p-5">
            <Utensils className="h-5 w-5 shrink-0 text-crimson" />
            <div><h3 className="font-display text-sm font-bold uppercase text-white">Foodpanda</h3><p className="mt-1 text-xs text-zinc-400">Order through the external listing.</p></div>
          </a>
          <a href={siteConfig.contact.phoneTel} className="flex items-start gap-3 rounded-lg border border-surface-border bg-surface-card p-5">
          <Phone className="h-5 w-5 shrink-0 text-amber-brand" />
          <div><h3 className="font-display text-sm font-bold uppercase text-white">Call the Cafe</h3><p className="mt-1 text-xs text-zinc-400">{siteConfig.contact.phone}</p></div>
          </a>
          <a href={siteConfig.location.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 rounded-lg border border-surface-border bg-surface-card p-5">
          <MapPin className="h-5 w-5 shrink-0 text-zinc-300" />
          <div><h3 className="font-display text-sm font-bold uppercase text-white">Directions</h3><p className="mt-1 text-xs text-zinc-400">{siteConfig.location.shortAddress}</p></div>
          </a>
        </div>
      </section>
    </div>
  );
}
