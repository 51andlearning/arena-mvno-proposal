import { productTiers, contentBundles, topUps } from "@/content/proposal";

export default function ProductTiers() {
  return (
    <section id="product-tiers" className="bg-[#F8FAFC] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* Mobile-Led Bundles */}
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
              <div className="mt-3 flex flex-wrap gap-2">
                <span
                  className={
                    tier.highlight
                      ? "inline-flex rounded-full bg-[#F59E0B]/15 px-2.5 py-0.5 text-[11px] font-semibold text-[#F59E0B]"
                      : "inline-flex rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700"
                  }
                >
                  {tier.margin}
                </span>
                <span
                  className={
                    tier.highlight
                      ? "inline-flex rounded-full border border-white/20 bg-white/5 px-2.5 py-0.5 text-[11px] font-semibold text-slate-200"
                      : "inline-flex rounded-full border border-[#B91C1C]/20 bg-[#B91C1C]/5 px-2.5 py-0.5 text-[11px] font-semibold text-[#B91C1C]"
                  }
                >
                  + {tier.targetContent}
                </span>
              </div>
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

        <p className="mt-8 max-w-4xl rounded-xl border border-slate-200 bg-white p-4 text-xs leading-relaxed text-slate-500">
          <span className="font-semibold text-slate-700">Pricing note:</span>{" "}
          {productTiers.pricingNote}
        </p>

        {/* Content-Led Bundles */}
        <div className="mt-24 flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#F59E0B]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#F59E0B]">
            {contentBundles.eyebrow}
          </p>
        </div>
        <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
          {contentBundles.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          {contentBundles.subtitle}
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contentBundles.bundles.map((b) => (
            <div
              key={b.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-0.5 hover:border-[#F59E0B]/30 hover:shadow-[0_14px_40px_-20px_rgba(245,158,11,0.3)]"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-xl font-semibold tracking-tight text-[#0F172A]">
                  {b.name}
                </h3>
                <span className="inline-flex shrink-0 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                  {b.margin}
                </span>
              </div>
              <div className="mt-3 text-3xl font-semibold tracking-tight text-[#F59E0B]">
                {b.price}
              </div>
              <p className="mt-1 text-xs text-slate-500">{b.vsRetail}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {b.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0F172A] px-3 py-1 text-xs font-medium text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3 text-[#F59E0B]"
                  >
                    <path d="M2 20h.01" />
                    <path d="M7 20v-4" />
                    <path d="M12 20v-8" />
                    <path d="M17 20V8" />
                  </svg>
                  {b.reverseBilled}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3 text-slate-500"
                  >
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12" y2="18" />
                  </svg>
                  {b.mobile}
                </span>
              </div>

              <ul className="mt-5 space-y-2">
                {b.includes.map((inc) => (
                  <li
                    key={inc}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#F59E0B]" />
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-4xl rounded-xl border border-slate-200 bg-white p-4 text-xs leading-relaxed text-slate-500">
          <span className="font-semibold text-slate-700">Pricing note:</span>{" "}
          {contentBundles.pricingNote}
        </p>

        {/* Top-Up Bundles */}
        <div className="mt-24 flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#0F172A]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#0F172A]">
            {topUps.eyebrow}
          </p>
        </div>
        <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
          {topUps.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          {topUps.subtitle}
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {/* Data */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#B91C1C]/10 text-[#B91C1C]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M2 20h.01" /><path d="M7 20v-4" /><path d="M12 20v-8" /><path d="M17 20V8" /><path d="M22 4v16" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-[#0F172A]">
                Data
              </h3>
            </div>
            <ul className="space-y-2">
              {topUps.data.map((d) => (
                <li
                  key={d.size}
                  className="flex items-center justify-between rounded-lg border border-slate-100 bg-[#F8FAFC] px-3 py-2 text-sm"
                >
                  <span className="font-medium text-slate-700">{d.size}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#B91C1C]">{d.price}</span>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                      {d.margin}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Voice */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F59E0B]/15 text-[#F59E0B]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-[#0F172A]">
                Voice
              </h3>
            </div>
            <ul className="space-y-2">
              {topUps.voice.map((v) => (
                <li
                  key={v.size}
                  className="flex items-center justify-between rounded-lg border border-slate-100 bg-[#F8FAFC] px-3 py-2 text-sm"
                >
                  <span className="font-medium text-slate-700">{v.size}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#F59E0B]">{v.price}</span>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                      {v.margin}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* SMS */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-[#0F172A]">
                SMS
              </h3>
            </div>
            <ul className="space-y-2">
              {topUps.sms.map((s) => (
                <li
                  key={s.size}
                  className="flex items-center justify-between rounded-lg border border-slate-100 bg-[#F8FAFC] px-3 py-2 text-sm"
                >
                  <span className="font-medium text-slate-700">{s.size}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#0F172A]">{s.price}</span>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                      {s.margin}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 max-w-4xl rounded-xl border border-slate-200 bg-white p-4 text-xs leading-relaxed text-slate-500">
          <span className="font-semibold text-slate-700">Top-up note:</span>{" "}
          Top-ups are standalone purchases that add to the customer&apos;s
          remaining allowance. Valid for 30 days. Pricing at all levels maintains
          ≥50% gross profit on wholesale unit costs.
        </p>
      </div>
    </section>
  );
}
