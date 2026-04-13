import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { CoreFeatures } from "@/components/features";
import { FeatureExpansion } from "@/components/feature-expansion";
import { ERPModules } from "@/components/erp-modules";
import { WhyChooseUs } from "@/components/why-choose-us";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CoreFeatures />
      <FeatureExpansion />
      <ERPModules />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </main>
  );
}
