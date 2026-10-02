import React, { useEffect, useRef, useState } from 'react';
import { Award, Building, CheckCircle2, ShieldCheck, Users, Globe } from 'lucide-react';

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
      { threshold: 0.2 }
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
      icon: <Building className="w-4 h-4 text-white" />
    },
    {
      value: '100+',
      label: 'Projects Delivered',
      sub: 'Live Production Systems',
      icon: <CheckCircle2 className="w-4 h-4 text-white" />
    },
    {
      value: '4.9/5',
      label: 'Client Rating',
      sub: 'Verified Customer Reviews',
      icon: <Award className="w-4 h-4 text-brand-lime" />
    },
    {
      value: '2023',
      label: 'Founded',
      sub: 'Continuous Growth',
      icon: <ShieldCheck className="w-4 h-4 text-white" />
    },
    {
      value: '7',
      label: 'Specialists',
      sub: 'In-House Engineers',
      icon: <Users className="w-4 h-4 text-white" />
    },
    {
      value: 'Worldwide',
      label: 'Client Reach',
      sub: 'International Scale',
      icon: <Globe className="w-4 h-4 text-white" />
    }
  ];

  return (
    <section ref={barRef} className="relative z-20 py-16 border-y border-brand-border bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl bg-brand-dark border border-brand-border hover:border-brand-borderLight transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${idx * 75}ms` }}
            >
              <div className="flex items-center gap-2 mb-2">
                {item.icon}
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-silver">
                  {item.sub}
                </span>
              </div>
              <p className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
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
