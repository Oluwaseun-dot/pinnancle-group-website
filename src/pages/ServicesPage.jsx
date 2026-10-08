import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bot,
  Workflow,
  Database,
  Layout,
  FileText,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Check,
  Zap,
  Clock,
  ShieldCheck,
  Layers,
  Send,
  Smartphone,
  Search,
  Video,
  Palette,
  Calendar,
  Users,
  PhoneCall,
  MessageSquare,
  Mail,
  Building2,
  ShoppingBag,
  Stethoscope,
  Wrench,
  Car,
  GraduationCap,
  Briefcase,
  Utensils,
  ChevronRight,
  ExternalLink,
  Sliders,
  CheckCircle
} from 'lucide-react';
import { caseStudies } from '../data/caseStudiesData';
import MagneticButton from '../components/MagneticButton';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    document.title = 'Services & Systems | Pinnancle Group';
    window.scrollTo(0, 0);
  }, []);

  // Filter 3 real portfolio projects for the Selected Work section
  const featuredWork = caseStudies.slice(0, 3);

  const industries = [
    { name: 'Home Services', icon: Wrench, desc: 'Automated missed-call replies, lead qualification, and schedule dispatch.' },
    { name: 'Real Estate', icon: Building2, desc: 'Instant property portal inquiry sync, tenant triage, and tour booking.' },
    { name: 'Healthcare & Clinics', icon: Stethoscope, desc: 'Patient appointment reminders, intake coordination, and calendar sync.' },
    { name: 'Automotive', icon: Car, desc: 'Service booking bots, test-drive coordination, and stock inquiry replies.' },
    { name: 'Ecommerce & Retail', icon: ShoppingBag, desc: 'Automated catalog sync, order lookup, and dynamic social content.' },
    { name: 'Professional Services', icon: Briefcase, desc: 'Client intake forms, retainer billing sync, and document workflows.' },
    { name: 'Agencies', icon: Layers, desc: 'Multi-client lead routing, automated reporting, and campaign assets.' },
    { name: 'Education', icon: GraduationCap, desc: 'Student enrollment triage, parent inquiries, and orientation reminders.' },
    { name: 'Hospitality', icon: Utensils, desc: 'Reservation confirmation, VIP guest messaging, and catering intake.' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Tell Us What Takes Too Much Time',
      desc: 'You explain where your team gets stuck, which tasks are manual, or what systems need fixing.'
    },
    {
      step: '02',
      title: 'We Understand Your Business',
      desc: 'We review your existing tools, customer flow, and bottlenecks to design a simple solution.'
    },
    {
      step: '03',
      title: 'We Build the Right System',
      desc: 'Our engineers build your automation, AI agent, website, or CRM tailored to how you work.'
    },
    {
      step: '04',
      title: 'We Connect Your Tools',
      desc: 'We integrate your forms, email, calendars, databases, and payment processors so data moves cleanly.'
    },
    {
      step: '05',
      title: 'We Test Everything',
      desc: 'We run live test scenarios to ensure zero errors, safe guardrails, and reliable everyday operation.'
    },
    {
      step: '06',
      title: 'Your Business Runs Automatically',
      desc: 'Your team gets hours back, customer inquiries are handled immediately, and everything stays organized.'
    }
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-24 bg-brand-black text-brand-offWhite min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* ==================================================
            1. HERO SECTION
            ================================================== */}
        <section className="max-w-4xl mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-brand-border text-brand-lime text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            Core Practice Areas & Services
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-white leading-[1.08]">
            We Build Systems That <br />
            <span className="text-brand-silver">Make Business Easier.</span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-silver mt-6 leading-relaxed max-w-2xl font-normal">
            Your business should not have to run on manual copy-pasting, missed inquiries, and disconnected tools. We engineer clean automations, intelligent AI agents, CRM pipelines, websites, and digital systems that save your team hours every day.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-brand-border/60">
            <MagneticButton to="/book" variant="primary" size="md" showArrow={true}>
              Book a Systems Consultation
            </MagneticButton>
            <MagneticButton to="/work" variant="secondary" size="md">
              View Our Client Work
            </MagneticButton>
          </div>
        </section>

        {/* ==================================================
            2. SERVICE 1: AI AUTOMATION (FLAGSHIP SERVICE)
            ================================================== */}
        <section id="ai-automation" className="mb-28 sm:mb-36 scroll-mt-28">
          <div className="rounded-3xl bg-brand-charcoal border border-brand-border overflow-hidden shadow-2xl relative">
            {/* Top Badge Strip */}
            <div className="p-6 sm:p-8 pb-0 flex flex-wrap items-center justify-between gap-4">
              <span className="px-3.5 py-1 rounded-full bg-brand-lime/10 border border-brand-lime/40 text-brand-lime text-xs font-mono uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5" />
                Flagship Practice Area
              </span>
              <span className="text-xs font-mono text-brand-silver">
                Production-Grade Voice & Chat Agents
              </span>
            </div>

            {/* Main Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-8 md:p-12 items-center">
              {/* Text Column */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                  AI Automation
                </h2>

                <p className="text-base sm:text-lg text-brand-offWhite font-medium leading-relaxed">
                  Your business should not have to answer every question manually. We build AI systems that can respond to customers, qualify leads, book appointments, and handle routine tasks for you.
                </p>

                <p className="text-sm text-brand-silver leading-relaxed">
                  Instead of generic chatbots that give frustrating answers, our systems are trained on your real business rules, connect directly to your calendars and databases, and hand off to your team when human judgment is needed.
                </p>

                {/* Service Offerings Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {[
                    'AI Voice Agents',
                    'AI Chat Agents',
                    'AI Receptionists',
                    'AI Lead Follow-Up',
                    'AI Appointment Booking',
                    'AI Customer Support',
                    'Custom AI Agents'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-brand-dark border border-brand-border text-xs text-white">
                      <Check className="w-3.5 h-3.5 text-brand-lime shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Evidence Callout */}
                <div className="pt-4 border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs font-mono text-brand-silver">
                    Verified Deployment: <strong className="text-white">AI Voice-to-Email Agent ($4,500)</strong>
                  </div>
                  <Link
                    to="/work/ai-voice-to-email-agent"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-lime hover:underline"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Visual & Workflow Column */}
              <div className="lg:col-span-6 space-y-6">
                {/* Large Hero Visual */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-brand-border bg-brand-dark shadow-2xl group">
                  <img
                    src="/images/ai-agent-interface.jpg"
                    alt="AI Automation System Interface in Modern Business"
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/20" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-brand-black/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-brand-silver">System Status</span>
                    <span className="text-brand-lime font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                      Autonomous Triage Active
                    </span>
                  </div>
                </div>

                {/* Animated / Visual Workflow Node Diagram */}
                <div className="p-5 sm:p-6 rounded-2xl bg-brand-dark border border-brand-border space-y-3">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-brand-silver block">
                    How the AI Flow Operates:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
                    {[
                      { step: '01', label: 'Customer', desc: 'Message or call arrives' },
                      { step: '02', label: 'AI Agent', desc: 'Identifies intent & needs' },
                      { step: '03', label: 'Automation', desc: 'Checks schedule & rules' },
                      { step: '04', label: 'CRM', desc: 'Updates contact record' },
                      { step: '05', label: 'Action', desc: 'Books meeting or draft' },
                      { step: '06', label: 'Team Alert', desc: 'Staff notified in Slack/SMS' }
                    ].map((node, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-brand-charcoal border border-brand-border/70 space-y-0.5">
                        <span className="text-[10px] text-brand-lime font-bold">{node.step}</span>
                        <p className="font-bold text-white truncate">{node.label}</p>
                        <p className="text-[10px] text-brand-silver leading-tight">{node.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            3. SERVICE 2: BUSINESS AUTOMATION
            ================================================== */}
        <section id="business-automation" className="mb-28 sm:mb-36 scroll-mt-28">
          <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-6 sm:p-10 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Visual Left */}
              <div className="lg:col-span-6 lg:order-1 space-y-4">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-brand-border bg-brand-dark shadow-2xl group">
                  <img
                    src="/images/business-automation-workflow.jpg"
                    alt="Business Automation Pipeline and Webhook Integration"
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/30" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-xs font-mono text-white">
                    Event-Driven Middleware
                  </div>
                </div>

                {/* Workflow Sequence Strip */}
                <div className="p-4 rounded-xl bg-brand-dark border border-brand-border">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-silver block mb-2">
                    Information Moves Automatically:
                  </span>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-brand-charcoal border border-brand-border text-white">Forms</span>
                    <span className="text-brand-lime">→</span>
                    <span className="px-2.5 py-1 rounded-md bg-brand-charcoal border border-brand-border text-white">Automation</span>
                    <span className="text-brand-lime">→</span>
                    <span className="px-2.5 py-1 rounded-md bg-brand-charcoal border border-brand-border text-white">CRM</span>
                    <span className="text-brand-lime">→</span>
                    <span className="px-2.5 py-1 rounded-md bg-brand-charcoal border border-brand-border text-white">Email</span>
                    <span className="text-brand-lime">→</span>
                    <span className="px-2.5 py-1 rounded-md bg-brand-charcoal border border-brand-border text-brand-lime font-bold">Team Notification</span>
                  </div>
                </div>
              </div>

              {/* Text Right */}
              <div className="lg:col-span-6 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-lime uppercase tracking-widest font-semibold">
                  <Workflow className="w-3.5 h-3.5" />
                  Connected Workflows
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                  Business Automation
                </h2>

                <p className="text-base sm:text-lg text-brand-offWhite font-medium leading-relaxed">
                  We connect the tools your business already uses so information can move automatically between them.
                </p>

                <p className="text-sm text-brand-silver leading-relaxed">
                  When a customer fills out a form, pays an invoice, or requests a quote, nobody should have to retype that data into your CRM, spreadsheet, or accounting software. We build reliable pipes that eliminate manual data transfer entirely.
                </p>

                {/* Inclusions */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
                  {[
                    'Workflow Automation',
                    'API Integrations',
                    'Email Automation',
                    'Form Automation',
                    'Data Automation',
                    'Internal Notifications',
                    'Document Automation',
                    'Webhooks',
                    'Custom Workflows'
                  ].map((service, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-brand-dark border border-brand-border text-xs text-brand-offWhite font-mono">
                      • {service}
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-brand-border flex items-center justify-between">
                  <span className="text-xs font-mono text-brand-silver">
                    Built with Make.com, n8n, Zapier & Custom APIs
                  </span>
                  <Link
                    to="/work/shopify-product-content-mapping"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-lime hover:underline"
                  >
                    <span>View Airtable Sync ($750)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            4. SERVICE 3: CRM AUTOMATION
            ================================================== */}
        <section id="crm-automation" className="mb-28 sm:mb-36 scroll-mt-28">
          <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-6 sm:p-10 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Text Left */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-lime uppercase tracking-widest font-semibold">
                  <Database className="w-3.5 h-3.5" />
                  Pipeline Management
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                  CRM Automation
                </h2>

                <p className="text-base sm:text-lg text-brand-offWhite font-medium leading-relaxed">
                  Keep your leads, customers, follow-ups, and sales process organized in one place.
                </p>

                <p className="text-sm text-brand-silver leading-relaxed">
                  We set up and automate your CRM so leads are followed up, appointments are managed, and your team knows what to do next. You never have to worry about a qualified deal going cold because someone forgot to send an email.
                </p>

                {/* CRM Key Modules */}
                <div className="p-5 rounded-2xl bg-brand-dark border border-brand-border space-y-3">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-brand-silver block">
                    What We Organize in Your CRM:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    {[
                      { title: 'Leads & Inquiries', desc: 'Captured automatically from ads & site' },
                      { title: 'Contacts & History', desc: 'Centralized conversation timeline' },
                      { title: 'Sales Pipeline', desc: 'Visual stages from lead to won deal' },
                      { title: 'Follow-Up Stages', desc: 'Automated SMS, email & task triggers' },
                      { title: 'Appointments', desc: 'Self-serve booking & calendar reminders' },
                      { title: 'Team Tasks', desc: 'Auto-assigned to staff with deadlines' }
                    ].map((item, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-brand-charcoal border border-brand-border/60">
                        <p className="text-white font-bold">{item.title}</p>
                        <p className="text-[10px] text-brand-silver mt-0.5">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/work/cleveland-real-estate-ai-ghl"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-lime hover:underline"
                  >
                    <span>View GoHighLevel Deployment Case Study ($500)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Visual Right */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-brand-border bg-brand-dark shadow-2xl group">
                  <img
                    src="/images/crm-pipeline-dashboard.jpg"
                    alt="Realistic CRM Sales Pipeline and Contact Management Dashboard"
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/30" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                    <span className="px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-white">
                      Live CRM Pipeline View
                    </span>
                    <span className="px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-lime/40 text-brand-lime">
                      100% Leads Tracked
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-brand-dark border border-brand-border text-xs text-brand-silver font-mono flex items-center justify-between">
                  <span>Supported Platforms:</span>
                  <span className="text-white font-medium">GoHighLevel · HubSpot · Airtable · ActiveCampaign</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            5. SERVICE 4: WEBSITE DESIGN
            ================================================== */}
        <section id="website-design" className="mb-28 sm:mb-36 scroll-mt-28">
          <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-6 sm:p-10 md:p-12 shadow-2xl space-y-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-lime uppercase tracking-widest font-semibold">
                <Layout className="w-3.5 h-3.5" />
                High-Performance Web Platforms
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                Website Design & Development
              </h2>

              <p className="text-base sm:text-lg text-brand-offWhite font-medium leading-relaxed">
                We build websites that look professional, load fast, work on every device, and help turn visitors into customers.
              </p>

              <p className="text-sm text-brand-silver leading-relaxed">
                Your website is often the first impression a potential client has of your business. We design clean, responsive websites engineered with clear messaging, fast loading speeds, and direct booking or lead capture forms.
              </p>
            </div>

            {/* Showcase Mockup Gallery */}
            <div className="relative aspect-[21/9] sm:aspect-[16/7] rounded-2xl overflow-hidden border border-brand-border bg-brand-dark shadow-2xl group">
              <img
                src="/images/website-design-showcase.jpg"
                alt="High-Quality Website Mockups across Desktop, Tablet and Mobile"
                className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/30" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl bg-brand-black/85 backdrop-blur-md border border-white/10 text-xs font-mono">
                <span className="text-white font-medium">Responsive Client Interfaces: Desktop, Tablet & Mobile</span>
                <span className="text-brand-lime">Sub-Second Load Times · Mobile-First Responsive</span>
              </div>
            </div>

            {/* Inclusions Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5 pt-2">
              {[
                'Business Websites',
                'Landing Pages',
                'Shopify',
                'Ecommerce',
                'Custom Websites',
                'Website Redesign',
                'Website Integrations'
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-brand-dark border border-brand-border text-center text-xs font-mono text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            6. SERVICE 5: TENDER SUPPORT
            ================================================== */}
        <section id="tender-support" className="mb-28 sm:mb-36 scroll-mt-28">
          <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-6 sm:p-10 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Visual Left */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-brand-border bg-brand-dark shadow-2xl group">
                  <img
                    src="/images/tender-support-procurement.jpg"
                    alt="Professional Tender Review, Proposal Documents, and Contract Research"
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/30" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-xs font-mono text-white">
                    Commercial Proposal & Bid Advisory
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-brand-dark border border-brand-border text-xs font-mono text-brand-silver">
                  Focus: <strong className="text-white">UK & International Government and Corporate Procurement</strong>
                </div>
              </div>

              {/* Text Right */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-lime uppercase tracking-widest font-semibold">
                  <FileText className="w-3.5 h-3.5" />
                  Commercial Opportunities
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                  Tender Support
                </h2>

                <p className="text-base sm:text-lg text-brand-offWhite font-medium leading-relaxed">
                  We help businesses find suitable tender opportunities and prepare the documents they need to apply.
                </p>

                <p className="text-sm text-brand-silver leading-relaxed">
                  Applying for public and corporate tenders can be confusing and time-consuming. We handle the opportunity research, review compliance criteria, and help prepare clear, persuasive submission dossiers that give your business the best chance of winning.
                </p>

                {/* Inclusions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {[
                    'Tender Research',
                    'Tender Opportunity Search',
                    'Tender Preparation',
                    'Tender Documentation',
                    'Submission Support',
                    'Business Opportunity Research'
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-brand-dark border border-brand-border text-xs text-white">
                      <Check className="w-3.5 h-3.5 text-brand-lime shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-brand-border">
                  <MagneticButton to="/contact" variant="secondary" size="sm">
                    Inquire About Tender Research
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            7. SERVICE 6: CREATIVE & AI MEDIA
            ================================================== */}
        <section id="creative-media" className="mb-28 sm:mb-36 scroll-mt-28">
          <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-6 sm:p-10 md:p-12 shadow-2xl space-y-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-lime uppercase tracking-widest font-semibold">
                <Palette className="w-3.5 h-3.5" />
                Visual Communication
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                Creative & AI Media
              </h2>

              <p className="text-base sm:text-lg text-brand-offWhite font-medium leading-relaxed">
                We create the visuals your business needs to look professional online and communicate clearly with customers.
              </p>

              <p className="text-sm text-brand-silver leading-relaxed">
                From video editing and high-converting graphic design to AI-assisted video production and social media marketing assets, we give your brand a polished, credible presence across every channel.
              </p>
            </div>

            {/* Visual Gallery / Showcase Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: 'AI Video Production',
                  desc: 'Automated video rendering pipelines turning product listings into dynamic promotional reels.',
                  tag: 'Ecommerce / Video'
                },
                {
                  title: 'Social Media Content',
                  desc: 'High-volume branded graphics, carousels, and announcements ready for multi-channel publishing.',
                  tag: 'Omnichannel'
                },
                {
                  title: 'Commercial Graphic Design',
                  desc: 'Marketing collateral, pitch decks, client proposals, and digital advertising assets.',
                  tag: 'Brand Identity'
                }
              ].map((card, i) => (
                <div key={i} className="p-6 rounded-2xl bg-brand-dark border border-brand-border space-y-3 hover:border-brand-lime/40 transition-colors">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-brand-charcoal text-brand-lime border border-brand-border inline-block">
                    {card.tag}
                  </span>
                  <h4 className="text-lg font-display font-bold text-white">{card.title}</h4>
                  <p className="text-xs text-brand-silver leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Inclusions Strip */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                'Video Editing',
                'Graphic Design',
                'AI Video Production',
                'Social Media Content',
                'Marketing Creatives'
              ].map((item, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-xl bg-brand-dark border border-brand-border text-xs font-mono text-white">
                  ✓ {item}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/work/shopify-product-to-social-automation"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-lime hover:underline"
              >
                <span>View Product-to-Social Content Engine Case Study ($1,350)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ==================================================
            8. HOW WE HELP (6-STEP VISUAL PROCESS)
            ================================================== */}
        <section className="mb-28 sm:mb-36">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
              Simple Execution Process
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mt-2">
              How We Help
            </h2>
            <p className="text-base sm:text-lg text-brand-silver mt-3">
              We keep the process straightforward. No complicated technical jargon—just clear steps to get your business running more automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-brand-charcoal border border-brand-border p-6 sm:p-8 space-y-4 hover:border-brand-lime/40 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-display font-bold text-brand-lime group-hover:scale-105 transition-transform">
                    {step.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-brand-border group-hover:bg-brand-lime transition-colors" />
                </div>
                <h3 className="text-lg font-display font-bold text-white group-hover:text-brand-lime transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-silver leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            9. INDUSTRIES WE WORK WITH
            ================================================== */}
        <section className="mb-28 sm:mb-36">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
              Tailored Systems
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mt-2">
              Industries We Work With
            </h2>
            <p className="text-base sm:text-lg text-brand-silver mt-3">
              We build automation workflows and digital systems adapted to the specific operational realities of expanding businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind, idx) => {
              const IconComponent = ind.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-brand-charcoal border border-brand-border space-y-2.5 hover:border-brand-borderLight transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-dark border border-brand-border flex items-center justify-center text-brand-lime">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-bold text-white text-base">
                      {ind.name}
                    </h3>
                  </div>
                  <p className="text-xs text-brand-silver leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ==================================================
            10. SELECTED WORK SHOWCASE (AUTHENTIC EVIDENCE)
            ================================================== */}
        <section className="mb-28 sm:mb-36">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
                Real Client Work
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mt-2">
                Selected Work & Systems
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-silver hover:text-white transition-colors"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredWork.map((project, idx) => (
              <div
                key={project.slug}
                className="rounded-2xl bg-brand-charcoal border border-brand-border p-5 flex flex-col justify-between group hover:border-brand-lime/40 transition-all shadow-xl"
              >
                <div>
                  {project.image && (
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 border border-brand-border bg-brand-dark">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-brand-black/85 backdrop-blur-md border border-brand-border text-[10px] font-mono text-brand-silver">
                        {project.client}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono text-brand-lime uppercase tracking-wider font-semibold">
                      {project.category.split('·')[0]}
                    </span>
                    {project.projectCost && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-dark border border-brand-border text-white">
                        {project.projectCost}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-white text-base group-hover:text-brand-lime transition-colors leading-snug">
                    <Link to={`/work/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-brand-silver mt-2 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-brand-border flex items-center justify-between">
                  <span className="text-[11px] font-mono text-brand-silver">
                    {project.results?.[0]?.metric} {project.results?.[0]?.label}
                  </span>
                  <Link
                    to={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-mono text-white group-hover:text-brand-lime transition-colors"
                  >
                    <span>View</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            11. FINAL CALL TO ACTION
            ================================================== */}
        <section className="rounded-3xl bg-gradient-to-br from-brand-charcoal to-brand-dark border border-brand-lime/30 p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-lime/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="px-3 py-1 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-brand-lime text-xs font-mono uppercase tracking-widest font-semibold inline-block">
              Start Your Systems Diagnostic
            </span>

            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              Have a Process You Want to Automate?
            </h2>

            <p className="text-base sm:text-lg text-brand-silver leading-relaxed font-normal">
              Tell us what is taking too much time. We will help you find a better way to handle it, connect your tools, and get your business running more automatically.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton to="/book" variant="primary" size="md" showArrow={true}>
                Book a Consultation
              </MagneticButton>
              <MagneticButton to="/work" variant="secondary" size="md">
                View Our Work
              </MagneticButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
