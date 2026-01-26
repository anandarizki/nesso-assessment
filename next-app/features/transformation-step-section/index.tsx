import { SectionWrapper } from "@/components/shared/section-wrapper";
import { transformationStepData } from "@/utils/mock-data";
import { StepThumbnail } from "./components/step-thumbnail";

export function TransformationStepSection() {
  return (
    <SectionWrapper
      title={transformationStepData.sectionTitle}
      description={transformationStepData.sectionDescription}
      className="md:py-15"
    >
      <div className="grid gap-10 md:gap-3 md:grid-cols-3">
        {transformationStepData.content.map((item, index) => (
          <StepThumbnail key={"thumbnail" + index} {...item} />
        ))}
      </div>
    </SectionWrapper>
  );
}
