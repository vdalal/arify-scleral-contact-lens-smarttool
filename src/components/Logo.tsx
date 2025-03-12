
import React from "react";

interface LogoProps {
  className?: string;
  size?: "small" | "medium" | "large";
}

const Logo: React.FC<LogoProps> = ({ className, size = "medium" }) => {
  const dimensions = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-20 h-20",
  };

  return (
    <div className={`relative ${dimensions[size]} ${className}`}>
      <img 
        src="/lovable-uploads/9e943f1f-2435-4891-b8e6-e9eadb5ae79d.png" 
        alt="arify.net logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;
