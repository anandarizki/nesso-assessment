import { SectionWrapper } from "@/components/shared/section-wrapper";
import { transformationData } from "@/utils/mock-data";
import { TransformationActionContent } from "./components/transformation-action-content";

export function TransformationActionSection() {
  return (
    <SectionWrapper
      title={transformationData.sectionTitle}
      description={transformationData.sectionDescription}
      className="md:py-48"
    >
      <TransformationActionContent />
    </SectionWrapper>
  );
}
