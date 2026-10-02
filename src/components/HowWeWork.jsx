import React, { useState } from 'react';
import { Compass, Lightbulb, PenTool, Code2, Rocket, LineChart, CheckCircle } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function HowWeWork() {
  const [activeStage, setActiveStage] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Discover',
      tagline: 'Deep Operational Audit',
      description: 'We understand your business model, customer touchpoints, software stack, and operational bottlenecks. We listen to where your staff lose time and where leads stall.',
      icon: <Compass className="w-5 h-5" />,
      deliverable: 'Operational Process Map & Bottleneck Audit'
    },
    {
      number: '02',
      title: 'Strategize',
      tagline: 'Opportunity Architecture',
      description: 'We identify what should be automated and where technology will create the highest commercial improvement. We calculate speed-to-lead gains and operational ROI.',
      icon: <Lightbulb className="w-5 h-5" />,
      deliverable: 'Automation Strategy & ROI Projection'
    },
    {
      number: '03',
      title: 'Design',
      tagline: 'Journey & System Blueprint',
      description: 'We architect the customer journey, multi-step workflow logic, CRM data pipelines, AI agent guardrails, and digital user experiences before touching production code.',
      icon: <PenTool className="w-5 h-5" />,
      deliverable: 'Technical Architecture Specifications'
    },
    {
      number: '04',
      title: 'Build',
      tagline: 'Specialist Development',
      description: 'Our specialists engineer the automations, develop required API microservices, configure CRM pipelines, tune AI models, and build custom web interfaces.',
      icon: <Code2 className="w-5 h-5" />,
      deliverable: 'Production-Hardened System Code'
    },
    {
      number: '05',
      title: 'Launch',
      tagline: 'Validation & Deployment',
      description: 'We rigorously test edge cases, validate data flow integrity with synthetic transactions, train your internal staff, and deploy the system into live production.',
      icon: <Rocket className="w-5 h-5" />,
      deliverable: 'Live Production Release & Staff Training'
    },
    {
      number: '06',
      title: 'Optimize',
      tagline: 'Continuous Performance Tuning',
      description: 'We monitor telemetry logs, analyze response speeds, review conversation transcripts, and refine workflows to ensure the system scales with your business growth.',
      icon: <LineChart className="w-5 h-5" />,
      deliverable: 'Ongoing Telemetry & Optimization Retainer'
    }
  ];

  return (
    <section className="py-28 md:py-36 bg-[#050505] text-brand-softWhite relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            Proven Delivery Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-tight">
            From Problem to System.
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 mt-4 leading-relaxed">
            We don’t believe in ad-hoc patches. Every engagement follows a disciplined engineering progression designed to eliminate operational friction and deliver verified commercial returns.
          </p>
        </div>

        {/* Process Stepper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const isSelected = activeStage === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStage(idx)}
                onMouseEnter={() => setActiveStage(idx)}
                data-cursor="interactive"
                data-cursor-label="STAGE"
                className={`p-8 rounded-3xl cursor-pointer transition-all duration-300 relative border ${
                  isSelected
                    ? 'bg-[#141414] border-brand-lime/40 shadow-2xl shadow-black/80 -translate-y-1'
                    : 'bg-[#0d0d0d] border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-2xl font-mono font-bold ${isSelected ? 'text-white' : 'text-neutral-500'}`}>
                    {step.number}
                  </span>
                  <div className={`p-3 rounded-2xl ${isSelected ? 'bg-brand-lime/10 text-brand-lime border border-brand-lime/20' : 'bg-white/5 text-neutral-400'}`}>
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 mt-1">
                  {step.tagline}
                </p>
                <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
                  {step.description}
                </p>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-medium text-neutral-300">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-lime shrink-0" />
                  <span>{step.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Note */}
        <div className="mt-16 p-8 rounded-3xl bg-[#0f0f0f] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-display font-semibold text-white">
              Every system is engineered for longevity and resilience.
            </h4>
            <p className="text-xs text-neutral-400 mt-1">
              Zero vendor lock-in. Full code documentation and administrative ownership transferred to your company.
            </p>
          </div>
          <MagneticButton to="/book" variant="primary" size="md">
            Schedule Discovery Audit
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
