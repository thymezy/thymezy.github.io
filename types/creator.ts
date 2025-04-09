export interface Creator {
  id: string;
  name: string;
  avatar: string;
  config?: {
    notificationFrequency: 'realtime' | 'daily' | 'weekly';
    contentTypes: string[];
    autoSync: boolean;
  };
}