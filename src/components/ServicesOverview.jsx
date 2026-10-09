import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Workflow, Database, Monitor, FileText, Video, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';

const servicesSummary = [
  {
    id: 'ai-automation',
    num: '01',
    name: 'AI Automation',
    tag: 'Flagship Capability',
    icon: Bot,
    description:
      'Autonomous AI phone receptionists, WhatsApp assistants, and website chat agents that respond in under 15 seconds, qualify leads, and book appointments directly on your calendar 24/7.',
    highlights: ['24/7 Instant Customer Response', 'AI Voice & WhatsApp Agents', 'Direct Calendar Booking Sync']
  },
  {
    id: 'business-automation',
    num: '02',
    name: 'Business Automation',
    tag: 'Operational Efficiency',
    icon: Workflow,
    description:
      'Resilient Make.com and n8n backend workflows that connect your forms, spreadsheets, and software tools to eliminate repetitive manual data entry and save 20+ hours per employee each week.',
    highlights: ['Multi-Step Webhook Workflows', 'Cross-Platform Data Sync', 'Automated Notifications & Docs']
  },
  {
    id: 'crm-automation',
    num: '03',
    name: 'CRM Automation',
    tag: 'Sales Pipeline Architecture',
    icon: Database,
    description:
      'Complete GoHighLevel and HubSpot CRM deployments with automated deal pipelines, missed-call text-back, SMS follow-ups, and customer lifecycle management that stop leads from slipping away.',
    highlights: ['GoHighLevel & HubSpot Setups', 'Automated Deal Pipelines', 'Missed-Call Instant Text-Back']
  },
  {
    id: 'website-design',
    num: '04',
    name: 'Website Design',
    tag: 'Digital Conversion Architecture',
    icon: Monitor,
    description:
      'Modern, high-speed, conversion-focused websites engineered with React and modern web technologies to position your brand as an industry leader and turn site traffic into paying clients.',
    highlights: ['Bespoke Aesthetic & Performance', 'Mobile-First Responsive Layouts', 'Integrated Lead Capture']
  },
  {
    id: 'tender-support',
    num: '05',
    name: 'Tender Support',
    tag: 'Commercial Procurement',
    icon: FileText,
    description:
      'Professional bid writing, technical documentation, compliance matrices, and presentation decks that help expanding companies win competitive commercial and government tenders.',
    highlights: ['Compliant Proposal Writing', 'Executive Bid Architecture', 'Proven High-Value Win Rates']
  },
  {
    id: 'creative-media',
    num: '06',
    name: 'Creative & AI Media',
    tag: 'Brand Production',
    icon: Video,
    description:
      'Studio-grade commercial media, AI-augmented video production, and high-converting creative assets that tell your company’s story with clarity and command market attention.',
    highlights: ['Cinematic Brand Media', 'Automated Social Video Engines', 'Creative Direction & Graphics']
  }
];

export default function ServicesOverview() {
  return (
    <section id="services-overview" className="py-20 sm:py-28 md:py-36 bg-brand-black text-brand-offWhite relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-brand-border text-brand-silver text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-[1.08]">
              What We Do.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-brand-silver mt-4 leading-relaxed font-normal">
              We design and deploy autonomous AI systems, business automations, enterprise CRMs, and high-performance websites that keep companies organized and operating at speed.
            </p>
          </div>

          <div className="flex items-center">
            <MagneticButton to="/services" variant="secondary" size="md" showArrow={true}>
              Explore Detailed Specifications
            </MagneticButton>
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesSummary.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-brand-charcoal border border-brand-border hover:border-brand-borderLight transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                {/* Accent Top Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-lime to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-brand-silver/60">
                      {srv.num} · {srv.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-brand-dark border border-brand-border flex items-center justify-center text-brand-silver group-hover:text-brand-lime group-hover:border-brand-lime/50 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight group-hover:text-brand-lime transition-colors mb-3">
                    <Link to={`/services#${srv.id}`}>
                      {srv.name}
                    </Link>
                  </h3>

                  {/* Short 1-2 sentence description */}
                  <p className="text-xs sm:text-sm text-brand-silver leading-relaxed font-normal mb-6">
                    {srv.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 pb-6 border-b border-brand-border/80">
                    {srv.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-brand-silver">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="pt-4 flex items-center justify-between">
                  <Link
                    to={`/services#${srv.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-white group-hover:text-brand-lime transition-colors"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-brand-charcoal/60 border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-bold text-white text-base sm:text-lg">
              Not sure which system your business needs?
            </h4>
            <p className="text-xs sm:text-sm text-brand-silver">
              Take our interactive assessment or calculate how many hours your team could save each week.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/automation-assessment"
              className="px-4 py-2 rounded-full bg-brand-dark hover:bg-brand-card border border-brand-border hover:border-brand-lime text-xs font-mono text-white hover:text-brand-lime transition-all"
            >
              Take Assessment →
            </Link>
            <Link
              to="/automation-demo"
              className="px-4 py-2 rounded-full bg-white text-black hover:bg-brand-lime font-mono text-xs font-semibold transition-all"
            >
              See Live Demo →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
