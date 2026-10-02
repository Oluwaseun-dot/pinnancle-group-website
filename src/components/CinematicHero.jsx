import React, { useState } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Hero3DScene from './Hero3DScene';
import MagneticButton from './MagneticButton';
import ErrorBoundary from './ErrorBoundary';

export default function CinematicHero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  // Static Fallback for 3D Hero if needed
  const staticFallback = (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center opacity-20">
      <svg className="w-full h-full max-w-5xl" viewBox="0 0 1000 700" fill="none">
        <circle cx="500" cy="350" r="220" stroke="#333333" strokeWidth="1" strokeDasharray="6 6" />
        <circle cx="500" cy="350" r="120" stroke="#555555" strokeWidth="1" />
        <circle cx="500" cy="350" r="8" fill="#ccff00" />
        <path d="M 350 220 L 500 350 L 650 250 M 500 350 L 500 520 M 500 350 L 320 420 M 500 350 L 680 440" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <circle cx="350" cy="220" r="5" fill="#ffffff" />
        <circle cx="650" cy="250" r="5" fill="#ffffff" />
        <circle cx="500" cy="520" r="5" fill="#ccff00" />
        <circle cx="320" cy="420" r="5" fill="#888888" />
        <circle cx="680" cy="440" r="5" fill="#ffffff" />
      </svg>
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-brand-black">
      {/* 07. Cinematic Video & Command Center Visual Background with Dark Treatment */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* High-Resolution Command Center & Operations Visual Backdrop */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/hero-command-center.jpg"
            alt="Pinnancle Group Global Operations Center"
            className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 transition-opacity duration-1000 opacity-30"
          />
        </div>

        {/* High-quality technology & team operations background video */}
        {!videoFailed ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'><rect width='1920' height='1080' fill='%23050505'/></svg>"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoFailed(true)}
            className={`absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-20' : 'opacity-0'
            }`}
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-41551-large.mp4"
              type="video/mp4"
            />
          </video>
        ) : null}

        {/* Ambient Dark Treatment & Architectural Grid */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/90 to-brand-black/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/95 via-transparent to-brand-black/95" />
        <div className="absolute inset-0 bg-radial-glow opacity-20" />
        <div className="absolute inset-0 bg-grid-subtle opacity-30" />
      </div>

      {/* 33. Three.js Abstract Business Automation Network Overlay with Safe Fallback */}
      <ErrorBoundary fallback={staticFallback}>
        <Hero3DScene />
      </ErrorBoundary>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-center flex flex-col items-center">
        {/* Small Geographic Line (Phase 5) */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-charcoal/90 border border-brand-border text-xs font-mono text-brand-silver mb-8 backdrop-blur-md shadow-xl animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-lime shadow-lime-glow-sm" />
          <span className="text-white font-medium">UK · Nigeria · Worldwide</span>
          <span className="text-brand-borderLight">|</span>
          <span className="text-brand-silver">AI & Digital Systems</span>
        </div>

        {/* Hero Headline (Phase 5) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white max-w-5xl leading-[1.04]">
          We Build AI Systems <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-light to-brand-silver">
            That Help Businesses Grow.
          </span>
        </h1>

        {/* Supporting Copy (Phase 5) */}
        <p className="text-base sm:text-xl md:text-2xl text-brand-silver max-w-3xl mt-8 leading-relaxed font-normal">
          We help businesses automate repetitive work, respond faster to customers, manage leads, improve sales, and connect the tools they use every day.
        </p>

        {/* Primary & Secondary Buttons (Phase 5) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto">
          <MagneticButton
            to="/book"
            variant="primary"
            size="lg"
            showArrow={true}
            className="w-full sm:w-auto"
          >
            Book a Consultation
          </MagneticButton>

          <MagneticButton
            to="/services"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Explore Our Services
          </MagneticButton>
        </div>

        {/* Bottom Key Capability Nodes */}
        <div className="mt-16 sm:mt-24 flex items-center gap-8 text-xs font-mono text-brand-silver/70">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            <span>AI AGENTS & VOICE</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            <span>CRM & AUTOMATION</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            <span>WEBSITES & TENDERS</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 flex flex-col items-center gap-1 text-[10px] font-mono text-brand-silver/50 animate-bounce">
          <span>SCROLL</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </div>
      </div>
    </section>
  );
}
