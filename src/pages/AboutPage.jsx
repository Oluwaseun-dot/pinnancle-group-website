import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Globe2, ShieldCheck, Users, Workflow, Sparkles } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us | Pinnancle Group';
  }, []);

  return (
    <div className="pt-32 pb-24 bg-brand-black text-brand-offWhite min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-24">
        {/* Header */}
        <div className="max-w-4xl">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
            About Pinnancle Group
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-white mt-3 leading-tight">
            We Build AI Systems <br />
            <span className="text-brand-silver">That Help Businesses Grow.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-silver mt-6 leading-relaxed">
            Operating between the United Kingdom and Nigeria, Pinnancle Group builds digital systems that help businesses automate repetitive work, respond to customers faster, manage leads, improve sales, and connect the tools they use every day.
          </p>
        </div>

        {/* Our Beginning & Evolution */}
        <div id="story" className="rounded-3xl bg-brand-charcoal border border-brand-border p-8 sm:p-12 shadow-2xl space-y-8">
          {/* Visual Showcase */}
          <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] rounded-2xl overflow-hidden border border-brand-border bg-brand-dark shadow-2xl group">
            <img
              src="/images/our-story-founders.jpg"
              alt="Pinnancle Group Co-Founders: Ayodeji Moses, Praise Salami, and Oluwaseun Olatunji in Strategic Planning Session"
              className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/40" />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-xs font-mono text-white">
                Studio Archives · 2023
              </span>
              <span className="px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-lime/40 text-xs font-mono text-brand-lime flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                Three Founders · London & Lagos
              </span>
            </div>
          </div>

          <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
            Our Story
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Founded by Three Systems Pioneers.
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-brand-silver leading-relaxed">
            <p>
              In 2023, Pinnancle Group was founded by <strong className="text-white">Ayodeji Moses</strong>, <strong className="text-white">Salami Praise</strong>, and <strong className="text-white">Olatunji Oluwaseun</strong>, uniting their expertise to engineer transformative digital systems, high-conversion web platforms, and automated commercial tender infrastructure.
            </p>
            <p>
              Working with expanding companies across the UK and Nigeria showed our founders that businesses were suffering from identical operational bottlenecks: overwhelming manual data entry, lost sales leads, delayed follow-up, disconnected software tools, and fragmented communication.
            </p>
            <p className="text-white font-medium">
              We recognized early on that an isolated website or standard template never resolves broken operational pipelines.
            </p>
            <p>
              Under our founders' leadership, we expanded into autonomous CRM pipelines, event-driven workflow automation, AI agents, and custom enterprise integrations—connecting disparate platforms so businesses operate continuously without friction and capture revenue at scale.
            </p>
          </div>
        </div>

        {/* The 7 Specialists */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
                The Specialists
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mt-1">
                Seven Practitioners. Zero Bureaucracy.
              </h2>
            </div>
            <MagneticButton to="/team" variant="secondary" size="sm" showArrow={true}>
              Meet All 7 Specialists
            </MagneticButton>
          </div>
          <p className="text-base sm:text-lg text-brand-silver leading-relaxed">
            Today, Pinnancle Group has a seven-person specialist team covering AI Automation, CRM, Web Design, Tender Support, Graphic Design, Video, and AI Media. When you engage our firm, you partner directly with senior practitioners focused on solving your operational challenges.
          </p>
        </div>

        {/* Global Operations */}
        <div className="space-y-8">
          <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] rounded-3xl overflow-hidden border border-brand-border bg-brand-dark shadow-2xl group">
            <img
              src="/images/global-uk-nigeria-network.jpg"
              alt="Pinnancle Group Global Network — London & Lagos"
              className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/40" />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-xs font-mono text-white">
                Global Operating Architecture
              </span>
              <span className="px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-lime/40 text-xs font-mono text-brand-lime flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
                London & Lagos Synced Desks
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 hidden sm:flex items-center justify-between text-xs font-mono text-brand-silver">
              <span className="px-3 py-1 rounded-full bg-brand-black/80 backdrop-blur-md border border-brand-border text-white">
                UK Strategic Direction
              </span>
              <span className="px-3 py-1 rounded-full bg-brand-black/80 backdrop-blur-md border border-brand-border text-brand-lime">
                High-Speed Transatlantic Fiber
              </span>
              <span className="px-3 py-1 rounded-full bg-brand-black/80 backdrop-blur-md border border-brand-border text-white">
                Lagos Engineering Center
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-brand-charcoal border border-brand-border space-y-3">
            <div className="flex items-center gap-2 text-white">
              <MapPin className="w-5 h-5 text-brand-lime" />
              <h3 className="text-xl font-display font-bold">United Kingdom Operations</h3>
            </div>
            <p className="text-sm text-brand-silver leading-relaxed">
              London Strategic Desk managing European client engagements, tender research, and executive consultations.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-brand-charcoal border border-brand-border space-y-3">
            <div className="flex items-center gap-2 text-white">
              <MapPin className="w-5 h-5 text-brand-lime" />
              <h3 className="text-xl font-display font-bold">Nigeria Systems Hub</h3>
            </div>
            <p className="text-sm text-brand-silver leading-relaxed">
              Lagos Engineering Center delivering AI automation, software integrations, CRM workflows, and creative media pipelines.
            </p>
          </div>
        </div>
      </div>

        {/* Vision Statement */}
        <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-8 sm:p-12 shadow-2xl space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
            Our Philosophy
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            We Started By Helping Businesses Get Online. <br />
            <span className="text-brand-silver">
              Today, We Help Businesses Work Smarter.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-brand-silver leading-relaxed max-w-3xl">
            Technology should work for your business, not the other way around. We engineer reliable, automated systems that run in the background so your team can focus on what actually moves your company forward.
          </p>

          <div className="pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-brand-silver">
              Serving Clients Across the UK, Nigeria & Worldwide
            </span>
            <MagneticButton to="/book" variant="primary" size="md" showArrow={true}>
              Book a Consultation
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
}
