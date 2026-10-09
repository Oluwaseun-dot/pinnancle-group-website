import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { teamMembers } from '../data/teamData';
import MagneticButton from '../components/MagneticButton';

export default function TeamPage() {
  useEffect(() => {
    document.title = 'Meet The Team | Pinnancle Group';
  }, []);

  return (
    <div className="pt-24 sm:pt-28 pb-16 bg-brand-black text-brand-offWhite min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
            The Specialists
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-white mt-3 leading-tight">
            Meet The Team <br />
            <span className="text-brand-silver">Building Pinnancle.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-silver mt-6 leading-relaxed">
            Technology is powerful. People make it useful. We are a team of seven dedicated specialists operating across artificial intelligence, business automation, CRM architecture, tender engineering, web design, and multimedia production.
          </p>
        </div>

        {/* 7 Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.slug}
              className="rounded-3xl bg-brand-charcoal border border-brand-border p-8 flex flex-col justify-between group hover:border-brand-borderLight transition-all duration-300 relative overflow-hidden shadow-2xl"
            >
              <div>
                <div className="relative w-full aspect-[4/3] rounded-2xl bg-brand-dark border border-brand-border overflow-hidden flex flex-col items-center justify-center text-center mb-6 group-hover:border-brand-lime/30 transition-colors">
                  {member.image ? (
                    <div className="relative w-full h-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent pointer-events-none" />
                    </div>
                  ) : (
                    <div className="p-6 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-brand-card border border-brand-border flex items-center justify-center font-mono font-bold text-2xl text-white group-hover:text-brand-lime group-hover:border-brand-lime/50 transition-colors shadow-lg mb-2">
                        {member.initials}
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-brand-silver">
                        {member.experienceYears}
                      </span>
                      <span className="text-[9px] font-mono text-brand-lime/90 mt-1 px-2 py-0.5 rounded-full bg-brand-black/90 border border-brand-border">
                        Verified Practitioner
                      </span>
                    </div>
                  )}

                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-black/90 border border-brand-border text-[10px] font-mono text-brand-lime shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                    Available
                  </div>
                </div>

                <span className="text-xs font-mono uppercase tracking-wider text-brand-silver font-semibold">
                  {member.role}
                </span>
                <h3 className="text-2xl font-display font-bold text-white tracking-tight group-hover:text-brand-lime transition-colors mt-1">
                  {member.name}
                </h3>
                <p className="text-xs font-mono text-brand-silver mt-1">
                  {member.title}
                </p>

                <p className="text-sm text-brand-silver mt-4 leading-relaxed line-clamp-3">
                  {member.bio}
                </p>
              </div>

              {/* Specialties & Action */}
              <div className="mt-8 pt-6 border-t border-brand-border space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {member.specialties.slice(0, 3).map((spec, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-dark border border-brand-border text-brand-silver">
                      {spec}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/team/${member.slug}`}
                  data-cursor="profile"
                  data-cursor-label="VIEW PROFILE"
                  className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-brand-dark hover:bg-white hover:text-black border border-brand-border text-xs font-semibold text-white transition-all duration-200 group/btn"
                >
                  <span>Explore Editorial Profile</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <div className="mt-12 sm:mt-14 p-8 sm:p-10 rounded-3xl bg-brand-charcoal border border-brand-border text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-display font-bold text-white">
            Direct Access to Senior Practitioners.
          </h3>
          <p className="text-sm text-brand-silver">
            When you engage Pinnancle Group, you work directly with our engineering and strategy specialists. No account managers or outsourced junior teams.
          </p>
          <div className="pt-2 flex justify-center">
            <MagneticButton to="/book" variant="primary" size="md" showArrow={true}>
              Schedule Call With A Specialist
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
}
