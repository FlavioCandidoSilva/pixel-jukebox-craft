
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Clock, Heart, Play } from "lucide-react";
import SongRow from "@/components/ui/SongRow";

interface Album {
  id: string;
  name: string;
  artist: string;
  releaseDate: string;
  coverImage: string;
  songs: Song[];
}

interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  imageUrl: string;
}

const mockAlbums: Record<string, Album> = {
  "c418-minecraft": {
    id: "c418-minecraft",
    name: "Minecraft Volume Alpha",
    artist: "C418",
    releaseDate: "2011",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    songs: [
      { id: "1", title: "Key", artist: "C418", album: "Minecraft Volume Alpha", duration: "1:05", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
      { id: "2", title: "Door", artist: "C418", album: "Minecraft Volume Alpha", duration: "1:51", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
      { id: "3", title: "Subwoofer Lullaby", artist: "C418", album: "Minecraft Volume Alpha", duration: "3:28", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
      { id: "4", title: "Death", artist: "C418", album: "Minecraft Volume Alpha", duration: "0:41", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
      { id: "5", title: "Living Mice", artist: "C418", album: "Minecraft Volume Alpha", duration: "2:57", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
      { id: "6", title: "Moog City", artist: "C418", album: "Minecraft Volume Alpha", duration: "2:40", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
      { id: "7", title: "Haggstrom", artist: "C418", album: "Minecraft Volume Alpha", duration: "3:24", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
      { id: "8", title: "Sweden", artist: "C418", album: "Minecraft Volume Alpha", duration: "3:35", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    ]
  },
  "note-blocks": {
    id: "note-blocks",
    name: "Note Block Symphonies",
    artist: "PixelBeats",
    releaseDate: "2022",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    songs: [
      { id: "1", title: "Diamond Dance", artist: "PixelBeats", album: "Note Block Symphonies", duration: "2:45", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
      { id: "2", title: "Creeper Groove", artist: "PixelBeats", album: "Note Block Symphonies", duration: "3:12", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
      { id: "3", title: "Redstone Rhythm", artist: "PixelBeats", album: "Note Block Symphonies", duration: "2:38", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
      { id: "4", title: "Enderman's Lament", artist: "PixelBeats", album: "Note Block Symphonies", duration: "4:05", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
    ]
  }
};

const AlbumView = () => {
  const { albumId } = useParams<{ albumId: string }>();
  const [album, setAlbum] = useState<Album | null>(null);
  
  useEffect(() => {
    if (albumId && mockAlbums[albumId]) {
      setAlbum(mockAlbums[albumId]);
    }
  }, [albumId]);
  
  if (!album) {
    return (
      <div className="flex items-center justify-center h-80">
        <div className="font-minecraft text-white">Loading album...</div>
      </div>
    );
  }

  return (
    <div className="pb-12">
      {/* Album header */}
      <header className="flex flex-col md:flex-row gap-6 items-center md:items-end bg-gradient-to-b from-craft-stone/40 to-transparent p-8">
        <div className="w-48 h-48 pixel-border bg-craft-stone shrink-0">
          <img
            src={album.coverImage}
            alt={album.name}
            className="object-cover w-full h-full"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-sm font-minecraft text-white">Album</p>
          <h1 className="text-4xl font-minecraft text-white my-2">{album.name}</h1>
          <div className="flex flex-wrap items-center gap-1 text-sm text-gray-300 justify-center md:justify-start">
            <img
              src={album.coverImage}
              alt={album.artist}
              className="w-6 h-6 rounded-none object-cover"
              style={{ imageRendering: 'pixelated' }}
            />
            <span className="font-minecraft">{album.artist}</span>
            <span>•</span>
            <span className="font-minecraft">{album.releaseDate}</span>
            <span>•</span>
            <span className="font-minecraft">{album.songs.length} songs</span>
          </div>
        </div>
      </header>
      
      {/* Action buttons */}
      <div className="flex items-center gap-6 p-6">
        <button className="bg-spotify-green p-4 rounded-full hover:scale-105 transition-transform">
          <Play size={24} fill="black" stroke="black" />
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <Heart size={24} />
        </button>
      </div>
      
      {/* Songs list */}
      <div className="px-4">
        {/* Table header */}
        <div className="grid grid-cols-[16px_4fr_3fr_1fr] md:grid-cols-[16px_6fr_4fr_3fr_1fr] gap-4 px-4 py-2 border-b border-gray-800 text-gray-400 font-minecraft text-sm mb-2">
          <div>#</div>
          <div>Title</div>
          <div className="hidden md:block">Album</div>
          <div className="text-right">
            <Clock size={16} />
          </div>
        </div>
        
        {/* Songs */}
        <div className="space-y-1">
          {album.songs.map((song, index) => (
            <SongRow
              key={song.id}
              title={song.title}
              artist={song.artist}
              album={song.album}
              duration={song.duration}
              imageUrl={song.imageUrl}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumView;
