import { config } from '../../config/env';

async function convertToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (!reader.result) {
        reject(new Error('Failed to convert file to base64'));
        return;
      }
      const base64String = reader.result as string;
      const base64 = base64String.split(',')[1];
      resolve(base64);
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
  });
}

async function retryWithDelay(fn: () => Promise<any>, retries = 3, delay = 1000): Promise<any> {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) throw error;
    await new Promise(resolve => setTimeout(resolve, delay));
    return retryWithDelay(fn, retries - 1, delay * 1.5);
  }
}

export async function extractTextFromBill(file: File) {
  if (!config.rapidApi.key) {
    throw new Error('OCR service is not configured');
  }

  try {
    const base64Image = await convertToBase64(file);
    
    const makeRequest = async () => {
      const formData = new URLSearchParams();
      formData.append('base64', base64Image);

      const response = await fetch('https://ocr-extract-text.p.rapidapi.com/ocr', {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': config.rapidApi.key,
          'X-RapidAPI-Host': 'ocr-extract-text.p.rapidapi.com'
        },
        body: formData.toString()
      });

      if (!response.ok) {
        throw new Error(`OCR service error: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data || !data.text) {
        throw new Error('Invalid response from OCR service');
      }

      console.log('OCR Response:', data);

      return {
        text: data.text,
        confidence: data.confidence || 0,
        timestamp: new Date().toISOString()
      };
    };

    return await retryWithDelay(makeRequest);

  } catch (error) {
    console.error('OCR Error:', error);
    throw new Error('Unable to process bill image. Please try again or enter details manually.');
  }
}