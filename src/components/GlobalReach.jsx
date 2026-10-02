import React from 'react';
import { MapPin, Globe2 } from 'lucide-react';

export default function GlobalReach() {
  return (
    <section className="py-28 md:py-36 bg-brand-black text-brand-offWhite relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-brand-border text-brand-silver text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            Global Delivery
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-tight">
            UK. Nigeria. <br />
            <span className="text-brand-silver">Worldwide.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-silver mt-4 leading-relaxed">
            Based across the United Kingdom and Nigeria, Pinnancle Group works with businesses around the world.
          </p>
        </div>

        {/* Minimalist World Map Canvas */}
        <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="relative w-full aspect-[2/1] min-h-[300px] max-h-[460px] rounded-2xl bg-brand-dark border border-brand-border overflow-hidden flex items-center justify-center p-4">
            {/* Photographic Twilight Dual-Hub Composite */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src="/images/global-uk-nigeria-network.jpg"
                alt="London and Lagos Twilight Connected Network"
                className="w-full h-full object-cover filter contrast-125 brightness-75 opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/75 to-brand-dark/85" />
            </div>

            {/* World Grid Dots SVG in Monochrome with subtle lime links */}
            <svg
              className="absolute inset-0 w-full h-full opacity-30 relative z-10"
              viewBox="0 0 1000 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="dotPatternClean" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.2" fill="#ffffff" opacity="0.4" />
                </pattern>
                <linearGradient id="limeLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#ccff00" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <rect width="1000" height="500" fill="url(#dotPatternClean)" />

              {/* Connecting subtle line London (490, 145) to Lagos (498, 285) */}
              <path
                d="M 490 145 Q 520 215 498 285"
                stroke="url(#limeLineGrad)"
                strokeWidth="2"
                strokeDasharray="3 3"
              />

              {/* London to North America (280, 180) */}
              <path
                d="M 490 145 Q 380 130 280 180"
                stroke="#666666"
                strokeWidth="1.2"
                strokeDasharray="3 3"
              />

              {/* London to Middle East (620, 210) */}
              <path
                d="M 490 145 Q 560 165 620 210"
                stroke="#666666"
                strokeWidth="1.2"
                strokeDasharray="3 3"
              />
            </svg>

            {/* London Hub Marker */}
            <div className="absolute" style={{ top: '29%', left: '49%' }}>
              <div className="relative flex items-center justify-center">
                <span className="w-3.5 h-3.5 rounded-full bg-brand-lime shadow-lime-glow-sm" />
                <span className="absolute w-6 h-6 rounded-full border border-brand-lime/60 animate-ping opacity-50" />
              </div>
              <div className="absolute -top-10 -left-12 whitespace-nowrap bg-brand-black/90 border border-brand-border text-white text-[10px] font-mono px-2.5 py-1 rounded-full shadow-lg">
                London Operations
              </div>
            </div>

            {/* Lagos Hub Marker */}
            <div className="absolute" style={{ top: '57%', left: '49.8%' }}>
              <div className="relative flex items-center justify-center">
                <span className="w-3.5 h-3.5 rounded-full bg-brand-lime shadow-lime-glow-sm" />
                <span className="absolute w-6 h-6 rounded-full border border-brand-lime/60 animate-ping opacity-50" />
              </div>
              <div className="absolute -bottom-9 -left-12 whitespace-nowrap bg-brand-black/90 border border-brand-border text-white text-[10px] font-mono px-2.5 py-1 rounded-full shadow-lg">
                Lagos Systems Hub
              </div>
            </div>

            {/* Worldwide tags */}
            <div className="absolute top-[36%] left-[28%] text-[10px] font-mono text-brand-silver">
              North America Clients
            </div>
            <div className="absolute top-[42%] left-[62%] text-[10px] font-mono text-brand-silver">
              Middle East & Europe
            </div>
          </div>

          {/* Operational Footprint Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-5 rounded-2xl bg-brand-dark border border-brand-border space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-lime" />
                <h4 className="text-sm font-semibold text-white">United Kingdom Operations</h4>
              </div>
              <p className="text-xs text-brand-silver leading-relaxed">
                Strategic client leadership, commercial tenders, compliance coordination, and UK/European timezone support.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-brand-dark border border-brand-border space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-lime" />
                <h4 className="text-sm font-semibold text-white">Nigeria Engineering Hub</h4>
              </div>
              <p className="text-xs text-brand-silver leading-relaxed">
                Full-stack systems development, AI workflow automation, CRM architectures, and digital media production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
