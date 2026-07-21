
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background mt-10 py-5 md:py-6">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex flex-col gap-0">
          <span className="font-display text-lg font-bold text-foreground md:text-xl">
            Pedro<span className="text-primary">.</span>
          </span>

          <span className="text-sm leading-none text-text-muted">
            Desenvolvedor Full Stack
          </span>
        </div>

        <p className="text-center text-xs text-text-muted md:text-right">
          &copy; {currentYear} Desenvolvido por Pedro com React e TypeScript.
        </p>
      </div>
    </footer>
  );
}