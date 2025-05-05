export interface AuthorConfig {
  frequency: Frequency;
  format: Format;
  autoPublish: boolean;
}

export interface Author {
  id: string;
  config: AuthorConfig;
}

export type Frequency = 'daily' | 'weekly' | 'monthly';
export type Format = 'article' | 'video' | 'podcast';

export const DEFAULT_CONFIG: AuthorConfig = {
  frequency: 'daily',
  format: 'article',
  autoPublish: false,
} as const;

export const CONFIG_OPTIONS = {
  frequencies: ['daily', 'weekly', 'monthly'] as Frequency[],
  formats: ['article', 'video', 'podcast'] as Format[],
} as const;