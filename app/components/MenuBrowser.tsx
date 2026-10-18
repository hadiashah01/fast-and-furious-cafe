"use client";

import { useMemo, useState } from "react";
import { Phone, RotateCcw, Search } from "lucide-react";
import { siteConfig } from "../config/site";
import {
  categoryLabels,
  menuItems,
  type MenuCategory,
} from "../data/menuItems";
import CafeInfoNotice from "./CafeInfoNotice";
import ProductCard from "./ProductCard";
import ScrollReveal from "./ScrollReveal";

export default function MenuBrowser() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | MenuCategory>("all");

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return menuItems.filter((item) => {
      const matchesSearch = `${item.name} ${categoryLabels[item.category]}`
        .toLowerCase()
        .includes(query);
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  const categories: { id: "all" | MenuCategory; label: string }[] = [
    { id: "all", label: "All Items" },
    ...Object.entries(categoryLabels).map(([id, label]) => ({
      id: id as MenuCategory,
      label,
    })),
  ];

  return (
    <div className="space-y-12 pb-16">
      <ScrollReveal><section className="border-b border-surface-border bg-surface-lowest pb-8 pt-10">
        <div className="mx-auto max-w-7xl space-y-3 px-4 sm:px-6 lg:px-8">
          <span className="font-display text-xs font-semibold uppercase tracking-widest text-amber-brand">
            Fast &amp; Furious Cafe • Sialkot
          </span>
          <h1 className="font-display text-4xl font-bold uppercase text-white sm:text-5xl">
            MENU
          </h1>
          <CafeInfoNotice />
        </div>
      </section></ScrollReveal>

      <ScrollReveal><section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 rounded-lg border border-surface-border bg-surface-card p-4 md:flex-row">
          <div className="flex w-full items-center space-x-2 overflow-x-auto pb-1 md:w-auto md:pb-0">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedCategory(category.id)}
                aria-pressed={selectedCategory === category.id}
                className={`motion-control shrink-0 rounded px-3 py-1.5 font-display text-xs uppercase tracking-wider transition ${
                  selectedCategory === category.id
                    ? "bg-crimson font-bold text-white"
                    : "border border-zinc-800 bg-surface-lowest text-zinc-400 hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="flex w-full items-center space-x-2 md:w-80">
            <label className="relative w-full">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
              <span className="sr-only">Search menu items</span>
              <input
                type="search"
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="w-full rounded border border-zinc-700 bg-surface-lowest py-1.5 pl-9 pr-3 text-xs text-white placeholder-zinc-500 focus:border-amber-brand focus:outline-none"
              />
            </label>
            {(searchQuery || selectedCategory !== "all") && (
              <button
                type="button"
                onClick={resetFilters}
                title="Reset filters"
                aria-label="Reset menu filters"
                className="rounded bg-zinc-800 p-1.5 text-zinc-300 hover:bg-zinc-700"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section></ScrollReveal>

      <ScrollReveal><section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {filteredItems.length === 0 ? (
          <div role="status" className="space-y-3 rounded-lg border border-surface-border bg-surface-card py-16 text-center">
            <p className="text-sm text-zinc-400">
              No menu items match your search and category.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="rounded bg-crimson px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson-hover"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            <p className="mb-4 text-xs text-zinc-500" aria-live="polite" aria-atomic="true">
              {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"}
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item, index) => (
                <ScrollReveal key={item.id} delay={index * 55}>
                  <ProductCard item={item} />
                </ScrollReveal>
              ))}
            </div>
          </>
        )}
      </section></ScrollReveal>

      <ScrollReveal><section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-lg border border-surface-border bg-surface-lowest p-6 sm:p-8 md:flex-row">
          <div className="space-y-2 text-center md:text-left">
            <span className="font-display text-xs font-semibold uppercase tracking-widest text-amber-brand">
              Our Food Credo
            </span>
            <p className="max-w-xl text-sm italic text-zinc-300">
              “{siteConfig.statement}”
            </p>
            <p className="text-xs text-zinc-500">
              {siteConfig.hours.display} — {siteConfig.hours.caveat}.{" "}
              {siteConfig.location.shortAddress}.
            </p>
          </div>
          <a
            href={siteConfig.contact.phoneTel}
            className="flex shrink-0 items-center space-x-2 rounded bg-crimson px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-crimson-hover"
          >
            <Phone className="h-4 w-4" />
            <span>Call {siteConfig.contact.phone}</span>
          </a>
        </div>
      </section></ScrollReveal>
    </div>
  );
}
