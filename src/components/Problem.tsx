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
            <h3 className="mb-4">The Current User Journey</h3>
            <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6">
              <div className="flex-1">
                <div className="p-3 bg-brand-blue/10 rounded-lg mb-3 font-medium">
                  Pre-Insertion phase
                </div>
                <ul className="text-brand-gray space-y-2 pl-5 list-disc">
                  <li>Find a mirror or magnifier</li>
                  <li>Wash and disinfect both hands</li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="p-3 bg-brand-blue/10 rounded-lg mb-3 font-medium">
                  Prep & Insert phase
                </div>
                <ul className="text-brand-gray space-y-2 pl-5 list-disc">
                  <li>Ensure lens immersed in solution</li>
                  <li>Check for dirt/debris on fingers</li>
                  <li>Check for dirt/debris on lens</li>
                  <li>Check for dirt/debris in eye</li>
                  <li>Insert lens</li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="p-3 bg-brand-blue/10 rounded-lg mb-3 font-medium">
                  Post-Insertion phase
                </div>
                <ul className="text-brand-gray space-y-2 pl-5 list-disc">
                  <li>Check lens placement</li>
                  <li>Pan eye left/right or up/down to check for placement and/or dirt/debris</li>
                  <li>Reinsert (as appropriate)</li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Problem;
