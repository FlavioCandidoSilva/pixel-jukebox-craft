
import React from "react";
import AlbumCard from "@/components/ui/AlbumCard";

interface AlbumGridProps {
  items: Array<{
    id: string;
    name: string;
    artist: string;
    imageUrl: string;
  }>;
}

const AlbumGrid: React.FC<AlbumGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {items.map(album => (
        <AlbumCard
          key={album.id}
          id={album.id}
          name={album.name}
          artist={album.artist}
          imageUrl={album.imageUrl}
        />
      ))}
    </div>
  );
};

export default AlbumGrid;
