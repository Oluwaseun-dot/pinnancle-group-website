import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState('default');
  const [cursorLabel, setCursorLabel] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target && typeof e.target.closest === 'function' ? e.target.closest('[data-cursor]') : null;
      if (target) {
        const type = target.getAttribute('data-cursor');
        const label = target.getAttribute('data-cursor-label') || '';
        setCursorType(type || 'default');
        setCursorLabel(label);
      } else {
        setCursorType('default');
        setCursorLabel('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  // Smooth physics interpolation
  useEffect(() => {
    if (isTouchDevice) return;
    let animationFrameId;

    const follow = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.16,
          y: prev.y + dy * 0.16,
        };
      });
      animationFrameId = requestAnimationFrame(follow);
    };

    animationFrameId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  const isInteractive = cursorType !== 'default' || cursorLabel !== '';

  return (
    <>
      {/* Precision center dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            isInteractive
              ? 'w-2 h-2 bg-brand-lime shadow-lime-glow-sm'
              : 'w-2 h-2 bg-white'
          }`}
        />
      </div>

      {/* Trailing Luxury Ring / Badge */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      >
        <div
          className={`flex items-center justify-center rounded-full transition-all duration-300 ease-out border ${
            isInteractive
              ? 'w-28 h-28 bg-brand-black/90 border-brand-lime/80 backdrop-blur-md shadow-lime-glow-sm scale-100'
              : 'w-8 h-8 bg-transparent border-white/25 scale-100'
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
