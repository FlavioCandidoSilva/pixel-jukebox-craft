
import React from "react";
import ArtistCard from "@/components/ui/ArtistCard";

interface ArtistGridProps {
  items: Array<{
    id: string;
    name: string;
    imageUrl: string;
  }>;
}

const ArtistGrid: React.FC<ArtistGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {items.map(artist => (
        <ArtistCard
          key={artist.id}
          id={artist.id}
          name={artist.name}
          imageUrl={artist.imageUrl}
        />
      ))}
    </div>
  );
};

export default ArtistGrid;
