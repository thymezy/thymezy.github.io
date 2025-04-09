"use client";

import { useState } from "react";

export function useCreators() {
  const [selectedCreators, setSelectedCreators] = useState<string[]>([]);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeCreator, setActiveCreator] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [contentData, setContentData] = useState<string | null>(null);

  const handleCreatorSelect = (creatorId: string) => {
    setSelectedCreators(prev =>
      prev.includes(creatorId)
        ? prev.filter(id => id !== creatorId)
        : [...prev, creatorId]
    );
  };

  const handleSettingsClick = (creatorId: string) => {
    setActiveCreator(creatorId);
    setIsSettingsOpen(true);
  };

  const handleFetchContent = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setContentData("Sample API response data for selected creators: " + selectedCreators.join(", "));
    setIsLoading(false);
  };

  return {
    selectedCreators,
    isSettingsOpen,
    setIsSettingsOpen,
    activeCreator,
    isLoading,
    contentData,
    handleCreatorSelect,
    handleSettingsClick,
    handleFetchContent,
  };
}