import React from 'react';
import { Home } from 'lucide-react';
import { RangeInput } from '../ui/RangeInput';
import { SelectInput } from '../ui/SelectInput';

interface HomeDetailsProps {
  formData: {
    homeType: string;
    occupants: number;
    monthlyBill: number;
  };
  onChange: (field: string, value: string | number) => void;
  onNext: () => void;
}

export function HomeDetails({ formData, onChange, onNext }: HomeDetailsProps) {
  const homeTypes = [
    { value: 'apartment', label: 'Apartment' },
    { value: 'house', label: 'House' },
    { value: 'villa', label: 'Villa' },
    { value: 'studio', label: 'Studio' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
          <Home className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Home Details</h2>
          <p className="text-gray-600">Tell us about your living space</p>
        </div>
      </div>

      <div className="space-y-6">
        <SelectInput
          label="Home Type"
          value={formData.homeType}
          options={homeTypes}
          onChange={(value) => onChange('homeType', value)}
        />

        <RangeInput
          label="Number of Occupants"
          value={formData.occupants}
          min={1}
          max={10}
          onChange={(value) => onChange('occupants', value)}
          displayValue={`${formData.occupants} ${formData.occupants === 1 ? 'person' : 'people'}`}
        />

        <RangeInput
          label="Average Monthly Electricity Bill (Rs.)"
          value={formData.monthlyBill}
          min={500}
          max={10000}
          step={100}
          onChange={(value) => onChange('monthlyBill', value)}
          displayValue={`₹${formData.monthlyBill.toLocaleString()}`}
        />
      </div>

      <div className="flex justify-end pt-6">
        <button
          onClick={onNext}
          className="px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}