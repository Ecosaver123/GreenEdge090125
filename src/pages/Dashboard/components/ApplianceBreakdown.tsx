import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Lightbulb } from 'lucide-react';

const mockData = [
  { name: 'AC', value: 45, color: '#4361EE' }, // Cool blue for AC
  { name: 'Refrigerator', value: 25, color: '#F72585' }, // Vibrant pink for Refrigerator
  { name: 'Lighting', value: 15, color: '#FFB703' }, // Warm yellow for Lighting
  { name: 'Others', value: 15, color: '#7209B7' }, // Deep purple for Others
];

export function ApplianceBreakdown() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <Lightbulb className="h-5 w-5 text-emerald-600" />
        <h2 className="text-xl font-semibold text-gray-800">Appliance Usage Breakdown</h2>
      </div>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={mockData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {mockData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                  stroke="white"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
              formatter={(value: number) => [`${value}%`, '']}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              iconType="circle"
              formatter={(value) => (
                <span className="text-sm text-gray-700">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}