import { SectionContainer } from "@/components/ui/SectionContainer";
import { ContactForm } from "./ContactForm";
import { Mail, MessageCircle, Linkedin, Github } from "lucide-react";

export function ContactSection() {
  return (
    <SectionContainer id="contato">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Contact Info */}
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

        {/* Contact Form */}
        <div className="bg-[#0b1120] p-6 md:p-8 rounded-[20px] border border-border">
          <h3 className="text-2xl font-bold font-display text-foreground mb-6">
            Envie uma mensagem
          </h3>
          <ContactForm />
        </div>

      </div>
    </SectionContainer>
  );
}