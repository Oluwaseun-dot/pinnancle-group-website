import React, { useState } from 'react';
import { Calculator, Clock, DollarSign, Users, Sparkles, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { BOOKING_CALENDAR_URL } from '../config/bookingConfig';

export default function RoiTimeSavedCalculator() {
  const [employees, setEmployees] = useState(3);
  const [hoursPerEmployee, setHoursPerEmployee] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(35);

  // Calculations
  const totalHoursWeekly = employees * hoursPerEmployee;
  const totalHoursMonthly = Math.round(totalHoursWeekly * 4.33);
  const totalHoursYearly = totalHoursWeekly * 52;

  const weeklyCost = totalHoursWeekly * hourlyRate;
  const monthlyCost = Math.round(weeklyCost * 4.33);
  const yearlyCost = weeklyCost * 52;

  // Potential reclaimed bandwidth (typical 65-80% routine automation rate)
  const potentialReclaimedHoursMonthly = Math.round(totalHoursMonthly * 0.7);

  return (
    <section id="roi-calculator" className="py-20 sm:py-32 bg-brand-black text-brand-offWhite relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-brand-border text-brand-lime text-xs font-mono uppercase tracking-widest mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Operational Capacity Estimator
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-tight">
            Discover What Your Business <br className="hidden sm:inline" />
            <span className="text-brand-silver">Could Automate.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-brand-silver mt-3 leading-relaxed">
            Identify opportunities to reduce repetitive manual tasks, improve customer response times, and streamline your workflows. Adjust the parameters below to see how much time your team could reclaim each week.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="rounded-2xl sm:rounded-3xl bg-brand-charcoal border border-brand-border p-5 sm:p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Interactive Input Sliders */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold block mb-1">
                  Adjust Your Team Parameters
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  Repetitive Work Inputs
                </h3>
              </div>

              {/* Input 1: Number of Employees */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-brand-silver flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-brand-lime" />
                    Number of employees doing repetitive tasks:
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-brand-dark border border-brand-border text-brand-lime font-bold text-sm">
                    {employees} {employees === 1 ? 'person' : 'people'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="25"
                  value={employees}
                  onChange={(e) => setEmployees(parseInt(e.target.value) || 1)}
                  className="w-full h-2 bg-brand-dark rounded-lg appearance-none cursor-pointer accent-brand-lime"
                />
                <div className="flex justify-between text-[10px] font-mono text-brand-silver/60">
                  <span>1 person</span>
                  <span>12 people</span>
                  <span>25 people</span>
                </div>
              </div>

              {/* Input 2: Hours Per Employee Per Week */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-brand-silver flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-brand-lime" />
                    Hours spent per employee each week:
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-brand-dark border border-brand-border text-brand-lime font-bold text-sm">
                    {hoursPerEmployee} hrs / week
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="40"
                  step="1"
                  value={hoursPerEmployee}
                  onChange={(e) => setHoursPerEmployee(parseInt(e.target.value) || 2)}
                  className="w-full h-2 bg-brand-dark rounded-lg appearance-none cursor-pointer accent-brand-lime"
                />
                <div className="flex justify-between text-[10px] font-mono text-brand-silver/60">
                  <span>2 hrs</span>
                  <span>20 hrs</span>
                  <span>40 hrs (Full-time)</span>
                </div>
              </div>

              {/* Input 3: Average Hourly Cost */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-brand-silver flex items-center gap-2">
                    <DollarSign className="w-3.5 h-3.5 text-brand-lime" />
                    Average hourly cost / wage:
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-brand-dark border border-brand-border text-brand-lime font-bold text-sm">
                    ${hourlyRate} / hr
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="150"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(parseInt(e.target.value) || 15)}
                  className="w-full h-2 bg-brand-dark rounded-lg appearance-none cursor-pointer accent-brand-lime"
                />
                <div className="flex justify-between text-[10px] font-mono text-brand-silver/60">
                  <span>$15 / hr</span>
                  <span>$75 / hr</span>
                  <span>$150 / hr</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-brand-dark border border-brand-border text-[11px] font-mono text-brand-silver flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-lime shrink-0" />
                <span>Figures update in real-time based on your input parameters.</span>
              </div>
            </div>

            {/* Right: Calculated Outputs & Breakdown */}
            <div className="lg:col-span-6 bg-brand-dark rounded-2xl border border-brand-border p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-brand-border">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-silver block">
                    Calculated Breakdown
                  </span>
                  <h4 className="text-lg font-display font-bold text-white mt-0.5">
                    Estimated Current Manual Cost
                  </h4>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-brand-charcoal text-[11px] font-mono text-brand-lime border border-brand-border">
                  Illustrative Estimate
                </span>
              </div>

              {/* Primary Metrics Grid */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl bg-brand-charcoal border border-brand-border">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-silver block">
                    Hours spent weekly
                  </span>
                  <p className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                    {totalHoursWeekly} <span className="text-xs text-brand-silver font-mono">hrs</span>
                  </p>
                  <span className="text-[10px] font-mono text-brand-silver/80 mt-1 block">
                    ~{totalHoursMonthly} hrs / month
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-brand-charcoal border border-brand-border">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-silver block">
                    Weekly manual cost
                  </span>
                  <p className="text-2xl sm:text-3xl font-display font-bold text-brand-lime mt-1">
                    ${weeklyCost.toLocaleString()}
                  </p>
                  <span className="text-[10px] font-mono text-brand-silver/80 mt-1 block">
                    ~${monthlyCost.toLocaleString()} / month
                  </span>
                </div>
              </div>

              {/* Large Yearly Cost Banner */}
              <div className="p-5 rounded-2xl bg-brand-charcoal/80 border border-brand-border space-y-1">
                <div className="flex items-center justify-between text-xs font-mono text-brand-silver">
                  <span>ESTIMATED YEARLY MANUAL SPEND</span>
                  <span className="text-brand-lime font-bold">~{totalHoursYearly.toLocaleString()} hrs</span>
                </div>
                <p className="text-3xl sm:text-4xl font-display font-bold text-white">
                  ${yearlyCost.toLocaleString()} <span className="text-xs text-brand-silver font-mono font-normal">USD / year</span>
                </p>
                <p className="text-xs text-brand-silver pt-1">
                  Hours your team currently spends on repetitive work that could be automated.
                </p>
              </div>

              {/* Bandwidth Reclaim Insight */}
              <div className="p-4 rounded-xl bg-brand-charcoal border border-brand-lime/30 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-lime/10 border border-brand-lime/30 flex items-center justify-center shrink-0 text-brand-lime mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="space-y-0.5 text-xs">
                  <p className="text-white font-semibold">
                    Potential time available for higher-value work:
                  </p>
                  <p className="text-brand-silver">
                    Automating 70% of routine workflows could return up to <strong className="text-white">{potentialReclaimedHoursMonthly} hours every month</strong> back to sales, client service, and strategic growth.
                  </p>
                </div>
              </div>

              {/* Disclaimers & Action */}
              <div className="pt-2 space-y-4">
                <p className="text-[11px] text-brand-silver/70 italic leading-relaxed">
                  * This calculator is an estimate based on the information provided. Actual savings depend on the process, tools, and level of automation.
                </p>

                <div className="pt-2 border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs text-white font-medium">
                    Want us to look at the process behind these numbers?
                  </span>
                  <MagneticButton to={BOOKING_CALENDAR_URL} variant="primary" size="sm" showArrow={true}>
                    Book a Consultation
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
