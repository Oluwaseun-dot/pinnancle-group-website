export const servicesPricingData = [
  {
    id: 'ai-automation',
    name: 'AI Automation',
    badge: 'Flagship Practice Area',
    description: 'Autonomous voice, chat, and scheduling AI agents engineered to handle customer inquiries 24/7 without human latency.',
    tiers: [
      {
        id: 'basic',
        name: 'Basic',
        startingPrice: '$650',
        billingNote: 'Starting investment · One-time deployment',
        badge: 'Starter',
        tagline: 'Single Focused AI Inbound Assistant',
        summary: 'Ideal for small businesses needing immediate 24/7 coverage for customer inquiries and lead qualification.',
        turnaround: '5–7 Business Days',
        deliverables: [
          'Dedicated AI Web Chatbot or Single Inbound Voice Assistant',
          'Trained on up to 50 business knowledge base documents / FAQs',
          'Automated lead qualification (Name, Email, Phone, Project needs)',
          'Direct integration into 1 calendar (Google Calendar / Calendly)',
          'Instant notification routing via Email or Slack upon lead qualification',
          'Human handoff fallback when query falls outside trained knowledge',
          'Prompt guardrails to prevent hallucinations and off-topic dialogue',
          'Comprehensive live testing & validation session before launch'
        ],
        idealFor: 'Local businesses, clinics, and solo practices missing inquiries after hours.'
      },
      {
        id: 'standard',
        name: 'Standard',
        startingPrice: '$1,500',
        billingNote: 'Starting investment · One-time deployment',
        badge: 'Most Popular',
        popular: true,
        tagline: 'Dual-Channel AI Agent System & CRM Sync',
        summary: 'Our most requested package. Covers multi-channel inbound traffic with automated booking and CRM integration.',
        turnaround: '10–14 Business Days',
        deliverables: [
          'Dual-channel deployment: Website AI Chat + WhatsApp or AI Voice Receptionist',
          'Advanced multi-turn prompt engineering with dynamic business rules',
          'Two-way calendar booking with live slot conflict resolution',
          'Direct CRM sync (GoHighLevel, HubSpot, or Airtable contact creation)',
          'Automated SMS/Email appointment confirmation & reminder workflows',
          'Lead scoring & intelligent routing based on client inquiry type',
          'Conversation transcript archiving and sentiment categorization',
          '14 days post-launch live monitoring and prompt fine-tuning'
        ],
        idealFor: 'Growing service businesses, contractors, and agencies receiving 20–100 inquiries weekly.'
      },
      {
        id: 'pro',
        name: 'Pro',
        startingPrice: '$3,500',
        billingNote: 'Starting investment · One-time deployment',
        badge: 'Enterprise Architecture',
        tagline: 'Autonomous Multi-Agent Systems & RAG Knowledge Engine',
        summary: 'A complete autonomous operational suite coordinating voice, messaging, CRM progression, and back-office tasks.',
        turnaround: '2–3 Weeks',
        deliverables: [
          'Omnichannel coordinated suite: Voice Phone Agent + WhatsApp + Web Chat',
          'Custom RAG (Retrieval-Augmented Generation) over full company library & SOPs',
          'Bidirectional CRM pipeline progression & automated status updates',
          'Action execution: Order lookup, draft quote creation, ticket dispatch',
          'Real-time manager escalation routing via SMS & Slack for high-value leads',
          'Dedicated call recording, transcription, and conversion analytics dashboard',
          'Failover redundancy protocols with zero-downtime architecture',
          '30 days post-launch performance optimization & team training workshop'
        ],
        idealFor: 'Established companies, multi-location clinics, and sales teams requiring autonomous operations.'
      },
      {
        id: 'custom',
        name: 'Custom',
        startingPrice: 'Custom Quote',
        billingNote: 'Tailored scope · Milestone or retainer based',
        badge: 'Bespoke Engineering',
        tagline: 'Proprietary AI Architecture & High-Concurrency Systems',
        summary: 'Bespoke AI solutions engineered for proprietary databases, custom models, regulated compliance, or high call volumes.',
        turnaround: 'Defined by Project Scope',
        deliverables: [
          'Bespoke voice agent infrastructure with sub-600ms latency & custom voice cloning',
          'Proprietary database & ERP integrations (SAP, Salesforce, internal SQL/NoSQL APIs)',
          'Private cloud or on-premise model deployment for complete data sovereignty',
          'High-concurrency call handling engineered for enterprise call centers',
          'Custom compliance architectures (HIPAA, GDPR, SOC2 security protocols)',
          'Custom SLAs, dedicated DevOps monitoring, and priority technical support',
          'Multi-language simultaneous localization & multi-brand routing',
          'Ongoing architecture advisory & monthly fine-tuning retainers available'
        ],
        idealFor: 'Enterprises, fintech, healthcare organizations, and high-volume commercial operations.'
      }
    ]
  },
  {
    id: 'business-automation',
    name: 'Business Automation',
    badge: 'Operational Efficiency',
    description: 'Resilient backend workflows built with Make.com and n8n that connect your software stack and eliminate manual copy-pasting.',
    tiers: [
      {
        id: 'basic',
        name: 'Basic',
        startingPrice: '$650',
        billingNote: 'Starting investment · One-time setup',
        badge: 'Starter',
        tagline: 'Essential Multi-Step Workflow Connector',
        summary: 'Eliminate manual data transfer between your primary lead form, spreadsheet, and notification channels.',
        turnaround: '3–5 Business Days',
        deliverables: [
          'Up to 2 multi-step automated scenarios (Make.com or n8n)',
          'Connects up to 3 core tools (e.g. Webhook Form → Google Sheets → Email/Slack)',
          'Automated data validation and duplicate entry prevention',
          'Clean field formatting, date standardization, and error logging',
          'Real-time team notification alerts with formatted inquiry summaries',
          'Scenario failure alerts to notify admins if an external service goes down',
          'Full recorded Loom video walkthrough explaining the scenario structure'
        ],
        idealFor: 'Businesses spending 5–10 hours each week retyping form submissions into spreadsheets.'
      },
      {
        id: 'standard',
        name: 'Standard',
        startingPrice: '$1,500',
        billingNote: 'Starting investment · One-time setup',
        badge: 'Most Popular',
        popular: true,
        tagline: 'Multi-Platform Operations & Invoicing Pipeline',
        summary: 'Synchronize customer data across your ecommerce or service stack, invoice generation, and internal task queues.',
        turnaround: '7–10 Business Days',
        deliverables: [
          'Up to 5 interconnected automation workflows across your operations',
          'Connects up to 6 tools (e.g. Shopify/Stripe → Airtable → CRM → Accounting → Slack)',
          'Automated invoice generation, PDF creation, and customer receipt dispatch',
          'Conditional branching logic based on purchase value or inquiry priority',
          'Automated data reconciliation & bidirectional inventory or lead syncing',
          'Built-in error handling with automatic retry queues and dead-letter logging',
          '14 days post-deployment monitoring and adjustment'
        ],
        idealFor: 'Ecommerce brands, service agencies, and growing companies with disconnected SaaS tools.'
      },
      {
        id: 'pro',
        name: 'Pro',
        startingPrice: '$3,500',
        billingNote: 'Starting investment · One-time setup',
        badge: 'Enterprise Architecture',
        tagline: 'End-to-End Enterprise Systems Automation',
        summary: 'A comprehensive operational nervous system orchestrating sales, fulfillment, invoicing, and reporting.',
        turnaround: '2–3 Weeks',
        deliverables: [
          'Complete business operations engine (10+ interconnected workflows)',
          'Self-hosted or dedicated private n8n instance setup with container security',
          'Multi-department orchestration (Sales, Operations, Fulfillment & Finance)',
          'High-volume webhook ingestion queues with payload encryption & rate limiting',
          'Automated weekly KPI digest and executive reporting compiled into Slack/Email',
          'Automated rollback protocols to protect data integrity during third-party outages',
          'Comprehensive technical documentation, architecture blueprints, and team handover',
          '30-day warranty & performance tuning support'
        ],
        idealFor: 'Established businesses looking to save 20–40 employee hours weekly across multiple departments.'
      },
      {
        id: 'custom',
        name: 'Custom',
        startingPrice: 'Custom Quote',
        billingNote: 'Tailored scope · Milestone or retainer based',
        badge: 'Bespoke Engineering',
        tagline: 'High-Throughput Middleware & Proprietary API Bridges',
        summary: 'Custom microservices, legacy database synchronization, and high-frequency webhook pipelines.',
        turnaround: 'Defined by Project Scope',
        deliverables: [
          'Custom Node.js / Python middleware bridges for unsupported proprietary APIs',
          'Legacy on-premise SQL database synchronization with cloud platforms',
          'High-throughput architectures handling millions of monthly data payloads',
          'Dedicated cloud infrastructure (AWS Lambda, Google Cloud Run, Cloudflare Workers)',
          'Strict enterprise security compliance, data tokenization, and audit logging',
          'Disaster recovery protocols and automated failover pipelines',
          'Dedicated SLA maintenance retainers and guaranteed response windows'
        ],
        idealFor: 'Enterprises with legacy ERPs, custom software platforms, or high-volume data transactions.'
      }
    ]
  },
  {
    id: 'crm-automation',
    name: 'CRM Automation',
    badge: 'Sales Pipeline Architecture',
    description: 'Turnkey GoHighLevel and HubSpot CRM deployments with automated follow-ups, pipeline tracking, and customer retention systems.',
    tiers: [
      {
        id: 'basic',
        name: 'Basic',
        startingPrice: '$650',
        billingNote: 'Starting investment · One-time setup',
        badge: 'Starter',
        tagline: 'CRM Setup & Lead Capture Starter',
        summary: 'Get your CRM properly configured so new leads are never lost and receive an instant response.',
        turnaround: '4–6 Business Days',
        deliverables: [
          'Complete GoHighLevel or HubSpot account configuration & clean data structure',
          '1 core sales pipeline with custom stages tailored to your sales process',
          'Lead form & Meta/Google ad webhook integration into your CRM',
          'Missed-Call Instant Text-Back automation (never lose a missed call lead)',
          'Automated welcome email & SMS confirmation sequence for new inquiries',
          'Centralized universal inbox setup (Email, SMS, Facebook, Instagram DMs)',
          '1-on-1 walkthrough video showing your team how to manage daily leads'
        ],
        idealFor: 'Companies adopting GoHighLevel or HubSpot for the first time or fixing a messy setup.'
      },
      {
        id: 'standard',
        name: 'Standard',
        startingPrice: '$1,500',
        billingNote: 'Starting investment · One-time setup',
        badge: 'Most Popular',
        popular: true,
        tagline: 'Complete Sales Pipeline & Nurture Engine',
        summary: 'Multi-stage sales pipelines, automated email/SMS follow-up sequences, and self-serve booking calendar integration.',
        turnaround: '8–12 Business Days',
        deliverables: [
          'Up to 3 custom pipelines (e.g., Inbound Leads, Active Opportunities, Onboarding)',
          'Multi-touch automated follow-up sequences (Email + SMS nurture campaigns)',
          'Two-way calendar booking system with automated reminder & reschedule triggers',
          'Automated lead scoring, tag management, and stage progression rules',
          'Internal task assignment: auto-assign leads to specific reps with deadlines',
          'Custom reporting dashboard tracking pipeline conversion rates and deal values',
          '14 days post-launch support and pipeline stage adjustments'
        ],
        idealFor: 'Businesses with 2–5 sales reps looking to increase lead conversion rates by 30%+.'
      },
      {
        id: 'pro',
        name: 'Pro',
        startingPrice: '$3,500',
        billingNote: 'Starting investment · One-time setup',
        badge: 'Enterprise Architecture',
        tagline: 'Advanced Multi-Channel Revenue Operations (RevOps)',
        summary: 'Full customer lifecycle automation from initial cold touch through closing, onboarding, reviews, and retention.',
        turnaround: '2–3 Weeks',
        deliverables: [
          'Enterprise GoHighLevel or HubSpot architecture designed for multi-user teams',
          'Full lifecycle automation: Lead → Opportunity → Won → Client Onboarding → Retention',
          'Interactive conversational AI booking assistant within CRM SMS/chat channels',
          'Automated review generation campaign (Google Reviews / Trustpilot sequences)',
          'VoIP phone routing rules, call recording configuration, and IVR menu trees',
          'Re-engagement engine targeting past inactive contacts to generate new revenue',
          'Complete custom field hierarchy, permissions, and team role restrictions',
          'Live team training session & full library of recorded standard operating procedures (SOPs)'
        ],
        idealFor: 'Established sales organizations, multi-department teams, and high-ticket service firms.'
      },
      {
        id: 'custom',
        name: 'Custom',
        startingPrice: 'Custom Quote',
        billingNote: 'Tailored scope · Milestone or retainer based',
        badge: 'Bespoke Engineering',
        tagline: 'Multi-Location, Franchise & SaaS Snapshot Systems',
        summary: 'Large-scale CRM architecture with sub-account templates, custom data migrations, and proprietary integrations.',
        turnaround: 'Defined by Project Scope',
        deliverables: [
          'Multi-location sub-account snapshots (SaaS / Agency / Multi-branch deployments)',
          'Clean historical data migration from legacy CRMs (Salesforce, Pipedrive, Zoho) with zero data loss',
          'Custom API integrations connecting internal ERP or proprietary client databases',
          'Advanced role-based security permissions, audit logging, and compliance configs',
          'Custom whitelabel mobile app configuration and client portal setup',
          'Dedicated RevOps consulting and quarterly optimization retainers available'
        ],
        idealFor: 'Franchises, agencies, SaaS platforms, and enterprise companies with complex sales teams.'
      }
    ]
  },
  {
    id: 'website-design',
    name: 'Website Design',
    badge: 'Digital Conversion Architecture',
    description: 'High-speed, conversion-engineered websites built with React, Next.js, and modern CMS platforms to position your brand as an industry leader.',
    tiers: [
      {
        id: 'basic',
        name: 'Basic',
        startingPrice: '$650',
        billingNote: 'Starting investment · One-time project',
        badge: 'Starter',
        tagline: 'High-Converting Single Page / Landing Page',
        summary: 'A fast, polished, conversion-focused landing page engineered to turn ad traffic or visitors into inquiries.',
        turnaround: '5–7 Business Days',
        deliverables: [
          'Custom-designed, responsive landing page (React / Tailwind or modern CMS)',
          'Engineered for mobile-first responsiveness across all device sizes (320px–1920px)',
          'Compelling visual layout with strategic value propositions and conversion CTAs',
          'Lead capture form integrated with your email, Google Sheets, or CRM webhook',
          'Technical SEO foundation: Meta titles, OpenGraph social cards, schema markup',
          'Sub-second load speeds, optimized web assets, and modern font rendering',
          'Pre-launch cross-browser testing across Chrome, Safari, iOS, and Android'
        ],
        idealFor: 'New product launches, paid ad campaigns, or solo practitioners needing a credible digital presence.'
      },
      {
        id: 'standard',
        name: 'Standard',
        startingPrice: '$1,500',
        billingNote: 'Starting investment · One-time project',
        badge: 'Most Popular',
        popular: true,
        tagline: 'Multi-Page Professional Business Website',
        summary: 'Our signature multi-page website package with interactive components, direct CRM integration, and full CMS capability.',
        turnaround: '10–14 Business Days',
        deliverables: [
          'Up to 5 bespoke pages (Home, About, Services, Case Studies/Portfolio, Contact)',
          'Responsive interactive navigation, smooth micro-interactions, and dark/light polish',
          'Self-serve calendar booking system or interactive project quote form integrated',
          'Direct CRM webhook integration (leads instantly route to your pipeline)',
          'Client CMS capability: easily update text, images, and case studies without code',
          'Comprehensive technical SEO audit: sitemap, robots.txt, Google Search Console setup',
          'Performance optimization targeting 90+ Core Web Vitals score on mobile and desktop',
          '14 days post-launch warranty and technical adjustments'
        ],
        idealFor: 'Established service businesses, consultancies, and contractors ready to stand out from competitors.'
      },
      {
        id: 'pro',
        name: 'Pro',
        startingPrice: '$3,500',
        billingNote: 'Starting investment · One-time project',
        badge: 'Enterprise Architecture',
        tagline: 'Full Digital Experience & Ecommerce Platform',
        summary: 'Extensive web platforms with up to 10 custom pages, headless architecture, or complete Shopify ecommerce solutions.',
        turnaround: '3–4 Weeks',
        deliverables: [
          'Up to 10 bespoke pages OR complete custom Shopify / headless ecommerce store',
          'Custom product architecture, interactive filtering, and optimized one-click checkout',
          'Advanced interactive components (custom ROI calculators, multi-step configurators)',
          'Automated transactional emails, inventory sync, and accounting integrations',
          'Top-tier Core Web Vitals optimization (95+ score) and strict WCAG accessibility compliance',
          'Custom animated graphics, micro-interactions, and high-performance video embedding',
          'Full technical SEO architecture with localized keyword mapping and rich snippets',
          '30 days post-launch priority support, warranty, and staff training session'
        ],
        idealFor: 'Ecommerce brands, scaling technology companies, and market leaders requiring bespoke digital experiences.'
      },
      {
        id: 'custom',
        name: 'Custom',
        startingPrice: 'Custom Quote',
        billingNote: 'Tailored scope · Milestone based',
        badge: 'Bespoke Engineering',
        tagline: 'Bespoke Web Applications & Client Portals',
        summary: 'Full-stack custom web applications featuring user authentication, customer dashboards, and custom backend APIs.',
        turnaround: 'Defined by Project Scope',
        deliverables: [
          'Full-stack custom web application (React, Node.js, PostgreSQL/Supabase, custom APIs)',
          'Secure user authentication, role-based dashboards, and client portal architecture',
          'Multi-tenant architecture or multi-language internationalization (i18n)',
          'Custom billing integration (Stripe customer portals, tiered subscription metering)',
          'Dedicated cloud infrastructure setup on AWS or Vercel with automated CI/CD pipelines',
          'Comprehensive security audit, penetration testing, and GDPR/CCPA data compliance',
          'Ongoing development retainers and enterprise SLA maintenance agreements'
        ],
        idealFor: 'SaaS startups, fintech platforms, enterprise portals, and complex digital products.'
      }
    ]
  },
  {
    id: 'tender-support',
    name: 'Tender Support',
    badge: 'Commercial Procurement',
    description: 'Specialized bid writing, compliance verification, and proposal architecture for competitive UK and international public & private procurement.',
    tiers: [
      {
        id: 'basic',
        name: 'Basic',
        startingPrice: '$650',
        billingNote: 'Starting investment · Per tender opportunity',
        badge: 'Starter',
        tagline: 'Tender Readiness & Document Audit',
        summary: 'Evaluate eligibility and perform an objective audit of your existing company credentials before investing in a bid.',
        turnaround: '3–5 Business Days',
        deliverables: [
          'Opportunity suitability & scoring evaluation for 1 specific tender notice',
          'Comprehensive audit of your company’s mandatory compliance documents and policies',
          'Gap analysis identifying missing accreditations, certifications, or case studies',
          'Bid/No-Bid commercial viability recommendation matrix',
          'Document formatting, executive summary polish, and compliance checklist',
          'Actionable roadmap detailing what must be addressed before submission'
        ],
        idealFor: 'SMEs new to competitive procurement wanting to avoid wasted effort on unwinnable tenders.'
      },
      {
        id: 'standard',
        name: 'Standard',
        startingPrice: '$1,500',
        billingNote: 'Starting investment · Per tender submission',
        badge: 'Most Popular',
        popular: true,
        tagline: 'Comprehensive Tender Bid Preparation',
        summary: 'End-to-end proposal drafting and document assembly for 1 commercial or public sector tender submission.',
        turnaround: '7–10 Business Days',
        deliverables: [
          'Full response drafting for all technical, quality, and operational questions',
          'Value proposition framing aligned directly with the buyer’s evaluation scoring criteria',
          'Drafting of social value, environmental policy, and quality assurance responses',
          'Executive presentation formatting with professional typography and organograms',
          'Clarification question drafting to address ambiguous specifications with the buyer',
          'Final compliance verification against the tender specification checklist',
          'Complete submission-ready PDF package prepared before the portal deadline'
        ],
        idealFor: 'Businesses actively bidding for contracts valued between £25,000 and £250,000.'
      },
      {
        id: 'pro',
        name: 'Pro',
        startingPrice: '$3,500',
        billingNote: 'Starting investment · High-value framework/bid',
        badge: 'Enterprise Architecture',
        tagline: 'Multi-Lot Enterprise Bid & Framework Submission',
        summary: 'Comprehensive bid architecture for major government frameworks, multi-lot contracts, or high-value enterprise tenders.',
        turnaround: '2–3 Weeks',
        deliverables: [
          'Full bid preparation for major multi-lot tenders or regional government frameworks',
          'Competitive analysis, market rate benchmarking, and win-theme workshop session',
          'Complete drafting of complex technical methodologies, risk registers, and business continuity plans',
          'High-impact visual presentation deck for supplier interview, clarification, or pitch stage',
          'Comprehensive review and score simulation by senior procurement specialists',
          'Full portal upload coordination and submission audit trail',
          'Post-submission clarification question management until contract award'
        ],
        idealFor: 'Companies competing for six-figure and seven-figure public sector framework awards.'
      },
      {
        id: 'custom',
        name: 'Custom',
        startingPrice: 'Custom Quote',
        billingNote: 'Retained partnership · Monthly or enterprise',
        badge: 'Bespoke Engineering',
        tagline: 'Retained Procurement & Tender Advisory Partnership',
        summary: 'Ongoing continuous tender monitoring, bid library development, and dedicated outsourced bid management.',
        turnaround: 'Ongoing Partnership',
        deliverables: [
          'Continuous automated monitoring across UK Find a Tender, Contracts Finder & global portals',
          'Dedicated bid management team preparing recurring monthly tender submissions',
          'Creation and maintenance of a centralized corporate bid repository (boilerplates, CVs, case studies)',
          'Executive attendance and support during pre-tender market engagements and contract negotiations',
          'Custom proposal automation templates tailored to your operational team',
          'Quarterly procurement strategy reviews and tender win-rate benchmarking'
        ],
        idealFor: 'Expanding commercial contractors seeking an outsourced, high-caliber bid department.'
      }
    ]
  },
  {
    id: 'creative-media',
    name: 'Creative & AI Media',
    badge: 'Brand Production',
    description: 'High-production video editing, automated AI social content engines, and commercial marketing assets designed to command market attention.',
    tiers: [
      {
        id: 'basic',
        name: 'Basic',
        startingPrice: '$650',
        billingNote: 'Starting investment · Project based',
        badge: 'Starter',
        tagline: 'Starter Creative & Short-Form Video Kit',
        summary: 'Transform raw video or photos into high-engagement short-form videos and branded social graphics.',
        turnaround: '3–5 Business Days',
        deliverables: [
          'Up to 5 professionally edited short-form vertical videos (Reels / TikTok / YouTube Shorts)',
          'Dynamic kinetic captions, sound design, hook optimization, and color correction',
          '5 custom social media graphic templates or promotional banners (Figma / Photoshop)',
          'Formatted and optimized for Instagram, LinkedIn, YouTube, and Facebook',
          'Exported in high-resolution ProRes / 4K MP4 with royalty-free commercial audio licensing',
          '1 round of revisions included across all assets'
        ],
        idealFor: 'Founders, coaches, and brands building organic social presence or running initial paid video ads.'
      },
      {
        id: 'standard',
        name: 'Standard',
        startingPrice: '$1,500',
        billingNote: 'Starting investment · Project based',
        badge: 'Most Popular',
        popular: true,
        tagline: 'Omnichannel Content Engine & Brand Promo Video',
        summary: 'Up to 15 edited short-form videos OR a flagship 60–90 second cinematic brand video with custom motion graphics.',
        turnaround: '7–10 Business Days',
        deliverables: [
          'Up to 15 edited vertical video assets OR 1 flagship 60–90 second brand commercial',
          'AI-assisted voiceover generation or audio clean-up with motion graphics and 2D overlays',
          '15 custom branded marketing graphics / multi-slide carousel posts',
          'Content calendar structure with optimized copywriting captions and target hashtags',
          'Multi-aspect ratio formatting (9:16 vertical, 16:9 widescreen, 1:1 square)',
          'Direct delivery via organized Google Drive / Frame.io review workspace',
          '14 days post-delivery revision window'
        ],
        idealFor: 'Growing ecommerce brands, tech startups, and service firms launching marketing campaigns.'
      },
      {
        id: 'pro',
        name: 'Pro',
        startingPrice: '$3,500',
        billingNote: 'Starting investment · Full production suite',
        badge: 'Enterprise Architecture',
        tagline: 'Automated Media Engine & Cinematic Commercial Suite',
        summary: 'A full-scale content machine: 30+ dynamic video assets, automated product-to-video pipelines, and commercial ad collateral.',
        turnaround: '2–3 Weeks',
        deliverables: [
          'Month-long comprehensive media suite: 30+ short-form videos + 30 branded social graphics',
          'Automated product-to-video rendering pipeline (similar to our Shopify social automation engine)',
          '1 high-production cinematic brand/product launch video with custom 3D motion graphics',
          'Full digital ad creative package optimized for Meta Ads, TikTok Ads, and Google Display',
          'Complete brand visual identity kit (typography, color palettes, pitch deck templates)',
          'Batch production workflow establishing reusable templates for your in-house team',
          'Full commercial licensing on all music, voice, and visual assets'
        ],
        idealFor: 'Brands spending $2k+/month on advertising or requiring a high-volume omnichannel content presence.'
      },
      {
        id: 'custom',
        name: 'Custom',
        startingPrice: 'Custom Quote',
        billingNote: 'Tailored scope · Milestone or monthly',
        badge: 'Bespoke Engineering',
        tagline: 'Bespoke Media Pipelines & Automated Creative Generation',
        summary: 'Custom programmatic video generation APIs, full corporate rebranding, or multi-location commercial production.',
        turnaround: 'Defined by Project Scope',
        deliverables: [
          'Custom programmatic video generation pipelines creating thousands of personalized video assets',
          'Full enterprise corporate rebranding (logo suites, typography, design systems, guidelines)',
          'Multi-location commercial footage direction, bespoke 3D modeling, and VFX integration',
          'API integration connecting your product catalog directly to automated creative rendering',
          'Dedicated creative director and monthly creative retainer packages available',
          'Complete intellectual property transfer and enterprise master asset archiving'
        ],
        idealFor: 'Enterprises, global ecommerce catalogs, and companies requiring continuous media engines.'
      }
    ]
  }
];
