import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles, Database, Workflow, Bot, Monitor, FileText, Video } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import MagneticButton from './MagneticButton';

export default function ServicesInteractive() {
  const [aiAuto, bizAuto, crmAuto, webDesign, tenderSupport, creativeMedia] = servicesData;

  return (
    <section id="services" className="py-24 sm:py-32 md:py-40 bg-brand-black text-brand-offWhite relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 sm:mb-28">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-brand-border text-brand-silver text-xs font-mono uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            Core Practice Areas
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-[1.08]">
            What We Do.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-brand-silver mt-5 leading-relaxed font-normal">
            We design and engineer autonomous AI systems, business automations, enterprise CRMs, and high-performance websites that keep companies organized and operating at speed.
          </p>
        </div>

        {/* Varied Editorial Layouts */}
        <div className="space-y-32 sm:space-y-40">
          {/* ========================================================
              01. AI AUTOMATION (Dominant Practice Area - Split Layout)
             ======================================================== */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Heading & Executive Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                  <span>01 / Flagship Capability</span>
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                  {aiAuto.name}
                </h3>
                <p className="text-base sm:text-lg text-brand-silver leading-relaxed font-normal">
                  {aiAuto.description}
                </p>
                
                {/* Real-world Business Outcomes */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-sm text-brand-silver">
                    <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
                    <span><strong className="text-white font-medium">Instant Inbound Qualification:</strong> Answers customer inquiries in under 15 seconds across phone, WhatsApp, and web.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-brand-silver">
                    <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
                    <span><strong className="text-white font-medium">Direct Calendar Booking:</strong> Qualifies intent and locks confirmed consultations directly into your CRM.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-brand-silver">
                    <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
                    <span><strong className="text-white font-medium">24/7 Continuity:</strong> Zero missed revenue when your office is closed or staff are engaged.</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <MagneticButton to="/book" variant="primary" size="md" showArrow={true}>
                    {aiAuto.cta}
                  </MagneticButton>
                  <Link
                    to="/services"
                    className="text-xs font-mono text-brand-silver hover:text-white transition-colors underline-offset-4 hover:underline"
                  >
                    View All AI Specifications →
                  </Link>
                </div>
              </div>

              {/* Right Column: High-Grade AI Live Assistant Architecture Visual */}
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
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-[10px] font-mono text-brand-silver">
                      Autonomous Decision Tree
                    </div>
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-lime/40 text-[10px] font-mono text-brand-lime flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
                      Sentiment & Intent Triage Active
                    </div>
                  </div>

                  <div className="flex items-center justify-between pb-4 border-b border-brand-border text-xs font-mono text-brand-silver">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                      AI Voice & Conversational Engine
                    </span>
                    <span className="text-white">Continuous Deployment</span>
                  </div>

                  {/* Simulated Production Dialogue */}
                  <div className="space-y-3 my-5 text-xs sm:text-sm font-sans">
                    <div className="p-3.5 rounded-2xl bg-brand-card border border-brand-border text-brand-silver max-w-[88%]">
                      "Hello, I need an automated tenant qualification pipeline connected to our GoHighLevel CRM by next Tuesday."
                    </div>
                    <div className="p-3.5 rounded-2xl bg-white text-black font-medium max-w-[88%] ml-auto border border-white">
                      "Understood. We deploy that via Make.com with real-time webhook parsing and instant SMS triggers. We have technical scoping slots open at 14:00 and 16:30 BST tomorrow."
                    </div>
                    <div className="p-3 rounded-xl bg-brand-dark border border-brand-lime/40 text-brand-lime flex items-center justify-between font-mono text-xs">
                      <span>✓ Lead Scored & Qualified</span>
                      <span>14:00 BST Calendar Locked</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-brand-border text-[11px] font-mono text-brand-silver">
                    <span>Average Execution: &lt; 15 seconds</span>
                    <span className="text-white">Direct CRM Sync</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Architectural Feature Strip (Refined, no card spam) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-brand-border/60">
              {aiAuto.services.slice(0, 4).map((item, i) => (
                <div key={i} className="py-2 pr-4 space-y-1">
                  <h4 className="font-semibold text-white text-sm tracking-tight flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-brand-lime" />
                    {item.name}
                  </h4>
                  <p className="text-xs text-brand-silver leading-relaxed font-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================
              02. BUSINESS AUTOMATION (Layout: Visual Left / Narrative Right)
             ======================================================== */}
          <div className="space-y-12 pt-12 border-t border-brand-border">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Visual Middleware Flow */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-6 sm:p-8 shadow-2xl space-y-5">
                  {/* Visual Production Workflow Preview */}
                  <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-brand-border bg-brand-dark mb-4 group">
                    <img
                      src="/images/case-studies/tech-agency-n8n-pipeline.png"
                      alt="Production n8n Multi-Channel Triage & Dual Slack Routing"
                      className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/30" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-[10px] font-mono text-brand-silver">
                      n8n AI Triage Architecture
                    </div>
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-lime/40 text-[10px] font-mono text-brand-lime flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
                      Live Production Workflow
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-brand-silver pb-3 border-b border-brand-border">
                    <span>Automated Multi-Channel Triage</span>
                    <span className="text-brand-lime">&lt; 5s Instant Execution</span>
                  </div>

                  {/* Sequential Architecture Nodes */}
                  <div className="space-y-2 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-brand-dark border border-brand-border flex items-center justify-between">
                      <span className="text-white">1. Form & Inbound Email Ingestion</span>
                      <span className="text-brand-lime font-mono text-[11px]">Dual Webhooks</span>
                    </div>
                    <div className="p-3 rounded-xl bg-brand-dark border border-brand-border flex items-center justify-between">
                      <span className="text-white">2. Airtable Search & AI Intent Classification</span>
                      <span className="text-brand-lime font-mono text-[11px]">LLM + Node</span>
                    </div>
                    <div className="p-3 rounded-xl bg-brand-dark border border-brand-border flex items-center justify-between">
                      <span className="text-white">3. Slack #technical-team OR Airtable & #sales</span>
                      <span className="text-brand-lime font-mono text-[11px]">Instant Routing</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-brand-dark border border-brand-border text-xs text-brand-silver flex items-center justify-between">
                    <span className="italic">"Eliminates 20+ hours of manual data entry every week."</span>
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

              {/* Right Column: Narrative & Executive Details */}
              <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-silver font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span>02 / Operational Efficiency</span>
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                  {bizAuto.name}
                </h3>
                <p className="text-base sm:text-lg text-brand-silver leading-relaxed font-normal">
                  {bizAuto.description}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-sm text-brand-silver">
                    <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
                    <span><strong className="text-white font-medium">Cross-Software Synchronization:</strong> Connect spreadsheets, email, billing, and project management tools.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-brand-silver">
                    <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
                    <span><strong className="text-white font-medium">Zero Human Copy-Pasting:</strong> Information moves instantly with zero data entry errors.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-brand-silver">
                    <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
                    <span><strong className="text-white font-medium">Real-Time Team Alerts:</strong> Immediate Slack and WhatsApp notifications for critical business events.</span>
                  </div>
                </div>

                <div className="pt-4">
                  <MagneticButton to="/book" variant="primary" size="md" showArrow={true}>
                    {bizAuto.cta}
                  </MagneticButton>
                </div>
              </div>
            </div>

            {/* Architectural Capabilities Breakdown */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-brand-border/60">
              {bizAuto.services.slice(0, 4).map((item, i) => (
                <div key={i} className="py-2 pr-4 space-y-1">
                  <h4 className="font-semibold text-white text-sm tracking-tight flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-brand-lime" />
                    {item.name}
                  </h4>
                  <p className="text-xs text-brand-silver leading-relaxed font-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================
              03. CRM AUTOMATION (Layout: Narrative Left / Damilola Visual Right)
             ======================================================== */}
          <div className="space-y-12 pt-12 border-t border-brand-border">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Heading & Value Proposition */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-silver font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                  <span>03 / Sales Pipeline & Customer Records</span>
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                  {crmAuto.name}
                </h3>
                <p className="text-base sm:text-lg text-brand-silver leading-relaxed font-normal">
                  Behind every high-converting sales process is a structured CRM system that keeps contacts, leads, and customer data organized. We turn passive contact lists into proactive revenue engines.
                </p>

                {/* Practical CRM Inclusions */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-sm text-brand-silver">
                    <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
                    <span><strong className="text-white font-medium">Contact & Lead Management:</strong> Capture, tag, and categorize incoming prospects from ads, website forms, and partner portals.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-brand-silver">
                    <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
                    <span><strong className="text-white font-medium">Visual Deal Pipelines:</strong> Clear stages showing exactly where every lead is in the sales cycle from inquiry to closed-won.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-brand-silver">
                    <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
                    <span><strong className="text-white font-medium">Automated Multi-Channel Follow-Up:</strong> Continuous SMS, email, and task sequences ensure zero unattended inquiries.</span>
                  </div>
                </div>

                <p className="text-xs font-mono text-brand-silver pt-1">
                  Supported Platforms: <span className="text-white font-medium">{crmAuto.platforms}</span>
                </p>

                <div className="pt-2">
                  <MagneticButton to="/book" variant="primary" size="md" showArrow={true}>
                    {crmAuto.cta}
                  </MagneticButton>
                </div>
              </div>

              {/* Right Column: Realistic CRM Pipeline Visual with Babatunde Damilola */}
              <div className="lg:col-span-6">
                <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-6 sm:p-8 shadow-2xl space-y-4">
                  {/* Visual CRM Pipeline Preview Featuring Babatunde Damilola */}
                  <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-brand-border bg-brand-dark mb-4 group shadow-2xl">
                    <img
                      src="/images/crm-pipeline-dashboard.jpg"
                      alt="Babatunde Damilola managing automated CRM sales pipelines at Pinnancle Group"
                      className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/30" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-[10px] font-mono text-brand-silver">
                      CRM Pipeline & Lead Architecture
                    </div>
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-lime/40 text-[10px] font-mono text-brand-lime flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
                      Automated Lead Routing Active
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-brand-silver pb-3 border-b border-brand-border">
                    <span>Live Deal Pipeline</span>
                    <span className="text-brand-lime">Auto Follow-Up ON</span>
                  </div>

                  {/* Stage Metrics Strip */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-brand-dark border border-brand-border space-y-1.5">
                      <div className="text-[10px] font-mono text-brand-silver">NEW INQUIRIES</div>
                      <div className="text-xs font-semibold text-white">£45k · Tender Lead</div>
                      <div className="text-[10px] text-brand-silver">Captured &lt; 30s</div>
                    </div>
                    <div className="p-3 rounded-xl bg-brand-dark border border-brand-border space-y-1.5">
                      <div className="text-[10px] font-mono text-brand-lime">CONTACTED</div>
                      <div className="text-xs font-semibold text-white">£28k · Dealership CRM</div>
                      <div className="text-[10px] text-brand-lime">SMS Sequence Active</div>
                    </div>
                    <div className="p-3 rounded-xl bg-brand-dark border border-brand-border space-y-1.5">
                      <div className="text-[10px] font-mono text-white">MEETING BOOKED</div>
                      <div className="text-xs font-semibold text-brand-lime">£50k · Enterprise AI</div>
                      <div className="text-[10px] text-white">Synced to Calendar</div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-brand-border flex items-center justify-between text-[11px] font-mono text-brand-silver">
                    <span>Zero unattended inquiries</span>
                    <span className="text-white">Multi-channel nurture</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Architectural Capabilities Breakdown */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-brand-border/60">
              {crmAuto.services.slice(0, 4).map((item, i) => (
                <div key={i} className="py-2 pr-4 space-y-1">
                  <h4 className="font-semibold text-white text-sm tracking-tight flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-brand-lime" />
                    {item.name}
                  </h4>
                  <p className="text-xs text-brand-silver leading-relaxed font-normal">{item.desc}</p>
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
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                {webDesign.name}
              </h3>
              <p className="text-base sm:text-lg text-brand-silver leading-relaxed font-normal">
                {webDesign.description}
              </p>
            </div>

            {/* Large Full-Width Showcase Visual */}
            <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] rounded-2xl overflow-hidden mb-8 border border-brand-border bg-brand-dark shadow-2xl group">
                <img
                  src="/images/website-design-showcase.jpg"
                  alt="High-Conversion Digital Web Architecture"
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/40" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-xs font-mono text-white">
                    Custom Web Systems
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-lime/40 text-xs font-mono text-brand-lime flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
                    React · Vite · Full-Stack Integration
                  </span>
                </div>
              </div>

              {/* Three System Deliverables */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-brand-dark border border-brand-border space-y-2">
                  <h5 className="text-sm font-semibold text-white">Infrastructure & Tender Web Systems</h5>
                  <p className="text-xs text-brand-silver leading-relaxed font-normal">Direct document intake, partner portals, and bid qualification systems.</p>
                </div>
                <div className="p-5 rounded-2xl bg-brand-dark border border-brand-border space-y-2">
                  <h5 className="text-sm font-semibold text-white">Private Medical & Professional Services</h5>
                  <p className="text-xs text-brand-silver leading-relaxed font-normal">Integrated deposit collection, qualification questionnaires, and live calendar locking.</p>
                </div>
                <div className="p-5 rounded-2xl bg-brand-dark border border-brand-border space-y-2">
                  <h5 className="text-sm font-semibold text-white">High-Volume Ecommerce & Booking</h5>
                  <p className="text-xs text-brand-silver leading-relaxed font-normal">Automated return logistics, multi-currency processing, and real-time inventory sync.</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2 text-xs font-mono text-brand-silver">
                  <span className="px-3 py-1 rounded-full bg-brand-dark border border-brand-border">High-Speed Architecture</span>
                  <span className="px-3 py-1 rounded-full bg-brand-dark border border-brand-border">Mobile First</span>
                  <span className="px-3 py-1 rounded-full bg-brand-dark border border-brand-border">CRM Integrated</span>
                </div>
                <MagneticButton to="/book" variant="primary" size="sm" showArrow={true}>
                  Discuss Your Website Project
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* ========================================================
              05. TENDER SUPPORT & 06. CREATIVE MEDIA (Editorial Split)
             ======================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-12 border-t border-brand-border">
            {/* Tender Support */}
            <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-brand-border bg-brand-dark mb-4 group shadow-xl">
                  <img
                    src="/images/tender-support-procurement.jpg"
                    alt="Tender & RFP Procurement Review"
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/30" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-[10px] font-mono text-brand-silver">
                    Procurement Strategy Room
                  </div>
                </div>

                <span className="text-xs font-mono uppercase tracking-widest text-brand-silver font-semibold">
                  05 / Commercial Procurement
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  {tenderSupport.name}
                </h3>
                <p className="text-sm text-brand-silver leading-relaxed font-normal">
                  {tenderSupport.description}
                </p>
                <div className="space-y-2 pt-2">
                  {tenderSupport.services.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-brand-silver">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime shrink-0" />
                      <span><strong className="text-white font-medium">{item.name}:</strong> {item.desc}</span>
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
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-brand-border bg-brand-dark mb-4 group shadow-xl">
                  <img
                    src="/images/case-studies/brendc-n8n-workflow.png"
                    alt="Creative Automation & Visual Content Pipeline"
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/30" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-[10px] font-mono text-brand-silver">
                    Media & Video Pipelines
                  </div>
                </div>

                <span className="text-xs font-mono uppercase tracking-widest text-brand-silver font-semibold">
                  06 / Creative Media & Tech
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  {creativeMedia.name}
                </h3>
                <p className="text-sm text-brand-silver leading-relaxed font-normal">
                  {creativeMedia.description}
                </p>
                <div className="space-y-2 pt-2">
                  {creativeMedia.services.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-brand-silver">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime shrink-0" />
                      <span><strong className="text-white font-medium">{item.name}:</strong> {item.desc}</span>
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
