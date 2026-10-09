import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  ArrowRight, 
  Bot, 
  User, 
  Clock, 
  Database, 
  Sparkles, 
  Wrench, 
  Building2, 
  Stethoscope, 
  Car, 
  ShoppingBag, 
  Briefcase, 
  Check, 
  Layers, 
  Activity, 
  Send, 
  ShieldCheck, 
  Users, 
  Calendar, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { businessDemos } from '../data/automationDemosData';
import MagneticButton from './MagneticButton';

const iconMap = {
  Wrench: Wrench,
  Building2: Building2,
  Stethoscope: Stethoscope,
  Car: Car,
  ShoppingBag: ShoppingBag,
  Briefcase: Briefcase
};

export default function SeeAutomationInAction() {
  const [selectedBusinessId, setSelectedBusinessId] = useState('hvac');
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const chatContainerRef = useRef(null);
  const timerRef = useRef(null);

  const activeDemo = businessDemos.find((b) => b.id === selectedBusinessId) || businessDemos[0];
  const allMessages = activeDemo.conversation;
  const currentStep = allMessages[currentStepIndex];

  // Reset playback when switching businesses
  const handleSelectBusiness = (id) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setSelectedBusinessId(id);
    setCurrentStepIndex(0);
    setIsTyping(false);
    setIsCompleted(false);
    setIsPlaying(true);
  };

  const handleRestart = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrentStepIndex(0);
    setIsTyping(false);
    setIsCompleted(false);
    setIsPlaying(true);
  };

  // Automated sequential playback engine
  useEffect(() => {
    if (!isPlaying || isCompleted) return;

    if (currentStepIndex >= allMessages.length - 1) {
      setIsCompleted(true);
      return;
    }

    const nextIndex = currentStepIndex + 1;
    const nextMsg = allMessages[nextIndex];

    // If next message is from AI, show typing indicator briefly
    if (nextMsg.sender === 'ai' || nextMsg.sender === 'human_agent') {
      setIsTyping(true);
      timerRef.current = setTimeout(() => {
        setIsTyping(false);
        setCurrentStepIndex(nextIndex);
      }, 1600);
    } else {
      // Customer message comes in naturally
      timerRef.current = setTimeout(() => {
        setCurrentStepIndex(nextIndex);
      }, 2200);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying, currentStepIndex, isCompleted, selectedBusinessId]);

  // Auto-scroll chat window gently to latest message
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [currentStepIndex, isTyping]);

  // Handle manual visitor interaction (e.g. clicking appointment slot choice)
  const handleSelectChoice = (choiceText) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsTyping(false);

    // Look for customer response matching or next step
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < allMessages.length) {
      setCurrentStepIndex(nextIndex);
    }
  };

  const displayedMessages = allMessages.slice(0, currentStepIndex + 1);

  return (
    <section id="demo" className="py-14 sm:py-18 md:py-20 bg-brand-black text-brand-offWhite relative border-t border-brand-border overflow-hidden">
      {/* Background Ambience Grid & Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-brand-lime/[0.03] rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-grid-subtle opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* ========================================================
            01. SECTION INTRO
           ======================================================== */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-charcoal/90 border border-brand-border text-xs font-mono uppercase tracking-widest text-brand-lime font-semibold mb-6 shadow-xl backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
            <span>LIVE AUTOMATION DEMO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-[1.08]">
            See Automation in Action.
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-brand-silver mt-6 leading-relaxed max-w-3xl mx-auto font-normal">
            See how an AI-powered system can respond to customers, qualify leads, answer questions, book appointments, update your CRM and keep your team informed automatically.
          </p>

          <p className="text-xs sm:text-sm font-mono text-brand-silver/70 mt-4 tracking-wide uppercase">
            Choose a business to see how it works.
          </p>
        </div>

        {/* ========================================================
            02. BUSINESS SELECTOR TABS
           ======================================================== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-8 sm:mb-10">
          {businessDemos.map((b) => {
            const isSelected = b.id === selectedBusinessId;
            const IconComponent = iconMap[b.icon] || MessageSquare;

            return (
              <button
                key={b.id}
                type="button"
                onClick={() => handleSelectBusiness(b.id)}
                className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                  isSelected
                    ? 'bg-brand-charcoal border-brand-lime shadow-lime-glow-sm text-white scale-[1.02]'
                    : 'bg-brand-dark/80 border-brand-border text-brand-silver hover:text-white hover:border-brand-borderLight hover:bg-brand-charcoal/50'
                }`}
              >
                {/* Active Indicator Top Accent */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-brand-lime" />
                )}

                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`p-2 rounded-xl transition-colors ${
                    isSelected ? 'bg-brand-lime text-black' : 'bg-white/5 text-brand-silver group-hover:text-white'
                  }`}>
                    <IconComponent className="w-4 h-4" />
                  </span>

                  {b.isHumanHandoff && (
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-brand-lime border border-brand-lime/30">
                      Smart Handoff
                    </span>
                  )}
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-bold tracking-tight leading-snug">
                    {b.shortName}
                  </h4>
                  <p className="text-[10px] text-brand-silver/60 line-clamp-1 mt-0.5">
                    {b.channel}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* ========================================================
            03. MAIN DEMO INTERFACE (TWO COLUMNS)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ======================================================
              LEFT COLUMN: REALISTIC CUSTOMER CONVERSATION
             ====================================================== */}
          <div className="lg:col-span-6 rounded-3xl bg-brand-charcoal/95 border border-brand-border shadow-2xl overflow-hidden flex flex-col h-[520px] sm:h-[580px] lg:h-[640px] relative backdrop-blur-md">
            {/* Conversation Window Top Header */}
            <div className="px-5 py-4 border-b border-brand-border bg-brand-dark/90 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-charcoal to-brand-border flex items-center justify-center font-mono text-xs font-bold text-white border border-brand-border">
                    {activeDemo.customerAvatar}
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-brand-lime border-2 border-brand-black" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white text-sm">
                      {activeDemo.customerName}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-brand-silver border border-brand-border">
                      {activeDemo.channel}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-brand-lime mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
                    <span>Pinnancle AI Assistant Online</span>
                  </div>
                </div>
              </div>

              {/* Playback Controls */}
              <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-brand-border">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1.5 rounded-lg text-brand-silver hover:text-white hover:bg-white/10 transition-colors"
                  title={isPlaying ? 'Pause' : 'Play'}
                  aria-label={isPlaying ? 'Pause conversation' : 'Play conversation'}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5 text-brand-lime" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  type="button"
                  onClick={handleRestart}
                  className="p-1.5 rounded-lg text-brand-silver hover:text-white hover:bg-white/10 transition-colors"
                  title="Restart Demo"
                  aria-label="Restart demo conversation"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div
              ref={chatContainerRef}
              className="flex-1 p-5 sm:p-6 overflow-y-auto space-y-4 font-sans text-sm custom-scrollbar bg-gradient-to-b from-brand-charcoal/30 to-brand-dark/60"
            >
              {/* Channel Security Pill */}
              <div className="text-center my-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-brand-silver/60 bg-black/30 px-3 py-1 rounded-full border border-white/5">
                  <ShieldCheck className="w-3 h-3 text-brand-lime" />
                  Verified Inbound Triage · End-to-End Enterprise Sync
                </span>
              </div>

              {displayedMessages.map((msg) => {
                const isCustomer = msg.sender === 'customer';
                const isHumanAgent = msg.sender === 'human_agent';

                if (isCustomer) {
                  return (
                    <div key={msg.id} className="flex flex-col items-start max-w-[85%] sm:max-w-[80%] animate-fade-in">
                      <div className="flex items-center gap-1.5 mb-1 text-[10px] font-mono text-brand-silver/50">
                        <span>{activeDemo.customerName}</span>
                        <span>·</span>
                        <span>{msg.timestamp}</span>
                      </div>
                      <div className="p-3.5 sm:p-4 rounded-2xl rounded-tl-sm bg-brand-card border border-brand-border text-white text-sm leading-relaxed shadow-md">
                        {msg.text}
                      </div>
                    </div>
                  );
                }

                if (isHumanAgent) {
                  return (
                    <div key={msg.id} className="flex flex-col items-end max-w-[88%] sm:max-w-[82%] ml-auto animate-fade-in">
                      <div className="flex items-center gap-1.5 mb-1 text-[10px] font-mono text-brand-lime">
                        <Users className="w-3 h-3" />
                        <span className="font-semibold">{msg.agentName}</span>
                        <span>·</span>
                        <span>{msg.timestamp}</span>
                      </div>
                      <div className="p-3.5 sm:p-4 rounded-2xl rounded-tr-sm bg-brand-charcoal border-2 border-brand-lime/80 text-white text-sm leading-relaxed shadow-xl">
                        {msg.text}
                      </div>
                      <div className="flex items-center gap-1 text-[10px] font-mono text-brand-lime mt-1">
                        <Check className="w-3 h-3 text-brand-lime" />
                        <span>Dispatched to Customer</span>
                      </div>
                    </div>
                  );
                }

                // AI Message
                return (
                  <div key={msg.id} className="flex flex-col items-end max-w-[88%] sm:max-w-[82%] ml-auto animate-fade-in">
                    <div className="flex items-center gap-1.5 mb-1 text-[10px] font-mono text-brand-silver/60">
                      <Bot className="w-3 h-3 text-brand-lime" />
                      <span className="text-brand-lime font-medium">Pinnancle AI Engine</span>
                      <span>·</span>
                      <span>{msg.timestamp}</span>
                    </div>

                    <div className="p-3.5 sm:p-4 rounded-2xl rounded-tr-sm bg-white text-black font-normal text-sm leading-relaxed shadow-lg">
                      {msg.text}

                      {/* Interactive Slot Options if present */}
                      {msg.interactiveOptions && !isCompleted && (
                        <div className="mt-3.5 pt-3 border-t border-black/10 flex flex-wrap gap-2">
                          {msg.interactiveOptions.map((opt, oIdx) => (
                            <button
                              key={oIdx}
                              type="button"
                              onClick={() => handleSelectChoice(opt)}
                              className="px-3 py-1.5 rounded-lg bg-black text-white text-xs font-mono font-medium hover:bg-brand-charcoal transition-all hover:scale-105 shadow-md flex items-center gap-1.5 cursor-pointer"
                            >
                              <Calendar className="w-3 h-3 text-brand-lime" />
                              <span>Select {opt}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-1 text-[10px] font-mono text-brand-silver/50 mt-1">
                      <Check className="w-3 h-3 text-brand-lime" />
                      <Check className="w-3 h-3 text-brand-lime -ml-1.5" />
                      <span>Delivered instantly</span>
                    </div>
                  </div>
                );
              })}

              {/* AI Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 max-w-[80%] ml-auto p-3 rounded-2xl rounded-tr-sm bg-white/10 text-brand-silver text-xs font-mono animate-pulse">
                  <Bot className="w-3.5 h-3.5 text-brand-lime animate-spin" />
                  <span>AI reasoning & checking CRM rules...</span>
                  <div className="flex gap-1 ml-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input Bar Preview (Disabled mockup state for realism) */}
            <div className="p-4 border-t border-brand-border bg-brand-dark/90 flex items-center justify-between text-xs font-mono text-brand-silver/50">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                Live Customer Stream Active
              </span>
              <span className="text-[11px]">Auto-Advancing Demo</span>
            </div>
          </div>

          {/* ======================================================
              RIGHT COLUMN: "WHAT THE SYSTEM IS DOING"
             ====================================================== */}
          <div className="lg:col-span-6 rounded-3xl bg-brand-charcoal/95 border border-brand-border shadow-2xl p-6 sm:p-8 flex flex-col justify-between h-[520px] sm:h-[580px] lg:h-[640px] relative backdrop-blur-md overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-lime/[0.04] rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10 overflow-y-auto pr-1 custom-scrollbar">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-brand-border">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-brand-lime font-bold flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-brand-lime" />
                    <span>WHAT THE SYSTEM IS DOING</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mt-0.5">
                    Real-Time Backend Orchestration
                  </h3>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-full bg-brand-dark border border-brand-border text-brand-silver">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
                    Step {currentStepIndex + 1} of {allMessages.length}
                  </span>
                </div>
              </div>

              {/* Dynamic Live Step Card */}
              {currentStep && currentStep.backendStep && (
                <div className="p-4 sm:p-5 rounded-2xl bg-brand-dark border border-brand-lime/30 shadow-lg space-y-3.5 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-brand-lime/10 text-brand-lime border border-brand-lime/30 text-[10px] font-mono font-bold tracking-wider">
                      {currentStep.backendStep.category}
                    </span>
                    <span className="text-[10px] font-mono text-brand-silver/60">
                      Executed in &lt; 200ms
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white tracking-tight">
                      {currentStep.backendStep.title}
                    </h4>
                    <p className="text-xs text-brand-silver mt-1 leading-relaxed">
                      {currentStep.backendStep.detail}
                    </p>
                  </div>

                  {/* System State Telemetry Matrix */}
                  <div className="pt-2 border-t border-brand-border/60 grid grid-cols-3 gap-2 text-[10px] font-mono">
                    <div className="p-2 rounded-lg bg-black/40 border border-brand-border/40">
                      <div className="text-brand-silver/50">LEAD STATUS</div>
                      <div className="text-white font-medium truncate mt-0.5">
                        {currentStep.backendStep.systemState.leadStatus}
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-black/40 border border-brand-border/40">
                      <div className="text-brand-silver/50">CRM STAGE</div>
                      <div className="text-brand-lime font-medium truncate mt-0.5">
                        {currentStep.backendStep.systemState.crmStage}
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-black/40 border border-brand-border/40">
                      <div className="text-brand-silver/50">TOOL ENGINE</div>
                      <div className="text-white font-medium truncate mt-0.5">
                        {currentStep.backendStep.systemState.automationTool}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Cumulative Automation Checklist */}
              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-mono text-brand-silver/70 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Pipeline Execution Tracker</span>
                  <span className="text-brand-lime">{activeDemo.summaryMetrics.responseTime} Avg Speed</span>
                </div>

                <div className="space-y-1.5">
                  {activeDemo.automationFlow.map((flowItem, fIdx) => {
                    // Activate items based on progress
                    const isActive = (fIdx / activeDemo.automationFlow.length) <= ((currentStepIndex + 1) / allMessages.length);

                    return (
                      <div
                        key={fIdx}
                        className={`p-2.5 rounded-xl border text-xs font-mono transition-all duration-300 flex items-center justify-between ${
                          isActive
                            ? 'bg-brand-dark/90 border-brand-border text-white shadow-sm'
                            : 'bg-brand-dark/20 border-brand-border/30 text-brand-silver/40'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                            isActive ? 'bg-brand-lime text-black' : 'bg-white/5 text-brand-silver/30'
                          }`}>
                            ✓
                          </span>
                          <span className={isActive ? 'font-medium text-white' : 'text-brand-silver/40'}>
                            {flowItem.name}
                          </span>
                        </div>
                        <span className={`text-[10px] ${isActive ? 'text-brand-silver' : 'text-brand-silver/30'}`}>
                          {flowItem.tool}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Summary Bar or Completion State */}
            <div className="pt-4 border-t border-brand-border mt-4 relative z-10">
              {isCompleted ? (
                <div className="p-3.5 rounded-2xl bg-brand-lime/10 border border-brand-lime/40 flex items-center justify-between animate-fade-in">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0" />
                    <div>
                      <div className="text-xs font-mono font-bold text-brand-lime">
                        AUTOMATION COMPLETE
                      </div>
                      <div className="text-[11px] text-brand-silver">
                        Zero manual admin time required.
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleRestart}
                    className="px-3 py-1 rounded-full bg-brand-dark border border-brand-border text-xs font-mono text-brand-silver hover:text-white transition-colors"
                  >
                    Replay Demo ↺
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between text-xs font-mono text-brand-silver">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                    Operating autonomously
                  </span>
                  <span className="text-white">
                    {activeDemo.summaryMetrics.savedAdminTime} saved per lead
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ========================================================
            04. FINAL RESULT SUMMARY & ACTION BAR
           ======================================================== */}
        <div className="mt-14 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-brand-charcoal border border-brand-border shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Summary Checklist */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-lime font-bold">
                AUTOMATION COMPLETE
              </span>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-snug">
                That is what automation can do for your business.
              </h3>

              <p className="text-sm sm:text-base text-brand-silver leading-relaxed font-normal">
                Instead of missed calls, lost form leads, delayed follow-ups, and hours of copy-pasting into spreadsheets—your entire client journey executes smoothly 24 hours a day.
              </p>

              {/* The 7 Completed Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-xs font-mono text-brand-silver">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime shrink-0" />
                  <span>Lead captured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime shrink-0" />
                  <span>Lead qualified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime shrink-0" />
                  <span>CRM updated</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime shrink-0" />
                  <span>Follow-up sent</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime shrink-0" />
                  <span>Appointment booked</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime shrink-0" />
                  <span>Team notified</span>
                </div>
              </div>
            </div>

            {/* Right: Action CTAs */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3.5 sm:gap-4 justify-center">
              <MagneticButton
                to="/book"
                variant="primary"
                size="lg"
                showArrow={true}
                className="w-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-center"
              >
                BUILD MY AUTOMATION
              </MagneticButton>

              <MagneticButton
                to="/contact"
                variant="secondary"
                size="lg"
                className="w-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-center"
              >
                BOOK A CONSULTATION
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
