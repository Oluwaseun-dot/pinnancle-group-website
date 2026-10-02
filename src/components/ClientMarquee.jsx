import React from 'react';
import { clientLogos } from '../data/testimonialsData';

export default function ClientMarquee() {
  const marqueeItems = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="py-14 bg-brand-black overflow-hidden border-b border-brand-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-8">
        <p className="text-xs font-mono uppercase tracking-widest text-brand-silver">
          Trusted By Businesses We Have Worked With.
        </p>
      </div>

      {/* Infinite scrolling marquee track */}
      <div className="relative w-full flex items-center overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex shrink-0 animate-marquee hover:[animation-play-state:paused] items-center gap-12 sm:gap-16">
          {marqueeItems.map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-3.5 group cursor-default opacity-40 hover:opacity-100 transition-all duration-300"
            >
              {/* Monochrome Monogram with lime accent on hover */}
              <div className="w-10 h-10 rounded-xl bg-brand-charcoal border border-brand-border flex items-center justify-center font-mono font-bold text-xs tracking-wider text-brand-silver group-hover:text-white group-hover:border-brand-lime group-hover:shadow-lime-glow-sm transition-all duration-300">
                {brand.code}
              </div>

              <div className="flex flex-col text-left">
                <span className="text-sm font-semibold tracking-tight text-brand-silver group-hover:text-white transition-colors flex items-center gap-1.5">
                  {brand.name}
                  <span className="w-1 h-1 rounded-full bg-brand-lime opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-grey">
                  {brand.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
