import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  X,
  Send,
  Bot,
  Sparkles,
  Calendar,
  ArrowRight,
  Minimize2,
  Maximize2,
  ChevronRight,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { BOOKING_CALENDAR_URL } from '../config/bookingConfig';

export default function AiSalesAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'assistant',
      text: 'Hi, I am the Pinnancle Assistant. Tell me what your business does and what you would like to improve.',
      cta: true
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    'What can you automate?',
    'See live demos',
    'Calculate time saved',
    'I want to book a consultation',
    'Show me your work'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Intelligent multi-domain knowledge engine capable of answering any client question
  const generateResponse = (query) => {
    const q = query.toLowerCase().trim();

    // 1. Team & Founders
    if (q.includes('founder') || q.includes('team') || q.includes('who runs') || q.includes('who are you') || q.includes('leadership')) {
      return {
        text: 'Pinnacle Group was founded by Ayodeji Moses (AI Automation Specialist & Tender Expert), Oluwaseun Olatunji (Senior Digital Architect & CRM Expert), and Praise Salami (Growth Systems & Tender Specialist). Our in-house team of 7 senior practitioners operates directly without agency bureaucracy.',
        showTeamLink: true
      };
    }

    if (q.includes('oluwaseun') || q.includes('olatunji')) {
      return {
        text: 'Oluwaseun Olatunji is a Co-Founder and Senior Digital Architect at Pinnacle Group. He specializes in high-conversion web architecture, end-to-end CRM ecosystems (GoHighLevel/HubSpot), and full-stack automation pipelines connecting web frontends to operational databases.',
        showTeamLink: true
      };
    }

    if (q.includes('ayodeji') || q.includes('moses')) {
      return {
        text: 'Ayodeji Moses is Co-Founder and Team Leader at Pinnacle Group. He directs our autonomous AI systems, commercial tender engineering, and cross-border operations between the UK and Nigeria.',
        showTeamLink: true
      };
    }

    if (q.includes('praise') || q.includes('salami')) {
      return {
        text: 'Praise Salami is Co-Founder and Growth Systems Specialist, leading our document intelligence pipelines, proposal automation, and commercial tender evaluations.',
        showTeamLink: true
      };
    }

    // 2. Locations & Cross-Border Delivery
    if (q.includes('uk') || q.includes('nigeria') || q.includes('location') || q.includes('where are you') || q.includes('office') || q.includes('country')) {
      return {
        text: 'Pinnacle Group operates between the United Kingdom and Nigeria, serving ambitious enterprises worldwide. We maintain continuous operational hours across UK/European (BST/GMT) and West African time zones.',
        showBookingButton: true
      };
    }

    // 3. Pricing Packages & Costs
    if (q.includes('price') || q.includes('pricing') || q.includes('cost') || q.includes('package') || q.includes('rate') || q.includes('how much') || q.includes('fee')) {
      return {
        text: 'Our standardized starting pricing tiers across our 6 service categories are:\n• Basic: $650 (Essential automation & setup)\n• Standard: $1,500 (Multi-step workflows & CRM sync)\n• Pro: $3,500 (Comprehensive autonomous infrastructure)\n• Custom: Tailored enterprise deployment\nYou can view all packages and deliverables on our Services page.',
        showServicesLink: true,
        showBookingButton: true
      };
    }

    // 4. Timelines & Delivery Speed
    if (q.includes('timeline') || q.includes('how long') || q.includes('turnaround') || q.includes('delivery time') || q.includes('when')) {
      return {
        text: 'Our typical turnaround times are:\n• Basic packages: 5–7 business days\n• Standard packages: 10–14 business days\n• Pro & Custom systems: 3–4 weeks with phased live testing\nWe provide milestone updates and live staging access throughout development.',
        showBookingButton: true
      };
    }

    // 5. Booking & Consultations
    if (q.includes('book') || q.includes('schedule') || q.includes('consultation') || q.includes('call') || q.includes('talk') || q.includes('meeting')) {
      return {
        text: 'You can book a direct 30-minute discovery call with our senior technical specialists. We will analyze your current bottlenecks, map your tools, and provide an actionable automation architecture roadmap.',
        showBookingButton: true
      };
    }

    // 6. What Can We Automate?
    if (q.includes('what can you automate') || q.includes('what can we automate') || q.includes('automate my business') || q.includes('bottleneck')) {
      return {
        text: 'We automate high-friction operational tasks:\n1. Inbound lead qualification in under 3 seconds\n2. Missed-call instant SMS text-back\n3. Two-way calendar booking with zero double-booking\n4. Cross-tool syncing between forms, CRMs, and email\n5. Shopify product publishing and social rendering\n6. Tender compliance checking and bid document assembly.',
        showBookingButton: true
      };
    }

    // 7. Services & Practice Areas
    if (q.includes('service') || q.includes('offer') || q.includes('what do you do') || q.includes('practice')) {
      return {
        text: 'We provide six dedicated practice areas:\n1. AI Automation (Voice & Chat Agents)\n2. Business Automation (Make / n8n middleware)\n3. CRM Automation (GoHighLevel / HubSpot)\n4. High-Performance Website Design\n5. Tender Support & Procurement Engineering\n6. Creative & AI Media Production.',
        showServicesLink: true
      };
    }

    // 8. Voice & Phone Agents
    if (q.includes('voice') || q.includes('phone') || q.includes('receptionist') || q.includes('call') || q.includes('incoming call')) {
      return {
        text: 'Our AI Voice Agents act as intelligent virtual receptionists. They answer incoming phone calls 24/7, converse naturally in realistic human voices, answer FAQs, qualify caller intent, and book appointments directly on your calendar.',
        showBookingButton: true
      };
    }

    // 9. WhatsApp & Messaging
    if (q.includes('whatsapp') || q.includes('sms') || q.includes('text') || q.includes('messaging') || q.includes('chat')) {
      return {
        text: 'We build official WhatsApp Business API and Twilio SMS integrations powered by AI. Your customers get answers to inquiries in seconds, automated appointment reminders, and follow-ups directly in the messaging apps they check most.',
        showBookingButton: true
      };
    }

    // 10. CRM (GoHighLevel / HubSpot)
    if (q.includes('crm') || q.includes('gohighlevel') || q.includes('ghl') || q.includes('hubspot') || q.includes('activecampaign')) {
      return {
        text: 'We configure and optimize enterprise CRM platforms (GoHighLevel and HubSpot) with automated deal pipelines, missed-call recovery, review generation, and automated follow-up sequences so no lead is ever dropped.',
        showBookingButton: true
      };
    }

    // 11. Tech Stack & Middleware (Make, n8n, Zapier)
    if (q.includes('make') || q.includes('n8n') || q.includes('zapier') || q.includes('tech stack') || q.includes('tool') || q.includes('platform')) {
      return {
        text: 'Our core tech stack includes Make.com, n8n (for secure self-hosted enterprise workflows), OpenAI models, Whisper, GoHighLevel, HubSpot, Shopify, Airtable, Twilio, and React. We connect your existing tools with zero vendor lock-in.',
        showWorkLink: true
      };
    }

    // 12. Website Design
    if (q.includes('website') || q.includes('web design') || q.includes('landing page') || q.includes('redesign') || q.includes('ui') || q.includes('frontend')) {
      return {
        text: 'We build bespoke, fast, conversion-optimized websites using React, Tailwind, and modern web frameworks. Every website is engineered to guide visitors toward booking consultations and connects directly to your CRM and automated pipelines.',
        showServicesLink: true
      };
    }

    // 13. Tender Support & Bid Engineering
    if (q.includes('tender') || q.includes('bid') || q.includes('procurement') || q.includes('proposal') || q.includes('contract')) {
      return {
        text: 'Our Tender Support practice helps businesses pursue high-value commercial and public-sector contracts. We build automated compliance checking workflows, document assembly pipelines, and technical proposal drafts that reduce bid preparation time by up to 70%.',
        showServicesLink: true
      };
    }

    // 14. Shopify & Ecommerce
    if (q.includes('shopify') || q.includes('ecommerce') || q.includes('e-commerce') || q.includes('store') || q.includes('woo')) {
      return {
        text: 'For Shopify stores, we automate catalog enrichment, sync inventory with Airtable, trigger automated review requests, and build social content pipelines that render promotional assets automatically when new SKUs drop.',
        showWorkLink: true
      };
    }

    // 15. Security, Privacy & Data Compliance
    if (q.includes('security') || q.includes('safe') || q.includes('privacy') || q.includes('gdpr') || q.includes('data') || q.includes('confidential')) {
      return {
        text: 'We treat enterprise security as non-negotiable. All webhook pipelines use encrypted TLS/SSL connections, API keys are securely tokenized, client CRM data remains in your direct custody, and we build fully GDPR-compliant workflows with zero public data exposure.',
        showBookingButton: true
      };
    }

    // 16. Case Studies & Proof
    if (q.includes('work') || q.includes('portfolio') || q.includes('case stud') || q.includes('example') || q.includes('proof') || q.includes('client')) {
      return {
        text: 'Explore our verified case studies: including an AI Voice-to-Email Agent for executives, a Shopify Product-to-Social Content Engine, an automated CRM Lead Routing system for a commercial dental practice, and infrastructure bid automations.',
        showWorkLink: true
      };
    }

    // 17. Live Demos & Calculator
    if (q.includes('demo') || q.includes('simulation') || q.includes('try') || q.includes('calculator') || q.includes('roi') || q.includes('hours saved')) {
      return {
        text: 'You can test our interactive smartphone demo right on our homepage, run the live business simulation across 6 industries, or use our ROI Hours Reclaimed Calculator to estimate your exact operational savings.',
        showDemoLink: true
      };
    }

    // 18. Human Staff Replacement Question
    if (q.includes('replace') || q.includes('staff') || q.includes('employee') || q.includes('job') || q.includes('human')) {
      return {
        text: 'Our automations do not replace your valuable human staff—they empower them. By eliminating 15–20 hours of weekly copy-pasting, data entry, and repetitive scheduling, your team can focus on high-value client relationships and strategic revenue growth.',
        showBookingButton: true
      };
    }

    // 19. How To Get Started / Next Steps
    if (q.includes('start') || q.includes('next step') || q.includes('hire') || q.includes('process') || q.includes('onboard')) {
      return {
        text: 'Getting started is straightforward:\n1. Book a 30-minute discovery call\n2. We audit your existing tools and identify high-ROI opportunities\n3. We provide a fixed-scope architecture proposal\n4. We build, integrate, and test your systems with full training.',
        showBookingButton: true
      };
    }

    // Dynamic, thoughtful conversational fallbacks
    const intelligentFallbacks = [
      `That is an important question. At Pinnacle Group, we build bespoke AI systems, CRM pipelines, websites, and business automations tailored directly to your workflow. Would you like to see how this applies to your specific industry, or book a quick technical consultation?`,
      `Great question. Every business has unique operational needs—whether you're looking to respond faster to leads, connect disconnected tools like Shopify and your CRM, or build an autonomous AI agent. Tell me a bit about your current setup and I'll explain how we can help.`,
      `We engineer practical digital systems that solve real operational friction. Whether you're curious about pricing, our tech stack, or seeing a live simulation, I'm here to help. What aspect of your business operations are you looking to streamline?`
    ];

    const randomIndex = Math.abs(q.length) % intelligentFallbacks.length;
    return {
      text: intelligentFallbacks[randomIndex],
      showBookingButton: true
    };
  };

  const handleSendMessage = (textToSend) => {
    const messageText = textToSend || inputText.trim();
    if (!messageText) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      text: messageText
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate natural thinking delay
    setTimeout(() => {
      const responseData = generateResponse(messageText);
      const assistantMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: responseData.text,
        showBookingButton: responseData.showBookingButton,
        showServicesLink: responseData.showServicesLink,
        showWorkLink: responseData.showWorkLink,
        showDemoLink: responseData.showDemoLink,
        showAssessmentLink: responseData.showAssessmentLink,
        showTeamLink: responseData.showTeamLink
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 p-3.5 sm:p-4 rounded-full bg-brand-charcoal hover:bg-brand-dark border border-brand-border hover:border-brand-lime shadow-2xl flex items-center gap-3 group transition-all duration-300 hover:scale-105"
          aria-label="Open Pinnancle Sales Assistant"
        >
          <div className="relative">
            <div className="w-6 h-6 rounded-full bg-brand-lime flex items-center justify-center text-black">
              <Bot className="w-4 h-4 fill-black" />
            </div>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand-lime border-2 border-brand-black animate-pulse" />
          </div>
          <span className="hidden sm:inline-block text-xs font-mono font-semibold text-white group-hover:text-brand-lime transition-colors pr-1">
            Pinnancle Assistant
          </span>
        </button>
      )}

      {/* Floating Chat Modal / Drawer */}
      {isOpen && (
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[85vh] sm:max-h-[620px] h-[580px] bg-brand-charcoal/98 backdrop-blur-xl border border-brand-border rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-slideUp">
          {/* Top Header Bar */}
          <div className="p-4 sm:p-5 bg-brand-dark border-b border-brand-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-8 h-8 rounded-xl bg-brand-charcoal border border-brand-border flex items-center justify-center text-brand-lime">
                  <Bot className="w-4 h-4" />
                </div>
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-sm">
                  Pinnancle Sales Assistant
                </h4>
                <p className="text-[10px] font-mono text-brand-silver">
                  Systems Guidance & Discovery
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Link
                to={BOOKING_CALENDAR_URL}
                onClick={() => setIsOpen(false)}
                className="px-2.5 py-1 rounded-lg bg-brand-lime/10 border border-brand-lime/30 text-brand-lime text-[11px] font-mono hover:bg-brand-lime hover:text-black transition-colors"
              >
                Book Call
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-brand-silver hover:text-white hover:bg-brand-charcoal transition-colors ml-1"
                aria-label="Close Assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[88%] p-3.5 rounded-2xl leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-brand-dark border border-brand-border text-white rounded-tr-sm'
                      : 'bg-brand-black/80 border border-brand-border/80 text-brand-offWhite rounded-tl-sm'
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Inline Action Triggers */}
                  {msg.showBookingButton && (
                    <div className="mt-3 pt-2.5 border-t border-brand-border/60">
                      <Link
                        to={BOOKING_CALENDAR_URL}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-lime text-black font-mono font-bold text-[11px] hover:bg-brand-limeLight transition-colors"
                      >
                        <Calendar className="w-3 h-3" />
                        <span>Book a 30-Min Consultation →</span>
                      </Link>
                    </div>
                  )}

                  {msg.showServicesLink && (
                    <div className="mt-3 pt-2.5 border-t border-brand-border/60 flex gap-2">
                      <Link
                        to="/services"
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-brand-lime hover:underline"
                      >
                        Explore Services →
                      </Link>
                    </div>
                  )}

                  {msg.showWorkLink && (
                    <div className="mt-3 pt-2.5 border-t border-brand-border/60 flex gap-2">
                      <Link
                        to="/work"
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-brand-lime hover:underline"
                      >
                        View Portfolio Case Studies →
                      </Link>
                    </div>
                  )}

                  {msg.showDemoLink && (
                    <div className="mt-3 pt-2.5 border-t border-brand-border/60 flex gap-2">
                      <Link
                        to="/automation-demo"
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-brand-lime hover:underline"
                      >
                        Open Automation Demos →
                      </Link>
                    </div>
                  )}

                  {msg.showAssessmentLink && (
                    <div className="mt-3 pt-2.5 border-t border-brand-border/60 flex gap-2">
                      <Link
                        to="/automation-assessment"
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-brand-lime hover:underline"
                      >
                        Start Assessment & ROI Calculator →
                      </Link>
                    </div>
                  )}

                  {msg.showTeamLink && (
                    <div className="mt-3 pt-2.5 border-t border-brand-border/60 flex gap-2">
                      <Link
                        to="/team"
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-brand-lime hover:underline"
                      >
                        Meet Our Team of 7 Specialists →
                      </Link>
                    </div>
                  )}
                </div>
                <span className="text-[9px] font-mono text-brand-silver/50 mt-1 px-1">
                  {msg.sender === 'user' ? 'You' : 'Pinnancle Assistant'}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-brand-black/60 border border-brand-border/60 w-fit text-brand-silver text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="p-3 bg-brand-dark/50 border-t border-brand-border/60 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendMessage(prompt)}
                  className="px-2.5 py-1 rounded-full bg-brand-charcoal hover:bg-brand-dark border border-brand-border text-[10px] font-mono text-brand-silver hover:text-white transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input Footer */}
          <div className="p-3 sm:p-4 bg-brand-dark border-t border-brand-border">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about systems, pricing, or booking..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 p-2.5 rounded-xl bg-brand-charcoal border border-brand-border text-xs text-white placeholder-brand-silver/50 focus:border-brand-lime focus:outline-none"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="p-2.5 rounded-xl bg-brand-lime text-black hover:bg-brand-limeLight disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
