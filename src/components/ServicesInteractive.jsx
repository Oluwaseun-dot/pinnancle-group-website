import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Bot, Workflow, Database, Monitor, FileText, Video, Sparkles, Layers } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import MagneticButton from './MagneticButton';

export default function ServicesInteractive() {
  const [aiAuto, bizAuto, crmAuto, webDesign, tenderSupport, creativeMedia] = servicesData;

  return (
    <section id="services" className="py-28 md:py-36 bg-brand-black text-brand-offWhite relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-24">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-brand-border text-brand-silver text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            Core Practice Areas
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-white leading-tight">
            What We Do.
          </h2>
          <p className="text-lg md:text-xl text-brand-silver mt-6 leading-relaxed">
            We combine AI, automation, websites, CRM systems, and business services to help companies work better.
          </p>
        </div>

        {/* Alternating Editorial Layouts */}
        <div className="space-y-36">
          {/* ========================================================
              01. AI AUTOMATION (The BIGGEST Service Category)
             ======================================================== */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Heading & Explanation */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
                  01 / Primary Capability
                </span>
                <h3 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                  {aiAuto.name}
                </h3>
                <p className="text-base sm:text-lg text-brand-silver leading-relaxed">
                  {aiAuto.description}
                </p>
                <div className="pt-2">
                  <MagneticButton to="/book" variant="primary" size="md" showArrow={true}>
                    {aiAuto.cta}
                  </MagneticButton>
                </div>
              </div>

              {/* Right Column: High-Grade AI Live Assistant Visual */}
              <div className="lg:col-span-6">
                <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                  {/* Visual Interface Preview */}
                  <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-brand-border bg-brand-dark mb-6 group">
                    <img
                      src="/images/ai-agent-interface.jpg"
                      alt="AI Agent Decision Architecture"
                      className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/30" />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-[10px] font-mono text-brand-silver">
                      Autonomous Decision Tree
                    </div>
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-lime/40 text-[10px] font-mono text-brand-lime flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
                      Sentiment & Intent Triage Active
                    </div>
                  </div>

                  <div className="flex items-center justify-between pb-4 border-b border-brand-border text-xs font-mono text-brand-silver">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                      AI Receptionist & Voice Engine Active
                    </span>
                    <span>24/7 Availability</span>
                  </div>

                  {/* Simulated Live Dialogue & Action */}
                  <div className="space-y-3.5 my-6 text-xs sm:text-sm font-sans">
                    <div className="p-3.5 rounded-2xl bg-brand-card border border-brand-border text-brand-silver max-w-[85%]">
                      "Hello! I am looking for dental implant consultation availability this Thursday afternoon."
                    </div>
                    <div className="p-3.5 rounded-2xl bg-white text-black font-medium max-w-[85%] ml-auto border border-white">
                      "Certainly! We have 2:30 PM and 4:15 PM open with Dr. Al-Mansoor on Thursday. Shall I lock in 2:30 PM for you right now?"
                    </div>
                    <div className="p-3.5 rounded-2xl bg-brand-card border border-brand-border text-brand-silver max-w-[85%]">
                      "Yes please, 2:30 PM works perfectly."
                    </div>
                    <div className="p-3 rounded-xl bg-brand-dark border border-brand-lime/40 text-brand-lime flex items-center justify-between font-mono text-xs">
                      <span>✓ Appointment Synced to CRM Calendar</span>
                      <span>14:30 BST Confirmed</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-brand-border text-[11px] font-mono text-brand-silver">
                    <span>Average Response: &lt; 15 seconds</span>
                    <span className="text-white">Direct Calendar Locking</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Below: 8 AI Automation Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {aiAuto.services.map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-brand-charcoal border border-brand-border hover:border-brand-lime/40 transition-colors">
                  <h4 className="font-semibold text-white text-sm tracking-tight">{item.name}</h4>
                  <p className="text-xs text-brand-silver mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================
              02. BUSINESS AUTOMATION (Layout: Visual Left / Text Right)
             ======================================================== */}
          <div className="space-y-12 pt-12 border-t border-brand-border">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Visual Flow */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-6 sm:p-8 shadow-2xl space-y-4">
                  {/* Visual Middleware Flow Preview */}
                  <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-brand-border bg-brand-dark mb-4 group">
                    <img
                      src="/images/case-studies/tech-agency-n8n-pipeline.png"
                      alt="Production n8n Multi-Channel Triage & Dual Slack Routing"
                      className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/30" />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-[10px] font-mono text-brand-silver">
                      n8n AI Triage Architecture
                    </div>
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-lime/40 text-[10px] font-mono text-brand-lime flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
                      Live Production Workflow
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-brand-silver pb-3 border-b border-brand-border">
                    <span>Automated Multi-Channel Triage</span>
                    <span className="text-brand-lime">&lt; 5s Instant Execution</span>
                  </div>

                  {/* Visual Node Chain */}
                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-brand-card border border-brand-border flex items-center justify-between">
                      <span className="text-white">1. Form Submission & Gmail Ingestion</span>
                      <span className="text-brand-lime">Dual Webhooks</span>
                    </div>
                    <div className="text-center text-brand-silver">↓</div>
                    <div className="p-3 rounded-xl bg-brand-card border border-brand-border flex items-center justify-between">
                      <span className="text-white">2. Airtable Search & AI Intent Classification</span>
                      <span className="text-brand-lime">LLM + JavaScript</span>
                    </div>
                    <div className="text-center text-brand-silver">↓</div>
                    <div className="p-3 rounded-xl bg-brand-card border border-brand-border flex items-center justify-between">
                      <span className="text-white">3. Slack #technical-team OR Airtable & #sales-channel</span>
                      <span className="text-brand-lime">Instant Triage</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-brand-dark border border-brand-border text-xs text-brand-silver flex items-center justify-between">
                    <span className="italic">"{bizAuto.statement}"</span>
                    <Link
                      to="/work/tech-agency-ai-lead-triage"
                      className="inline-flex items-center gap-1.5 text-brand-lime hover:text-white transition-colors font-mono text-[11px] font-semibold shrink-0 ml-3"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: Heading & Content */}
              <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-silver font-semibold">
                  02 / Operational Efficiency
                </span>
                <h3 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                  {bizAuto.name}
                </h3>
                <p className="text-base sm:text-lg text-brand-silver leading-relaxed">
                  {bizAuto.description}
                </p>
                <div className="pt-2">
                  <MagneticButton to="/book" variant="primary" size="md" showArrow={true}>
                    {bizAuto.cta}
                  </MagneticButton>
                </div>
              </div>
            </div>

            {/* Below: Business Automation Capabilities */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-4">
              {bizAuto.services.map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-brand-charcoal border border-brand-border hover:border-brand-borderLight transition-colors">
                  <h4 className="font-semibold text-white text-xs tracking-tight">{item.name}</h4>
                  <p className="text-[11px] text-brand-silver mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================
              03. CRM AUTOMATION (Layout: Text Left / Visual Right)
             ======================================================== */}
          <div className="space-y-12 pt-12 border-t border-brand-border">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-silver font-semibold">
                  03 / Sales & Pipeline Management
                </span>
                <h3 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                  {crmAuto.name}
                </h3>
                <p className="text-base sm:text-lg text-brand-silver leading-relaxed">
                  {crmAuto.description}
                </p>
                <p className="text-xs font-mono text-brand-silver">
                  Supported Platforms: <span className="text-white font-medium">{crmAuto.platforms}</span>
                </p>
                <div className="pt-2">
                  <MagneticButton to="/book" variant="primary" size="md" showArrow={true}>
                    {crmAuto.cta}
                  </MagneticButton>
                </div>
              </div>

              {/* Right Column: Clean CRM Pipeline Visual */}
              <div className="lg:col-span-6">
                <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-6 sm:p-8 shadow-2xl space-y-4">
                  {/* Visual CRM Pipeline Preview */}
                  <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-brand-border bg-brand-dark mb-4 group">
                    <img
                      src="/images/crm-pipeline-dashboard.jpg"
                      alt="Babatunde Damilola managing automated CRM sales pipelines at Pinnancle Group"
                      className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/30" />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-[10px] font-mono text-brand-silver">
                      CRM Pipeline & Lead Architecture
                    </div>
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-lime/40 text-[10px] font-mono text-brand-lime flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
                      Automated Lead Routing Active
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-brand-silver pb-3 border-b border-brand-border">
                    <span>Live Deal Pipeline</span>
                    <span className="text-brand-lime">Auto Follow-Up ON</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-brand-dark border border-brand-border space-y-2">
                      <div className="text-[10px] font-mono text-brand-silver">NEW LEADS</div>
                      <div className="p-2 rounded bg-brand-card text-[11px] text-white">£45k · Commercial Tender</div>
                      <div className="p-2 rounded bg-brand-card text-[11px] text-white">£12k · Clinic Setup</div>
                    </div>
                    <div className="p-3 rounded-xl bg-brand-dark border border-brand-border space-y-2">
                      <div className="text-[10px] font-mono text-brand-lime">CONTACTED (&lt;30s)</div>
                      <div className="p-2 rounded bg-brand-card text-[11px] text-white">£28k · Dealership CRM</div>
                      <div className="p-2 rounded bg-brand-card text-[11px] text-white">£18k · Property Portal</div>
                    </div>
                    <div className="p-3 rounded-xl bg-brand-dark border border-brand-border space-y-2">
                      <div className="text-[10px] font-mono text-white">MEETING BOOKED</div>
                      <div className="p-2 rounded bg-white text-black font-semibold text-[11px]">£50k · Enterprise AI</div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-brand-border flex items-center justify-between text-[11px] font-mono text-brand-silver">
                    <span>Zero unattended inquiries</span>
                    <span className="text-white">Multi-channel follow-up</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Below: CRM Capabilities */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-4">
              {crmAuto.services.map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-brand-charcoal border border-brand-border hover:border-brand-borderLight transition-colors">
                  <h4 className="font-semibold text-white text-xs tracking-tight">{item.name}</h4>
                  <p className="text-[11px] text-brand-silver mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================
              04. WEBSITE DESIGN (Layout: Full-Width Visual Showcase)
             ======================================================== */}
          <div className="space-y-12 pt-12 border-t border-brand-border">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-silver font-semibold">
                04 / High-Conversion Web Platforms
              </span>
              <h3 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                {webDesign.name}
              </h3>
              <p className="text-base sm:text-lg text-brand-silver leading-relaxed">
                {webDesign.description}
              </p>
            </div>

            {/* Large Full-Width Website Screenshots / Composition */}
            <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              {/* Full Bleed High-End Device Showcase Visual */}
              <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] rounded-2xl overflow-hidden mb-8 border border-brand-border bg-brand-dark shadow-2xl group">
                <img
                  src="/images/website-design-showcase.jpg"
                  alt="High-Conversion Digital Web Architecture"
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/40" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-xs font-mono text-white">
                    Custom Web Platforms
                  </span>
                  <span className="px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-lime/40 text-xs font-mono text-brand-lime flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
                    React · Next.js · Full-Stack CRM Sync
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="rounded-2xl bg-brand-dark border border-brand-border overflow-hidden p-4 space-y-3 group hover:border-brand-lime/40 transition-colors">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-brand-charcoal to-brand-card flex flex-col items-center justify-center p-4 text-center border border-white/5">
                    <span className="text-xs font-mono text-white font-bold">Apex Infrastructure</span>
                    <span className="text-[10px] font-mono text-brand-silver">Cross-Border Corporate Portal</span>
                  </div>
                  <h5 className="text-sm font-semibold text-white">Infrastructure & Tender Web Systems</h5>
                  <p className="text-xs text-brand-silver">Direct document parsing and bid qualification portal.</p>
                </div>

                <div className="rounded-2xl bg-brand-dark border border-brand-border overflow-hidden p-4 space-y-3 group hover:border-brand-lime/40 transition-colors">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-brand-charcoal to-brand-card flex flex-col items-center justify-center p-4 text-center border border-white/5">
                    <span className="text-xs font-mono text-white font-bold">Meridian Private Clinic</span>
                    <span className="text-[10px] font-mono text-brand-silver">Interactive Booking & Payment Hub</span>
                  </div>
                  <h5 className="text-sm font-semibold text-white">Private Medical & Aesthetic Websites</h5>
                  <p className="text-xs text-brand-silver">Integrated deposit collection and live calendar sync.</p>
                </div>

                <div className="rounded-2xl bg-brand-dark border border-brand-border overflow-hidden p-4 space-y-3 group hover:border-brand-lime/40 transition-colors">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-brand-charcoal to-brand-card flex flex-col items-center justify-center p-4 text-center border border-white/5">
                    <span className="text-xs font-mono text-white font-bold">Solis Apparel International</span>
                    <span className="text-[10px] font-mono text-brand-silver">Shopify Plus Multi-Currency</span>
                  </div>
                  <h5 className="text-sm font-semibold text-white">High-Volume Ecommerce & Retail</h5>
                  <p className="text-xs text-brand-silver">Automated returns and live shipping carrier status.</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2 text-xs font-mono text-brand-silver">
                  <span className="px-2.5 py-1 rounded bg-brand-dark border border-brand-border">High-Speed React/Vite</span>
                  <span className="px-2.5 py-1 rounded bg-brand-dark border border-brand-border">Mobile First</span>
                  <span className="px-2.5 py-1 rounded bg-brand-dark border border-brand-border">CRM Integrated</span>
                </div>
                <MagneticButton to="/book" variant="primary" size="sm" showArrow={true}>
                  Discuss Your Website Project
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* ========================================================
              05. TENDER SUPPORT & 06. CREATIVE & AI MEDIA (Grid)
             ======================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-12 border-t border-brand-border">
            {/* Tender Support */}
            <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Visual Tender Procurement Review */}
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-brand-border bg-brand-dark mb-4 group">
                  <img
                    src="/images/tender-support-procurement.jpg"
                    alt="Tender & RFP Procurement Review"
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/30" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-[10px] font-mono text-brand-silver">
                    Procurement Strategy Room
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-lime/40 text-[10px] font-mono text-brand-lime flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
                    RFP Scoring & Compliance
                  </div>
                </div>

                <span className="text-xs font-mono uppercase tracking-widest text-brand-silver font-semibold">
                  05 / Commercial Opportunities
                </span>
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  {tenderSupport.name}
                </h3>
                <p className="text-sm sm:text-base text-brand-silver leading-relaxed">
                  {tenderSupport.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {tenderSupport.services.map((item, i) => (
                    <div key={i} className="p-3 rounded-xl bg-brand-dark border border-brand-border text-xs">
                      <span className="font-semibold text-white">{item.name}</span>
                      <p className="text-[11px] text-brand-silver mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-brand-border">
                <MagneticButton to="/book" variant="secondary" size="sm" showArrow={true}>
                  Explore Tender Support
                </MagneticButton>
              </div>
            </div>

            {/* Creative & AI Media */}
            <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-silver font-semibold">
                  06 / Media & Creative Workflows
                </span>
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  {creativeMedia.name}
                </h3>
                <p className="text-sm sm:text-base text-brand-silver leading-relaxed">
                  {creativeMedia.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {creativeMedia.services.map((item, i) => (
                    <div key={i} className="p-3 rounded-xl bg-brand-dark border border-brand-border text-xs">
                      <span className="font-semibold text-white">{item.name}</span>
                      <p className="text-[11px] text-brand-silver mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-brand-border">
                <MagneticButton to="/book" variant="secondary" size="sm" showArrow={true}>
                  Explore Creative & Media
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
