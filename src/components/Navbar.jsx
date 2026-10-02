import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';
import PinnancleLogo from './PinnancleLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/industries' },
    { name: 'Work', path: '/work' },
    { name: 'Team', path: '/team' },
    { name: 'About', path: '/about' },
    { name: 'Insights', path: '/insights' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-4 bg-brand-black/90 backdrop-blur-md border-b border-brand-border shadow-2xl'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center group focus:outline-none"
            aria-label="Pinnancle Group Home"
          >
            <PinnancleLogo size="sm" showWordmark={true} />
          </Link>

          {/* Desktop Navigation Group */}
          <nav className="hidden lg:flex items-center gap-1 bg-brand-charcoal/80 border border-brand-border rounded-full px-5 py-1.5 backdrop-blur-md">
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={idx}
                  to={link.path}
                  className={`px-3.5 py-1.5 text-xs font-medium tracking-tight rounded-full transition-all duration-200 relative ${
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
            className="lg:hidden p-2 rounded-lg bg-brand-charcoal border border-brand-border text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-black/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 lg:hidden animate-fade-in">
          <div className="flex flex-col space-y-6">
            <p className="text-xs font-mono uppercase tracking-widest text-brand-silver">
              Navigation
            </p>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  className="text-2xl font-display font-medium text-white hover:text-brand-lime transition-colors flex items-center justify-between group"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-5 h-5 text-brand-silver group-hover:text-brand-lime transition-colors" />
                </Link>
              ))}
              <Link
                to="/contact"
                className="text-2xl font-display font-medium text-white hover:text-brand-lime transition-colors flex items-center justify-between group"
              >
                <span>Contact</span>
                <ArrowRight className="w-5 h-5 text-brand-silver group-hover:text-brand-lime transition-colors" />
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-brand-border space-y-4">
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
