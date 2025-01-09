import type { BillAnalysisResult } from '../services/api/openai';

export interface Bill {
  id: string;
  fileName: string;
  fileSize: string;
  fileType: string;
  uploadDate: string;
  analysis?: BillAnalysisResult[];
}