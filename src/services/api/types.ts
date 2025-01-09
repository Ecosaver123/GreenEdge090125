export interface BillAnalysisResult {
  date: string;
  year: number;
  month: string;
  consumption: number;
  amount: number;
}

export interface OpenAIMessage {
  role: 'system' | 'user' | 'assistant';
  content: string | {
    type: string;
    text?: string;
    image_url?: {
      url: string;
      detail: string;
    };
  }[];
}