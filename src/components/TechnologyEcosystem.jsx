import React, { useState } from 'react';
import { technologiesData } from '../data/technologiesData';

export default function TechnologyEcosystem() {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);

  return (
    <section className="py-24 sm:py-32 md:py-40 bg-brand-black text-brand-offWhite relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-brand-border text-brand-silver text-xs font-mono uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            Software Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-[1.08]">
            We Work With The Tools <br />
            <span className="text-brand-silver">That Run Modern Businesses.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-silver mt-5 leading-relaxed font-normal">
            We don’t force you to discard your existing tech stack. We architect resilient automations and integrations directly into the platforms your team relies on daily.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {technologiesData.map((cat, idx) => {
            const isSelected = activeCategoryIdx === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveCategoryIdx(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-200 border ${
                  isSelected
                    ? 'bg-brand-charcoal border-brand-lime shadow-lime-glow-sm text-white'
                    : 'bg-brand-dark border-brand-border text-brand-silver hover:text-white hover:border-brand-borderLight'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-brand-lime' : 'bg-brand-silver/40'}`} />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-silver">Layer 0{idx + 1}</span>
                </div>
                <h4 className="text-sm font-semibold tracking-tight">{cat.category}</h4>
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-8 sm:p-12 shadow-2xl relative">
          <div className="mb-8 pb-6 border-b border-brand-border">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              {technologiesData[activeCategoryIdx].category}
            </h3>
            <p className="text-sm text-brand-silver mt-1.5 font-normal">
              {technologiesData[activeCategoryIdx].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {technologiesData[activeCategoryIdx].items.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-brand-dark border border-brand-border hover:border-brand-borderLight transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-semibold text-white group-hover:text-brand-lime transition-colors">
                    {item.name}
                  </h4>
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-card border border-brand-border text-[10px] font-mono uppercase text-brand-silver">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-brand-silver leading-relaxed font-normal">
                  {item.role}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-brand-border flex flex-wrap items-center justify-between gap-4 text-xs text-brand-silver font-mono">
            <span>Enterprise Security & Private API Encryption</span>
            <span>Zero Vendor Lock-In</span>
          </div>
        </div>
      </div>
    </section>
  );
}
