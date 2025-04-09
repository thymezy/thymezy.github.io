"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { creators } from "@/data/creators";

interface SettingsDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  activeCreator: string | null;
}

export function SettingsDialog({ isOpen, onOpenChange, activeCreator }: SettingsDialogProps) {
  const creator = creators.find(c => c.id === activeCreator);
  const [frequency, setFrequency] = useState(creator?.config?.notificationFrequency || 'daily');
  const [autoSync, setAutoSync] = useState(creator?.config?.autoSync || false);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Creator Settings - {creator?.name}</DialogTitle>
        </DialogHeader>
        <div className="py-6 space-y-6">
          <div className="space-y-4">
            <Label>Notification Frequency</Label>
            <RadioGroup
              defaultValue={frequency}
              onValueChange={setFrequency}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="realtime" id="realtime" />
                <Label htmlFor="realtime">Real-time</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="daily" id="daily" />
                <Label htmlFor="daily">Daily Digest</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="weekly" id="weekly" />
                <Label htmlFor="weekly">Weekly Summary</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="auto-sync">Auto-sync Content</Label>
            <Switch
              id="auto-sync"
              checked={autoSync}
              onCheckedChange={setAutoSync}
            />
          </div>

          <div className="text-sm text-muted-foreground">
            <p>Current Settings:</p>
            <ul className="mt-2 space-y-1">
              <li>• Notifications: {frequency}</li>
              <li>• Auto-sync: {autoSync ? 'Enabled' : 'Disabled'}</li>
              <li>• Content Types: {creator?.config?.contentTypes.join(', ')}</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}