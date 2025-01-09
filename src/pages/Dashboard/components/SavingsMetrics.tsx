import React from 'react';
import { TrendingDown, DollarSign, Percent } from 'lucide-react';
import { useProfile } from '../../../store/ProfileContext';

export function SavingsMetrics() {
  const { recommendationsData } = useProfile();
  
  // Calculate annualized savings from monthly potential savings
  const monthlySavings = recommendationsData?.estimatedSavings || 900; // Default to 900 if no data
  const annualizedSavings = monthlySavings * 12;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <TrendingDown className="h-5 w-5 text-emerald-600" />
        <h2 className="text-xl font-semibold text-gray-800">Savings Metrics</h2>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-emerald-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="h-4 w-4 text-emerald-600" />
            <p className="text-sm text-gray-600">Potential Annualized Savings</p>
          </div>
          <p className="text-2xl font-semibold text-gray-900">₹{annualizedSavings.toLocaleString()}</p>
        </div>
        
        <div className="bg-emerald-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Percent className="h-4 w-4 text-emerald-600" />
            <p className="text-sm text-gray-600">Efficiency Gain</p>
          </div>
          <p className="text-2xl font-semibold text-gray-900">15.3%</p>
        </div>
      </div>
    </div>
  );
}