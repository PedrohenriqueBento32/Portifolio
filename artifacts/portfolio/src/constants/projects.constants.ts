import type { Project } from "@/types/project.types";

export const PROJECTS: readonly Project[] = [
  {
    id: "projeto-1",
    title: "EducAfro",
    summary: "propõe uma plataforma educacional inclusiva para reduzir desigualdades, oferecendo cursos de capacitação e um espaço de valorização da cultura negra, promovendo acesso à educação, inclusão social e melhores oportunidades de renda.",
    technologies: ["[TECNOLOGIAS_DO_PROJETO]"],
    imageUrl: "",
    imageAlt: "Placeholder de projeto 1",
    repositoryUrl: "https://github.com/PedroBentoDev/Projeto-EducAfro",
    liveUrl: "https://pedrobentodev.github.io/webdemo/",
    status: "completed"
  },

  {
    id: "projeto-2",
    title: "Barbershop-v1.0",
    summary: "Sistema de gestão para barbearias desenvolvido em Java e Spring Boot, com estrutura para cadastro, validação e gerenciamento de dados.",
    technologies: ["[TECNOLOGIAS_DO_PROJETO]"],
    imageUrl: "",
    imageAlt: "Placeholder de projeto 2",
    repositoryUrl: "https://github.com/PedroBentoDev/Barbershop-v1.0",
    status: "in-progress"
  },
 {
    id: "projeto-3",
    title: "Agência de viagem",
    summary: "Aplicação web para agência de viagens, destacando destinos, pacotes e uma navegação responsiva",
    technologies: ["[TECNOLOGIAS_DO_PROJETO]"],
    imageUrl: "",
    imageAlt: "Placeholder de projeto 1",
    repositoryUrl: "https://github.com/PedroBentoDev/projeto-agencia_de_viagens",
    liveUrl: "https://pedrobentodev.github.io/projeto-agencia_de_viagens/",
    status: "completed"
  },
];