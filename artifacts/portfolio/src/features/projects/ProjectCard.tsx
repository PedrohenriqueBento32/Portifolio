import type { Project } from "@/types/project.types";
import { Card, CardContent } from "@/components/ui/Card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group flex flex-col overflow-hidden border-border transition-colors hover:border-primary/40">
      <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-surface-elevated">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.imageAlt}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            width={600}
            height={338}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center border-b border-border bg-surface-elevated p-6 text-center text-text-muted">
            <span className="mb-2 font-display text-lg font-medium">
              {project.title}
            </span>
            <span className="text-sm">Imagem não disponível</span>
          </div>
        )}

        {project.status === "study" && (
          <div className="absolute left-4 top-4 rounded-[8px] border border-border bg-background/90 px-3 py-1.5 text-xs font-medium text-text-secondary backdrop-blur">
            Projeto de estudo
          </div>
        )}
      </div>

      <CardContent className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 font-display text-2xl font-bold text-foreground">
          {project.title}
        </h3>

        <p className="mb-6 line-clamp-3 text-text-secondary">
          {project.summary}
        </p>

        <div className="mt-auto">
          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="rounded-[6px] bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {project.liveUrl && (
              <Button
                asChild
                size="sm"
                className="flex-1"
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2"
                >
                  <span>Ver projeto</span>
                  <ExternalLink size={16} className="shrink-0" />
                </a>
              </Button>
            )}

            {project.repositoryUrl && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="flex-1"
              >
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2"
                >
                  <span>Repositório</span>
                  <Github size={16} className="shrink-0" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}