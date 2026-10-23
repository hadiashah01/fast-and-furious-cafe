import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Oswald, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopUtilityBar from "./components/TopUtilityBar";
import { metadataBase } from "./config/metadata";
import { siteConfig } from "./config/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  ...(metadataBase && { metadataBase }),
  title: {
    default: "Fast & Furious Cafe | Burgers & Shawarma in Sialkot",
    template: "%s | Fast & Furious Cafe Sialkot",
  },
  description:
    "Burgers, shawarma, paratha rolls and fries at Fast & Furious Cafe on Circular Road, Sialkot.",
  openGraph: {
    title: "Fast & Furious Cafe Sialkot",
    description:
      "Burgers, shawarma, paratha rolls and fries at Fast & Furious Cafe on Circular Road, Sialkot.",
    url: metadataBase
      ? metadataBase.origin
      : "https://fast-and-furious-cafe.vercel.app",
    siteName: "Fast & Furious Cafe",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/images/og-img.avif",
        width: 1200,
        height: 630,
        alt: "Fast & Furious Cafe Logo and Menu Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast & Furious Cafe Sialkot",
    description:
      "Burgers, shawarma, paratha rolls and fries at Fast & Furious Cafe on Circular Road, Sialkot.",
    images: ["/images/og-img.avif"],
  },
  verification: {
    google: "43hixAt6kkVnCqwT5jek3VyHwMQRQI7t6fgUFrJCju4",
  },
};
const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${metadataBase?.origin ?? "https://fast-and-furious-cafe.vercel.app"}/#website`,
  name: "Fast & Furious Cafe",
  alternateName: "Fast and Furious Cafe",
  url: metadataBase?.origin ?? "https://fast-and-furious-cafe.vercel.app",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  const restaurantStructuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    ...(metadataBase && {
      "@id": `${metadataBase.origin}/#restaurant`,
      url: metadataBase.origin,
    }),
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    sameAs: [siteConfig.social.facebookUrl],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Circular Road, opposite Pakistan Gym, Kainchi Mohalla",
      addressLocality: "Sialkot",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    hasMap: siteConfig.location.googleMapsUrl,
  };

  return (
    <html lang="en" className={`${jakarta.variable} ${oswald.variable}`}>
      <body className="flex min-h-screen flex-col bg-zinc-950 font-sans text-zinc-100 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantStructuredData).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <TopUtilityBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
