import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const posRef = useRef({ x: -100, y: -100 });
  const trailingRef = useRef({ x: -100, y: -100 });

  const [cursorType, setCursorType] = useState('default');
  const [cursorLabel, setCursorLabel] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    let animationFrameId;

    const onMouseMove = (e) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      if (!isVisible) setIsVisible(true);

      const target = e.target && typeof e.target.closest === 'function' ? e.target.closest('[data-cursor]') : null;
      if (target) {
        const type = target.getAttribute('data-cursor') || 'default';
        const label = target.getAttribute('data-cursor-label') || '';
        setCursorType(type);
        setCursorLabel(label);
      } else {
        setCursorType('default');
        setCursorLabel('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const follow = () => {
      const dx = posRef.current.x - trailingRef.current.x;
      const dy = posRef.current.y - trailingRef.current.y;
      trailingRef.current.x += dx * 0.18;
      trailingRef.current.y += dy * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${trailingRef.current.x}px, ${trailingRef.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(follow);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    animationFrameId = requestAnimationFrame(follow);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const isInteractive = cursorType !== 'default' || cursorLabel !== '';

  return (
    <>
      {/* Precision center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{ transform: `translate3d(-100px, -100px, 0)` }}
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            isInteractive
              ? 'w-2 h-2 bg-brand-lime shadow-lime-glow-sm'
              : 'w-2 h-2 bg-brand-lime dark:bg-white'
          }`}
        />
      </div>

      {/* Trailing Luxury Ring / Badge */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{ transform: `translate3d(-100px, -100px, 0)` }}
      >
        <div
          className={`flex items-center justify-center rounded-full transition-all duration-200 ease-out border ${
            isInteractive
              ? 'w-24 h-24 sm:w-28 sm:h-28 bg-brand-charcoal/90 border-brand-lime/80 backdrop-blur-md shadow-lime-glow-sm scale-100'
              : 'w-8 h-8 bg-transparent border-slate-400/40 dark:border-white/25 scale-100'
          }`}
        >
          {cursorLabel && (
            <span className="text-[9px] font-mono tracking-widest uppercase text-white font-semibold px-2 text-center select-none animate-fade-in">
              {cursorLabel}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
