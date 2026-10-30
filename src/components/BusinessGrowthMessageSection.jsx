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
          <div className="mt-8 space-y-6 text-base sm:text-lg text-brand-silver leading-relaxed font-normal max-w-3xl">
            <p>
              Running an ambitious business takes focus. But sustainable growth shouldn't mean spending extra hours on repetitive tasks, manually copying data between tools, or letting qualified sales leads slip away.
            </p>

            <p className="text-white font-medium text-lg sm:text-xl">
              At every stage of scale, operational momentum comes from investing in reliable systems:
            </p>

            {/* System Breakdown Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 py-2">
              <div className="p-4 sm:p-5 rounded-2xl bg-brand-dark border border-brand-border/80 space-y-1.5 hover:border-brand-lime/30 transition-colors">
                <div className="flex items-center gap-2 text-brand-lime font-mono text-xs uppercase tracking-wider font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                  The Right Website
                </div>
                <p className="text-xs sm:text-sm text-brand-offWhite leading-relaxed">
                  Communicates clear value and converts incoming traffic into booked consultations.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-brand-dark border border-brand-border/80 space-y-1.5 hover:border-brand-lime/30 transition-colors">
                <div className="flex items-center gap-2 text-brand-lime font-mono text-xs uppercase tracking-wider font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                  The Right CRM
                </div>
                <p className="text-xs sm:text-sm text-brand-offWhite leading-relaxed">
                  Organizes client pipelines, automates follow-ups, and recovers missed opportunities.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-brand-dark border border-brand-border/80 space-y-1.5 hover:border-brand-lime/30 transition-colors">
                <div className="flex items-center gap-2 text-brand-lime font-mono text-xs uppercase tracking-wider font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                  Workflow Automation
                </div>
                <p className="text-xs sm:text-sm text-brand-offWhite leading-relaxed">
                  Eliminates hours of manual data entry by synchronizing your daily software tools.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-brand-dark border border-brand-border/80 space-y-1.5 hover:border-brand-lime/30 transition-colors">
                <div className="flex items-center gap-2 text-brand-lime font-mono text-xs uppercase tracking-wider font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                  Autonomous AI Agents
                </div>
                <p className="text-xs sm:text-sm text-brand-offWhite leading-relaxed">
                  Provide immediate 24/7 customer qualification, triage inquiries, and lock calendar slots.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-border/80">
              <p className="text-white font-display font-bold text-xl sm:text-2xl tracking-tight leading-snug">
                Your next stage of growth doesn't require working harder. <br className="hidden sm:inline" />
                <span className="text-brand-lime">It requires building smarter systems.</span>
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
