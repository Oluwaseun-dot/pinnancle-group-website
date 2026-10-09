import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle2, Globe2, Sparkles } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';

const serviceMapping = {
  'ai-automation': 'AI Automation',
  'business-automation': 'Business Automation',
  'crm-automation': 'CRM Automation',
  'website-design': 'Website Design',
  'tender-support': 'Tender Support',
  'creative-media': 'Creative & AI Media'
};

const packageNames = {
  basic: 'Basic Package ($650)',
  standard: 'Standard Package ($1,500)',
  pro: 'Pro Package ($3,500)',
  custom: 'Custom Quote / Bespoke Scope'
};

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');
  const packageParam = searchParams.get('package');

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    serviceNeeded: serviceMapping[serviceParam] || 'AI Automation',
    budgetRange: '£3,000 - £7,500',
    projectDescription: packageParam
      ? `Inquiring about ${serviceMapping[serviceParam] || 'this service'} — ${packageNames[packageParam] || packageParam}.`
      : '',
    howDidYouHear: 'Referral / Colleague'
  });

  useEffect(() => {
    document.title = 'Contact & Project Inquiries | Pinnancle Group';
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-brand-black text-brand-offWhite min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Global Operations */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold">
                Direct Contact
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white mt-2 leading-tight">
                Have A Project <br />
                <span className="text-brand-silver">In Mind?</span>
              </h1>
              <p className="text-base sm:text-lg text-brand-silver mt-4 leading-relaxed">
                Whether you need a single automation, a complete CRM system, an AI agent, a website, or a custom digital solution, tell us what you are building.
              </p>
            </div>

            {/* Operations Desks */}
            <div className="space-y-4 pt-4 border-t border-brand-border">
              <div className="p-5 rounded-2xl bg-brand-charcoal border border-brand-border space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <MapPin className="w-4 h-4 text-brand-lime" />
                  <span>United Kingdom Operations</span>
                </div>
                <p className="text-xs text-brand-silver leading-relaxed">
                  London Strategic Desk: Strategic governance, European tender strategy, and corporate client support.
                </p>
                <p className="text-xs font-mono text-brand-lime pt-1">
                  desk.uk@pinnanclegroup.com
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-brand-charcoal border border-brand-border space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <MapPin className="w-4 h-4 text-brand-lime" />
                  <span>Nigeria Systems & Media Hub</span>
                </div>
                <p className="text-xs text-brand-silver leading-relaxed">
                  Lagos Engineering Center: Full-stack automation, CRM pipelines, software integrations, and multimedia.
                </p>
                <p className="text-xs font-mono text-brand-lime pt-1">
                  desk.ng@pinnanclegroup.com
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-brand-charcoal border border-brand-border space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Globe2 className="w-4 h-4 text-brand-lime" />
                  <span>Worldwide Client Engagements</span>
                </div>
                <p className="text-xs text-brand-silver leading-relaxed">
                  Deployments structured across UK, European, US, and African business time zones.
                </p>
                <p className="text-xs font-mono text-white pt-1">
                  hello@pinnanclegroup.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Project Request Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-brand-charcoal border border-brand-border p-8 sm:p-12 shadow-2xl relative">
              {submitted ? (
                <div className="py-16 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-brand-dark border border-brand-lime text-brand-lime flex items-center justify-center mx-auto shadow-lime-glow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Project Request Received.
                  </h3>
                  <p className="text-sm text-brand-silver max-w-md mx-auto leading-relaxed">
                    Thank you, {form.name}. A senior technical specialist will review your requirements and follow up within 4 business hours.
                  </p>
                  <div className="pt-4">
                    <MagneticButton
                      variant="secondary"
                      size="sm"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Inquiry
                    </MagneticButton>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {packageParam && (
                    <div className="p-3.5 rounded-xl bg-brand-lime/10 border border-brand-lime/30 flex items-center justify-between text-xs font-mono">
                      <span className="text-white">
                        Inquiring About: <strong className="text-brand-lime">{serviceMapping[serviceParam] || 'Custom Project'} · {packageNames[packageParam] || packageParam}</strong>
                      </span>
                      <span className="text-brand-silver hidden sm:inline">Starting Investment</span>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-brand-silver mb-1.5 font-semibold">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Johnathan Doe"
                        className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white placeholder-brand-silver/30 text-sm focus:outline-none focus:border-brand-lime"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-brand-silver mb-1.5 font-semibold">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="johnathan@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white placeholder-brand-silver/30 text-sm focus:outline-none focus:border-brand-lime"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-brand-silver mb-1.5 font-semibold">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+44 7911 123456 or +234 80 1234 5678"
                        className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white placeholder-brand-silver/30 text-sm focus:outline-none focus:border-brand-lime"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-brand-silver mb-1.5 font-semibold">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Doe Global Logistics"
                        className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white placeholder-brand-silver/30 text-sm focus:outline-none focus:border-brand-lime"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-brand-silver mb-1.5 font-semibold">
                      Company Website / URL
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={form.website}
                      onChange={handleChange}
                      placeholder="https://yourcompany.com"
                      className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white placeholder-brand-silver/30 text-sm focus:outline-none focus:border-brand-lime"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-brand-silver mb-1.5 font-semibold">
                        Primary Service Needed *
                      </label>
                      <select
                        name="serviceNeeded"
                        value={form.serviceNeeded}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white text-sm focus:outline-none focus:border-brand-lime"
                      >
                        <option value="AI Automation">AI Automation (Chat/Voice/Receptionist)</option>
                        <option value="Business Automation">Business Automation & Integrations</option>
                        <option value="CRM Automation">CRM Automation (GoHighLevel/HubSpot)</option>
                        <option value="Website Design">Website Design & Development</option>
                        <option value="Tender Support">Tender Support & Opportunities</option>
                        <option value="Creative & AI Media">Creative Design & Video</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-brand-silver mb-1.5 font-semibold">
                        Budget Range
                      </label>
                      <select
                        name="budgetRange"
                        value={form.budgetRange}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white text-sm focus:outline-none focus:border-brand-lime"
                      >
                        <option value="£3,000 - £7,500">£3,000 - £7,500 (or equivalent)</option>
                        <option value="£7,500 - £15,000">£7,500 - £15,000 (Standard System)</option>
                        <option value="£15,000 - £35,000">£15,000 - £35,000 (Complete Platform)</option>
                        <option value="£35,000+">£35,000+ (Enterprise Transformation)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-brand-silver mb-1.5 font-semibold">
                      What are you trying to improve, automate, or build? *
                    </label>
                    <textarea
                      required
                      rows={4}
                      name="projectDescription"
                      value={form.projectDescription}
                      onChange={handleChange}
                      placeholder="Describe what is taking too much time, your current tools, and ideal completion timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white placeholder-brand-silver/30 text-sm focus:outline-none focus:border-brand-lime"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-brand-silver mb-1.5 font-semibold">
                      How Did You Hear About Us?
                    </label>
                    <input
                      type="text"
                      name="howDidYouHear"
                      value={form.howDidYouHear}
                      onChange={handleChange}
                      placeholder="Referral, LinkedIn, Case Study, Google, etc."
                      className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border text-white placeholder-brand-silver/30 text-sm focus:outline-none focus:border-brand-lime"
                    />
                  </div>

                  <div className="pt-2">
                    <MagneticButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      showArrow={true}
                      className="w-full justify-center"
                    >
                      Send Project Request
                    </MagneticButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
