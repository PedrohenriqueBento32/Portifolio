import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button } from "@/components/ui/Button";

const TYPING_PHRASES = [
  "Uma Landing Page.",
  "Um Sistema Web.",
  "Uma API.",
  "Um Dashboard.",
  "Uma solução moderna."
] as const;

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const typedText = useTypingEffect(TYPING_PHRASES, 60, 40, 2500);

  return (
    <section className="w-full min-h-[80vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 lg:px-10 flex flex-col items-start">
        
        <div className="max-w-3xl mb-8">
          <h1 
            className="font-bold font-display text-foreground leading-tight mb-4 tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            O que sua ideia precisa para se tornar realidade?
          </h1>
          <div 
            className="text-primary font-semibold font-display h-[3rem] md:h-[4rem] lg:h-[4.5rem]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            {prefersReducedMotion ? "Uma solução moderna." : typedText}
            {!prefersReducedMotion && <span className="animate-pulse">|</span>}
          </div>
        </div>

        <div className="max-w-2xl mb-10">
          <p className="text-lg md:text-xl text-text-secondary font-medium mb-2">
            Olá, eu sou Pedro.
          </p>
          <p className="text-xl md:text-2xl font-bold text-foreground mb-4">
            Desenvolvedor Full Stack
          </p>
          <p className="text-base md:text-lg text-text-muted leading-relaxed">
            Desenvolvo interfaces modernas, APIs e aplicações web com foco em qualidade, código organizado e uma experiência que inspira confiança.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href="#projetos">Ver projetos</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <a href="#contato">Vamos conversar</a>
          </Button>
        </div>
        
      </div>
    </section>
  );
}