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
    'What services do you offer?',
    'I want to book a consultation',
    'Can you automate my business?',
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

  // Intelligent client-side response engine for instant, reliable, non-failing guidance
  const generateResponse = (query) => {
    const q = query.toLowerCase();

    if (q.includes('book') || q.includes('schedule') || q.includes('consultation') || q.includes('call') || q.includes('talk')) {
      return {
        text: 'You can book a direct 30-minute consultation with our senior technical team right on our calendar. We will review your current tools, discuss what is slowing you down, and design a clear automation plan.',
        showBookingButton: true
      };
    }

    if (q.includes('what can you automate') || q.includes('what can we automate') || q.includes('automate my business')) {
      return {
        text: 'We automate the routine tasks that steal your team\'s time: responding to new leads in under 60 seconds, answering missed calls with AI text receptionists, booking appointments directly on your calendar, updating your CRM without manual data entry, syncing Shopify products, and publishing social content automatically.',
        showBookingButton: true
      };
    }

    if (q.includes('service') || q.includes('offer') || q.includes('what do you do')) {
      return {
        text: 'We provide six core practice areas: 1) AI Automation (Voice & Chat Agents), 2) Business Automation (Make/n8n workflows), 3) CRM Automation (GoHighLevel/HubSpot), 4) High-Conversion Website Design, 5) Tender Support (Procurement proposals), and 6) Creative & AI Media production.',
        showServicesLink: true
      };
    }

    if (q.includes('work') || q.includes('portfolio') || q.includes('case stud') || q.includes('examples') || q.includes('show me')) {
      return {
        text: 'Our recent client systems include: an AI Voice-to-Email Agent ($4,500 build), a Shopify Product-to-Social Content Engine ($1,350 build), a Shopify-to-Airtable catalog sync ($750 setup), and a sub-60-second Zillow Inbound Triage system for Cleveland Real Estate ($500 setup). You can explore the full production architectures in our portfolio.',
        showWorkLink: true
      };
    }

    if (q.includes('voice') || q.includes('call') || q.includes('receptionist') || q.includes('phone')) {
      return {
        text: 'Our AI Voice and Phone Agents answer customer calls 24/7, answer routine questions about your services, qualify caller intent, and book appointments directly on your schedule. If someone calls after hours or your line is busy, our missed-call text-back engages them within 5 seconds.',
        showBookingButton: true
      };
    }

    if (q.includes('crm') || q.includes('gohighlevel') || q.includes('hubspot') || q.includes('airtable')) {
      return {
        text: 'We set up and automate your CRM so every lead from your website, ads, or phone calls is captured, tracked, and automatically followed up with. No more messy spreadsheets or forgotten deals.',
        showBookingButton: true
      };
    }

    if (q.includes('shopify') || q.includes('ecommerce') || q.includes('store')) {
      return {
        text: 'For Shopify store owners, we build automations that connect your store to Airtable content calendars, generate marketing copy with Claude AI, render promotional videos with Shotstack, and dispatch multi-channel social posts automatically when new SKUs are added.',
        showWorkLink: true
      };
    }

    if (q.includes('price') || q.includes('cost') || q.includes('fee') || q.includes('rate') || q.includes('how much')) {
      return {
        text: 'Our projects are scoped transparently based on system complexity: focused CRM and workflow automations start between $500–$1,350, while full multi-layer AI agents with database state machines range around $4,500. We also provide ongoing maintenance starting from $250–$350/month.',
        showBookingButton: true
      };
    }

    // Default friendly assistant response
    return {
      text: 'Thank you for reaching out! Whether you need AI customer communication, CRM lead follow-up, website design, or connecting your business tools, we engineer systems that save your team hours every day. What specific task in your business is currently taking up too much time?',
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
        showWorkLink: responseData.showWorkLink
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
