import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  Calendar, 
  Zap, 
  Bell, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Smartphone,
  Send,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  DollarSign
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import MagneticButton from './MagneticButton';

const SCREENS = [
  {
    id: 'ai-agent',
    title: 'AI Customer Agent',
    subtitle: 'WhatsApp & SMS Sub-3s Lead Qualification',
    badge: 'Live Messaging',
    icon: MessageSquare,
  },
  {
    id: 'booking',
    title: 'Instant Booking',
    subtitle: 'Zero-Lag 2-Way Calendar Synchronization',
    badge: 'Calendar Engine',
    icon: Calendar,
  },
  {
    id: 'pipeline',
    title: 'Inbound Lead Pipeline',
    subtitle: 'Instant Multi-Step Webhook Processing',
    badge: 'CRM Automation',
    icon: Zap,
  },
  {
    id: 'revenue',
    title: 'Revenue Telemetry',
    subtitle: 'Real-Time Deal Won & Deposit Alerts',
    badge: 'Push Notifications',
    icon: Bell,
  },
];

export default function InteractivePhoneExperience() {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);

  // Screen 1: AI Chat State
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'user',
      text: 'Hi there, do you have availability for a system audit this week?',
      time: '09:41 AM',
    },
    {
      sender: 'ai',
      text: 'Hello! Yes, we have two slots open: Thursday at 2:00 PM or Friday at 10:30 AM BST. Which one suits your schedule best?',
      time: '09:41 AM',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  // Screen 2: Booking State
  const [selectedDate, setSelectedDate] = useState('Fri, Oct 16');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Screen 3: Pipeline State
  const [pipelineStep, setPipelineStep] = useState(5);
  const [isSimulatingPipeline, setIsSimulatingPipeline] = useState(false);

  // Screen 4: Revenue Notification State
  const [activeNotification, setActiveNotification] = useState(null);

  // Handle Touch Gestures with safe threshold (pan-y preserved)
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX - touchEndX;
    if (swipeDistance > 45) {
      // Swiped Left -> Next
      nextScreen();
    } else if (swipeDistance < -45) {
      // Swiped Right -> Prev
      prevScreen();
    }
  };

  // Handle Desktop Mouse Drag
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    const dragDistance = dragStartX - e.clientX;
    if (dragDistance > 50) {
      nextScreen();
    } else if (dragDistance < -50) {
      prevScreen();
    }
  };

  const nextScreen = () => {
    setActiveScreenIndex((prev) => (prev + 1) % SCREENS.length);
  };

  const prevScreen = () => {
    setActiveScreenIndex((prev) => (prev - 1 + SCREENS.length) % SCREENS.length);
  };

  // Handle Interactive Chat Prompts
  const handleSendPrompt = (promptText, responseText) => {
    if (isTyping) return;
    setChatMessages((prev) => [
      ...prev,
      { sender: 'user', text: promptText, time: '09:42 AM' },
    ]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setChatMessages((prev) => [
        ...prev,
        { sender: 'ai', text: responseText, time: '09:42 AM' },
      ]);
    }, 750);
  };

  // Re-simulate Pipeline Run
  const handleSimulatePipeline = () => {
    if (isSimulatingPipeline) return;
    setIsSimulatingPipeline(true);
    setPipelineStep(1);

    const timer1 = setTimeout(() => setPipelineStep(2), 350);
    const timer2 = setTimeout(() => setPipelineStep(3), 700);
    const timer3 = setTimeout(() => setPipelineStep(4), 1050);
    const timer4 = setTimeout(() => {
      setPipelineStep(5);
      setIsSimulatingPipeline(false);
    }, 1400);
  };

  return (
    <section className="py-14 sm:py-18 md:py-20 bg-brand-dark/60 text-brand-offWhite relative border-t border-brand-border overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-lime/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-brand-border text-brand-silver text-xs font-mono uppercase tracking-widest mb-4">
              <Smartphone className="w-3.5 h-3.5 text-brand-lime" />
              Interactive Smartphone Experience
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white leading-tight">
              Experience Automation <br />
              <span className="text-brand-lime">Directly In Your Pocket.</span>
            </h2>
            <p className="text-sm sm:text-base text-brand-silver mt-4 leading-relaxed font-normal">
              Swipe or click through live mobile demonstrations of Pinnacle Group's systems. See how instant AI conversations, automated booking, and real-time revenue telemetry look on your phone.
            </p>
          </div>
        </ScrollReveal>

        {/* Screen Selection Tabs */}
        <ScrollReveal delay={100}>
          <div className="flex items-center justify-center gap-2 flex-wrap mb-10 max-w-4xl mx-auto">
            {SCREENS.map((screen, idx) => {
              const Icon = screen.icon;
              const isActive = activeScreenIndex === idx;
              return (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreenIndex(idx)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 border ${
                    isActive
                      ? 'bg-white text-black border-white shadow-lg shadow-white/10 font-bold scale-[1.02]'
                      : 'bg-brand-charcoal text-brand-silver border-brand-border hover:border-brand-borderLight hover:text-white'
                  }`}
                  aria-label={`Switch to ${screen.title}`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-brand-lime'}`} />
                  <span>{screen.title}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Interactive Phone Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Context & Feature Breakdown */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <ScrollReveal delay={150}>
              <div className="p-7 rounded-3xl bg-brand-charcoal border border-brand-border relative overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-brand-lime font-semibold">
                    {SCREENS[activeScreenIndex].badge}
                  </span>
                  <span className="text-xs font-mono text-brand-silver">
                    Demo {activeScreenIndex + 1} of {SCREENS.length}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                  {SCREENS[activeScreenIndex].title}
                </h3>
                <p className="text-xs font-mono text-brand-silver mt-1">
                  {SCREENS[activeScreenIndex].subtitle}
                </p>

                {/* Specific Detailed Breakdown per active screen */}
                {activeScreenIndex === 0 && (
                  <div className="mt-5 space-y-3 text-xs text-brand-silver border-t border-brand-border pt-4">
                    <p className="leading-relaxed">
                      Ambitious customers expect immediate answers. When an inquiry lands via WhatsApp, SMS, or Instagram, Pinnacle's AI agent parses customer intent, answers technical questions, and books qualified appointments in under 3 seconds.
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <div className="p-2.5 rounded-lg bg-brand-dark border border-brand-border">
                        <span className="block text-[10px] font-mono text-brand-lime uppercase">Response Time</span>
                        <span className="font-bold text-white text-sm">2.4 Seconds</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-brand-dark border border-brand-border">
                        <span className="block text-[10px] font-mono text-brand-lime uppercase">Hours Active</span>
                        <span className="font-bold text-white text-sm">24/7/365</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeScreenIndex === 1 && (
                  <div className="mt-5 space-y-3 text-xs text-brand-silver border-t border-brand-border pt-4">
                    <p className="leading-relaxed">
                      Eliminate the friction of back-and-forth email scheduling. The booking interface verifies slot availability across Google Calendar, Outlook, and your team's real-time schedule, with automated calendar invites and instant SMS confirmation.
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <div className="p-2.5 rounded-lg bg-brand-dark border border-brand-border">
                        <span className="block text-[10px] font-mono text-brand-lime uppercase">No-Show Drop</span>
                        <span className="font-bold text-white text-sm">-58% with SMS</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-brand-dark border border-brand-border">
                        <span className="block text-[10px] font-mono text-brand-lime uppercase">Sync Latency</span>
                        <span className="font-bold text-white text-sm">Instant (0s)</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeScreenIndex === 2 && (
                  <div className="mt-5 space-y-3 text-xs text-brand-silver border-t border-brand-border pt-4">
                    <p className="leading-relaxed">
                      Every inbound lead from ads, landing pages, or web forms enters an automated dispatch pipeline. Our webhooks enrich data, score the lead, create the deal in GoHighLevel CRM, and trigger instant alerts to your account directors.
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <div className="p-2.5 rounded-lg bg-brand-dark border border-brand-border">
                        <span className="block text-[10px] font-mono text-brand-lime uppercase">Pipeline Stages</span>
                        <span className="font-bold text-white text-sm">5 Automated</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-brand-dark border border-brand-border">
                        <span className="block text-[10px] font-mono text-brand-lime uppercase">Total Latency</span>
                        <span className="font-bold text-white text-sm">1,240 ms</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeScreenIndex === 3 && (
                  <div className="mt-5 space-y-3 text-xs text-brand-silver border-t border-brand-border pt-4">
                    <p className="leading-relaxed">
                      Run your company with complete operational visibility. Receive real-time push notifications whenever a contract is signed, Stripe deposit is captured, or high-budget prospect qualifies—keeping leadership informed anywhere in the world.
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <div className="p-2.5 rounded-lg bg-brand-dark border border-brand-border">
                        <span className="block text-[10px] font-mono text-brand-lime uppercase">Deal Capture</span>
                        <span className="font-bold text-white text-sm">100% Real-time</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-brand-dark border border-brand-border">
                        <span className="block text-[10px] font-mono text-brand-lime uppercase">Alert Channels</span>
                        <span className="font-bold text-white text-sm">Push, SMS, Slack</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Controls */}
                <div className="mt-6 pt-5 border-t border-brand-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevScreen}
                      className="p-2.5 rounded-xl bg-brand-dark border border-brand-border text-white hover:text-brand-lime hover:border-brand-lime/40 transition-colors"
                      aria-label="Previous demonstration screen"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextScreen}
                      className="p-2.5 rounded-xl bg-brand-dark border border-brand-border text-white hover:text-brand-lime hover:border-brand-lime/40 transition-colors"
                      aria-label="Next demonstration screen"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <span className="text-[11px] font-mono text-brand-silver ml-2">
                      Swipe phone or use arrows
                    </span>
                  </div>

                  <MagneticButton
                    to="/book"
                    variant="primary"
                    size="sm"
                    showArrow={true}
                  >
                    Deploy For Your Team
                  </MagneticButton>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Realistic Interactive Smartphone Mockup */}
          <div className="lg:col-span-7 flex justify-center order-1 lg:order-2">
            <ScrollReveal delay={200}>
              <div className="relative mx-auto select-none">
                {/* External Ambient Glow */}
                <div className="absolute inset-0 bg-brand-lime/10 blur-3xl -z-10 rounded-[55px] transform scale-95" />

                {/* Smartphone Hardware Outer Shell */}
                <div
                  className="w-[320px] sm:w-[350px] md:w-[380px] h-[640px] sm:h-[680px] md:h-[720px] bg-neutral-900 rounded-[50px] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border-[4px] border-neutral-700 relative cursor-grab active:cursor-grabbing transition-transform duration-300"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  style={{ touchAction: 'pan-y' }}
                >
                  {/* Subtle Titanium Edge Glare */}
                  <div className="absolute inset-0 rounded-[46px] border border-white/10 pointer-events-none" />

                  {/* Volume Buttons & Power Notch on Phone Edges */}
                  <div className="absolute -left-[7px] top-28 w-[3px] h-10 bg-neutral-700 rounded-l-sm" />
                  <div className="absolute -left-[7px] top-42 w-[3px] h-10 bg-neutral-700 rounded-l-sm" />
                  <div className="absolute -right-[7px] top-36 w-[3px] h-14 bg-neutral-700 rounded-r-sm" />

                  {/* Phone Screen Glass Container */}
                  <div className="w-full h-full bg-[#080808] rounded-[42px] overflow-hidden relative flex flex-col justify-between border border-neutral-800 shadow-inner">
                    {/* Glass Glare Overlay */}
                    <div className="absolute inset-0 phone-glare pointer-events-none z-30" />

                    {/* TOP STATUS BAR & DYNAMIC ISLAND */}
                    <div className="relative z-40 pt-3 px-6 pb-2 bg-gradient-to-b from-black/90 to-transparent">
                      <div className="flex items-center justify-between text-[11px] font-mono text-white/90">
                        <span className="font-semibold tracking-tight">9:41</span>

                        {/* Dynamic Island Pill */}
                        <div className="h-6 w-28 bg-black border border-white/10 rounded-full flex items-center justify-between px-2.5 mx-auto shadow-md">
                          <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                          <span className="text-[9px] font-mono text-white tracking-widest uppercase">
                            PINNACLE
                          </span>
                          <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                        </div>

                        <div className="flex items-center gap-1.5 text-[10px]">
                          <span>5G</span>
                          <div className="w-4 h-2 border border-white/70 rounded-xs p-0.5 flex items-center">
                            <div className="w-full h-full bg-brand-lime rounded-xs" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SCREEN CONTENT AREA WITH SMOOTH HORIZONTAL TRANSITIONS */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar relative p-4 z-20">
                      {/* =========================================================================
                          SCREEN 1: AI CUSTOMER CONVERSATION
                          ========================================================================= */}
                      {activeScreenIndex === 0 && (
                        <div className="space-y-4 animate-in fade-in duration-300">
                          {/* Chat App Header */}
                          <div className="flex items-center justify-between p-3 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                            <div className="flex items-center gap-2.5">
                              <div className="w-9 h-9 rounded-full bg-brand-black border border-brand-lime/40 flex items-center justify-center font-mono font-bold text-xs text-brand-lime">
                                PG
                              </div>
                              <div>
                                <div className="flex items-center gap-1.5">
                                  <h4 className="text-xs font-bold text-white">Pinnacle Concierge</h4>
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                                </div>
                                <span className="text-[10px] font-mono text-neutral-400">
                                  Verified Business Bot · Sub-3s
                                </span>
                              </div>
                            </div>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-lime/10 text-brand-lime border border-brand-lime/20">
                              Active
                            </span>
                          </div>

                          {/* Message Stream */}
                          <div className="space-y-3 pt-2">
                            {chatMessages.map((msg, i) => (
                              <div
                                key={i}
                                className={`flex flex-col ${
                                  msg.sender === 'user' ? 'items-end' : 'items-start'
                                }`}
                              >
                                <div
                                  className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                                    msg.sender === 'user'
                                      ? 'bg-neutral-800 text-white rounded-tr-xs border border-neutral-700'
                                      : 'bg-neutral-900 text-neutral-200 rounded-tl-xs border border-brand-lime/30 shadow-md'
                                  }`}
                                >
                                  {msg.sender === 'ai' && (
                                    <div className="flex items-center gap-1 text-[9px] font-mono text-brand-lime mb-1">
                                      <Sparkles className="w-2.5 h-2.5" />
                                      AI Architecture Engine
                                    </div>
                                  )}
                                  <p>{msg.text}</p>
                                </div>
                                <span className="text-[9px] font-mono text-neutral-500 mt-1 px-1">
                                  {msg.time}
                                </span>
                              </div>
                            ))}

                            {isTyping && (
                              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-neutral-900 border border-brand-lime/20 w-fit text-neutral-400 text-xs">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-bounce" />
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-bounce [animation-delay:0.2s]" />
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-bounce [animation-delay:0.4s]" />
                                <span className="text-[10px] font-mono text-brand-lime ml-1">
                                  Pinnacle AI is typing...
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Interactive Quick-Prompt Chips */}
                          <div className="pt-2 border-t border-neutral-800">
                            <span className="block text-[10px] font-mono text-neutral-400 mb-2">
                              Tap an option to test instant response:
                            </span>
                            <div className="flex flex-col gap-1.5">
                              <button
                                onClick={() =>
                                  handleSendPrompt(
                                    'Lock in Thursday at 2:00 PM for me.',
                                    'Confirmed! Thursday at 2:00 PM BST is reserved. We have synced Google Calendar and sent your prep checklist.'
                                  )
                                }
                                className="text-left text-[11px] p-2 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-brand-lime/40 text-neutral-200 transition-colors"
                              >
                                👉 "Lock in Thursday at 2:00 PM for me."
                              </button>
                              <button
                                onClick={() =>
                                  handleSendPrompt(
                                    'What does the $650 Basic package include?',
                                    'Our $650 Basic package includes full setup of your automated lead capture, CRM synchronization, and email notifications delivered in 5 days.'
                                  )
                                }
                                className="text-left text-[11px] p-2 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-brand-lime/40 text-neutral-200 transition-colors"
                              >
                                👉 "What does the $650 Basic package include?"
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* =========================================================================
                          SCREEN 2: REAL-TIME APPOINTMENT BOOKING
                          ========================================================================= */}
                      {activeScreenIndex === 1 && (
                        <div className="space-y-4 animate-in fade-in duration-300">
                          <div className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-center">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-brand-lime">
                              Calendar Sync Hub
                            </span>
                            <h4 className="text-sm font-bold text-white mt-1">
                              Book 30-Min Strategy Call
                            </h4>
                            <p className="text-[11px] text-neutral-400 mt-0.5">
                              Two-way calendar lock with zero double-bookings
                            </p>
                          </div>

                          {/* Date Selector Strip */}
                          <div>
                            <span className="block text-[10px] font-mono text-neutral-400 mb-2">
                              Select Date (October 2026)
                            </span>
                            <div className="grid grid-cols-3 gap-2">
                              {['Thu, Oct 15', 'Fri, Oct 16', 'Mon, Oct 19'].map((date) => (
                                <button
                                  key={date}
                                  onClick={() => {
                                    setSelectedDate(date);
                                    setBookingConfirmed(false);
                                  }}
                                  className={`p-2.5 rounded-xl text-center text-xs font-mono transition-all border ${
                                    selectedDate === date
                                      ? 'bg-white text-black border-white font-bold'
                                      : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                                  }`}
                                >
                                  {date}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Time Slots */}
                          <div>
                            <span className="block text-[10px] font-mono text-neutral-400 mb-2">
                              Available Time Slots (BST)
                            </span>
                            <div className="grid grid-cols-2 gap-2">
                              {['10:00 AM', '11:00 AM', '02:30 PM', '04:00 PM'].map((time) => (
                                <button
                                  key={time}
                                  onClick={() => {
                                    setSelectedTime(time);
                                    setBookingConfirmed(false);
                                  }}
                                  className={`p-2 rounded-xl text-xs font-mono transition-all border ${
                                    selectedTime === time
                                      ? 'bg-brand-lime text-black border-brand-lime font-bold'
                                      : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                                  }`}
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Booking Action Button */}
                          {!bookingConfirmed ? (
                            <button
                              onClick={() => setBookingConfirmed(true)}
                              className="w-full py-3 rounded-xl bg-white hover:bg-neutral-200 text-black font-bold text-xs uppercase font-mono tracking-wider transition-colors shadow-lg"
                            >
                              Confirm {selectedTime} Slot
                            </button>
                          ) : (
                            <div className="p-3.5 rounded-2xl bg-brand-lime/10 border border-brand-lime/30 text-left space-y-2 animate-in zoom-in-95 duration-200">
                              <div className="flex items-center gap-2 text-brand-lime text-xs font-bold">
                                <CheckCircle2 className="w-4 h-4 shrink-0" />
                                <span>Appointment Reserved!</span>
                              </div>
                              <p className="text-[10px] text-neutral-300">
                                {selectedDate} at {selectedTime} (BST).
                              </p>
                              <div className="text-[9px] font-mono text-neutral-400 space-y-1 pt-1 border-t border-brand-lime/20">
                                <div>✓ Auto-generated Zoom link dispatched</div>
                                <div>✓ Two-way Google & Outlook sync confirmed</div>
                                <div>✓ SMS reminder scheduled 1 hr prior</div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* =========================================================================
                          SCREEN 3: INBOUND LEAD PIPELINE ENGINE
                          ========================================================================= */}
                      {activeScreenIndex === 2 && (
                        <div className="space-y-3.5 animate-in fade-in duration-300">
                          <div className="flex items-center justify-between p-3 rounded-2xl bg-neutral-900 border border-neutral-800">
                            <div>
                              <span className="text-[9px] font-mono uppercase text-brand-lime">
                                Webhook Dispatcher
                              </span>
                              <h4 className="text-xs font-bold text-white">Live Pipeline Execution</h4>
                            </div>
                            <button
                              onClick={handleSimulatePipeline}
                              disabled={isSimulatingPipeline}
                              className="px-2.5 py-1 rounded-lg bg-white text-black text-[10px] font-mono font-bold hover:bg-neutral-200 transition-colors disabled:opacity-50"
                            >
                              {isSimulatingPipeline ? 'Running...' : 'Re-Run'}
                            </button>
                          </div>

                          {/* Pipeline Step Sequence */}
                          <div className="space-y-2 text-xs">
                            {[
                              { step: 1, title: 'Ad Form Submitted', desc: 'Marcus Vance (Real Estate Director)', time: '0.1s' },
                              { step: 2, title: 'Data Enriched', desc: 'Clearbit API verified £2.5M revenue', time: '0.4s' },
                              { step: 3, title: 'GoHighLevel Deal Logged', desc: 'Stage: Qualified Prospect ($3,500)', time: '0.7s' },
                              { step: 4, title: 'Instant WhatsApp Sent', desc: '"Hi Marcus, review your blueprint"', time: '1.0s' },
                              { step: 5, title: 'Director Slack Alert', desc: 'Account team notified for follow-up', time: '1.2s' },
                            ].map((item) => {
                              const isCompleted = pipelineStep >= item.step;
                              const isCurrent = pipelineStep === item.step;
                              return (
                                <div
                                  key={item.step}
                                  className={`p-2.5 rounded-xl border transition-all duration-300 ${
                                    isCurrent
                                      ? 'bg-neutral-800 border-brand-lime/60 shadow-md scale-[1.01]'
                                      : isCompleted
                                      ? 'bg-neutral-900/90 border-neutral-800'
                                      : 'bg-neutral-950/60 border-neutral-900 opacity-40'
                                  }`}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                      <div
                                        className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-mono ${
                                          isCompleted
                                            ? 'bg-brand-lime text-black font-bold'
                                            : 'bg-neutral-800 text-neutral-400'
                                        }`}
                                      >
                                        {isCompleted ? <Check className="w-2.5 h-2.5" /> : item.step}
                                      </div>
                                      <span className="font-semibold text-[11px] text-white">
                                        {item.title}
                                      </span>
                                    </div>
                                    <span className="text-[9px] font-mono text-neutral-500">
                                      {item.time}
                                    </span>
                                  </div>
                                  <p className="text-[10px] text-neutral-400 mt-1 pl-6">
                                    {item.desc}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* =========================================================================
                          SCREEN 4: REVENUE TELEMETRY NOTIFICATION CENTER
                          ========================================================================= */}
                      {activeScreenIndex === 3 && (
                        <div className="space-y-3 animate-in fade-in duration-300">
                          <div className="text-center py-2">
                            <span className="text-xs font-mono text-neutral-400">
                              Friday, October 16
                            </span>
                            <h3 className="text-2xl font-light text-white tracking-tight mt-0.5">
                              09:41
                            </h3>
                          </div>

                          <div className="space-y-2">
                            {[
                              {
                                id: 1,
                                app: 'STRIPE & GOHIGHLEVEL',
                                icon: DollarSign,
                                title: '💰 Deal Won: £4,500.00 Captured',
                                desc: 'Vertex Logistics contract signed. Deposit cleared automatically.',
                                time: '2m ago',
                                tag: 'Revenue',
                              },
                              {
                                id: 2,
                                app: 'PINNACLE AI CONCIERGE',
                                icon: Sparkles,
                                title: '⚡ Enterprise Lead Auto-Qualified',
                                desc: 'Solar Group budget (£12,500) vetted. Meeting locked for Monday 2pm.',
                                time: '14m ago',
                                tag: 'Inbound',
                              },
                              {
                                id: 3,
                                app: 'DOCUSIGN & MAKE PIPELINE',
                                icon: ShieldCheck,
                                title: '📑 Tender Submission Signed',
                                desc: 'UK Infrastructure bid packet archived in secure cloud vault.',
                                time: '41m ago',
                                tag: 'Tender',
                              },
                              {
                                id: 4,
                                app: 'CALENDAR NOTIFICATION',
                                icon: Clock,
                                title: '📅 Call in 15 Minutes',
                                desc: 'Strategy review with Dr. Sarah Jenkins (SMS reminder dispatched).',
                                time: '1h ago',
                                tag: 'Meeting',
                              },
                            ].map((notif) => (
                              <div
                                key={notif.id}
                                onClick={() =>
                                  setActiveNotification(
                                    activeNotification === notif.id ? null : notif.id
                                  )
                                }
                                className={`p-3 rounded-2xl bg-neutral-900/90 border transition-all cursor-pointer ${
                                  activeNotification === notif.id
                                    ? 'border-brand-lime shadow-lg scale-[1.02]'
                                    : 'border-neutral-800 hover:border-neutral-700'
                                }`}
                              >
                                <div className="flex items-center justify-between text-[9px] font-mono text-neutral-400 mb-1">
                                  <div className="flex items-center gap-1.5">
                                    <notif.icon className="w-3 h-3 text-brand-lime" />
                                    <span>{notif.app}</span>
                                  </div>
                                  <span>{notif.time}</span>
                                </div>
                                <h5 className="text-[11px] font-bold text-white">
                                  {notif.title}
                                </h5>
                                <p className="text-[10px] text-neutral-300 mt-0.5 leading-relaxed">
                                  {notif.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* BOTTOM HOME GESTURE BAR & SWIPE INDICATORS */}
                    <div className="relative z-40 pb-3 pt-2 px-6 bg-gradient-to-t from-black/90 to-transparent flex flex-col items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        {SCREENS.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveScreenIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              activeScreenIndex === i
                                ? 'w-6 bg-brand-lime'
                                : 'w-1.5 bg-neutral-700 hover:bg-neutral-500'
                            }`}
                            aria-label={`Go to screen ${i + 1}`}
                          />
                        ))}
                      </div>

                      {/* iPhone Home Bar */}
                      <div className="w-32 h-1 bg-white/40 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
