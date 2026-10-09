import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, RotateCcw, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function CinematicVideoSection() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Time Formatter (mm:ss)
  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds) || timeInSeconds === 0) return '00:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Play / Pause Toggle
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      }).catch((err) => {
        console.warn('Playback error or policy restriction:', err);
        // Fallback to muted playback if audio policy blocks unmuted play
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().then(() => {
            setIsPlaying(true);
            setHasStarted(true);
          }).catch(() => setHasError(true));
        }
      });
    }
  };

  // Mute Toggle
  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  // Fullscreen Toggle
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => console.warn('Fullscreen error:', err));
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch((err) => console.warn('Exit fullscreen error:', err));
    }
  };

  // Listen for native fullscreen changes (e.g. Esc key pressed)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Time & Progress Update
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 0;
    setCurrentTime(current);
    if (dur > 0) {
      setProgress((current / dur) * 100);
    }
  };

  // Loaded Metadata
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 0);
    }
  };

  // Seek bar scrubber
  const handleSeek = (e) => {
    if (!videoRef.current || duration === 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const seekPercentage = Math.max(0, Math.min(1, clickX / width));
    const newTime = seekPercentage * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    setProgress(seekPercentage * 100);
  };

  // Video Ended
  const handleVideoEnded = () => {
    setIsPlaying(false);
    setProgress(100);
  };

  // Replay from beginning
  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      });
    }
  };

  return (
    <section id="technology-philosophy" className="py-28 md:py-36 bg-brand-black relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header Above Video Container */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-brand-border text-brand-lime text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            Agency Film · Systems in Action
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-tight">
            Technology Should Work <br />
            <span className="text-brand-silver">For Your Business.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-brand-silver mt-4 leading-relaxed font-normal">
            Watch how Pinnacle Group designs, builds, and connects autonomous AI systems, CRM pipelines, and automated workflows that help modern companies operate without friction.
          </p>
        </div>

        {/* Cinematic Video Container */}
        <div
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative rounded-3xl overflow-hidden border border-brand-border bg-brand-charcoal shadow-2xl transition-all duration-500 ${
            isFullscreen ? 'w-full h-full rounded-none border-none' : 'aspect-[16/9] md:aspect-[21/9]'
          }`}
        >
          {/* Fallback Static Poster Backdrop */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-command-center.jpg"
              alt="Pinnacle Group Global Operations"
              className={`w-full h-full object-cover filter contrast-110 brightness-75 transition-opacity duration-700 ${
                hasStarted ? 'opacity-0 pointer-events-none' : 'opacity-70'
              }`}
            />
            {/* Dark gradient & atmospheric grid */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-brand-black/60" />
            <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />
          </div>

          {/* Actual Video Player */}
          {!hasError ? (
            <video
              ref={videoRef}
              src="/pinnancle_video.mp4"
              poster="/images/hero-command-center.jpg"
              preload="metadata"
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={handleVideoEnded}
              onError={() => {
                console.warn('Video failed to load /pinnancle_video.mp4. Gracefully falling back to poster.');
                setHasError(true);
              }}
              onClick={hasStarted ? togglePlay : undefined}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 cursor-pointer ${
                hasStarted ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ) : (
            <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-brand-black/90 border border-brand-border text-brand-silver text-[11px] font-mono">
              Production Showcase Offline · Direct Presentation Mode Active
            </div>
          )}

          {/* Initial Play Overlay (Shown before clicking Play) */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-10 text-center z-20 transition-all duration-500 ${
              hasStarted ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            {/* Play Button with Premium Hover Glow */}
            <div className="relative">
              <button
                type="button"
                onClick={togglePlay}
                data-cursor="play"
                data-cursor-label="PLAY FILM"
                className="group relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-brand-lime text-black shadow-2xl hover:scale-105 hover:bg-white transition-all duration-300 focus:outline-none"
                aria-label="Play agency presentation video"
              >
                <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-current translate-x-0.5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-white mt-5 font-semibold">
              Click to Watch Agency Overview Film
            </p>
            <p className="text-[11px] font-mono text-brand-silver/80 mt-1">
              Audio enabled on tap · {duration > 0 ? formatTime(duration) : 'Full High-Definition'}
            </p>
          </div>

          {/* Pause / Play Center Indicator during active playback */}
          {hasStarted && !isPlaying && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 z-20 flex items-center justify-center bg-brand-black/40 backdrop-blur-[2px] cursor-pointer transition-opacity animate-fadeIn"
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                className="flex items-center justify-center w-20 h-20 rounded-full bg-brand-black/90 border border-brand-border text-white hover:text-brand-lime hover:border-brand-lime/50 shadow-2xl transition-all duration-300 hover:scale-105"
                aria-label="Resume video"
              >
                <Play className="w-8 h-8 fill-current translate-x-0.5" />
              </button>
            </div>
          )}

          {/* Replay Overlay when video reaches end */}
          {hasStarted && progress >= 99 && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-brand-black/85 backdrop-blur-md p-6 text-center animate-fadeIn">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold mb-2">
                Showcase Complete
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
                Ready to build an automated system for your business?
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handleReplay}
                  className="px-5 py-2.5 rounded-full bg-brand-dark border border-brand-border hover:border-white text-white text-xs font-mono flex items-center gap-2 transition-colors"
                >
                  <RotateCcw className="w-4 h-4 text-brand-lime" />
                  <span>Replay Film</span>
                </button>
                <MagneticButton to="/book" variant="primary" size="md" showArrow={true}>
                  Book a Consultation
                </MagneticButton>
              </div>
            </div>
          )}

          {/* Floating Minimalist Player Controls (Visible during playback on hover or pause) */}
          {hasStarted && (
            <div
              className={`absolute bottom-0 left-0 right-0 z-30 p-4 sm:p-6 bg-gradient-to-t from-brand-black/95 via-brand-black/80 to-transparent transition-opacity duration-300 ${
                isHovered || !isPlaying ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* Scrubbable Progress Bar */}
              <div
                onClick={handleSeek}
                className="group/seek relative w-full h-2 rounded-full bg-white/20 hover:h-2.5 cursor-pointer transition-all duration-150 mb-3"
              >
                {/* Buffered / Background Track */}
                <div
                  className="absolute top-0 left-0 bottom-0 rounded-full bg-brand-lime shadow-lime-glow-sm transition-all duration-75"
                  style={{ width: `${progress}%` }}
                />
                {/* Scrubber Knob */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white border border-brand-lime shadow-md opacity-0 group-hover/seek:opacity-100 transition-opacity"
                  style={{ left: `${progress}%` }}
                />
              </div>

              {/* Controls Row */}
              <div className="flex items-center justify-between gap-4 text-xs font-mono">
                {/* Left Group: Play/Pause, Volume, Time */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="p-2 rounded-xl bg-brand-dark/90 hover:bg-white hover:text-black border border-brand-border text-white transition-colors"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>

                  <button
                    type="button"
                    onClick={toggleMute}
                    className="p-2 rounded-xl bg-brand-dark/90 hover:bg-white hover:text-black border border-brand-border text-white transition-colors"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-brand-lime" />}
                  </button>

                  <span className="text-[11px] font-mono text-brand-silver ml-1">
                    <strong className="text-white">{formatTime(currentTime)}</strong> / {formatTime(duration)}
                  </span>
                </div>

                {/* Right Group: Title, Consult CTA, Fullscreen */}
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono text-brand-silver hidden sm:inline">
                    Pinnancle Group · System Overview
                  </span>

                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    className="p-2 rounded-xl bg-brand-dark/90 hover:bg-white hover:text-black border border-brand-border text-white transition-colors"
                    aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                  >
                    {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Corner Metadata (Only visible before video begins playing) */}
          {!hasStarted && (
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-brand-silver/50 pointer-events-none">
              <span>LONDON & LAGOS DESKS</span>
              <span>SYSTEMS THAT MOVE BUSINESSES FORWARD</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
