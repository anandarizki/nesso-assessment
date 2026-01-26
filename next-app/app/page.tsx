import { AboutSection } from "@/features/about-section";
import { CollaborationSection } from "@/features/collaboration-section";
import { HeroSection } from "@/features/hero-section";
import { PortfolioSection } from "@/features/portfolio-section";
import { ServicesSection } from "@/features/services-section";
import { TransformationActionSection } from "@/features/transformation-action-section";
import { TransformationStepSection } from "@/features/transformation-step-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TransformationActionSection />
      <TransformationStepSection />
      <CollaborationSection />
    </>
  );
}
