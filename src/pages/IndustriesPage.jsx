import React, { useEffect } from 'react';
import IndustriesInteractive from '../components/IndustriesInteractive';
import MagneticButton from '../components/MagneticButton';
import { ArrowUpRight } from 'lucide-react';

export default function IndustriesPage() {
  useEffect(() => {
    document.title = 'Industry Solutions & Automations | Pinnancle Group';
  }, []);

  return (
    <div className="pt-32 pb-24 bg-[#050505] text-brand-softWhite min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
            Sector-Specific Engineering
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-white mt-3 leading-tight">
            Designed Around Your Industry's Reality.
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 mt-6 leading-relaxed">
            From emergency home service dispatches to private clinic scheduling, legal intake compliance, and ecommerce returns, explore how Pinnancle Group eliminates industry-specific friction.
          </p>
        </div>

        <IndustriesInteractive />

        <div className="mt-20 p-10 rounded-3xl bg-[#101010] border border-white/10 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-display font-bold text-white">
            Don't see your specific industry?
          </h3>
          <p className="text-sm text-neutral-400">
            If your business has inquiries coming in and data moving between people, we can architect an autonomous system for your operations.
          </p>
          <div className="pt-2 flex justify-center">
            <MagneticButton to="/book" variant="primary" size="md">
              Book a Specialized Consultation
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
}
