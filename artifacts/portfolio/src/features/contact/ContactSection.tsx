import { SectionContainer } from "@/components/ui/SectionContainer";
import {
  CheckCircle2,
  Github,
  LifeBuoy,
  Linkedin,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  Search,
  Sparkles,
} from "lucide-react";

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
          <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-4xl">
            Vamos conversar sobre sua ideia?
          </h2>

          <div className="mb-8 h-1 w-20 rounded bg-primary" />

          <p className="mb-10 text-lg leading-relaxed text-text-secondary">
            Conte-me um pouco sobre o que você precisa. Podemos conversar sobre
            o projeto, entender os objetivos e avaliar a melhor forma de
            transformar a ideia em uma solução web.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <a
              href="mailto:[SEU_EMAIL]"
              className="group flex items-center gap-3 rounded-lg p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface-elevated text-text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <Mail size={20} />
              </div>

              <div className="min-w-0">
                <span className="mb-0.5 block text-sm font-medium text-text-muted">
                  E-mail
                </span>

                <span className="block truncate font-medium text-foreground transition-colors group-hover:text-primary">
                  [SEU_EMAIL]
                </span>
              </div>
            </a>

            <a
              href="https://wa.me/[SEU_WHATSAPP]"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-lg p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface-elevated text-text-primary transition-colors group-hover:border-[#25D366] group-hover:bg-[#25D366] group-hover:text-white">
                <MessageCircle size={20} />
              </div>

              <div className="min-w-0">
                <span className="mb-0.5 block text-sm font-medium text-text-muted">
                  WhatsApp
                </span>

                <span className="block truncate font-medium text-foreground transition-colors group-hover:text-[#25D366]">
                  [SEU_WHATSAPP]
                </span>
              </div>
            </a>

            <a
              href="[URL_DO_LINKEDIN]"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-lg p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
              aria-label="LinkedIn"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface-elevated text-text-primary transition-colors group-hover:border-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white">
                <Linkedin size={20} />
              </div>

              <div className="min-w-0">
                <span className="mb-0.5 block text-sm font-medium text-text-muted">
                  LinkedIn
                </span>

                <span className="block truncate font-medium text-foreground transition-colors group-hover:text-[#0A66C2]">
                  Meu perfil
                </span>
              </div>
            </a>

            <a
              href="[URL_DO_GITHUB]"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-lg p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
              aria-label="GitHub"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface-elevated text-text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <Github size={20} />
              </div>

              <div className="min-w-0">
                <span className="mb-0.5 block text-sm font-medium text-text-muted">
                  GitHub
                </span>

                <span className="block truncate font-medium text-foreground transition-colors group-hover:text-primary">
                  Meus projetos
                </span>
              </div>
            </a>
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

                <h3 className="font-display text-lg font-semibold text-foreground">
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