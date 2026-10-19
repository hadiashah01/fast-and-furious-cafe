import { siteConfig } from "../config/site";

export default function TopUtilityBar() {
  return (
    <div className="hidden bg-surface-lowest px-4 py-3 text-center text-zinc-200 sm:block sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 whitespace-nowrap font-sans text-[11px] font-normal leading-snug tracking-[0.025em] md:text-xs">
        <span>{siteConfig.location.address}</span>
        <span>{siteConfig.hours.display}</span>
      </div>
    </div>
  );
}
