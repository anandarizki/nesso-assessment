import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ServiceCard } from "./components/service-card";
import { servicesData } from "@/utils/mock-data";

export function ServicesSection() {
  return (
    <SectionWrapper
      title="I nostri servizi"
      description="Questi servizi sono progettati per aiutare i clienti a costruire e far crescere il proprio brand attraverso strategie creative e soluzioni digitali innovative."
      className="lg:py-34.5"
    >
      <div className="grid md:grid-cols-2 gap-8 md:mt-20">
        {servicesData.content.map((item) => (
          <ServiceCard key={item.title} href="#" title={item.title}>
            {item.content}
          </ServiceCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
