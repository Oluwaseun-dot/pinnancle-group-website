import React, { useState } from 'react';
import { Star, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const active = testimonialsData[currentIndex];

  return (
    <section className="py-28 md:py-36 bg-brand-black text-brand-offWhite relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-brand-border text-brand-silver text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
              Verified Client Outcomes
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-tight">
              What Our Clients Say.
            </h2>
            <p className="text-base sm:text-lg text-brand-silver mt-4 leading-relaxed">
              We partner with serious businesses who measure us on reliability, response speed, and commercial return.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              className="p-3 rounded-full bg-brand-charcoal hover:bg-brand-card border border-brand-border text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-brand-silver">
              0{currentIndex + 1} / 0{testimonialsData.length}
            </span>
            <button
              type="button"
              onClick={next}
              className="p-3 rounded-full bg-brand-charcoal hover:bg-brand-card border border-brand-border text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-8 sm:p-14 shadow-2xl relative">
          <div className="relative z-10 max-w-4xl">
            {/* Stars & Project Tag */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-lime text-brand-lime" />
                ))}
              </div>
              <span className="text-xs font-mono text-white px-2.5 py-0.5 rounded-full bg-white/5 border border-brand-border">
                {active.projectType}
              </span>
              <span className="text-xs font-mono text-brand-lime flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Verified Feedback
              </span>
            </div>

            {/* Quote */}
            <p className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-white leading-relaxed">
              "{active?.quote || 'Pinnancle Group engineered an outstanding automation system for our operations.'}"
            </p>

            {/* Author Information */}
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-brand-border">
              <div className="w-12 h-12 rounded-xl bg-brand-dark border border-brand-border flex items-center justify-center font-mono font-bold text-base text-white">
                {active?.client ? active.client.split(' ').map((n) => n[0]).join('') : 'PG'}
              </div>
              <div>
                <h4 className="text-base font-semibold text-white">
                  {active?.client || 'Verified Client'}
                </h4>
                <p className="text-xs text-brand-silver">
                  {active?.role || 'Director'} · <span className="text-white font-medium">{active?.company || 'Enterprise Partner'}</span> ({active?.location || 'UK & Global'})
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
