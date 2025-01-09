import React from 'react';
import { Trash2 } from 'lucide-react';
import { SelectInput } from '../ui/SelectInput';
import { NumberInput } from '../ui/NumberInput';
import { APPLIANCE_TYPES, LOCATIONS, STAR_RATINGS, type Appliance } from '../../types/appliance';

interface ApplianceTableProps {
  appliances: Appliance[];
  onChangeAppliance: (id: string, field: keyof Omit<Appliance, 'id'>, value: string | number) => void;
  onRemoveAppliance: (id: string) => void;
}

export function ApplianceTable({ appliances, onChangeAppliance, onRemoveAppliance }: ApplianceTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse min-w-[900px]">
        <thead className="bg-gray-50">
          <tr>
            <th className="w-[20%] p-4 text-left text-sm font-semibold text-gray-600 whitespace-nowrap">Appliance</th>
            <th className="w-[20%] p-4 text-left text-sm font-semibold text-gray-600">Location</th>
            <th className="w-[12%] p-4 text-left text-sm font-semibold text-gray-600">Number</th>
            <th className="w-[12%] p-4 text-left text-sm font-semibold text-gray-600 whitespace-nowrap">Age (Years)</th>
            <th className="w-[12%] p-4 text-left text-sm font-semibold text-gray-600 whitespace-nowrap">Daily Usage (Hours)</th>
            <th className="w-[18%] p-4 text-left text-sm font-semibold text-gray-600">Star Rating</th>
            <th className="w-[6%] p-4"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {appliances.map((appliance) => (
            <tr key={appliance.id} className="hover:bg-gray-50">
              <td className="p-4">
                <SelectInput
                  label=""
                  value={appliance.type}
                  options={APPLIANCE_TYPES}
                  onChange={(value) => onChangeAppliance(appliance.id, 'type', value)}
                />
              </td>
              <td className="p-4">
                <SelectInput
                  label=""
                  value={appliance.location}
                  options={LOCATIONS}
                  onChange={(value) => onChangeAppliance(appliance.id, 'location', value)}
                />
              </td>
              <td className="p-4">
                <NumberInput
                  label=""
                  value={appliance.quantity}
                  min={1}
                  max={99}
                  onChange={(value) => onChangeAppliance(appliance.id, 'quantity', value)}
                />
              </td>
              <td className="p-4">
                <NumberInput
                  label=""
                  value={appliance.age}
                  min={1}
                  max={10}
                  onChange={(value) => onChangeAppliance(appliance.id, 'age', value)}
                />
              </td>
              <td className="p-4">
                <NumberInput
                  label=""
                  value={appliance.dailyUsage}
                  min={1}
                  max={24}
                  onChange={(value) => onChangeAppliance(appliance.id, 'dailyUsage', value)}
                />
              </td>
              <td className="p-4">
                <SelectInput
                  label=""
                  value={appliance.starRating}
                  options={STAR_RATINGS}
                  onChange={(value) => onChangeAppliance(appliance.id, 'starRating', value)}
                />
              </td>
              <td className="p-4">
                <button
                  onClick={() => onRemoveAppliance(appliance.id)}
                  className="text-red-600 hover:text-red-700 p-2 rounded-full hover:bg-red-50"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}