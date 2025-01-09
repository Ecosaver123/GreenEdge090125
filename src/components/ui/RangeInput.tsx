import React from 'react';

interface RangeInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  displayValue: string;
}

export function RangeInput({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  displayValue
}: RangeInputProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <label className="block text-3xl font-bold text-gray-800">
          {label}
        </label>
        <span className="text-xl text-emerald-600 font-medium">
          {displayValue}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
      />
      <div className="flex justify-between text-xs text-gray-500">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}