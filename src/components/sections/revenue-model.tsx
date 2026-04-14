import { revenueModel } from "@/content/proposal";

const LAYER_ICONS: Record<string, React.ReactNode> = {
  signal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M2 20h.01" /><path d="M7 20v-4" /><path d="M12 20v-8" /><path d="M17 20V8" /><path d="M22 4v16" />
    </svg>
  ),
  newspaper: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" /><path d="M15 18h-5" /><path d="M10 6h8v4h-8V6Z" />
    </svg>
  ),
  megaphone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="m3 11 18-5v12L3 13v-2z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  ),
  shopping: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  ),
};

export default function RevenueModel() {
  return (
    <section id="revenue-model" className="relative overflow-hidden bg-[#0F172A] py-24 text-white md:py-32">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_30%_30%,#B91C1C_0,transparent_50%),radial-gradient(circle_at_75%_80%,#F59E0B_0,transparent_45%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#F59E0B]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#F59E0B]">
            {revenueModel.eyebrow}
          </p>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          {revenueModel.title}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          {revenueModel.subtitle}
        </p>

        {/* Revenue layers */}
        <div className="mt-14 grid gap-4 md:grid-cols-5">
          {revenueModel.layers.map((layer, i) => (
            <div
              key={layer.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#F59E0B]/20 text-[#F59E0B]">
                {LAYER_ICONS[layer.icon] ?? LAYER_ICONS.signal}
              </div>
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-[#F59E0B]">
                Layer {i + 1}
              </div>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">
                {layer.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {layer.description}
              </p>
            </div>
          ))}
        </div>

        {/* Flywheel */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur md:p-10">
          <h3 className="text-xs font-medium uppercase tracking-[0.24em] text-[#F59E0B]">
            Customer Value Flywheel
          </h3>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {revenueModel.flywheel.map((step, i) => (
              <span key={step} className="flex items-center gap-3">
                <span className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">
                  {step}
                </span>
                {i < revenueModel.flywheel.length - 1 && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 shrink-0 text-[#F59E0B]"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                )}
              </span>
            ))}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-[#F59E0B]"
            >
              <polyline points="1 4 1 10 7 10" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
            </svg>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold tracking-tight">
            {revenueModel.bottomLine.title}
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {revenueModel.bottomLine.points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F59E0B]/20 text-[#F59E0B]">
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
                <span className="text-sm leading-relaxed text-slate-200">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
