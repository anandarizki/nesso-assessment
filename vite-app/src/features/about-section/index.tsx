import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AboutMedia } from "./components/about-media";
import { AboutContent } from "./components/about-content";
import { aboutData } from "@/utils/mock-data";

export function AboutSection() {
  return (
    <SectionWrapper title={aboutData.sectionTitle} theme="secondary">
      <div className="grid gap-8 lg:grid-cols-2">
        <AboutMedia />
        <AboutContent />
      </div>
    </SectionWrapper>
  );
}
