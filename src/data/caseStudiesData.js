export const caseStudies = [
  {
    slug: 'ai-voice-to-email-agent',
    title: 'Production-Grade AI Voice-to-Email Agent',
    subtitle: 'A secure AI automation system that turns voice instructions into validated, human-approved email workflows.',
    client: 'Executive Operations Client',
    industry: 'Business Automation / AI Systems',
    category: 'Custom AI Automation',
    projectType: 'Custom AI Automation',
    delivery: 'Production Deployment',
    projectCost: '$4,500 USD',
    maintenance: '$350 USD/month',
    image: '/images/case-studies/ai-voice-to-email-agent.png',
    tagline: 'A secure, fault-tolerant AI automation system turning voice instructions into validated, human-approved email workflows with deterministic state management.',
    summary: 'The client needed a reliable way to turn voice memos into structured email drafts without manually transcribing messages, searching for recipient information, preparing emails, and managing incomplete instructions. Pinnancle Group designed and engineered a production-grade automation system in n8n connecting voice input, OpenAI Whisper audio transcription, GPT-4o semantic structuring, Supabase database state management, and Telegram-based human confirmation into one controlled workflow.',
    problem: 'Voice instructions from busy leadership were unstructured and incomplete. Crucial details such as recipient email addresses or complete meeting times were frequently missing from voice memos, meaning emails could not safely be dispatched without manual review.',
    whatWasHappening: 'Unvalidated AI generation risked sending flawed or hallucinated emails to high-value external partners. Unprotected endpoints created vulnerability to unauthorized users triggering expensive AI operations and consuming API credits. There was zero persistent audit trail or deterministic lifecycle tracking, and automation failures failed silently without structured alert payloads.',
    theOpportunity: 'Build a reliable, fault-tolerant automation system that can understand a spoken instruction, identify missing information, ask for clarification in a conversational loop, create a structured email draft, wait for explicit human approval, and safely complete the workflow with complete database auditability.',
    ourApproach: 'Pinnancle Group engineered an event-driven n8n production pipeline backed by Supabase (PostgreSQL), OpenAI Whisper, GPT-4o, and the Telegram Bot API. The architecture enforces strict identity verification before processing audio, transcribes voice notes with high fidelity, uses an AI reasoning node to check parameter completeness, engages in an interactive clarification loop when details are missing, renders formatted draft previews for human-in-the-loop confirmation, dispatches via Gmail API only upon explicit authorization, and logs every transition through a deterministic finite-state machine with centralized error handling.',
    securityReliability: [
      { title: 'SECURE', desc: 'Strict Telegram sender ID authentication against Supabase authorization table prevents unauthorized API credit consumption.' },
      { title: 'VALIDATED', desc: 'AI checks for all essential fields (recipient email, intent, parameters) before allowing email generation.' },
      { title: 'AUDITABLE', desc: 'Deterministic finite-state machine in PostgreSQL logs every status transition and message payload.' },
      { title: 'HUMAN-APPROVED', desc: 'Zero autonomous unverified sending; draft preview is rendered in chat and dispatched only upon explicit human confirmation.' },
      { title: 'FAULT-TOLERANT', desc: 'Centralized error triggers intercept API timeouts or delivery failures, generating diagnostic payloads and notifying admins.' }
    ],
    coreFeatures: [
      {
        id: 'access-control',
        title: 'Strict Access Control',
        tag: 'Security & Cost Protection',
        desc: 'Every incoming message is checked against an authorized database record in Supabase before the automation continues. This prevents unauthorized users from triggering expensive AI processing and unnecessarily consuming API credits.',
        visualFlow: [
          { step: 'Incoming Message', note: 'Telegram webhook payload received' },
          { step: 'Identity Check', note: 'Query Supabase user table' },
          { step: 'Authorized?', note: 'Verify active permission record' },
          { step: 'Continue / Reject', note: 'Proceed to processing or reject instantly' }
        ]
      },
      {
        id: 'clarification-loop',
        title: 'AI Clarification Loop',
        tag: 'Completeness Verification',
        desc: 'The AI does not blindly generate an email when critical information is missing. The system evaluates whether the instruction is complete. For example, if a user says "Send an email to John telling him I will be late," the system detects that the recipient email is missing, asks "What is John\'s email address?", and resumes the workflow once provided.',
        visualFlow: [
          { step: 'Voice Input', note: '"Send an email to John telling him I will be late."' },
          { step: 'AI Analysis', note: 'Recipient: John · Intent: Late · Email: Missing' },
          { step: 'Complete?', note: 'Missing critical parameter detected' },
          { step: 'Clarification Prompt', note: '"What is John\'s email address?"' },
          { step: 'User Clarification', note: 'User provides email · Workflow resumes' },
          { step: 'Create Draft', note: 'Draft prepared once all parameters exist' }
        ]
      },
      {
        id: 'finite-state-machine',
        title: 'Deterministic Finite-State Machine',
        tag: 'State & Lifecycle Management',
        desc: 'The workflow uses a deterministic database lifecycle rather than a simple boolean flag. This provides predictable state management, comprehensive auditing, and safe handling of unfinished workflows.',
        states: [
          { name: 'RAW TRANSCRIPT', desc: 'Voice note transcribed into raw text payload' },
          { name: 'AWAITING CLARIFICATION', desc: 'Pauses execution while awaiting missing parameters' },
          { name: 'PENDING CONFIRMATION', desc: 'Draft generated and presented for human review' },
          { name: 'SENT', desc: 'User confirmed; email dispatched via Gmail API' },
          { name: 'CANCELLED', desc: 'User discarded draft or rejected execution' }
        ]
      },
      {
        id: 'human-in-the-loop',
        title: 'Human-in-the-Loop Approval',
        tag: 'Controlled Execution',
        desc: 'The AI does not independently dispatch emails based on an uncertain instruction. The workflow prepares the email draft, presents it in Telegram for confirmation, and only proceeds once the user explicitly approves it.',
        visualFlow: [
          { step: 'AI Draft Prepared', note: 'Structured subject and body generated' },
          { step: 'User Reviews Preview', note: 'Formatted card delivered to Telegram' },
          { step: 'Confirm / Cancel', note: 'Interactive button prompt' },
          { step: 'Execute Send', note: 'Dispatched via Gmail API upon approval' }
        ]
      },
      {
        id: 'centralized-error-handling',
        title: 'Centralized Error Handling',
        tag: 'Production Fault Tolerance',
        desc: 'Automation failures (API timeouts, rate limits, database disconnections, or email failures) are captured centrally. The system logs diagnostic telemetry and sends instant alerts to system administrators.',
        visualFlow: [
          { step: 'System Error', note: 'API timeout, rate limit, or network fault' },
          { step: 'Error Handler', note: 'n8n error trigger intercepts failure' },
          { step: 'Diagnostic Payload', note: 'Compiles stack trace, user ID & timestamp' },
          { step: 'Admin Notification', note: 'Immediate alert sent to operations team' }
        ]
      }
    ],
    technologiesDetailed: [
      { name: 'n8n', role: 'Workflow Orchestration', desc: 'Event-driven visual automation engine hosting webhooks, conditional routers, and execution loops.' },
      { name: 'OpenAI Whisper', role: 'Speech-to-Text Transcription', desc: 'State-of-the-art neural speech model transcribing voice memos into accurate text across varied accents.' },
      { name: 'OpenAI GPT-4o', role: 'AI Structuring & Reasoning', desc: 'Understands voice intent, detects missing parameters, formulates clarification prompts, and drafts professional emails.' },
      { name: 'Supabase', role: 'Database & Auth', desc: 'Real-time database managing user permissions, conversation context, and finite-state machine transitions.' },
      { name: 'PostgreSQL', role: 'Relational Data Store', desc: 'Deterministic, ACID-compliant storage ensuring persistent audit trails and workflow recovery.' },
      { name: 'Telegram Bot API', role: 'Voice & Interface Layer', desc: 'Encrypted mobile channel for voice memo intake and interactive inline confirmation buttons.' },
      { name: 'Gmail API', role: 'Email Dispatch Layer', desc: 'Direct enterprise email delivery with OAuth2 authentication and delivery receipt verification.' },
      { name: 'REST APIs & Webhooks', role: 'System Interconnectivity', desc: 'Low-latency event communication between cloud components with secure HMAC payloads.' }
    ],
    projectOutcomes: [
      'Reduced manual email preparation and typing overhead for busy executives',
      'Improved operational control over AI-generated client communication',
      'Prevented incomplete or erroneous requests from ever being dispatched',
      'Protected AI and API resources from unauthorized use through database authentication',
      'Created a fully auditable workflow lifecycle logged in PostgreSQL',
      'Delivered centralized failure visibility and instant admin alert telemetry',
      'Enforced mandatory human-in-the-loop approval before final email delivery',
      'Established a modular, reusable architecture for future enterprise voice automations'
    ],
    systemArchitecture: [
      { layer: 'Telegram Webhook & Access Control', desc: 'Ingests voice note and validates Telegram sender ID against authorized database records in Supabase before invoking AI nodes.' },
      { layer: 'Audio Ingestion & Whisper Transcription', desc: 'Fetches voice file via Telegram API and converts binary audio into text with high-accuracy speech-to-text.' },
      { layer: 'AI Semantic Structuring & Completeness Check', desc: 'GPT-4o parses recipient, intent, subject, body, and determines whether any essential parameters are missing.' },
      { layer: 'Interactive Clarification Loop', desc: 'If key details (such as recipient email) are absent, pauses workflow, prompts user for clarification, and resumes once provided.' },
      { layer: 'Finite-State Machine (Supabase/Postgres)', desc: 'Transitions lifecycle: RAW_TRANSCRIPT → AWAITING_CLARIFICATION → PENDING_CONFIRMATION → SENT (or CANCELLED).' },
      { layer: 'Human-in-the-Loop Confirmation & Gmail Dispatch', desc: 'Presents draft review in Telegram; dispatches via Gmail API only upon explicit user confirmation.' },
      { layer: 'Centralized Error Handling & Audit Log', desc: 'Global error triggers catch API timeouts or delivery faults, compiling diagnostic payloads and alerting admins.' }
    ],
    automationWorkflow: [
      'User records voice memo in Telegram ("Send an email to Sarah...")',
      'n8n Webhook triggers and verifies user authorization against Supabase table',
      'Telegram file gateway downloads voice file and routes to OpenAI Whisper',
      'Whisper transcribes recording into structured text transcript',
      'OpenAI GPT-4o analyzes intent, extracting recipient, subject, and body',
      'Validation Router evaluates completeness (Detects missing recipient email)',
      'Clarification Loop asks user: "What is Sarah\'s email address?"',
      'User replies with "sarah@example.com" — system enriches payload',
      'Supabase creates state row: PENDING_CONFIRMATION with draft preview',
      'Telegram bot sends formatted draft with interactive "Confirm & Send" button',
      'User clicks "Confirm" — Gmail API executes secure email delivery',
      'Database updates state to SENT with timestamp; Telegram notifies user of successful delivery'
    ],
    technologies: ['n8n', 'OpenAI Whisper', 'GPT-4o', 'Supabase', 'PostgreSQL', 'Telegram Bot API', 'Gmail API', 'REST APIs', 'Webhooks'],
    results: [
      { metric: '100%', label: 'Human-Approved Delivery Before Dispatch' },
      { metric: '0%', label: 'Incomplete or Erroneous Emails Sent' },
      { metric: '$4,500', label: 'Fixed Production Deployment Investment' },
      { metric: '$350/mo', label: 'Ongoing Cloud Monitoring & Maintenance' }
    ],
    implementationDuration: '2 Weeks + Ongoing Monthly Management',
    screenshots: [
      {
        url: '/images/case-studies/ai-voice-to-email-agent.png',
        title: 'Complete Production n8n Voice-to-Email Architecture',
        caption: 'Authentic production canvas showing Telegram Trigger, Switch authorization, Supabase state lookups, Audio check, Whisper transcription, GPT-4o model messaging, validation router, Gmail dispatch, and dual error management.'
      }
    ],
    clientFeedback: {
      quote: 'Pinnancle Group engineered an automation system that genuinely feels like a senior executive assistant. It does not blindly send half-baked emails; it asks for missing information, drafts a clean message, waits for my confirmation, and logs everything in the database. The $4,500 build fee and $350 monthly maintenance has saved me hours of daily frustration and given me complete peace of mind.',
      author: 'Operations Leadership',
      role: 'Managing Partner',
      company: 'Executive Operations Client'
    }
  },
  {
    slug: 'cleveland-real-estate-ai-ghl',
    title: 'Automated Zillow Inbound Triage & GoHighLevel CRM Sync',
    client: 'Cleveland Real Estate',
    industry: 'Real Estate & Property Management',
    category: 'AI CRM & Inbound Automation',
    image: '/images/case-studies/cleveland-make-pipeline.png',
    projectCost: '$500',
    tagline: 'Instant automated email welcome responses, regex data parsing, and autonomous GoHighLevel contact creation for rental property inquiries.',
    summary: 'Architected a sub-60-second automated Zillow rental lead capture pipeline using Make.com and GoHighLevel. Eliminated 100% of manual data entry while delivering instant property inquiry coordination for incoming tenants.',
    problem: 'Cleveland Real Estate was receiving multiple daily rental inquiries from Zillow. Every incoming prospect was sitting unattended in a Gmail inbox until staff could manually open the message, read the applicant details, copy the contact into GoHighLevel, and compose a manual reply.',
    whatWasHappening: 'During busy showing hours and evenings, rental inquiries waited hours or even days for an initial response. Prospective tenants frequently booked tours with other properties in the interim. Contact records were inconsistent in GoHighLevel, leading to lost opportunities and zero structured pipeline tracking.',
    theOpportunity: 'Implement an autonomous middleware system that detects incoming Zillow inquiries immediately as they arrive, sends an instant branded auto-reply directing the applicant to a dedicated Property Inquiry Manager intake form, and parses the applicant data directly into GoHighLevel as a new qualified opportunity with automated team alerts.',
    ourApproach: 'Pinnancle Group engineered a dual-branch Make.com automation scenario coupled with GoHighLevel workflow triggers. Incoming emails are ingested via Mailhook and split into two concurrent operations: (1) instantaneous personalized welcome email with tracking verification, and (2) regex text parsing that identifies lead contact information, verifies if the contact exists, creates or updates the GoHighLevel record, assigns tags, and moves the deal into the sales pipeline.',
    systemArchitecture: [
      { layer: 'Mailhook Ingestion Layer', desc: 'Real-time Make.com webhook listening continuously for incoming Zillow rental inquiry emails.' },
      { layer: 'Dual Router Logic', desc: 'Simultaneous execution path separating instant applicant communication from CRM database synchronization.' },
      { layer: 'Regex Text Parser Core', desc: 'Pattern-matching algorithms extracting applicant full name, email, phone number, and rental address.' },
      { layer: 'GoHighLevel CRM Sync', desc: 'Automated contact search & creation, opportunity pipeline stage assignment, and internal SMS/email notification.' }
    ],
    automationWorkflow: [
      'Tenant submits inquiry on Zillow property listing',
      'Make.com Mailhook triggers instantly (< 1 second)',
      'Router Branch 1 queries data store and sends automated Gmail welcome with property tour intake link',
      'Router Branch 2 parses contact fields and validates phone/email patterns',
      'Contact is created/updated in GoHighLevel with "Zillow Lead" tag',
      'Deal opportunity is generated and internal showing team receives instant notification'
    ],
    technologies: ['Make.com', 'GoHighLevel (GHL)', 'Gmail API', 'Mailhook Middleware', 'Regex Text Parser', 'Custom Webhooks'],
    results: [
      { metric: '< 60s', label: 'Average Inbound Response Time' },
      { metric: '100%', label: 'Automated CRM Contact Creation' },
      { metric: '$500', label: 'Total Client Implementation Investment' }
    ],
    implementationDuration: '1 Week',
    screenshots: [
      {
        url: '/images/case-studies/cleveland-make-pipeline.png',
        title: 'Complete Dual-Branch Make.com Scenario',
        caption: 'Production Make.com architecture displaying real-time Mailhook trigger, router logic, automated Gmail delivery, and GoHighLevel CRM integration.'
      },
      {
        url: '/images/case-studies/cleveland-ghl-workflow.png',
        title: 'GoHighLevel (GHL) Automation Workflow',
        caption: 'Active GHL trigger: Form submitted -> Add Tag -> Create opportunity -> Internal team notification.'
      },
      {
        url: '/images/case-studies/cleveland-lead-widget.png',
        title: 'Property Inquiry Manager Live Intake Widget',
        caption: 'Client-facing responsive booking and details intake form deployed at link.apisystem.tech with SMS/rental consent verification.'
      },
      {
        url: '/images/case-studies/cleveland-zillow-reply.png',
        title: 'Zillow Auto-Reply & Data Store Engine',
        caption: 'Automated email responder scenario searching past records, preventing duplicate replies, and tracking client delivery.'
      }
    ],
    clientFeedback: {
      quote: 'Pinnancle Group set up our Zillow automation and GoHighLevel sync seamlessly for $500. Leads no longer sit in our inbox overnight—every single renter gets an immediate reply and shows up in our CRM ready for showings.',
      author: 'Marcus Vance',
      role: 'Principal Broker & Property Manager',
      company: 'Cleveland Real Estate'
    }
  },
  {
    slug: 'brendc-lifestyle-ai-qualification',
    title: 'AI Lead Qualification, Appointment Setting & CRM Nurture Engine',
    client: 'Brendc Lifestyle LLC',
    industry: 'High-Ticket Lifestyle Services & Business Consulting',
    category: 'AI Lead Qualification & Workflow Automation',
    image: '/images/case-studies/brendc-n8n-workflow.png',
    projectCost: '$2,000 Setup + $200/mo Retainer',
    tagline: 'Algorithmic company size & budget evaluation, instant Slack sales alerts, Airtable CRM synchronization, and multi-cadence automated email triage.',
    summary: 'Engineered an end-to-end appointment setting and AI lead qualification engine using n8n, Airtable CRM, Slack API, and Gmail. Automatically evaluates prospect budgets and company size, alerts sales reps within 30 seconds for qualified deals, logs $262,500+ in pipeline value, and delivers respectful automated nurture resources to below-threshold inquiries.',
    problem: 'Brendc Lifestyle LLC was experiencing rapid lead generation growth from marketing campaigns, but senior sales consultants were overwhelmed spending 15–20 hours every week on discovery calls with unqualified prospects who had minimal budgets ($500–$2,500) and failed minimum company size criteria.',
    whatWasHappening: 'High-ticket prospects with budgets between $10,000 and $40,000 were sitting in inbox queues for hours while sales reps conducted calls with leads who could not afford services. Inbound leads were scattered across disparate form submissions, there was zero centralized pipeline tracking, and disqualified applicants were either ignored or awkwardly turned away, damaging client goodwill.',
    theOpportunity: 'Build an autonomous, event-driven qualification gateway that intercepts every appointment and form submission in real time. Qualified leads exceeding company size and budget minimums ($5,000+) are instantly synchronized into a structured Airtable CRM, pushed to the sales reps’ Slack channel with high-priority notifications, and queued for calendar confirmation and attendance reminders. Unqualified leads are smoothly diverted into a graceful educational email nurture sequence.',
    ourApproach: 'Pinnancle Group engineered an orchestrated event pipeline in n8n featuring a custom webhook listener, an intelligent conditional qualification router ("Route by Size & Budget"), an Airtable upsert CRM database, a Slack bot dispatching structured lead alerts to the #leads channel, and a multi-branch Gmail communication cadence with automated wait timers to ensure 0% rep burnout and maximum show-up rates.',
    systemArchitecture: [
      { layer: 'Webhook Ingestion Gateway', desc: 'Real-time n8n HTTP endpoint receiving inbound appointment and lead payloads instantly (< 500ms).' },
      { layer: 'Conditional Qualification Core', desc: 'Algorithmic logic evaluating company size and budget thresholds to bifurcate qualified vs. unqualified leads.' },
      { layer: 'Airtable CRM Sync Engine', desc: 'Centralized relational database tracking budgets ($2,500 to $40,000+), requested dates, and lifecycle statuses across $262,500+ in pipeline.' },
      { layer: 'Real-Time Slack Alert Hub', desc: 'Interactive chat webhook notifying the sales team on the #leads channel with prospect name, email, company size, and budget.' },
      { layer: 'Dual-Track Email Orchestration', desc: 'Automated calendar confirmation & pre-call attendance reminders for qualified leads, and self-serve educational resource guides for unqualified leads.' }
    ],
    automationWorkflow: [
      'Prospect submits consultation / appointment booking form',
      'n8n Webhook Trigger ingests lead payload in real time (< 500ms)',
      'Qualification Router tests company size and minimum budget thresholds ($5k+)',
      'Qualified Branch: Upserts record to Airtable CRM with status "Qualified"',
      'Instant alert posted to #leads Slack channel for immediate rep engagement',
      'Transactional confirmation email sent with automated pre-call reminder sequence',
      'Unqualified Branch: Upserts record to Airtable and sends automated value-add nurture email'
    ],
    technologies: ['n8n Workflow Automation', 'Airtable CRM', 'Slack Webhooks API', 'Gmail API', 'JSON Webhooks', 'Wait Timers & Schedulers'],
    results: [
      { metric: '0 Hours', label: 'Rep Time Wasted on Unqualified Calls' },
      { metric: '$262.5k', label: 'Total Pipeline Value Systematically Processed' },
      { metric: '< 30s', label: 'Instant Slack Notification to Sales Team' },
      { metric: '$2,000', label: 'Setup Fee ($200/mo Management Retainer)' }
    ],
    implementationDuration: '2 Weeks + Ongoing Monthly Management',
    screenshots: [
      {
        url: '/images/case-studies/brendc-n8n-workflow.png',
        title: 'Complete n8n Qualification & Appointment Architecture',
        caption: 'Full production workflow featuring Webhook trigger, Size & Budget router, Airtable CRM nodes, Slack team alerts, and dual email tracks.'
      },
      {
        url: '/images/case-studies/brendc-airtable-crm.png',
        title: 'Airtable Lead Qualification CRM ($262,500+ Pipeline)',
        caption: 'Centralized database tracking 18+ real-time records totaling $262,500 in pipeline value, segmented by First Name, Budget, Requested Date, and Status.'
      },
      {
        url: '/images/case-studies/brendc-slack-alert.png',
        title: 'Real-Time Sales Team Alert in Slack (#leads)',
        caption: 'Live production Slack notification: "🚨 New Qualified Lead Received! Kindly attends to it." with prospect details, company size (75), and budget ($5,000).'
      },
      {
        url: '/images/case-studies/brendc-nurture-email.png',
        title: 'Polite Automated Nurture & Disqualification Email',
        caption: 'Automated transactional email sent via Gmail to sub-threshold prospects sharing free guides and documentation while preserving brand prestige.'
      },
      {
        url: '/images/case-studies/brendc-workflow-detail.png',
        title: 'Execution Routing & Attendance Wait Timers',
        caption: 'Detailed node configuration for reminder timing, attendance email dispatch, and CRM upsert synchronization.'
      }
    ],
    clientFeedback: {
      quote: 'Before Pinnancle Group stepped in, our calendar was clogged with inquiries that simply were not ready for our high-ticket pricing. The n8n system and Airtable CRM filtered everything automatically. Our closers now only talk to serious clients with real budgets, and our team gets notified on Slack in seconds. The $2,000 setup plus $200 monthly management is the best ROI we have ever had.',
      author: 'Brendan Cole',
      role: 'Managing Director & Founder',
      company: 'Brendc Lifestyle LLC'
    }
  },
  {
    slug: 'tech-agency-ai-lead-triage',
    title: 'AI Inbound Lead Triage, Airtable CRM Sync & Dual Slack Routing',
    client: 'AeroTech Digital Solutions',
    industry: 'Technology & Digital Agency Services',
    category: 'AI Triage & Business Automation',
    image: '/images/case-studies/tech-agency-n8n-pipeline.png',
    projectCost: '$1,500 Implementation + Ongoing Monitoring',
    tagline: 'Multi-channel form & Gmail ingestion, Airtable deduplication, LLM intent classification, and instant dual-channel Slack routing for engineering and sales teams.',
    summary: 'Engineered an autonomous multi-channel inbound intelligence pipeline for an international tech agency using n8n, OpenAI LLM, Airtable CRM, and Slack API. Eliminates inbox clutter and spam, classifies client requests into technical support vs. commercial sales opportunities, auto-upserts records into Airtable, and dispatches real-time alerts to the appropriate engineering or sales Slack channel within 5 seconds.',
    problem: 'AeroTech Digital Solutions was receiving dozens of daily inbound inquiries through website project forms and their primary Gmail inbox. Without automated routing, all messages were dumped into a crowded inbox where support tickets, RFP pitches, technical bugs, and spam were mixed together.',
    whatWasHappening: 'Senior developers and sales account executives spent hours every day manually sifting through the inbox. Urgent technical support inquiries from existing clients were often delayed because they were buried under generic marketing emails. High-value sales leads waited 6–12 hours for an initial outreach, and customer details were inconsistently hand-copied into Airtable, resulting in lost records and zero structured visibility.',
    theOpportunity: 'Build an autonomous, event-driven middleware system in n8n that listens to both web forms and incoming emails simultaneously. The system uses an AI model to read message intent, cross-references Airtable to check client history, instantly routes technical queries to the engineering team on Slack, and creates/updates CRM records while alerting the sales department on Slack with full lead dossiers.',
    ourApproach: 'Pinnancle Group engineered an event-driven n8n pipeline combining dual triggers (Form submission & Gmail IMAP), standardized JSON normalization, an Airtable search node for account verification, an AI LLM node with JavaScript parsing for sentiment and intent classification, a rules-based Switch router, automated Airtable CRM record upserts, and instant Slack notifications customized for each department.',
    systemArchitecture: [
      { layer: 'Multi-Channel Ingestion Gateway', desc: 'Real-time n8n form webhook and Gmail trigger listening concurrently for inbound client communications (< 1s).' },
      { layer: 'Field Normalization Layer', desc: 'Standardizes disparate web form fields and email MIME payloads into a uniform JSON data structure.' },
      { layer: 'Airtable Deduplication Search', desc: 'Queries agency database by email address to retrieve account history, existing tickets, and prevent duplicate CRM records.' },
      { layer: 'AI Intent & Semantic Classifier', desc: 'OpenAI/Anthropic LLM agent analyzing request context, separating technical support from commercial sales opportunities, and identifying spam.' },
      { layer: 'Custom JavaScript Parsing Engine', desc: 'Validates AI outputs, extracts structured tags, and conditions payload for the downstream routing matrix.' },
      { layer: 'Dual Slack & CRM Dispatch', desc: 'Routes technical inquiries to #technical-team on Slack and creates/updates Airtable CRM records with immediate alerts to #sales-channel on Slack.' }
    ],
    automationWorkflow: [
      'Client submits inquiry on website form or sends an email to agency inbox',
      'n8n Webhook or Gmail listener triggers instantaneously (< 1 second)',
      'Field normalizer unifies sender name, email, subject line, and request body',
      'Airtable Search node checks database to identify if sender is an existing client',
      'AI Model (LLM) evaluates message text, classifying intent into Technical, Sales, or Spam',
      'JavaScript code node validates schema and passes clean routing variables to the Switch node',
      'Technical Question Branch: Fires real-time alert to engineering workspace in Slack #technical-team',
      'Sales Lead Branch: Upserts deal into Airtable CRM and broadcasts rich prospect card to Slack #sales-channel'
    ],
    technologies: ['n8n Workflow Automation', 'Airtable CRM', 'OpenAI / Anthropic LLM', 'Slack API (Multi-Channel Webhooks)', 'Gmail API', 'JavaScript Node Scripting', 'Custom Webhooks'],
    results: [
      { metric: '< 5s', label: 'Inbound Triage & Dispatch Speed (Down from 6–12 Hours)' },
      { metric: '100%', label: 'Automated Inbound Categorization & Airtable Sync' },
      { metric: '0 Min', label: 'Team Hours Wasted Filtering Inboxes & Hand-Typing CRM Data' },
      { metric: '100%', label: 'Critical Technical Issues Routed Directly to Engineers' }
    ],
    implementationDuration: '10 Days + Ongoing Monitoring',
    screenshots: [
      {
        url: '/images/case-studies/tech-agency-n8n-pipeline.png',
        title: 'Complete n8n AI Inbound Triage & Dual Slack Routing Scenario',
        caption: 'Production n8n architecture displaying Form and Gmail triggers, Airtable deduplication search, AI intent classification model, JavaScript parsing, and automated dual Slack routing to technical and sales channels.'
      }
    ],
    clientFeedback: {
      quote: 'Before Pinnancle Group implemented this n8n pipeline, our team was constantly losing track of emails. Technical support requests were getting forwarded to sales, and high-ticket leads were sitting in our inbox for half a day. Now, our engineering team gets pinged on Slack the second a technical issue comes in, our sales team gets qualified lead dossiers in their dedicated channel, and everything is automatically recorded in Airtable with zero manual work. It transformed our operational velocity.',
      author: 'Derrick Holbrook',
      role: 'Operations Director',
      company: 'AeroTech Digital Solutions'
    }
  },
  {
    slug: 'apex-cross-border-tenders',
    title: 'Cross-Border Bid & Procurement Automation Engine',
    client: 'Apex Infrastructure Group',
    industry: 'Infrastructure & Commercial Tenders',
    category: 'Business Workflow Automation',
    image: '/images/apex-case-study.jpg',
    tagline: 'Transforming 140-page technical tender assemblies into an automated, compliant submission engine.',
    summary: 'Engineered an automated tender evaluation and document assembly system that reduced proposal turnaround time by 72% for cross-border infrastructure bids.',
    problem: 'Apex Infrastructure was competing for complex procurement tenders across West Africa and the United Kingdom. Assembling multi-hundred-page bids required coordinating 12 team members across disparate locations, resulting in rushed deadlines, missed compliance clauses, and excessive overtime.',
    whatWasHappening: 'Tender notices were downloaded manually. Senior engineers spent 40+ hours per bid extracting compliance criteria, cross-referencing past project certificates, and verifying insurance declarations. Minor formatting oversights risked tender disqualification.',
    theOpportunity: 'By engineering an automated pipeline that ingests tender specifications, parses mandatory criteria, and pulls validated company credentials from an organized repository, Apex could bid on 3x more projects with higher accuracy.',
    ourApproach: 'Pinnancle Group architected a structured document intelligence workflow. We connected an ingestion endpoint to a criteria-matching engine that maps RFP requirements against an authenticated compliance database, generating first-draft tender volumes in hours.',
    systemArchitecture: [
      { layer: 'Ingestion Layer', desc: 'Secure upload portal parsing PDF/DOCX tenders, extracting tables, schedules, and evaluation scorecards.' },
      { layer: 'Intelligence Core', desc: 'Rule-based matching algorithm cross-referencing past performance, insurance limits, and engineering CVs.' },
      { layer: 'Assembly Pipeline', desc: 'Templated automated document compiler generating brand-compliant appendices and declaration forms.' },
      { layer: 'Human Verification Gate', desc: 'Executive sign-off dashboard highlighting compliance scores and missing client attachments.' }
    ],
    automationWorkflow: [
      'Tender document ingested via webhook',
      'Extraction of compliance criteria and deadline dates',
      'Automated population of boilerplate technical credentials',
      'Team task allocation in project management system',
      'Final consolidated audit bundle delivered for partner sign-off'
    ],
    technologies: ['Make', 'n8n', 'Airtable', 'OpenAI API', 'Custom Python Microservice', 'Google Workspace APIs'],
    results: [
      { metric: '72%', label: 'Reduction in Bid Preparation Time' },
      { metric: '£2.4M+', label: 'New Tender Value Secured in 6 Months' },
      { metric: '100%', label: 'Compliance Adherence Across Submissions' }
    ],
    implementationDuration: '6 Weeks',
    clientFeedback: {
      quote: 'Pinnancle Group did not just give us software; they completely rebuilt how our engineering team approaches tender submissions. The time savings are tremendous, but the real win is the confidence we now have in our compliance.',
      author: 'Marcus Adebayo',
      role: 'Head of Commercial Strategy',
      company: 'Apex Infrastructure Group'
    }
  },
  {
    slug: 'vanguard-gohighlevel-crm',
    title: 'Autonomous Multi-Location CRM & Lead Routing Infrastructure',
    client: 'Vanguard Property Portfolio',
    industry: 'Real Estate & Asset Management',
    category: 'GoHighLevel Systems',
    image: '/images/vanguard-case-study.jpg',
    tagline: 'Sub-30-second inbound response times across UK residential and Nigerian diaspora investment inquiries.',
    summary: 'Redesigned GoHighLevel CRM infrastructure connecting digital advertising, WhatsApp, and international sales teams into an automated pipeline.',
    problem: 'Vanguard was receiving high inbound inquiry volumes from UK and diaspora buyers interested in high-yield properties. Because inquiries came in at all hours across different time zones, prospects waited an average of 4.5 hours for an initial response, leading to high drop-off.',
    whatWasHappening: 'Leads from Facebook ads, Google search, and property portals were landing in generic inbox spreadsheets. Sales reps were cherry-picking leads, leaving 40% of inquiries completely untouched. No structured follow-up occurred after first contact.',
    theOpportunity: 'Implement an instant response infrastructure capable of engaging leads via WhatsApp and SMS within 30 seconds, qualifying purchasing budgets, and immediately booking viewing calls onto senior investment consultants calendars.',
    ourApproach: 'We rebuilt their entire GoHighLevel architecture from scratch. We created segmented pipelines for domestic tenants versus diaspora investors, deployed conversational AI bots for pre-qualification, and linked automated WhatsApp voice notes with round-robin calendar assignment.',
    systemArchitecture: [
      { layer: 'Lead Capture Hub', desc: 'Universal webhook listener normalizing data from Meta Ads, Google Ads, and property portals.' },
      { layer: 'Qualification Logic', desc: 'Conversational messaging triage assessing investment readiness, timeline, and financing status.' },
      { layer: 'Distribution Engine', desc: 'Dynamic round-robin calendar routing based on agent availability and property specialization.' },
      { layer: 'Reactivation Suite', desc: 'Automated 90-day educational nurture sequence targeting non-booking prospects.' }
    ],
    automationWorkflow: [
      'Lead submits inquiry on property portal or landing page',
      'Instant SMS/WhatsApp message sent within 18 seconds',
      'Interactive qualification flow confirms budget and timeline',
      'Calendar booking link delivered with automated calendar invite',
      'Automated SMS reminders sent 24h and 1h prior to viewing'
    ],
    technologies: ['GoHighLevel', 'Twilio', 'WhatsApp Business API', 'Make', 'Zapier', 'Stripe'],
    results: [
      { metric: '18s', label: 'Average Inbound Lead Response Time' },
      { metric: '+64%', label: 'Increase in Scheduled Consultation Calls' },
      { metric: '0', label: 'Uncontacted Inquiries Since Deployment' }
    ],
    implementationDuration: '4 Weeks',
    clientFeedback: {
      quote: 'Before Pinnancle Group stepped in, our sales reps were overwhelmed and leads were slipping away. Now every single inquiry is engaged in under twenty seconds. Our booked consultation rate has more than doubled.',
      author: 'Eleanor Sterling',
      role: 'Managing Director',
      company: 'Vanguard Property Portfolio'
    }
  },
  {
    slug: 'meridian-receptionist-ai',
    title: '24/7 AI Clinic Receptionist & Missed-Call Recovery',
    client: 'Meridian Private Dental & Aesthetics',
    industry: 'Healthcare & Private Clinics',
    category: 'AI Customer Communication',
    image: '/images/meridian-case-study.jpg',
    tagline: 'Capturing after-hours high-value patient inquiries and eliminating front-desk telephone bottlenecks.',
    summary: 'Deployed an intelligent AI receptionist and missed-call recovery engine, restoring £38,000+ in previously lost monthly cosmetic dentistry bookings.',
    problem: 'During busy clinic hours, the front desk was occupied checking in patients and taking payments, leading to over 35 missed phone calls every day. After-hours callers were met with a generic voicemail that rarely converted.',
    whatWasHappening: 'Patients inquiring about £3,000+ Invisalign and composite bonding treatments hung up when sent to voicemail and called competitor clinics. The clinic was spending £5,000/month on Google Ads only to miss the resulting inbound phone calls.',
    theOpportunity: 'Equip the clinic with an instant missed-call text-back system and an intelligent 24/7 AI chat receptionist that can answer treatment questions, quote pricing guidelines, and collect consultation deposits.',
    ourApproach: 'We configured a dual-layer communication system: an AI voice and SMS responder that triggers within 4 seconds of any dropped call, paired with an intelligent on-site web booking assistant synchronized directly to the clinic management calendar.',
    systemArchitecture: [
      { layer: 'Telephony Webhook', desc: 'Detects unanswered or busy phone lines in real-time through VoIP integration.' },
      { layer: 'Instant Recovery SMS', desc: 'Dispatches polite greeting offering instant interactive booking via text.' },
      { layer: 'Clinical Knowledge Core', desc: 'Answers pre-treatment questions, contraindications, and finance options.' },
      { layer: 'Deposit Collection', desc: 'Secures appointment slot with non-refundable Stripe deposit link.' }
    ],
    automationWorkflow: [
      'Clinic phone rings; staff unable to answer within 4 rings',
      'Telephony webhook detects missed call event',
      'AI SMS sent to caller: "Sorry we missed you! How can we assist today?"',
      'Caller replies with treatment inquiry',
      'AI provides pricing overview and offers consultation times',
      'Patient selects slot and pays deposit; booking confirmed on clinic schedule'
    ],
    technologies: ['Twilio Voice/SMS', 'GoHighLevel', 'Stripe', 'OpenAI API', 'Custom Webhooks'],
    results: [
      { metric: '82%', label: 'Missed-Call Recovery Rate' },
      { metric: '£38K', label: 'Monthly Recovered Treatment Bookings' },
      { metric: '4.9/5', label: 'Patient Booking Satisfaction Rating' }
    ],
    implementationDuration: '3 Weeks',
    clientFeedback: {
      quote: 'The missed-call text-back alone paid for the entire system within forty-eight hours. Our front desk is calmer, and we are booking treatments on Sunday nights while the clinic is closed.',
      author: 'Dr. Tariq Al-Mansoor',
      role: 'Clinical Director',
      company: 'Meridian Private Dental'
    }
  },
  {
    slug: 'solis-shopify-workflow',
    title: 'Automated Multi-Currency Ecommerce Operations & WISMO Resolution',
    client: 'Solis Apparel International',
    industry: 'Ecommerce & Retail',
    category: 'Shopify Ecommerce',
    image: '/images/website-design-showcase.jpg',
    tagline: 'Harmonizing multi-channel inventory, customer returns, and order status communications.',
    summary: 'Built automated fulfillment and customer service operations for an international apparel brand, resolving 68% of support inquiries without human intervention.',
    problem: 'Solis was experiencing rapid growth across the UK, Europe, and Nigeria. However, their 4-person customer support team was suffocating under 500+ daily emails asking "Where is my order?" and processing manual size exchange requests.',
    whatWasHappening: 'Support response times stretched to 48 hours. Negative reviews accumulated regarding delayed exchange processing. Inventory data between the London warehouse and Shopify stores had regular discrepancies.',
    theOpportunity: 'Implement self-service AI customer order tracking and automated exchange workflows, freeing support agents to handle complex customer inquiries.',
    ourApproach: 'We integrated Shopify with shipping carriers via automated webhooks, built an interactive self-service order lookup widget, and constructed an automated returns portal that generates prepaid return labels conditionally based on order value.',
    systemArchitecture: [
      { layer: 'Carrier Webhook Aggregator', desc: 'Consolidates live tracking updates from Royal Mail, DHL, and local courier networks.' },
      { layer: 'WISMO Resolution Bot', desc: 'Instant order verification via email or order number with real-time delivery countdown.' },
      { layer: 'Automated Returns Portal', desc: 'Validates return eligibility, manages instant store credit exchanges, and updates stock.' },
      { layer: 'Inventory Sync Pipe', desc: 'Bi-directional stock reconciliation between warehouse management systems and Shopify.' }
    ],
    automationWorkflow: [
      'Customer clicks "Track Order" on store',
      'Customer enters order number and email',
      'System queries live carrier API and returns visual tracking timeline',
      'If customer requests exchange, automated portal issues printable return QR code',
      'Warehouse scan triggers immediate dispatch of replacement item'
    ],
    technologies: ['Shopify Plus', 'Klaviyo', 'Make', 'ShipStation API', 'Zendesk', 'Stripe'],
    results: [
      { metric: '68%', label: 'Reduction in Routine Support Tickets' },
      { metric: '2m', label: 'Average Exchange Processing Speed' },
      { metric: '+31%', label: 'Increase in Repeat Customer Lifetime Value' }
    ],
    implementationDuration: '5 Weeks',
    clientFeedback: {
      quote: 'Our team went from drowning in order status tickets to having time to focus on influencer partnerships and product drops. Pinnancle Group understood the ecommerce reality down to the wire.',
      author: 'Kemi Balogun',
      role: 'Chief Operating Officer',
      company: 'Solis Apparel'
    }
  },
  {
    slug: 'omni-video-content-pipeline',
    title: 'Autonomous Executive Video Repurposing & Multi-Channel Distribution',
    client: 'Catalyst Venture Capital',
    industry: 'Financial Advisory & Venture Capital',
    category: 'Content Automation',
    image: '/images/ai-agent-interface.jpg',
    tagline: 'Transforming 45-minute executive interviews into 20+ polished multimedia assets automatically.',
    summary: 'Engineered an AI-assisted video production and content pipeline that increased brand impression volume by 420% while saving 30+ production hours per episode.',
    problem: 'The partners at Catalyst were producing high-caliber weekly video podcasts with startup founders, but had no bandwidth to slice, caption, format, and distribute the insights across social platforms consistently.',
    whatWasHappening: 'Episodes were uploaded as raw audio to Spotify and a static YouTube link. Incredible insights remained buried in 50-minute recordings. A marketing assistant spent 4 full days editing 3 short clips with varying visual quality.',
    theOpportunity: 'Build a semi-automated media pipeline that ingests long-form video, transcribes dialogue, identifies the top 5 high-impact soundbites using AI analysis, applies dynamic typography and branding, and queues them for executive approval.',
    ourApproach: 'We constructed an end-to-end media automation connecting cloud storage, transcription APIs, video rendering templates, and social publishing queues—keeping human review to a single 10-minute check before publishing.',
    systemArchitecture: [
      { layer: 'Media Ingestion', desc: 'Dropbox/Google Drive watch folder triggering webhook upon full-resolution video upload.' },
      { layer: 'Transcript & Hook Extraction', desc: 'AI analyzes speech density, emotional cadence, and key quotes to find the sharpest moments.' },
      { layer: 'Dynamic Motion Engine', desc: 'Renders vertical 9:16 video clips with auto-centered speaker tracking, animated captions, and sound design.' },
      { layer: 'Omnichannel Publishing Queue', desc: 'Stages finished clips, carousel slides, and LinkedIn editorial posts for one-click approval.' }
    ],
    automationWorkflow: [
      'Raw episode footage uploaded to project folder',
      'System transcribes speech and generates chapter markers',
      'AI selects top 5 soundbites and generates engaging captions',
      'Automated video engine crops, animates subtitles, and attaches brand intro/outro',
      'Partner receives mobile notification with preview links to approve with one tap',
      'Automated distribution across LinkedIn, YouTube Shorts, and Instagram'
    ],
    technologies: ['Whisper API', 'OpenAI API', 'Python Video Pipeline', 'Airtable', 'Make', 'Buffer API'],
    results: [
      { metric: '420%', label: 'Growth in Monthly Social Impressions' },
      { metric: '30h', label: 'Production Hours Saved Per Week' },
      { metric: '5x', label: 'Total Content Output Across Channels' }
    ],
    implementationDuration: '4 Weeks',
    clientFeedback: {
      quote: 'Pinnancle Group gave our firm the content output of a ten-person media team. The quality is pristine, the brand voice is exact, and our partners only spend five minutes reviewing clips each week.',
      author: 'David Thorne',
      role: 'General Partner',
      company: 'Catalyst Venture Capital'
    }
  },
  {
    slug: 'zenith-financial-data-sync',
    title: 'Automated B2B Financial Data Sync & Credit Risk Scoring',
    client: 'Zenith Trade & Credit Solutions',
    industry: 'Financial Services & Trade Finance',
    category: 'API Integration',
    image: '/images/business-automation-workflow.jpg',
    tagline: 'Bridging legacy credit databases with real-time bank feeds for instant trade finance decisions.',
    summary: 'Constructed resilient API middleware connecting accounting software, national registries, and credit scoring algorithms to reduce underwriting delays from 9 days to 45 minutes.',
    problem: 'Zenith provides commercial financing to import-export businesses. Underwriters were manually downloading corporate filings, bank statements, and tax receipts from 4 different portals to calculate creditworthiness.',
    whatWasHappening: 'Deal cycle times took over a week. Prospective borrowers frequently abandoned their applications in favor of lenders with faster approvals, despite Zenith offering better interest rates.',
    theOpportunity: 'Create an automated data pipeline that connects to open banking and registry APIs, cleans and reconciles balance sheet numbers, and generates an automated risk scorecard for underwriter sign-off.',
    ourApproach: 'We designed a secure API integration middleware with strict audit logging, bank-grade encryption, and automatic balance-sheet reconciliation algorithms that parse financial statements into standard risk ratios.',
    systemArchitecture: [
      { layer: 'Applicant Intake Portal', desc: 'Direct Open Banking connection and encrypted document upload.' },
      { layer: 'Financial Statement Parser', desc: 'Machine learning OCR extracting balance sheets, P&L statements, and cash flows.' },
      { layer: 'Risk Computation Engine', desc: 'Calculates debt service coverage ratios, liquidity metrics, and credit risk probability.' },
      { layer: 'Underwriter Dossier', desc: 'Automated executive summary with flagged anomalies and recommended credit limits.' }
    ],
    automationWorkflow: [
      'Borrower submits financing application and links bank feed',
      'Automated API fetch pulls corporate registry records and tax filings',
      'System calculates key financial ratios and cross-checks defaults',
      'Risk scoring algorithm assigns tier and provisional terms',
      'Underwriter receives completed risk dossier for immediate final decision'
    ],
    technologies: ['Node.js Microservices', 'Open Banking APIs', 'PostgreSQL', 'AWS Lambda', 'Webhooks', 'Docker'],
    results: [
      { metric: '45m', label: 'Underwriting Time (Down from 9 Days)' },
      { metric: '£4.8M', label: 'Financing Approved in First Quarter' },
      { metric: '0%', label: 'Manual Calculation Errors' }
    ],
    implementationDuration: '8 Weeks',
    clientFeedback: {
      quote: 'The system built by Pinnancle Group allowed us to quadruple our deal capacity without adding a single administrative underwriter. It is the most impactful technical investment we have ever made.',
      author: 'Adebisi Adeleke',
      role: 'Chief Risk Officer',
      company: 'Zenith Trade Solutions'
    }
  }
];

export const getCaseStudyBySlug = (slug) => {
  if (slug === 'ai-voice-to-email' || slug === 'voice-to-email' || slug === 'voice-agent' || slug === 'ai-voice-email') {
    return caseStudies.find(study => study.slug === 'ai-voice-to-email-agent');
  }
  if (slug === 'cleveland-real-estate' || slug === 'cleveland') {
    return caseStudies.find(study => study.slug === 'cleveland-real-estate-ai-ghl');
  }
  if (slug === 'brendc-lifestyle' || slug === 'brendc' || slug === 'brendc-ai-qualification') {
    return caseStudies.find(study => study.slug === 'brendc-lifestyle-ai-qualification');
  }
  if (slug === 'tech-agency' || slug === 'tech-agency-automation' || slug === 'tech-agency-triage') {
    return caseStudies.find(study => study.slug === 'tech-agency-ai-lead-triage');
  }
  return caseStudies.find(study => study.slug === slug);
};
