import { formatDate } from '../../utils/date-formatter';
import type { BillAnalysisResult } from './types';

export function parseAnalysisResponse(content: string): BillAnalysisResult[] {
  try {
    const data = JSON.parse(content);
    
    if (!Array.isArray(data.entries)) {
      return [{
        date: formatDate(new Date()),
        year: data.year || new Date().getFullYear(),
        month: data.month || '#N/A',
        consumption: parseFloat(data.consumption) || 0,
        amount: parseFloat(data.amount) || 0
      }];
    }
    
    return data.entries.map((entry: any) => ({
      date: formatDate(new Date()),
      year: parseInt(entry.year) || new Date().getFullYear(),
      month: entry.month || '#N/A',
      consumption: parseFloat(entry.consumption) || 0,
      amount: parseFloat(entry.amount) || 0
    }));
  } catch (error) {
    console.error('Error parsing analysis response:', error);
    return [];
  }
}