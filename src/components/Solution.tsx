
import React from "react";
import AnimatedSection from "./AnimatedSection";
import { Camera, Check, ShieldCheck, Timer } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Solution: React.FC = () => {
  return (
    <section id="solution" className="section bg-brand-lightGray">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="tag">Our Solution</div>
          <h2 className="mb-6">
            Introducing <span className="text-brand-blue">Smart Lens Insertion</span>{" "}
            Technology
          </h2>
        </AnimatedSection>

        <AnimatedSection delay="delay-200">
          <p className="text-lg md:text-xl text-brand-gray mb-12 max-w-3xl">
            We've developed a revolutionary smart device that transforms the
            scleral lens insertion experience, making it safer, faster, and more
            reliable.
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row items-center gap-12 mt-10">
          <AnimatedSection className="w-full lg:w-1/2" animation="fade-in-right">
            <div className="glass-card overflow-hidden rounded-3xl relative">
              <AspectRatio ratio={1 / 1} className="bg-gradient-to-b from-white to-gray-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Green scanner light animation */}
                  <div className="absolute w-full h-16 bg-gradient-to-b from-green-400/0 via-green-400/30 to-green-400/0 
                                animate-[scan_3s_ease-in-out_infinite] z-10"></div>
                  
                  {/* Device image */}
                  <img 
                    src="/lovable-uploads/4b797262-f4bb-4cfb-a122-236aecc2a0f0.png" 
                    alt="Arify Smart Lens Insertion Device"
                    className="w-4/5 h-auto object-contain z-20 animate-floating"
                  />
                  
                  {/* Status indicator - animates between checking and success */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center 
                                  bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md z-30
                                  border border-green-200">
                    <span className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                    <span className="text-sm font-medium text-green-800">Lens Position Optimal</span>
                  </div>
                </div>
              </AspectRatio>
            </div>
          </AnimatedSection>

          <AnimatedSection className="w-full lg:w-1/2" animation="fade-in-left">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-brand-blue/10 text-brand-blue shrink-0 mt-1">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Advanced Detection</h3>
                  <p className="text-brand-gray">
                    Our smart camera technology instantly detects air bubbles and debris, 
                    preventing infections, discomfort, and potential eye injuries including 
                    conjunctivitis and infectious keratitis.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-brand-blue/10 text-brand-blue shrink-0 mt-1">
                  <Camera className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-Time Guidance</h3>
                  <p className="text-brand-gray">
                    Receive smart real-time guidance that prevents common insertion errors.
                    Our intuitive interface alerts you to potential issues before they 
                    become problems.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-brand-blue/10 text-brand-blue shrink-0 mt-1">
                  <Timer className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Time-Saving Efficiency</h3>
                  <p className="text-brand-gray">
                    Dramatically reduce insertion time and prevent the need for re-insertions.
                    Our portable form factor allows for convenient use anywhere, anytime.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Solution;
