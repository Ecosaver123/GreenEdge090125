import React from 'react';
import { Lightbulb } from 'lucide-react';
import { GlowingText } from './GlowingText';

interface StepItemProps {
  step: number;
  title: string;
  description: string;
  isLit: boolean;
}

export function StepItem({ step, title, description, isLit }: StepItemProps) {
  return (
    <div className="flex items-start gap-4 font-['League_Spartan']">
      <div className={`transition-colors duration-500 ${isLit ? 'text-yellow-400' : 'text-gray-400'}`}>
        <Lightbulb className="w-10 h-10" />
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-[#56756c] mb-3">
          Step {step}: <GlowingText text={title} isActive={isLit} />
        </h3>
        <p className="text-xl text-[#56756c] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}