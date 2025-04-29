
import React from "react";
import SongRow from "@/components/ui/SongRow";

interface SongListProps {
  items: Array<{
    id: string;
    title: string;
    artist: string;
    album: string;
    duration: string;
    imageUrl: string;
    isLiked?: boolean;
  }>;
}

const SongList: React.FC<SongListProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-1">
      {items.map((song, index) => (
        <SongRow
          key={song.id || index}
          position={index + 1}
          title={song.title}
          artist={song.artist}
          album={song.album}
          duration={song.duration}
          imageUrl={song.imageUrl}
          isLiked={song.isLiked}
        />
      ))}
    </div>
  );
};

export default SongList;
