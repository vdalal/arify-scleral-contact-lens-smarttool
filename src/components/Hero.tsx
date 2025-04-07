
import React from "react";
import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen relative pt-28 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-subtle -z-10"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-brand-lightBlue/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text content */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <AnimatedSection>
              <div className="tag">Introducing Smart Lens Insertion Technology</div>
              <h1 className="mb-6">
                Safer, Faster
                <br />
                <span className="text-brand-blue">Scleral Lens</span> Insertion
              </h1>
            </AnimatedSection>

            <AnimatedSection delay="delay-200">
              <p className="text-lg md:text-xl text-brand-gray mb-8 max-w-xl">
                Our smart device detects air bubbles and debris, preventing
                infections and ensuring perfect lens placement every time.
              </p>
            </AnimatedSection>

            <AnimatedSection delay="delay-300">
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="bg-brand-blue/10 text-brand-blue text-sm font-medium px-3 py-1 rounded-full">FDA Class 1</div>
                <div className="bg-brand-blue/10 text-brand-blue text-sm font-medium px-3 py-1 rounded-full">Clinical Trial in Progress</div>
                <div className="bg-brand-blue/10 text-brand-blue text-sm font-medium px-3 py-1 rounded-full">AI/ML-Powered Analysis</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay="delay-400">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="btn-primary"
                >
                  Get Started
                </Button>
                <Button
                  onClick={() => scrollToSection("problem")}
                  variant="outline"
                  className="btn-secondary"
                >
                  Learn More
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* Hero image - updated with new circular device image */}
          <AnimatedSection
            className="w-full lg:w-1/2 relative"
            animation="blur-in"
            delay="delay-200"
          >
            <div className="glass-card p-6 w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden flex items-center justify-center bg-gray-200">
              <img 
                src="/lovable-uploads/8f1a7f7e-28c6-40b3-a19b-a10bfa21f201.png" 
                alt="Arify Scleral Lens Insertion Device" 
                className="w-full max-w-sm mx-auto animate-floating"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex justify-center mt-16">
          <AnimatedSection delay="delay-500">
            <ArrowDownCircle
              className="w-10 h-10 text-brand-blue animate-bounce cursor-pointer"
              onClick={() => scrollToSection("problem")}
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
