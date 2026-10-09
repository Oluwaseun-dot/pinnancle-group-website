import React, { useState, useId } from 'react';
import { Star, ShieldCheck, ChevronLeft, ChevronRight, ArrowRight, Quote, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { testimonialsData, clientLogos } from '../data/testimonialsData';
import MagneticButton from './MagneticButton';

const categories = [
  'All',
  'AI Automation',
  'CRM Automation',
  'Business Automation',
  'Website Design',
  'Tender Support',
  'Creative & AI Media'
];

export default function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [pageIndex, setPageIndex] = useState(0);

  // Filter approved testimonials
  const filteredTestimonials = testimonialsData.filter((item) => {
    if (item.status && item.status !== 'approved') return false;
    if (activeCategory === 'All') return true;
    return item.serviceCategory === activeCategory;
  });

  const cardsPerPage = 3;
  const totalPages = Math.ceil(filteredTestimonials.length / cardsPerPage);

  const currentPage = Math.min(pageIndex, Math.max(0, totalPages - 1));
  const visibleTestimonials = filteredTestimonials.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  const handlePrev = () => {
    setPageIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setPageIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const handleSelectCategory = (cat) => {
    setActiveCategory(cat);
    setPageIndex(0);
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 md:py-36 bg-brand-black text-brand-offWhite relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-brand-border text-brand-lime text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
              Verified Client Outcomes
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-[1.08]">
              Trusted by Businesses <br />
              <span className="text-brand-silver">Ready to Grow.</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-brand-silver mt-4 leading-relaxed font-normal">
              Discover what clients value about working with Pinnacle Group, from practical automation solutions to better digital experiences and more organized business processes.
            </p>
          </div>

          {/* Navigation Controls */}
          {totalPages > 1 && (
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-brand-charcoal hover:bg-brand-dark border border-brand-border hover:border-brand-lime/50 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-1 focus:ring-brand-lime"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-brand-silver px-2">
                0{currentPage + 1} / 0{totalPages}
              </span>
              <button
                type="button"
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-brand-charcoal hover:bg-brand-dark border border-brand-border hover:border-brand-lime/50 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-1 focus:ring-brand-lime"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            const count =
              cat === 'All'
                ? testimonialsData.length
                : testimonialsData.filter((t) => t.serviceCategory === cat).length;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleSelectCategory(cat)}
                className={`px-3.5 py-2 rounded-full text-xs font-mono font-medium transition-all duration-200 shrink-0 border ${
                  isSelected
                    ? 'bg-brand-charcoal text-white border-brand-lime shadow-lime-glow-sm'
                    : 'bg-brand-dark border-brand-border text-brand-silver hover:text-white hover:border-brand-borderLight'
                }`}
              >
                <span>{cat}</span>
                <span className="ml-1.5 opacity-60 text-[10px]">({count})</span>
              </button>
            );
          })}
        </div>

        {/* 3-Column Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {visibleTestimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl sm:rounded-3xl bg-brand-charcoal border border-brand-border p-6 sm:p-8 flex flex-col justify-between group hover:border-brand-borderLight transition-all duration-300 shadow-xl relative overflow-hidden"
            >
              {/* Subtle Lime Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-lime/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header: Rating & Tag */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-brand-lime text-brand-lime" />
                    ))}
                    <span className="text-xs font-mono text-white ml-1 font-semibold">
                      {item.rating.toFixed(1)}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-dark border border-brand-border text-[10px] font-mono text-brand-silver truncate max-w-[150px]">
                    {item.projectType}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-brand-offWhite leading-relaxed font-normal mb-6 relative">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Attribution Footer */}
              <div className="pt-5 border-t border-brand-border/70 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  {/* Clean Typographic Avatar */}
                  <div className="w-10 h-10 rounded-xl bg-brand-dark border border-brand-border flex items-center justify-center font-mono font-bold text-xs text-brand-lime shrink-0">
                    {item.initials || (item.client ? item.client.split(' ').map((n) => n[0]).join('') : 'PG')}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-semibold text-white truncate">
                      {item.client}
                    </h4>
                    <p className="text-[11px] text-brand-silver truncate leading-tight">
                      {item.role}
                    </p>
                    <p className="text-[10px] font-mono text-brand-silver/70 truncate">
                      {item.company}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-1 text-[10px] font-mono text-brand-lime/90 px-2 py-0.5 rounded bg-brand-lime/10 border border-brand-lime/20">
                  <ShieldCheck className="w-3 h-3 text-brand-lime shrink-0" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Strip */}
        <div className="mt-14 pt-10 border-t border-brand-border/60">
          <span className="text-[11px] font-mono uppercase tracking-widest text-brand-silver/60 block text-center mb-6">
            Trusted by Commercial Operators, Professional Clinics & Growing Enterprises
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 opacity-75">
            {clientLogos.map((org, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-xl bg-brand-charcoal/60 border border-brand-border text-xs font-mono text-brand-silver flex items-center gap-2 hover:border-brand-borderLight transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-lime/60" />
                <span className="text-white font-medium">{org.name}</span>
                <span className="text-[10px] text-brand-silver/60 hidden sm:inline">· {org.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner with Action Button */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-brand-charcoal/80 border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-bold text-white text-base sm:text-lg">
              Have a similar operational bottleneck in your business?
            </h4>
            <p className="text-xs sm:text-sm text-brand-silver">
              Speak with our senior systems team for a direct, confidential 30-minute discovery consultation.
            </p>
          </div>
          <div className="shrink-0">
            <MagneticButton to="/book" variant="primary" size="md" showArrow={true}>
              Discuss Your Project With Our Team
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
