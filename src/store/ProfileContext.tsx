import React, { createContext, useContext, useState, useCallback } from 'react';
import type { Appliance } from '../types/appliance';
import type { ManualBillEntry } from '../types/manual-bill';
import type { RecommendationResponse } from '../types/recommendations';
import { validateBillEntry } from '../types/validation';

interface HomeData {
  homeType: string;
  occupants: number;
  monthlyBill: number;
}

interface ProfileContextType {
  homeData: HomeData;
  setHomeData: (data: HomeData) => void;
  appliances: Appliance[];
  setAppliances: (appliances: Appliance[]) => void;
  manualEntries: ManualBillEntry[];
  addBillEntry: (entry: ManualBillEntry) => boolean;
  updateBillEntry: (id: string, entry: Partial<ManualBillEntry>) => boolean;
  removeBillEntry: (id: string) => void;
  recommendationsData: RecommendationResponse | null;
  setRecommendationsData: (data: RecommendationResponse) => void;
  isSwitchOn: boolean;
  setIsSwitchOn: (isOn: boolean) => void;
}

const initialHomeData: HomeData = {
  homeType: '',
  occupants: 2,
  monthlyBill: 2000,
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [homeData, setHomeData] = useState<HomeData>(initialHomeData);
  const [appliances, setAppliances] = useState<Appliance[]>([]);
  const [manualEntries, setManualEntries] = useState<ManualBillEntry[]>([]);
  const [recommendationsData, setRecommendationsData] = useState<RecommendationResponse | null>(null);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const validateBillData = (entry: Partial<ManualBillEntry>): boolean => {
    return (
      entry.month !== undefined && validateBillEntry.month(entry.month) &&
      entry.year !== undefined && validateBillEntry.year(entry.year) &&
      entry.consumption !== undefined && validateBillEntry.consumption(entry.consumption) &&
      entry.amount !== undefined && validateBillEntry.amount(entry.amount)
    );
  };

  const addBillEntry = useCallback((entry: ManualBillEntry): boolean => {
    if (!validateBillData(entry)) return false;
    
    setManualEntries(prev => [...prev, entry]);
    return true;
  }, []);

  const updateBillEntry = useCallback((id: string, updates: Partial<ManualBillEntry>): boolean => {
    setManualEntries(prev => 
      prev.map(entry => 
        entry.id === id ? { ...entry, ...updates } : entry
      )
    );
    return true;
  }, []);

  const removeBillEntry = useCallback((id: string) => {
    setManualEntries(prev => prev.filter(entry => entry.id !== id));
  }, []);

  const value = {
    homeData,
    setHomeData,
    appliances,
    setAppliances,
    manualEntries,
    addBillEntry,
    updateBillEntry,
    removeBillEntry,
    recommendationsData,
    setRecommendationsData,
    isSwitchOn,
    setIsSwitchOn,
  };

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
}