import React from 'react';
import { FileText } from 'lucide-react';
import type { BillAnalysisResult } from '../../services/api/openai';

interface BillAnalysisProps {
  results: BillAnalysisResult[];
}

export function BillAnalysis({ results }: BillAnalysisProps) {
  if (!results.length) return null;

  return (
    <div className="mt-4 space-y-4">
      <div className="flex items-center gap-2">
        <FileText className="h-5 w-5 text-emerald-600" />
        <h4 className="text-lg font-medium text-gray-800">Analysis Results</h4>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-600">DATE</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">YEAR</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">MONTH</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">CONSUMPTION (KWH)</th>
              <th className="px-4 py-2 text-left font-medium text-gray-600">AMOUNT</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {results.map((result, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2">{result.date}</td>
                <td className="px-4 py-2">{result.year}</td>
                <td className="px-4 py-2">{result.month}</td>
                <td className="px-4 py-2">{result.consumption === 0 ? '#N/A' : result.consumption}</td>
                <td className="px-4 py-2">₹{result.amount === 0 ? '#N/A' : result.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}