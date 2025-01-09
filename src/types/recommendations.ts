export interface Recommendation {
  category: 'easy' | 'steady' | 'big';
  title: string;
  description: string;
  potentialSavings: number;
}

export interface RecommendationResponse {
  baseline: {
    consumption: number;
    cost: number;
  };
  recommendations: Recommendation[];
  estimatedSavings: number;
}