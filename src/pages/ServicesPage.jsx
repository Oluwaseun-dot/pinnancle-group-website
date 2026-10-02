import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import MagneticButton from '../components/MagneticButton';

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Services & Systems | Pinnancle Group';
  }, []);

  return (
    <div className="pt-32 pb-24 bg-brand-black text-brand-offWhite min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
            What We Do
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-white mt-3 leading-tight">
            Systems Built Around <br />
            <span className="text-brand-silver">Your Business Reality.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-silver mt-6 leading-relaxed">
            We combine AI, automation, websites, CRM systems, and business services to help companies work better. Explore our six core practice areas below.
          </p>
        </div>

        {/* 6 Core Practice Areas */}
        <div className="space-y-24">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              id={service.id}
              className="rounded-3xl bg-brand-charcoal border border-brand-border p-8 sm:p-12 shadow-2xl relative"
            >
              {/* Top Meta */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-brand-border">
                <span className="text-xs font-mono text-brand-lime uppercase tracking-widest font-semibold">
                  {service.badge}
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-brand-dark border border-brand-border text-brand-silver text-xs font-mono">
                  {service.highlightMetric}
                </span>
              </div>

              {/* Title & Description */}
              <div className="mt-8 max-w-3xl">
                <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
                  {service.name}
                </h2>
                <p className="text-base text-brand-silver mt-2 font-mono">
                  {service.tagline}
                </p>
                <p className="text-base sm:text-lg text-brand-silver mt-4 leading-relaxed">
                  {service.description}
                </p>
                {service.statement && (
                  <div className="p-4 rounded-xl bg-brand-dark border border-brand-border mt-4 text-xs font-mono text-brand-lime italic">
                    "{service.statement}"
                  </div>
                )}
                {service.platforms && (
                  <p className="text-xs font-mono text-brand-silver mt-3">
                    Platforms: <span className="text-white">{service.platforms}</span>
                  </p>
                )}
              </div>

              {/* Workflow Breakdown */}
              <div className="my-10 p-6 sm:p-8 rounded-2xl bg-brand-dark border border-brand-border">
                <p className="text-xs font-mono uppercase tracking-widest text-brand-silver mb-4">
                  Standard Implementation Workflow
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {service.workflowSteps.map((wf, i) => (
                    <div key={i} className="space-y-1.5">
                      <span className="text-sm font-mono font-bold text-brand-lime">
                        Phase {wf.step}
                      </span>
                      <h4 className="text-base font-semibold text-white">{wf.title}</h4>
                      <p className="text-xs text-brand-silver leading-relaxed">{wf.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Specific Services */}
              <div className="space-y-4">
                <p className="text-xs font-mono uppercase tracking-widest text-brand-silver">
                  What We Deliver in This Practice Area:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.services.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-brand-dark border border-brand-border hover:border-brand-borderLight transition-colors"
                    >
                      <div className="flex items-center gap-2 text-white font-medium text-sm">
                        <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0" />
                        <span>{item.name}</span>
                      </div>
                      <p className="text-xs text-brand-silver mt-1.5 pl-6 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-10 pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-brand-silver font-mono">
                  Custom engineered around your existing tools.
                </span>
                <MagneticButton
                  to="/book"
                  variant="primary"
                  size="md"
                  showArrow={true}
                >
                  Schedule {service.name} Consultation
                </MagneticButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
