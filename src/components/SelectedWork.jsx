import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { caseStudies } from '../data/caseStudiesData';
import MagneticButton from './MagneticButton';

const conciseCardDescriptions = {
  'ai-voice-to-email-agent':
    'An AI-powered workflow that converts voice messages into structured email drafts with recipient checks and controlled delivery.',
  'shopify-product-content-mapping':
    'Automated Shopify product data transfer into Airtable, giving the client a more organized content management workflow.',
  'shopify-product-to-social-automation':
    'An automated content system that turns Shopify product data into social-ready content and connects the publishing workflow.'
};

export default function SelectedWork() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section id="work" className="py-20 sm:py-28 md:py-36 bg-brand-black text-brand-offWhite relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-brand-border text-brand-silver text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
              Selected Client Systems
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-[1.08]">
              Real Systems. <br />
              <span className="text-brand-silver">Real Businesses.</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-brand-silver mt-4 leading-relaxed font-normal">
              A selected showcase of live client automation pipelines, CRM deployments, and digital systems built for expanding companies.
            </p>
          </div>

          <div className="flex items-center">
            <MagneticButton to="/work" variant="secondary" size="md" showArrow={true}>
              View All Case Studies
            </MagneticButton>
          </div>
        </div>

        {/* Editorial Case Study Showcases */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {featured.map((study, idx) => {
            const isReversed = idx % 2 === 1;
            const description =
              conciseCardDescriptions[study.slug] ||
              study.subtitle ||
              study.summary?.split('.')[0] + '.';

            return (
              <div
                key={study.slug}
                className="rounded-2xl sm:rounded-3xl bg-brand-charcoal border border-brand-border p-5 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden group hover:border-brand-borderLight transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
                  {/* Visual Preview (Always First on Mobile) */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : ''}`}>
                    <Link
                      to={`/work/${study.slug}`}
                      className="block relative aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden border border-brand-border bg-brand-dark group/img shadow-xl"
                      aria-label={`View case study: ${study.title}`}
                    >
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
                      <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between text-[11px] sm:text-xs font-mono">
                        <span className="px-2.5 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-white font-medium">
                          {study.client}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-lime/40 text-brand-lime flex items-center gap-1.5 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                          Live Production
                        </span>
                      </div>

                      {/* Bottom Key Metric Floating Strip (Only where genuine metric is available) */}
                      {study.results?.[0] && (
                        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between p-3 rounded-xl bg-brand-black/90 backdrop-blur-md border border-white/10 text-xs font-mono">
                          <span className="text-brand-silver">Key Metric</span>
                          <span className="text-brand-lime font-bold font-sans text-xs sm:text-sm">
                            {study.results[0].metric} · {study.results[0].label}
                          </span>
                        </div>
                      )}
                    </Link>
                  </div>

                  {/* Narrative Details */}
                  <div className={`lg:col-span-5 space-y-4 sm:space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                    {/* Category & Industry Labels */}
                    <div className="flex items-center gap-2 text-xs font-mono text-brand-silver">
                      <span className="text-brand-lime uppercase tracking-widest font-medium">{study.category}</span>
                      <span>·</span>
                      <span className="text-brand-silver/90">{study.industry}</span>
                    </div>

                    {/* Clear Project Title */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white tracking-tight leading-snug">
                      <Link to={`/work/${study.slug}`} className="hover:text-brand-lime transition-colors">
                        {study.title}
                      </Link>
                    </h3>

                    {/* Concise 1-2 sentence description */}
                    <p className="text-sm sm:text-base text-brand-silver leading-relaxed font-normal">
                      {description}
                    </p>

                    {/* Footer / CTA Action */}
                    <div className="pt-3 sm:pt-4 border-t border-brand-border/80 flex flex-wrap items-center justify-between gap-3">
                      {study.projectCost && (
                        <div className="text-xs font-mono text-brand-silver">
                          Scope: <span className="text-white font-medium">{study.projectCost}</span>
                        </div>
                      )}

                      <Link
                        to={`/work/${study.slug}`}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-medium text-white hover:text-brand-lime transition-colors group/link ml-auto"
                      >
                        <span>View Case Study</span>
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
