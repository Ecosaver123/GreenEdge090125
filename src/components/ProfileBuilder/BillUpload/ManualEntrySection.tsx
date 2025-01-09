import React from 'react';
import { PenLine } from 'lucide-react';
import type { ManualBillEntry } from '../../../types/manual-bill';
import { ManualBillTable } from '../ManualBillEntry/ManualBillTable';
import { useBillEntryValidation } from '../../../hooks/useBillEntryValidation';
import { useProfile } from '../../../store/ProfileContext';

interface ManualEntrySectionProps {
  entries: ManualBillEntry[];
  onEntriesChange: (entries: ManualBillEntry[]) => void;
}

export function ManualEntrySection({ entries, onEntriesChange }: ManualEntrySectionProps) {
  const { addBillEntry, updateBillEntry, removeBillEntry } = useProfile();
  const { errors, validateEntry, clearErrors } = useBillEntryValidation();

  const handleAddEntry = () => {
    const newEntry: ManualBillEntry = {
      id: Date.now().toString(),
      month: '',
      year: new Date().getFullYear(),
      consumption: 0,
      amount: 0
    };
    
    onEntriesChange([...entries, newEntry]);
    clearErrors();
  };

  const handleChangeEntry = (id: string, field: keyof ManualBillEntry, value: string | number) => {
    const updatedEntries = entries.map(entry =>
      entry.id === id ? { ...entry, [field]: value } : entry
    );
    
    const updatedEntry = updatedEntries.find(entry => entry.id === id);
    if (updatedEntry) {
      validateEntry(updatedEntry);
      updateBillEntry(id, { [field]: value });
    }
    
    onEntriesChange(updatedEntries);
  };

  const handleRemoveEntry = (id: string) => {
    if (entries.length > 1) {
      removeBillEntry(id);
      onEntriesChange(entries.filter(entry => entry.id !== id));
      clearErrors();
    }
  };

  return (
    <section className="pt-8 border-t border-gray-100">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
          <PenLine className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Manual Entry</h3>
          <p className="text-gray-600">Add your bill details manually</p>
        </div>
      </div>

      <ManualBillTable
        entries={entries}
        onAddEntry={handleAddEntry}
        onChangeEntry={handleChangeEntry}
        onRemoveEntry={handleRemoveEntry}
        errors={errors}
      />
    </section>
  );
}