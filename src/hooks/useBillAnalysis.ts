import { useState } from 'react';
import { analyzeBill } from '../services/api/openai';
import type { BillAnalysisResult } from '../services/api/types';

export function useBillAnalysis() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const analyze = async (file: File): Promise<BillAnalysisResult[] | null> => {
    setIsAnalyzing(true);
    setError(null);

    try {
      const analysis = await analyzeBill(file);
      return analysis;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to analyze bill';
      setError(errorMessage);
      return null;
    } finally {
      setIsAnalyzing(false);
    }
  };

  return {
    analyze,
    isAnalyzing,
    error,
  };
}