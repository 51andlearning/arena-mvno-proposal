import SiteHeader from "@/components/sections/site-header";
import ExecutiveSummary from "@/components/sections/executive-summary";
import ContentArsenal from "@/components/sections/content-arsenal";
import ProductTiers from "@/components/sections/product-tiers";
import GalloMusic from "@/components/sections/gallo-music";
import VasServices from "@/components/sections/vas-services";
import PropertyMap from "@/components/sections/property-map";
import RevenueModel from "@/components/sections/revenue-model";
import DsgEcosystem from "@/components/sections/dsg-ecosystem";
import OperatingModel from "@/components/sections/operating-model";
import DeliveryJourney from "@/components/sections/delivery-journey";
import ImplementationRoadmap from "@/components/sections/implementation-roadmap";
import PlatformCapabilities from "@/components/sections/platform-capabilities";
import GtmEnablement from "@/components/sections/gtm-enablement";
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
        <VasServices />
        <PropertyMap />
        <RevenueModel />
        <DsgEcosystem />
        <OperatingModel />
        <DeliveryJourney />
        <ImplementationRoadmap />
        <PlatformCapabilities />
        <GtmEnablement />
        <Cta />
      </main>
    </>
  );
}
