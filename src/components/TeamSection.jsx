import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Users } from 'lucide-react';
import { teamMembers } from '../data/teamData';
import MagneticButton from './MagneticButton';
import ScrollReveal from './ScrollReveal';

export default function TeamSection() {
  // Homepage displays only the three Co-Founders as requested
  const coFounders = teamMembers.filter((m) =>
    ['ayodeji-moses', 'oluwaseun-olatunji', 'praise-salami'].includes(m.slug)
  );

  return (
    <section id="team" className="py-14 sm:py-18 md:py-20 bg-brand-black text-brand-offWhite relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-brand-border text-brand-silver text-xs font-mono uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                Leadership & Senior Architecture
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white leading-[1.1]">
                Meet The Co-Founders <br />
                <span className="text-brand-silver">Leading Pinnacle.</span>
              </h2>
              <p className="text-sm sm:text-base text-brand-silver mt-4 leading-relaxed font-normal">
                Direct access to our founding practitioners across AI automation, high-conversion web infrastructure, CRM architecture, and enterprise tender solutions—backed by our full multidisciplinary engineering team.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <MagneticButton
                to="/team"
                variant="secondary"
                size="md"
                showArrow={true}
              >
                Meet the Full Team
              </MagneticButton>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Co-Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {coFounders.map((member, idx) => {
            return (
              <ScrollReveal
                key={member.slug}
                delay={(idx + 1) * 100}
                className="h-full"
              >
                <div className="h-full rounded-3xl bg-brand-charcoal border border-brand-border p-6 sm:p-7 flex flex-col justify-between group hover:border-brand-borderLight transition-all duration-300 relative overflow-hidden shadow-2xl">
                  <div>
                    {/* Portrait Photo Frame */}
                    <Link
                      to={`/team/${member.slug}`}
                      className="block relative w-full aspect-[4/5] rounded-2xl bg-brand-dark border border-brand-border overflow-hidden mb-6 group-hover:border-brand-lime/30 transition-colors shadow-lg"
                    >
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
                        Co-Founder
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
                    <p className="text-xs text-brand-silver mt-3.5 line-clamp-3 leading-relaxed font-normal">
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
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Callout: Access Full Team of 7 Specialists */}
        <ScrollReveal delay={300}>
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-brand-charcoal/70 border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-brand-dark border border-brand-border flex items-center justify-center text-brand-lime shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-display font-bold text-white">
                  Meet the Full Team of 7 Specialists
                </h4>
                <p className="text-xs sm:text-sm text-brand-silver mt-0.5">
                  Explore all our dedicated CRM architects, creative systems leads, and AI video technologists.
                </p>
              </div>
            </div>

            <MagneticButton
              to="/team"
              variant="primary"
              size="sm"
              showArrow={true}
              className="shrink-0 w-full sm:w-auto text-center justify-center"
            >
              Meet the Full Team
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
