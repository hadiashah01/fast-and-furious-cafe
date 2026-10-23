"use client";

import { AlertCircle, MapPin, Phone, Utensils } from "lucide-react";
import { useEffect, useState } from "react";
import { dealCategories, dealsData, type DealCategory } from "../data/deals";
import { siteConfig } from "../config/site";
import DealCard from "./DealCard";

export default function DealBrowser() {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | DealCategory
  >("all");
  const filteredDeals = dealsData.filter(
    (deal) => selectedCategory === "all" || deal.category === selectedCategory,
  );
  const [visibleRows, setVisibleRows] = useState(3);
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const updateColumns = () => {
      // Matches the deals grid: 1 column, 2 at md, 3 at lg
      if (window.innerWidth >= 1024) {
        setColumns(3);
      } else if (window.innerWidth >= 768) {
        setColumns(2);
      } else {
        setColumns(1);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);

    return () => {
      window.removeEventListener("resize", updateColumns);
    };
  }, []);

  const visibleCount = visibleRows * columns;
  const visibleDeals = filteredDeals.slice(0, visibleCount);
  const hasMoreDeals = visibleDeals.length < filteredDeals.length;
  return (
    <div className="pb-8">
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:py-8 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="horizontal-scrollbar-hidden flex max-w-full gap-2 overflow-x-auto">
            {dealCategories.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(tab.id);
                  setVisibleRows(3);
                }}
                aria-pressed={selectedCategory === tab.id}
                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 font-display text-xs uppercase tracking-wider transition ${
                  selectedCategory === tab.id
                    ? "bg-crimson font-bold text-white"
                    : "button-dark text-zinc-400"
                }`}
              >
                {tab.label}
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                    selectedCategory === tab.id
                      ? "bg-white/15 text-white"
                      : "bg-white/5 text-zinc-400"
                  }`}
                >
                  {tab.id === "all"
                    ? dealsData.length
                    : dealsData.filter((deal) => deal.category === tab.id)
                        .length}
                </span>
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-2 text-xs text-zinc-400">
            <AlertCircle className="h-4 w-4 shrink-0 text-amber-brand" />
            <span>Deals Circular Road, Sialkot</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          {filteredDeals.length} {filteredDeals.length === 1 ? "deal" : "deals"}{" "}
          shown.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {filteredDeals.length > 0 ? (
            visibleDeals.map((deal) => <DealCard key={deal.id} deal={deal} />)
          ) : (
            <p className="col-span-full rounded-lg border border-surface-border bg-surface-card py-16 text-center text-sm text-zinc-400">
              No deals in this category.
            </p>
          )}
        </div>{" "}
        {hasMoreDeals && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleRows((rows) => rows + 3)}
              className="rounded border border-zinc-700 px-6 py-3 font-display text-xs font-bold uppercase tracking-widest text-white transition-colors hover:border-crimson hover:bg-crimson focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-brand"
              aria-label={`Show more deals. Currently showing ${visibleDeals.length} of ${filteredDeals.length}.`}
            >
              See More
              <span className="ml-2 text-zinc-400">
                ({filteredDeals.length - visibleDeals.length} left)
              </span>
            </button>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">
            How to Order Deals
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-400">
            Call to check availability or order through Foodpanda.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          <a
            href={siteConfig.ordering.foodpandaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 border-t border-surface-border pt-5"
          >
            <Utensils className="h-5 w-5 shrink-0 text-crimson" />
            <div>
              <h3 className="font-display text-sm font-bold uppercase text-white">
                Foodpanda
              </h3>
              <p className="mt-1 text-xs text-zinc-400">
                Order through the external listing.
              </p>
            </div>
          </a>
          <a
            href={siteConfig.contact.phoneTel}
            className="flex items-start gap-3 border-t border-surface-border pt-5"
          >
            <Phone className="h-5 w-5 shrink-0 text-amber-brand" />
            <div>
              <h3 className="font-display text-sm font-bold uppercase text-white">
                Call the Cafe
              </h3>
              <p className="mt-1 text-xs text-zinc-400">
                {siteConfig.contact.phone}
              </p>
            </div>
          </a>
          <a
            href={siteConfig.location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 border-t border-surface-border pt-5"
          >
            <MapPin className="h-5 w-5 shrink-0 text-zinc-300" />
            <div>
              <h3 className="font-display text-sm font-bold uppercase text-white">
                Directions
              </h3>
              <p className="mt-1 text-xs text-zinc-400">
                {siteConfig.location.shortAddress}
              </p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
