export type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export type ContactFormData = {
  readonly name: string;
  readonly email: string;
  readonly projectType: string;
  readonly message: string;
};