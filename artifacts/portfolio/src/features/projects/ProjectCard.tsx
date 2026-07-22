import type { Project } from "@/types/project.types";
import { Card, CardContent } from "@/components/ui/Card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col group border-border hover:border-primary/40 transition-colors">
      <div className="w-full aspect-video bg-surface-elevated flex items-center justify-center relative overflow-hidden">
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt={project.imageAlt} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            width={600}
            height={338}
          />
        ) : (
          <div className="w-full h-full bg-surface-elevated flex flex-col items-center justify-center text-text-muted p-6 text-center border-b border-border">
            <span className="font-display font-medium text-lg mb-2">{project.title}</span>
            <span className="text-sm">Imagem não disponível</span>
          </div>
        )}
        
        {project.status === "study" && (
          <div className="absolute top-4 left-4 bg-background/90 backdrop-blur text-text-secondary text-xs font-medium px-3 py-1.5 rounded-[8px] border border-border">
            Projeto de estudo
          </div>
        )}
      </div>

      <CardContent className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold font-display text-foreground mb-3">
          {project.title}
        </h3>
        
        <p className="text-text-secondary mb-6 line-clamp-3">
          {project.summary}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, i) => (
              <span 
                key={i} 
                className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-[6px]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <Button asChild size="sm" className="flex-1">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Ver projeto
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </Button>
            )}
            {project.repositoryUrl && (
              <Button asChild variant="outline" size="sm" className={project.liveUrl ? "flex-1" : "flex-1"}>
                <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                  Repositório
                  <Github size={16} className="ml-2" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}