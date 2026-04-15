import SiteHeader from "@/components/sections/site-header";
import ExecutiveSummary from "@/components/sections/executive-summary";
import ContentArsenal from "@/components/sections/content-arsenal";
import DsgEcosystem from "@/components/sections/dsg-ecosystem";
import OperatingModel from "@/components/sections/operating-model";
import DeliveryJourney from "@/components/sections/delivery-journey";
import ImplementationRoadmap from "@/components/sections/implementation-roadmap";
import PlatformCapabilities from "@/components/sections/platform-capabilities";
import GtmEnablement from "@/components/sections/gtm-enablement";
import ProductTiers from "@/components/sections/product-tiers";
import GalloMusic from "@/components/sections/gallo-music";
import VasServices from "@/components/sections/vas-services";
import PropertyMap from "@/components/sections/property-map";
import RevenueModel from "@/components/sections/revenue-model";
import Cta from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        {/* Why */}
        <ExecutiveSummary />
        <ContentArsenal />

        {/* How we deliver */}
        <DsgEcosystem />
        <OperatingModel />
        <DeliveryJourney />
        <ImplementationRoadmap />
        <PlatformCapabilities />
        <GtmEnablement />

        {/* What we sell */}
        <ProductTiers />
        <GalloMusic />
        <VasServices />
        <PropertyMap />
        <RevenueModel />

        {/* Next steps */}
        <Cta />
      </main>
    </>
  );
}
