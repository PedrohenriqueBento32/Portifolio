import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/features/hero/HeroSection";
import { AboutSection } from "@/features/about/AboutSection";
import { ServicesSection } from "@/features/services/ServicesSection";
import { ProjectsSection } from "@/features/projects/ProjectsSection";
import { TechnologiesSection } from "@/features/technologies/TechnologiesSection";
import { ContactSection } from "@/features/contact/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <Header />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TechnologiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;