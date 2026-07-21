import type { Project } from "@/types/project.types";

export const PROJECTS: readonly Project[] = [
  {
    id: "projeto-1",
    title: "[NOME_DO_PROJETO]",
    summary: "[RESUMO_DO_PROJETO]",
    context: "[CONTEXTO_DO_PROJETO]",
    solution: "[DESCRIÇÃO_REAL_DO_PROJETO]",
    contribution: "[CONTRIBUIÇÃO_NO_PROJETO]",
    technologies: ["[TECNOLOGIAS_DO_PROJETO]"],
    imageUrl: "",
    imageAlt: "Placeholder de projeto 1",
    repositoryUrl: "[URL_DO_REPOSITÓRIO]",
    liveUrl: "[URL_DO_PROJETO]",
    status: "completed"
  },
  {
    id: "projeto-2",
    title: "[NOME_DO_PROJETO_2]",
    summary: "[RESUMO_DO_PROJETO_2]",
    context: "[CONTEXTO_DO_PROJETO_2]",
    solution: "[DESCRIÇÃO_REAL_DO_PROJETO_2]",
    contribution: "[CONTRIBUIÇÃO_NO_PROJETO_2]",
    technologies: ["[TECNOLOGIAS_DO_PROJETO]"],
    imageUrl: "",
    imageAlt: "Placeholder de projeto 2",
    repositoryUrl: "[URL_DO_REPOSITÓRIO]",
    status: "in-progress"
  },
  {
    id: "projeto-3",
    title: "[NOME_DO_PROJETO_3]",
    summary: "[RESUMO_DO_PROJETO_3]",
    context: "[CONTEXTO_DO_PROJETO_3]",
    solution: "[DESCRIÇÃO_REAL_DO_PROJETO_3]",
    contribution: "[CONTRIBUIÇÃO_NO_PROJETO_3]",
    technologies: ["[TECNOLOGIAS_DO_PROJETO]"],
    imageUrl: "",
    imageAlt: "Placeholder de projeto 3",
    repositoryUrl: "[URL_DO_REPOSITÓRIO]",
    status: "study"
  }
];