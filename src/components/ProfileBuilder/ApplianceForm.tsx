import React from 'react';
import { SelectInput } from '../ui/SelectInput';
import { NumberInput } from '../ui/NumberInput';
import { APPLIANCE_TYPES, LOCATIONS, STAR_RATINGS, type Appliance } from '../../types/appliance';

interface ApplianceFormProps {
  appliance: Omit<Appliance, 'id'>;
  onChange: (field: keyof Omit<Appliance, 'id'>, value: string | number) => void;
  onRemove: () => void;
}

export function ApplianceForm({ appliance, onChange, onRemove }: ApplianceFormProps) {
  return (
    <div className="grid grid-cols-6 gap-4 p-4 bg-gray-50 rounded-lg">
      <div className="col-span-6 sm:col-span-1">
        <SelectInput
          label="Appliance"
          value={appliance.type}
          options={APPLIANCE_TYPES}
          onChange={(value) => onChange('type', value)}
        />
      </div>
      
      <div className="col-span-6 sm:col-span-1">
        <SelectInput
          label="Location"
          value={appliance.location}
          options={LOCATIONS}
          onChange={(value) => onChange('location', value)}
        />
      </div>
      
      <div className="col-span-6 sm:col-span-1">
        <NumberInput
          label="Number"
          value={appliance.quantity}
          min={1}
          max={99}
          onChange={(value) => onChange('quantity', value)}
        />
      </div>
      
      <div className="col-span-6 sm:col-span-1">
        <NumberInput
          label="Age (Years)"
          value={appliance.age}
          min={1}
          max={10}
          onChange={(value) => onChange('age', value)}
        />
      </div>
      
      <div className="col-span-6 sm:col-span-1">
        <NumberInput
          label="Daily Usage (Hours)"
          value={appliance.dailyUsage}
          min={1}
          max={24}
          onChange={(value) => onChange('dailyUsage', value)}
        />
      </div>
      
      <div className="col-span-6 sm:col-span-1">
        <SelectInput
          label="Star Rating"
          value={appliance.starRating}
          options={STAR_RATINGS}
          onChange={(value) => onChange('starRating', value)}
        />
      </div>
      
      <button
        onClick={onRemove}
        className="col-span-6 text-red-600 hover:text-red-700 text-sm font-medium"
      >
        Remove
      </button>
    </div>
  );
}