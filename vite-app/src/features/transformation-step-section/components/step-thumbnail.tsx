import { ContentWrapper } from "@/components/shared/content-wrapper";
import Image from "next/image";

type StepThumbnailProps = {
  image: string;
  title: string;
  content: string;
};
export function StepThumbnail({ image, title, content }: StepThumbnailProps) {
  return (
    <div className="grid grid-cols-5 md:grid-cols-1 gap-3">
      <Image
        src={image}
        width={410}
        height={395}
        alt={`${title} Thumbnail`}
        className="col-span-2"
      />
      <ContentWrapper
        title={title}
        titleClassName="font-bold text-base md:text-lg"
        className="col-span-3 p-2 not-first:mt-0"
      >
        {content}
      </ContentWrapper>
    </div>
  );
}
