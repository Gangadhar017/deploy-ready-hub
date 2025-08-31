import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group p-6 bg-card rounded-xl border border-border hover:shadow-medium transition-all duration-300 hover:border-primary/20">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/15 transition-colors">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;