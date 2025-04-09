"use client";

import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreatorList } from "@/components/creator-list";
import { ContentDisplay } from "@/components/content-display";
import { SettingsDialog } from "@/components/settings-dialog";
import { useCreators } from "@/hooks/useCreators";

export default function Home() {
  const {
    selectedCreators,
    isSettingsOpen,
    setIsSettingsOpen,
    activeCreator,
    isLoading,
    contentData,
    handleCreatorSelect,
    handleSettingsClick,
    handleFetchContent,
  } = useCreators();

  return (
    <div className="flex h-screen bg-background">
      {/* Left Panel */}
      <div className="w-1/3 border-r relative">
        <CreatorList
          selectedCreators={selectedCreators}
          onCreatorSelect={handleCreatorSelect}
          onSettingsClick={handleSettingsClick}
        />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-background border-t">
          <Button
            className="w-full"
            onClick={handleFetchContent}
            disabled={selectedCreators.length === 0 || isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </>
            ) : (
              'Fetch Content'
            )}
          </Button>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 p-6">
        <div className="max-w-3xl mx-auto">
          <ContentDisplay isLoading={isLoading} contentData={contentData} />
        </div>
      </div>

      <SettingsDialog
        isOpen={isSettingsOpen}
        onOpenChange={setIsSettingsOpen}
        activeCreator={activeCreator}
      />
    </div>
  );
}