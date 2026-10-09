import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Play, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Layers } from 'lucide-react';
import SeeAutomationInAction from '../components/SeeAutomationInAction';
import MagneticButton from '../components/MagneticButton';
import ErrorBoundary from '../components/ErrorBoundary';

export default function AutomationDemoPage() {
  useEffect(() => {
    document.title = 'Interactive AI Automation Demos | Pinnancle Group';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-brand-black text-brand-offWhite min-h-screen pt-28 pb-20">
      {/* Top Breadcrumb & Page Header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 mb-8 sm:mb-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-brand-silver mb-8">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-brand-silver/50" />
          <span className="text-brand-silver/70">Demos</span>
          <ChevronRight className="w-3.5 h-3.5 text-brand-silver/50" />
          <span className="text-brand-lime font-medium">See Automation in Action</span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-brand-border text-brand-lime text-xs font-mono uppercase tracking-widest mb-4">
            <Play className="w-3.5 h-3.5 fill-current" />
            Interactive System Simulator
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-[1.08]">
            Experience Autonomous <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-light to-brand-silver">
              Customer Workflows.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-brand-silver mt-5 leading-relaxed font-normal">
            Interact with simulated live conversations showing how an AI-powered system responds to customers, qualifies inbound intent, answers common questions, books appointments, and updates your CRM automatically.
          </p>
        </div>
      </div>

      {/* Main Interactive Demo Simulator */}
      <ErrorBoundary title="Live Automation Demo">
        <SeeAutomationInAction />
      </ErrorBoundary>

      {/* Behind The Scenes Architecture Breakdown */}
      <section className="py-20 sm:py-28 bg-brand-charcoal/40 border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold block mb-2">
              System Engineering
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
              What Happens Behind Every Message
            </h2>
            <p className="text-sm sm:text-base text-brand-silver mt-3 leading-relaxed">
              Every automated interaction follows an airtight, fault-tolerant sequence designed to protect your brand and ensure zero missed revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-brand-dark border border-brand-border space-y-3">
              <span className="text-xs font-mono text-brand-lime font-bold">01 / CAPTURE & REASONING</span>
              <h3 className="text-lg font-bold text-white">Sub-15s Inbound Triage</h3>
              <p className="text-xs sm:text-sm text-brand-silver leading-relaxed">
                Whether a customer reaches out via website, phone call, SMS, or WhatsApp, our conversational engine analyzes intent, checks parameters, and answers questions immediately.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-brand-dark border border-brand-border space-y-3">
              <span className="text-xs font-mono text-brand-lime font-bold">02 / CALENDAR LOCKING</span>
              <h3 className="text-lg font-bold text-white">Two-Way Calendar Sync</h3>
              <p className="text-xs sm:text-sm text-brand-silver leading-relaxed">
                The agent checks real-time availability across your Google or Outlook calendar, presents available slots to the caller, and books the consultation directly without human back-and-forth.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-brand-dark border border-brand-border space-y-3">
              <span className="text-xs font-mono text-brand-lime font-bold">03 / CRM & TEAM DISPATCH</span>
              <h3 className="text-lg font-bold text-white">Automated Records & Alerts</h3>
              <p className="text-xs sm:text-sm text-brand-silver leading-relaxed">
                The contact is created or updated in GoHighLevel or HubSpot, deal status is moved forward, and your operations team receives an instant notification via Slack or WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Consultation CTA */}
      <section className="py-20 sm:py-28 bg-brand-black border-t border-brand-border text-center">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold block mb-3">
            Want This System Built For Your Business?
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Schedule A 30-Minute Architecture Call.
          </h2>
          <p className="text-sm sm:text-base text-brand-silver max-w-2xl mx-auto mt-4 leading-relaxed">
            We will discuss your current lead channels, inspect your CRM setup, and map out an autonomous booking engine tailored to your exact industry.
          </p>
          <div className="mt-8 flex justify-center">
            <MagneticButton to="/book" variant="primary" size="lg" showArrow={true}>
              Book Your Consultation
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
