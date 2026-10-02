import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Sparkles, Building2, Wrench, Stethoscope, Scale, Calculator, Car, ShoppingBag, Briefcase, Layers, GraduationCap, Utensils, Cpu } from 'lucide-react';
import { industriesData } from '../data/industriesData';
import MagneticButton from './MagneticButton';

const iconMap = {
  Wrench: <Wrench className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  Stethoscope: <Stethoscope className="w-5 h-5" />,
  Scale: <Scale className="w-5 h-5" />,
  Calculator: <Calculator className="w-5 h-5" />,
  Car: <Car className="w-5 h-5" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  Utensils: <Utensils className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
};

export default function IndustriesInteractive() {
  const [selectedIndustryId, setSelectedIndustryId] = useState('home-services');
  const activeIndustry = industriesData.find((ind) => ind.id === selectedIndustryId) || industriesData[0];

  return (
    <section id="industries" className="py-28 md:py-36 bg-brand-black text-brand-offWhite relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-brand-border text-brand-silver text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            Industry Systems
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-tight">
            We Build For Different <br />
            <span className="text-brand-silver">Types of Businesses.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-silver mt-4 leading-relaxed">
            Every business sector has different bottlenecks and customer habits. Here is how we design systems around the reality of your industry.
          </p>
        </div>

        {/* Horizontal Industry Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {industriesData.map((ind) => {
            const isSelected = ind.id === selectedIndustryId;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setSelectedIndustryId(ind.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-2 shrink-0 border ${
                  isSelected
                    ? 'bg-brand-charcoal text-white border-brand-lime shadow-lime-glow-sm'
                    : 'bg-brand-dark border-brand-border text-brand-silver hover:text-white hover:border-brand-borderLight'
                }`}
              >
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Industry Card Composition */}
        <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-8 sm:p-12 shadow-2xl relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-brand-border">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-brand-card text-brand-lime border border-brand-border">
                {iconMap[activeIndustry.icon] || <Building2 className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  {activeIndustry.name}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-brand-silver mt-0.5">
                  {activeIndustry.subtitle}
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-border text-brand-lime text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{activeIndustry.highlightResult}</span>
            </div>
          </div>

          <p className="text-brand-silver text-sm sm:text-base mt-6 leading-relaxed max-w-3xl">
            {activeIndustry.description}
          </p>

          {/* Problem vs Automation System */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            {/* Common Problem */}
            <div className="p-6 sm:p-8 rounded-2xl bg-brand-dark border border-red-500/20 space-y-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400" />
                <h4 className="text-xs font-mono uppercase tracking-widest text-red-400 font-semibold">
                  Common Bottlenecks & Lost Revenue
                </h4>
              </div>

              <div className="space-y-2.5">
                {activeIndustry.problems.map((problem, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02]">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                    <p className="text-xs sm:text-sm text-brand-silver">{problem}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pinnancle Solution */}
            <div className="p-6 sm:p-8 rounded-2xl bg-brand-dark border border-brand-border space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lime" />
                <h4 className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
                  What We Build For This Industry
                </h4>
              </div>

              <div className="space-y-2.5">
                {activeIndustry.solutions.map((solution, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-lime mt-2 shrink-0" />
                    <p className="text-xs sm:text-sm text-white font-medium">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="mt-10 pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-brand-silver font-mono">
              Ready to automate your {activeIndustry.name} operations?
            </span>
            <MagneticButton
              to="/book"
              variant="primary"
              size="md"
              showArrow={true}
            >
              Discuss {activeIndustry.name} Solutions
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
