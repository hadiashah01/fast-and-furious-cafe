"use client";

import { useMemo, useState } from "react";
import { Phone, RotateCcw, Search } from "lucide-react";
import { siteConfig } from "../config/site";
import {
  categoryLabels,
  menuItems,
  type MenuCategory,
  popularItemIds,
} from "../data/menuItems";
import ProductCard from "./ProductCard";

export default function MenuBrowser() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "popular" | MenuCategory
  >("all");

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return menuItems.filter((item) => {
      const matchesSearch =
        `${item.name} ${item.description} ${categoryLabels[item.category]}`
        .toLowerCase()
        .includes(query);
      const matchesCategory =
        selectedCategory === "all" ||
        (selectedCategory === "popular"
          ? popularItemIds.includes(item.id as (typeof popularItemIds)[number])
          : item.category === selectedCategory);
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  const categories: {
    id: "all" | "popular" | MenuCategory;
    label: string;
  }[] = [
    { id: "all", label: "All Items" },
    { id: "popular", label: "Popular" },
    ...Object.entries(categoryLabels).map(([id, label]) => ({
      id: id as MenuCategory,
      label,
    })),
  ];

  return (
    <div className="pb-12">
      <section className="px-4 py-10 text-center md:py-12">
        <div className="mx-auto max-w-3xl space-y-3">
          <span className="block font-display text-xs font-bold uppercase tracking-widest text-amber-brand">
            Fast &amp; Furious Cafe Sialkot
          </span>
          <h1 className="font-display text-4xl font-bold uppercase text-white sm:text-5xl">
            MENU
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
            Browse burgers, shawarma, rolls, fries, sides, and drinks by category or search.
          </p>
        </div>
      </section>

      <section className="sticky top-20 z-40 mx-auto max-w-7xl bg-surface px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 rounded-full border border-zinc-800 bg-surface-card/95 p-3 backdrop-blur md:flex-row md:px-4">
          <div className="horizontal-scrollbar-hidden flex w-full min-w-0 touch-pan-x items-center gap-2 overflow-x-auto overscroll-x-contain scroll-smooth pb-1 md:flex-1 md:pb-0">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(category.id);
                }}
                aria-pressed={selectedCategory === category.id}
                className={`shrink-0 rounded-full px-3 py-2 font-display text-xs uppercase tracking-wider transition ${
                  selectedCategory === category.id
                    ? "bg-crimson font-bold text-white"
                    : "button-dark text-zinc-400"
                }`}
              >
                {category.label}
                <span className={`ml-1 rounded-full px-1.5 py-0.5 text-[10px] ${
                  selectedCategory === category.id
                    ? "bg-white/15 text-white"
                    : "bg-white/5 text-zinc-400"
                }`}>
                  {category.id === "all"
                  ? menuItems.length
                  : category.id === "popular"
                    ? popularItemIds.length
                    : menuItems.filter((item) => item.category === category.id)
                        .length}
                </span>
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
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                }}
                className="w-full rounded-full border border-zinc-700 bg-surface-lowest py-2 pl-9 pr-3 text-xs text-white placeholder-zinc-500 focus:border-amber-brand focus:outline-none"
              />
            </label>
            {(searchQuery || selectedCategory !== "all") && (
              <button
                type="button"
                onClick={resetFilters}
                title="Reset filters"
                aria-label="Reset menu filters"
                className="button-dark rounded p-1.5"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
              {filteredItems.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          </>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-surface-border pt-6 md:flex-row">
          <div className="space-y-2 text-center md:text-left">
            <span className="font-display text-xs font-semibold uppercase tracking-widest text-amber-brand">
              Find Your Next Favorite
            </span>
            <p className="max-w-xl text-sm text-zinc-300">
              Use the categories or search above to explore the full menu.
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
      </section>
    </div>
  );
}
