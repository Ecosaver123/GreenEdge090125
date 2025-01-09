import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function analyzeBill(fileContent: string): Promise<{
  consumption: number;
  cost: number;
  recommendations: string[];
}> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert in analyzing electricity bills. Extract key information and provide energy-saving recommendations."
        },
        {
          role: "user",
          content: `Analyze this electricity bill content and provide the following in JSON format:
            - Monthly consumption in kWh
            - Total cost
            - 3 specific recommendations for saving electricity
            
            Bill content: ${fileContent}`
        }
      ],
      response_format: { type: "json_object" }
    });

    const result = JSON.parse(response.choices[0].message.content);
    return {
      consumption: result.consumption,
      cost: result.cost,
      recommendations: result.recommendations
    };
  } catch (error) {
    console.error('Error analyzing bill:', error);
    throw new Error('Failed to analyze bill');
  }
}