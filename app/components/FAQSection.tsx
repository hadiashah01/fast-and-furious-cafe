
import { ArrowUpRight, Clock3, Utensils } from "lucide-react";
import { siteConfig } from "../config/site";

const faqs = [
  {
    question: "Where can I find Fast & Furious Cafe?",
    answer:
      "Find us on Circular Road, opposite Pakistan Gym, in Kainchi Mohalla, Sialkot. Use the directions link below to plan your visit.",
  },
  {
    question: "What's cooking on the menu?",
    answer:
      "Explore burgers, shawarma, paratha rolls, fries, sides and drinks on our menu page. Head to the menu to browse the listed items and prices.",
  },
  {
    question: "Can I get food delivered to my door?",
    answer:
      "You can check delivery availability for your location through our Foodpanda listing. Available options may depend on your address and the listing's current service.",
  },
  {
    question: "Can I dine in or take my food away?",
    answer:
      "The cafe is listed as offering dine-in and takeaway options, so you can plan to enjoy your meal at the cafe or check the available takeaway option when ordering.",
  },
  {
    question: "When can I stop by?",
    answer:
      "Our listed opening hours are daily from 3:00 PM to 1:00 AM. If you're planning a visit around a public holiday, it's worth checking the cafe's latest updates first.",
  },
  {
    question: "Where can I find the latest deals?",
    answer:
      "Check our Foodpanda store for current listed offers, and visit our Facebook page for cafe updates. Offers and prices may change, so check the latest listing before ordering.",
  },
];

export default function FAQSection() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-surface-lowest py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <header className="lg:sticky lg:top-28 lg:self-start">
            <p className="flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.18em] text-amber-brand">
              <Utensils aria-hidden="true" className="h-4 w-4" />
              A little food for thought
            </p>

            <h2
              id="faq-heading"
              className="mt-4 max-w-md font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl"
            >
              Before the
              <span className="block text-crimson"> first bite.</span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400">
              Finding us, choosing your favourites or checking a deal?
              Here's what to know before you dig in.
            </p>

            <div className="mt-8 border-y border-surface-border py-4">
              <div className="flex items-start gap-3">
                <Clock3
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-amber-brand"
                />
                <div>
                  <p className="font-display text-xs font-semibold uppercase tracking-wider text-white">
                    Kitchen hours
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    Daily · 3:00 PM–1:00 AM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
              <a
                href={siteConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 font-semibold text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-amber-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-brand"
              >
                Get directions
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>

              <a
                href={siteConfig.ordering.foodpandaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 font-semibold text-white underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-crimson focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-brand"
              >
                Browse Foodpanda
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </header>

          <div className="min-w-0 border-t border-surface-border">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group border-b border-surface-border"
              >
                <summary className="flex min-h-[76px] cursor-pointer list-none items-center gap-4 py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-amber-brand [&::-webkit-details-marker]:hidden">
                  <span
                    aria-hidden="true"
                    className="w-7 shrink-0 font-display text-xs font-semibold tabular-nums text-amber-brand"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 pr-2 font-display text-base font-semibold uppercase leading-snug text-zinc-100 transition-colors group-open:text-white sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center border border-zinc-700 text-xl leading-none text-zinc-300 transition-colors group-hover:border-amber-brand group-open:border-crimson group-open:text-crimson"
                  >
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>

                <div className="pb-6 pl-11 pr-2 sm:pl-[2.75rem]">
                  <p className="max-w-2xl text-sm leading-7 text-zinc-400">
                    {faq.answer}
                  </p>

                  {index === 2 && (
                    <a
                      href={siteConfig.ordering.foodpandaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-amber-brand underline decoration-zinc-600 underline-offset-4 hover:decoration-amber-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-brand"
                    >
                      Check delivery on Foodpanda
                      <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </a>
                  )}

                  {index === 5 && (
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                      <a
                        href={siteConfig.ordering.foodpandaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-amber-brand underline decoration-zinc-600 underline-offset-4 hover:decoration-amber-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-brand"
                      >
                        Foodpanda offers
                        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                      </a>

                      <a
                        href={siteConfig.social.facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-amber-brand underline decoration-zinc-600 underline-offset-4 hover:decoration-amber-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-brand"
                      >
                        Cafe on Facebook
                        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                      </a>
                    </div>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
