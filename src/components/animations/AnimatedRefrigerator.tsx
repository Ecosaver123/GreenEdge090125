import React from 'react';

export function AnimatedRefrigerator() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 animate-fridge-3d">
      <div className="relative w-full h-full transform-style-3d">
        {/* Front Face */}
        <div className="absolute inset-0 transform-3d preserve-3d">
          <svg
            viewBox="0 0 200 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Main Body */}
            <rect
              x="40"
              y="20"
              width="120"
              height="260"
              rx="10"
              fill="#FFE4B5"
              className="filter drop-shadow-lg"
            />
            
            {/* Freezer Door */}
            <rect
              x="45"
              y="25"
              width="110"
              height="80"
              rx="5"
              fill="#FFF8DC"
              stroke="#DEB887"
              strokeWidth="2"
            />
            
            {/* Freezer Handle */}
            <rect
              x="140"
              y="45"
              width="8"
              height="40"
              rx="2"
              fill="#DEB887"
              className="shadow-md"
            />
            
            {/* Main Door */}
            <rect
              x="45"
              y="115"
              width="110"
              height="160"
              rx="5"
              fill="#FFF8DC"
              stroke="#DEB887"
              strokeWidth="2"
            />
            
            {/* Main Handle */}
            <rect
              x="140"
              y="165"
              width="8"
              height="60"
              rx="2"
              fill="#DEB887"
              className="shadow-md"
            />
            
            {/* Temperature Display */}
            <rect
              x="55"
              y="130"
              width="40"
              height="20"
              rx="3"
              fill="#FFB6C1"
              className="animate-pulse"
            />

            {/* 3D Effect Highlights */}
            <path
              d="M40 20h120"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeOpacity="0.5"
            />
            <path
              d="M160 20v260"
              stroke="#000000"
              strokeWidth="1"
              strokeOpacity="0.1"
            />
          </svg>
        </div>

        {/* Side Face */}
        <div className="absolute top-0 right-0 w-8 h-full origin-right transform rotate-y-90 bg-gradient-to-r from-[#FFE4B5] to-[#DEB887]" />

        {/* Top Face */}
        <div className="absolute top-0 left-0 w-full h-8 origin-top transform rotate-x-90 bg-gradient-to-b from-[#FFE4B5] to-[#DEB887]" />
      </div>
    </div>
  );
}