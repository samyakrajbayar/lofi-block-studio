import { Wand2, Waves, Headphones, Sparkles } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export const Features = () => {
  const features = [
    {
      icon: Wand2,
      title: "Easy Creation",
      description: "Intuitive tools to create original songs with no music theory required. Just vibe and create."
    },
    {
      icon: Waves,
      title: "Lofi Conversion",
      description: "Transform any track into chill lofi beats with one click. Add that nostalgic warmth instantly."
    },
    {
      icon: Headphones,
      title: "Studio Quality",
      description: "Professional-grade audio processing ensures your tracks sound pristine on any platform."
    },
    {
      icon: Sparkles,
      title: "Smart Effects",
      description: "AI-powered effects that automatically enhance your music with the perfect lofi aesthetic."
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make music creation effortless and fun
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
