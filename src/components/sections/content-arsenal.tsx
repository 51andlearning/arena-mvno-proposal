import { contentArsenal } from "@/content/proposal";

export default function ContentArsenal() {
  return (
    <section id="content-arsenal" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-6 rounded-full bg-[#B91C1C]" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#B91C1C]">
            {contentArsenal.eyebrow}
          </p>
        </div>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#0F172A] md:text-5xl">
          {contentArsenal.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          {contentArsenal.subtitle}
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contentArsenal.divisions.map((d, i) => (
            <div
              key={d.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-0.5 hover:border-[#B91C1C]/30 hover:shadow-[0_14px_40px_-20px_rgba(185,28,28,0.35)]"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-[#B91C1C]/10 text-sm font-semibold text-[#B91C1C]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-[#0F172A]">
                {d.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {d.body}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#B91C1C]/5 px-3 py-1 text-xs font-semibold text-[#B91C1C]">
                {d.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
