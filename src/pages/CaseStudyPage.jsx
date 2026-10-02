import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Quote, Maximize2, X, ExternalLink, Sparkles } from 'lucide-react';
import { caseStudies, getCaseStudyBySlug } from '../data/caseStudiesData';
import MagneticButton from '../components/MagneticButton';

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

  const currentIndex = caseStudies.findIndex((s) => s.slug === slug);
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
                Verified Enterprise Deployment
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
            {study.projectCost && (
              <span className="px-3 py-1 rounded-full bg-brand-dark border border-brand-lime/40 text-brand-lime text-xs font-mono">
                Investment: <strong className="text-white">{study.projectCost}</strong>
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-tight">
            {study.title}
          </h1>

          <p className="text-lg sm:text-xl text-brand-silver leading-relaxed max-w-3xl">
            {study.tagline}
          </p>

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
        <section className="py-16 space-y-12">
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

          {/* Multi-Layer System Architecture */}
          <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-8 sm:p-10 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-display font-bold text-white">
                System Architecture
              </h3>
              <span className="text-xs font-mono text-brand-lime">
                Live Production Topology
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
                    0{idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-brand-offWhite font-medium">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div className="p-6 rounded-2xl bg-brand-charcoal border border-brand-border space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-silver">
              Technologies Used
            </span>
            <div className="flex flex-wrap gap-2">
              {study.technologies.map((t, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-xl bg-brand-dark border border-brand-border text-xs font-mono text-white">
                  {t}
                </span>
              ))}
            </div>
          </div>

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
                  Whether you require AI lead qualification, real-time Slack/CRM triage, high-ticket calendar appointment funnels, or automated document pipelines, our engineers deploy production systems configured for your growth.
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
