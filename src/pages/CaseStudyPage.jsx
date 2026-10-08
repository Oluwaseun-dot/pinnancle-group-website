import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Quote,
  Maximize2,
  X,
  ExternalLink,
  Sparkles,
  Lock,
  RefreshCw,
  Sliders,
  UserCheck,
  AlertTriangle,
  Play,
  RotateCcw,
  Send,
  Mic,
  Mail,
  Database,
  Cpu,
  Layers,
  Terminal,
  Check,
  Clock,
  Briefcase,
  Activity,
  Layers3
} from 'lucide-react';
import { caseStudies, getCaseStudyBySlug } from '../data/caseStudiesData';
import MagneticButton from '../components/MagneticButton';
import VoiceToEmailSimulator from '../components/VoiceToEmailSimulator';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const study = getCaseStudyBySlug(slug);
  const [activeModalImage, setActiveModalImage] = useState(null);

  useEffect(() => {
    if (study) {
      document.title = `${study.title} | Pinnancle Group Case Study`;
    }
    window.scrollTo(0, 0);
  }, [slug, study]);

  if (!study) {
    return (
      <div className="min-h-screen pt-40 pb-20 text-center text-white bg-brand-black">
        <h2 className="text-3xl font-display font-bold">Case Study Not Found</h2>
        <p className="text-brand-silver mt-2">The requested project could not be located.</p>
        <div className="mt-6">
          <MagneticButton to="/work" variant="primary" size="md">
            Return to Work
          </MagneticButton>
        </div>
      </div>
    );
  }

  const currentIndex = caseStudies.findIndex((s) => s.slug === study.slug);
  const nextProject = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <div className="pt-32 pb-24 bg-brand-black text-brand-offWhite min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Back Link */}
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-xs font-mono text-brand-silver hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Work
        </Link>

        {/* Full-Bleed System Architecture & Production Visual */}
        {study.image && (
          <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] rounded-3xl overflow-hidden mb-12 border border-brand-border bg-brand-dark shadow-2xl">
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-full object-cover filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/40" />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-xs font-mono text-white">
                {study.client}
              </span>
              <span className="px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-lime/40 text-xs font-mono text-brand-lime flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
                Live Architecture
              </span>
            </div>
            <div className="absolute bottom-4 right-4 hidden sm:flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-xs font-mono text-brand-silver">
                Verified Production Deployment
              </span>
            </div>
          </div>
        )}

        {/* Project Hero Header */}
        <div className="space-y-6 pb-12 border-b border-brand-border">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-brand-border text-brand-lime text-xs font-mono uppercase tracking-widest font-semibold">
              {study.category}
            </span>
            <span className="text-xs font-mono text-brand-silver">
              Client: <strong className="text-white">{study.client}</strong> · {study.industry}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-tight">
            {study.title}
          </h1>

          {study.subtitle ? (
            <p className="text-xl sm:text-2xl text-white font-medium leading-relaxed max-w-3xl">
              {study.subtitle}
            </p>
          ) : null}

          <p className="text-base sm:text-lg text-brand-silver leading-relaxed max-w-3xl">
            {study.tagline}
          </p>

          {/* Project Details & Financial Overview Panel */}
          <div className="p-5 sm:p-6 rounded-2xl bg-brand-charcoal border border-brand-border mt-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-brand-silver block mb-4">
              Project Specification & Deployment Terms
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div>
                <span className="text-brand-silver block text-[10px]">INDUSTRY</span>
                <span className="text-white font-medium mt-0.5 block">{study.industry}</span>
              </div>
              <div>
                <span className="text-brand-silver block text-[10px]">DELIVERY</span>
                <span className="text-white font-medium mt-0.5 block">{study.delivery || 'Production Deployment'}</span>
              </div>
              {study.projectCost && (
                <div>
                  <span className="text-brand-silver block text-[10px]">PROJECT VALUE</span>
                  <span className="text-brand-lime font-bold mt-0.5 block">{study.projectCost}</span>
                </div>
              )}
              {study.maintenance && (
                <div>
                  <span className="text-brand-silver block text-[10px]">ONGOING SLA / MAINTENANCE</span>
                  <span className="text-white font-medium mt-0.5 block">{study.maintenance}</span>
                </div>
              )}
            </div>
          </div>

          {/* Quick Stats Bar */}
          <div className={`grid grid-cols-1 ${study.results.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-3'} gap-4 pt-6`}>
            {study.results.map((res, i) => (
              <div key={i} className="p-5 rounded-2xl bg-brand-charcoal border border-brand-border">
                <p className="text-3xl font-display font-bold text-white tracking-tight">
                  {res.metric}
                </p>
                <p className="text-xs text-brand-silver font-medium mt-1">
                  {res.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Breakdown */}
        <section className="py-16 space-y-16">
          {/* Executive Overview Summary */}
          {study.summary && (
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
                Executive Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Engineered for Real-World Operations
              </h2>
              <p className="text-base sm:text-lg text-brand-silver leading-relaxed">
                {study.summary}
              </p>
            </div>
          )}

          {/* What Was Happening Before */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-semibold">
              The Operational Problem
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              What Was Happening Before
            </h2>
            <p className="text-base sm:text-lg text-brand-silver leading-relaxed">
              {study.problem}
            </p>
            <div className="p-6 rounded-2xl bg-brand-charcoal border border-red-500/20 text-sm text-brand-silver leading-relaxed">
              {study.whatWasHappening}
            </div>
          </div>

          {/* The Commercial Opportunity */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
              Strategic Potential
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              The Commercial Opportunity
            </h2>
            <p className="text-base sm:text-lg text-brand-silver leading-relaxed">
              {study.theOpportunity}
            </p>
          </div>

          {/* Our Technical Approach */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              Solution Design
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Our Technical Approach
            </h2>
            <p className="text-base sm:text-lg text-brand-silver leading-relaxed">
              {study.ourApproach}
            </p>
          </div>

          {/* Before -> Automation -> After Operational Transformation Matrix */}
          {study.beforeAfter && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
                  Operational Transformation
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Before → Automation → After
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-6 rounded-2xl bg-brand-charcoal border border-red-500/20 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-400">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span>01. BEFORE AUTOMATION</span>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-silver leading-relaxed">
                    {study.beforeAfter.before}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-brand-charcoal border border-brand-lime/40 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-lime">
                    <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                    <span>02. THE AUTOMATED ENGINE</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white leading-relaxed">
                    {study.beforeAfter.automation}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-brand-charcoal border border-emerald-500/30 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>03. SYSTEM-LEVEL RESULT</span>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-silver leading-relaxed">
                    {study.beforeAfter.after}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Built for Reliability, Not Just Demonstration - Security & Reliability Grid */}
          {study.securityReliability && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Engineering Guardrails
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Built for Reliability, Not Just Demonstration
                </h3>
                <p className="text-sm text-brand-silver max-w-2xl">
                  Enterprise client communications require zero unverified assumptions. Our architecture enforces strict authorization, deterministic state transitions, and mandatory human confirmation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {study.securityReliability.map((guard, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-brand-charcoal border border-brand-border space-y-2 hover:border-brand-lime/40 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-lime" />
                      <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold">
                        {guard.title}
                      </h4>
                    </div>
                    <p className="text-xs text-brand-silver leading-relaxed">
                      {guard.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5 Core Engineering Components Deep-Dive */}
          {study.coreFeatures && study.coreFeatures.length > 0 && (
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
                  Core Engineering Components
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  The 5 Foundations of This Production Agent
                </h3>
                <p className="text-sm text-brand-silver max-w-2xl">
                  A breakdown of the five critical modules that transform a simple transcription script into a fault-tolerant, business-grade automation system.
                </p>
              </div>

              <div className="space-y-6">
                {study.coreFeatures.map((feat, idx) => (
                  <div
                    key={feat.id || idx}
                    className="rounded-3xl bg-brand-charcoal border border-brand-border p-6 sm:p-8 space-y-5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-brand-border">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-xl bg-brand-dark border border-brand-border font-mono text-xs text-brand-lime flex items-center justify-center font-bold">
                          0{idx + 1}
                        </span>
                        <h4 className="text-xl font-display font-bold text-white">
                          {feat.title}
                        </h4>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-brand-dark border border-brand-border text-[11px] font-mono text-brand-silver self-start sm:self-auto">
                        {feat.tag}
                      </span>
                    </div>

                    <p className="text-sm text-brand-silver leading-relaxed">
                      {feat.desc}
                    </p>

                    {/* Step Flowchart / States */}
                    {feat.visualFlow && (
                      <div className="pt-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-brand-silver block mb-3">
                          Sequential Node Execution:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
                          {feat.visualFlow.map((vStep, vIdx) => (
                            <div key={vIdx} className="p-3 rounded-xl bg-brand-dark border border-brand-border space-y-1">
                              <div className="flex items-center justify-between text-[10px] font-mono text-brand-lime">
                                <span>STAGE 0{vIdx + 1}</span>
                              </div>
                              <p className="text-xs font-mono font-bold text-white">{vStep.step}</p>
                              <p className="text-[11px] text-brand-silver leading-snug">{vStep.note}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {feat.states && (
                      <div className="pt-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-brand-silver block mb-3">
                          Deterministic State Machine Lifecycle:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
                          {feat.states.map((st, sIdx) => (
                            <div key={sIdx} className="p-3 rounded-xl bg-brand-dark border border-brand-border space-y-1">
                              <span className="text-[10px] font-mono text-brand-lime font-bold block truncate">
                                {st.name}
                              </span>
                              <p className="text-[11px] text-brand-silver leading-snug">
                                {st.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interactive Agent Simulator Widget (for voice-to-email case study) */}
          {study.slug === 'ai-voice-to-email-agent' && (
            <VoiceToEmailSimulator />
          )}

          {/* Key System Features */}
          {study.keyFeatures && study.keyFeatures.length > 0 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
                  Core Capabilities
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Key System Features & Automation Modules
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {study.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-brand-charcoal border border-brand-border">
                    <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0" />
                    <span className="text-xs sm:text-sm text-brand-offWhite font-medium">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Multi-Layer System Architecture */}
          <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-8 sm:p-10 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-display font-bold text-white">
                Production System Topology
              </h3>
              <span className="text-xs font-mono text-brand-lime">
                Live Production Architecture
              </span>
            </div>

            <div className="space-y-3">
              {study.systemArchitecture.map((arch, i) => (
                <div key={i} className="p-4 rounded-xl bg-brand-dark border border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-brand-lime shrink-0" />
                    <h5 className="font-semibold text-white text-sm">{arch.layer}</h5>
                  </div>
                  <p className="text-xs text-brand-silver max-w-lg">{arch.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Workflow */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold text-white">
              Automated Sequential Workflow
            </h3>
            <div className="space-y-2">
              {study.automationWorkflow.map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-brand-charcoal border border-brand-border">
                  <span className="w-6 h-6 rounded-full bg-brand-dark text-brand-lime font-mono text-xs flex items-center justify-center shrink-0 border border-brand-border">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-brand-offWhite font-medium">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Technology Stack Breakdown */}
          {study.technologiesDetailed && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
                  Technical Stack
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Technology Components & Architecture Roles
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {study.technologiesDetailed.map((tech, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-brand-charcoal border border-brand-border space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-white text-base">
                        {tech.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-dark border border-brand-border text-brand-lime">
                        {tech.role}
                      </span>
                    </div>
                    <p className="text-xs text-brand-silver leading-relaxed">
                      {tech.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Badges (Standard) */}
          <div className="p-6 rounded-2xl bg-brand-charcoal border border-brand-border space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-silver">
              Technologies & Protocols
            </span>
            <div className="flex flex-wrap gap-2">
              {study.technologies.map((t, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-xl bg-brand-dark border border-brand-border text-xs font-mono text-white">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Project Outcomes & System Delivery */}
          {study.projectOutcomes && (
            <div className="p-8 sm:p-10 rounded-3xl bg-brand-charcoal border border-brand-border space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
                  Measurable Operational Outcomes
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  System-Level Improvements & Reliability
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {study.projectOutcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-dark border border-brand-border">
                    <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-brand-offWhite">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Live Production Screenshots / Technical Artifacts */}
          {study.screenshots && study.screenshots.length > 0 && (
            <div className="space-y-6 pt-4">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-brand-lime" />
                    Verified System Delivery
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                    Live Production Screenshots & Architecture
                  </h3>
                </div>
                <p className="text-xs font-mono text-brand-silver">
                  Click any artifact to enlarge & inspect workflow
                </p>
              </div>

              {study.slug === 'shopify-product-content-mapping' && (
                <div className="p-4 sm:p-5 rounded-2xl bg-brand-charcoal border border-brand-lime/30 text-xs text-brand-silver leading-relaxed space-y-1.5">
                  <span className="text-white font-mono font-bold block flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-lime" />
                    Workflow Engine vs. Resulting Centralized System
                  </span>
                  <p>
                    The two authentic artifacts below document the complete implementation: <strong>Artifact 01</strong> shows the live Make.com automation scenario retrieving Shopify products, mapping attributes, prompting Claude AI, and creating articles. <strong>Artifact 02</strong> shows the resulting Airtable Content Calendar workspace where the client manages approved and drafted product publications.
                  </p>
                </div>
              )}

              {study.slug === 'shopify-product-to-social-automation' && (
                <div className="p-4 sm:p-5 rounded-2xl bg-brand-charcoal border border-brand-lime/30 text-xs text-brand-silver leading-relaxed space-y-1.5">
                  <span className="text-white font-mono font-bold block flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-lime" />
                    Production Architecture & Execution Pipeline
                  </span>
                  <p>
                    The production canvas below demonstrates the full automated pipeline: from automated HTTP retrieval of untagged Shopify products, through Claude AI social copywriting and code parsing, to asynchronous cloud video rendering via Shotstack API, deterministic wait-state polling, multi-channel social post generation, and lifecycle tagging on the Shopify store.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {study.screenshots.map((shot, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveModalImage(shot)}
                    className="group relative rounded-2xl bg-brand-charcoal border border-brand-border overflow-hidden hover:border-brand-lime/50 transition-all cursor-pointer shadow-lg hover:shadow-brand-lime/10"
                  >
                    <div className="relative aspect-[16/10] bg-brand-dark overflow-hidden">
                      <img
                        src={shot.url}
                        alt={shot.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/0 transition-colors" />
                      <div className="absolute top-3 right-3 p-2 rounded-xl bg-brand-black/80 backdrop-blur-md border border-brand-border text-white group-hover:text-brand-lime transition-colors">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span className="px-2.5 py-1 rounded-md bg-brand-black/85 backdrop-blur-md border border-brand-border text-[11px] font-mono text-brand-lime">
                          Artifact 0{idx + 1}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 space-y-2 bg-brand-charcoal">
                      <h4 className="font-display font-semibold text-white text-base group-hover:text-brand-lime transition-colors">
                        {shot.title}
                      </h4>
                      <p className="text-xs text-brand-silver line-clamp-2 leading-relaxed">
                        {shot.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Client Feedback Quote */}
          {study.clientFeedback && (
            <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-8 sm:p-10 shadow-2xl relative">
              <Quote className="w-8 h-8 text-brand-lime/40 mb-4" />
              <p className="text-lg sm:text-xl font-display font-medium text-white italic leading-relaxed">
                "{study.clientFeedback.quote}"
              </p>
              <div className="mt-6 pt-4 border-t border-brand-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-dark border border-brand-border flex items-center justify-center font-bold text-white">
                  {study.clientFeedback.author.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{study.clientFeedback.author}</p>
                  <p className="text-xs text-brand-silver">{study.clientFeedback.role}, {study.clientFeedback.company}</p>
                </div>
              </div>
            </div>
          )}

          {/* Custom Systems Inquiries Callout */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-brand-charcoal to-brand-dark border border-brand-lime/30 relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-brand-lime/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <span className="px-3 py-1 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-brand-lime text-xs font-mono uppercase tracking-widest font-semibold inline-block">
                  Tailored Business Automation Architecture
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Need a similar automated system for your business?
                </h3>
                <p className="text-sm text-brand-silver leading-relaxed">
                  Whether you require AI voice transcription, state-machine CRM workflows, multi-channel triage, or custom API pipelines, Pinnancle Group designs and deploys production systems engineered for reliability.
                </p>
              </div>
              <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                <MagneticButton to="/contact" variant="primary" size="md">
                  Book a Systems Consultation
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Next Project Footer */}
          {nextProject && (
            <div className="pt-12 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-brand-silver">
                  Next Case Study
                </span>
                <h4 className="text-xl font-display font-bold text-white mt-1">
                  {nextProject.title}
                </h4>
              </div>

              <MagneticButton
                to={`/work/${nextProject.slug}`}
                variant="primary"
                size="md"
                showArrow={true}
              >
                View Next Case Study
              </MagneticButton>
            </div>
          )}
        </section>
      </div>

      {/* Lightbox Modal */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 bg-brand-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[92vh] flex flex-col bg-brand-charcoal border border-brand-border rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-brand-border flex items-center justify-between bg-brand-dark/80 backdrop-blur-md">
              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-display font-bold text-white">
                  {activeModalImage.title}
                </h4>
                <p className="text-xs text-brand-silver">
                  {activeModalImage.caption}
                </p>
              </div>
              <button
                onClick={() => setActiveModalImage(null)}
                className="p-2.5 rounded-xl bg-brand-charcoal hover:bg-brand-border text-brand-silver hover:text-white transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Viewport */}
            <div className="p-4 sm:p-8 overflow-auto flex items-center justify-center bg-black/60 max-h-[75vh]">
              <img
                src={activeModalImage.url}
                alt={activeModalImage.title}
                className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain border border-brand-border shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
