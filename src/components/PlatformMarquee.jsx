import React from 'react';
import { Layers, Sparkles } from 'lucide-react';

const platforms = [
  // Freelance / Client Marketplaces (Explicitly distinguished)
  {
    name: 'Fiverr',
    category: 'Client Marketplace',
    badge: 'Marketplace',
    monogram: 'FV',
    isMarketplace: true
  },
  {
    name: 'Upwork',
    category: 'Client Marketplace',
    badge: 'Marketplace',
    monogram: 'UW',
    isMarketplace: true
  },
  {
    name: 'Kwork',
    category: 'Client Marketplace',
    badge: 'Marketplace',
    monogram: 'KW',
    isMarketplace: true
  },

  // Automation & Workflow Engines
  {
    name: 'GoHighLevel',
    category: 'CRM & Lead Pipelines',
    badge: 'CRM',
    monogram: 'GHL'
  },
  {
    name: 'Shopify',
    category: 'Ecommerce Infrastructure',
    badge: 'Storefront',
    monogram: 'SH'
  },
  {
    name: 'Airtable',
    category: 'Relational Database',
    badge: 'Database',
    monogram: 'AT'
  },
  {
    name: 'Make',
    category: 'Scenario Automation',
    badge: 'Automation',
    monogram: 'MK'
  },
  {
    name: 'n8n',
    category: 'Self-Hosted Workflows',
    badge: 'Workflows',
    monogram: 'N8'
  },
  {
    name: 'Zapier',
    category: 'Cross-App Middleware',
    badge: 'Integration',
    monogram: 'ZP'
  },

  // AI & Reasoning Engines
  {
    name: 'OpenAI',
    category: 'GPT-4o & Whisper APIs',
    badge: 'AI Engine',
    monogram: 'AI'
  },
  {
    name: 'Claude',
    category: 'Anthropic Reasoning',
    badge: 'AI Engine',
    monogram: 'CL'
  },

  // Payments, Comms & Marketing
  {
    name: 'Stripe',
    category: 'Billing & Invoicing',
    badge: 'Payments',
    monogram: 'ST'
  },
  {
    name: 'Twilio',
    category: 'Voice & SMS Telephony',
    badge: 'Telephony',
    monogram: 'TW'
  },
  {
    name: 'HubSpot',
    category: 'Inbound CRM Sync',
    badge: 'CRM',
    monogram: 'HS'
  },

  // Web & Content Platforms
  {
    name: 'WordPress',
    category: 'CMS & Content Sync',
    badge: 'CMS',
    monogram: 'WP'
  },
  {
    name: 'Webflow',
    category: 'Visual Web Builds',
    badge: 'Web',
    monogram: 'WF'
  },
  {
    name: 'Supabase',
    category: 'PostgreSQL & Auth State',
    badge: 'Database',
    monogram: 'SB'
  },
  {
    name: 'Google Workspace',
    category: 'Gmail & Drive APIs',
    badge: 'Productivity',
    monogram: 'GW'
  },
  {
    name: 'React',
    category: 'Interactive Web Apps',
    badge: 'Frontend',
    monogram: 'RC'
  },
  {
    name: 'Netlify',
    category: 'Edge CDN & Serverless',
    badge: 'Hosting',
    monogram: 'NL'
  }
];

export default function PlatformMarquee() {
  // Duplicate array once for a mathematically seamless 50% translation infinite loop
  const marqueeItems = [...platforms, ...platforms];

  return (
    <section
      id="tools-platforms"
      className="py-16 sm:py-20 bg-brand-dark/60 border-y border-brand-border/80 relative overflow-hidden"
      aria-label="Tools and platforms we work with"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 mb-8 sm:mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-brand-border text-brand-silver text-xs font-mono uppercase tracking-widest mb-3">
          <Layers className="w-3.5 h-3.5 text-brand-lime" />
          <span>Integrations & Tech Stack</span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white tracking-tight uppercase">
          TOOLS AND PLATFORMS WE WORK WITH
        </h2>
        <p className="text-xs sm:text-sm text-brand-silver max-w-2xl mx-auto mt-2 leading-relaxed">
          We build with the platforms your business relies on every day. Seamless connections with zero vendor lock-in.
        </p>
      </div>

      {/* Infinite scrolling marquee track */}
      <div className="relative w-full flex items-center overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex shrink-0 animate-marquee hover:[animation-play-state:paused] items-center gap-4 sm:gap-6 py-2">
          {marqueeItems.map((tool, idx) => (
            <div
              key={`${tool.name}-${idx}`}
              className="flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-brand-charcoal/90 border border-brand-border/90 hover:border-brand-lime/50 transition-all duration-300 shrink-0 group select-none shadow-sm hover:shadow-lime-glow-sm"
            >
              {/* Monogram Badge */}
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs tracking-wider transition-all duration-200 ${
                  tool.isMarketplace
                    ? 'bg-brand-black border border-brand-borderLight text-brand-offWhite group-hover:border-white'
                    : 'bg-brand-dark border border-brand-border text-brand-silver group-hover:text-brand-lime group-hover:border-brand-lime'
                }`}
              >
                {tool.monogram}
              </div>

              {/* Tool Details */}
              <div className="flex flex-col text-left pr-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold tracking-tight text-white group-hover:text-brand-lime transition-colors">
                    {tool.name}
                  </span>
                  <span
                    className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-full border ${
                      tool.isMarketplace
                        ? 'bg-white/5 border-white/20 text-brand-light'
                        : 'bg-brand-lime/10 border-brand-lime/30 text-brand-lime'
                    }`}
                  >
                    {tool.badge}
                  </span>
                </div>
                <span className="text-[11px] text-brand-silver/80 font-normal">
                  {tool.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reduced-motion static fallback for accessibility */}
      <div className="hidden motion-reduce:flex flex-wrap items-center justify-center gap-3 px-6 pt-4 max-w-5xl mx-auto">
        {platforms.map((tool, idx) => (
          <span
            key={idx}
            className="px-3 py-1.5 rounded-xl bg-brand-charcoal border border-brand-border text-xs text-brand-silver"
          >
            {tool.name} · {tool.badge}
          </span>
        ))}
      </div>
    </section>
  );
}
