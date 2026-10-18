import Link from "next/link";
import { siteConfig } from "../config/site";

export default function BrandWordmark() {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className="group inline-flex flex-col leading-none focus:outline-none focus:ring-1 focus:ring-amber-brand"
    >
      <span className="font-display text-2xl font-bold tracking-tight text-white transition group-hover:text-zinc-200 md:text-3xl">
        FAST <span className="text-amber-brand">&amp;</span> FURIOUS
      </span>
      <span className="mt-1 font-display text-[10px] uppercase tracking-[0.25em] text-zinc-400 md:text-xs">
        CAFE • SIALKOT
      </span>
    </Link>
  );
}
