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
    image: '/images/ai-agent-interface.jpg',
    imageAlt: 'Realistic AI Autonomous Voice and Chat Assistant Interface',
    description:
      'Autonomous AI phone receptionists, WhatsApp assistants, and website chat agents that respond in seconds, qualify leads, and book appointments directly on your calendar 24/7.',
    highlights: ['24/7 Voice & Chat Agents', 'Lead Qualification & CRM Sync', 'Direct Calendar Booking']
  },
  {
    id: 'business-automation',
    num: '02',
    name: 'Business Automation',
    tag: 'Operational Efficiency',
    icon: Workflow,
    image: '/images/business-automation-workflow.jpg',
    imageAlt: 'Business Workflow Automation Pipeline and Webhook Integration',
    description:
      'Resilient Make.com and n8n backend workflows that connect your forms, spreadsheets, and software tools to eliminate repetitive manual data entry and save hours of staff time.',
    highlights: ['Multi-Step Webhook Scenarios', 'Cross-Platform Data Sync', 'Automated Notifications & Docs']
  },
  {
    id: 'crm-automation',
    num: '03',
    name: 'CRM Automation',
    tag: 'Sales Pipeline Architecture',
    icon: Database,
    image: '/images/crm-pipeline-dashboard.jpg',
    imageAlt: 'Realistic CRM Sales Pipeline and Contact Management Dashboard',
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
    image: '/images/website-design-showcase.jpg',
    imageAlt: 'High-Performance Responsive Website Across Desktop and Mobile Devices',
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
    image: '/images/tender-support-procurement.jpg',
    imageAlt: 'Professional Tender Documentation and Procurement Review Scene',
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
    image: '/images/creative-ai-media-studio.jpg',
    imageAlt: 'Modern Creative Media Video Editing and Dynamic AI Content Studio',
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

          <div className="flex flex-col sm:items-end gap-2.5">
            <MagneticButton to="/services#pricing" variant="primary" size="md" showArrow={true}>
              View All Services & Pricing
            </MagneticButton>
            <p className="text-xs text-brand-silver sm:text-right max-w-xs leading-relaxed">
              Explore our services, compare packages, and find the right solution for your business.
            </p>
          </div>
        </div>

        {/* 6 Services Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesSummary.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="rounded-2xl sm:rounded-3xl bg-brand-charcoal border border-brand-border hover:border-brand-borderLight transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                {/* Accent Top Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-lime to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                <div>
                  {/* Service Image Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-brand-dark border-b border-brand-border">
                    <img
                      src={srv.image}
                      alt={srv.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-brand-black/30" />
                    
                    {/* Top Bar with Number & Icon Badge over Image */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-[10px] font-mono uppercase tracking-widest text-brand-silver">
                        {srv.num} · {srv.tag}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-brand-black/85 backdrop-blur-md border border-brand-border flex items-center justify-center text-brand-silver group-hover:text-brand-lime transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 sm:p-7 pb-4">
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight group-hover:text-brand-lime transition-colors mb-3">
                      <Link to={`/services#${srv.id}`}>
                        {srv.name}
                      </Link>
                    </h3>

                    {/* Short 1-2 sentence description */}
                    <p className="text-xs sm:text-sm text-brand-silver leading-relaxed font-normal mb-5">
                      {srv.description}
                    </p>

                    {/* Highlights list */}
                    <div className="space-y-2 pb-5 border-b border-brand-border/70">
                      {srv.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-brand-silver">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="px-6 sm:px-7 pb-6 pt-2 flex items-center justify-between gap-2">
                  <Link
                    to={`/services#${srv.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-white group-hover:text-brand-lime transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to={`/services?category=${srv.id}#pricing`}
                    className="text-[11px] font-mono text-brand-lime hover:underline shrink-0"
                  >
                    Packages from $650 →
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
              Want to see transparent investment packages for each service?
            </h4>
            <p className="text-xs sm:text-sm text-brand-silver">
              Every service offers four distinct tiers: Basic ($650), Standard ($1,500), Pro ($3,500), and Custom.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/services#pricing"
              className="px-5 py-2.5 rounded-full bg-brand-lime text-black font-mono text-xs font-semibold hover:bg-brand-lime/90 transition-all shadow-lime-glow-sm"
            >
              View All Services & Pricing →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
