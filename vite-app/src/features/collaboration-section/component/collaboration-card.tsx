import { ContentWrapper } from "@/components/shared/content-wrapper";
import { OrderCta } from "@/components/shared/order-cta";
import { Card, CardContent } from "@/components/ui/card";
import { collaborationData } from "@/utils/mock-data";

export function CollaborationCard() {
  return (
    <Card variant="outline" theme="accent">
      <CardContent
        theme="gray"
        className="py-20 flex flex-col items-center md:bg-[url('/grid-background.svg')] bg-no-repeat bg-position-[calc(50%+822px)_-125px]"
      >
        <div className="text-center max-w-175">
          <p className="text-center mb-2 text-max font-medium">
            {collaborationData.subtitle}
          </p>
          <ContentWrapper
            className="mb-7 not-first:mt-0"
            title={collaborationData.title}
            titleClassName="text-4xl md:text-[41px] font-normal text-accent"
          >
            {collaborationData.content}
          </ContentWrapper>
          <OrderCta />
        </div>
      </CardContent>
    </Card>
  );
}
