import React from 'react';

interface NumberInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  error?: string;
}

export function NumberInput({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  error
}: NumberInputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm
          ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
    </div>
  );
}