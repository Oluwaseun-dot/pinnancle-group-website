import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Globe2, Mail, Phone } from 'lucide-react';
import MagneticButton from './MagneticButton';
import PinnancleLogo from './PinnancleLogo';

export default function Footer() {
  const canvasRef = useRef(null);

  // Subtle animated visual behind footer (black background, white lines, tiny lime points)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationId;
    let handleResize;

    try {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let width = (canvas.width = canvas.offsetWidth || window.innerWidth);
      let height = (canvas.height = canvas.offsetHeight || 600);

      handleResize = () => {
        if (!canvas) return;
        width = canvas.width = canvas.offsetWidth || window.innerWidth;
        height = canvas.height = canvas.offsetHeight || 600;
      };
      window.addEventListener('resize', handleResize);

      const points = Array.from({ length: 30 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        isLime: Math.random() > 0.8,
      }));

      const render = () => {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < points.length; i++) {
          for (let j = i + 1; j < points.length; j++) {
            const dx = points[i].x - points[j].x;
            const dy = points[i].y - points[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 110) {
              ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - dist / 110)})`;
              ctx.lineWidth = 0.75;
              ctx.beginPath();
              ctx.moveTo(points[i].x, points[i].y);
              ctx.lineTo(points[j].x, points[j].y);
              ctx.stroke();
            }
          }
        }

        points.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          ctx.fillStyle = p.isLime ? '#ccff00' : 'rgba(255, 255, 255, 0.4)';
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.isLime ? 2 : 1.5, 0, Math.PI * 2);
          ctx.fill();
        });

        animationId = requestAnimationFrame(render);
      };

      render();
    } catch (e) {
      console.warn('Footer canvas subtle animation failed gracefully:', e);
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (handleResize) window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <footer className="relative bg-brand-black text-brand-offWhite border-t border-brand-border overflow-hidden pt-24 pb-12">
      {/* Background Animated Canvas (Section 30) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Large White Heading: Phase 18 */}
        <div className="mb-20 pb-16 border-b border-brand-border flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-lime flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lime shadow-lime-glow-sm" />
              Pinnancle Group
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight">
              Let's Build <br />
              <span className="text-brand-silver">Something Better.</span>
            </h2>
          </div>

          <div>
            <MagneticButton to="/book" variant="primary" size="lg" showArrow={true}>
              Book a Consultation
            </MagneticButton>
          </div>
        </div>

        {/* Global Operations Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-b border-brand-border mb-16 text-xs text-brand-silver">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-brand-dark border border-brand-border text-white">
              <MapPin className="w-4 h-4 text-brand-lime" />
            </div>
            <div>
              <p className="font-semibold text-white uppercase tracking-wider text-[11px]">United Kingdom</p>
              <p className="mt-0.5">London Strategic Desk · Client Operations</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-brand-dark border border-brand-border text-white">
              <MapPin className="w-4 h-4 text-brand-lime" />
            </div>
            <div>
              <p className="font-semibold text-white uppercase tracking-wider text-[11px]">Nigeria</p>
              <p className="mt-0.5">Lagos Engineering & Creative Hub</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-brand-dark border border-brand-border text-white">
              <Globe2 className="w-4 h-4 text-brand-lime" />
            </div>
            <div>
              <p className="font-semibold text-white uppercase tracking-wider text-[11px]">Worldwide</p>
              <p className="mt-0.5">Deployments across UK, US, Europe & Africa</p>
            </div>
          </div>
        </div>

        {/* Phase 18 Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-4">
            <Link to="/" className="inline-block group focus:outline-none" aria-label="Pinnancle Group Home">
              <PinnancleLogo size="sm" showWordmark={true} />
            </Link>
            <p className="text-xs text-brand-silver leading-relaxed">
              We Build AI Systems That Help Businesses Grow.
            </p>
            <div className="pt-2 text-[11px] font-mono text-brand-silver space-y-1">
              <p className="text-brand-lime">Built between the UK & Nigeria.</p>
              <p>Delivered worldwide.</p>
            </div>
          </div>

          {/* COMPANY */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              COMPANY
            </p>
            <ul className="space-y-2 text-xs text-brand-silver">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/about#story" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/team" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/work" className="hover:text-white transition-colors">Our Work</Link></li>
              <li><Link to="/insights" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              SERVICES
            </p>
            <ul className="space-y-2 text-xs text-brand-silver">
              <li><Link to="/services#ai-automation" className="hover:text-white transition-colors">AI Automation</Link></li>
              <li><Link to="/services#ai-automation" className="hover:text-white transition-colors">AI Agents</Link></li>
              <li><Link to="/services#business-automation" className="hover:text-white transition-colors">Business Automation</Link></li>
              <li><Link to="/services#crm-automation" className="hover:text-white transition-colors">CRM Automation</Link></li>
              <li><Link to="/services#website-design" className="hover:text-white transition-colors">Website Design</Link></li>
              <li><Link to="/services#tender-support" className="hover:text-white transition-colors">Tender Support</Link></li>
              <li><Link to="/services#creative-ai-media" className="hover:text-white transition-colors">Creative & AI Media</Link></li>
            </ul>
          </div>

          {/* INDUSTRIES */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              INDUSTRIES
            </p>
            <ul className="space-y-2 text-xs text-brand-silver">
              <li><Link to="/industries" className="hover:text-white transition-colors">Home Services</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Real Estate</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Automotive</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Ecommerce</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Professional Services</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Agencies</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              CONTACT
            </p>
            <ul className="space-y-2 text-xs text-brand-silver">
              <li className="text-white font-medium">United Kingdom</li>
              <li className="text-white font-medium">Nigeria</li>
              <li className="text-brand-lime">Worldwide Delivery</li>
              <li><a href="mailto:contact@pinnanclegroup.com" className="hover:text-white transition-colors flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> Email Direct</a></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Office Coordinates</Link></li>
              <li><Link to="/book" className="text-white hover:text-brand-lime transition-colors">Schedule Consultation</Link></li>
            </ul>
          </div>
        </div>

        {/* Phase 18 Bottom Bar */}
        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-brand-silver font-mono">
          <div className="space-y-1">
            <p className="text-white font-semibold">PINNANCLE GROUP</p>
            <p>AI Automation · Digital Systems · Business Technology</p>
            <p className="text-brand-lime">Built between the UK & Nigeria. Delivered worldwide.</p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms</Link>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <span>© 2026 Pinnancle Group</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
