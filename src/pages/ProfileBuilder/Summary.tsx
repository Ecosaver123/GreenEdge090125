import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipboardList, Home, Lightbulb, Receipt, Sparkles, Loader2 } from 'lucide-react';
import { useProfile } from '../../store/ProfileContext';
import { getRecommendations } from '../../services/api/recommendations';

export function Summary() {
  const navigate = useNavigate();
  const { homeData, appliances, manualEntries } = useProfile();
  const [isLoading, setIsLoading] = useState(false);

  // Add null checks and default values
  const validEntries = manualEntries?.filter(entry => entry.consumption != null && entry.amount != null) ?? [];
  const totalConsumption = validEntries.reduce((sum, entry) => sum + (entry.consumption || 0), 0);
  const totalAmount = validEntries.reduce((sum, entry) => sum + (entry.amount || 0), 0);
  const averageMonthlyConsumption = validEntries.length ? totalConsumption / validEntries.length : 0;

  const handleGetRecommendation = async () => {
    setIsLoading(true);
    try {
      const result = await getRecommendations(homeData, appliances, validEntries);
      navigate('/profile/recommendations', { state: { data: result } });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
          <ClipboardList className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Profile Summary</h2>
          <p className="text-gray-600">Overview of your energy profile</p>
        </div>
      </div>

      {/* Home Details Section */}
      <section className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Home className="h-5 w-5 text-emerald-600" />
          <h3 className="text-lg font-semibold text-gray-800">Home Details</h3>
        </div>
        <dl className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <dt className="text-sm text-gray-600">Home Type</dt>
            <dd className="text-lg font-medium text-gray-900 capitalize">{homeData?.homeType || 'Not specified'}</dd>
          </div>
          <div>
            <dt className="text-sm text-gray-600">Occupants</dt>
            <dd className="text-lg font-medium text-gray-900">{homeData?.occupants || 0} people</dd>
          </div>
          <div>
            <dt className="text-sm text-gray-600">Monthly Bill</dt>
            <dd className="text-lg font-medium text-gray-900">₹{(homeData?.monthlyBill || 0).toLocaleString()}</dd>
          </div>
        </dl>
      </section>

      {/* Appliances Section */}
      <section className="bg-white rounded-lg p-6 shadow-sm">
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

      {/* Bill Entries Section */}
      <section className="bg-white rounded-lg p-6 shadow-sm">
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

      {/* Get Recommendation Button */}
      <div className="flex justify-center pt-6">
        <button
          onClick={handleGetRecommendation}
          disabled={isLoading}
          className="flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Getting Recommendations...
            </>
          ) : (
            <>
              <Sparkles className="h-5 w-5" />
              Get Recommendations
            </>
          )}
        </button>
      </div>
    </div>
  );
}