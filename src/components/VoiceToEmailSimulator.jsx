import React, { useState } from 'react';
import {
  Mic,
  Send,
  Mail,
  Database,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Play,
  Lock,
  User,
  Check,
  Sparkles,
  Terminal
} from 'lucide-react';

export default function VoiceToEmailSimulator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const steps = [
    {
      id: 'voice-input',
      title: 'Voice Memo Intake',
      stateName: 'RAW TRANSCRIPT',
      badge: 'Step 01 / 05',
      desc: 'Executive records a spontaneous voice instruction via mobile Telegram bot while in transit.'
    },
    {
      id: 'access-transcribe',
      title: 'Auth & Semantic Parsing',
      stateName: 'PARSING INTENT',
      badge: 'Step 02 / 05',
      desc: 'System verifies Telegram user ID in Supabase, invokes OpenAI Whisper for transcription, and analyzes parameters with GPT-4o.'
    },
    {
      id: 'clarification',
      title: 'AI Clarification Loop',
      stateName: 'AWAITING CLARIFICATION',
      badge: 'Step 03 / 05',
      desc: 'AI detects missing email address for "John", pauses execution, and requests clarification from the user.'
    },
    {
      id: 'draft-review',
      title: 'Human-in-the-Loop Review',
      stateName: 'PENDING CONFIRMATION',
      badge: 'Step 04 / 05',
      desc: 'Complete draft is generated and staged in Telegram for mandatory human review before dispatch.'
    },
    {
      id: 'dispatch-audit',
      title: 'Gmail Dispatch & Audit Log',
      stateName: 'SENT',
      badge: 'Step 05 / 05',
      desc: 'User approves draft; Gmail API delivers email; Supabase updates state to SENT with full audit timestamp.'
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlayingAudio(false);
  };

  return (
    <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-lime/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-brand-border">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-brand-dark border border-brand-lime/40 text-brand-lime text-xs font-mono uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Interactive Architecture Walkthrough
            </span>
            <span className="text-xs font-mono text-brand-silver">
              Live State Machine Simulation
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            See the Voice-to-Email Agent in Action
          </h3>
          <p className="text-sm text-brand-silver mt-1 max-w-2xl">
            Step through an authentic scenario showing how missing details trigger an AI clarification loop and how human confirmation prevents unverified dispatch.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-brand-dark border border-brand-border text-xs font-mono text-brand-silver hover:text-white hover:border-brand-borderLight transition-colors self-start md:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Simulation
        </button>
      </div>

      {/* Finite-State Machine Tracker */}
      <div className="py-6 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 min-w-[680px]">
          {steps.map((st, idx) => {
            const isActive = idx === currentStep;
            const isCompleted = idx < currentStep;
            return (
              <button
                key={st.id}
                onClick={() => setCurrentStep(idx)}
                className={`flex-1 p-3 rounded-xl border text-left transition-all ${
                  isActive
                    ? 'bg-brand-dark border-brand-lime shadow-lime-glow-sm'
                    : isCompleted
                    ? 'bg-brand-dark/50 border-brand-border text-brand-silver hover:border-brand-borderLight'
                    : 'bg-brand-dark/20 border-brand-border/40 text-brand-silver/50'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                  <span className={isActive ? 'text-brand-lime font-bold' : isCompleted ? 'text-white' : 'text-brand-silver/60'}>
                    0{idx + 1}
                  </span>
                  {isCompleted ? (
                    <Check className="w-3 h-3 text-brand-lime" />
                  ) : isActive ? (
                    <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                  ) : null}
                </div>
                <p className={`text-xs font-mono font-bold truncate ${isActive ? 'text-white' : isCompleted ? 'text-brand-silver' : 'text-brand-silver/50'}`}>
                  {st.stateName}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Simulation Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
        {/* Left: Simulated Telegram & System Interface */}
        <div className="lg:col-span-7 bg-brand-dark rounded-2xl border border-brand-border p-5 sm:p-6 flex flex-col justify-between min-h-[440px]">
          {/* Top Interface Bar */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-brand-border text-xs font-mono">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-lime" />
              <span className="font-semibold text-white">Telegram Agent Interface</span>
              <span className="text-brand-silver text-[11px]">@PinnancleVoiceAgentBot</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-brand-charcoal text-[10px] text-brand-lime border border-brand-border">
              AUTH: #USER-89241
            </span>
          </div>

          {/* Conversation Scroll Container */}
          <div className="space-y-4 flex-1 overflow-y-auto pr-1">
            {/* Step 0: Voice Note from User */}
            <div className="flex justify-end">
              <div className="max-w-[85%] bg-brand-charcoal border border-brand-border rounded-2xl rounded-tr-sm p-4 space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-brand-lime">
                    <Mic className="w-4 h-4 animate-pulse" />
                    <span className="text-xs font-mono font-bold">Voice Note (0:14)</span>
                  </div>
                  <span className="text-[10px] font-mono text-brand-silver">10:42 AM</span>
                </div>
                <div className="p-2.5 rounded-lg bg-brand-black/60 border border-brand-border/60 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-lime text-black flex items-center justify-center shrink-0">
                    <Play className="w-3.5 h-3.5 fill-black ml-0.5" />
                  </div>
                  <div className="flex-1 flex items-center gap-1">
                    {[16, 28, 12, 34, 20, 40, 24, 18, 30, 15, 25, 38, 22, 14, 30, 20, 16].map((h, i) => (
                      <span
                        key={i}
                        className="flex-1 bg-brand-silver/40 rounded-full"
                        style={{ height: `${h}px` }}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-brand-silver italic">
                  "Hey, send an email to John letting him know that our afternoon project review is pushed back by 15 minutes today. Tell him I look forward to syncing."
                </p>
              </div>
            </div>

            {/* Step 1: System Transcribe & Auth Check */}
            {currentStep >= 1 && (
              <div className="flex justify-start animate-fadeIn">
                <div className="max-w-[88%] bg-brand-black/80 border border-brand-border rounded-2xl rounded-tl-sm p-3.5 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-brand-lime">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Whisper Transcription Verified</span>
                  </div>
                  <p className="text-xs font-mono text-brand-offWhite bg-brand-dark p-2.5 rounded-lg border border-brand-border/60">
                    STATUS: Identity Authorized in Supabase.<br />
                    EXTRACTED: Recipient: "John" · Subject: "Review Delay" · Body: "Pushed 15 mins"<br />
                    <span className="text-amber-400 font-bold">WARNING: Recipient email address missing from memo.</span>
                  </p>
                </div>
              </div>
            )}

            {/* Step 2: AI Clarification Prompt & User Reply */}
            {currentStep >= 2 && (
              <div className="space-y-3 animate-fadeIn">
                {/* Bot asks for clarification */}
                <div className="flex justify-start">
                  <div className="max-w-[85%] bg-brand-black/90 border border-brand-lime/40 rounded-2xl rounded-tl-sm p-4 space-y-2 shadow-lg">
                    <div className="flex items-center gap-2 text-xs font-mono text-brand-lime font-bold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Clarification Required</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white leading-relaxed">
                      I have structured the draft for John regarding the 15-minute delay. However, his email address was not specified.
                    </p>
                    <p className="text-xs font-mono text-brand-silver">
                      Please reply with John's email address to continue:
                    </p>
                  </div>
                </div>

                {/* User responds with email */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] bg-brand-charcoal border border-brand-border rounded-2xl rounded-tr-sm p-3 space-y-1">
                    <p className="text-xs sm:text-sm text-brand-lime font-mono font-medium">
                      john.miller@acme-corp.com
                    </p>
                    <span className="text-[10px] font-mono text-brand-silver block text-right">10:43 AM</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Human-in-the-Loop Draft Review Card */}
            {currentStep >= 3 && (
              <div className="flex justify-start animate-fadeIn">
                <div className="max-w-[95%] bg-brand-black border border-brand-lime/50 rounded-2xl rounded-tl-sm p-4 sm:p-5 space-y-3 shadow-xl">
                  <div className="flex items-center justify-between pb-2 border-b border-brand-border">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-brand-lime" />
                      <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        Email Draft Ready for Review
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-dark border border-brand-lime/40 text-brand-lime">
                      PENDING CONFIRMATION
                    </span>
                  </div>

                  <div className="space-y-1 text-xs font-mono">
                    <p className="text-brand-silver">
                      <strong className="text-white">TO:</strong> john.miller@acme-corp.com
                    </p>
                    <p className="text-brand-silver">
                      <strong className="text-white">SUBJECT:</strong> Update: Running 15 Mins Late - Project Review Sync
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-brand-dark border border-brand-border text-xs text-brand-offWhite leading-relaxed space-y-2">
                    <p>Hi John,</p>
                    <p>
                      Apologies for the slight schedule shift—I am running approximately 15 minutes behind schedule for our project review today.
                    </p>
                    <p>Looking forward to connecting shortly.</p>
                    <p className="text-brand-silver italic">Best regards.</p>
                  </div>

                  {/* Interactive Button Simulation */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    <button
                      onClick={() => setCurrentStep(4)}
                      className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all ${
                        currentStep === 4
                          ? 'bg-brand-lime/20 text-brand-lime border border-brand-lime'
                          : 'bg-brand-lime text-black hover:bg-brand-limeLight shadow-lime-glow-sm'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                      {currentStep === 4 ? 'Approved & Sent' : 'Confirm & Send Email'}
                    </button>
                    <button
                      type="button"
                      disabled={currentStep === 4}
                      className="py-2 px-3 rounded-xl bg-brand-dark border border-brand-border text-xs font-mono text-brand-silver hover:text-white transition-colors"
                    >
                      Discard Draft
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Dispatched Confirmation */}
            {currentStep >= 4 && (
              <div className="flex justify-start animate-fadeIn">
                <div className="max-w-[85%] bg-brand-black/90 border border-brand-lime rounded-2xl rounded-tl-sm p-4 space-y-2 shadow-2xl">
                  <div className="flex items-center gap-2 text-xs font-mono text-brand-lime font-bold">
                    <CheckCircle2 className="w-4 h-4 text-brand-lime" />
                    <span>Email Successfully Dispatched</span>
                  </div>
                  <p className="text-xs text-brand-silver leading-relaxed">
                    Delivered via Gmail API to <strong className="text-white">john.miller@acme-corp.com</strong>.
                  </p>
                  <p className="text-[11px] font-mono text-brand-silver/80 pt-1 border-t border-brand-border">
                    Audit Log #TX-89241-09 recorded in Supabase (PostgreSQL). State: SENT.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Stepper Footer Controls */}
          <div className="pt-4 mt-4 border-t border-brand-border flex items-center justify-between gap-3">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-charcoal border border-brand-border text-xs font-mono text-brand-silver hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Previous
            </button>
            <span className="text-xs font-mono text-brand-silver">
              {currentStep + 1} of {steps.length}
            </span>
            <button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-lime text-black text-xs font-mono font-bold hover:bg-brand-limeLight disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next Step <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right: Technical State & Architectural Telemetry */}
        <div className="lg:col-span-5 bg-brand-dark rounded-2xl border border-brand-border p-5 sm:p-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-brand-border">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
                Architecture Telemetry
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-brand-charcoal text-[10px] font-mono text-white border border-brand-border">
                {steps[currentStep].badge}
              </span>
            </div>

            {/* Step Explanation */}
            <div className="space-y-2">
              <h4 className="text-lg font-display font-bold text-white">
                {steps[currentStep].title}
              </h4>
              <p className="text-xs sm:text-sm text-brand-silver leading-relaxed">
                {steps[currentStep].desc}
              </p>
            </div>

            {/* Live Database & State Machine Values */}
            <div className="rounded-xl bg-brand-black p-4 border border-brand-border space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-brand-silver pb-2 border-b border-brand-border/60">
                <span>DATABASE STATE</span>
                <span className="text-brand-lime font-bold">
                  {steps[currentStep].stateName}
                </span>
              </div>
              <div className="space-y-1.5 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-brand-silver">Auth Status:</span>
                  <span className="text-emerald-400">PASSED (Supabase)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-silver">Audio Engine:</span>
                  <span className="text-white">OpenAI Whisper</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-silver">Reasoning Node:</span>
                  <span className="text-white">GPT-4o Structured Parser</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-silver">Clarification Loop:</span>
                  <span className={currentStep === 2 ? 'text-amber-400 font-bold' : 'text-brand-silver'}>
                    {currentStep === 2 ? 'ACTIVE (Missing Email)' : currentStep > 2 ? 'RESOLVED' : 'STANDBY'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-silver">Human Approval:</span>
                  <span className={currentStep >= 4 ? 'text-emerald-400 font-bold' : currentStep === 3 ? 'text-amber-400 font-bold' : 'text-brand-silver'}>
                    {currentStep >= 4 ? 'CONFIRMED' : currentStep === 3 ? 'AWAITING USER' : 'PENDING'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-silver">Delivery Channel:</span>
                  <span className={currentStep >= 4 ? 'text-brand-lime font-bold' : 'text-brand-silver'}>
                    {currentStep >= 4 ? 'Gmail API Delivered' : 'Gmail API Gated'}
                  </span>
                </div>
              </div>
            </div>

            {/* Security Guardrail Summary */}
            <div className="p-3.5 rounded-xl bg-brand-charcoal/70 border border-brand-border space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-white font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-lime" />
                <span>Deterministic Safety Guarantee</span>
              </div>
              <p className="text-[11px] text-brand-silver leading-relaxed">
                Zero chance of accidental email dispatch. If any parameter is ambiguous, the workflow enters a conversational hold rather than attempting to guess.
              </p>
            </div>
          </div>

          <div className="pt-4 mt-6 border-t border-brand-border flex items-center justify-between text-[11px] font-mono text-brand-silver">
            <span>Orchestration: n8n Cloud</span>
            <span>Audit: PostgreSQL</span>
          </div>
        </div>
      </div>
    </div>
  );
}
