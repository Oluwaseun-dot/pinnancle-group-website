import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../data/faqData';
import MagneticButton from './MagneticButton';

export default function FaqAccordion() {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-28 md:py-36 bg-brand-black text-brand-offWhite relative border-t border-brand-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-brand-border text-brand-silver text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            Common Inquiries
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-tight">
            Questions, Answered.
          </h2>
          <p className="text-base sm:text-lg text-brand-silver mt-4">
            Direct, plain-English answers regarding what we build, how we work, and who we serve.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-brand-charcoal border-brand-lime/80 shadow-lime-glow-sm'
                    : 'bg-brand-dark border-brand-border hover:border-brand-borderLight'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-display font-semibold text-white tracking-tight">
                    {item.question}
                  </span>
                  <div className={`p-2 rounded-full transition-transform duration-200 shrink-0 ${isOpen ? 'bg-brand-lime text-black rotate-180' : 'bg-white/5 text-brand-silver'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-brand-silver leading-relaxed border-t border-brand-border/60 animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing Help Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs text-brand-silver font-mono mb-4">
            Have a question about your specific software stack?
          </p>
          <MagneticButton to="/contact" variant="secondary" size="sm" showArrow={true}>
            Speak With A Systems Specialist
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
