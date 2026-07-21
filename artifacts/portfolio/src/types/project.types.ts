export type ProjectStatus = "completed" | "in-progress" | "study";

export type Project = {
  readonly id: string;
  readonly title: string;
  readonly summary: string;
  readonly context: string;
  readonly solution: string;
  readonly contribution: string;
  readonly technologies: readonly string[];
  readonly imageUrl: string;
  readonly imageAlt: string;
  readonly repositoryUrl?: string;
  readonly liveUrl?: string;
  readonly status?: ProjectStatus;
};