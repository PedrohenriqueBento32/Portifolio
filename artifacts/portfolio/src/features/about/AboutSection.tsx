import { SectionContainer } from "@/components/ui/SectionContainer";

const HIGHLIGHTS = [
  "Comunicação clara",
  "Compromisso com prazos",
  "Código organizado",
  "Aprendizado contínuo"
] as const;

export function AboutSection() {
  return (
    <SectionContainer id="sobre">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        <div className="lg:col-span-5">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
            Sobre mim
          </h2>
          <div className="h-1 w-20 bg-primary rounded mb-8"></div>
        </div>
        
        <div className="lg:col-span-7">
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
            Sou Pedro, Desenvolvedor Full Stack com foco em interfaces modernas e desenvolvimento de APIs. Gosto de entender o problema antes de começar a desenvolver, buscando criar soluções organizadas, funcionais e fáceis de utilizar. Valorizo comunicação clara, responsabilidade, cumprimento de prazos e evolução constante.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HIGHLIGHTS.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-4 rounded-[12px] bg-surface-elevated border border-border"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </SectionContainer>
  );
}