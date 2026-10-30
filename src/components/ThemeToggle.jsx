import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '', compact = false, showLabel = false }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      role="switch"
      aria-checked={isDark}
      className={`group relative inline-flex items-center gap-1.5 p-1 rounded-full border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime select-none cursor-pointer ${
        isDark
          ? 'bg-brand-card/90 border-brand-border text-brand-silver hover:text-white hover:border-brand-lime/40'
          : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-sm'
      } ${className}`}
    >
      {/* Sun (Light Mode indicator) */}
      <span
        className={`flex items-center justify-center rounded-full transition-all duration-300 ${
          compact ? 'w-6 h-6' : 'w-7 h-7'
        } ${
          !isDark
            ? 'bg-white text-amber-500 shadow-sm'
            : 'text-brand-silver/50 group-hover:text-brand-silver'
        }`}
      >
        <Sun className={compact ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
      </span>

      {/* Moon (Dark Mode indicator) */}
      <span
        className={`flex items-center justify-center rounded-full transition-all duration-300 ${
          compact ? 'w-6 h-6' : 'w-7 h-7'
        } ${
          isDark
            ? 'bg-brand-dark text-brand-lime shadow-sm'
            : 'text-slate-400 group-hover:text-slate-600'
        }`}
      >
        <Moon className={compact ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
      </span>

      {showLabel && (
        <span className="text-xs font-mono pr-2 font-medium">
          {isDark ? 'Dark' : 'Light'}
        </span>
      )}
    </button>
  );
}
