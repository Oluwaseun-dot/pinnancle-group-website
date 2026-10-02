import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Bot, 
  Database, 
  Send, 
  CalendarCheck, 
  BellRing, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Pause,
  Layers,
  Activity
} from 'lucide-react';

const workflowSteps = [
  {
    id: 1,
    title: 'LEAD RECEIVED',
    subtitle: 'Multi-Channel Inbound Webhook',
    timing: 'T + 0.0s',
    engine: 'Webhook Gateway',
    tool: 'Typeform / Webhook / WhatsApp API',
    status: 'Captured',
    description: 'Inbound inquiry arrives via web form, WhatsApp, or phone call. The system ingests and sanitizes form inputs instantly.',
    payload: {
      source: 'web_consultation_form',
      prospect: 'Marcus Vance (COO, Logistics)',
      location: 'London, UK',
      inquiry: 'Need multi-location CRM automation & AI dispatch'
    }
  },
  {
    id: 2,
    title: 'AI QUALIFIES LEAD',
    subtitle: 'Intent & Sentiment Analysis',
    timing: 'T + 3.2s',
    engine: 'AI Reasoning Agent',
    tool: 'Claude 3.5 / OpenAI GPT-4o',
    status: 'Scored 94/100',
    description: 'Autonomous agent evaluates business size, budget parameters, project urgency, and technical feasibility in seconds.',
    payload: {
      budget_tier: 'Enterprise (£15k - £30k)',
      intent_score: 94,
      classification: 'High-Priority Qualified Lead',
      action_plan: 'Direct Senior Partner Calendar Routing'
    }
  },
  {
    id: 3,
    title: 'CRM UPDATED',
    subtitle: 'Pipeline & Record Sync',
    timing: 'T + 5.1s',
    engine: 'Database Middleware',
    tool: 'HubSpot / GoHighLevel / Airtable',
    status: 'Record Created',
    description: 'Lead profile is automatically populated, tagged with industry metadata, and assigned to an executive pipeline stage.',
    payload: {
      crm_id: 'GHL_REC_849204',
      stage: 'Discovery & Consultation Pending',
      lead_owner: 'Ayodeji Moses',
      tags: ['Enterprise', 'UK-Logistics', 'Q4-Rollout']
    }
  },
  {
    id: 4,
    title: 'FOLLOW-UP SENT',
    subtitle: 'Personalized Omni-Channel Dispatch',
    timing: 'T + 6.8s',
    engine: 'Communications Engine',
    tool: 'Twilio SMS / SendGrid / WhatsApp',
    status: 'Delivered',
    description: 'Prospect receives a personalized, human-quality SMS and executive briefing email with custom discovery slot options.',
    payload: {
      channels: ['WhatsApp Business', 'Executive Email'],
      message: 'Hello Marcus, we reviewed your dispatch requirements...',
      booking_link_attached: true
    }
  },
  {
    id: 5,
    title: 'APPOINTMENT BOOKED',
    subtitle: 'Live Calendar Locking',
    timing: 'T + 11.4s',
    engine: 'Scheduling Gateway',
    tool: 'Cal.com / Google Workspace',
    status: 'Confirmed',
    description: 'Client selects a verified calendar slot. Google Meet briefing room and calendar invites are auto-generated.',
    payload: {
      slot: 'Thursday 14:00 BST',
      meeting_room: 'meet.google.com/pnn-arch-meet',
      calendar_invite: 'Sent to all attendees',
      deposit_status: 'Pre-Authorized'
    }
  },
  {
    id: 6,
    title: 'TEAM NOTIFIED',
    subtitle: 'Slack & Operations Dispatch',
    timing: 'T + 13.5s',
    engine: 'Operational Notification',
    tool: 'Slack #sales-leads / Mobile Push',
    status: 'Dispatched',
    description: 'Technical and sales teams receive instant briefing cards with prospect background, CRM link, and scheduled call details.',
    payload: {
      channel: '#commercial-operations',
      alert: '🎉 New Enterprise Consultation Confirmed',
      briefing_file: 'client_intake_849204.pdf',
      sla_met: 'Completed in < 15 seconds'
    }
  }
];

export default function LiveWorkflowPipeline() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-cycle through the 6 pipeline nodes
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentStepData = workflowSteps[activeStep];

  return (
    <div className="w-full rounded-3xl bg-brand-charcoal/90 border border-brand-border p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-lime/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-border">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold mb-1">
            <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
            <span>Autonomous Pipeline Simulator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
            How The Machine Operates In Real-Time
          </h3>
          <p className="text-xs sm:text-sm text-brand-silver mt-1">
            Watch an inbound lead convert from raw web form to confirmed consultation with zero human intervention.
          </p>
        </div>

        {/* Play / Pause Controller */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-dark border border-brand-border hover:border-brand-borderLight text-xs font-mono text-brand-silver hover:text-white transition-all"
            aria-label={isPlaying ? 'Pause simulation' : 'Play simulation'}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-brand-lime" />
                <span>Simulating (Auto)</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-brand-silver" />
                <span>Paused</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Pipeline Stepper Nodes */}
      <div className="py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 relative">
          {workflowSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            const isCompleted = idx < activeStep;

            return (
              <button
                key={step.id}
                type="button"
                onClick={() => {
                  setActiveStep(idx);
                  setIsPlaying(false);
                }}
                className={`text-left p-3.5 rounded-2xl border transition-all duration-300 relative group flex flex-col justify-between min-h-[110px] ${
                  isActive
                    ? 'bg-brand-dark border-brand-lime shadow-lime-glow-sm scale-[1.02]'
                    : isCompleted
                    ? 'bg-brand-dark/80 border-brand-borderLight/60 text-brand-silver'
                    : 'bg-brand-dark/40 border-brand-border/40 text-brand-silver/60 hover:border-brand-borderLight'
                }`}
              >
                {/* Step Index & Timing */}
                <div className="flex items-center justify-between w-full text-[10px] font-mono">
                  <span className={`px-1.5 py-0.5 rounded font-semibold ${
                    isActive ? 'bg-brand-lime text-black' : isCompleted ? 'bg-white/10 text-white' : 'bg-white/5 text-brand-silver'
                  }`}>
                    0{step.id}
                  </span>
                  <span className={isActive ? 'text-brand-lime' : 'text-brand-silver/50'}>
                    {step.timing}
                  </span>
                </div>

                {/* Step Title */}
                <div className="mt-2">
                  <div className={`text-xs font-mono font-bold tracking-tight leading-snug ${
                    isActive ? 'text-white' : 'text-brand-silver group-hover:text-white'
                  }`}>
                    {step.title}
                  </div>
                  <div className="text-[10px] text-brand-silver/60 truncate mt-0.5">
                    {step.tool.split('/')[0]}
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="mt-2 pt-2 border-t border-brand-border/40 flex items-center gap-1.5 text-[9px] font-mono">
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    isActive ? 'bg-brand-lime animate-ping' : isCompleted ? 'bg-brand-lime' : 'bg-brand-silver/30'
                  }`} />
                  <span className={isActive ? 'text-brand-lime font-semibold' : 'text-brand-silver/50'}>
                    {step.status}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Real-time Telemetry & Data Inspection Panel */}
      <div className="rounded-2xl bg-brand-dark border border-brand-border p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Column: Stage Breakdown */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-0.5 rounded-full bg-brand-lime/10 text-brand-lime border border-brand-lime/30 font-semibold">
              STAGE 0{currentStepData.id} OF 06
            </span>
            <span className="text-white font-semibold">
              {currentStepData.title}
            </span>
            <span className="text-brand-silver/60">·</span>
            <span className="text-brand-silver font-mono text-[11px]">
              {currentStepData.timing}
            </span>
          </div>

          <p className="text-sm sm:text-base text-brand-silver leading-relaxed">
            {currentStepData.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-brand-silver">
            <div className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-brand-lime" />
              <span className="text-white font-medium">Engine:</span>
              <span>{currentStepData.engine}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-brand-lime" />
              <span className="text-white font-medium">Platform:</span>
              <span>{currentStepData.tool}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Code Payload Telemetry */}
        <div className="lg:col-span-5 bg-black/60 rounded-xl border border-brand-border/80 p-4 font-mono text-xs overflow-hidden">
          <div className="flex items-center justify-between pb-2 border-b border-brand-border/60 text-[10px] text-brand-silver/70 mb-2.5">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
              LIVE TELEMETRY STREAM
            </span>
            <span className="text-brand-lime">STATUS 200 OK</span>
          </div>
          <pre className="text-brand-silver text-[11px] leading-relaxed overflow-x-auto select-all">
            {JSON.stringify(currentStepData.payload, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
