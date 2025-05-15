import React from "react";
import AnimatedSection from "./AnimatedSection";
import FeatureCard from "./FeatureCard";
import { 
  Shield, Clock, ArrowDownUp, Gauge, Smartphone, Heart 
} from "lucide-react";

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="section">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="tag">Key Benefits</div>
          <h2 className="mb-6">
            Why Choose <span className="text-brand-blue">Our Solution</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay="delay-200">
          <p className="text-lg md:text-xl text-brand-gray mb-12 max-w-3xl">
            Our smart lens technology delivers significant improvements across safety, efficiency, and user experience.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <AnimatedSection delay="delay-100">
            <FeatureCard
              title="Enhanced Safety"
              description="Reduce risk of eye infections, keratitis, and corneal ulcers with our advanced debris detection system."
              icon={Shield}
            />
          </AnimatedSection>

          <AnimatedSection delay="delay-200">
            <FeatureCard
              title="Time Efficiency"
              description="Save insertion time by eliminating the need for manual checks and reinsertions."
              icon={Clock}
            />
          </AnimatedSection>

          <AnimatedSection delay="delay-300">
            <FeatureCard
              title="Reduced Drop-off"
              description="Significantly lowered abandonment rates compared to traditional insertion methods."
              icon={ArrowDownUp}
            />
          </AnimatedSection>

          <AnimatedSection delay="delay-200">
            <FeatureCard
              title="Enhanced Experience"
              description="Track insertion success rates and improvement over time with detailed analytics."
              icon={Gauge}
            />
          </AnimatedSection>

          <AnimatedSection delay="delay-300">
            <FeatureCard
              title="Portable Design"
              description="Compact and lightweight design for easy use at home or on the go."
              icon={Smartphone}
            />
          </AnimatedSection>

          <AnimatedSection delay="delay-400">
            <FeatureCard
              title="Improved Comfort"
              description="Perfect lens placement ensures maximum comfort throughout the day."
              icon={Heart}
            />
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-16" delay="delay-500">
          <div className="glass-card p-8 md:p-10 bg-gradient-to-br from-white/80 to-white/60">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-2/3">
                <h3 className="mb-4">Transforming the User Experience</h3>
                <p className="text-brand-gray mb-6">
                  Our users report a huge improvement in insertion related discomfort, a substantial increase in efficiency, and overall lower infections.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-3xl font-bold text-brand-blue mb-2"></div>
                    <div className="text-sm text-brand-gray">Improved user satisfaction</div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-3xl font-bold text-brand-blue mb-2"></div>
                    <div className="text-sm text-brand-gray">Reduction in insertion time</div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-3xl font-bold text-brand-blue mb-2"></div>
                    <div className="text-sm text-brand-gray">Fewer reinsertion attempts</div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 bg-brand-blue/20 rounded-full blur-xl"></div>
                  <div className="absolute inset-[10%] bg-white rounded-full flex items-center justify-center">
                    <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-lightBlue">
                      A+
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Benefits;
