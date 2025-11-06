import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <Card 
      className="p-8 group hover:shadow-hover transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-card to-card/80 border-border animate-fade-in cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500">
        <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
      </div>
      
      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </Card>
  );
};
