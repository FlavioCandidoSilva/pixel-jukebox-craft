
import { useState } from "react";
import { Heart, Clock, MoreHorizontal, Play, Search } from "lucide-react";
import SongRow from "@/components/ui/SongRow";
import { Input } from "@/components/ui/input";

type SongType = {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  liked: boolean;
  imageUrl: string;
};

const LikedSongs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [likedSongs, setLikedSongs] = useState<SongType[]>([
    { 
      id: "song-1", 
      title: "Cat", 
      artist: "C418", 
      album: "Minecraft Volume Alpha", 
      duration: "3:05", 
      liked: true,
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    { 
      id: "song-2", 
      title: "Wet Hands", 
      artist: "C418", 
      album: "Minecraft Volume Alpha", 
      duration: "1:36", 
      liked: true,
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" 
    },
    { 
      id: "song-3", 
      title: "Pigstep", 
      artist: "Lena Raine", 
      album: "Nether Update", 
      duration: "2:28", 
      liked: true,
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
    },
    { 
      id: "song-4", 
      title: "Aria Math", 
      artist: "C418", 
      album: "Minecraft Volume Beta", 
      duration: "5:10", 
      liked: true,
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
    },
    { 
      id: "song-5", 
      title: "Otherside", 
      artist: "Lena Raine", 
      album: "Caves & Cliffs", 
      duration: "3:15", 
      liked: true,
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
    },
  ]);

  const toggleLike = (id: string) => {
    setLikedSongs(likedSongs.filter(song => song.id !== id));
  };

  // Filter songs based on search query
  const filteredSongs = likedSongs.filter(song => 
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.album.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pb-12">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end gap-6 mb-8">
        <div className="minecraft-card w-48 h-48 lg:w-64 lg:h-64 flex items-center justify-center bg-gradient-to-br from-craft-redstone to-craft-redstone/40">
          <Heart size={64} className="text-white" />
        </div>
        
        <div className="flex-1">
          <h2 className="text-sm font-minecraft uppercase text-gray-400">Playlist</h2>
          <h1 className="text-4xl md:text-6xl font-minecraft text-white mt-2 mb-4">Liked Songs</h1>
          <div className="text-sm font-minecraft text-gray-300">
            {likedSongs.length} songs
          </div>
        </div>
      </div>
      
      {/* Play button and controls */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <button 
          className="bg-spotify-green w-14 h-14 pixel-border rounded-none flex items-center justify-center hover:bg-spotify-green/90 transition-all"
          aria-label="Play"
        >
          <Play size={24} fill="black" stroke="black" />
        </button>

        {/* Search input */}
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            className="pl-10 bg-gray-800 border-gray-700 text-white font-minecraft placeholder:text-gray-400 h-10"
            placeholder="Search in liked songs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      {/* Songs list */}
      <div className="bg-spotify-lightBlack minecraft-card p-2">
        {/* Headers */}
        <div className="grid grid-cols-[16px,4fr,3fr,2fr,minmax(60px,1fr)] px-4 py-2 border-b border-gray-800 text-xs font-minecraft text-gray-400 items-center">
          <div className="text-center">#</div>
          <div>Title</div>
          <div>Album</div>
          <div>Date Added</div>
          <div className="flex justify-end">
            <Clock size={14} />
          </div>
        </div>
        
        {/* Song rows */}
        {filteredSongs.length > 0 ? (
          <div className="divide-y divide-gray-800">
            {filteredSongs.map((song, index) => (
              <div key={song.id} className="grid grid-cols-[16px,4fr,3fr,2fr,minmax(60px,1fr)] px-4 py-2 text-sm font-minecraft hover:bg-gray-800/50 group">
                <div className="flex items-center justify-center text-gray-400 group-hover:text-white">
                  {index + 1}
                </div>
                
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 flex-shrink-0 bg-craft-stone pixel-border">
                    <img 
                      src={song.imageUrl} 
                      alt={song.album} 
                      className="w-full h-full object-cover"
                      style={{imageRendering: 'pixelated'}}
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-white truncate">{song.title}</div>
                    <div className="text-gray-400 text-xs truncate">{song.artist}</div>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-400 truncate">{song.album}</div>
                <div className="flex items-center text-gray-400">2 days ago</div>
                
                <div className="flex items-center justify-end gap-4">
                  <button 
                    onClick={() => toggleLike(song.id)}
                    className="text-spotify-green invisible group-hover:visible hover:text-spotify-green/80 transition-colors"
                    aria-label="Unlike"
                  >
                    <Heart size={16} fill="currentColor" />
                  </button>
                  <span className="text-gray-400">{song.duration}</span>
                  <button className="text-gray-400 invisible group-hover:visible hover:text-white transition-colors">
                    <MoreHorizontal size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : searchQuery ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 bg-craft-stone flex items-center justify-center pixel-border mb-4">
              <Search size={24} className="text-gray-400" />
            </div>
            <h3 className="font-minecraft text-white text-lg mb-2">No songs found</h3>
            <p className="font-minecraft text-gray-400 text-sm">Try a different search term</p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 bg-craft-stone flex items-center justify-center pixel-border mb-4">
              <Heart size={24} className="text-gray-400" />
            </div>
            <h3 className="font-minecraft text-white text-lg mb-2">Songs you like will appear here</h3>
            <p className="font-minecraft text-gray-400 text-sm">Save songs by tapping the heart icon</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LikedSongs;
