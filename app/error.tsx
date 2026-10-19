"use client";

import Link from "next/link";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section
      role="alert"
      className="mx-auto flex min-h-[55vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6"
    >
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-amber-brand">
        Something went wrong
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold uppercase text-white sm:text-5xl">
        We couldn’t load this page
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-300">
        Try again. If the problem continues, return home and try again later.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded bg-crimson px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-crimson-hover"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="button-dark rounded px-5 py-3 text-xs font-semibold uppercase tracking-wider"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
