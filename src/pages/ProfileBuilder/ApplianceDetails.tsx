import React, { useState } from 'react';
import { Lightbulb, Plus } from 'lucide-react';
import { ApplianceTable } from '../../components/ProfileBuilder/ApplianceTable';
import type { Appliance } from '../../types/appliance';

interface ApplianceDetailsProps {
  onNext: () => void;
}

export function ApplianceDetails({ onNext }: ApplianceDetailsProps) {
  const [appliances, setAppliances] = useState<Appliance[]>([
    {
      id: '1',
      type: '',
      location: '',
      quantity: 1,
      age: 1,
      dailyUsage: 1,
      starRating: '',
    },
  ]);

  const handleChange = (id: string, field: keyof Omit<Appliance, 'id'>, value: string | number) => {
    setAppliances(prev =>
      prev.map(appliance =>
        appliance.id === id ? { ...appliance, [field]: value } : appliance
      )
    );
  };

  const handleAdd = () => {
    setAppliances(prev => [
      ...prev,
      {
        id: String(Date.now()),
        type: '',
        location: '',
        quantity: 1,
        age: 1,
        dailyUsage: 1,
        starRating: '',
      },
    ]);
  };

  const handleRemove = (id: string) => {
    if (appliances.length > 1) {
      setAppliances(prev => prev.filter(appliance => appliance.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
          <Lightbulb className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Appliance Details</h2>
          <p className="text-gray-600">Tell us about your appliances</p>
        </div>
      </div>

      <ApplianceTable
        appliances={appliances}
        onChangeAppliance={handleChange}
        onRemoveAppliance={handleRemove}
      />

      <div className="flex justify-between pt-6">
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 px-4 py-2 text-emerald-600 hover:text-emerald-700 transition-colors"
        >
          <Plus className="h-5 w-5" />
          Add Another Appliance
        </button>

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