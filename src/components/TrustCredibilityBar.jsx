import React, { useEffect, useRef, useState } from 'react';
import { Building, CheckCircle2, Award, ShieldCheck, Users, Globe } from 'lucide-react';

export default function TrustCredibilityBar() {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const metrics = [
    {
      value: '50+',
      label: 'Businesses Served',
      sub: 'UK, Nigeria & Global',
      icon: <Building className="w-3.5 h-3.5 text-brand-lime" />
    },
    {
      value: '100+',
      label: 'Systems Delivered',
      sub: 'Live Production',
      icon: <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime" />
    },
    {
      value: '4.9/5',
      label: 'Client Rating',
      sub: 'Verified Reviews',
      icon: <Award className="w-3.5 h-3.5 text-brand-lime" />
    },
    {
      value: '2023',
      label: 'Year Founded',
      sub: 'Continuous Growth',
      icon: <ShieldCheck className="w-3.5 h-3.5 text-brand-lime" />
    },
    {
      value: '7',
      label: 'Specialists',
      sub: 'In-House Engineers',
      icon: <Users className="w-3.5 h-3.5 text-brand-lime" />
    },
    {
      value: 'Global',
      label: 'Client Footprint',
      sub: 'Worldwide Delivery',
      icon: <Globe className="w-3.5 h-3.5 text-brand-lime" />
    }
  ];

  return (
    <section ref={barRef} className="relative z-20 py-8 md:py-10 border-y border-brand-border bg-brand-charcoal/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className={`p-3 sm:p-4 rounded-2xl bg-brand-dark/40 border border-brand-border/50 flex flex-col justify-between transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="flex items-center gap-1.5 mb-2">
                {item.icon}
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-silver">
                  {item.sub}
                </span>
              </div>
              <p className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                {item.value}
              </p>
              <p className="text-xs text-brand-silver font-medium mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
