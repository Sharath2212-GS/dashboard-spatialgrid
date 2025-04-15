import React from 'react';

// 3D Assets Icon with animation
export const Asset3DIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="24" height="24">
    <defs>
      <filter id="glow3d" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    <g filter="url(#glow3d)">
      <path 
        d="M12 2L2 6v12l10 4 10-4V6L12 2z" 
        fill="none" 
        stroke="#4dabf7" 
        strokeWidth="1.5"
      >
        <animate 
          attributeName="stroke-dasharray" 
          values="0,100;100,0" 
          dur="2s" 
          repeatCount="indefinite" 
        />
      </path>
      <path 
        d="M12 2v16M2 6l10 4 10-4" 
        fill="none" 
        stroke="#4dabf7" 
        strokeWidth="1.5"
      >
        <animate 
          attributeName="stroke-dashoffset" 
          values="50;0" 
          dur="1.5s" 
          repeatCount="indefinite" 
        />
        <animate 
          attributeName="stroke-dasharray" 
          values="50,50;0,100" 
          dur="1.5s" 
          repeatCount="indefinite" 
        />
      </path>
      <circle cx="12" cy="12" r="1" fill="#4dabf7">
        <animate 
          attributeName="r" 
          values="1;2;1" 
          dur="1s" 
          repeatCount="indefinite" 
        />
      </circle>
    </g>
  </svg>
);

// Templates Icon with animation
export const TemplateIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="24" height="24">
    <rect 
      x="3" 
      y="3" 
      width="18" 
      height="18" 
      rx="2" 
      fill="none" 
      stroke="#4dabf7" 
      strokeWidth="1.5"
    >
      <animate 
        attributeName="stroke-dasharray" 
        values="0,100;100,0" 
        dur="2s" 
        repeatCount="indefinite" 
      />
    </rect>
    <line 
      x1="3" 
      y1="9" 
      x2="21" 
      y2="9" 
      stroke="#4dabf7" 
      strokeWidth="1.5"
    >
      <animate 
        attributeName="stroke-dasharray" 
        values="0,18;18,0" 
        dur="1.5s" 
        repeatCount="indefinite" 
      />
    </line>
    <rect 
      x="6" 
      y="12" 
      width="12" 
      height="2" 
      rx="1" 
      fill="#4dabf7"
    >
      <animate 
        attributeName="width" 
        values="12;10;12" 
        dur="1s" 
        repeatCount="indefinite" 
      />
    </rect>
    <rect 
      x="6" 
      y="16" 
      width="8" 
      height="2" 
      rx="1" 
      fill="#4dabf7"
    >
      <animate 
        attributeName="width" 
        values="8;6;8" 
        dur="1s" 
        repeatCount="indefinite" 
      />
    </rect>
  </svg>
);

// Scenes Icon with animation
export const SceneIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="24" height="24">
    <defs>
      <linearGradient id="sceneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4dabf7">
          <animate 
            attributeName="stop-color" 
            values="#4dabf7;#38d9a9;#4dabf7" 
            dur="3s" 
            repeatCount="indefinite" 
          />
        </stop>
        <stop offset="100%" stopColor="#38d9a9">
          <animate 
            attributeName="stop-color" 
            values="#38d9a9;#4dabf7;#38d9a9" 
            dur="3s" 
            repeatCount="indefinite" 
          />
        </stop>
      </linearGradient>
    </defs>
    
    <path 
      d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" 
      fill="none" 
      stroke="url(#sceneGradient)" 
      strokeWidth="1.5"
    />
    <path 
      d="M2 10h20M2 14h20" 
      stroke="url(#sceneGradient)" 
      strokeWidth="1.5" 
      strokeDasharray="22"
    >
      <animate 
        attributeName="stroke-dashoffset" 
        values="22;0" 
        dur="2s" 
        repeatCount="indefinite" 
      />
    </path>
    <circle cx="12" cy="12" r="3" fill="none" stroke="url(#sceneGradient)" strokeWidth="1.5">
      <animate 
        attributeName="r" 
        values="3;4;3" 
        dur="1.5s" 
        repeatCount="indefinite" 
      />
    </circle>
  </svg>
);

// Image Icon with animation
export const ImageIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="24" height="24">
    <rect 
      x="3" 
      y="3" 
      width="18" 
      height="18" 
      rx="2" 
      fill="none" 
      stroke="#4dabf7" 
      strokeWidth="1.5"
    >
      <animate 
        attributeName="stroke-dasharray" 
        values="0,72;72,0" 
        dur="2s" 
        repeatCount="indefinite" 
      />
    </rect>
    <circle cx="8.5" cy="8.5" r="1.5" fill="#4dabf7">
      <animate 
        attributeName="r" 
        values="1.5;2;1.5" 
        dur="1s" 
        repeatCount="indefinite" 
      />
    </circle>
    <polyline 
      points="21,15 16,10 5,21" 
      fill="none" 
      stroke="#4dabf7" 
      strokeWidth="1.5"
    >
      <animate 
        attributeName="stroke-dasharray" 
        values="0,30;30,0" 
        dur="1.5s" 
        repeatCount="indefinite" 
      />
    </polyline>
  </svg>
);

// Video Icon with animation
export const VideoIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="24" height="24">
    <rect 
      x="2" 
      y="4" 
      width="20" 
      height="16" 
      rx="2" 
      fill="none" 
      stroke="#4dabf7" 
      strokeWidth="1.5"
    >
      <animate 
        attributeName="stroke-dasharray" 
        values="0,72;72,0" 
        dur="2s" 
        repeatCount="indefinite" 
      />
    </rect>
    <polygon 
      points="10,8 16,12 10,16" 
      fill="#4dabf7"
    >
      <animate 
        attributeName="opacity" 
        values="1;0.8;1" 
        dur="1s" 
        repeatCount="indefinite" 
      />
    </polygon>
  </svg>
);

// Audio Icon with animation
export const AudioIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="24" height="24">
    <path 
      d="M12 3v18M8 8v8M16 8v8M4 10v4M20 10v4" 
      stroke="#4dabf7" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    >
      <animate 
        attributeName="stroke-dasharray" 
        values="1,3;3,1" 
        dur="0.5s" 
        repeatCount="indefinite" 
      />
    </path>
    <circle cx="12" cy="12" r="10" stroke="#4dabf7" fill="none" strokeWidth="0.5" opacity="0.5">
      <animate 
        attributeName="r" 
        values="10;11;10" 
        dur="1s" 
        repeatCount="indefinite" 
      />
    </circle>
  </svg>
);

// Text Icon with animation
export const TextIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="24" height="24">
    <path 
      d="M4 6h16M4 12h16M4 18h10" 
      stroke="#4dabf7" 
      strokeWidth="2" 
      strokeLinecap="round"
    >
      <animate 
        attributeName="stroke-dasharray" 
        values="0,20;20,0" 
        dur="2s" 
        repeatCount="indefinite" 
      />
    </path>
    <circle cx="18" cy="18" r="2" fill="#4dabf7">
      <animate 
        attributeName="r" 
        values="2;1.5;2" 
        dur="1s" 
        repeatCount="indefinite" 
      />
    </circle>
  </svg>
);

// Vector Icon with animation
export const VectorIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="24" height="24">
    <path 
      d="M5,5 L19,5 L19,19 L5,19 Z" 
      fill="none" 
      stroke="#4dabf7" 
      strokeWidth="1.5" 
    >
      <animate 
        attributeName="stroke-dasharray" 
        values="0,56;56,0" 
        dur="2s" 
        repeatCount="indefinite" 
      />
    </path>
    <path 
      d="M12,5 L12,19 M5,12 L19,12" 
      stroke="#4dabf7" 
      strokeWidth="1.5" 
      strokeDasharray="28"
    >
      <animate 
        attributeName="stroke-dashoffset" 
        values="28;0" 
        dur="1.5s" 
        repeatCount="indefinite" 
      />
    </path>
    <circle cx="12" cy="12" r="2" fill="#4dabf7">
      <animate 
        attributeName="r" 
        values="2;3;2" 
        dur="1s" 
        repeatCount="indefinite" 
      />
    </circle>
  </svg>
);

// Sprites Icon with animation
export const SpriteIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="24" height="24">
    <rect 
      x="3" 
      y="3" 
      width="7" 
      height="7" 
      fill="none" 
      stroke="#4dabf7" 
      strokeWidth="1.5"
    >
      <animate 
        attributeName="stroke-dasharray" 
        values="0,28;28,0" 
        dur="2s" 
        repeatCount="indefinite" 
      />
    </rect>
    <rect 
      x="14" 
      y="3" 
      width="7" 
      height="7" 
      fill="none" 
      stroke="#4dabf7" 
      strokeWidth="1.5"
    >
      <animate 
        attributeName="stroke-dasharray" 
        values="0,28;28,0" 
        dur="2s" 
        delay="0.2s" 
        repeatCount="indefinite" 
      />
    </rect>
    <rect 
      x="3" 
      y="14" 
      width="7" 
      height="7" 
      fill="none" 
      stroke="#4dabf7" 
      strokeWidth="1.5"
    >
      <animate 
        attributeName="stroke-dasharray" 
        values="0,28;28,0" 
        dur="2s" 
        delay="0.4s" 
        repeatCount="indefinite" 
      />
    </rect>
    <rect 
      x="14" 
      y="14" 
      width="7" 
      height="7" 
      fill="none" 
      stroke="#4dabf7" 
      strokeWidth="1.5"
    >
      <animate 
        attributeName="stroke-dasharray" 
        values="0,28;28,0" 
        dur="2s" 
        delay="0.6s" 
        repeatCount="indefinite" 
      />
    </rect>
  </svg>
);