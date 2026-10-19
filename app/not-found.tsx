import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested page could not be found.",
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[55vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-amber-brand">
        404 • Page not found
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold uppercase text-white sm:text-5xl">
        This page isn’t here
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-300">
        The link may be incorrect, or the page may have moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded bg-crimson px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-crimson-hover"
        >
          Back to Home
        </Link>
        <Link
          href="/menu"
          className="rounded border border-zinc-700 bg-surface-card px-5 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-200 transition hover:bg-zinc-800"
        >
          View Menu
        </Link>
      </div>
    </section>
  );
}
