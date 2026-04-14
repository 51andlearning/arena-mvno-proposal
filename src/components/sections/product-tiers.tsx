import { productTiers } from "@/content/proposal";

export default function ProductTiers() {
  return (
    <section id="product-tiers" className="bg-[#F8FAFC] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#B91C1C]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#B91C1C]">
            {productTiers.eyebrow}
          </p>
        </div>
        <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
          {productTiers.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          {productTiers.subtitle}
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {productTiers.tiers.map((tier) => (
            <div
              key={tier.name}
              className={
                tier.highlight
                  ? "relative rounded-2xl bg-[#0F172A] p-8 text-white md:p-10"
                  : "rounded-2xl border border-slate-200 bg-white p-8 md:p-10"
              }
            >
              {tier.highlight && (
                <div className="absolute -top-3 right-6 rounded-full bg-[#F59E0B] px-3 py-1 text-xs font-semibold text-[#0F172A]">
                  Most Popular
                </div>
              )}
              <div
                className={
                  tier.highlight
                    ? "text-xs font-medium uppercase tracking-[0.24em] text-[#F59E0B]"
                    : "text-xs font-medium uppercase tracking-[0.24em] text-[#B91C1C]"
                }
              >
                {tier.tier}
              </div>
              <h3
                className={
                  tier.highlight
                    ? "mt-3 text-2xl font-semibold tracking-tight"
                    : "mt-3 text-2xl font-semibold tracking-tight text-[#0F172A]"
                }
              >
                {tier.name}
              </h3>
              <div
                className={
                  tier.highlight
                    ? "mt-2 text-3xl font-semibold tracking-tight text-[#F59E0B]"
                    : "mt-2 text-3xl font-semibold tracking-tight text-[#B91C1C]"
                }
              >
                {tier.price}
              </div>
              <p
                className={
                  tier.highlight
                    ? "mt-2 text-sm text-slate-300"
                    : "mt-2 text-sm text-slate-600"
                }
              >
                {tier.description}
              </p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div
                      className={
                        tier.highlight
                          ? "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F59E0B]/20 text-[#F59E0B]"
                          : "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B91C1C]/10 text-[#B91C1C]"
                      }
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span
                      className={
                        tier.highlight
                          ? "text-sm text-slate-200"
                          : "text-sm text-slate-700"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
