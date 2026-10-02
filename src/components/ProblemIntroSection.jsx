import React, { useState } from 'react';
import { ArrowRight, Check, X, Sparkles, RefreshCw, Zap, Link as LinkIcon, Database, MessageSquare, Workflow, Users, Shield } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function ProblemIntroSection() {
  const [isConnected, setIsConnected] = useState(true);

  const disconnectedIssues = [
    { title: 'Delayed Responses', desc: 'Inbound leads wait hours while team members are in meetings or off-shift.' },
    { title: 'Fragmented Customer Data', desc: 'Notes buried in personal WhatsApps, spreadsheets, and sticky notes.' },
    { title: 'Manual Double Entry', desc: 'Teams re-typing data between accounting software, CRM, and project boards.' },
    { title: 'Lost Follow-Up Windows', desc: 'Quotes sent without automated cadences, leading to abandoned deals.' }
  ];

  const connectedAdvantages = [
    { title: 'Sub-30s Automated Response', desc: 'Conversational AI engages instantly across SMS, voice, and web chat.' },
    { title: 'Single Source of Truth', desc: 'Bi-directional synchronization between CRM, communication, and billing.' },
    { title: 'Zero Manual Data Entry', desc: 'Event-driven webhooks migrate customer records instantaneously.' },
    { title: 'Relentless Deal Nurture', desc: 'Multi-stage intelligent sequences reactivate dormant inquiries.' }
  ];

  return (
    <section className="py-28 md:py-36 bg-[#080808] text-brand-softWhite relative overflow-hidden border-t border-white/5">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Editorial Headline */}
        <div className="max-w-4xl mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            The Fundamental Problem
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-[1.08]">
            Your Business Already Has Systems. <br />
            <span className="text-neutral-400">
              The Question Is Whether They Work Together.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 mt-6 leading-relaxed">
            Businesses lose time when leads sit unanswered, customer information is scattered, repetitive tasks are handled manually, and teams spend hours moving information from one platform to another.
          </p>
          <p className="text-lg md:text-xl text-white font-medium mt-4">
            Pinnancle Group connects the moving parts. We design intelligent systems that bring AI, automation, CRM, communication, data, and digital experiences together into one connected business ecosystem.
          </p>
        </div>

        {/* Interactive Systems Connection Simulation */}
        <div className="rounded-3xl bg-[#101010] border border-white/10 p-6 sm:p-10 md:p-12 shadow-2xl relative">
          {/* Toggle Control */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                Interactive Architecture Simulation
              </p>
              <h4 className="text-xl font-display font-semibold text-white mt-1">
                {isConnected ? 'Connected Pinnancle Operating Ecosystem' : 'Traditional Disconnected Software Silos'}
              </h4>
            </div>

            <div className="flex items-center gap-2 bg-[#080808] border border-white/10 p-1 rounded-full self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setIsConnected(false)}
                className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  !isConnected
                    ? 'bg-red-500/20 text-red-300 border border-red-500/40 shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <X className="w-3.5 h-3.5" /> Disconnected
              </button>
              <button
                type="button"
                onClick={() => setIsConnected(true)}
                className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  isConnected
                    ? 'bg-white text-black font-semibold shadow-lg'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-brand-lime fill-brand-lime" /> Connected System
              </button>
            </div>
          </div>

          {/* Node Diagram */}
          <div className="py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
              {/* Central Connection Highway Indicator */}
              {isConnected && (
                <div className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-gradient-to-r from-transparent via-brand-lime/50 to-transparent blur-[0.5px] opacity-70 hidden md:block" />
              )}

              {/* Node 1: Inbound Frontline */}
              <div
                className={`p-6 rounded-2xl border transition-all duration-500 relative z-10 ${
                  isConnected
                    ? 'bg-[#161616] border-brand-lime/40 shadow-xl shadow-black/80'
                    : 'bg-[#0d0d0d] border-dashed border-red-500/30'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${isConnected ? 'bg-brand-lime/10 text-brand-lime border border-brand-lime/20' : 'bg-red-500/10 text-red-400'}`}>
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${isConnected ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'}`}>
                    {isConnected ? 'ONLINE 24/7' : 'UNANSWERED'}
                  </span>
                </div>
                <h5 className="font-semibold text-white text-base">Inbound Capture</h5>
                <p className="text-xs text-neutral-400 mt-2">
                  {isConnected ? 'AI receptionist answers calls, SMS, WhatsApp instantly.' : 'Voicemails pile up while team is busy.'}
                </p>
              </div>

              {/* Node 2: CRM Core */}
              <div
                className={`p-6 rounded-2xl border transition-all duration-500 relative z-10 ${
                  isConnected
                    ? 'bg-[#161616] border-brand-lime/40 shadow-xl shadow-black/80'
                    : 'bg-[#0d0d0d] border-dashed border-red-500/30'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${isConnected ? 'bg-brand-lime/10 text-brand-lime border border-brand-lime/20' : 'bg-red-500/10 text-red-400'}`}>
                    <Database className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${isConnected ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'}`}>
                    {isConnected ? 'SYNCHRONIZED' : 'SILOED'}
                  </span>
                </div>
                <h5 className="font-semibold text-white text-base">CRM & Records</h5>
                <p className="text-xs text-neutral-400 mt-2">
                  {isConnected ? 'Every conversation & intent score logged automatically.' : 'Data scattered across personal phones.'}
                </p>
              </div>

              {/* Node 3: Operations & Tasks */}
              <div
                className={`p-6 rounded-2xl border transition-all duration-500 relative z-10 ${
                  isConnected
                    ? 'bg-[#161616] border-brand-lime/40 shadow-xl shadow-black/80'
                    : 'bg-[#0d0d0d] border-dashed border-red-500/30'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${isConnected ? 'bg-brand-lime/10 text-brand-lime border border-brand-lime/20' : 'bg-red-500/10 text-red-400'}`}>
                    <Workflow className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${isConnected ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'}`}>
                    {isConnected ? 'AUTOPILOT' : 'MANUAL'}
                  </span>
                </div>
                <h5 className="font-semibold text-white text-base">Fulfillment Flow</h5>
                <p className="text-xs text-neutral-400 mt-2">
                  {isConnected ? 'Contracts generated & staff alerted with one click.' : 'Tedious copy-pasting between spreadsheets.'}
                </p>
              </div>

              {/* Node 4: Intelligence & Growth */}
              <div
                className={`p-6 rounded-2xl border transition-all duration-500 relative z-10 ${
                  isConnected
                    ? 'bg-[#161616] border-brand-lime/40 shadow-xl shadow-black/80'
                    : 'bg-[#0d0d0d] border-dashed border-red-500/30'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${isConnected ? 'bg-brand-lime/10 text-brand-lime border border-brand-lime/20' : 'bg-red-500/10 text-red-400'}`}>
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${isConnected ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'}`}>
                    {isConnected ? 'OPTIMIZED' : 'BLIND'}
                  </span>
                </div>
                <h5 className="font-semibold text-white text-base">Growth Engine</h5>
                <p className="text-xs text-neutral-400 mt-2">
                  {isConnected ? 'Autonomous follow-ups and real-time revenue KPIs.' : 'Zero visibility into where deals drop off.'}
                </p>
              </div>
            </div>
          </div>

          {/* Comparative Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-white/10">
            {(isConnected ? connectedAdvantages : disconnectedIssues).map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02]">
                <div className={`p-1 rounded-full mt-0.5 ${isConnected ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                  {isConnected ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                </div>
                <div>
                  <h6 className="text-sm font-semibold text-white">{item.title}</h6>
                  <p className="text-xs text-brand-silver mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
