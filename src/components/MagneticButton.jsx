import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function MagneticButton({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // 'primary', 'secondary', 'ghost', 'lime'
  className = '',
  size = 'md', // 'sm', 'md', 'lg'
  icon = null,
  showArrow = false,
  disabled = false,
  type = 'button',
  ...props
}) {
  const buttonRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (disabled || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    // Controlled magnetic pull
    setOffset({ x: x * 0.18, y: y * 0.18 });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setOffset({ x: 0, y: 0 });
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3.5 text-sm',
    lg: 'px-8 py-4.5 text-base',
  }[size];

  // Exactly following Section 31 rules:
  // Primary: White background / black text. Hover: Black background / white text + subtle lime glow.
  // Dark sections: White border / white text. Hover: Lime accent.
  const variantClasses = {
    primary:
      'bg-brand-white text-black font-semibold border border-transparent hover:bg-brand-black hover:text-white hover:border-brand-lime hover:shadow-lime-glow-sm',
    secondary:
      'bg-brand-charcoal text-white border border-brand-border hover:border-brand-lime hover:text-white hover:shadow-lime-glow-sm',
    ghost:
      'bg-transparent text-brand-offWhite border border-white/20 hover:border-brand-lime hover:text-white',
    lime:
      'bg-brand-lime text-black font-semibold border border-brand-lime hover:bg-black hover:text-brand-lime hover:shadow-lime-glow-sm',
    white:
      'bg-brand-white text-black font-semibold border border-transparent hover:bg-brand-black hover:text-white hover:border-brand-lime hover:shadow-lime-glow-sm'
  }[variant];

  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2 tracking-tight">
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-brand-lime" />
      )}
      {icon && (
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </span>
  );

  const combinedClasses = `group relative inline-flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 ease-out select-none active:scale-[0.98] ${sizeClasses} ${variantClasses} ${className}`;

  const style = {
    transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
  };

  if (to) {
    return (
      <Link
        to={to}
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={style}
        className={combinedClasses}
        {...props}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={style}
        className={combinedClasses}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      ref={buttonRef}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
