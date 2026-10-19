import type { MetadataRoute } from "next";
import { siteUrl } from "./config/metadata";

const routes = ["/", "/menu", "/deals", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];

  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
  }));
}
