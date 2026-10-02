import React, { useEffect } from 'react';
import BookingCalendar from '../components/BookingCalendar';
import { ShieldCheck, Clock, Globe2, CheckCircle2 } from 'lucide-react';

export default function BookPage() {
  useEffect(() => {
    document.title = 'Book a Consultation | Pinnancle Group';
  }, []);

  return (
    <div className="pt-32 pb-24 bg-brand-black text-brand-offWhite min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-12">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
            Direct Calendar Access
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-white mt-2 leading-tight">
            Let's Talk About <br />
            <span className="text-brand-silver">Your Business.</span>
          </h1>
          <p className="text-base sm:text-lg text-brand-silver mt-4 leading-relaxed">
            Tell us what is slowing your business down or what you want to automate. Select a consultation focus below to lock in a confidential 30-minute discovery call with our senior technical team.
          </p>
        </div>

        {/* Benefits Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-brand-silver">
          <div className="flex items-center gap-2 p-3.5 rounded-xl bg-brand-charcoal border border-brand-border">
            <CheckCircle2 className="w-4 h-4 text-brand-lime" />
            <span>Direct Technical Audit · No Sales Fluff</span>
          </div>
          <div className="flex items-center gap-2 p-3.5 rounded-xl bg-brand-charcoal border border-brand-border">
            <Clock className="w-4 h-4 text-brand-lime" />
            <span>Instant Calendar Lock</span>
          </div>
          <div className="flex items-center gap-2 p-3.5 rounded-xl bg-brand-charcoal border border-brand-border">
            <Globe2 className="w-4 h-4 text-brand-lime" />
            <span>UK, Nigeria & Worldwide Hours</span>
          </div>
        </div>

        {/* Embedded Booking Engine */}
        <BookingCalendar />
      </div>
    </div>
  );
}
