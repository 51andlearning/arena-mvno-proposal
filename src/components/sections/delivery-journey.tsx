import { deliveryJourney } from "@/content/proposal";

export default function DeliveryJourney() {
  return (
    <section id="delivery-journey" className="relative overflow-hidden bg-[#0F172A] py-24 text-white md:py-32">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_20%_20%,#B91C1C_0,transparent_45%),radial-gradient(circle_at_80%_80%,#F59E0B_0,transparent_45%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] [background-size:60px_60px]"
      />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#F59E0B]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#F59E0B]">
            {deliveryJourney.eyebrow}
          </p>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          {deliveryJourney.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
          {deliveryJourney.subtitle}
        </p>

        {/* MVNO Lifecycle - 6 stages */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {deliveryJourney.stages.map((s, i) => (
            <div
              key={s.step}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F59E0B]/20 text-sm font-bold text-[#F59E0B]">
                  {s.step}
                </div>
                {i < deliveryJourney.stages.length - 1 && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hidden h-4 w-4 text-[#F59E0B] lg:block"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                )}
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pan-African Footprint */}
        <div className="mt-20 rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur md:p-10">
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-6 rounded-full bg-[#F59E0B]" />
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#F59E0B]">
              Pan-African Footprint
            </p>
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
            {deliveryJourney.footprint.title}
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">
            {deliveryJourney.footprint.subtitle}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {deliveryJourney.footprint.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-5"
              >
                <div className="text-3xl font-semibold tracking-tight text-[#F59E0B]">
                  {s.value}
                </div>
                <div className="mt-2 text-xs leading-snug text-slate-300">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {deliveryJourney.footprint.sectors.map((sec) => (
              <div
                key={sec.name}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F59E0B]/20 text-[#F59E0B]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{sec.name}</div>
                  <div className="mt-0.5 text-xs text-slate-300">{sec.examples}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
