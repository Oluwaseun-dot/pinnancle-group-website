import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, PhoneCall, Clock, RefreshCw, Database, HelpCircle, Calendar, Video, Flame } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function WhatIsTakingTooMuchTime() {
  const problems = [
    {
      id: 'missed-calls',
      problem: 'Missed Calls & Inbound Inquiries',
      solutionTitle: 'AI Voice & Text Receptionist',
      icon: <PhoneCall className="w-4 h-4" />,
      situation: 'When callers reach voicemail because your staff is busy or out of the office, over 80% hang up and immediately call a competitor.',
      howWeFixIt: 'We deploy an AI voice receptionist and instant missed-call text-back that answers within 5 seconds, answers caller questions, and books appointments 24/7.',
      outcome: 'Zero lost inquiries. Inbound prospects are captured and qualified even when your office is closed.'
    },
    {
      id: 'slow-response',
      problem: 'Slow Lead Response Times',
      solutionTitle: 'Sub-60s AI Lead Triage',
      icon: <Clock className="w-4 h-4" />,
      situation: 'Web form submissions sit in inboxes for hours while team members are in meetings, causing lead interest and intent to drop dramatically.',
      howWeFixIt: 'We build an automated response engine that contacts every new inquiry via WhatsApp and SMS within 30 seconds to start the conversation while intent is hot.',
      outcome: 'Up to 3.8x higher conversion rate from initial web inquiry to confirmed consultation.'
    },
    {
      id: 'manual-tasks',
      problem: 'Repetitive Manual Data Entry',
      solutionTitle: 'Cross-Software Middleware Workflows',
      icon: <RefreshCw className="w-4 h-4" />,
      situation: 'Staff spend 15 to 20 hours each week manually copying customer records between spreadsheets, email, invoices, and project tools.',
      howWeFixIt: 'We connect your existing platforms using resilient Make/n8n webhooks so data moves automatically with zero human copy-paste errors.',
      outcome: 'Eliminates repetitive data entry and returns 20+ productive hours per team member every week.'
    },
    {
      id: 'messy-crm',
      problem: 'Disorganized & Unnurtured CRM',
      solutionTitle: 'Automated CRM Deal Pipelines',
      icon: <Database className="w-4 h-4" />,
      situation: 'Your CRM is a passive database of untracked contacts, missing phone numbers, forgotten follow-ups, and unclear deal stages.',
      howWeFixIt: 'We configure structured deal stages in GoHighLevel or HubSpot, set up automated pipeline triggers, and automate contact hygiene.',
      outcome: 'A clear, visual pipeline where every deal is tracked, scored, and automatically nurtured until closing.'
    },
    {
      id: 'customer-questions',
      problem: 'Repetitive Customer Inquiries',
      solutionTitle: 'AI Knowledge-Base Agent',
      icon: <HelpCircle className="w-4 h-4" />,
      situation: 'Your team answers the exact same routine questions daily regarding pricing, availability, service policies, and onboarding.',
      howWeFixIt: 'We train a customized AI customer support agent on your company documentation to resolve 70%+ of standard inquiries instantly.',
      outcome: 'Instant answers for customers around the clock, freeing human staff for complex client engagements.'
    },
    {
      id: 'manual-booking',
      problem: 'Back-and-Forth Scheduling',
      solutionTitle: 'Direct Calendar Locking & Reminders',
      icon: <Calendar className="w-4 h-4" />,
      situation: 'Scheduling meetings via back-and-forth emails leads to delayed bookings and high appointment cancellation rates.',
      howWeFixIt: 'We install automated calendar booking links with time-zone detection, automated deposit collection, and multi-channel SMS reminders.',
      outcome: 'Clients book themselves directly, and automated SMS reminders reduce no-shows by 40%+.'
    },
    {
      id: 'content-slow',
      problem: 'Manual Content Production',
      solutionTitle: 'Automated Media Repurposing',
      icon: <Video className="w-4 h-4" />,
      situation: 'Producing weekly client updates, video clips, and market summaries takes days of manual effort, leading to inconsistent branding.',
      howWeFixIt: 'We engineer an automated repurposing pipeline that takes a single video or article and generates snippets, captions, and posts automatically.',
      outcome: '5x higher communication cadence with only 15 minutes of executive review per week.'
    },
    {
      id: 'leads-cold',
      problem: 'Dormant Past Leads',
      solutionTitle: 'Automated Database Reactivation',
      icon: <Flame className="w-4 h-4" />,
      situation: 'Prospects who do not buy immediately are forgotten, leaving thousands in potential revenue sitting dormant in old contact spreadsheets.',
      howWeFixIt: 'We build automated educational email and SMS sequences that continuously deliver value and re-engage cold contacts.',
      outcome: 'Reactivates past inquiries and generates consistent new consultations from leads you already paid for.'
    }
  ];

  const [activeProblemId, setActiveProblemId] = useState(problems[0].id);
  const activeItem = problems.find((p) => p.id === activeProblemId) || problems[0];

  return (
    <section className="py-24 sm:py-32 md:py-40 bg-brand-black text-brand-offWhite relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-brand-border text-brand-silver text-xs font-mono uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            Operational Diagnosis
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-[1.08]">
            What Is Taking <br />
            <span className="text-brand-silver">Too Much Time?</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-silver mt-5 leading-relaxed font-normal">
            Select the operational bottleneck currently slowing your business down to see the exact automated system we engineer to eliminate it.
          </p>
        </div>

        {/* Diagnostic Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Minimalist Problem Selector */}
          <div className="lg:col-span-5 divide-y divide-brand-border/60 border-y border-brand-border/60">
            {problems.map((p) => {
              const isSelected = p.id === activeProblemId;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActiveProblemId(p.id)}
                  className={`w-full py-4 px-3 text-left transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? 'text-white bg-brand-charcoal/80 pl-5 border-l-2 border-brand-lime'
                      : 'text-brand-silver hover:text-white hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`p-1.5 rounded-lg transition-colors ${isSelected ? 'text-brand-lime bg-brand-lime/10' : 'text-brand-silver/60 group-hover:text-brand-silver'}`}>
                      {p.icon}
                    </span>
                    <div>
                      <h4 className="text-sm font-medium tracking-tight text-white">{p.problem}</h4>
                      <p className="text-[11px] font-mono text-brand-silver/70">Fix: {p.solutionTitle}</p>
                    </div>
                  </div>

                  <ArrowRight className={`w-3.5 h-3.5 transition-all duration-200 ${isSelected ? 'text-brand-lime translate-x-1 opacity-100' : 'text-brand-silver/30 opacity-0 group-hover:opacity-100'}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Engineered Solution Briefing Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-8 sm:p-12 shadow-2xl relative">
              {/* Header Meta */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-brand-border">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-lime flex items-center gap-2 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-lime shadow-lime-glow-sm" />
                  Target Architecture
                </span>
                <span className="text-xs font-mono text-brand-silver">
                  Diagnosis: {activeItem.problem}
                </span>
              </div>

              {/* Solution Title */}
              <div className="mt-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-tight">
                  {activeItem.solutionTitle}
                </h3>
              </div>

              {/* Problem Analysis */}
              <div className="mt-6 p-5 rounded-2xl bg-brand-dark border border-brand-border space-y-1.5">
                <span className="text-[11px] font-mono uppercase text-brand-silver font-semibold tracking-wider">
                  The Root Cause:
                </span>
                <p className="text-sm text-brand-silver leading-relaxed font-normal">
                  {activeItem.situation}
                </p>
              </div>

              {/* How Pinnancle Fixes It */}
              <div className="mt-4 p-5 rounded-2xl bg-brand-dark border border-brand-border space-y-1.5">
                <span className="text-[11px] font-mono uppercase text-brand-lime font-semibold tracking-wider">
                  The Engineered Solution:
                </span>
                <p className="text-sm text-white leading-relaxed font-normal">
                  {activeItem.howWeFixIt}
                </p>
              </div>

              {/* Expected Outcome */}
              <div className="mt-4 p-5 rounded-2xl bg-brand-card border border-brand-borderLight flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-mono uppercase text-brand-silver font-semibold tracking-wider">
                    Measurable Return:
                  </span>
                  <p className="text-sm font-medium text-white mt-0.5">
                    {activeItem.outcome}
                  </p>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="mt-8 pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-mono text-brand-silver">
                  Ready to deploy this system?
                </span>
                <MagneticButton
                  to="/book"
                  variant="primary"
                  size="md"
                  showArrow={true}
                >
                  Automate This Workflow
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
