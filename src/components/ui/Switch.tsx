import React, { useState, useEffect } from 'react';
import { useProfile } from '../../store/ProfileContext';

export function Switch() {
  const { isSwitchOn, setIsSwitchOn } = useProfile();

  useEffect(() => {
    document.body.style.backgroundColor = isSwitchOn ? '#2F8F83' : '#000000';
    document.body.style.transition = 'background-color 300ms ease-in-out';
    document.body.classList.toggle('switch-off', !isSwitchOn);
    
    return () => {
      document.body.style.backgroundColor = '';
      document.body.classList.remove('switch-off');
    };
  }, [isSwitchOn]);

  return (
    <div className={`relative w-64 h-96 bg-white rounded-lg shadow-lg border-4 border-gray-200 flex flex-col items-center p-4 transition-all duration-300 ${isSwitchOn ? 'static-glow' : ''}`}>
      {/* Screws */}
      <div className="absolute top-3 left-3 w-2 h-2 bg-gray-400 rounded-full" />
      <div className="absolute top-3 right-3 w-2 h-2 bg-gray-400 rounded-full" />
      <div className="absolute bottom-3 left-3 w-2 h-2 bg-gray-400 rounded-full" />
      <div className="absolute bottom-3 right-3 w-2 h-2 bg-gray-400 rounded-full" />
      
      {/* ON text */}
      <span className={`text-3xl font-bold mb-4 transition-colors duration-300 ${isSwitchOn ? 'text-[#FFC107]' : 'text-gray-400'}`}>ON</span>
      
      {/* Switch Container */}
      <div className="w-24 h-40 bg-gray-200 relative rounded overflow-hidden shadow-inner">
        {/* Switch Track */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-gray-200" />
        
        {/* Gold Bar */}
        <div
          className={`absolute w-full h-3/4 transition-all duration-300 cursor-pointer transform-gpu
            ${isSwitchOn ? 'top-0' : 'bottom-0'}
          `}
          onClick={() => setIsSwitchOn(!isSwitchOn)}
        >
          {/* Button Face */}
          <div className={`absolute inset-0 bg-[#FFC107] rounded-t-md shadow-lg transform-gpu transition-all duration-300`}>
            {/* Top Edge */}
            <div className="absolute -top-2 left-0 right-0 h-2 bg-[#FFD54F] rounded-t-md" />
            
            {/* Left Edge */}
            <div className="absolute top-0 -left-2 w-2 h-full bg-[#FFB300] rounded-l-md" />
            
            {/* Right Edge */}
            <div className="absolute top-0 -right-2 w-2 h-full bg-[#FFB300] rounded-r-md" />
            
            {/* Bottom Edge */}
            <div className="absolute -bottom-2 left-0 right-0 h-2 bg-[#FFA000]" />
            
            {/* Button Face Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFC107] to-[#FFB300] rounded-t-md" />
          </div>
        </div>
      </div>
      
      {/* OFF text */}
      <span className={`text-3xl font-bold mt-4 transition-colors duration-300 ${isSwitchOn ? 'text-gray-400' : 'text-gray-800'}`}>OFF</span>
    </div>
  );
}