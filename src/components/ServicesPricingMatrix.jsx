import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Bot,
  Workflow,
  Database,
  Layout,
  FileText,
  Palette,
  Check,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  Zap,
  Info
} from 'lucide-react';
import { servicesPricingData } from '../data/servicesPricingData';
import MagneticButton from './MagneticButton';

const serviceIcons = {
  'ai-automation': Bot,
  'business-automation': Workflow,
  'crm-automation': Database,
  'website-design': Layout,
  'tender-support': FileText,
  'creative-media': Palette
};

export default function ServicesPricingMatrix({ defaultServiceId = 'ai-automation' }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryCategory = searchParams.get('category') || searchParams.get('service');

  const [selectedServiceId, setSelectedServiceId] = useState(() => {
    if (queryCategory && servicesPricingData.some((s) => s.id === queryCategory)) {
      return queryCategory;
    }
    return defaultServiceId;
  });

  useEffect(() => {
    if (queryCategory && servicesPricingData.some((s) => s.id === queryCategory)) {
      setSelectedServiceId(queryCategory);
    }
  }, [queryCategory]);

  const activeService =
    servicesPricingData.find((s) => s.id === selectedServiceId) || servicesPricingData[0];

  const handleSelectService = (id) => {
    setSelectedServiceId(id);
    // Optionally update search parameter without full page reload
    const newParams = new URLSearchParams(searchParams);
    newParams.set('category', id);
    setSearchParams(newParams, { replace: true });
  };

  return (
    <section id="pricing" className="scroll-mt-24 space-y-10">
      {/* Section Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-brand-lime text-xs font-mono uppercase tracking-widest font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Transparent Investment Packages
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-tight">
          Service Packages & <br />
          <span className="text-brand-silver">Starting Pricing.</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-brand-silver mt-4 leading-relaxed font-normal">
          Every business has different requirements. We offer four clear tiers for each of our core practices so you can begin with a focused deployment or scale into an enterprise-grade autonomous system.
        </p>
      </div>

      {/* Service Category Navigation Tabs */}
      <div className="space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-brand-silver/70 block">
          Select Service Category:
        </span>
        <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 no-scrollbar">
          {servicesPricingData.map((service) => {
            const Icon = serviceIcons[service.id] || Bot;
            const isSelected = service.id === activeService.id;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => handleSelectService(service.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono font-medium transition-all duration-200 shrink-0 border ${
                  isSelected
                    ? 'bg-brand-charcoal text-white border-brand-lime shadow-lime-glow-sm'
                    : 'bg-brand-dark border-brand-border text-brand-silver hover:text-white hover:border-brand-borderLight'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-brand-lime' : 'text-brand-silver'}`} />
                <span>{service.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-brand-lime/20 text-brand-lime' : 'bg-white/5 text-brand-silver/60'
                  }`}
                >
                  from $650
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Service Headline Banner */}
      <div className="p-5 sm:p-6 rounded-2xl bg-brand-charcoal/80 border border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-brand-lime font-semibold">
              {activeService.badge}
            </span>
            <span className="text-brand-silver/40 text-xs">·</span>
            <span className="text-xs font-mono text-brand-silver">4 Package Tiers Available</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
            {activeService.name} Packages
          </h3>
          <p className="text-xs sm:text-sm text-brand-silver max-w-2xl">
            {activeService.description}
          </p>
        </div>

        <div className="shrink-0">
          <a
            href={`#${activeService.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-silver hover:text-white transition-colors"
          >
            <span>Read full {activeService.name} specs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* 4 Tier Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {activeService.tiers.map((tier) => {
          const isPopular = tier.popular;
          const isCustom = tier.id === 'custom';

          const bookUrl = isCustom
            ? `/contact?service=${activeService.id}&package=${tier.id}`
            : `/book?service=${activeService.id}&package=${tier.id}`;

          return (
            <div
              key={tier.id}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative shadow-2xl ${
                isPopular
                  ? 'bg-brand-charcoal border-2 border-brand-lime/80 shadow-lime-glow-sm relative'
                  : 'bg-brand-charcoal/90 border border-brand-border hover:border-brand-borderLight'
              }`}
            >
              {/* Most Popular Highlight Tag */}
              {isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-brand-lime text-black font-mono text-[10px] font-bold uppercase tracking-wider shadow-md">
                  Most Popular Choice
                </div>
              )}

              <div>
                {/* Header Strip */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[11px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full ${
                      isPopular
                        ? 'bg-brand-lime/15 text-brand-lime border border-brand-lime/30'
                        : 'bg-brand-dark text-brand-silver border border-brand-border'
                    }`}
                  >
                    {tier.badge}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-brand-silver/70">
                    <Clock className="w-3 h-3 text-brand-lime" />
                    <span>{tier.turnaround}</span>
                  </div>
                </div>

                {/* Tier Name & Tagline */}
                <h4 className="text-2xl font-display font-bold text-white tracking-tight">
                  {tier.name}
                </h4>
                <p className="text-xs font-mono text-brand-lime mt-1 font-medium leading-snug">
                  {tier.tagline}
                </p>

                {/* Price Display */}
                <div className="mt-5 pb-5 border-b border-brand-border/80">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                      {tier.startingPrice}
                    </span>
                    {!isCustom && (
                      <span className="text-xs font-mono text-brand-silver/60">USD</span>
                    )}
                  </div>
                  <p className="text-[11px] font-mono text-brand-silver mt-1">
                    {tier.billingNote}
                  </p>
                </div>

                {/* Summary / Who this is for */}
                <p className="text-xs text-brand-silver mt-4 leading-relaxed font-normal">
                  {tier.summary}
                </p>

                {/* Deliverables List */}
                <div className="mt-6 space-y-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-silver/70 block">
                    What's Included:
                  </span>
                  {tier.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-brand-offWhite">
                      <Check className="w-3.5 h-3.5 text-brand-lime shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal For Callout */}
                <div className="mt-6 p-3 rounded-xl bg-brand-dark/80 border border-brand-border/70 text-[11px] text-brand-silver leading-relaxed">
                  <strong className="text-white block font-mono text-[10px] uppercase tracking-wider mb-0.5">
                    Best Suited For:
                  </strong>
                  {tier.idealFor}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-brand-border/60">
                <Link
                  to={bookUrl}
                  className={`w-full py-3 px-4 rounded-full text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all ${
                    isPopular
                      ? 'bg-brand-lime text-black hover:bg-brand-lime/90 shadow-lime-glow-sm'
                      : isCustom
                      ? 'bg-white text-black hover:bg-brand-lime hover:text-black'
                      : 'bg-brand-dark text-white border border-brand-border hover:border-brand-lime hover:text-brand-lime'
                  }`}
                >
                  <span>
                    {tier.id === 'basic' && 'Choose Basic'}
                    {tier.id === 'standard' && 'Choose Standard'}
                    {tier.id === 'pro' && 'Choose Pro'}
                    {tier.id === 'custom' && 'Request Custom Quote'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Transparent Governance & Scope Disclaimer */}
      <div className="p-6 sm:p-8 rounded-2xl bg-brand-dark border border-brand-border/80 flex flex-col md:flex-row items-start gap-5">
        <div className="w-10 h-10 rounded-xl bg-brand-charcoal border border-brand-border flex items-center justify-center text-brand-lime shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="space-y-2 text-xs text-brand-silver leading-relaxed">
          <h5 className="font-display font-bold text-white text-sm">
            Scope Clarity, Third-Party Tools & Pricing Governance
          </h5>
          <p>
            • <strong className="text-white">Starting Investments:</strong> Listed package prices represent standard starting investments for defined project architectures. Final project cost is confirmed in writing after reviewing your specific workflow complexity, custom API endpoints, and historical data volume.
          </p>
          <p>
            • <strong className="text-white">No Hidden Platform Markups:</strong> Third-party platform subscriptions (e.g. OpenAI tokens, Twilio phone numbers, Make.com operations, GoHighLevel licenses, domain and hosting fees) are paid directly to the service providers with zero agency markup.
          </p>
          <p>
            • <strong className="text-white">Optional Ongoing Maintenance:</strong> All standard packages include post-deployment monitoring and handover documentation. Ongoing monthly maintenance and SLA support retainers (from $350/mo) are optional and never forced upon clients.
          </p>
        </div>
      </div>
    </section>
  );
}
