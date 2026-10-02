import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { caseStudies } from '../data/caseStudiesData';
import MagneticButton from './MagneticButton';

export default function SelectedWork() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section id="work" className="py-28 md:py-36 bg-brand-black text-brand-offWhite relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-brand-border text-brand-silver text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
              Verified Systems Track Record
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-tight">
              Real Systems. <br />
              <span className="text-brand-silver">Real Businesses.</span>
            </h2>
            <p className="text-base sm:text-lg text-brand-silver mt-4 leading-relaxed">
              We have worked with businesses across different industries, building websites, CRM systems, automation workflows, AI systems, and digital solutions.
            </p>
          </div>

          {/* Aggregate Stats Badges */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <div className="px-4 py-2.5 rounded-2xl bg-brand-charcoal border border-brand-border text-center">
              <span className="text-lg font-bold text-white block">50+</span>
              <span className="text-brand-silver">Businesses</span>
            </div>
            <div className="px-4 py-2.5 rounded-2xl bg-brand-charcoal border border-brand-border text-center">
              <span className="text-lg font-bold text-white block">100+</span>
              <span className="text-brand-silver">Projects</span>
            </div>
            <div className="px-4 py-2.5 rounded-2xl bg-brand-charcoal border border-brand-border text-center">
              <span className="text-lg font-bold text-brand-lime block">4.9/5</span>
              <span className="text-brand-silver">Rating</span>
            </div>
          </div>
        </div>

        {/* Large Case Study Compositions (50-70% Viewport Visuals) */}
        <div className="space-y-20">
          {featured.map((study, idx) => (
            <div
              key={study.slug}
              className="rounded-3xl bg-brand-charcoal border border-brand-border p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden group hover:border-brand-borderLight transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Visual Composition (occupying substantial space) */}
                <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[16/10] rounded-2xl bg-brand-dark border border-brand-border flex flex-col justify-between relative overflow-hidden group-hover:border-brand-lime/40 transition-colors shadow-2xl">
                    {study.image ? (
                      <div className="absolute inset-0 z-0">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/95 via-brand-black/40 to-brand-black/70" />
                      </div>
                    ) : null}

                    {/* Top status bar */}
                    <div className="relative z-10 flex items-center justify-between text-[11px] font-mono p-5 pb-3">
                      <span className="px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-white font-semibold">
                        {study.client}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-lime/40 text-brand-lime flex items-center gap-1.5 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                        Live Production
                      </span>
                    </div>

                    {/* Central Diagram / Metric Showcase */}
                    <div className="relative z-10 my-auto py-2 px-5 text-center">
                      <div className="inline-block px-6 py-3.5 rounded-2xl bg-brand-black/85 backdrop-blur-md border border-white/10 shadow-2xl">
                        <span className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight block">
                          {study.results?.[0]?.metric || '100%'}
                        </span>
                        <p className="text-xs font-mono uppercase tracking-wider text-brand-silver mt-1">
                          {study.results?.[0]?.label || 'System Automation'}
                        </p>
                      </div>
                    </div>

                    {/* Bottom technology tags */}
                    <div className="relative z-10 flex flex-wrap gap-1.5 p-5 pt-3">
                      {study.technologies.slice(0, 4).map((tech, i) => (
                        <span key={i} className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-brand-silver">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Narrative & Details */}
                <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/5 text-brand-lime text-xs font-mono border border-brand-border">
                      {study.category}
                    </span>
                    <span className="text-xs font-mono text-brand-silver">
                      {study.industry}
                    </span>
                    {study.projectCost && (
                      <span className="px-2.5 py-0.5 rounded-full bg-brand-dark text-brand-lime text-xs font-mono border border-brand-lime/30 font-semibold">
                        Fee: {study.projectCost}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight">
                    {study.title}
                  </h3>

                  <div className="space-y-3 text-xs sm:text-sm text-brand-silver">
                    <div>
                      <strong className="text-white block font-mono text-[11px] uppercase tracking-wider mb-1">
                        What We Built:
                      </strong>
                      <p className="leading-relaxed">{study.summary}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="p-3 rounded-xl bg-brand-dark border border-brand-border">
                        <span className="text-[10px] font-mono uppercase text-red-400 font-semibold block">The Problem:</span>
                        <p className="text-xs text-brand-silver mt-1">{study.problem.slice(0, 95)}...</p>
                      </div>
                      <div className="p-3 rounded-xl bg-brand-dark border border-brand-border">
                        <span className="text-[10px] font-mono uppercase text-brand-lime font-semibold block">The Result:</span>
                        <p className="text-xs text-white mt-1">
                          {study.results?.[1]?.metric || study.results?.[0]?.metric || 'Verified'} {study.results?.[1]?.label || study.results?.[0]?.label || 'Improvement'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <Link
                      to={`/work/${study.slug}`}
                      data-cursor="project"
                      data-cursor-label="VIEW CASE STUDY"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-brand-lime group/link transition-colors"
                    >
                      <span>View Full Case Study</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Work Button */}
        <div className="mt-16 text-center">
          <MagneticButton to="/work" variant="secondary" size="lg" showArrow={true}>
            See All Client Case Studies
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
