import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Lightbulb, Rocket } from 'lucide-react';
import { useProfile } from '../../store/ProfileContext';

export function RecommendationsResult() {
  const { recommendationsData, setRecommendationsData } = useProfile();
  
  if (!recommendationsData) {
    return null;
  }

  const { baseline, recommendations, estimatedSavings } = recommendationsData;

  // Store recommendations data when viewing results
  React.useEffect(() => {
    setRecommendationsData(recommendationsData);
  }, [recommendationsData, setRecommendationsData]);

  const categoryIcons = {
    easy: <Zap className="h-5 w-5 text-emerald-600" />,
    steady: <Lightbulb className="h-5 w-5 text-emerald-600" />,
    big: <Rocket className="h-5 w-5 text-emerald-600" />
  };

  return (
    <div className="space-y-8">
      <Link to="/profile/summary" className="flex items-center text-emerald-600 hover:text-emerald-700">
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Summary
      </Link>

      {/* Baseline Usage */}
      <section className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Current Usage Baseline</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Monthly Consumption</p>
            <p className="text-2xl font-semibold text-gray-900">{baseline.consumption.toFixed(2)} kWh</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Monthly Cost</p>
            <p className="text-2xl font-semibold text-gray-900">₹{baseline.cost.toLocaleString()}</p>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Personalized Recommendations</h2>
        <div className="space-y-6">
          {recommendations.map((rec, index) => (
            <div key={index} className="border border-gray-100 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                {categoryIcons[rec.category]}
                <h3 className="text-lg font-medium text-gray-800">{rec.title}</h3>
              </div>
              <p className="text-gray-600 mb-2">{rec.description}</p>
              <p className="text-sm text-emerald-600 font-medium">
                Potential Savings: ₹{rec.potentialSavings.toLocaleString()} per month
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Total Savings */}
      <section className="bg-emerald-50 rounded-lg p-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Total Potential Savings</h2>
          <p className="text-3xl font-bold text-emerald-600">₹{estimatedSavings.toLocaleString()}</p>
          <p className="text-gray-600">per month</p>
        </div>
      </section>
    </div>
  );
}