import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Zap } from 'lucide-react';
import { useProfile } from '../../../store/ProfileContext';

export function UsageOverview() {
  const { manualEntries } = useProfile();

  // Sort entries by date and get the latest entry
  const sortedEntries = [...(manualEntries || [])].sort((a, b) => {
    const monthOrder = { 
      'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6,
      'July': 7, 'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12 
    };
    return a.year !== b.year 
      ? a.year - b.year 
      : monthOrder[a.month as keyof typeof monthOrder] - monthOrder[b.month as keyof typeof monthOrder];
  });

  const latestEntry = sortedEntries[sortedEntries.length - 1];

  // Generate future months with growth and potential savings
  const generateFutureData = (startEntry: typeof sortedEntries[0], count: number) => {
    if (!startEntry) return [];

    const monthOrder = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const startMonthIndex = monthOrder.indexOf(startEntry.month);
    const result = [];
    
    // Add the starting point (latest actual data)
    result.push({
      name: `${startEntry.month.slice(0, 3)} ${startEntry.year}`,
      usage: startEntry.consumption,
      projected: startEntry.consumption,
      potentialSavings: startEntry.consumption
    });

    // Generate future points
    let currentConsumption = startEntry.consumption;
    let potentialSavings = startEntry.consumption;
    let currentYear = startEntry.year;
    let currentMonthIndex = startMonthIndex;

    for (let i = 0; i < count; i++) {
      currentMonthIndex++;
      if (currentMonthIndex >= 12) {
        currentMonthIndex = 0;
        currentYear++;
      }
      
      currentConsumption *= 1.05; // 5% increase
      potentialSavings *= 0.95; // 5% decrease
      
      result.push({
        name: `${monthOrder[currentMonthIndex].slice(0, 3)} ${currentYear}`,
        usage: null,
        projected: Math.round(currentConsumption),
        potentialSavings: Math.round(potentialSavings)
      });
    }
    
    return result;
  };

  // Generate chart data starting from latest entry
  const chartData = latestEntry ? generateFutureData(latestEntry, 4) : [];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <Zap className="h-5 w-5 text-emerald-600" />
        <h2 className="text-xl font-semibold text-gray-800">Energy Usage Overview</h2>
      </div>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <defs>
              <filter id="subtleGlow">
                <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '0.375rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            />
            <Line
              type="monotone"
              dataKey="usage"
              name="Actual Usage"
              stroke="#059669"
              strokeWidth={2}
              dot={{ fill: '#059669', r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="projected"
              name="Projected Usage"
              stroke="#6b7280"
              strokeDasharray="5 5"
              strokeWidth={2}
              dot={{ fill: '#6b7280', r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="potentialSavings"
              name="Potential Savings"
              stroke="rgba(255, 215, 0, 0.6)"
              strokeWidth={2}
              dot={{ fill: 'rgba(255, 215, 0, 0.6)', r: 4 }}
              filter="url(#subtleGlow)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 text-sm text-gray-500 text-center">
        * Projected values show estimated 5% month-over-month growth
        <br />
        * Potential savings show estimated 5% month-over-month reduction
      </div>
    </div>
  );
}