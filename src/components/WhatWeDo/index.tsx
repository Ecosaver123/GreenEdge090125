import React, { useState, useEffect } from 'react';
import { StepItem } from './StepItem';
import { SavingsChart } from './SavingsChart';
import { SavingsCalculator } from '../calculator/SavingsCalculator';
import { EnergyHabitsCarousel } from '../carousel/EnergyHabitsCarousel';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const STEPS = [
  {
    title: "Share Your Details",
    description: "Tell us about your appliances and monthly electricity bill. We'll use this info to understand your specific consumption patterns."
  },
  {
    title: "Get Analysis & Recommendations",
    description: "Our system pinpoints where you're overspending and provides appliance-specific tips—like adjusting AC settings or switching to LED bulbs."
  },
  {
    title: "Save & Invest",
    description: "Watch your bill go down as you follow our tips, and automatically channel every rupee saved into gold investments."
  }
];

export function WhatWeDo() {
  const [litBulbs, setLitBulbs] = useState<boolean[]>(Array(STEPS.length).fill(false));
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.2
  });

  useEffect(() => {
    if (isVisible) {
      const intervals = STEPS.map((_, index) => {
        return setTimeout(() => {
          setLitBulbs(prev => {
            const next = [...prev];
            next[index] = true;
            return next;
          });
        }, index * 1000);
      });

      return () => intervals.forEach(clearTimeout);
    } else {
      setLitBulbs(Array(STEPS.length).fill(false));
    }
  }, [isVisible]);

  return (
    <>
      <div id="what-we-do" className="h-screen flex flex-col bg-[#f8f3e7]">
        <section ref={ref} className="flex-1">
          <div className="max-w-[1400px] mx-auto px-6 py-12">
            <div className="grid grid-cols-2 gap-12 h-[65vh]">
              {/* Left side - Chart Space */}
              <div className="h-full flex items-center">
                <SavingsChart />
              </div>

              {/* Right side - Steps */}
              <div className="flex flex-col justify-center">
                <h2 className="font-['League_Spartan'] text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.02em] leading-[1.1] mb-4">
                  <span className="text-[#2F8F83]">WHAT WE </span>
                  <span className="text-[#FFC107]">DO</span>
                </h2>
                <p className="text-[#56756c] text-lg mb-8 max-w-xl font-['League_Spartan']">
                  Our systematic approach to helping you save energy and reduce costs
                </p>
                <div className="space-y-6">
                  {STEPS.map((step, index) => (
                    <StepItem
                      key={index}
                      step={index + 1}
                      title={step.title}
                      description={step.description}
                      isLit={litBulbs[index]}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <EnergyHabitsCarousel />
      </div>
      <SavingsCalculator />
    </>
  );
}