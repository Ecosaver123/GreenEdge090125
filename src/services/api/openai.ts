import OpenAI from 'openai';
import { config } from '../../config/env';
import { readFileContent } from '../../utils/file-reader';
import { parseAnalysisResponse } from './bill-parser';
import { BILL_ANALYSIS_PROMPT } from './prompts';
import type { BillAnalysisResult } from './types';

const openai = new OpenAI({
  apiKey: config.openai.apiKey,
  dangerouslyAllowBrowser: true
});

export async function analyzeBill(file: File): Promise<BillAnalysisResult[]> {
  try {
    const fileContent = await readFileContent(file);
    
    const response = await openai.chat.completions.create({
      model: "o1-preview",
      messages: [
        {
          role: "system",
          content: BILL_ANALYSIS_PROMPT
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Extract the following information from this electricity bill in a structured format:\n- Upload date\n- Billing year\n- Billing month\n- Energy consumption (kWh)\n- Total amount"
            },
            {
              type: "image_url",
              image_url: {
                url: fileContent,
                detail: "high"
              }
            }
          ]
        }
      ],
      max_tokens: 1000,
      response_format: { type: "json_object" }
    });

    const content = response.choices[0].message.content;
    if (!content) throw new Error('No analysis generated');

    return parseAnalysisResponse(content);
  } catch (error) {
    console.error('Error analyzing bill:', error);
    throw new Error('Failed to analyze bill');
  }
}