import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { NAVIGATION_ITEMS } from "@/constants/navigation.constants";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-[12px] font-medium"
      >
        Pular para o conteúdo principal
      </a>
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 lg:px-10 flex items-center justify-between">
        <a 
          href="#" 
          className="text-2xl font-bold font-display tracking-tight text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded"
          onClick={closeMenu}
        >
          Pedro<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-text-secondary hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded px-2 py-1"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild>
            <a href="#contato">Vamos conversar</a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 top-[72px] bg-background/95 backdrop-blur-md z-40 md:hidden flex flex-col p-6"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col gap-6 items-center pt-12">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xl font-medium text-text-secondary hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded p-2"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-8 w-full flex justify-center">
              <Button asChild size="lg" className="w-full max-w-sm">
                <a href="#contato" onClick={closeMenu}>Vamos conversar</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}