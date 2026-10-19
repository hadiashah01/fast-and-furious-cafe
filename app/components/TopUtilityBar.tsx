import { siteConfig } from "../config/site";

export default function TopUtilityBar() {
  return (
    <div className="bg-surface-lowest px-4 py-3 text-center text-zinc-200 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-1 font-sans text-xs font-semibold leading-snug sm:text-sm">
        <span>{siteConfig.location.address}</span>
        <span>{siteConfig.hours.display}</span>
      </div>
    </div>
  );
}
