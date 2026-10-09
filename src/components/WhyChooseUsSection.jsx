import React from 'react';
import { Target, Cpu, Workflow, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const reasons = [
  {
    icon: Target,
    title: 'Solutions Built Around Your Business',
    description:
      'We consider your goals, challenges, and current processes before recommending a solution. There are no rigid pre-made templates forced onto unique business models.'
  },
  {
    icon: Cpu,
    title: 'Connected Digital Systems',
    description:
      'We help bring websites, CRM platforms, AI tools, and business workflows together where appropriate, so data moves seamlessly without manual copying.'
  },
  {
    icon: Workflow,
    title: 'Practical, Business-Focused Automation',
    description:
      'We focus on solving real operational problems rather than adding technology for its own sake. Every system is built to reduce friction and save measurable time.'
  },
  {
    icon: Users,
    title: 'A Team With Diverse Expertise',
    description:
      'Our team combines skills across automation, CRM, website design, tender support, and creative services, giving you access to specialists across the entire lifecycle.'
  }
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-14 sm:py-18 md:py-20 bg-brand-black text-brand-offWhite relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-brand-border text-brand-lime text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
              Strategic Partnership
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-[1.08]">
              Why Choose <br />
              <span className="text-brand-silver">Pinnacle Group?</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-brand-silver mt-4 leading-relaxed font-normal">
              We partner directly with business owners to design reliable systems that eliminate routine friction and support sustainable operational growth.
            </p>
          </div>

          <div className="flex items-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs font-mono font-medium text-brand-lime hover:underline"
            >
              <span>Learn More About Our Philosophy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </ScrollReveal>

        {/* 4 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-brand-charcoal border border-brand-border hover:border-brand-borderLight transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-dark border border-brand-border flex items-center justify-center text-brand-silver group-hover:text-brand-lime group-hover:border-brand-lime/40 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-silver leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-border/60 flex items-center gap-2 text-xs font-mono text-brand-silver/70">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime shrink-0" />
                  <span>Core Standard 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
