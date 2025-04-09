"use client";

import { Settings2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Creator } from "@/types/creator";

interface CreatorCardProps {
  creator: Creator;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onSettingsClick: (id: string) => void;
}

export function CreatorCard({ creator, isSelected, onSelect, onSettingsClick }: CreatorCardProps) {
  return (
    <Card 
      className={`p-4 transition-all cursor-pointer hover:shadow-md ${isSelected ? "border-primary bg-primary/5" : ""}`}
      onClick={() => onSelect(creator.id)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div>
            <img
              src={creator.avatar}
              alt={creator.name}
              className="w-10 h-10 rounded-full"
            />
            <h3 className="font-medium">{creator.name}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="secondary" className="text-xs">
                {creator.config?.notificationFrequency}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {creator.config?.contentTypes.join(', ')}
              </Badge>
              <Badge variant={creator.config?.autoSync ? "default" : "outline"} className="text-xs">
                {creator.config?.autoSync ? 'Auto-sync On' : 'Auto-sync Off'}
              </Badge>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            onSettingsClick(creator.id);
          }}
        >
          <Settings2 className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}