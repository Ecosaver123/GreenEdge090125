import { openaiClient } from './openai-client';
import { RECOMMENDATIONS_PROMPT } from './prompts/recommendations';
import type { Appliance } from '../../types/appliance';
import type { HomeData } from '../../types/home';
import type { ManualBillEntry } from '../../types/manual-bill';
import type { RecommendationResponse } from '../../types/recommendations';

export async function getRecommendations(
  homeData: HomeData,
  appliances: Appliance[],
  bills: ManualBillEntry[]
): Promise<RecommendationResponse> {
  try {
    const response = await openaiClient.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: RECOMMENDATIONS_PROMPT
        },
        {
          role: "user",
          content: JSON.stringify({
            home: homeData,
            appliances,
            consumptionHistory: bills,
            currentDate: new Date().toISOString()
          })
        }
      ],
      temperature: 0.7
    });

    const content = response.choices[0].message.content;
    if (!content) {
      throw new Error('No recommendations generated');
    }

    try {
      // Parse the response content as JSON
      const parsedContent = JSON.parse(content);
      
      // Ensure the response has the expected structure
      if (!parsedContent.baseline || !parsedContent.recommendations) {
        throw new Error('Invalid response structure');
      }

      return {
        baseline: {
          consumption: parsedContent.baseline.consumption || 0,
          cost: parsedContent.baseline.cost || 0
        },
        recommendations: parsedContent.recommendations.map((rec: any) => ({
          category: rec.category || 'easy',
          title: rec.title || '',
          description: rec.description || '',
          potentialSavings: rec.potentialSavings || 0
        })),
        estimatedSavings: parsedContent.estimatedSavings || 0
      };
    } catch (parseError) {
      console.error('Error parsing OpenAI response:', parseError);
      throw new Error('Failed to parse recommendations');
    }
  } catch (error) {
    console.error('Error getting recommendations:', error);
    throw error instanceof Error ? error : new Error('Failed to get recommendations');
  }
}