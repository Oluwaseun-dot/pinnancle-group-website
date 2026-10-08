import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  Sparkles,
  ArrowRight,
  Bot,
  Database,
  Calendar,
  MessageSquare,
  Workflow,
  ShoppingBag,
  Share2,
  FileSpreadsheet,
  PhoneCall,
  Clock,
  Layers,
  Send,
  CheckCircle2
} from 'lucide-react';
import MagneticButton from './MagneticButton';
import { BOOKING_CALENDAR_URL } from '../config/bookingConfig';

export default function WhatCanWeAutomateTool() {
  const problemOptions = [
    { id: 'lead-followup', label: 'Lead Follow-Up', icon: Clock },
    { id: 'missed-calls', label: 'Missed Calls', icon: PhoneCall },
    { id: 'booking', label: 'Appointment Booking', icon: Calendar },
    { id: 'support', label: 'Customer Support', icon: MessageSquare },
    { id: 'crm', label: 'CRM Management', icon: Database },
    { id: 'data-entry', label: 'Data Entry', icon: FileSpreadsheet },
    { id: 'email-followup', label: 'Email Follow-Up', icon: Send },
    { id: 'shopify', label: 'Shopify Tasks', icon: ShoppingBag },
    { id: 'social-media', label: 'Social Media Content', icon: Share2 },
    { id: 'admin-work', label: 'Repetitive Admin Work', icon: Layers },
    { id: 'workflows', label: 'Internal Workflows', icon: Workflow },
    { id: 'other', label: 'Other Operational Bottlenecks', icon: Bot }
  ];

  const [selectedIds, setSelectedIds] = useState(['lead-followup', 'missed-calls']);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadInfo, setLeadInfo] = useState({ name: '', email: '', business: '', website: '' });
  const [submittedLead, setSubmittedLead] = useState(false);

  const toggleProblem = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.length > 1
          ? prev.filter((item) => item !== id)
          : prev
        : [...prev, id]
    );
  };

  // Generate dynamic tailored recommendations
  const getRecommendations = () => {
    const recs = [];

    if (selectedIds.includes('lead-followup') || selectedIds.includes('email-followup')) {
      recs.push({
        title: 'AI Lead Follow-Up Engine',
        desc: 'Contacts new inquiries within 30 seconds via WhatsApp, SMS, or email so deals never go cold.'
      });
    }

    if (selectedIds.includes('missed-calls')) {
      recs.push({
        title: 'Missed-Call AI Text Receptionist',
        desc: 'Instantly texts callers back with booking options whenever your staff is busy or out of office.'
      });
    }

    if (selectedIds.includes('booking')) {
      recs.push({
        title: 'Automated Calendar Locking',
        desc: 'Lets clients choose available time slots online, sends automated SMS reminders, and eliminates scheduling email ping-pong.'
      });
    }

    if (selectedIds.includes('support')) {
      recs.push({
        title: '24/7 AI Customer Support Agent',
        desc: 'Resolves routine questions about pricing, hours, and policies instantly on your website or WhatsApp.'
      });
    }

    if (selectedIds.includes('crm') || selectedIds.includes('data-entry')) {
      recs.push({
        title: 'CRM Pipeline Automation',
        desc: 'Keeps leads, contacts, and deal stages automatically organized in GoHighLevel, HubSpot, or Airtable without manual typing.'
      });
    }

    if (selectedIds.includes('shopify')) {
      recs.push({
        title: 'Shopify Catalog & Operations Automation',
        desc: 'Automatically maps new product listings into content calendars and updates orders across your tools.'
      });
    }

    if (selectedIds.includes('social-media')) {
      recs.push({
        title: 'Automated Social Media Content Engine',
        desc: 'Turns product launches and articles into formatted social captions, clips, and multi-channel posts.'
      });
    }

    if (selectedIds.includes('admin-work') || selectedIds.includes('workflows') || selectedIds.includes('other')) {
      recs.push({
        title: 'Custom Business Middleware Workflows',
        desc: 'Connects your existing web forms, spreadsheets, billing, and team notifications through reliable Make/n8n webhooks.'
      });
    }

    return recs;
  };

  const recommendations = getRecommendations();

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    setSubmittedLead(true);
  };

  return (
    <section id="what-can-we-automate" className="py-24 sm:py-32 bg-brand-black text-brand-offWhite relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-brand-border text-brand-lime text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Problem Solver
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            What Can We Automate?
          </h2>
          <p className="text-base sm:text-lg text-brand-silver mt-3 leading-relaxed">
            Tell us what is taking too much time in your business. Select one or more tasks below to see the exact system that can solve it for you.
          </p>
        </div>

        {/* Interactive Tool Container */}
        <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-6 sm:p-10 md:p-12 shadow-2xl space-y-10">
          {/* Selectable Options Grid */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-silver">
                Select your operational bottlenecks ({selectedIds.length} selected):
              </span>
              <button
                type="button"
                onClick={() => setSelectedIds(problemOptions.map((o) => o.id))}
                className="text-[11px] font-mono text-brand-lime hover:underline"
              >
                Select all
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {problemOptions.map((opt) => {
                const IconComponent = opt.icon;
                const isSelected = selectedIds.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => toggleProblem(opt.id)}
                    className={`p-3.5 sm:p-4 rounded-2xl border text-left flex items-start gap-3 transition-all duration-200 group ${
                      isSelected
                        ? 'bg-brand-dark border-brand-lime text-white shadow-lime-glow-sm'
                        : 'bg-brand-dark/40 border-brand-border/70 text-brand-silver hover:border-brand-borderLight hover:text-white'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isSelected
                          ? 'bg-brand-lime text-black font-bold'
                          : 'bg-brand-charcoal text-brand-silver group-hover:text-white'
                      }`}
                    >
                      {isSelected ? <Check className="w-4 h-4" /> : <IconComponent className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold leading-snug">{opt.label}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Personalized Recommendations Panel */}
          <div className="p-6 sm:p-8 rounded-2xl bg-brand-dark border border-brand-border/80 space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-brand-border">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-lime font-semibold">
                  Personalized Recommendation
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                  Based on what you selected, you may benefit from:
                </h3>
              </div>
              <span className="text-xs font-mono text-brand-silver">
                {recommendations.length} tailored systems identified
              </span>
            </div>

            {/* Recommendation Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendations.map((rec, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-brand-charcoal border border-brand-border space-y-2 hover:border-brand-lime/40 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-lime" />
                    <h4 className="font-display font-bold text-white text-sm sm:text-base">
                      {rec.title}
                    </h4>
                  </div>
                  <p className="text-xs text-brand-silver leading-relaxed">
                    {rec.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Call to Action */}
            <div className="pt-6 border-t border-brand-border flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1 max-w-xl">
                <h4 className="text-base font-display font-bold text-white">
                  Want us to show you how it could work in your business?
                </h4>
                <p className="text-xs text-brand-silver leading-relaxed">
                  Book a confidential 30-minute diagnostic session. We will show you the exact software connections, workflow steps, and timeline required to automate these tasks.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <MagneticButton to={BOOKING_CALENDAR_URL} variant="primary" size="md" showArrow={true}>
                  Book a Consultation
                </MagneticButton>
                <button
                  type="button"
                  onClick={() => setShowLeadForm(!showLeadForm)}
                  className="px-4 py-2.5 rounded-full bg-brand-charcoal border border-brand-border text-xs font-mono text-brand-silver hover:text-white transition-colors"
                >
                  {showLeadForm ? 'Close Save Form' : 'Email Me This Plan'}
                </button>
              </div>
            </div>

            {/* Optional Lead Capture Form Drawer */}
            {showLeadForm && (
              <div className="pt-6 border-t border-brand-border animate-slideDown">
                {submittedLead ? (
                  <div className="p-4 rounded-xl bg-brand-charcoal border border-brand-lime text-xs font-mono text-brand-lime flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Your tailored automation summary has been registered. We look forward to connecting!</span>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-brand-silver block">
                      Save your diagnostic summary to GoHighLevel CRM:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
                      <input
                        type="text"
                        required
                        placeholder="Your Name *"
                        value={leadInfo.name}
                        onChange={(e) => setLeadInfo({ ...leadInfo, name: e.target.value })}
                        className="p-3 rounded-xl bg-brand-charcoal border border-brand-border text-white placeholder-brand-silver/50 focus:border-brand-lime focus:outline-none"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Work Email *"
                        value={leadInfo.email}
                        onChange={(e) => setLeadInfo({ ...leadInfo, email: e.target.value })}
                        className="p-3 rounded-xl bg-brand-charcoal border border-brand-border text-white placeholder-brand-silver/50 focus:border-brand-lime focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Business / Brand Name"
                        value={leadInfo.business}
                        onChange={(e) => setLeadInfo({ ...leadInfo, business: e.target.value })}
                        className="p-3 rounded-xl bg-brand-charcoal border border-brand-border text-white placeholder-brand-silver/50 focus:border-brand-lime focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Website URL (optional)"
                        value={leadInfo.website}
                        onChange={(e) => setLeadInfo({ ...leadInfo, website: e.target.value })}
                        className="p-3 rounded-xl bg-brand-charcoal border border-brand-border text-white placeholder-brand-silver/50 focus:border-brand-lime focus:outline-none"
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="px-5 py-2.5 rounded-full bg-brand-lime text-black font-mono font-bold text-xs hover:bg-brand-limeLight transition-colors"
                      >
                        Submit & Save Plan →
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
