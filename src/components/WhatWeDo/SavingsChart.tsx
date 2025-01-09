import React from 'react';

export function SavingsChart() {
  return (
    <div className="relative w-full h-full">
      <svg 
        width="100%" 
        height="100%" 
        className="absolute inset-0"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Animated gradient definitions */}
          <linearGradient id="leftToRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#333333">
              <animate
                attributeName="offset"
                values="-1; 2"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#FFB300">
              <animate
                attributeName="offset"
                values="-0.5; 2.5"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#333333">
              <animate
                attributeName="offset"
                values="0; 3"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          <linearGradient id="rightToLeft" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#333333">
              <animate
                attributeName="offset"
                values="-1; 2"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#FFB300">
              <animate
                attributeName="offset"
                values="-0.5; 2.5"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#333333">
              <animate
                attributeName="offset"
                values="0; 3"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>

        {/* Left Electrical Pole */}
        <line x1="100" y1="200" x2="100" y2="800" stroke="#333333" strokeWidth="40" />
        <rect x="50" y="150" width="100" height="40" fill="#333333" />
        <rect x="50" y="300" width="100" height="40" fill="#333333" />
        <rect x="50" y="450" width="100" height="40" fill="#333333" />

        {/* Right Electrical Pole */}
        <line x1="900" y1="200" x2="900" y2="800" stroke="#333333" strokeWidth="40" />
        <rect x="850" y="150" width="100" height="40" fill="#333333" />
        <rect x="850" y="300" width="100" height="40" fill="#333333" />
        <rect x="850" y="450" width="100" height="40" fill="#333333" />

        {/* Animated Wires */}
        {/* First wire - Left to Right */}
        <path
          d="M 100 150 C 350 200, 650 200, 900 150"
          fill="none"
          stroke="url(#leftToRight)"
          strokeWidth="8"
        />

        {/* Second wire - Right to Left */}
        <path
          d="M 100 300 C 350 350, 650 350, 900 300"
          fill="none"
          stroke="url(#rightToLeft)"
          strokeWidth="8"
        />

        {/* Third wire - Left to Right */}
        <path
          d="M 100 450 C 350 500, 650 500, 900 450"
          fill="none"
          stroke="url(#leftToRight)"
          strokeWidth="8"
        />
      </svg>

      {/* Fading edges overlay */}
      <div className="absolute inset-0" style={{
        background: `
          linear-gradient(to right, #f8f3e7 0%, transparent 10%, transparent 90%, #f8f3e7 100%),
          linear-gradient(to bottom, #f8f3e7 0%, transparent 10%, transparent 90%, #f8f3e7 100%)
        `
      }} />
    </div>
  );
}