import { AlertCircle } from "lucide-react";
import { siteConfig } from "../config/site";

export default function CafeInfoNotice() {
  return (
    <div className="flex max-w-xl items-center space-x-2 rounded border border-surface-border bg-surface-card px-3 py-2 text-xs text-zinc-400">
      <AlertCircle className="h-4 w-4 shrink-0 text-amber-brand" />
      <span>
        Hours: {siteConfig.hours.display}. {siteConfig.hours.caveat}. Call to check prices.
      </span>
    </div>
  );
}
