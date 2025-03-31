
import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: React.ReactNode;
  icon: LucideIcon;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  className,
}) => {
  return (
    <div className={cn("glass-card p-6 md:p-8 h-full", className)}>
      <div className="mb-4 p-4 rounded-full bg-brand-blue/10 inline-block">
        <Icon className="w-6 h-6 text-brand-blue" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-brand-gray">{description}</p>
    </div>
  );
};

export default FeatureCard;
