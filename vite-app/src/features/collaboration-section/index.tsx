import { SectionWrapper } from "@/components/shared/section-wrapper";
import { CollaborationCard } from "./component/collaboration-card";

export function CollaborationSection() {
  return (
    <SectionWrapper className="md:pt-30 md:pb-18">
      <CollaborationCard />
    </SectionWrapper>
  );
}
