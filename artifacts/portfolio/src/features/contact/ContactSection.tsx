import { SectionContainer } from "@/components/ui/SectionContainer";
import { CheckCircle2, Github, LifeBuoy, Linkedin, Mail, MessageCircle, MonitorSmartphone, Search, Sparkles } from "lucide-react";

const benefits = [
  {
    title: "Desenvolvimento sob medida",
    description: "Soluções modernas, rápidas e pensadas para gerar resultado.",
    icon: Sparkles,
  },
  {
    title: "Design responsivo",
    description: "Perfeito para celular, tablet e desktop.",
    icon: MonitorSmartphone,
  },
  {
    title: "SEO",
    description: "Estrutura preparada para aparecer melhor no Google.",
    icon: Search,
  },
  {
    title: "Suporte",
    description: "Acompanhamento após a entrega para manter tudo funcionando.",
    icon: LifeBuoy,
  },
];

export function ContactSection() {
  return (
    <SectionContainer id="contato">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
            Vamos conversar sobre sua ideia?
          </h2>
          <div className="h-1 w-20 bg-primary rounded mb-8"></div>

          <p className="text-lg text-text-secondary leading-relaxed mb-10">
            Conte-me um pouco sobre o que você precisa. Podemos conversar sobre o projeto, entender os objetivos e avaliar a melhor forma de transformar a ideia em uma solução web.
          </p>

          <div className="space-y-6">
            <a
              href="mailto:[SEU_EMAIL]"
              className="flex items-center gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-lg p-1 -ml-1"
            >
              <div className="w-12 h-12 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <span className="block text-sm text-text-muted font-medium mb-0.5">E-mail</span>
                <span className="block font-medium text-foreground group-hover:text-primary transition-colors">[SEU_EMAIL]</span>
              </div>
            </a>

            <a
              href="https://wa.me/[SEU_WHATSAPP]"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-lg p-1 -ml-1"
            >
              <div className="w-12 h-12 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-text-primary group-hover:bg-[#25D366] group-hover:text-white group-hover:border-[#25D366] transition-colors">
                <MessageCircle size={20} />
              </div>
              <div>
                <span className="block text-sm text-text-muted font-medium mb-0.5">WhatsApp</span>
                <span className="block font-medium text-foreground group-hover:text-[#25D366] transition-colors">[SEU_WHATSAPP]</span>
              </div>
            </a>

            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border">
              <a
                href="[URL_DO_LINKEDIN]"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-text-secondary hover:text-foreground hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="[URL_DO_GITHUB]"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-surface-elevated border border-border flex items-center justify-center text-text-secondary hover:text-foreground hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-[20px] border border-border/70 bg-surface-elevated/80 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_20px_45px_-20px_rgba(0,0,0,0.5)]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>
                  <CheckCircle2 size={18} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold font-display text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}