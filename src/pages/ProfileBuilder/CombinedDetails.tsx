import React, { useState } from 'react';
import { useProfile } from '../../store/ProfileContext';
import { ApplianceDetailsSection } from './sections/ApplianceDetailsSection';
import { BillUpload } from '../../components/ProfileBuilder/BillUpload';
import { Sparkles } from 'lucide-react';
import type { Appliance } from '../../types/appliance';
import type { HomeData } from '../../types/home';
import type { ManualBillEntry } from '../../types/manual-bill';

interface CombinedDetailsProps {
  onNext: (homeData: HomeData, appliances: Appliance[], entries: ManualBillEntry[]) => void;
}

export function CombinedDetails({ onNext }: CombinedDetailsProps) {
  const { homeData: contextHomeData, appliances: contextAppliances } = useProfile();
  
  const [homeData] = useState<HomeData>({
    homeType: contextHomeData?.homeType || '',
    occupants: contextHomeData?.occupants || 2,
    monthlyBill: contextHomeData?.monthlyBill || 2000,
  });

  const [appliances, setAppliances] = useState<Appliance[]>(
    contextAppliances?.length ? contextAppliances : [{
      id: '1',
      type: '',
      location: '',
      quantity: 1,
      age: 1,
      dailyUsage: 1,
      starRating: '',
    }]
  );

  const [manualEntries, setManualEntries] = useState<ManualBillEntry[]>([]);

  const handleGetRecommendations = () => {
    onNext(homeData, appliances, manualEntries);
  };

  return (
    <div className="max-w-[1400px] mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">BUILD YOUR PROFILE</h1>
      <div className="space-y-12">
        <div>
          <ApplianceDetailsSection 
            appliances={appliances}
            onChange={setAppliances}
          />
        </div>

        <div>
          <BillUpload onGetSummary={setManualEntries} />
        </div>

        <div className="flex justify-center pt-8 border-t border-gray-100">
          <button
            onClick={handleGetRecommendations}
            className="flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <Sparkles className="h-5 w-5" />
            Get Recommendations
          </button>
        </div>
      </div>
    </div>
  );
}