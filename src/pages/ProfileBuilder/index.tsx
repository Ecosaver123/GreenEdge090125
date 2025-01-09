import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CombinedDetails } from './CombinedDetails';
import { RecommendationsResult } from './RecommendationsResult';
import { ProfileLayout } from './ProfileLayout';
import { useProfile } from '../../store/ProfileContext';
import type { Appliance } from '../../types/appliance';
import type { HomeData } from '../../types/home';
import type { ManualBillEntry } from '../../types/manual-bill';

interface HomeFormData {
  homeType: string;
  occupants: number;
  monthlyBill: number;
}

export function ProfileBuilder() {
  const navigate = useNavigate();
  const { setHomeData, setAppliances, setManualEntries } = useProfile();

  const handleCombinedNext = (homeData: HomeFormData, appliances: Appliance[], entries: ManualBillEntry[]) => {
    setHomeData(homeData);
    setAppliances(appliances);
    setManualEntries(entries);
    navigate('/profile/recommendations');
  };

  return (
    <Routes>
      <Route element={<ProfileLayout />}>
        <Route index element={<CombinedDetails onNext={handleCombinedNext} />} />
        <Route path="recommendations" element={<RecommendationsResult />} />
      </Route>
    </Routes>
  );
}