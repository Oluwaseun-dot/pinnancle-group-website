import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, UserCheck } from 'lucide-react';
import { teamMembers } from '../data/teamData';
import MagneticButton from './MagneticButton';

export default function TeamSection() {
  return (
    <section id="team" className="py-28 md:py-36 bg-brand-black text-brand-offWhite relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-brand-border text-brand-silver text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
              Specialist Practitioners
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-tight">
              Meet The Team <br />
              <span className="text-brand-silver">Building Pinnancle.</span>
            </h2>
            <p className="text-base sm:text-lg text-brand-silver mt-4 leading-relaxed">
              We are an in-house team of seven dedicated specialists covering AI automation, CRM systems, web design, tender support, graphic design, and video.
            </p>
          </div>

          <MagneticButton
            to="/team"
            variant="secondary"
            size="md"
            showArrow={true}
          >
            All 7 Team Profiles
          </MagneticButton>
        </div>

        {/* 7 Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => {
            const isLeader = idx === 0;
            return (
              <div
                key={member.slug}
                className={`rounded-3xl bg-brand-charcoal border border-brand-border p-6 flex flex-col justify-between group hover:border-brand-borderLight transition-all duration-300 relative overflow-hidden shadow-xl ${
                  isLeader ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Photo: Real photography or Placeholder */}
                <div>
                  <div className="relative w-full aspect-[4/3] rounded-2xl bg-brand-dark border border-brand-border overflow-hidden flex flex-col items-center justify-center text-center mb-6 group-hover:border-brand-lime/30 transition-colors">
                    {member.image ? (
                      <div className="relative w-full h-full overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top filter grayscale contrast-115 group-hover:filter-none group-hover:scale-105 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent pointer-events-none" />
                      </div>
                    ) : (
                      <div className="p-6 flex flex-col items-center justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-brand-card border border-brand-border flex items-center justify-center font-mono font-bold text-xl text-white group-hover:text-brand-lime group-hover:border-brand-lime/50 transition-colors mb-3 shadow-lg">
                          {member.initials}
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-brand-silver">
                          {member.role}
                        </span>
                        <span className="text-[9px] font-mono text-brand-lime/90 mt-1 px-2 py-0.5 rounded-full bg-brand-black/90 border border-brand-border">
                          Verified Specialist
                        </span>
                      </div>
                    )}

                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-black/90 border border-brand-border text-[9px] font-mono text-brand-lime shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                      Active
                    </div>
                  </div>

                  <span className="text-xs font-mono uppercase tracking-wider text-brand-silver font-semibold">
                    {member.role}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white tracking-tight group-hover:text-brand-lime transition-colors mt-0.5">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono text-brand-silver mt-1">
                    {member.title}
                  </p>
                  <p className="text-xs text-brand-silver mt-3 line-clamp-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Specialties & Link */}
                <div className="mt-6 pt-4 border-t border-brand-border space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialties.slice(0, 3).map((spec, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-dark border border-brand-border text-brand-silver"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/team/${member.slug}`}
                    data-cursor="profile"
                    data-cursor-label="VIEW PROFILE"
                    className="inline-flex items-center justify-between w-full p-2.5 rounded-xl bg-brand-dark hover:bg-white hover:text-black border border-brand-border text-xs font-semibold text-white transition-all duration-200 group/btn"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1" />
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
