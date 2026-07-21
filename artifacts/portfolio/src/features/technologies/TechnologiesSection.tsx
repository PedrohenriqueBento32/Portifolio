import { SectionContainer } from "@/components/ui/SectionContainer";
import {
  TECHNOLOGIES_MAIN,
  TECHNOLOGIES_EXPERIENCE,
  TECHNOLOGIES_STUDYING
} from "@/constants/technologies.constants";
import { BookOpen, Code2, Cpu, Database, GitBranch, Globe, Rocket, Server, Sparkles, Type } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const techIcons: Record<string, LucideIcon> = {
  React: Sparkles,
  TypeScript: Type,
  "Node.js": Server,
  JavaScript: Code2,
  HTML: Code2,
  CSS: Code2,
  TailwindCSS: Sparkles,
  Git: GitBranch,
  Java: Cpu,
  PostgreSQL: Database,
  "REST APIs": Globe,
  Vite: Rocket,
  Express: Server,
  Rust: BookOpen,
};

function TechPill({ children, icon: Icon }: { children: React.ReactNode; icon?: LucideIcon }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated border border-border rounded-[12px] text-sm font-medium text-text-primary hover:border-primary/50 transition-colors">
      {Icon ? <Icon size={16} className="text-primary" /> : null}
      {children}
    </span>
  );
}

export function TechnologiesSection() {
  return (
    <SectionContainer id="tecnologias" className="bg-[#0b1120]">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
          Tecnologias e ferramentas
        </h2>
        <div className="h-1 w-20 bg-primary rounded mx-auto md:mx-0"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Uso principal */}
        <div>
          <h3 className="text-xl font-semibold font-display text-foreground mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Uso principal
          </h3>
          <div className="flex flex-wrap gap-3">
            {TECHNOLOGIES_MAIN.map((tech) => (
              <TechPill key={tech} icon={techIcons[tech]}>{tech}</TechPill>
            ))}
          </div>
        </div>

        {/* Experiência prática */}
        <div>
          <h3 className="text-xl font-semibold font-display text-foreground mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success"></span>
            Experiência prática
          </h3>
          <div className="flex flex-wrap gap-3">
            {TECHNOLOGIES_EXPERIENCE.map((tech) => (
              <TechPill key={tech} icon={techIcons[tech]}>{tech}</TechPill>
            ))}
          </div>
        </div>

        {/* Atualmente estudando */}
        <div>
          <h3 className="text-xl font-semibold font-display text-foreground mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-warning"></span>
            Atualmente estudando
          </h3>
          <div className="flex flex-wrap gap-3">
            {TECHNOLOGIES_STUDYING.map((tech) => (
              <TechPill key={tech} icon={techIcons[tech]}>{tech}</TechPill>
            ))}
          </div>
        </div>

      </div>
    </SectionContainer>
  );
}