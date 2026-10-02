import React, { useState } from 'react';
import { technologiesData } from '../data/technologiesData';

export default function TechnologyEcosystem() {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);

  return (
    <section className="py-28 md:py-36 bg-brand-black text-brand-offWhite relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-brand-border text-brand-silver text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            Integration Stack
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-tight">
            We Work With The Tools <br />
            <span className="text-brand-silver">That Run Modern Businesses.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-silver mt-4 leading-relaxed">
            We don’t force you to change your existing software. We connect and automate the tools you already rely on every day.
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
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-silver">Stack 0{idx + 1}</span>
                </div>
                <h4 className="text-sm font-semibold tracking-tight">{cat.category}</h4>
              </button>
            );
          })}
        </div>

        {/* Tech Grid (Monochrome by default, lime highlight strictly on hover) */}
        <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-8 sm:p-12 shadow-2xl relative">
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              {technologiesData[activeCategoryIdx].category}
            </h3>
            <p className="text-sm text-brand-silver mt-1">
              {technologiesData[activeCategoryIdx].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {technologiesData[activeCategoryIdx].items.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-brand-dark border border-brand-border hover:border-brand-lime/60 hover:shadow-lime-glow-sm transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-semibold text-white group-hover:text-brand-lime transition-colors">
                    {item.name}
                  </h4>
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-card border border-brand-border text-[10px] font-mono uppercase text-brand-silver group-hover:border-brand-lime/40 group-hover:text-white transition-colors">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-brand-silver leading-relaxed">
                  {item.role}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-brand-border flex items-center justify-between text-xs text-brand-silver font-mono">
            <span>Enterprise Security & Private Encryption</span>
            <span>Zero Vendor Lock-In</span>
          </div>
        </div>
      </div>
    </section>
  );
}
