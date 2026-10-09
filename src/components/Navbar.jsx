import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, Sparkles, Play, Zap, Building2, BookOpen } from 'lucide-react';
import MagneticButton from './MagneticButton';
import PinnancleLogo from './PinnancleLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setToolsDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // Click outside listener for desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToolsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Primary navigation links as requested
  const primaryLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  // Secondary tools and sector pages
  const secondaryLinks = [
    {
      name: 'Automation Demos',
      path: '/automation-demo',
      desc: 'Simulated customer conversations',
      icon: Play
    },
    {
      name: 'Automation Assessment',
      path: '/automation-assessment',
      desc: 'Readiness score & ROI calculator',
      icon: Zap
    },
    {
      name: 'Industries Served',
      path: '/industries',
      desc: 'Industry-specific solution blueprints',
      icon: Building2
    },
    {
      name: 'Insights & Articles',
      path: '/insights',
      desc: 'Engineering principles & tech trends',
      icon: BookOpen
    }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 sm:py-4 bg-brand-black/95 backdrop-blur-md border-b border-brand-border shadow-2xl'
            : 'py-5 sm:py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center group focus:outline-none"
            aria-label="Pinnancle Group Home"
          >
            <PinnancleLogo size="sm" showWordmark={true} />
          </Link>

          {/* Desktop Navigation Group */}
          <nav className="hidden lg:flex items-center gap-1 bg-brand-charcoal/85 border border-brand-border rounded-full px-4 py-1.5 backdrop-blur-md">
            {primaryLinks.map((link, idx) => {
              const isActive =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path);

              return (
                <Link
                  key={idx}
                  to={link.path}
                  className={`px-3 py-1.5 text-xs font-medium tracking-tight rounded-full transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-white/10 font-semibold'
                      : 'text-brand-silver hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-brand-lime rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* Secondary Pages Dropdown (Demos, Assessment, Industries, Insights) */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
                className={`px-3 py-1.5 text-xs font-medium tracking-tight rounded-full transition-all duration-200 flex items-center gap-1 ${
                  toolsDropdownOpen ||
                  location.pathname === '/automation-demo' ||
                  location.pathname === '/automation-assessment' ||
                  location.pathname === '/industries' ||
                  location.pathname === '/insights'
                    ? 'text-white bg-white/10 font-semibold'
                    : 'text-brand-silver hover:text-white hover:bg-white/5'
                }`}
                aria-expanded={toolsDropdownOpen}
                aria-label="More navigation options"
              >
                <span>More</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${
                    toolsDropdownOpen ? 'rotate-180 text-brand-lime' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu Popover */}
              {toolsDropdownOpen && (
                <div className="absolute top-full right-0 mt-3 w-72 rounded-2xl bg-brand-charcoal border border-brand-border p-2 shadow-2xl backdrop-blur-xl animate-fadeIn space-y-1 z-50">
                  {secondaryLinks.map((sub, i) => {
                    const SubIcon = sub.icon;
                    const isSubActive = location.pathname === sub.path;
                    return (
                      <Link
                        key={i}
                        to={sub.path}
                        className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-150 ${
                          isSubActive
                            ? 'bg-brand-dark border border-brand-lime/40 text-white'
                            : 'hover:bg-brand-dark text-brand-silver hover:text-white'
                        }`}
                      >
                        <div className="w-7 h-7 rounded-lg bg-brand-dark border border-brand-border flex items-center justify-center shrink-0 mt-0.5 text-brand-lime">
                          <SubIcon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold leading-tight text-white">
                            {sub.name}
                          </p>
                          <p className="text-[10px] text-brand-silver/80 mt-0.5 leading-snug font-sans">
                            {sub.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden lg:flex items-center gap-4">
            <MagneticButton
              to="/book"
              variant="primary"
              size="sm"
              showArrow={true}
            >
              Book a Consultation
            </MagneticButton>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-brand-charcoal border border-brand-border text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay with overflow safety */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-black/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 pt-24 sm:pt-28 lg:hidden animate-fade-in overflow-y-auto">
          <div className="flex flex-col space-y-6">
            {/* Main Links */}
            <div>
              <p className="text-[11px] font-mono uppercase tracking-widest text-brand-silver mb-3">
                Main Navigation
              </p>
              <div className="flex flex-col space-y-3">
                {primaryLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.path}
                    className="text-xl sm:text-2xl font-display font-medium text-white hover:text-brand-lime transition-colors flex items-center justify-between group py-1"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-brand-silver group-hover:text-brand-lime transition-colors" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Interactive & Specialty Links */}
            <div className="pt-4 border-t border-brand-border/60">
              <p className="text-[11px] font-mono uppercase tracking-widest text-brand-silver mb-3">
                Interactive Tools & Sectors
              </p>
              <div className="grid grid-cols-1 gap-2.5">
                {secondaryLinks.map((sub, idx) => (
                  <Link
                    key={idx}
                    to={sub.path}
                    className="p-3 rounded-xl bg-brand-charcoal/80 border border-brand-border flex items-center justify-between group"
                  >
                    <div>
                      <p className="text-xs font-semibold text-white group-hover:text-brand-lime transition-colors">
                        {sub.name}
                      </p>
                      <p className="text-[10px] text-brand-silver">
                        {sub.desc}
                      </p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-silver group-hover:text-brand-lime transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Footer Area with prominent Booking CTA */}
          <div className="pt-6 border-t border-brand-border space-y-4 mt-6">
            <div className="flex items-center justify-between text-xs text-brand-silver font-mono">
              <span>UK & NIGERIA OPERATIONS</span>
              <span>EST. 2023</span>
            </div>
            <MagneticButton
              to="/book"
              variant="primary"
              size="lg"
              showArrow={true}
              className="w-full justify-center"
            >
              Book a Consultation
            </MagneticButton>
          </div>
        </div>
      )}
    </>
  );
}
