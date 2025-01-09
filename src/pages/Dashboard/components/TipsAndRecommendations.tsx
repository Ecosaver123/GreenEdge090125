import React from 'react';
import { Sparkles } from 'lucide-react';

const tips = [
  {
    title: "Optimize AC Temperature",
    description: "Set your AC to 24°C for optimal efficiency and comfort"
  },
  {
    title: "Smart Lighting Usage",
    description: "Replace regular bulbs with LED lights to save up to 80% energy"
  },
  {
    title: "Appliance Maintenance",
    description: "Regular cleaning of AC filters can improve efficiency by 15%"
  }
];

export function TipsAndRecommendations() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="h-5 w-5 text-emerald-600" />
        <h2 className="text-xl font-semibold text-gray-800">Energy Saving Tips</h2>
      </div>
      
      <div className="space-y-4">
        {tips.map((tip, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-1">{tip.title}</h3>
            <p className="text-sm text-gray-600">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}