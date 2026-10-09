import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles, Zap, Calculator, ShieldCheck } from 'lucide-react';
import AutomationAssessment from '../components/AutomationAssessment';
import RoiTimeSavedCalculator from '../components/RoiTimeSavedCalculator';
import WhatCanWeAutomateTool from '../components/WhatCanWeAutomateTool';
import WhatIsTakingTooMuchTime from '../components/WhatIsTakingTooMuchTime';
import MagneticButton from '../components/MagneticButton';
import ErrorBoundary from '../components/ErrorBoundary';

export default function AutomationAssessmentPage() {
  useEffect(() => {
    document.title = 'AI Automation Assessment & Time-Saved Calculator | Pinnancle Group';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-brand-black text-brand-offWhite min-h-screen pt-28 pb-20">
      {/* Top Breadcrumb & Page Header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 mb-12 sm:mb-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-brand-silver mb-8">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-brand-silver/50" />
          <span className="text-brand-silver/70">Tools</span>
          <ChevronRight className="w-3.5 h-3.5 text-brand-silver/50" />
          <span className="text-brand-lime font-medium">Automation Assessment & ROI Calculator</span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-brand-border text-brand-lime text-xs font-mono uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5" />
            Interactive Diagnostics Suite
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-[1.08]">
            Assess Your Operations. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-light to-brand-silver">
              Calculate Time Saved.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-brand-silver mt-5 leading-relaxed font-normal">
            Discover where manual tasks are slowing down your team, calculate the operational cost of repetitive work, and get tailored architecture recommendations for your business.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#assessment-tool"
              className="px-5 py-2.5 rounded-full bg-brand-lime text-black font-semibold text-xs font-mono uppercase tracking-wider hover:bg-white transition-colors"
            >
              Start 7-Question Assessment ↓
            </a>
            <a
              href="#roi-tool"
              className="px-5 py-2.5 rounded-full bg-brand-charcoal border border-brand-border hover:border-brand-lime text-white text-xs font-mono uppercase tracking-wider transition-colors"
            >
              Open ROI Calculator ↓
            </a>
          </div>
        </div>
      </div>

      {/* 01. 7-Question Automation Readiness Diagnostic */}
      <div id="assessment-tool">
        <ErrorBoundary title="Automation Assessment Diagnostic">
          <AutomationAssessment />
        </ErrorBoundary>
      </div>

      {/* 02. Interactive ROI & Time-Saved Calculator */}
      <div id="roi-tool">
        <ErrorBoundary title="ROI Time-Saved Calculator">
          <RoiTimeSavedCalculator />
        </ErrorBoundary>
      </div>

      {/* 03. "What Can We Automate?" Multi-Select Problem Solver */}
      <div id="what-can-we-automate">
        <ErrorBoundary title="What Can We Automate Tool">
          <WhatCanWeAutomateTool />
        </ErrorBoundary>
      </div>

      {/* 04. "What Is Taking Too Much Time?" Operational Diagnosis */}
      <div id="operational-diagnosis">
        <ErrorBoundary title="Operational Bottlenecks Analysis">
          <WhatIsTakingTooMuchTime />
        </ErrorBoundary>
      </div>

      {/* Bottom Consultation CTA */}
      <section className="py-20 sm:py-28 bg-brand-dark/50 border-t border-brand-border text-center">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-12">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold block mb-3">
            Ready For A Custom Operational Audit?
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Review Your Findings With Our Technical Team.
          </h2>
          <p className="text-sm sm:text-base text-brand-silver max-w-2xl mx-auto mt-4 leading-relaxed">
            Book a 30-minute scoping consultation. We’ll review your assessment score, inspect your software tools, and design an actionable automation blueprint.
          </p>
          <div className="mt-8 flex justify-center">
            <MagneticButton to="/book" variant="primary" size="lg" showArrow={true}>
              Book Your Technical Scoping Call
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
