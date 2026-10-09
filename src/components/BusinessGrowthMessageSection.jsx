import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, Layers } from 'lucide-react';
import MagneticButton from './MagneticButton';
import ScrollReveal from './ScrollReveal';

export default function BusinessGrowthMessageSection() {
  return (
    <section id="growth-message" className="py-14 sm:py-18 md:py-20 bg-brand-black text-brand-offWhite relative border-t border-brand-border overflow-hidden">
      {/* Subtle Ambient Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-lime/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        <ScrollReveal>
          <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-8 sm:p-12 md:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-brand-lime/10 via-transparent to-transparent pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-brand-border text-brand-lime text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            A Message For Business Owners
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-[1.1] max-w-3xl">
            Your Business Deserves More <br className="hidden sm:inline" />
            <span className="text-brand-silver">Than Just Hard Work.</span>
          </h2>

          {/* Narrative Content */}
          <div className="mt-8 space-y-5 text-base sm:text-lg text-brand-silver leading-relaxed font-normal max-w-3xl">
            <p>
              Running a business takes courage, time, and commitment. You have invested your energy into building something valuable, and every day you make decisions that shape its future.
            </p>

            <p>
              But growth should not mean spending more hours on repetitive tasks, chasing every lead manually, answering the same questions repeatedly, or trying to manage disconnected tools.
            </p>

            <p className="text-white font-medium text-lg sm:text-xl pt-2">
              At some point, growing your business means investing in better systems.
            </p>

            {/* System Breakdown Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 py-4 my-2">
              <div className="p-4 rounded-2xl bg-brand-dark border border-brand-border/80 space-y-1">
                <span className="text-xs font-mono text-brand-lime uppercase tracking-wider block font-semibold">The Right Website</span>
                <p className="text-xs sm:text-sm text-brand-offWhite">Helps customers immediately understand your value and converts visitors into inquiries.</p>
              </div>
              <div className="p-4 rounded-2xl bg-brand-dark border border-brand-border/80 space-y-1">
                <span className="text-xs font-mono text-brand-lime uppercase tracking-wider block font-semibold">The Right CRM</span>
                <p className="text-xs sm:text-sm text-brand-offWhite">Keeps track of every opportunity and ensures no qualified lead is forgotten.</p>
              </div>
              <div className="p-4 rounded-2xl bg-brand-dark border border-brand-border/80 space-y-1">
                <span className="text-xs font-mono text-brand-lime uppercase tracking-wider block font-semibold">Workflow Automation</span>
                <p className="text-xs sm:text-sm text-brand-offWhite">Frees your team from repetitive tasks so they can spend more time serving clients.</p>
              </div>
              <div className="p-4 rounded-2xl bg-brand-dark border border-brand-border/80 space-y-1">
                <span className="text-xs font-mono text-brand-lime uppercase tracking-wider block font-semibold">AI-Powered Systems</span>
                <p className="text-xs sm:text-sm text-brand-offWhite">Provides instant 24/7 responses and keeps business operations running smoothly.</p>
              </div>
            </div>

            <p>
              You do not need to change everything overnight. You need to identify what is holding your business back and make thoughtful investments that support your next stage of growth.
            </p>

            <p>
              At Pinnacle Group, we help businesses explore and implement practical digital systems, from websites and CRM workflows to AI agents and business automation. We start by understanding your needs, then recommend solutions that fit your goals, budget, and operations.
            </p>

            <div className="pt-4 border-t border-brand-border/80">
              <p className="text-white font-display font-bold text-xl sm:text-2xl tracking-tight leading-snug">
                Your next stage of growth may not require you to work harder. <br className="hidden sm:inline" />
                <span className="text-brand-lime">It may require you to build smarter systems.</span>
              </p>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="mt-10 flex flex-wrap items-center gap-4 pt-2">
            <MagneticButton to="/book" variant="primary" size="md" showArrow={true}>
              Let's Discuss Your Business Goals
            </MagneticButton>
            <MagneticButton to="/services" variant="secondary" size="md">
              Explore Our Services
            </MagneticButton>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
}
