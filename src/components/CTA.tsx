import { Button } from "@/components/ui/button";
import { ArrowRight, Music2 } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-accent to-secondary p-12 md:p-20 text-center shadow-hover animate-fade-in">
          {/* Animated Background Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10 animate-float blur-xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white/10 animate-float delay-500 blur-xl" />
          
          <div className="relative z-10">
            <Music2 className="w-16 h-16 mx-auto mb-6 text-primary-foreground animate-pulse-soft" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Create Something Amazing?
            </h2>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Join thousands of creators making beautiful lofi music every day
            </p>
            
            <Button 
              size="lg" 
              variant="outline"
              className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:scale-105 shadow-xl"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
