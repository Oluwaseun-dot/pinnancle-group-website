import React, { useState } from 'react';
import { Sparkles, Calendar, Users, Rocket, Trophy, Globe2, ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function OurStorySection() {
  const [activeStep, setActiveStep] = useState(0);

  const storyChapters = [
    {
      phase: '2023 · The Genesis',
      headline: 'Three Founders. One Common Realization.',
      narrative: 'Pinnancle Group was founded in 2023 by Ayodeji Moses, Praise Salami, and Oluwaseun Olatunji. Working across London and Lagos, we initially focused on engineering high-conversion web platforms and preparing commercial procurement tenders.',
      keyFact: 'Ayodeji Moses · Praise Salami · Oluwaseun Olatunji'
    },
    {
      phase: 'The Observation',
      headline: 'We Learned From the Reality of Business.',
      narrative: 'As we audited more client operations, an identical pattern emerged across every company: manual data re-entry, slow customer response, untracked sales leads, and disconnected software tools. Technology was plentiful, but none of it talked to each other.',
      keyFact: 'Auditing 50+ SME & Enterprise Workflows'
    },
    {
      phase: 'The Architecture Pivot',
      headline: 'From Static Websites to Autonomous Systems.',
      narrative: 'We realized that a handsome website is useless if inbound leads sit unanswered in an inbox for hours. We expanded our core practice into AI conversational agents, multi-channel CRM pipelines, and Make/n8n business automation.',
      keyFact: 'Sub-60s Inbound Response Automation'
    },
    {
      phase: 'The Collective',
      headline: 'Three Pioneers Grew Into Seven Specialists.',
      narrative: 'To deliver complete enterprise ecosystems without outsourcing, our founding trio brought together seven multidisciplinary specialists: AI Engineers, Full-Stack Developers, CRM Architects, Media Editors, and Procurement Strategists.',
      keyFact: '7 In-House Specialists & Systems Engineers'
    },
    {
      phase: 'Present Day',
      headline: 'Built Between the UK & Nigeria. Delivered Worldwide.',
      narrative: 'Today, Pinnancle Group powers mission-critical automation systems for over 50 businesses globally—delivering measurable reductions in manual overhead, faster customer response, and higher commercial revenue.',
      keyFact: '50+ Businesses · 100+ Projects · 4.9/5 Rating'
    }
  ];

  return (
    <section id="story" className="py-24 sm:py-32 md:py-40 bg-brand-black text-brand-offWhite relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-brand-border text-brand-silver text-xs font-mono uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            Company Evolution
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-[1.08]">
            We Started With <br />
            <span className="text-brand-silver">Three People.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-silver mt-5 leading-relaxed font-normal">
            Our journey from a dedicated tender and web team to an international digital systems and AI automation agency.
          </p>
        </div>

        {/* Founders Story Visual Showcase */}
        <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] rounded-3xl overflow-hidden mb-12 border border-brand-border bg-brand-dark shadow-2xl group">
          <img
            src="/images/our-story-founders.jpg"
            alt="Pinnancle Group Co-Founders: Ayodeji Moses, Praise Salami, and Oluwaseun Olatunji in Strategic Planning Session"
            className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/40" />
          <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-xs font-mono text-white">
              Studio Archives · 2023
            </span>
            <span className="px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-lime/40 text-xs font-mono text-brand-lime flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
              Three Founders · London & Lagos
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 hidden sm:flex items-center justify-between text-xs font-mono text-brand-silver">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-white">
              "Technology should directly serve business outcomes."
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-brand-silver">
              UK & Nigeria Continuous Operations
            </span>
          </div>
        </div>

        {/* Horizontal Milestone Timeline Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {storyChapters.map((ch, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`px-4 py-2.5 rounded-full text-xs font-mono font-medium transition-all duration-200 shrink-0 border ${
                  isCurrent
                    ? 'bg-brand-charcoal text-white border-brand-lime shadow-lime-glow-sm'
                    : 'bg-brand-dark border-brand-border text-brand-silver hover:text-white hover:border-brand-borderLight'
                }`}
              >
                <span>{ch.phase}</span>
              </button>
            );
          })}
        </div>

        {/* Milestone Detail Card */}
        <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-8 sm:p-12 shadow-2xl relative">
          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
              Milestone 0{activeStep + 1}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-tight">
              {storyChapters[activeStep].headline}
            </h3>
            <p className="text-base sm:text-lg text-brand-silver leading-relaxed font-normal pt-2">
              {storyChapters[activeStep].narrative}
            </p>

            <div className="pt-6 border-t border-brand-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs font-mono text-brand-silver">
                Key Deliverable: <strong className="text-white font-medium">{storyChapters[activeStep].keyFact}</strong>
              </span>

              <MagneticButton to="/about" variant="secondary" size="sm" showArrow={true}>
                Read Our Complete Story
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
