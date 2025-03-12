
import React from "react";
import AnimatedSection from "./AnimatedSection";
import { AlertCircle, Clock, Trash2 } from "lucide-react";
import FeatureCard from "./FeatureCard";

const Problem: React.FC = () => {
  return (
    <section id="problem" className="section">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="tag">The Challenge</div>
          <h2 className="mb-6">
            Why Scleral Lens Insertion is
            <span className="text-brand-blue"> Challenging</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay="delay-200">
          <p className="text-lg md:text-xl text-brand-gray mb-12 max-w-3xl">
            Scleral lenses are essential for treating ocular surface diseases and
            irregular corneas, but their insertion process presents significant
            challenges.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <AnimatedSection delay="delay-100">
            <FeatureCard
              title="Safety Risk"
              description="Air bubbles and debris can cause infections, keratitis, and corneal ulcers, leading to discomfort and potential injury."
              icon={AlertCircle}
            />
          </AnimatedSection>

          <AnimatedSection delay="delay-200">
            <FeatureCard
              title="Time-Consuming"
              description="Current insertion methods are inefficient, requiring multiple checks and re-insertions, wasting valuable time each day."
              icon={Clock}
            />
          </AnimatedSection>

          <AnimatedSection delay="delay-300">
            <FeatureCard
              title="High Drop-Off Rate"
              description="27% of new users abandon scleral lenses within the first year due to insertion difficulties and complications."
              icon={Trash2}
            />
          </AnimatedSection>
        </div>

        <AnimatedSection delay="delay-400" className="mt-12">
          <div className="glass-card p-6 md:p-10 bg-gradient-to-br from-white/80 to-white/60">
            <h3 className="mb-4">Pain Points, Needs & Wants</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <ul className="text-brand-gray space-y-3 pl-5 list-disc">
                  <li><span className="font-medium text-brand-blue">Safety:</span> Proper insertion, pre-check for liquid, pre-check for dirt/debris</li>
                  <li><span className="font-medium text-brand-blue">Bacterial infections:</span> Keratoconus, keratitis with improper lens insertion (e.g., with finger)</li>
                  <li><span className="font-medium text-brand-blue">Time-consuming:</span> Current methods require significant time and patience</li>
                  <li><span className="font-medium text-brand-blue">Inefficient:</span> Need to check for dirt/debris and re-insert; 'plunger' inconvenient for on-the-go use</li>
                </ul>
                
                <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-400 rounded">
                  <p className="font-medium">High drop-offs for new users</p>
                  <p className="text-red-600 font-bold text-xl">27% drop-off rate in the first year</p>
                  <p className="text-sm mt-2">Source: <a href="https://pubmed.ncbi.nlm.nih.gov/31734087/" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">https://pubmed.ncbi.nlm.nih.gov/31734087/</a></p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Current Alternative: Inappropriately named 'plunger'</h4>
                <p className="mb-4 text-brand-gray">Low-tech: Risky, error-prone & time-consuming.</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="/lovable-uploads/85eaedef-2b96-4590-af75-6ff6d1c7c68a.png" 
                      alt="Current plunger insertion method" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md bg-gray-50 flex items-center justify-center p-4">
                    <div className="text-center">
                      <p className="text-red-500 font-medium">Error-prone</p>
                      <p className="text-sm text-brand-gray">Manual insertion increases risk of contamination</p>
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

export default Problem;
