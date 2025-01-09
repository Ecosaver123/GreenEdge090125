import React from 'react';
import { DashboardLayout } from './DashboardLayout';
import { UsageOverview } from './components/UsageOverview';
import { SavingsMetrics } from './components/SavingsMetrics';
import { ApplianceBreakdown } from './components/ApplianceBreakdown';
import { TipsAndRecommendations } from './components/TipsAndRecommendations';
import { ConsumptionChart } from '../../components/ProfileBuilder/ConsumptionChart';
import { useProfile } from '../../store/ProfileContext';
import { Lightbulb, Receipt } from 'lucide-react';

export function Dashboard() {
  const { manualEntries, appliances } = useProfile();

  // Calculate consumption history metrics
  const validEntries = manualEntries?.filter(entry => entry.consumption != null && entry.amount != null) ?? [];
  const totalConsumption = validEntries.reduce((sum, entry) => sum + (entry.consumption || 0), 0);
  const totalAmount = validEntries.reduce((sum, entry) => sum + (entry.amount || 0), 0);
  const averageMonthlyConsumption = validEntries.length ? totalConsumption / validEntries.length : 0;

  return (
    <DashboardLayout>
      {/* Appliances Section */}
      <section className="bg-white rounded-lg p-6 shadow-sm mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="h-5 w-5 text-emerald-600" />
          <h3 className="text-lg font-semibold text-gray-800">Appliances ({appliances?.length || 0})</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left">Type</th>
                <th className="px-4 py-2 text-left">Location</th>
                <th className="px-4 py-2 text-left">Quantity</th>
                <th className="px-4 py-2 text-left">Daily Usage</th>
                <th className="px-4 py-2 text-left">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {appliances?.map(appliance => (
                <tr key={appliance.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 capitalize">{appliance.type || 'Not specified'}</td>
                  <td className="px-4 py-2 capitalize">{appliance.location || 'Not specified'}</td>
                  <td className="px-4 py-2">{appliance.quantity || 0}</td>
                  <td className="px-4 py-2">{appliance.dailyUsage || 0} hours</td>
                  <td className="px-4 py-2">{appliance.starRating || 'Not specified'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Consumption History Section */}
      <section className="bg-white rounded-lg p-6 shadow-sm mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Receipt className="h-5 w-5 text-emerald-600" />
          <h3 className="text-lg font-semibold text-gray-800">Consumption History</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Total Consumption</p>
            <p className="text-2xl font-semibold text-gray-900">{totalConsumption.toLocaleString()} kWh</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Total Amount</p>
            <p className="text-2xl font-semibold text-gray-900">₹{totalAmount.toLocaleString()}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Average Monthly Consumption</p>
            <p className="text-2xl font-semibold text-gray-900">{averageMonthlyConsumption.toFixed(2)} kWh</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Months Recorded</p>
            <p className="text-2xl font-semibold text-gray-900">{validEntries.length}</p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left">Month</th>
                <th className="px-4 py-2 text-left">Year</th>
                <th className="px-4 py-2 text-left">Consumption (kWh)</th>
                <th className="px-4 py-2 text-left">Amount (₹)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {validEntries.map(entry => (
                <tr key={entry.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{entry.month || 'N/A'}</td>
                  <td className="px-4 py-2">{entry.year || 'N/A'}</td>
                  <td className="px-4 py-2">{(entry.consumption || 0).toLocaleString()}</td>
                  <td className="px-4 py-2">₹{(entry.amount || 0).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Consumption Charts */}
      {manualEntries && manualEntries.length > 0 && (
        <div className="mb-6">
          <ConsumptionChart data={manualEntries} />
        </div>
      )}

      {/* Other Dashboard Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UsageOverview />
        <SavingsMetrics />
        <ApplianceBreakdown />
        <TipsAndRecommendations />
      </div>
    </DashboardLayout>
  );
}