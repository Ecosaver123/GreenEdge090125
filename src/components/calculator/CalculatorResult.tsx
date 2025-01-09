import React from 'react';

interface CalculatorResultProps {
  result: {
    totalInvestment: number;
    totalInterest: number;
    finalAmount: number;
  };
  duration: number;
  monthlySavings: number;
}

const GOLD_RATE_PER_GRAM = 7900; // ₹7,900 per gram

export function CalculatorResult({ result, duration, monthlySavings }: CalculatorResultProps) {
  const goldGrams = result.finalAmount / GOLD_RATE_PER_GRAM;

  return (
    <div className="space-y-12">
      <div className="bg-emerald-50/90 p-12 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold text-gray-800 mb-8">Projected Returns</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div>
              <p className="text-lg text-gray-600 mb-1">Total Investment</p>
              <p className="text-3xl font-bold text-gray-800">₹{result.totalInvestment.toLocaleString()}</p>
            </div>
            
            <div>
              <p className="text-lg text-gray-600 mb-1">Interest Earned</p>
              <p className="text-3xl font-bold text-emerald-600">₹{result.totalInterest.toLocaleString()}</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-lg text-gray-600 mb-1">Final Amount</p>
              <p className="text-4xl font-bold text-gray-800">₹{result.finalAmount.toLocaleString()}</p>
            </div>
            
            <div>
              <p className="text-lg text-gray-600 mb-1">Gold Equivalent</p>
              <p className="text-4xl font-bold text-[#FFB300]">{goldGrams.toFixed(2)} grams</p>
              <p className="text-sm text-gray-500 mt-1">At ₹{GOLD_RATE_PER_GRAM.toLocaleString()}/gram</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50/90 p-8 rounded-2xl shadow-lg">
        <p className="text-lg text-gray-600">
          By investing ₹{monthlySavings.toLocaleString()} monthly for {duration} months, 
          you could grow your savings to ₹{result.finalAmount.toLocaleString()}, 
          equivalent to {goldGrams.toFixed(2)} grams of gold.
        </p>
      </div>
    </div>
  );
}