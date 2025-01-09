import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatedGoldText } from './AnimatedGoldText';
import { scrollToSection } from '../utils/scroll';
import { Switch } from './ui/Switch';

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero-bg pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 items-center min-h-[800px]">
          {/* Left side content */}
          <div className="text-left pr-8">
            <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl mb-6">
              <span className="text-[#E6E6DC] block leading-[1.1]">TURN</span>
              <span className="text-[#FFC107] block leading-[1.1]">ENERGY</span>
              <span className="text-[#FFC107] block leading-[1.1]">SAVINGS</span>
              <span className="text-[#E6E6DC] block leading-[1.1]">INTO</span>
              <span className="text-[#E6E6DC] block leading-[1.1]">
                <AnimatedGoldText />
              </span>
            </h1>
            <p className="text-xl text-[#FFFFFF] max-w-xl mb-8">
              Identify top energy drains in your home, cut your bill, and plug those extra Rupees into gold investments
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => navigate('/profile')}
                className="bg-[#FFC107] text-[#0B3B2D] px-8 py-3 rounded-lg hover:bg-[#FFB300] transition-colors font-bold text-lg"
              >
                Start your Journey
              </button>
              <button 
                onClick={() => scrollToSection('what-we-do')}
                className="border-2 border-[#FFC107] text-[#FFC107] px-8 py-3 rounded-lg hover:bg-[#FFB300] hover:text-white hover:border-[#FFB300] transition-colors font-bold text-lg"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right side - Switch */}
          <div className="flex items-center justify-end h-[700px] pr-24">
            <Switch />
          </div>
        </div>
      </div>
    </div>
  );
}