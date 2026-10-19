import type { Metadata } from "next";

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  "https://fast-and-furious-cafe.vercel.app";

export const siteUrl = configuredSiteUrl
  ? new URL(configuredSiteUrl).origin
  : undefined;

export const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

export function createPageMetadata(
  path: string,
  title: string,
  description: string,
): Metadata {
  const pageUrl = siteUrl ? new URL(path, siteUrl) : undefined;
  const imageUrl = siteUrl
    ? new URL("/images/og-img.avif", siteUrl).toString()
    : undefined;

  return {
    title,
    description,
    ...(pageUrl && { alternates: { canonical: pageUrl } }),
    openGraph: {
      type: "website",
      ...(pageUrl && { url: pageUrl }),
      siteName: "Fast & Furious Cafe",
      title,
      description,
      locale: "en_PK",
      ...(imageUrl && {
        images: [{ url: imageUrl, alt: "Fast & Furious Cafe logo" }],
      }),
    },
    twitter: {
      card: "summary",
      title,
      description,
      ...(imageUrl && { images: [imageUrl] }),
    },
  };
}
