import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown, Play, Pause } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function CinematicHero() {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Enforce DOM properties required by iOS Safari and Chromium mobile
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    const handlePlaySuccess = () => {
      setIsPlaying(true);
      setVideoLoaded(true);
      setAutoplayBlocked(false);
    };

    const handlePlayFailure = (err) => {
      // Browser autoplay policy / low power mode prevented autoplay
      console.log('Mobile video autoplay prevented by browser policy/low-power mode:', err);
      setAutoplayBlocked(true);
      setIsPlaying(false);
      // Ensure the frame or poster is ready
      setVideoLoaded(true);
    };

    const attemptPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(handlePlaySuccess).catch(handlePlayFailure);
      }
    };

    // Attempt playback immediately
    attemptPlay();

    const handleCanPlay = () => {
      setVideoLoaded(true);
      if (!isPlaying) {
        attemptPlay();
      }
    };

    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  const toggleVideoPlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setAutoplayBlocked(false);
            setVideoLoaded(true);
          })
          .catch((err) => {
            console.warn('Manual play failed:', err);
          });
      }
    }
  };

  return (
    <section className="relative min-h-[88vh] sm:min-h-screen flex items-center justify-center pt-24 pb-14 sm:pt-36 sm:pb-24 overflow-hidden bg-brand-black">
      {/* 01. Cinematic Local Video & Architectural Atmosphere Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* High-Resolution Operations Center Visual Fallback */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/hero-command-center.jpg"
            alt="Pinnancle Group Global Operations Center"
            className={`w-full h-full object-cover filter contrast-105 brightness-[0.70] transition-opacity duration-1000 ${
              videoLoaded && isPlaying ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>

        {/* Local Cinematic Video Loop (/hero.mp4) - Tuned for high visibility & cinematic clarity */}
        {!videoFailed && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/hero-command-center.jpg"
            onLoadedData={() => setVideoLoaded(true)}
            onPlaying={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onError={() => setVideoFailed(true)}
            className={`absolute inset-0 w-full h-full object-cover filter contrast-[1.06] brightness-[0.88] saturate-[1.08] transition-opacity duration-1000 ${
              videoLoaded && isPlaying ? 'opacity-90 sm:opacity-95' : 'opacity-0'
            }`}
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        )}

        {/* Subtle, Balanced Scrim Layers: Preserves background video clarity while maintaining 100% typography contrast */}
        {/* Top & Bottom gradient: Seamlessly grounds navbar and transitions to next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/30 to-brand-black" />

        {/* Center protective radial scrim: Soft, elegant contrast behind headline without dimming the video */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-black/65 via-brand-black/20 to-transparent" />

        {/* Soft edge vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/40 via-transparent to-brand-black/40" />

        {/* Subtle high-tech atmosphere */}
        <div className="absolute inset-0 bg-radial-glow opacity-10" />
      </div>

      {/* 02. Hero Content Container */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10 w-full text-center flex flex-col items-center">
        {/* Geographic / Enterprise Footprint Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-charcoal/90 border border-brand-border text-[11px] sm:text-xs font-mono text-brand-silver mb-5 sm:mb-8 backdrop-blur-md shadow-2xl animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-lime shadow-lime-glow-sm" />
          <span className="text-white font-medium tracking-tight">UK · Nigeria · Worldwide</span>
          <span className="text-brand-borderLight">|</span>
          <span className="text-brand-silver">AI & Digital Systems</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight text-white max-w-5xl leading-[1.12] sm:leading-[1.05] pb-1 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          We Build AI Systems <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-light to-brand-silver">
            That Help Businesses Grow.
          </span>
        </h1>

        {/* Supporting Message */}
        <p className="text-sm sm:text-lg md:text-xl text-brand-silver max-w-2xl sm:max-w-3xl mt-4 sm:mt-7 leading-relaxed font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] px-2 sm:px-0">
          We help businesses automate repetitive work, respond faster to customers, manage leads, improve sales, and connect the tools they use every day.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-7 sm:mt-9 w-full sm:w-auto">
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
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-brand-border/60 w-full max-w-4xl grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-between gap-3.5 sm:gap-4 text-xs font-mono text-brand-silver">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            <span className="text-white font-medium">50+</span>
            <span>Client Systems</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            <span className="text-white font-medium">&lt; 30s</span>
            <span>Automated Response</span>
          </div>
          <div className="flex items-center gap-2 col-span-2 sm:col-span-1 justify-center sm:justify-start">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            <span className="text-white font-medium">4.9 / 5</span>
            <span>Verified Satisfaction</span>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="mt-6 sm:mt-8 hidden md:flex flex-col items-center gap-1.5 text-[10px] font-mono text-brand-silver/50">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </div>

      {/* Floating Subtle Video Play/Pause Control (Accessible on Mobile & Desktop) */}
      {!videoFailed && (
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20">
          <button
            type="button"
            onClick={toggleVideoPlayback}
            aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-charcoal/80 hover:bg-brand-dark/95 border border-brand-border hover:border-brand-lime/60 text-brand-silver hover:text-white backdrop-blur-md text-[10px] sm:text-xs font-mono transition-all duration-200 shadow-lg group focus:outline-none focus:ring-1 focus:ring-brand-lime"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3 h-3 text-brand-lime" />
                <span className="hidden xs:inline">Pause Video</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-brand-lime fill-brand-lime animate-pulse" />
                <span>{autoplayBlocked ? 'Play Video' : 'Resume Video'}</span>
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
