import { getUISchema } from './schema';

const BASE_URL = 'https://d24ttlpya72qwe.cloudfront.net';

export const fetchContent = async (selected, selectedSecondary, selectedAnalysisTypes) => {
  try {
    const response = await fetch(`${BASE_URL}/prod/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ids: selected,
        secondary: selectedSecondary,
        analysisTypes: selectedAnalysisTypes,
      }),
    });
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const fetchIndex = async () => {
  try {
    const response = await fetch(`${BASE_URL}/prod/index`);
      console.log(response)

    return await response.json();
  } catch (error) {
    console.error('Error fetching index:', error);
    throw error;
  }
};