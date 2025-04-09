"use client";

import { Skeleton } from "@/components/ui/skeleton";

interface ContentDisplayProps {
  isLoading: boolean;
  contentData: string | null;
}

export function ContentDisplay({ isLoading, contentData }: ContentDisplayProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    );
  }

  if (contentData) {
    return (
      <div className="prose dark:prose-invert">
        <h2 className="text-2xl font-bold mb-4">Content Display</h2>
        <p className="text-muted-foreground">{contentData}</p>
      </div>
    );
  }

  return (
    <div className="text-center text-muted-foreground">
      <p>Select creators and click &quot;Fetch Content&quot; to view data</p>
    </div>
  );
}