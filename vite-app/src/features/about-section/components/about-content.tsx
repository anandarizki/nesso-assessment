import { ContentWrapper } from "@/components/shared/content-wrapper";
import { aboutData } from "@/utils/mock-data";

export function AboutContent() {
  return (
    <div>
      {aboutData.content.map((content) => (
        <ContentWrapper
          key={content.title}
          title={content.title}
          titleClassName={content.accent ? "text-accent" : undefined}
        >
          {content.content}
        </ContentWrapper>
      ))}
    </div>
  );
}
