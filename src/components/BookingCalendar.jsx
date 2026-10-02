import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Globe, User, Mail, Phone, Building, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function BookingCalendar() {
  const [step, setStep] = useState(1); // 1: Select Type & Date, 2: Select Time & Info, 3: Confirmed

  const [timezone, setTimezone] = useState('Europe/London');
  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz) setTimezone(tz);
    } catch (e) {
      // fallback
    }
  }, []);

  const appointmentTypes = [
    {
      id: 'ai-automation',
      title: 'AI Automation Consultation',
      duration: '30 Mins',
      desc: 'Discuss AI receptionists, phone agents, lead follow-up, and automated customer communication.'
    },
    {
      id: 'crm-workflow',
      title: 'CRM & Workflow Consultation',
      duration: '45 Mins',
      desc: 'Review GoHighLevel or HubSpot setup, lead management, and connecting your daily software tools.'
    },
    {
      id: 'web-digital',
      title: 'Website & Digital Systems Consultation',
      duration: '30 Mins',
      desc: 'Discuss a new high-conversion website, redesign, or connecting your website to your CRM.'
    },
    {
      id: 'custom-automation',
      title: 'Custom Business Automation Consultation',
      duration: '45 Mins',
      desc: 'For unique operational workflows, tender opportunities, or complex multi-step processes.'
    }
  ];

  const [selectedType, setSelectedType] = useState(appointmentTypes[0].id);
  const [selectedDate, setSelectedDate] = useState('2026-10-05');
  const [selectedTime, setSelectedTime] = useState('14:00');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    helpNeeded: 'AI lead follow-up and CRM automation',
    additionalInfo: ''
  });

  const dates = [
    { dayName: 'Mon', dateNum: '05', fullDate: '2026-10-05', month: 'Oct' },
    { dayName: 'Tue', dateNum: '06', fullDate: '2026-10-06', month: 'Oct' },
    { dayName: 'Wed', dateNum: '07', fullDate: '2026-10-07', month: 'Oct' },
    { dayName: 'Thu', dateNum: '08', fullDate: '2026-10-08', month: 'Oct' },
    { dayName: 'Fri', dateNum: '09', fullDate: '2026-10-09', month: 'Oct' },
    { dayName: 'Mon', dateNum: '12', fullDate: '2026-10-12', month: 'Oct' },
    { dayName: 'Tue', dateNum: '13', fullDate: '2026-10-13', month: 'Oct' },
    { dayName: 'Wed', dateNum: '14', fullDate: '2026-10-14', month: 'Oct' },
    { dayName: 'Thu', dateNum: '15', fullDate: '2026-10-15', month: 'Oct' },
    { dayName: 'Fri', dateNum: '16', fullDate: '2026-10-16', month: 'Oct' }
  ];

  const timeSlots = [
    '09:30', '10:15', '11:00', '13:30', '14:00', '15:15', '16:00', '17:30'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCompleteBooking = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const currentTypeObj = appointmentTypes.find((t) => t.id === selectedType);

  return (
    <div className="w-full rounded-3xl bg-brand-charcoal border border-brand-border p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
      {/* Header and Step Indicator */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-brand-border">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
            Direct Calendar Booking
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mt-1">
            {step === 1 && '1. Select Consultation & Preferred Date'}
            {step === 2 && '2. Select Time & Business Details'}
            {step === 3 && 'Consultation Confirmed'}
          </h3>
        </div>

        {/* Timezone Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-dark border border-brand-border text-xs font-mono text-brand-silver">
          <Globe className="w-3.5 h-3.5 text-brand-lime" />
          <span>Timezone: {timezone}</span>
        </div>
      </div>

      {/* STEP 1: Consultation Type & Date */}
      {step === 1 && (
        <div className="py-8 space-y-8 animate-fade-in">
          {/* Appointment Types */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-brand-silver mb-3 font-semibold">
              Select Appointment Focus:
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {appointmentTypes.map((type) => {
                const isSelected = selectedType === type.id;
                return (
                  <div
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-5 rounded-2xl cursor-pointer transition-all duration-200 border ${
                      isSelected
                        ? 'bg-brand-dark border-brand-lime shadow-lime-glow-sm'
                        : 'bg-brand-dark border-brand-border hover:border-brand-borderLight'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white text-sm">{type.title}</h4>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-brand-lime">
                        {type.duration}
                      </span>
                    </div>
                    <p className="text-xs text-brand-silver leading-relaxed">{type.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Date Selector */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-brand-silver mb-3 font-semibold">
              Select Preferred Date (October 2026):
            </label>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
              {dates.map((d) => {
                const isSelected = selectedDate === d.fullDate;
                return (
                  <button
                    key={d.fullDate}
                    type="button"
                    onClick={() => setSelectedDate(d.fullDate)}
                    className={`p-3 rounded-2xl text-center transition-all duration-200 border flex flex-col items-center justify-center ${
                      isSelected
                        ? 'bg-brand-lime text-black font-bold border-brand-lime shadow-lime-glow-sm'
                        : 'bg-brand-dark border-brand-border text-brand-silver hover:text-white hover:border-brand-borderLight'
                    }`}
                  >
                    <span className="text-[10px] font-mono uppercase">{d.dayName}</span>
                    <span className="text-base font-bold my-0.5">{d.dateNum}</span>
                    <span className="text-[9px] font-mono opacity-70">{d.month}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <MagneticButton
              variant="primary"
              size="md"
              onClick={() => setStep(2)}
              showArrow={true}
            >
              Continue to Time & Details
            </MagneticButton>
          </div>
        </div>
      )}

      {/* STEP 2: Time Selection & Contact Questionnaire */}
      {step === 2 && (
        <form onSubmit={handleCompleteBooking} className="py-8 space-y-8 animate-fade-in">
          {/* Time slot pills */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-brand-silver mb-3 font-semibold">
              Select Meeting Time ({timezone}):
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2">
              {timeSlots.map((time) => {
                const isSelected = selectedTime === time;
                return (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-2.5 px-3 rounded-xl text-center text-xs font-mono font-medium transition-all duration-200 border ${
                      isSelected
                        ? 'bg-brand-lime text-black font-bold border-brand-lime shadow-lime-glow-sm'
                        : 'bg-brand-dark border-brand-border text-brand-silver hover:text-white'
                    }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase text-brand-silver mb-1.5">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Alistair Sterling"
                className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white placeholder-brand-silver/30 text-sm focus:outline-none focus:border-brand-lime"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-brand-silver mb-1.5">
                Work Email *
              </label>
              <input
                type="email"
                required
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="alistair@company.com"
                className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white placeholder-brand-silver/30 text-sm focus:outline-none focus:border-brand-lime"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-brand-silver mb-1.5">
                Phone Number / WhatsApp *
              </label>
              <input
                type="tel"
                required
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+44 7911 123456 or +234 80 1234 5678"
                className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white placeholder-brand-silver/30 text-sm focus:outline-none focus:border-brand-lime"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-brand-silver mb-1.5">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Sterling Capital"
                className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white placeholder-brand-silver/30 text-sm focus:outline-none focus:border-brand-lime"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-mono uppercase text-brand-silver mb-1.5">
                Website or Social Link
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="https://company.com"
                className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white placeholder-brand-silver/30 text-sm focus:outline-none focus:border-brand-lime"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-mono uppercase text-brand-silver mb-1.5">
                What are you trying to improve, automate, or build? *
              </label>
              <textarea
                required
                rows={3}
                name="helpNeeded"
                value={formData.helpNeeded}
                onChange={handleInputChange}
                placeholder="Tell us what is taking too much manual time or what tools you use..."
                className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white placeholder-brand-silver/30 text-sm focus:outline-none focus:border-brand-lime"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-2 text-xs font-mono text-brand-silver hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" /> Change Date or Type
            </button>

            <MagneticButton
              type="submit"
              variant="primary"
              size="md"
              showArrow={true}
            >
              Confirm Consultation
            </MagneticButton>
          </div>
        </form>
      )}

      {/* STEP 3: Confirmed Screen */}
      {step === 3 && (
        <div className="py-12 text-center space-y-6 animate-fade-in max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-brand-dark border border-brand-lime text-brand-lime flex items-center justify-center mx-auto shadow-lime-glow-sm">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
              Consultation Confirmed
            </span>
            <h4 className="text-3xl font-display font-bold text-white tracking-tight">
              We Look Forward To Speaking, {formData.name || 'Partner'}.
            </h4>
            <p className="text-sm text-brand-silver leading-relaxed">
              A calendar invitation with a video conference link has been sent to{' '}
              <span className="text-white font-medium">{formData.email || 'your email'}</span>.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-brand-dark border border-brand-border text-left text-xs font-mono space-y-3">
            <div className="flex justify-between border-b border-brand-border pb-2">
              <span className="text-brand-silver">Focus:</span>
              <span className="text-white">{currentTypeObj?.title}</span>
            </div>
            <div className="flex justify-between border-b border-brand-border pb-2">
              <span className="text-brand-silver">Scheduled Time:</span>
              <span className="text-white">{selectedDate} at {selectedTime} ({timezone})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-brand-silver">Format:</span>
              <span className="text-white">Video Call & Operational Systems Audit</span>
            </div>
          </div>

          <div className="pt-4 flex justify-center">
            <MagneticButton
              variant="secondary"
              size="sm"
              onClick={() => {
                setStep(1);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  company: '',
                  website: '',
                  helpNeeded: '',
                  additionalInfo: ''
                });
              }}
            >
              Book Another Appointment
            </MagneticButton>
          </div>
        </div>
      )}
    </div>
  );
}
