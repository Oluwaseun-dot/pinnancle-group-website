import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, CheckCircle2, ShieldCheck, Layers } from 'lucide-react';
import { caseStudies } from '../data/caseStudiesData';
import MagneticButton from './MagneticButton';

export default function SelectedWork() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section id="work" className="py-24 sm:py-32 md:py-40 bg-brand-black text-brand-offWhite relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-brand-border text-brand-silver text-xs font-mono uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
              Production Case Studies
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-[1.08]">
              Real Systems. <br />
              <span className="text-brand-silver">Real Businesses.</span>
            </h2>
            <p className="text-base sm:text-lg text-brand-silver mt-5 leading-relaxed font-normal">
              A selected showcase of live client automation pipelines, CRM deployments, and digital systems built for expanding companies.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <MagneticButton to="/work" variant="secondary" size="md" showArrow={true}>
              View All Client Case Studies
            </MagneticButton>
          </div>
        </div>

        {/* Editorial Case Study Showcases */}
        <div className="space-y-24 sm:space-y-32">
          {featured.map((study, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={study.slug}
                className="rounded-3xl bg-brand-charcoal border border-brand-border p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden group hover:border-brand-borderLight transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Visual Preview */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : ''}`}>
                    <Link to={`/work/${study.slug}`} className="block relative aspect-[16/10] rounded-2xl overflow-hidden border border-brand-border bg-brand-dark group/img shadow-2xl">
                      {study.image ? (
                        <img
                          src={study.image}
                          alt={study.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover filter contrast-105 group-hover/img:scale-105 transition-all duration-700"
                        />
                      ) : null}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/30" />
                      
                      {/* Top Meta Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                        <span className="px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-white font-medium">
                          {study.client}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-lime/40 text-brand-lime flex items-center gap-1.5 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                          Live Production
                        </span>
                      </div>

                      {/* Bottom Key Metric Floating Strip */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3.5 rounded-xl bg-brand-black/85 backdrop-blur-md border border-white/10 text-xs font-mono">
                        <span className="text-brand-silver">Key Metric</span>
                        <span className="text-brand-lime font-bold font-sans text-sm sm:text-base">
                          {study.results?.[0]?.metric} · {study.results?.[0]?.label}
                        </span>
                      </div>
                    </Link>
                  </div>

                  {/* Narrative Details */}
                  <div className={`lg:col-span-5 space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-2 text-xs font-mono text-brand-silver">
                      <span className="text-brand-lime uppercase tracking-widest">{study.category}</span>
                      <span>·</span>
                      <span>{study.industry}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight leading-tight">
                      <Link to={`/work/${study.slug}`} className="hover:text-brand-lime transition-colors">
                        {study.title}
                      </Link>
                    </h3>

                    <p className="text-sm sm:text-base text-brand-silver leading-relaxed font-normal">
                      {study.summary}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {study.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-brand-dark border border-brand-border text-brand-silver"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA Link */}
                    <div className="pt-4 border-t border-brand-border flex items-center justify-between">
                      {study.projectCost && (
                        <div className="text-xs font-mono text-brand-silver">
                          Investment: <span className="text-white font-medium">{study.maintenance ? `${study.projectCost} · ${study.maintenance}` : study.projectCost}</span>
                        </div>
                      )}
                      <Link
                        to={`/work/${study.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-mono font-medium text-white hover:text-brand-lime transition-colors group/link"
                      >
                        <span>Explore Full Architecture</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
