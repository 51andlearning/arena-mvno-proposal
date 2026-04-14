import SiteHeader from "@/components/sections/site-header";
import ExecutiveSummary from "@/components/sections/executive-summary";
import ContentArsenal from "@/components/sections/content-arsenal";
import ProductTiers from "@/components/sections/product-tiers";
import GalloMusic from "@/components/sections/gallo-music";
import PropertyMap from "@/components/sections/property-map";
import RevenueModel from "@/components/sections/revenue-model";
import Cta from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ExecutiveSummary />
        <ContentArsenal />
        <ProductTiers />
        <GalloMusic />
        <PropertyMap />
        <RevenueModel />
        <Cta />
      </main>
    </>
  );
}
