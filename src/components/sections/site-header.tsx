import Image from "next/image";
import ContactDialog from "@/components/contact-dialog";

const NAV = [
  { label: "Summary", href: "#executive-summary" },
  { label: "Content", href: "#content-arsenal" },
  { label: "Properties", href: "#property-map" },
  { label: "Ecosystem", href: "#dsg-ecosystem" },
  { label: "Operating Model", href: "#operating-model" },
  { label: "Journey", href: "#delivery-journey" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "GTM", href: "#gtm-enablement" },
  { label: "Bundles", href: "#product-tiers" },
  { label: "Gallo", href: "#gallo-music" },
  { label: "VAS", href: "#vas-services" },
  { label: "Revenue", href: "#revenue-model" },
  { label: "Next Steps", href: "#next-steps" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4 md:px-6">
        <a href="/" className="flex shrink-0 items-center gap-3 text-[#0F172A]">
          <Image
            src="/images/mvne-logo.png"
            alt="MVNE"
            width={600}
            height={236}
            priority
            className="h-8 w-auto"
          />
          <span
            aria-hidden
            className="hidden h-7 w-px bg-slate-200 sm:block"
          />
          <Image
            src="/images/dsg-proud-member.png"
            alt="Proud member of DSG"
            width={964}
            height={620}
            priority
            className="hidden h-8 w-auto sm:block"
          />
        </a>
        <nav className="hidden flex-1 items-center justify-center gap-1 overflow-x-auto xl:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-100 hover:text-[#B91C1C]"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <ContactDialog
          label="Get in touch"
          showIcon={false}
          className="inline-flex shrink-0 items-center rounded-full bg-[#B91C1C] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#991B1B]"
        />
      </div>
    </header>
  );
}
