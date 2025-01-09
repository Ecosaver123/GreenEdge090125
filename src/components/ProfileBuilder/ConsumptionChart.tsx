import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import type { ManualBillEntry } from '../../types/manual-bill';

interface ConsumptionChartProps {
  data: ManualBillEntry[];
}

export function ConsumptionChart({ data }: ConsumptionChartProps) {
  const chartData = data
    .sort((a, b) => {
      // Sort by year and month
      if (a.year !== b.year) return a.year - b.year;
      const monthOrder = { January: 1, February: 2, March: 3, April: 4, May: 5, June: 6,
                          July: 7, August: 8, September: 9, October: 10, November: 11, December: 12 };
      return monthOrder[a.month as keyof typeof monthOrder] - monthOrder[b.month as keyof typeof monthOrder];
    })
    .map(entry => ({
      name: `${entry.month.slice(0, 3)} ${entry.year}`,
      consumption: entry.consumption,
      amount: entry.amount
    }));

  return (
    <div className="space-y-8">
      {/* Consumption Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h4 className="text-lg font-medium text-gray-800 mb-4">Monthly Consumption Trend</h4>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="name" 
                stroke="#6b7280"
                tick={{ fill: '#6b7280' }}
              />
              <YAxis 
                yAxisId="left" 
                stroke="#6b7280"
                tick={{ fill: '#6b7280' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.375rem'
                }}
              />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="consumption"
                name="Consumption (kWh)"
                stroke="#059669"
                strokeWidth={2}
                dot={{ fill: '#059669', r: 4 }}
                activeDot={{ r: 6, fill: '#059669' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Amount Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h4 className="text-lg font-medium text-gray-800 mb-4">Monthly Bill Amount</h4>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="name" 
                stroke="#6b7280"
                tick={{ fill: '#6b7280' }}
              />
              <YAxis 
                stroke="#6b7280"
                tick={{ fill: '#6b7280' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.375rem'
                }}
              />
              <Legend />
              <Bar
                dataKey="amount"
                name="Amount (₹)"
                fill="#0891b2"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}