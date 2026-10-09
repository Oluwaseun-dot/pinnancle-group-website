import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, UserCheck, CheckCircle2 } from 'lucide-react';
import { teamMembers } from '../data/teamData';
import MagneticButton from './MagneticButton';

export default function TeamSection() {
  return (
    <section id="team" className="py-24 sm:py-32 md:py-40 bg-brand-black text-brand-offWhite relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-brand-border text-brand-silver text-xs font-mono uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
              In-House Multidisciplinary Team
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-[1.08]">
              Meet The Specialists <br />
              <span className="text-brand-silver">Building Pinnacle.</span>
            </h2>
            <p className="text-base sm:text-lg text-brand-silver mt-5 leading-relaxed font-normal">
              Our team brings together expertise in AI automation, CRM systems, website design, tender support, creative work, and digital business solutions—giving you direct access to experienced practitioners without agency bureaucracy.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <MagneticButton
              to="/team"
              variant="secondary"
              size="md"
              showArrow={true}
            >
              Meet Our Team
            </MagneticButton>
          </div>
        </div>

        {/* 7 Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => {
            const isLeader = idx === 0;
            return (
              <div
                key={member.slug}
                className={`rounded-3xl bg-brand-charcoal border border-brand-border p-6 flex flex-col justify-between group hover:border-brand-borderLight transition-all duration-300 relative overflow-hidden shadow-2xl ${
                  isLeader ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Photo Frame with Clean Photographic Treatment */}
                  <Link to={`/team/${member.slug}`} className="block relative w-full aspect-[4/3] rounded-2xl bg-brand-dark border border-brand-border overflow-hidden mb-6 group-hover:border-brand-lime/30 transition-colors shadow-lg">
                    {member.image ? (
                      <div className="relative w-full h-full overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-transparent to-transparent pointer-events-none" />
                      </div>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                        <div className="w-16 h-16 rounded-2xl bg-brand-card border border-brand-border flex items-center justify-center font-mono font-bold text-xl text-white group-hover:text-brand-lime transition-colors mb-3">
                          {member.initials}
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-brand-silver">
                          {member.role}
                        </span>
                      </div>
                    )}

                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-black/85 backdrop-blur-md border border-brand-border text-[9px] font-mono text-brand-lime">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                      In-House
                    </div>
                  </Link>

                  {/* Role & Name */}
                  <span className="text-[11px] font-mono uppercase tracking-wider text-brand-lime font-semibold">
                    {member.role}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight group-hover:text-brand-lime transition-colors mt-0.5">
                    <Link to={`/team/${member.slug}`}>
                      {member.name}
                    </Link>
                  </h3>
                  <p className="text-xs font-mono text-brand-silver mt-1">
                    {member.title}
                  </p>
                  <p className="text-xs text-brand-silver mt-3 line-clamp-3 leading-relaxed font-normal">
                    {member.bio}
                  </p>
                </div>

                {/* Specialties & Direct Profile CTA */}
                <div className="mt-6 pt-4 border-t border-brand-border flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.slice(0, 2).map((spec, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-brand-dark border border-brand-border text-brand-silver"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/team/${member.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-mono text-white hover:text-brand-lime transition-colors shrink-0 ml-2"
                  >
                    <span>Profile</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
