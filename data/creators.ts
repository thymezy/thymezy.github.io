import { Creator } from "@/types/creator";

export const creators: Creator[] = Array.from({ length: 10 }, (_, i) => ({
  id: `creator_${i + 1}`,
  name: `Content Creator ${i + 1}`,
  avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces`,
  config: {
    notificationFrequency: 'daily',
    contentTypes: ['posts'],
    autoSync: false
  }
}));