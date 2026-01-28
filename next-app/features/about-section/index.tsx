import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AboutMedia, AboutContent } from "./components";
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
