import { ExternalLink, MapPin, Phone } from "lucide-react";
import { siteConfig } from "../config/site";

export default function TopUtilityBar() {
  return (
    <div className="border-b border-surface-border bg-surface-lowest px-4 py-2 text-[11px] text-zinc-400 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-amber-brand" />
            <span className="max-w-[280px] truncate sm:max-w-none">{siteConfig.location.shortAddress}</span>
          </span>
          <span className="hidden text-zinc-600 sm:inline">•</span>
          <span className="hidden text-zinc-300 sm:inline">
            {siteConfig.hours.display} • {siteConfig.hours.caveat.toLowerCase()}
          </span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <a href={siteConfig.contact.phoneTel} className="flex items-center gap-1 hover:text-white">
            <Phone className="h-3 w-3 text-amber-brand" />
            <span>{siteConfig.contact.phone}</span>
          </a>
          <a
            href={siteConfig.ordering.foodpandaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-bold uppercase text-foodpanda hover:text-pink-400"
          >
            <span>Foodpanda Store</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
