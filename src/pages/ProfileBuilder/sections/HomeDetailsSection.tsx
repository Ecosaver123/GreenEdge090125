import React from 'react';
import { Home } from 'lucide-react';
import { SelectInput } from '../../../components/ui/SelectInput';
import { RangeInput } from '../../../components/ui/RangeInput';
import type { HomeData } from '../../../types/home';

interface HomeDetailsSectionProps {
  data: HomeData;
  onChange: (data: HomeData) => void;
}

export function HomeDetailsSection({ data, onChange }: HomeDetailsSectionProps) {
  const homeTypes = [
    { value: 'apartment', label: 'Apartment' },
    { value: 'house', label: 'House' },
    { value: 'villa', label: 'Villa' },
    { value: 'studio', label: 'Studio' }
  ];

  const handleChange = (field: keyof HomeData, value: string | number) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  return (
    <section>
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
          value={data.homeType}
          options={homeTypes}
          onChange={(value) => handleChange('homeType', value)}
        />

        <RangeInput
          label="Number of Occupants"
          value={data.occupants}
          min={1}
          max={10}
          onChange={(value) => handleChange('occupants', value)}
          displayValue={`${data.occupants} ${data.occupants === 1 ? 'person' : 'people'}`}
        />

        <RangeInput
          label="Average Monthly Electricity Bill (Rs.)"
          value={data.monthlyBill}
          min={500}
          max={10000}
          step={100}
          onChange={(value) => handleChange('monthlyBill', value)}
          displayValue={`₹${data.monthlyBill.toLocaleString()}`}
        />
      </div>
    </section>
  );
}