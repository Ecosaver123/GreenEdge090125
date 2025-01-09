import React from 'react';
import { Zap, Coins, Lightbulb } from 'lucide-react';

export function WhyGreenEdge() {
  return (
    <section className="min-h-screen bg-[#f8f3e7] flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAzMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptLTE4LTE1YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2eiIgc3Ryb2tlPSIjMkY4RjgzIiBzdHJva2Utb3BhY2l0eT0iLjUiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] bg-repeat opacity-50"></div>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 py-16 relative">
        <div className="text-center mb-20">
          <h2 className="hero-title text-6xl md:text-7xl lg:text-8xl mb-6">
            <span className="text-[#2F8F83] block leading-[1.1]">WHY</span>
            <span className="text-[#FFC107] block leading-[1.1]">GREENEDGE</span>
          </h2>
          <p className="text-xl text-[#56756c] max-w-2xl mx-auto font-['League_Spartan']">
            Transforming energy challenges into opportunities for a sustainable future
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Card 1: Energy Usage */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl transform rotate-1 transition-transform group-hover:rotate-2"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg transform transition-transform group-hover:-translate-y-2">
              <div className="absolute -top-6 left-6">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 w-12 h-12 rounded-lg flex items-center justify-center transform -rotate-6 shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="pt-6">
                <h3 className="font-['League_Spartan'] text-4xl font-bold text-gray-800 mb-8">Energy Usage</h3>
                <div className="space-y-8 font-['League_Spartan']">
                  <div>
                    <h4 className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm mb-3">Challenge</h4>
                    <p className="text-gray-700 text-xl">Rising costs and unclear usage.</p>
                  </div>
                  <div>
                    <h4 className="inline-block bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm mb-3">Solution</h4>
                    <p className="text-gray-700 text-xl">Identify overspending and reduce energy use.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Savings Growth */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFC107] to-amber-500 rounded-2xl transform -rotate-1 transition-transform group-hover:-rotate-2"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg transform transition-transform group-hover:-translate-y-2">
              <div className="absolute -top-6 left-6">
                <div className="bg-gradient-to-r from-[#FFC107] to-amber-500 w-12 h-12 rounded-lg flex items-center justify-center transform rotate-6 shadow-lg">
                  <Coins className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="pt-6">
                <h3 className="font-['League_Spartan'] text-4xl font-bold text-gray-800 mb-8">Savings Growth</h3>
                <div className="space-y-8 font-['League_Spartan']">
                  <div>
                    <h4 className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm mb-3">Challenge</h4>
                    <p className="text-gray-700 text-xl">Small savings disappear into daily expenses.</p>
                  </div>
                  <div>
                    <h4 className="inline-block bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm mb-3">Solution</h4>
                    <p className="text-gray-700 text-xl">Every rupee saved on your electricity bill, combined with the power of compounding, transforms into a growing reserve of wealth—effortlessly and over time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Energy Guidance */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl transform rotate-1 transition-transform group-hover:rotate-2"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg transform transition-transform group-hover:-translate-y-2">
              <div className="absolute -top-6 left-6">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 w-12 h-12 rounded-lg flex items-center justify-center transform -rotate-6 shadow-lg">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="pt-6">
                <h3 className="font-['League_Spartan'] text-4xl font-bold text-gray-800 mb-8">Energy Guidance</h3>
                <div className="space-y-8 font-['League_Spartan']">
                  <div>
                    <h4 className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm mb-3">Challenge</h4>
                    <p className="text-gray-700 text-xl">No clear guidance for energy savings.</p>
                  </div>
                  <div>
                    <h4 className="inline-block bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm mb-3">Solution</h4>
                    <p className="text-gray-700 text-xl">Get simple, actionable energy tips.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}