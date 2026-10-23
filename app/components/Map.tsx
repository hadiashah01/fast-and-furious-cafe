import { siteConfig } from "../config/site";
export default function Map() {
  return (
    <div className="min-h-64 overflow-hidden rounded-xl border border-zinc-800 md:min-h-96">
      <iframe
        title="Map showing Fast & Furious Cafe on Circular Road, Sialkot"
        src={siteConfig.location.googleMapsEmbedUrl}
        className="block h-64 w-full border-0 sm:h-72"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
