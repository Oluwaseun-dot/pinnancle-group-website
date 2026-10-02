import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, MapPin, Briefcase, Mail, Globe, ExternalLink } from 'lucide-react';
import { teamMembers, getTeamMemberBySlug } from '../data/teamData';
import MagneticButton from '../components/MagneticButton';

export default function TeamProfilePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const member = getTeamMemberBySlug(slug);

  useEffect(() => {
    if (member) {
      document.title = `${member.name} — ${member.role} | Pinnancle Group`;
    }
    window.scrollTo(0, 0);
  }, [slug, member]);

  if (!member) {
    return (
      <div className="min-h-screen pt-40 pb-20 text-center text-white bg-brand-black">
        <h2 className="text-3xl font-display font-bold">Profile Not Found</h2>
        <p className="text-brand-silver mt-2">The specialist profile could not be found.</p>
        <div className="mt-6">
          <MagneticButton to="/team" variant="primary" size="md">
            View All Specialists
          </MagneticButton>
        </div>
      </div>
    );
  }

  const currentIndex = teamMembers.findIndex((m) => m.slug === slug);
  const nextMember = teamMembers[(currentIndex + 1) % teamMembers.length];

  return (
    <div className="pt-32 pb-24 bg-brand-black text-brand-offWhite min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Back Link */}
        <Link
          to="/team"
          className="inline-flex items-center gap-2 text-xs font-mono text-brand-silver hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> All 7 Specialists
        </Link>

        {/* Editorial Profile Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16 border-b border-brand-border">
          {/* Left Column: Large Portrait Frame */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-6 sm:p-8 shadow-2xl relative overflow-hidden text-center flex flex-col items-center justify-center">
              {member.image ? (
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-brand-borderLight mb-6 shadow-2xl bg-brand-dark group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:filter-none group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-white/90">
                    <span className="px-2 py-0.5 rounded-full bg-brand-black/90 border border-brand-border text-brand-lime">
                      {member.role}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-brand-black/90 border border-brand-border text-brand-silver">
                      Official Portrait
                    </span>
                  </div>
                </div>
              ) : (
                <div className="w-full aspect-[4/5] rounded-2xl border border-brand-border bg-brand-dark flex flex-col items-center justify-center p-8 mb-6 relative overflow-hidden group shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal/50 to-brand-dark pointer-events-none" />
                  <div className="relative z-10 w-24 h-24 rounded-3xl bg-brand-card border border-brand-border flex items-center justify-center font-mono font-bold text-3xl text-white shadow-xl mb-4 group-hover:border-brand-lime/50 group-hover:text-brand-lime transition-colors">
                    {member.initials}
                  </div>
                  <span className="relative z-10 text-[11px] font-mono text-brand-silver">
                    {member.role}
                  </span>
                  <span className="relative z-10 text-[10px] font-mono text-brand-lime mt-2 px-2.5 py-0.5 rounded-full bg-brand-black/90 border border-brand-border">
                    {member.location}
                  </span>
                </div>
              )}

              <span className="text-xs font-mono uppercase tracking-widest text-brand-silver">
                {member.role}
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mt-1">
                {member.name}
              </h2>

              <p className="text-xs font-mono text-brand-lime mt-1.5">
                {member.title}
              </p>

              <div className="mt-6 pt-6 border-t border-brand-border w-full space-y-2.5 text-xs font-mono text-brand-silver text-left">
                <div className="flex items-center justify-between">
                  <span>Location:</span>
                  <span className="text-white">{member.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Tenure:</span>
                  <span className="text-white">{member.experienceYears}</span>
                </div>
                {member.email && (
                  <div className="flex items-center justify-between pt-1 border-t border-brand-border/40">
                    <span>Direct Email:</span>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-brand-lime hover:underline flex items-center gap-1 font-mono text-[11px]"
                    >
                      <Mail className="w-3 h-3" />
                      {member.email}
                    </a>
                  </div>
                )}
                {member.portfolio && (
                  <div className="flex items-center justify-between pt-1 border-t border-brand-border/40">
                    <span>Portfolio:</span>
                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-lime hover:underline flex items-center gap-1 font-mono text-[11px]"
                    >
                      <Globe className="w-3 h-3" />
                      Live Systems
                      <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                    </a>
                  </div>
                )}
                {member.facebook && (
                  <div className="flex items-center justify-between pt-1 border-t border-brand-border/40">
                    <span>Social:</span>
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-lime hover:underline flex items-center gap-1 font-mono text-[11px]"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Facebook Profile
                    </a>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span>Status:</span>
                  <span className="text-brand-lime flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
                    Available for Consultation
                  </span>
                </div>
              </div>

              <div className="mt-6 w-full space-y-2.5">
                <MagneticButton to="/book" variant="primary" size="sm" showArrow={true} className="w-full justify-center">
                  Book Consult with {member.name.split(' ')[0]}
                </MagneticButton>

                {member.portfolio && (
                  <a
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full p-2.5 rounded-xl bg-brand-dark hover:bg-white hover:text-black border border-brand-border text-xs font-semibold text-white transition-all duration-200 group/btn"
                  >
                    <Globe className="w-3.5 h-3.5 text-brand-lime group-hover/btn:text-black" />
                    <span>View Specialist Portfolio</span>
                    <ExternalLink className="w-3 h-3 ml-auto opacity-60" />
                  </a>
                )}

                {member.email && (
                  <MagneticButton
                    href={`mailto:${member.email}`}
                    variant="secondary"
                    size="sm"
                    className="w-full justify-center"
                  >
                    <Mail className="w-3.5 h-3.5 mr-1.5 text-brand-lime" />
                    Email {member.name.split(' ')[0]} Direct
                  </MagneticButton>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Career Breakdown */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
                Specialist Profile
              </span>
              <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white mt-1 leading-tight">
                {member.name}
              </h1>
              <p className="text-sm font-mono text-brand-silver mt-1">
                {member.title}
              </p>
            </div>

            <div className="text-base sm:text-lg text-brand-silver leading-relaxed">
              <p>{member.bio}</p>
            </div>

            {/* Personal Philosophy */}
            <div className="p-8 rounded-3xl bg-brand-charcoal border border-brand-border relative">
              <span className="text-[11px] font-mono uppercase tracking-widest text-brand-silver font-semibold block mb-2">
                Personal Engineering Philosophy
              </span>
              <p className="text-base sm:text-lg font-display text-white italic leading-relaxed">
                "{member.personalIntroduction}"
              </p>
            </div>

            {/* Specialties & Technical Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-brand-dark border border-brand-border space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-brand-lime font-semibold">
                  Core Specialties
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-brand-silver">
                  {member.specialties.map((spec, i) => (
                    <li key={i} className="flex items-center gap-2 text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-lime shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-brand-dark border border-brand-border space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-brand-lime font-semibold">
                  Technical Toolkit & Skills
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {member.skills.map((skill, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-brand-card border border-brand-border text-xs font-mono text-brand-silver">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contribution to Pinnancle */}
            <div className="p-6 rounded-2xl bg-brand-charcoal border border-brand-border space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-brand-silver font-semibold">
                Services Contributed To
              </h4>
              <div className="flex flex-wrap gap-2">
                {member.servicesContributed.map((srv, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-white/5 border border-brand-border text-white text-xs font-mono">
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            {/* Selected Projects */}
            <div className="space-y-3">
              <h4 className="text-sm font-mono uppercase tracking-wider text-white">
                Selected Project Contributions
              </h4>
              <div className="space-y-3">
                {member.selectedProjects.map((proj, i) => (
                  <div key={i} className="p-4 rounded-xl bg-brand-charcoal border border-brand-border">
                    <h5 className="font-semibold text-white text-sm">{proj.title}</h5>
                    <p className="text-xs text-brand-silver mt-1">{proj.impact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Specialist Link */}
            <div className="pt-8 border-t border-brand-border flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-brand-silver">Next Specialist:</span>
                <p className="font-semibold text-white text-sm">{nextMember.name}</p>
              </div>

              <MagneticButton to={`/team/${nextMember.slug}`} variant="secondary" size="sm" showArrow={true}>
                View {nextMember.name.split(' ')[0]}'s Profile
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
