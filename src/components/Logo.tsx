import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <svg
      viewBox="0 0 50 50"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <g fill="url(#logoGradient)">
        {/* Stylized 'A' and 'E' with upward arrow motif */}
        <path d="M25 5 L40 45 L30 45 L27 38 L23 38 L20 45 L10 45 L25 5 Z" />
        <path d="M23 22 L33 22 L32 18 L22 18 L23 22 Z" />
        <path d="M43 15 L43 45 L30 45 L30 40 L38 40 L38 35 L32 35 L32 30 L38 30 L38 25 L32 25 L32 20 L38 20 L38 15 L43 15 Z" />
        <path d="M25 0 L30 10 L20 10 L25 0 Z" />
      </g>
    </svg>
  );
};

export default Logo;