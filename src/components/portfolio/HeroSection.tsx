import { Button } from "@/components/ui/button";
import { Download, Eye, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-primary/10" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="float-animation">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mahak Goyal
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-accent font-semibold mb-8">
            AWS Certified Data Engineer
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          I am a problem-solver currently using <span className="text-primary font-semibold">AWS, PySpark, and Python</span> to solve data challenges, 
          but I am ready to explore any tech or project that needs a tech-enthusiastic person. 
          My focus is on <span className="text-accent font-semibold">building impactful solutions</span>, not just filling a role.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={() => scrollToSection('impact')}
            className="group"
          >
            <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
            View My Work
          </Button>
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => window.open('https://drive.google.com/file/d/15ylBrMkV6qkcXEiLsKWQ8CoJWmu9pCq9/view?usp=sharing', '_blank')}
            className="group"
          >
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Download Resume
          </Button>
          <Button 
            variant="outline-hero" 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="group"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Contact Me
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};