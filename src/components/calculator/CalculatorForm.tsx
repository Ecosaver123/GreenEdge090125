import React from 'react';
import { RangeInput } from '../ui/RangeInput';

interface CalculatorFormProps {
  monthlySavings: number;
  duration: number;
  interestRate: number;
  onMonthlySavingsChange: (value: number) => void;
  onDurationChange: (value: number) => void;
  onInterestRateChange: (value: number) => void;
}

export function CalculatorForm({
  monthlySavings,
  duration,
  interestRate,
  onMonthlySavingsChange,
  onDurationChange,
  onInterestRateChange,
}: CalculatorFormProps) {
  return (
    <div className="space-y-12 bg-gray-50/90 p-12 rounded-2xl shadow-lg">
      <RangeInput
        label="Monthly Savings"
        value={monthlySavings}
        min={50}
        max={5000}
        step={50}
        onChange={onMonthlySavingsChange}
        displayValue={`₹${monthlySavings.toLocaleString()}`}
      />

      <RangeInput
        label="Duration"
        value={duration}
        min={6}
        max={60}
        step={6}
        onChange={onDurationChange}
        displayValue={`${duration} months`}
      />

      <RangeInput
        label="Annual Interest Rate"
        value={interestRate}
        min={1}
        max={100}
        step={1}
        onChange={onInterestRateChange}
        displayValue={`${interestRate}%`}
      />
    </div>
  );
}