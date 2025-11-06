import { Button } from "@/components/ui/button";
import { Music, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-lofi.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-xl" />
      </div>
      <div className="absolute bottom-32 right-16 animate-float delay-1000">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-primary opacity-20 blur-xl" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-card border border-border shadow-soft animate-pulse-soft">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Create Your Lofi Masterpiece</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Make Songs,
          <br />
          Go Lofi
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Transform any track into smooth lofi beats. Create, convert, and vibe with our intuitive music production tools.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="group">
            <Music className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Start Creating
          </Button>
          <Button variant="outline" size="lg" className="hover:scale-105 transition-all duration-300">
            Explore Features
          </Button>
        </div>
      </div>
    </section>
  );
};
