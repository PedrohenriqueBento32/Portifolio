import { SectionContainer } from "@/components/ui/SectionContainer";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "@/constants/projects.constants";

export function ProjectsSection() {
  return (
    <SectionContainer id="projetos">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
          Projetos selecionados
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mb-6">
          Alguns projetos que representam minha forma de transformar necessidades em soluções digitais.
        </p>
        <div className="h-1 w-20 bg-primary rounded"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
}