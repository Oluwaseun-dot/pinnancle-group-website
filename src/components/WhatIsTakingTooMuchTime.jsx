import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, PhoneCall, Clock, RefreshCw, Database, HelpCircle, Calendar, Video, Flame } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function WhatIsTakingTooMuchTime() {
  const problems = [
    {
      id: 'missed-calls',
      problem: 'Missed Calls',
      solutionTitle: 'AI Receptionist',
      icon: <PhoneCall className="w-5 h-5" />,
      situation: 'When callers reach voicemail because your team is busy, over 80% hang up and immediately call a competitor.',
      howWeFixIt: 'We set up an AI phone receptionist and instant missed-call text-back that responds in under 5 seconds, answers caller questions, and books appointments around the clock.',
      outcome: 'Zero lost calls. Inbound callers are captured and booked even when your office is closed.'
    },
    {
      id: 'slow-response',
      problem: 'Slow Lead Response',
      solutionTitle: 'AI Lead Follow-Up',
      icon: <Clock className="w-5 h-5" />,
      situation: 'Inquiries sit in inboxes for hours while team members are in meetings or off duty, causing lead interest to collapse.',
      howWeFixIt: 'We build an automated response system that contacts every new inquiry via WhatsApp and SMS within 30 seconds to start the conversation while intent is hot.',
      outcome: 'Up to 3.8x higher conversion from web form inquiry to confirmed meeting.'
    },
    {
      id: 'manual-tasks',
      problem: 'Too Many Manual Tasks',
      solutionTitle: 'Business Automation',
      icon: <RefreshCw className="w-5 h-5" />,
      situation: 'Staff spend 15 to 20 hours every week manually copying information between spreadsheets, emails, invoices, and project tools.',
      howWeFixIt: 'We link your existing tools using resilient webhooks and automated workflows so data moves automatically without duplicate human effort.',
      outcome: 'Eliminates repetitive data entry and returns 20+ productive hours per team member every week.'
    },
    {
      id: 'messy-crm',
      problem: 'Messy CRM',
      solutionTitle: 'CRM Automation',
      icon: <Database className="w-5 h-5" />,
      situation: 'Your CRM is an unorganized list of outdated contacts with missing phone numbers, untracked stages, and forgotten leads.',
      howWeFixIt: 'We configure structured deal stages in GoHighLevel or HubSpot, set up automated pipeline triggers, and clean your data automatically.',
      outcome: 'A clear, visual pipeline where every deal is tracked and every sales rep knows their next action.'
    },
    {
      id: 'customer-questions',
      problem: 'Too Many Customer Questions',
      solutionTitle: 'AI Customer Support',
      icon: <HelpCircle className="w-5 h-5" />,
      situation: 'Your team answers the exact same 10 questions every day about pricing, opening hours, booking policies, and services.',
      howWeFixIt: 'We train an AI customer support agent on your company knowledge base to resolve 70%+ of common queries instantly across web and messaging.',
      outcome: 'Customers get answers in seconds, and your human staff only handles high-priority issues.'
    },
    {
      id: 'manual-booking',
      problem: 'Manual Appointment Booking',
      solutionTitle: 'AI Appointment Automation',
      icon: <Calendar className="w-5 h-5" />,
      situation: 'Back-and-forth emails asking "What time works for you?" result in delayed bookings and high no-show rates.',
      howWeFixIt: 'We install interactive calendar booking links with time-zone detection, automated deposit collection, and SMS confirmation reminders.',
      outcome: 'Clients book themselves directly, and automated SMS reminders cut appointment no-shows by 40%+.'
    },
    {
      id: 'content-slow',
      problem: 'Content Takes Too Long',
      solutionTitle: 'AI Content Automation',
      icon: <Video className="w-5 h-5" />,
      situation: 'Producing weekly videos, blog posts, and social media graphics takes days of manual effort, leading to inconsistent marketing.',
      howWeFixIt: 'We build an automated repurposing pipeline that takes a single video or article and automatically generates clips, captions, and posts.',
      outcome: '5x higher content volume with only 15 minutes of executive review per week.'
    },
    {
      id: 'leads-cold',
      problem: 'Leads Going Cold',
      solutionTitle: 'Automated Lead Nurturing',
      icon: <Flame className="w-5 h-5" />,
      situation: 'Prospects who do not buy immediately are forgotten, leaving thousands in potential revenue sitting dormant in old contact lists.',
      howWeFixIt: 'We create automated educational email and SMS sequences that consistently deliver value and reactivate past inquiries.',
      outcome: 'Reactivates past quote requests and generates consistent appointments from leads you already paid for.'
    }
  ];

  const [activeProblemId, setActiveProblemId] = useState(problems[0].id);
  const activeItem = problems.find((p) => p.id === activeProblemId) || problems[0];

  return (
    <section className="py-28 md:py-36 bg-brand-black text-brand-offWhite relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-brand-border text-brand-silver text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            Operational Diagnosis
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-tight">
            What Is Taking <br />
            <span className="text-brand-silver">Too Much Time?</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-silver mt-4 leading-relaxed">
            Select the bottleneck that is slowing your business down to see the exact system we build to solve it.
          </p>
        </div>

        {/* Interactive Problem Grid & Solution Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 8 Business Problems List */}
          <div className="lg:col-span-5 space-y-2">
            {problems.map((p) => {
              const isSelected = p.id === activeProblemId;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActiveProblemId(p.id)}
                  className={`w-full p-4 rounded-2xl text-left transition-all duration-200 flex items-center justify-between border ${
                    isSelected
                      ? 'bg-brand-charcoal border-brand-lime/80 shadow-lime-glow-sm text-white'
                      : 'bg-brand-dark border-brand-border text-brand-silver hover:text-white hover:border-brand-borderLight hover:bg-brand-card'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2 rounded-xl transition-colors ${isSelected ? 'bg-white/10 text-brand-lime' : 'bg-white/5 text-brand-silver'}`}>
                      {p.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white tracking-tight">{p.problem}</h4>
                      <p className="text-xs text-brand-silver font-mono">Solution: {p.solutionTitle}</p>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${isSelected ? 'text-brand-lime translate-x-1' : 'text-brand-borderLight'}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Concrete System Solution Showcase */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-8 sm:p-12 shadow-2xl relative">
              {/* Top Meta */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-brand-border">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-lime flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                  Target System Solution
                </span>
                <span className="text-xs font-mono text-brand-silver">
                  Problem: {activeItem.problem}
                </span>
              </div>

              {/* Solution Title */}
              <div className="mt-8">
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  {activeItem.solutionTitle}
                </h3>
              </div>

              {/* Problem Diagnosis */}
              <div className="mt-6 p-5 rounded-2xl bg-brand-dark border border-red-500/20 space-y-1.5">
                <span className="text-[11px] font-mono uppercase text-red-400 font-semibold tracking-wider">
                  The Issue:
                </span>
                <p className="text-sm text-brand-silver leading-relaxed">
                  {activeItem.situation}
                </p>
              </div>

              {/* How Pinnancle Fixes It */}
              <div className="mt-5 p-5 rounded-2xl bg-brand-dark border border-brand-border space-y-1.5">
                <span className="text-[11px] font-mono uppercase text-brand-lime font-semibold tracking-wider">
                  How We Solve It:
                </span>
                <p className="text-sm text-white leading-relaxed">
                  {activeItem.howWeFixIt}
                </p>
              </div>

              {/* Measurable Outcome */}
              <div className="mt-5 p-5 rounded-2xl bg-brand-card border border-brand-borderLight flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-lime shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-mono uppercase text-brand-silver font-semibold tracking-wider">
                    Expected Business Outcome:
                  </span>
                  <p className="text-sm font-medium text-white mt-0.5">
                    {activeItem.outcome}
                  </p>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="mt-8 pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-mono text-brand-silver">
                  Ready to eliminate this bottleneck?
                </span>
                <MagneticButton
                  to="/book"
                  variant="primary"
                  size="md"
                  showArrow={true}
                >
                  Automate This System
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
