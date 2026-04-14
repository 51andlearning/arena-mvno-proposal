import { galloMusic } from "@/content/proposal";

export default function GalloMusic() {
  return (
    <section id="gallo-music" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#B91C1C]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#B91C1C]">
            {galloMusic.eyebrow}
          </p>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
          {galloMusic.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          {galloMusic.subtitle}
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {galloMusic.cards.map((c, i) => (
            <div
              key={c.label}
              className={
                i === 0
                  ? "rounded-2xl border border-slate-200 bg-white p-8 md:p-10"
                  : "rounded-2xl bg-[#0F172A] p-8 text-white md:p-10"
              }
            >
              <div
                className={
                  i === 0
                    ? "text-xs font-medium uppercase tracking-[0.24em] text-[#B91C1C]"
                    : "text-xs font-medium uppercase tracking-[0.24em] text-[#F59E0B]"
                }
              >
                {c.label}
              </div>
              <p
                className={
                  i === 0
                    ? "mt-5 text-xl leading-relaxed text-slate-700 md:text-2xl"
                    : "mt-5 text-xl leading-relaxed text-slate-200 md:text-2xl"
                }
              >
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {galloMusic.features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7 transition hover:border-[#B91C1C]/30 hover:bg-white hover:shadow-[0_14px_40px_-20px_rgba(185,28,28,0.25)]"
            >
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#B91C1C] text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-[#0F172A]">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
