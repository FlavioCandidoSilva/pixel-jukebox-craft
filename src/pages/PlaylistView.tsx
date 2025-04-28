
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Clock, Heart, Play } from "lucide-react";
import SongRow from "@/components/ui/SongRow";

interface Playlist {
  id: string;
  name: string;
  description: string;
  createdBy: string;
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

const mockPlaylists: Record<string, Playlist> = {
  "mining-mix": {
    id: "mining-mix",
    name: "Mining Mix",
    description: "Perfect tunes for your mining adventures",
    createdBy: "SpotiCraft",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    songs: [
      { id: "1", title: "Diggy Diggy Hole", artist: "YOGSCAST", album: "Songs from the Depths", duration: "3:04", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
      { id: "2", title: "Cave Sounds 1", artist: "C418", album: "Minecraft Volume Alpha", duration: "0:48", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
      { id: "3", title: "Diamond Pickaxe", artist: "PixelBeats", album: "Note Block Symphonies", duration: "2:33", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
      { id: "4", title: "Deep Dark Descent", artist: "Lena Raine", album: "Minecraft: Caves & Cliffs", duration: "3:15", imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
      { id: "5", title: "Iron Ore Jam", artist: "Noteblock Masters", album: "Minecraft Anthems", duration: "2:47", imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" },
    ]
  },
  "redstone-beats": {
    id: "redstone-beats",
    name: "Redstone Beats",
    description: "Electrifying rhythms for your redstone builds",
    createdBy: "SpotiCraft",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    songs: [
      { id: "1", title: "Redstone Rush", artist: "PixelBeats", album: "Note Block Symphonies", duration: "2:55", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
      { id: "2", title: "Comparator Beats", artist: "Redstone Engineers", album: "Circuit Logic", duration: "3:22", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
      { id: "3", title: "Piston Push", artist: "Noteblock Masters", album: "Block by Block", duration: "2:16", imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
      { id: "4", title: "Repeater Relay", artist: "Signal Strength", album: "Powered Rails", duration: "3:48", imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" },
    ]
  }
};

const PlaylistView = () => {
  const { playlistId } = useParams<{ playlistId: string }>();
  const [playlist, setPlaylist] = useState<Playlist | null>(null);
  
  useEffect(() => {
    if (playlistId && mockPlaylists[playlistId]) {
      setPlaylist(mockPlaylists[playlistId]);
    }
  }, [playlistId]);
  
  if (!playlist) {
    return (
      <div className="flex items-center justify-center h-80">
        <div className="font-minecraft text-white">Loading playlist...</div>
      </div>
    );
  }

  return (
    <div className="pb-12">
      {/* Playlist header */}
      <header className="flex flex-col md:flex-row gap-6 items-center md:items-end bg-gradient-to-b from-craft-grass/40 to-transparent p-8">
        <div className="w-48 h-48 pixel-border bg-craft-stone shrink-0">
          <img
            src={playlist.coverImage}
            alt={playlist.name}
            className="object-cover w-full h-full"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-sm font-minecraft text-white">Playlist</p>
          <h1 className="text-4xl font-minecraft text-white my-2">{playlist.name}</h1>
          <p className="text-sm text-gray-300 font-minecraft mb-2">{playlist.description}</p>
          <div className="flex flex-wrap items-center gap-1 text-sm text-gray-300 justify-center md:justify-start">
            <span className="font-minecraft">Created by {playlist.createdBy}</span>
            <span>•</span>
            <span className="font-minecraft">{playlist.songs.length} songs</span>
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
          {playlist.songs.map((song, index) => (
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

export default PlaylistView;
