import { ContentWrapper } from "@/components/shared/content-wrapper";
import { cn } from "@/utils/cn";
import { transformationData } from "@/utils/mock-data";
import Image from "next/image";

const contentData = transformationData.content;
const columnClassName = "py-2.5 flex flex-col space-y-5 lg:justify-center";

export function TransformationActionContent() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 md:gap-3 lg:gap-0">
      <div
        className={cn(
          "order-2 lg:order-1 md:col-span-2 lg:col-span-1 md:grid md:grid-cols-2 lg:grid-cols-1 gap-3",
          columnClassName,
        )}
      >
        <ContentWrapper variant="compact" title={contentData[0].title}>
          {contentData[0].content}
        </ContentWrapper>
        <ContentWrapper
          variant="compact"
          className="not-first:mt-0"
          title={contentData[1].title}
        >
          {contentData[1].content}
        </ContentWrapper>
      </div>
      <div
        className={cn(
          "order-1 lg:order-2 md:col-span-3 lg:col-span-2 lg:px-20",
          columnClassName,
        )}
      >
        <Image
          width={479}
          height={214}
          src={transformationData.image}
          className="w-full"
          alt=""
        />
      </div>
      <div className={cn("order-3 lg:order-3", columnClassName)}>
        <ContentWrapper variant="compact" title={contentData[2].title}>
          {contentData[2].content}
        </ContentWrapper>
      </div>
    </div>
  );
}
