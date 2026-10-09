import React, { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Zap,
  Building,
  Check,
  ShieldCheck
} from 'lucide-react';
import MagneticButton from './MagneticButton';
import { BOOKING_CALENDAR_URL } from '../config/bookingConfig';

export default function AutomationAssessment() {
  const questions = [
    {
      id: 1,
      title: 'How many leads do you receive each week?',
      desc: 'Count website inquiries, phone calls, social DMs, and form submissions.',
      options: [
        { label: 'Under 10 leads per week', score: 1, tag: 'Foundation Stage' },
        { label: '10 to 50 leads per week', score: 2, tag: 'Growing Volume' },
        { label: '50 to 200 leads per week', score: 3, tag: 'High Opportunity' },
        { label: 'Over 200 leads per week', score: 4, tag: 'Critical Scale' }
      ]
    },
    {
      id: 2,
      title: 'How quickly do you normally respond to new leads?',
      desc: 'Speed to lead directly influences conversion and close rates.',
      options: [
        { label: 'Within 5 minutes', score: 4, tag: 'Rapid Response' },
        { label: 'Within 1 to 4 hours', score: 3, tag: 'Moderate Response' },
        { label: 'Next business day', score: 2, tag: 'Delayed Response' },
        { label: 'Often days later or inconsistent', score: 1, tag: 'Major Conversion Risk' }
      ]
    },
    {
      id: 3,
      title: 'Do you manually follow up with leads?',
      desc: 'Do staff members type individual messages or is follow-up systemized?',
      options: [
        { label: 'Yes, fully manual follow-ups', score: 1, tag: 'High Labor' },
        { label: 'A few basic automated emails', score: 2, tag: 'Partial Automation' },
        { label: 'No structured follow-up process', score: 1, tag: 'High Opportunity' },
        { label: 'Multi-channel automated follow-up', score: 4, tag: 'Well Automated' }
      ]
    },
    {
      id: 4,
      title: 'Do customers book appointments online?',
      desc: 'How are consultations, site visits, or service appointments scheduled?',
      options: [
        { label: 'Yes, self-service online calendar', score: 4, tag: 'Automated Booking' },
        { label: 'Back-and-forth emails to find a time', score: 1, tag: 'High Friction' },
        { label: 'Manual phone calls only', score: 2, tag: 'Staff-Dependent' },
        { label: 'Not applicable to our model', score: 3, tag: 'N/A' }
      ]
    },
    {
      id: 5,
      title: 'Do you use a CRM?',
      desc: 'Where are customer records, sales pipelines, and notes tracked?',
      options: [
        { label: 'Yes, actively tracked & up to date', score: 4, tag: 'Organized CRM' },
        { label: 'Yes, but messy and underutilized', score: 2, tag: 'Needs Optimization' },
        { label: 'We use spreadsheets / Google Sheets', score: 1, tag: 'Manual Tracking' },
        { label: 'No system or contact database', score: 1, tag: 'High Opportunity' }
      ]
    },
    {
      id: 6,
      title: 'How much repetitive work does your team handle each week?',
      desc: 'Copying information, scheduling, answering FAQs, and reporting.',
      options: [
        { label: '5 to 10 hours per week', score: 1, tag: 'Moderate Overhead' },
        { label: '10 to 20 hours per week', score: 2, tag: 'Substantial Overhead' },
        { label: '20 to 40 hours per week', score: 3, tag: 'Heavy Overhead' },
        { label: 'Over 40 hours per week', score: 4, tag: 'Severe Bottleneck' }
      ]
    },
    {
      id: 7,
      title: 'Which tools does your business currently use?',
      desc: 'Select the primary environment where your team works daily.',
      options: [
        { label: 'Shopify / Ecommerce Platform', score: 3, tag: 'Ecommerce Stack' },
        { label: 'GoHighLevel / HubSpot / Salesforce', score: 4, tag: 'CRM Stack' },
        { label: 'WhatsApp / Phone / Email only', score: 2, tag: 'Communication Stack' },
        { label: 'Google Sheets / Spreadsheets / Slack', score: 2, tag: 'Scattered Stack' }
      ]
    }
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [leadInfo, setLeadInfo] = useState({ name: '', email: '', company: '' });
  const [submittedLead, setSubmittedLead] = useState(false);

  const currentQ = questions[currentIdx];

  const handleSelectOption = (opt) => {
    const updatedAnswers = { ...answers, [currentQ.id]: opt };
    setAnswers(updatedAnswers);

    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setAnswers({});
    setIsCompleted(false);
    setSubmittedLead(false);
  };

  // Calculate assessment areas
  const getReadinessResults = () => {
    const areas = [];
    
    // Check lead follow-up need
    if (answers[2]?.score <= 2 || answers[3]?.score <= 2) {
      areas.push({
        title: 'Lead Follow-Up & Fast Response',
        benefit: 'Respond to new inquiries in under 60 seconds via SMS/WhatsApp so high-intent prospects do not go to competitors.'
      });
    }

    // Check appointment booking need
    if (answers[4]?.score <= 2) {
      areas.push({
        title: 'Automated Appointment Booking',
        benefit: 'Eliminate back-and-forth emails with automated calendar locking and automated reminder notifications.'
      });
    }

    // Check CRM automation need
    if (answers[5]?.score <= 2) {
      areas.push({
        title: 'CRM Pipeline Automation',
        benefit: 'Centralize contacts, deal stages, and customer history in GoHighLevel or HubSpot without messy spreadsheets.'
      });
    }

    // Always include workflow integrations if repetitive hours are high
    if (answers[6]?.score >= 2 || areas.length < 3) {
      areas.push({
        title: 'Cross-App Workflow Integrations',
        benefit: 'Connect your web forms, spreadsheets, and emails so data syncs automatically with zero manual copying.'
      });
    }

    return areas.slice(0, 3);
  };

  const recommendedAreas = isCompleted ? getReadinessResults() : [];

  return (
    <section id="automation-assessment" className="py-20 sm:py-32 bg-brand-black text-brand-offWhite relative border-t border-brand-border">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-brand-border text-brand-lime text-xs font-mono uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5" />
            Operational Diagnostic
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            How Ready Is Your Business for Automation?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-brand-silver mt-3 leading-relaxed">
            Answer a few simple questions and see where automation could help your business save hours and convert more inquiries.
          </p>
        </div>

        {/* Assessment Card */}
        <div className="rounded-2xl sm:rounded-3xl bg-brand-charcoal border border-brand-border p-5 sm:p-8 md:p-12 shadow-2xl relative">
          {!isCompleted ? (
            <div className="space-y-8 animate-fadeIn">
              {/* Progress Indicator */}
              <div className="flex items-center justify-between pb-4 border-b border-brand-border text-xs font-mono">
                <span className="text-brand-lime font-bold">
                  Question {currentIdx + 1} of {questions.length}
                </span>
                <span className="text-brand-silver">
                  {Math.round(((currentIdx + 1) / questions.length) * 100)}% Completed
                </span>
              </div>

              {/* Question Header */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {currentQ.title}
                </h3>
                <p className="text-sm text-brand-silver">
                  {currentQ.desc}
                </p>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {currentQ.options.map((opt, i) => {
                  const isSelected = answers[currentQ.id]?.label === opt.label;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleSelectOption(opt)}
                      className={`p-5 rounded-2xl border text-left transition-all duration-200 group flex items-start justify-between gap-3 ${
                        isSelected
                          ? 'bg-brand-dark border-brand-lime text-white shadow-lime-glow-sm'
                          : 'bg-brand-dark/50 border-brand-border hover:border-brand-borderLight hover:text-white'
                      }`}
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-brand-silver">
                          {opt.tag}
                        </span>
                        <p className="text-sm sm:text-base font-semibold text-brand-offWhite group-hover:text-white">
                          {opt.label}
                        </p>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-colors ${
                          isSelected
                            ? 'bg-brand-lime border-brand-lime text-black'
                            : 'border-brand-border group-hover:border-brand-lime/60'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Footer */}
              <div className="pt-6 border-t border-brand-border flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentIdx === 0}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-silver hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Previous Question
                </button>
                <span className="text-xs font-mono text-brand-silver">
                  Click any option to advance
                </span>
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-8 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-border">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Diagnostic Result
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-display font-bold text-white">
                    Your business has several areas that could be automated.
                  </h3>
                </div>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-dark border border-brand-border text-xs font-mono text-brand-silver hover:text-white transition-colors self-start sm:self-auto"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Retake Assessment
                </button>
              </div>

              <p className="text-base text-brand-silver leading-relaxed">
                Based on your inquiry volume and team workflows, here are the highest-impact automation areas recommended for your operational model:
              </p>

              {/* Recommended Areas Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recommendedAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-brand-dark border border-brand-border space-y-2 hover:border-brand-lime/40 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-lime" />
                      <h4 className="font-display font-bold text-white text-base">
                        {area.title}
                      </h4>
                    </div>
                    <p className="text-xs text-brand-silver leading-relaxed">
                      {area.benefit}
                    </p>
                  </div>
                ))}
              </div>

              {/* Guidance & Booking Action */}
              <div className="p-6 rounded-2xl bg-brand-dark border border-brand-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-1 max-w-xl">
                  <h4 className="text-base font-display font-bold text-white">
                    Ready to explore these automation areas?
                  </h4>
                  <p className="text-xs text-brand-silver">
                    Schedule a 30-minute discovery consultation. We will audit your current process and design a clear implementation roadmap.
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <MagneticButton to={BOOKING_CALENDAR_URL} variant="primary" size="md" showArrow={true}>
                    Book a Consultation
                  </MagneticButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
