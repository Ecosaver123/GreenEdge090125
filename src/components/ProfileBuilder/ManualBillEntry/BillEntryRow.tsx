import React from 'react';
import { Trash2, AlertCircle } from 'lucide-react';
import { SelectInput } from '../../ui/SelectInput';
import { NumberInput } from '../../ui/NumberInput';
import { MONTHS, type ManualBillEntry } from '../../../types/manual-bill';

interface BillEntryRowProps {
  entry: ManualBillEntry;
  onChange: (id: string, field: keyof ManualBillEntry, value: string | number) => void;
  onRemove: (id: string) => void;
  errors?: {
    month?: string;
    year?: string;
    consumption?: string;
    amount?: string;
  };
}

export function BillEntryRow({ entry, onChange, onRemove, errors }: BillEntryRowProps) {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => ({
    value: String(currentYear - i),
    label: String(currentYear - i)
  }));

  return (
    <tr className="hover:bg-gray-50">
      <td className="p-2">
        <div className="space-y-1">
          <SelectInput
            label=""
            value={entry.month}
            options={MONTHS}
            onChange={(value) => onChange(entry.id, 'month', value)}
            error={errors?.month}
          />
          {errors?.month && (
            <div className="flex items-center gap-1 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.month}</span>
            </div>
          )}
        </div>
      </td>
      <td className="p-2">
        <div className="space-y-1">
          <SelectInput
            label=""
            value={String(entry.year)}
            options={years}
            onChange={(value) => onChange(entry.id, 'year', Number(value))}
            error={errors?.year}
          />
          {errors?.year && (
            <div className="flex items-center gap-1 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.year}</span>
            </div>
          )}
        </div>
      </td>
      <td className="p-2">
        <div className="space-y-1">
          <NumberInput
            label=""
            value={entry.consumption}
            min={0}
            max={10000}
            step={0.01}
            onChange={(value) => onChange(entry.id, 'consumption', value)}
            error={errors?.consumption}
          />
          {errors?.consumption && (
            <div className="flex items-center gap-1 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.consumption}</span>
            </div>
          )}
        </div>
      </td>
      <td className="p-2">
        <div className="space-y-1">
          <NumberInput
            label=""
            value={entry.amount}
            min={0}
            max={100000}
            step={0.01}
            onChange={(value) => onChange(entry.id, 'amount', value)}
            error={errors?.amount}
          />
          {errors?.amount && (
            <div className="flex items-center gap-1 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.amount}</span>
            </div>
          )}
        </div>
      </td>
      <td className="p-2">
        <button
          onClick={() => onRemove(entry.id)}
          className="text-red-600 hover:text-red-700 p-2 rounded-full hover:bg-red-50"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </td>
    </tr>
  );
}