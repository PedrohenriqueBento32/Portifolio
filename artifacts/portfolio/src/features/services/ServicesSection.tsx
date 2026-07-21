import { SectionContainer } from "@/components/ui/SectionContainer";
import { ServiceCard } from "./ServiceCard";
import { SERVICES } from "@/constants/services.constants";

export function ServicesSection() {
  return (
    <SectionContainer id="servicos" className="bg-[#0b1120]">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
          O que posso fazer por você?
        </h2>
        <div className="h-1 w-20 bg-primary rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            benefit={service.benefit}
            iconName={service.iconName}
          />
        ))}
      </div>
    </SectionContainer>
  );
}