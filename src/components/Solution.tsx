
import React from "react";
import AnimatedSection from "./AnimatedSection";
import { Camera, Check, ShieldCheck, Timer } from "lucide-react";

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
            <div className="glass-card aspect-square max-w-md mx-auto rounded-3xl overflow-hidden p-6">
              <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center relative">
                {/* This would be your product visualization */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4">
                  <div className="absolute inset-0 bg-brand-blue/20 rounded-full blur-xl"></div>
                  <div className="absolute inset-[10%] bg-white rounded-full border-4 border-brand-lightBlue/50"></div>
                  
                  {/* Camera visualization */}
                  <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Lens visualization */}
                  <div className="absolute inset-[25%] border-4 border-dashed border-brand-blue/50 rounded-full"></div>
                  
                  {/* Detection visualization */}
                  <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 transform rotate-6 px-4 py-1 bg-green-100 rounded-md text-green-800 text-xs font-medium">
                    <Check className="inline-block w-3 h-3 mr-1" /> Clear for insertion
                  </div>
                </div>
              </div>
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
