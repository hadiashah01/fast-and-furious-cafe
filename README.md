# Fast & Furious Cafe — Sialkot

A responsive Next.js App Router website for Fast & Furious Cafe, Circular Road, Sialkot.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use `npm run lint` and `npm run build` to validate the project.

## Pages

- `/` — menu highlights, a featured deal, the cafe credo, and location.
- `/menu` — menu items with search and category filters.
- `/deals` — 18 exclusive discounted deals and five promotional deals.
- `/about` — cafe information, verified ordering destination, contact, and location.
- `/contact` — address, hours, phone, email, and directions.
- Unknown URLs — branded 404 with links to Home and Menu.

Menu and deal prices use the Rs. amounts supplied in the Foodpanda listing. Variable prices remain marked “from”; original burger prices are shown separately. Hours are 3:00 PM – 1:00 AM and remain subject to confirmation.

Route-level rendering errors show a branded message with a Retry action. Static pages do not display a loading screen.

## Search metadata

The App Router provides page-specific metadata, canonical URLs, Open Graph and Twitter cards, a sitemap, robots rules, and LocalBusiness JSON-LD using verified business details. The verified deployment origin is `https://fast-and-furious-cafe.vercel.app`; set `NEXT_PUBLIC_SITE_URL` to override it when the public domain changes. The existing `app/favicon.ico` is served using Next.js file-based metadata.

Menu and deal data are maintained in static modules. Menu photos are read from `public/images/`; missing images use the existing card fallback. Ordering links go to the cafe's external Foodpanda listing. The Foodpanda listing reports 10% off selected items, auto-applied, and mentions app-only deals; confirm current offers on Foodpanda.

## Motion and interaction

Motion is limited to color feedback on interactive links and controls. Content is visible immediately; the site does not use page-entry or scroll-reveal animations, hover lifts, parallax, or continuous decorative motion. Any remaining transitions respect `prefers-reduced-motion`.
