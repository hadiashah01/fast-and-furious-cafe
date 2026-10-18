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
- `/deals` — Furious Duo Feast, Solo Speed Combo, and Midnight Roll Bundle.
- `/about` — menu, service options, and location.
- `/contact` — address, hours, phone, email, and directions.
- Unknown URLs — branded 404 with links to Home and Menu.

Menu and deal prices are listed in PKR. Hours are 3:00 PM – 1:00 AM; call to confirm the schedule and current prices.

Route-level rendering errors show a branded message with a Retry action. Static pages do not display a loading screen.

## Motion and interaction

Motion is limited to color feedback on interactive links and controls. Content is visible immediately; the site does not use page-entry or scroll-reveal animations, hover lifts, parallax, or continuous decorative motion. Any remaining transitions respect `prefers-reduced-motion`.
