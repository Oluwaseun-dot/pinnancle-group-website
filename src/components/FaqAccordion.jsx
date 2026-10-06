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
    <section className="py-24 sm:py-32 md:py-40 bg-brand-black text-brand-offWhite relative border-t border-brand-border">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-brand-border text-brand-silver text-xs font-mono uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-[1.08]">
            Frequently Asked <br />
            <span className="text-brand-silver">Questions.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-silver mt-5 font-normal leading-relaxed">
            Direct, plain-English clarity regarding what we build, how our systems deploy, and who we partner with.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-brand-charcoal border-brand-borderLight shadow-xl'
                    : 'bg-brand-dark border-brand-border hover:border-brand-borderLight'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-display font-semibold text-white tracking-tight">
                    {item.question}
                  </span>
                  <div className={`p-2 rounded-full transition-transform duration-200 shrink-0 ${isOpen ? 'bg-white/10 text-brand-lime rotate-180' : 'bg-white/5 text-brand-silver'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-brand-silver leading-relaxed border-t border-brand-border/40 font-normal">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing Help Callout */}
        <div className="mt-14 text-center">
          <p className="text-xs text-brand-silver font-mono mb-4">
            Have a custom workflow inquiry or unique software stack?
          </p>
          <MagneticButton to="/contact" variant="secondary" size="sm" showArrow={true}>
            Speak With A Systems Specialist
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
