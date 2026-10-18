import Link from "next/link";
import DealCard from "./components/DealCard";
import ProvisionalNotice from "./components/ProvisionalNotice";
import { siteConfig } from "./config/site";
import { dealsData } from "./data/deals";

const categories = [
  { title: "Burgers", detail: "Big crunch. Bigger flavour.", href: "/menu#burgers", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85" },
  { title: "Shawarma", detail: "A street-food favourite.", href: "/menu#shawarma", image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=85" },
  { title: "Paratha Rolls", detail: "Wrapped up and ready to roll.", href: "/menu#rolls", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__texture" />
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="eyebrow"><span className="eyebrow__line" /> SIALKOT STREET FOOD, FULL THROTTLE</p>
            <h1>CRAVE THE SPEED.<br /><span>TASTE THE FIRE.</span></h1>
            <p className="hero__lead">Fresh, flavour-packed favourites made for the hungry pit stop. Find your next favourite at Fast &amp; Furious Cafe.</p>
            <div className="hero__actions">
              <Link className="button button--red" href="/menu">EXPLORE THE MENU <span aria-hidden="true">↗</span></Link>
              <Link className="button button--outline" href="/deals">SEE THE DEALS</Link>
            </div>
            <div className="hero__location"><span className="pin-icon" aria-hidden="true">⌖</span><span>{siteConfig.location.shortAddress}</span></div>
          </div>
          <div className="hero__visual" role="img" aria-label="A juicy burger ready for a fast and furious meal">
            <div className="hero__image" />
            <div className="hero__stamp"><span>MADE</span><strong>FRESH</strong><span>DAILY</span></div>
            <div className="hero__visual-caption"><span className="caption-dot" /> BUILT FOR BIG APPETITES</div>
          </div>
          <div className="hero__vertical">FAST FOOD · BIG FLAVOUR · SIALKOT</div>
        </div>
        <div className="hero__bottom container">
          <span>GOOD FOOD. NO PIT STOPS NEEDED.</span>
          <span className="scroll-cue">SCROLL TO EXPLORE <b>↓</b></span>
        </div>
      </section>

      <section className="section container">
        <ProvisionalNotice />
        <div className="section-heading">
          <div><p className="eyebrow">PICK YOUR PIT STOP</p><h2>WHAT ARE YOU <span>CRAVING?</span></h2></div>
          <Link className="text-link" href="/menu">VIEW FULL MENU <span>↗</span></Link>
        </div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <Link className={`category-card category-card--${index + 1}`} href={category.href} key={category.title}>
              <div className="category-card__image" style={{ backgroundImage: `url("${category.image}")` }} />
              <div className="category-card__shade" />
              <div className="category-card__content"><span className="category-card__number">0{index + 1}</span><h3>{category.title}</h3><p>{category.detail}</p></div>
              <span className="category-card__arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">GOOD THINGS COME IN COMBOS</p><h2>FUEL UP FOR <span>LESS.</span></h2></div>
            <Link className="text-link" href="/deals">ALL DEALS <span>↗</span></Link>
          </div>
          <div className="deal-grid">
            {dealsData.filter((deal) => deal.isFeatured || deal.id === "solo-speed" || deal.id === "family-pit-stop").map((deal) => <DealCard deal={deal} key={deal.id} />)}
          </div>
        </div>
      </section>

      <section className="visit-band container">
        <div className="visit-band__mark" aria-hidden="true">F<span>&amp;</span>F</div>
        <div><p className="eyebrow">YOUR TABLE IS WAITING</p><h2>LET’S MAKE IT <span>FURIOUS.</span></h2><p>Drop by on Circular Road, or call ahead and pick up your favourites.</p></div>
        <Link href="/contact" className="button button--red">FIND US <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}
