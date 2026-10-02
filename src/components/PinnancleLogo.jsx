import React from 'react';

/**
 * PinnancleLogo
 * Bespoke geometric monogram combining the letter 'P' with a soaring Mountain Pinnacle / Summit.
 * 
 * Design Geometry:
 * - Left vertical pillar: The solid foundation of the letter P.
 * - Upper bowl: An architectural mountain peak rising to a razor-sharp summit (the pinnacle),
 *   folding down the eastern ridge and looping into the central stem.
 * - Ridge crease: Faceted light/shadow surfaces giving 3D alpine depth.
 * - Summit vertex: Precision electric lime (#ccff00) accent at the apex, representing highest achievement.
 */
export default function PinnancleLogo({
  size = 'md',
  showWordmark = false,
  wordmarkSubtitle = 'AI & SYSTEMS',
  className = '',
  iconOnly = false
}) {
  // Dimensions map
  const sizeMap = {
    xs: { icon: 'w-6 h-6', text: 'text-sm', sub: 'text-[7px]' },
    sm: { icon: 'w-8 h-8', text: 'text-base', sub: 'text-[8px]' },
    md: { icon: 'w-10 h-10', text: 'text-lg', sub: 'text-[9px]' },
    lg: { icon: 'w-12 h-12', text: 'text-xl', sub: 'text-[10px]' },
    xl: { icon: 'w-16 h-16', text: 'text-2xl', sub: 'text-[11px]' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  const IconSVG = (
    <div className={`relative ${currentSize.icon} shrink-0 flex items-center justify-center group/logo`}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_4px_12px_rgba(204,255,0,0.12)] transition-transform duration-300 group-hover/logo:scale-105"
      >
        <defs>
          {/* Subtle dark metallic base */}
          <linearGradient id="pg-bg-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#141414" />
            <stop offset="1" stopColor="#080808" />
          </linearGradient>

          {/* Sunlit mountain facet (pure crisp white to platinum) */}
          <linearGradient id="pg-sunlit-facet" x1="14" y1="6" x2="27" y2="25" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#CBD5E1" />
          </linearGradient>

          {/* Shadowed mountain facet (metallic silver to slate charcoal) */}
          <linearGradient id="pg-shadow-facet" x1="27" y1="6" x2="39" y2="25" gradientUnits="userSpaceOnUse">
            <stop stopColor="#94A3B8" />
            <stop offset="1" stopColor="#475569" />
          </linearGradient>

          {/* Electric Lime summit glow */}
          <linearGradient id="pg-summit-glow" x1="23" y1="4" x2="31" y2="12" gradientUnits="userSpaceOnUse">
            <stop stopColor="#CCFF00" />
            <stop offset="1" stopColor="#84CC16" />
          </linearGradient>
        </defs>

        {/* Outer Squircle Container with subtle technical border */}
        <rect
          x="1"
          y="1"
          width="46"
          height="46"
          rx="12"
          fill="url(#pg-bg-gradient)"
          stroke="#262626"
          strokeWidth="1.25"
        />

        {/* Stem of the P: The Pillar / Bedrock foundation */}
        <rect
          x="10.5"
          y="11"
          width="5.5"
          height="26"
          rx="2.75"
          fill="#FFFFFF"
        />

        {/* 
          Mountain Pinnacle P-Loop (The Summit & Bowl):
          Left/Sunlit Face: Rising from the stem up the western ridge to the summit apex at (27, 7)
        */}
        <path
          d="M16 11L27 7V25H16V11Z"
          fill="url(#pg-sunlit-facet)"
        />

        {/* 
          Right/Shadowed Face: Cascading from the summit down the eastern ridge and sweeping into the lower bowl of the P
        */}
        <path
          d="M27 7L38 15.5C39 16.3 39.5 17.5 39.5 18.8C39.5 22.2 36.8 25 33.4 25H27V7Z"
          fill="url(#pg-shadow-facet)"
        />

        {/* 
          Inner Negative Mountain Peak / Cave:
          Creates the hollow inside the letter 'P' while forming an inverted secondary alpine summit
        */}
        <path
          d="M16 16.5L25 13L32 18C32.5 18.5 32 19.5 31.2 19.5H16V16.5Z"
          fill="#0B0B0B"
        />

        {/* Mountain Ridge Razor Crease (The Dividing Ridge between faces) */}
        <line
          x1="27"
          y1="7"
          x2="27"
          y2="25"
          stroke="#0A0A0A"
          strokeWidth="1"
          strokeLinecap="round"
        />

        {/* 
          The Pinnacle Summit Peak Accent:
          Electric Lime (#ccff00) marker at the highest point of the mountain
        */}
        <polygon
          points="27,4.5 30,8.5 27,10 24,8.5"
          fill="url(#pg-summit-glow)"
          className="drop-shadow-[0_0_6px_rgba(204,255,0,0.8)]"
        />
        
        {/* Subtle sub-stem technical notch */}
        <circle cx="13.25" cy="32" r="1" fill="#CCFF00" />
      </svg>
    </div>
  );

  if (iconOnly || !showWordmark) {
    return IconSVG;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {IconSVG}
      <div className="flex flex-col">
        <span className={`font-display font-bold tracking-tight text-white group-hover:text-brand-lime transition-colors leading-none ${currentSize.text}`}>
          PINNANCLE
        </span>
        <span className={`font-mono tracking-widest uppercase text-brand-silver mt-1 opacity-75 leading-none ${currentSize.sub}`}>
          GROUP · {wordmarkSubtitle}
        </span>
      </div>
    </div>
  );
}
