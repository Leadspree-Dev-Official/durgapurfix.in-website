import React from 'react';

interface DurgapurFixLogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  theme?: 'light' | 'dark'; // 'light' bg (dark text) or 'dark' bg (light/white text)
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const DurgapurFixLogo: React.FC<DurgapurFixLogoProps> = ({
  className = '',
  variant = 'full',
  theme = 'light',
  size = 'md'
}) => {
  // Color tokens based on logo brand guide
  const navyColor = theme === 'dark' ? '#FFFFFF' : '#0B2038';
  const navyEmblem = '#0B2038';
  const orangeColor = '#F97316';
  const whiteBg = '#FFFFFF';

  // Size mappings
  const dimensions = {
    sm: { icon: 'w-7 h-7', text: 'text-base', subtext: 'text-[8px]', gap: 'gap-2' },
    md: { icon: 'w-10 h-10', text: 'text-xl', subtext: 'text-[10px]', gap: 'gap-3' },
    lg: { icon: 'w-14 h-14', text: 'text-2xl', subtext: 'text-xs', gap: 'gap-3.5' },
    xl: { icon: 'w-20 h-20', text: 'text-4xl', subtext: 'text-sm', gap: 'gap-4' },
  }[size];

  // SVG Icon Emblem of Durgapur Fix (Location Pin + Factory Skyline + Orange Wrench Tip)
  const LogoIcon = (
    <svg
      viewBox="0 0 500 500"
      className={`${dimensions.icon} shrink-0`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Navy Location Pin Base */}
      <path
        d="M 230 40 C 130 40 60 110 60 210 C 60 290 130 360 230 440 L 230 440 Z"
        fill={navyEmblem}
      />

      {/* Inner White Shield/Cutout for Industrial Skyline */}
      <path
        d="M 230 70 C 150 70 95 125 95 205 C 95 270 150 330 230 395 C 230 395 240 380 250 360 C 230 360 150 280 150 200 C 150 140 185 95 230 95 Z"
        fill={whiteBg}
      />

      {/* Industrial Skyline inside White Cutout (Navy Blue Silhouette) */}
      <g fill={navyEmblem}>
        {/* Factory main body */}
        <rect x="135" y="220" width="110" height="70" rx="2" />
        <rect x="150" y="180" width="35" height="110" rx="2" />
        
        {/* Factory Windows */}
        <rect x="165" y="235" width="12" height="12" fill={whiteBg} />
        <rect x="185" y="235" width="12" height="12" fill={whiteBg} />
        <rect x="205" y="235" width="12" height="12" fill={whiteBg} />
        <rect x="165" y="255" width="12" height="12" fill={whiteBg} />
        <rect x="185" y="255" width="12" height="12" fill={whiteBg} />
        <rect x="205" y="255" width="12" height="12" fill={whiteBg} />

        {/* Tall Chimney Tower with Striped Top */}
        <rect x="180" y="115" width="16" height="70" />
        {/* Red/Orange stripes on Chimney */}
        <rect x="180" y="125" width="16" height="8" fill="#DC2626" />
        <rect x="180" y="141" width="16" height="8" fill="#DC2626" />

        {/* Water Tower Structure */}
        <rect x="220" y="175" width="22" height="24" rx="4" />
        <path d="M 223 199 L 218 240 M 239 199 L 244 240 M 220 220 L 242 220" stroke={navyEmblem} strokeWidth="3" />
        
        {/* Pipe / Curved duct */}
        <path d="M 245 155 Q 265 155 265 210 L 265 290" fill="none" stroke={navyEmblem} strokeWidth="12" strokeLinecap="round" />

        {/* Birds in the Sky */}
        <path d="M 210 110 Q 215 105 220 110 Q 225 105 230 110" fill="none" stroke={navyEmblem} strokeWidth="3" strokeLinecap="round" />
        <path d="M 235 90 Q 240 85 245 90 Q 250 85 255 90" fill="none" stroke={navyEmblem} strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Right & Bottom Orange Wrench / Pin Accent Curve */}
      <path
        d="M 230 40 C 290 40 330 80 330 135 C 330 155 295 155 275 155 C 275 180 280 260 205 350 L 240 440 C 340 330 380 250 380 145 C 380 80 320 40 230 40 Z"
        fill={orangeColor}
      />

      {/* Orange Pin Tip Extension with Hole */}
      <path
        d="M 230 440 L 205 350 C 230 390 240 410 240 440 Z"
        fill={orangeColor}
      />
      
      {/* Circle Hole at Bottom Pin Tip */}
      <circle cx="230" cy="380" r="18" fill={whiteBg} />
    </svg>
  );

  if (variant === 'icon') {
    return <div className={`inline-flex items-center ${className}`}>{LogoIcon}</div>;
  }

  return (
    <div className={`inline-flex items-center ${dimensions.gap} ${className}`}>
      {LogoIcon}
      
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center tracking-tight font-black font-sans">
          <span className={`${dimensions.text}`} style={{ color: navyColor }}>
            DURGAPUR
          </span>
          <span className={`${dimensions.text} ml-1.5`} style={{ color: orangeColor }}>
            FIX
          </span>
        </div>
        
        <div className={`flex items-center space-x-1 font-bold tracking-widest mt-1 opacity-90 ${dimensions.subtext}`} style={{ color: navyColor }}>
          <span>FIND</span>
          <span className="text-amber-500">•</span>
          <span>CONNECT</span>
          <span className="text-amber-500">•</span>
          <span>GET IT FIXED</span>
        </div>
      </div>
    </div>
  );
};
