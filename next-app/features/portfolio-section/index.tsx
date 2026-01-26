import { SectionWrapper } from "@/components/shared/section-wrapper";
import { portfolioData } from "@/utils/mock-data";
import { ShowcaseSlider } from "./components/showcase-slider";

export function PortfolioSection() {
  return (
    <SectionWrapper
      className=" md:pb-4"
      theme="secondary"
      title={portfolioData.sectionTitle}
      description={portfolioData.sectionDescription}
    >
      <ShowcaseSlider className="md:pt-4" />
    </SectionWrapper>
  );
}
