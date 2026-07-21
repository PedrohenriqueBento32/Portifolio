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
      </div>
      
      <div className="mt-8 text-center text-xs text-text-muted px-5">
        <p>&copy; {currentYear} Desenvolvido por Pedro com React e TypeScript.</p>
      </div>
    </footer>
  );
}