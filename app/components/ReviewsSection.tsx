"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import reviews from "../data/reviews";

const googleReviewsUrl = "https://maps.app.goo.gl/9yxoKTfZJWTQJ8sT7";

const customerReviews = reviews
  .filter((review) => review.text.trim().length > 0)
  .slice(0, 4);

export default function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScroll, setCanScroll] = useState(false);

  function updateScrollState() {
    const element = scrollRef.current;

    if (!element) return;

    const maxScroll = element.scrollWidth - element.clientWidth;

    setCanScroll(maxScroll > 2);
    setScrollProgress(
      maxScroll > 2 ? (element.scrollLeft / maxScroll) * 100 : 0,
    );
  }

  if (customerReviews.length === 0) return null;
  useEffect(() => {
    const element = scrollRef.current;

    if (!element) return;

    const observer = new ResizeObserver(updateScrollState);

    observer.observe(element);

    updateScrollState();

    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-labelledby="reviews-heading"
      className="overflow-hidden bg-surface-lowest py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-amber-brand">
              Customer Voices
            </p>

            <h2
              id="reviews-heading"
              className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl"
            >
              Good food. <span className="text-crimson">Real words.</span>
            </h2>

            <div className="mt-3 flex items-center gap-2">
              <span
                className="flex gap-1 text-amber-brand"
                aria-label="Five stars"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    aria-hidden="true"
                    className="h-4 w-4 fill-current"
                  />
                ))}
              </span>

              <span className="text-xs text-zinc-400 sm:text-sm">
                Customer feedback
              </span>
            </div>
          </div>

          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-brand"
          >
            Google Reviews
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        onLoad={updateScrollState}
        className="mx-auto flex w-full max-w-7xl   gap-4 overflow-x-auto px-4 pb-3 sm:gap-5 sm:px-6 lg:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        tabIndex={0}
        role="region"
        aria-label="Customer reviews. Scroll horizontally to explore."
      >
        {customerReviews.map((review) => (
          <article
            key={review.id}
            className="flex min-h-[220px] w-[min(82vw,320px)] shrink-0 flex-col rounded-2xl bg-surface-card p-5 sm:min-h-[240px] sm:w-[320px] sm:p-6"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <p className="min-w-0 break-words font-display text-sm font-bold uppercase tracking-wide text-white">
                {review.author}
              </p>

              <span
                className="flex shrink-0 gap-0.5 text-amber-brand"
                aria-label={`${review.rating} stars`}
              >
                {Array.from({ length: review.rating }, (_, index) => (
                  <Star
                    key={index}
                    aria-hidden="true"
                    className="h-3.5 w-3.5 fill-current"
                  />
                ))}
              </span>
            </div>

            <blockquote className="flex-1 whitespace-pre-line break-words text-sm leading-7 text-zinc-300">
              {review.text}
            </blockquote>
          </article>
        ))}
      </div>

      {canScroll && (
        <div className="mx-auto mt-3 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="shrink-0 text-xs text-zinc-400">
              Swipe to explore
            </span>

            <div
              className="h-1 min-w-0 flex-1 overflow-hidden rounded-full bg-zinc-800"
              role="progressbar"
              aria-label="Review scroll progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(scrollProgress)}
            >
              <div
                className="h-full rounded-full bg-amber-brand"
                style={{ width: `${Math.max(8, scrollProgress)}%` }}
              />
            </div>

            <span
              aria-hidden="true"
              className="shrink-0 text-sm text-amber-brand"
            >
              →
            </span>
          </div>
        </div>
      )}

      <p className="mx-auto mt-5 max-w-7xl px-4 text-xs text-zinc-500 sm:px-6 lg:px-8">
        Review excerpts are displayed as provided.
      </p>
    </section>
  );
}
