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

Page content enters with a short fade-and-rise transition. Major sections reveal once as they enter the viewport; related menu, deal, and service cards use a restrained stagger. Cards lift slightly on hover, while navigation and action controls use brief hover and press feedback. These effects do not change layout or delay access to content.

The current site has no image gallery, carousel, or marquee, so it does not add image masks, parallax, or continuous decorative motion. All motion respects `prefers-reduced-motion`; without JavaScript, reveal content remains visible.
