import { NAVIGATION_ITEMS } from "@/constants/navigation.constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 md:py-12 border-t border-border bg-background mt-20">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-xl font-bold font-display text-foreground">Pedro<span className="text-primary">.</span></span>
          <span className="text-sm text-text-muted">Desenvolvedor Full Stack</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
          {NAVIGATION_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded px-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="[URL_DO_GITHUB]"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded p-1"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="[URL_DO_LINKEDIN]"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded p-1"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
      
      <div className="mt-8 text-center text-xs text-text-muted px-5">
        <p>&copy; {currentYear} Desenvolvido por Pedro com React e TypeScript.</p>
      </div>
    </footer>
  );
}