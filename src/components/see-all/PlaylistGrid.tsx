
import React from "react";
import PlaylistCard from "@/components/ui/PlaylistCard";

interface PlaylistGridProps {
  items: Array<{
    id: string;
    name: string;
    description: string;
    imageUrl: string;
  }>;
}

const PlaylistGrid: React.FC<PlaylistGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {items.map(playlist => (
        <PlaylistCard
          key={playlist.id}
          id={playlist.id}
          name={playlist.name}
          description={playlist.description}
          imageUrl={playlist.imageUrl}
        />
      ))}
    </div>
  );
};

export default PlaylistGrid;
