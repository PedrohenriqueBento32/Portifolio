import { useState } from "react";
import type { SubmissionStatus, ContactFormData } from "@/types/contact.types";
import { Button } from "@/components/ui/Button";

const PROJECT_TYPES = [
  "Landing Page",
  "Site Institucional",
  "Sistema Web",
  "Dashboard",
  "Painel Administrativo",
  "API REST",
  "Outro"
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    projectType: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate submission start
    setStatus("submitting");
    
    // The requirement explicitly states to NOT simulate fake success and to show a clear message 
    // that it's not connected. We'll set an error state indicating the form is currently unavailable.
    setTimeout(() => {
      setStatus("error");
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      
      {status === "error" && (
        <div className="p-4 bg-danger/10 border border-danger/20 rounded-[12px] text-danger-foreground text-sm flex flex-col gap-1">
          <span className="font-semibold text-danger">Formulário temporariamente indisponível.</span>
          <span className="text-text-secondary">Por favor, utilize o e-mail ou WhatsApp listados ao lado para entrar em contato.</span>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1.5">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-surface-elevated border border-border rounded-[12px] px-4 py-3 text-foreground placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-focus focus:border-transparent transition-all"
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1.5">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-surface-elevated border border-border rounded-[12px] px-4 py-3 text-foreground placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-focus focus:border-transparent transition-all"
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-text-secondary mb-1.5">
          Tipo de projeto
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          value={formData.projectType}
          onChange={handleChange}
          className="w-full bg-surface-elevated border border-border rounded-[12px] px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-focus focus:border-transparent transition-all appearance-none"
        >
          <option value="" disabled className="text-text-muted">Selecione uma opção</option>
          {PROJECT_TYPES.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1.5">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-surface-elevated border border-border rounded-[12px] px-4 py-3 text-foreground placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-focus focus:border-transparent transition-all resize-none"
          placeholder="Conte-me um pouco sobre o seu projeto..."
        />
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="w-full mt-2" 
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Enviando..." : "Enviar mensagem"}
      </Button>
    </form>
  );
}