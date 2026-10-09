import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal Component
 * Smoothly reveals content when scrolled into view using high-performance
 * IntersectionObserver with full reduced-motion accessibility and fallback.
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  threshold = 0.08,
  as: Component = 'div',
  ...rest
}) {
  const elementRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Respect user's motion preferences
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    // Fallback if IntersectionObserver is unsupported
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const el = elementRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, [threshold]);

  const delayClass =
    delay === 100
      ? 'reveal-delay-100'
      : delay === 200
      ? 'reveal-delay-200'
      : delay === 300
      ? 'reveal-delay-300'
      : delay === 400
      ? 'reveal-delay-400'
      : delay === 500
      ? 'reveal-delay-500'
      : '';

  return (
    <Component
      ref={elementRef}
      className={`reveal-on-scroll ${isRevealed ? 'is-revealed' : ''} ${delayClass} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Component>
  );
}
