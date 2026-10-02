import React, { useState } from 'react';
import { Sparkles, Calendar, Users, Rocket, Trophy, Globe2, ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function OurStorySection() {
  const [activeStep, setActiveStep] = useState(0);

  const storyChapters = [
    {
      phase: '2023',
      headline: 'Three People. One Decision.',
      narrative: 'Pinnancle Group began with three people working together to help businesses with websites and tender opportunities. We started with a simple belief: technology should be practical and produce real business results.',
      keyFact: '3 Founders in London & Lagos'
    },
    {
      phase: 'The Lesson',
      headline: 'We Learned From Real Businesses.',
      narrative: 'Working closely with different companies showed us that almost all businesses struggled with the exact same bottlenecks: Too much manual work. Missed leads. Slow follow-up. Disconnected tools. Poor customer communication. Technology was everywhere, but none of it worked together.',
      keyFact: 'Pattern Recognition Across 20+ Audits'
    },
    {
      phase: 'The Pivot',
      headline: 'We Started Building Systems.',
      narrative: 'We realized that a static website alone does not fix broken operations. We expanded into CRM automation, workflow automation, AI agents, and business automation—connecting the moving parts of modern companies so leads and data flow automatically.',
      keyFact: 'From Web Design to Complete Systems'
    },
    {
      phase: 'The Growth',
      headline: 'Three Became Seven.',
      narrative: 'To handle complete end-to-end business operations, our team grew into seven specialists covering: AI Automation, CRM, Web Design, Tender Support, Graphic Design, Video, and AI Media. No middle managers—just senior practitioners.',
      keyFact: '7 Dedicated In-House Specialists'
    },
    {
      phase: 'Today',
      headline: 'And The Work Kept Growing.',
      narrative: 'Today, Pinnancle Group delivers mission-critical systems for businesses worldwide: 50+ businesses served, 100+ projects delivered, and a 4.9/5 verified client satisfaction rating across the UK, Nigeria, Europe, and North America.',
      keyFact: '50+ Businesses · 100+ Projects'
    }
  ];

  return (
    <section id="story" className="py-28 md:py-36 bg-brand-black text-brand-offWhite relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-brand-border text-brand-silver text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            The Pinnancle Journey
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-tight">
            We Started With <br />
            <span className="text-brand-silver">Three People.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-silver mt-4 leading-relaxed">
            Our journey from a small tender and web team to an international digital systems and AI automation agency.
          </p>
        </div>

        {/* Founders Story Visual Showcase */}
        <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] rounded-3xl overflow-hidden mb-10 border border-brand-border bg-brand-dark shadow-2xl group">
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
          <div className="absolute bottom-4 left-4 right-4 hidden sm:flex items-center justify-between text-xs font-mono text-brand-silver">
            <span className="px-3 py-1 rounded-full bg-brand-black/80 backdrop-blur-md border border-brand-border">
              "Technology should directly serve business outcomes."
            </span>
            <span className="px-3 py-1 rounded-full bg-brand-black/80 backdrop-blur-md border border-brand-border text-white">
              UK & Nigeria Continuous Operations
            </span>
          </div>
        </div>

        {/* Horizontal Timeline Selector */}
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
                <span>{ch.phase}</span> · <span>{ch.headline.slice(0, 24)}...</span>
              </button>
            );
          })}
        </div>

        {/* Cinematic Chapter Canvas */}
        <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-8 sm:p-12 shadow-2xl relative">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-brand-border">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-lime">
              Chapter 0{activeStep + 1} of 0{storyChapters.length}
            </span>
            <span className="text-xs font-mono text-brand-silver">
              {storyChapters[activeStep].keyFact}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
                {storyChapters[activeStep].headline}
              </h3>
              <p className="text-base sm:text-lg text-brand-silver leading-relaxed">
                {storyChapters[activeStep].narrative}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="p-6 rounded-2xl bg-brand-dark border border-brand-border text-center">
                <span className="text-[11px] font-mono uppercase tracking-widest text-brand-silver block">
                  Core Company Philosophy
                </span>
                <p className="text-sm sm:text-base font-semibold text-white mt-2 leading-relaxed">
                  "We Started By Helping Businesses Get Online. Today, We Help Businesses Work Smarter."
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl bg-brand-dark border border-brand-border text-xs text-brand-silver hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled={activeStep === storyChapters.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(storyChapters.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-xl bg-white text-black text-xs font-semibold hover:bg-brand-lime disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  Next Chapter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
