import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function FinalCTASection() {
  return (
    <section className="py-24 sm:py-32 md:py-40 bg-brand-black text-brand-offWhite relative border-t border-brand-border overflow-hidden">
      {/* Executive Consultation Studio Photographic Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src="/images/final-cta-studio.jpg"
          alt="Pinnancle Group Executive Consultation Studio"
          className="w-full h-full object-cover filter contrast-110 brightness-[0.35] opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/85 to-brand-black/95" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-charcoal/90 border border-brand-border text-xs font-mono text-brand-silver mb-8 shadow-xl backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-lime shadow-lime-glow-sm" />
          <span className="text-white font-medium">Start Your Operational Transformation</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.08] max-w-3xl mx-auto">
          Ready To Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-light to-brand-silver">
            A Better System?
          </span>
        </h2>

        {/* Text */}
        <p className="text-base sm:text-lg md:text-xl text-brand-silver max-w-2xl mx-auto mt-6 leading-relaxed font-normal">
          Tell us what is slowing your business down. We will analyze your operations, audit your manual bottlenecks, and map the exact automations to deploy.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mt-10">
          <MagneticButton
            to="/book"
            variant="primary"
            size="lg"
            showArrow={true}
            className="w-full sm:w-auto text-xs sm:text-sm font-semibold uppercase tracking-wider"
          >
            BOOK A CONSULTATION
          </MagneticButton>

          <MagneticButton
            to="/contact"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto text-xs sm:text-sm font-semibold uppercase tracking-wider"
          >
            CONTACT OUR DESK
          </MagneticButton>
        </div>

        {/* Assurance Signals */}
        <div className="mt-14 pt-8 border-t border-brand-border/60 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-brand-silver">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-lime" />
            Zero Obligation Scope
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            Direct Audit with Senior Specialist
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            UK & Nigeria Continuous Operations
          </span>
        </div>
      </div>
    </section>
  );
}
