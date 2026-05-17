import {
  cvpOverview,
  contentBundlesOnly,
  combosWithContent,
  comboOffers,
  voiceBundles,
  dataBundles,
  smsBundles,
  type Cadence,
} from "@/content/proposal";

const CADENCE_ORDER: Cadence[] = ["Daily", "Weekly", "Monthly"];

const CADENCE_STYLES: Record<
  Cadence,
  { dot: string; chip: string; chipText: string; price: string }
> = {
  Daily: {
    dot: "bg-sky-500",
    chip: "bg-sky-50 border-sky-200",
    chipText: "text-sky-700",
    price: "text-sky-600",
  },
  Weekly: {
    dot: "bg-indigo-500",
    chip: "bg-indigo-50 border-indigo-200",
    chipText: "text-indigo-700",
    price: "text-indigo-600",
  },
  Monthly: {
    dot: "bg-[#B91C1C]",
    chip: "bg-[#B91C1C]/10 border-[#B91C1C]/20",
    chipText: "text-[#B91C1C]",
    price: "text-[#B91C1C]",
  },
};

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  accent = "bg-[#B91C1C]",
  accentText = "text-[#B91C1C]",
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  accent?: string;
  accentText?: string;
}) {
  return (
    <>
      <div className="flex items-center gap-2">
        <span className={`inline-block h-1.5 w-6 rounded-full ${accent}`} />
        <p
          className={`text-xs font-medium uppercase tracking-[0.24em] ${accentText}`}
        >
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#0F172A] md:text-4xl">
        {title}
      </h2>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
        {subtitle}
      </p>
    </>
  );
}

function CadencePill({ cadence }: { cadence: Cadence }) {
  const s = CADENCE_STYLES[cadence];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${s.chip} ${s.chipText}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {cadence}
    </span>
  );
}

function PricingNote({ note }: { note: string }) {
  return (
    <p className="mt-8 max-w-4xl rounded-xl border border-slate-200 bg-white p-4 text-xs leading-relaxed text-slate-500">
      <span className="font-semibold text-slate-700">Pricing note:</span> {note}
    </p>
  );
}

export default function ProductTiers() {
  return (
    <section id="product-tiers" className="bg-[#F8FAFC] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* CVP Overview */}
        <SectionHeader
          eyebrow={cvpOverview.eyebrow}
          title={cvpOverview.title}
          subtitle={cvpOverview.subtitle}
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cvpOverview.principles.map((p) => (
            <div
              key={p.label}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="text-sm font-semibold text-[#0F172A]">
                {p.label}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* 1. Content Bundles Only */}
        <div id="content-bundles" className="mt-24">
          <SectionHeader
            eyebrow={contentBundlesOnly.eyebrow}
            title={contentBundlesOnly.title}
            subtitle={contentBundlesOnly.subtitle}
            accent="bg-[#F59E0B]"
            accentText="text-[#F59E0B]"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contentBundlesOnly.bundles.map((b) => (
              <div
                key={b.name}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-0.5 hover:border-[#F59E0B]/30 hover:shadow-[0_14px_40px_-20px_rgba(245,158,11,0.3)]"
              >
                <h3 className="text-xl font-semibold tracking-tight text-[#0F172A]">
                  {b.name}
                </h3>
                <p className="mt-1 text-xs text-[#F59E0B]">{b.anchor}</p>
                <p className="mt-3 text-sm text-slate-600">
                  <span className="font-medium text-slate-700">Audience: </span>
                  {b.audience}
                </p>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {b.plans.map((plan) => {
                    const s = CADENCE_STYLES[plan.cadence as Cadence];
                    return (
                      <div
                        key={plan.cadence}
                        className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3 text-center"
                      >
                        <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                          {plan.cadence}
                        </div>
                        <div
                          className={`mt-1 text-lg font-semibold tracking-tight ${s.price}`}
                        >
                          {plan.price}
                        </div>
                        <div className="text-[10px] text-slate-500">
                          {plan.duration}
                        </div>
                      </div>
                    );
                  })}
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
          <PricingNote note={contentBundlesOnly.pricingNote} />
        </div>

        {/* 2. Combo + Content (Itemised) */}
        <div id="combo-with-content" className="mt-24">
          <SectionHeader
            eyebrow={combosWithContent.eyebrow}
            title={combosWithContent.title}
            subtitle={combosWithContent.subtitle}
            accent="bg-emerald-600"
            accentText="text-emerald-700"
          />

          {CADENCE_ORDER.map((cadence) => {
            const combos = combosWithContent.combos.filter(
              (c) => c.cadence === cadence,
            );
            if (combos.length === 0) return null;
            return (
              <div key={cadence} className="mt-10">
                <div className="flex items-center gap-3">
                  <CadencePill cadence={cadence} />
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    {cadence} combos
                  </h3>
                </div>
                <div className="mt-5 grid gap-6 lg:grid-cols-2">
                  {combos.map((c) => (
                    <div
                      key={c.name}
                      className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-[0_14px_40px_-20px_rgba(5,150,105,0.3)]"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="text-xl font-semibold tracking-tight text-[#0F172A]">
                            {c.name}
                          </h4>
                          <p className="mt-1 text-xs text-slate-500">
                            {c.duration} · {c.audience}
                          </p>
                        </div>
                        <CadencePill cadence={c.cadence as Cadence} />
                      </div>

                      {/* Itemised split: Content line + Telco line */}
                      <div className="mt-5 space-y-3">
                        <div className="rounded-xl border border-[#F59E0B]/30 bg-[#FFFBEB] p-4">
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <div className="text-[10px] font-semibold uppercase tracking-wider text-[#F59E0B]">
                                Content subscription
                              </div>
                              <div className="mt-1 text-sm font-semibold text-[#0F172A]">
                                {c.content.title}
                              </div>
                            </div>
                            <div className="text-2xl font-semibold tracking-tight text-[#F59E0B]">
                              {c.content.price}
                            </div>
                          </div>
                          <ul className="mt-3 space-y-1">
                            {c.content.details.map((d) => (
                              <li
                                key={d}
                                className="flex items-start gap-2 text-xs text-slate-700"
                              >
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#F59E0B]" />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="rounded-xl border border-[#B91C1C]/20 bg-[#FEF2F2] p-4">
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <div className="text-[10px] font-semibold uppercase tracking-wider text-[#B91C1C]">
                                Telco subscription
                              </div>
                              <div className="mt-1 text-sm font-semibold text-[#0F172A]">
                                {c.telco.title}
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <div className="text-2xl font-semibold tracking-tight text-[#B91C1C]">
                                {c.telco.price}
                              </div>
                              <span className="mt-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                                {c.telco.margin}
                              </span>
                            </div>
                          </div>
                          <ul className="mt-3 space-y-1">
                            {c.telco.details.map((d) => (
                              <li
                                key={d}
                                className="flex items-start gap-2 text-xs text-slate-700"
                              >
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#B91C1C]" />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Total line */}
                        <div className="flex items-center justify-between rounded-xl bg-[#0F172A] px-4 py-3 text-white">
                          <div className="text-sm font-medium">
                            Customer pays
                          </div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-xs text-slate-300">
                              {c.content.price} + {c.telco.price} =
                            </span>
                            <span className="text-2xl font-semibold tracking-tight text-[#F59E0B]">
                              {c.total}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          <PricingNote note={combosWithContent.pricingNote} />
        </div>

        {/* 3. Combo Offers (Telco only) */}
        <div id="combo-offers" className="mt-24">
          <SectionHeader
            eyebrow={comboOffers.eyebrow}
            title={comboOffers.title}
            subtitle={comboOffers.subtitle}
            accent="bg-[#0F172A]"
            accentText="text-[#0F172A]"
          />
          {comboOffers.combos.map((group) => (
            <div key={group.cadence} className="mt-10">
              <div className="flex items-center gap-3">
                <CadencePill cadence={group.cadence as Cadence} />
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  {group.cadence} combos
                </h3>
              </div>
              <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {group.tiers.map((t) => (
                  <div
                    key={t.name}
                    className="rounded-2xl border border-slate-200 bg-white p-7"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-lg font-semibold tracking-tight text-[#0F172A]">
                        {t.name}
                      </h4>
                      <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                        {t.margin}
                      </span>
                    </div>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-3xl font-semibold tracking-tight text-[#0F172A]">
                        {t.price}
                      </span>
                      <span className="text-xs text-slate-500">
                        / {t.duration}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-slate-600">
                      {t.description}
                    </p>
                    <div className="mt-5 space-y-2">
                      <div className="flex items-center justify-between rounded-lg bg-[#F8FAFC] px-3 py-2 text-sm">
                        <span className="text-slate-600">Voice</span>
                        <span className="font-semibold text-[#F59E0B]">
                          {t.allowance.voice}
                        </span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-[#F8FAFC] px-3 py-2 text-sm">
                        <span className="text-slate-600">Data</span>
                        <span className="font-semibold text-[#B91C1C]">
                          {t.allowance.data}
                        </span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-[#F8FAFC] px-3 py-2 text-sm">
                        <span className="text-slate-600">SMS</span>
                        <span className="font-semibold text-slate-800">
                          {t.allowance.sms}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <PricingNote note={comboOffers.pricingNote} />
        </div>

        {/* 4-6. Voice / Data / SMS */}
        <div id="single-service" className="mt-24">
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-6 rounded-full bg-slate-500" />
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-600">
              4 · Voice  ·  5 · Data  ·  6 · SMS
            </p>
          </div>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#0F172A] md:text-4xl">
            Standalone Voice, Data and SMS bundles.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            For customers who want a single service only — minutes, megabytes or
            messages — every line offers Daily, Weekly and Monthly options.
          </p>

          {/* Voice */}
          <div className="mt-12">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F59E0B]/15 text-[#F59E0B]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#0F172A]">
                  {voiceBundles.title}
                </h3>
                <p className="text-sm text-slate-600">{voiceBundles.subtitle}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {voiceBundles.tiers.map((t) => {
                const s = CADENCE_STYLES[t.cadence as Cadence];
                return (
                  <div
                    key={t.cadence}
                    className="rounded-2xl border border-slate-200 bg-white p-6"
                  >
                    <div className="flex items-center justify-between">
                      <CadencePill cadence={t.cadence as Cadence} />
                      <span className="text-xs text-slate-500">
                        {t.duration}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {t.options.map((o) => (
                        <li
                          key={o.size}
                          className="flex items-center justify-between rounded-lg border border-slate-100 bg-[#F8FAFC] px-3 py-2 text-sm"
                        >
                          <span className="font-medium text-slate-700">
                            {o.size}
                          </span>
                          <div className="flex items-center gap-2">
                            <span
                              className={`font-semibold ${s.price}`}
                            >
                              {o.price}
                            </span>
                            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                              {o.margin}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Data */}
          <div className="mt-14">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#B91C1C]/10 text-[#B91C1C]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M2 20h.01" />
                  <path d="M7 20v-4" />
                  <path d="M12 20v-8" />
                  <path d="M17 20V8" />
                  <path d="M22 4v16" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#0F172A]">
                  {dataBundles.title}
                </h3>
                <p className="text-sm text-slate-600">{dataBundles.subtitle}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {dataBundles.tiers.map((t) => {
                const s = CADENCE_STYLES[t.cadence as Cadence];
                return (
                  <div
                    key={t.cadence}
                    className="rounded-2xl border border-slate-200 bg-white p-6"
                  >
                    <div className="flex items-center justify-between">
                      <CadencePill cadence={t.cadence as Cadence} />
                      <span className="text-xs text-slate-500">
                        {t.duration}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {t.options.map((o) => (
                        <li
                          key={o.size}
                          className="flex items-center justify-between rounded-lg border border-slate-100 bg-[#F8FAFC] px-3 py-2 text-sm"
                        >
                          <span className="font-medium text-slate-700">
                            {o.size}
                          </span>
                          <div className="flex items-center gap-2">
                            <span
                              className={`font-semibold ${s.price}`}
                            >
                              {o.price}
                            </span>
                            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                              {o.margin}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 text-xs text-slate-500">{dataBundles.footnote}</p>
          </div>

          {/* SMS */}
          <div className="mt-14">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#0F172A]">
                  {smsBundles.title}
                </h3>
                <p className="text-sm text-slate-600">{smsBundles.subtitle}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {smsBundles.tiers.map((t) => {
                const s = CADENCE_STYLES[t.cadence as Cadence];
                return (
                  <div
                    key={t.cadence}
                    className="rounded-2xl border border-slate-200 bg-white p-6"
                  >
                    <div className="flex items-center justify-between">
                      <CadencePill cadence={t.cadence as Cadence} />
                      <span className="text-xs text-slate-500">
                        {t.duration}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {t.options.map((o) => (
                        <li
                          key={o.size}
                          className="flex items-center justify-between rounded-lg border border-slate-100 bg-[#F8FAFC] px-3 py-2 text-sm"
                        >
                          <span className="font-medium text-slate-700">
                            {o.size}
                          </span>
                          <div className="flex items-center gap-2">
                            <span
                              className={`font-semibold ${s.price}`}
                            >
                              {o.price}
                            </span>
                            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                              {o.margin}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
