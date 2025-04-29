
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Clock, Heart, Play, Share2, Users } from "lucide-react";
import SongRow from "@/components/ui/SongRow";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";

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

interface User {
  id: string;
  name: string;
  avatar: string;
  isOwner?: boolean;
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

const mockListeners: User[] = [
  { id: "1", name: "Steve", avatar: "https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?q=80&w=128", isOwner: true },
  { id: "2", name: "Alex", avatar: "https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9?q=80&w=128" },
  { id: "3", name: "Herobrine", avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=128" },
  { id: "4", name: "Notch", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=128" },
];

const PlaylistView = () => {
  const { playlistId } = useParams<{ playlistId: string }>();
  const [playlist, setPlaylist] = useState<Playlist | null>(null);
  const [isCollaborative, setIsCollaborative] = useState(false);
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [showCollaborativeDialog, setShowCollaborativeDialog] = useState(false);
  const [listeners, setListeners] = useState<User[]>([]);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  
  useEffect(() => {
    if (playlistId && mockPlaylists[playlistId]) {
      setPlaylist(mockPlaylists[playlistId]);
      // For demo purposes, we'll show listeners for the mining-mix playlist
      if (playlistId === "mining-mix") {
        setIsCollaborative(true);
        setListeners(mockListeners);
      } else {
        setIsCollaborative(false);
        setListeners([]);
      }
    }
  }, [playlistId]);
  
  const handleSongPlay = () => {
    // For demo purposes, we'll show login dialog when trying to play a song
    setIsLoginDialogOpen(true);
  };

  const handleShare = () => {
    setShowShareDialog(true);
  };

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
            
            {isCollaborative && (
              <>
                <span>•</span>
                <div 
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => setShowCollaborativeDialog(true)}
                >
                  <span className="font-minecraft text-spotify-green">Collaborative</span>
                  <div className="flex -space-x-2">
                    {listeners.slice(0, 3).map((user, index) => (
                      <div 
                        key={user.id} 
                        className="w-5 h-5 rounded-full border border-gray-900 bg-gray-800 overflow-hidden"
                        style={{ zIndex: 3 - index }}
                      >
                        <img 
                          src={user.avatar} 
                          alt={user.name}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    ))}
                    {listeners.length > 3 && (
                      <div className="w-5 h-5 rounded-full border border-gray-900 bg-spotify-green flex items-center justify-center text-[10px] font-bold">
                        +{listeners.length - 3}
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </header>
      
      {/* Action buttons */}
      <div className="flex items-center gap-6 p-6">
        <button 
          className="bg-spotify-green p-4 rounded-full hover:scale-105 transition-transform"
          onClick={handleSongPlay}
        >
          <Play size={24} fill="black" stroke="black" />
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <Heart size={24} />
        </button>
        <button 
          className="text-gray-400 hover:text-white transition-colors"
          onClick={handleShare}
        >
          <Share2 size={24} />
        </button>
        {isCollaborative && (
          <button 
            className="text-spotify-green hover:text-white transition-colors"
            onClick={() => setShowCollaborativeDialog(true)}
          >
            <Users size={24} />
          </button>
        )}
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
              onPlay={handleSongPlay}
              onShare={handleShare}
            />
          ))}
        </div>
      </div>

      {/* Share Dialog */}
      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent className="bg-spotify-darkGray border border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="font-minecraft text-lg">Share Playlist</DialogTitle>
            <DialogDescription className="font-minecraft text-gray-300">
              Share "{playlist.name}" with your friends
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {['WhatsApp', 'Twitter', 'Facebook', 'Copy Link', 'Email', 'Embed'].map((platform) => (
              <button 
                key={platform} 
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-md font-minecraft text-sm flex flex-col items-center justify-center gap-2"
              >
                {platform}
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Collaborative Playlist Dialog */}
      <Dialog open={showCollaborativeDialog} onOpenChange={setShowCollaborativeDialog}>
        <DialogContent className="bg-spotify-darkGray border border-gray-700 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="font-minecraft text-lg">Collaborative Session</DialogTitle>
            <DialogDescription className="font-minecraft text-gray-300">
              People currently listening to this playlist
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="space-y-2">
              {listeners.map(user => (
                <div key={user.id} className="flex items-center justify-between p-2 rounded-md hover:bg-spotify-lightBlack">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="font-minecraft text-sm">{user.name}</span>
                  </div>
                  {user.isOwner && (
                    <span className="text-xs bg-spotify-green px-2 py-1 rounded-full text-black font-minecraft">Host</span>
                  )}
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-700 pt-4">
              <Button className="w-full bg-spotify-green hover:bg-spotify-green/90 text-black font-minecraft">
                Invite Friends
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Login Dialog */}
      <Dialog open={isLoginDialogOpen} onOpenChange={setIsLoginDialogOpen}>
        <DialogContent className="bg-spotify-darkGray border border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="font-minecraft text-lg">Login Required</DialogTitle>
            <DialogDescription className="font-minecraft text-gray-300">
              You need to be logged in to play music
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 p-4">
            <div className="text-center bg-gray-800 p-6 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                alt="Music" 
                className="w-20 h-20 mx-auto mb-4 rounded"
                style={{imageRendering: 'pixelated'}}
              />
              <p className="font-minecraft mb-4">Unlock all features with a SpotiCraft account</p>
              
              <div className="space-y-2">
                <Button className="w-full bg-spotify-green hover:bg-spotify-green/90 text-black font-minecraft">
                  Log In
                </Button>
                <Button className="w-full bg-transparent border border-white hover:bg-white/10 text-white font-minecraft">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PlaylistView;
