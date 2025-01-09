import { extractTextFromBill } from './rapid-api';
import { openaiClient } from './openai-client';
import { BILL_ANALYSIS_PROMPT } from './prompts/bill-analysis';
import type { BillAnalysisResult } from './types';

export async function analyzeBillImage(file: File): Promise<BillAnalysisResult[]> {
  try {
    // Step 1: Extract text using Rapid API
    const extractionResult = await extractTextFromBill(file);
    const extractedText = extractionResult.text;

    if (!extractedText) {
      throw new Error('No text could be extracted from the image');
    }

    console.log('Extracted Text from Rapid API:', extractedText);

    // Step 2: Analyze with OpenAI
    const response = await openaiClient.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: BILL_ANALYSIS_PROMPT
        },
        {
          role: "user",
          content: extractedText
        }
      ],
      temperature: 0.7
    });

    const content = response.choices[0].message.content;
    if (!content) {
      throw new Error('No analysis generated');
    }

    console.log('OpenAI Response:', content);

    // Parse the response
    const parsedContent = JSON.parse(content);
    
    // Transform the response into the expected format
    return [{
      date: new Date().toISOString(),
      year: parsedContent.year || new Date().getFullYear(),
      month: parsedContent.month || '-',
      consumption: parsedContent.consumption || 0,
      amount: parsedContent.amount || 0
    }];
  } catch (error) {
    console.error('Error analyzing bill:', error);
    throw error instanceof Error ? error : new Error('Failed to analyze bill');
  }
}