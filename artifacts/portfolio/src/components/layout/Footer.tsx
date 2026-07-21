import { NAVIGATION_ITEMS } from "@/constants/navigation.constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background mt-10 py-5 md:py-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-5 md:flex-row md:px-8 lg:px-10">
        <div className="flex flex-col items-center gap-0 md:items-start">
          <span className="font-display text-lg font-bold text-foreground md:text-xl">
            Pedro<span className="text-primary">.</span>
          </span>

          <span className="text-sm leading-none text-text-muted">
            Desenvolvedor Full Stack
          </span>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col md:flex-row justify-between ...">
       <p className="text-xs text-text-muted md:text-right">
          &copy; {currentYear} Desenvolvido por Pedro com React e TypeScript.
        </p>
      </div>
    </footer>
  );
}