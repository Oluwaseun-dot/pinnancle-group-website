import React, { useState } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function CinematicHero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-brand-black">
      {/* 01. Cinematic Local Video & Architectural Atmosphere Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* High-Resolution Operations Center Visual Fallback */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/hero-command-center.jpg"
            alt="Pinnancle Group Global Operations Center"
            className="w-full h-full object-cover filter contrast-110 brightness-[0.4] transition-opacity duration-1000"
          />
        </div>

        {/* Local Cinematic Video Loop (/hero.mp4) */}
        {!videoFailed && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/hero-command-center.jpg"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoFailed(true)}
            className={`absolute inset-0 w-full h-full object-cover filter contrast-110 brightness-[0.55] transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-40 sm:opacity-50' : 'opacity-0'
            }`}
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        )}

        {/* Architectural Vignette & Editorial Scrim Layers (Ensures 100% typography legibility) */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/75 to-brand-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-transparent to-brand-black/90" />
        <div className="absolute inset-0 bg-radial-glow opacity-15" />
        <div className="absolute inset-0 bg-grid-subtle opacity-20" />
      </div>

      {/* 02. Hero Content Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-center flex flex-col items-center">
        {/* Geographic / Enterprise Footprint Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-charcoal/90 border border-brand-border text-xs font-mono text-brand-silver mb-8 backdrop-blur-md shadow-2xl animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-lime shadow-lime-glow-sm" />
          <span className="text-white font-medium tracking-tight">UK · Nigeria · Worldwide</span>
          <span className="text-brand-borderLight">|</span>
          <span className="text-brand-silver">AI & Digital Systems</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight text-white max-w-5xl leading-[1.08] sm:leading-[1.05]">
          We Build AI Systems <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-light to-brand-silver">
            That Help Businesses Grow.
          </span>
        </h1>

        {/* Supporting Message */}
        <p className="text-base sm:text-lg md:text-xl text-brand-silver max-w-2xl sm:max-w-3xl mt-6 sm:mt-8 leading-relaxed font-normal">
          We help businesses automate repetitive work, respond faster to customers, manage leads, improve sales, and connect the tools they use every day.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 mt-8 sm:mt-10 w-full sm:w-auto">
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
            to="/services"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto text-xs sm:text-sm font-semibold uppercase tracking-wider"
          >
            EXPLORE OUR SERVICES
          </MagneticButton>
        </div>

        {/* Architectural Trust Metrics Bar Under Hero */}
        <div className="mt-14 sm:mt-20 pt-8 border-t border-brand-border/60 w-full max-w-4xl flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-brand-silver">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            <span className="text-white font-medium">50+</span>
            <span>Client Systems Delivered</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            <span className="text-white font-medium">&lt; 30s</span>
            <span>Average Automated Response</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            <span className="text-white font-medium">4.9 / 5</span>
            <span>Verified Satisfaction</span>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="mt-8 hidden md:flex flex-col items-center gap-1.5 text-[10px] font-mono text-brand-silver/50">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
