import React, { useState } from 'react';
import { Receipt } from 'lucide-react';
import type { Bill } from '../../types/bill';
import type { ManualBillEntry } from '../../types/manual-bill';
import { BillUploadSection } from './BillUpload/BillUploadSection';
import { ManualEntrySection } from './BillUpload/ManualEntrySection';
import { useProfile } from '../../store/ProfileContext';

interface BillUploadProps {
  onGetSummary: (entries: ManualBillEntry[]) => void;
}

export function BillUpload({ onGetSummary }: BillUploadProps) {
  const [bills, setBills] = useState<Bill[]>([]);
  const [manualEntries, setManualEntries] = useState<ManualBillEntry[]>([{
    id: '1',
    month: '',
    year: new Date().getFullYear(),
    consumption: 0,
    amount: 0
  }]);
  
  const { addBillEntry } = useProfile();

  const handleGetSummary = () => {
    const validEntries = manualEntries.filter(entry => 
      entry.month && entry.year && (entry.consumption > 0 || entry.amount > 0)
    );
    
    // Add valid entries to the global state
    validEntries.forEach(entry => {
      addBillEntry(entry);
    });
    
    onGetSummary(validEntries);
  };

  return (
    <div className="space-y-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
          <Receipt className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Upload Bills</h2>
          <p className="text-gray-600">Upload your electricity bills for AI-powered analysis</p>
        </div>
      </div>

      <BillUploadSection bills={bills} onBillsChange={setBills} />
      
      <ManualEntrySection 
        entries={manualEntries} 
        onEntriesChange={setManualEntries} 
      />

      <div className="flex justify-end">
        <button
          onClick={handleGetSummary}
          className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
        >
          Confirm Details
        </button>
      </div>
    </div>
  );
}