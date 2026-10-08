import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
import { caseStudies } from '../data/caseStudiesData';
import MagneticButton from '../components/MagneticButton';

export default function WorkPage() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  useEffect(() => {
    document.title = 'Selected Work & Case Studies | Pinnancle Group';
  }, []);

  const filterOptions = [
    'All',
    'AI Automation',
    'Shopify Automation',
    'CRM',
    'Websites',
    'Ecommerce',
    'Business Automation',
    'Creative Technology'
  ];

  const filteredProjects = caseStudies.filter((study) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Shopify Automation') return study.category.includes('Shopify') || study.technologies.some(t => t.toLowerCase().includes('shopify'));
    if (selectedFilter === 'CRM') return study.category.includes('CRM') || study.technologies.some(t => t.includes('CRM') || t.includes('Airtable') || t.includes('GoHighLevel'));
    if (selectedFilter === 'Ecommerce') return study.category.includes('Ecommerce') || study.category.includes('Shopify');
    if (selectedFilter === 'Business Automation') return study.category.includes('Workflow') || study.category.includes('Automation') || study.category.includes('API');
    if (selectedFilter === 'Creative Technology') return study.category.includes('Content') || study.category.includes('Video');
    if (selectedFilter === 'AI Automation') return study.category.includes('AI') || study.category.includes('Automation');
    return true;
  });

  return (
    <div className="pt-32 pb-24 bg-brand-black text-brand-offWhite min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
            Production Track Record
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-white mt-3 leading-tight">
            Real Systems. <br />
            <span className="text-brand-silver">Real Businesses.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-silver mt-6 leading-relaxed">
            We have worked with businesses across different industries, building websites, CRM systems, automation workflows, AI systems, and digital solutions.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-14 no-scrollbar">
          {filterOptions.map((opt) => {
            const isSelected = selectedFilter === opt;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => setSelectedFilter(opt)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-200 border whitespace-nowrap ${
                  isSelected
                    ? 'bg-brand-charcoal text-white border-brand-lime shadow-lime-glow-sm'
                    : 'bg-brand-dark border-brand-border text-brand-silver hover:text-white hover:border-brand-borderLight'
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="rounded-3xl bg-brand-charcoal border border-brand-border p-6 sm:p-8 flex flex-col justify-between group hover:border-brand-borderLight transition-all duration-300 relative overflow-hidden shadow-2xl"
            >
              <div>
                {/* Project Visual Frame */}
                {project.image && (
                  <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 border border-brand-border bg-brand-dark group-hover:border-brand-lime/30 transition-colors">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/30" />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-[10px] font-mono text-brand-silver">
                      {project.client}
                    </div>
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-lime/40 text-[10px] font-mono text-brand-lime flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                      {project.results?.[0]?.metric}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-brand-lime uppercase tracking-wider font-semibold">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.projectCost && (
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-brand-dark border border-brand-lime/40 text-brand-lime font-semibold">
                        {project.maintenance ? `${project.projectCost} · ${project.maintenance}` : project.projectCost}
                      </span>
                    )}
                    <span className="text-[11px] font-mono text-brand-silver">
                      {project.industry}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight group-hover:text-brand-lime transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-brand-silver mt-1">
                  Client: <span className="text-white font-medium">{project.client}</span>
                </p>

                <p className="text-sm text-brand-silver mt-4 leading-relaxed line-clamp-3">
                  {project.summary}
                </p>

                {/* Metrics Highlight Pills */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {project.results.slice(0, 2).map((res, i) => (
                    <div key={i} className="p-3 rounded-xl bg-brand-dark border border-brand-border">
                      <p className="text-xl font-display font-bold text-white tracking-tight">
                        {res.metric}
                      </p>
                      <p className="text-[11px] text-brand-silver font-medium">
                        {res.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & CTA link */}
              <div className="pt-6 mt-8 border-t border-brand-border flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5 max-w-[60%]">
                  {project.technologies.slice(0, 3).map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-dark border border-brand-border text-brand-silver">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/work/${project.slug}`}
                  data-cursor="project"
                  data-cursor-label="VIEW CASE STUDY"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-white hover:text-brand-lime transition-colors group/btn"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Audit Callout */}
        <div className="mt-20 p-10 rounded-3xl bg-brand-charcoal border border-brand-border text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-display font-bold text-white">
            Have a project or operational challenge?
          </h3>
          <p className="text-sm text-brand-silver">
            Tell us about your tools and goals. We'll produce a complimentary architecture blueprint for your business.
          </p>
          <div className="pt-2 flex justify-center">
            <MagneticButton to="/book" variant="primary" size="md" showArrow={true}>
              Book a Systems Audit
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
}
