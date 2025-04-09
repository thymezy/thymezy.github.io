"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { CreatorCard } from "@/components/creator-card";
import { creators } from "@/data/creators";

interface CreatorListProps {
  selectedCreators: string[];
  onCreatorSelect: (id: string) => void;
  onSettingsClick: (id: string) => void;
}

export function CreatorList({ selectedCreators, onCreatorSelect, onSettingsClick }: CreatorListProps) {
  return (
    <ScrollArea className="h-[calc(100vh-5rem)]">
      <div className="p-4 space-y-4">
        {creators.map((creator) => (
          <CreatorCard
            key={creator.id}
            creator={creator}
            isSelected={selectedCreators.includes(creator.id)}
            onSelect={onCreatorSelect}
            onSettingsClick={onSettingsClick}
          />
        ))}
      </div>
    </ScrollArea>
  );
}