import React from 'react';
import { Plus } from 'lucide-react';
import { BillEntryRow } from './BillEntryRow';
import type { ManualBillEntry } from '../../../types/manual-bill';

interface ManualBillTableProps {
  entries: ManualBillEntry[];
  onAddEntry: () => void;
  onChangeEntry: (id: string, field: keyof ManualBillEntry, value: string | number) => void;
  onRemoveEntry: (id: string) => void;
  errors?: {
    month?: string;
    year?: string;
    consumption?: string;
    amount?: string;
  };
}

export function ManualBillTable({
  entries,
  onAddEntry,
  onChangeEntry,
  onRemoveEntry,
  errors
}: ManualBillTableProps) {
  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-2 text-left text-sm font-semibold text-gray-600">Month</th>
              <th className="p-2 text-left text-sm font-semibold text-gray-600">Year</th>
              <th className="p-2 text-left text-sm font-semibold text-gray-600">Consumption (kWh)</th>
              <th className="p-2 text-left text-sm font-semibold text-gray-600">Amount (₹)</th>
              <th className="p-2 text-left text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {entries.map(entry => (
              <BillEntryRow
                key={entry.id}
                entry={entry}
                onChange={onChangeEntry}
                onRemove={onRemoveEntry}
                errors={errors}
              />
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={onAddEntry}
        className="flex items-center gap-2 px-4 py-2 text-emerald-600 hover:text-emerald-700 transition-colors"
      >
        <Plus className="h-5 w-5" />
        Add Another Entry
      </button>
    </div>
  );
}