export const config = {
  openai: {
    apiKey: import.meta.env.VITE_OPENAI_API_KEY || '',
  },
  rapidApi: {
    key: import.meta.env.VITE_RAPID_API_KEY || '',
  },
} as const;