import React, { useState, useMemo, useRef } from 'react';
import { Calculator } from 'lucide-react';
import { CalculatorForm } from './CalculatorForm';
import { CalculatorResult } from './CalculatorResult';
import { calculateCompoundInterest } from '../../utils/calculator';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export function SavingsCalculator() {
  const [monthlySavings, setMonthlySavings] = useState(1000);
  const [duration, setDuration] = useState(12);
  const [interestRate, setInterestRate] = useState(12);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollProgress = useScrollProgress(sectionRef);

  const result = useMemo(() => {
    return calculateCompoundInterest(monthlySavings, duration, interestRate);
  }, [monthlySavings, duration, interestRate]);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center"
      style={{ backgroundColor: '#2F8F83' }}
    >
      <div className="max-w-[1400px] w-full mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-16">
          <Calculator className="h-12 w-12 text-[#5dfd81]" />
          <div>
            <h2 className="font-['League_Spartan'] text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.02em] leading-[1.1] mb-4">
              <span className="text-[#E6E6DC]">SAVINGS</span>
              <span className="text-[#FFC107]">CALCULATOR</span>
            </h2>
            <p className="text-xl text-[#E6E6DC] font-['League_Spartan']">
              See how your monthly savings can grow over time
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <CalculatorForm
            monthlySavings={monthlySavings}
            duration={duration}
            interestRate={interestRate}
            onMonthlySavingsChange={setMonthlySavings}
            onDurationChange={setDuration}
            onInterestRateChange={setInterestRate}
          />
          <CalculatorResult 
            result={result} 
            duration={duration} 
            monthlySavings={monthlySavings} 
          />
        </div>
      </div>
    </section>
  );
}