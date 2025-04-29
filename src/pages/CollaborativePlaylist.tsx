
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, Heart, Music2, Play, Settings, UserPlus, Users, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import SongRow from "@/components/ui/SongRow";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  imageUrl: string;
  isLiked?: boolean;
  votes?: number;
}

interface User {
  id: string;
  name: string;
  avatar: string;
  isOwner?: boolean;
  isActive?: boolean;
}

const mockSongs: Song[] = [
  { 
    id: "1", 
    title: "Diggy Diggy Hole", 
    artist: "YOGSCAST", 
    album: "Songs from the Depths", 
    duration: "3:04", 
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475", 
    votes: 3 
  },
  { 
    id: "2", 
    title: "Cave Sounds 1", 
    artist: "C418", 
    album: "Minecraft Volume Alpha", 
    duration: "0:48", 
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475", 
    votes: 1 
  },
  { 
    id: "3", 
    title: "Diamond Pickaxe", 
    artist: "PixelBeats", 
    album: "Note Block Symphonies", 
    duration: "2:33", 
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5", 
    votes: 5 
  },
  { 
    id: "4", 
    title: "Deep Dark Descent", 
    artist: "Lena Raine", 
    album: "Minecraft: Caves & Cliffs", 
    duration: "3:15", 
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", 
    votes: 2 
  },
  { 
    id: "5", 
    title: "Iron Ore Jam", 
    artist: "Noteblock Masters", 
    album: "Minecraft Anthems", 
    duration: "2:47", 
    imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b", 
    votes: 0 
  },
];

const mockUsers: User[] = [
  { id: "1", name: "Steve", avatar: "https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?q=80&w=128", isOwner: true, isActive: true },
  { id: "2", name: "Alex", avatar: "https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9?q=80&w=128", isActive: true },
  { id: "3", name: "Herobrine", avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=128" },
  { id: "4", name: "Notch", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=128", isActive: true },
  { id: "5", name: "Jeb", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=128" },
];

const CollaborativePlaylist = () => {
  const { playlistId } = useParams<{ playlistId: string }>();
  const [songs, setSongs] = useState<Song[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [progress, setProgress] = useState(30);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showInviteDialog, setShowInviteDialog] = useState(false);
  const [showPermissionsDialog, setShowPermissionsDialog] = useState(false);
  const [currentUser] = useState<User>(mockUsers[0]); // Current user is Steve (the owner)
  const [userVotes, setUserVotes] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // In a real app, we would fetch this data based on the playlistId
    setSongs(mockSongs);
    setUsers(mockUsers);

    // Simulate progress change
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          // Go to next song
          setCurrentSongIndex(current => (current + 1) % mockSongs.length);
          return 0;
        }
        return prev + 0.5;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [playlistId]);

  const currentSong = songs[currentSongIndex];
  const activeUsers = users.filter(user => user.isActive);

  const handleSongVote = (songId: string) => {
    if (userVotes[songId]) {
      toast.error("You've already voted for this song!");
      return;
    }

    setSongs(prevSongs => 
      prevSongs.map(song => 
        song.id === songId 
          ? { ...song, votes: (song.votes || 0) + 1 } 
          : song
      )
    );
    
    setUserVotes(prev => ({ ...prev, [songId]: true }));
    toast.success("Vote cast successfully!");
  };

  // Sort songs by votes (except current song)
  const sortedUpcomingSongs = [...songs]
    .filter((_, index) => index !== currentSongIndex)
    .sort((a, b) => (b.votes || 0) - (a.votes || 0));

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="relative">
        <div 
          className="h-32 w-full bg-spotify-lightBlack absolute top-0 left-0"
          style={{ backgroundImage: 'linear-gradient(to bottom right, #4f46e5, #7c3aed, #f472b6)' }}
        ></div>
        <div className="relative pt-6 pb-6 px-6">
          <Link to="/" className="font-minecraft text-sm text-gray-200 hover:text-white mb-4 inline-block z-10 relative">
            <ArrowLeft size={16} className="inline mr-2" />
            Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row gap-6 items-center mt-6 md:items-end z-10 relative">
            <div className="w-40 h-40 pixel-border bg-craft-stone shrink-0 shadow-lg shadow-purple-900/30">
              <img
                src={currentSong?.imageUrl || "https://images.unsplash.com/photo-1518770660439-4636190af475"}
                alt="Playlist cover"
                className="object-cover w-full h-full"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm font-minecraft text-white">Collaborative Playlist</p>
              <h1 className="text-4xl font-minecraft text-white my-2">Party Mix</h1>
              <p className="text-sm text-gray-300 font-minecraft mb-2">
                Listen together with friends in real-time
              </p>
              <div className="flex flex-wrap items-center gap-1 text-sm text-gray-200 justify-center md:justify-start">
                <div className="flex -space-x-2 mr-2">
                  {activeUsers.slice(0, 3).map(user => (
                    <div 
                      key={user.id} 
                      className="w-6 h-6 rounded-full border-2 border-purple-900 overflow-hidden"
                    >
                      <img 
                        src={user.avatar} 
                        alt={user.name}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  ))}
                  {activeUsers.length > 3 && (
                    <div className="w-6 h-6 rounded-full border-2 border-purple-900 bg-purple-800 flex items-center justify-center text-[10px] font-bold">
                      +{activeUsers.length - 3}
                    </div>
                  )}
                </div>
                <span className="font-minecraft">{activeUsers.length} listening now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Now playing */}
      <div className="px-6 py-4 bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-craft-stone pixel-border">
              <img 
                src={currentSong?.imageUrl || "https://images.unsplash.com/photo-1518770660439-4636190af475"}
                alt={currentSong?.title || "Current song"} 
                className="w-full h-full object-cover"
                style={{imageRendering: 'pixelated'}}
              />
            </div>
            <div>
              <h3 className="font-minecraft text-lg text-white">{currentSong?.title || "Not playing"}</h3>
              <p className="font-minecraft text-sm text-gray-300">{currentSong?.artist || "Unknown artist"}</p>
            </div>
            <button className="ml-2 text-gray-300 hover:text-white">
              <Heart size={20} />
            </button>
          </div>
          
          <div className="flex flex-col w-full md:w-1/2 gap-2">
            <div className="flex justify-between items-center">
              <button 
                className="bg-white rounded-full p-2 hover:scale-105 transition-transform"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <Play size={16} fill="black" stroke="black" />
              </button>
              
              <div className="text-sm font-minecraft text-gray-300">
                {Math.floor(progress / 100 * parseFloat(currentSong?.duration || "3:00")).toString().padStart(1, '0')}:
                {Math.floor((progress / 100 * parseFloat(currentSong?.duration || "3:00") % 1) * 60).toString().padStart(2, '0')} / {currentSong?.duration || "3:00"}
              </div>
            </div>
            
            <Progress value={progress} className="w-full h-2 bg-gray-700" />
          </div>
        </div>
      </div>
      
      {/* Action buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6">
        <div className="flex gap-2">
          <Button 
            className="bg-spotify-green hover:bg-spotify-green/90 text-black font-minecraft text-xs"
            onClick={() => setShowInviteDialog(true)}
          >
            <UserPlus size={14} className="mr-1" /> Invite Friends
          </Button>
          
          {currentUser.isOwner && (
            <Button 
              className="bg-transparent border border-gray-500 hover:border-white hover:bg-gray-800/20 text-white font-minecraft text-xs"
              onClick={() => setShowPermissionsDialog(true)}
            >
              <Settings size={14} className="mr-1" /> Manage Permissions
            </Button>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-300 font-minecraft flex items-center">
            <Music2 size={16} className="mr-1" />
            {songs.length} songs
          </div>
          <div className="text-sm text-gray-300 font-minecraft flex items-center">
            <Users size={16} className="mr-1" />
            {users.length} total members
          </div>
        </div>
      </div>
      
      {/* Users list */}
      <div className="px-6 mb-6">
        <h3 className="font-minecraft text-lg text-white mb-3">Who's Here</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {users.map(user => (
            <div 
              key={user.id} 
              className={`bg-gray-800/60 rounded-lg p-3 flex items-center gap-3 ${user.isActive ? 'border-l-4 border-spotify-green' : ''}`}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-minecraft text-sm text-white">{user.name}</p>
                <div className="flex items-center gap-2">
                  {user.isOwner && (
                    <span className="text-xs bg-spotify-green px-1.5 py-0.5 rounded text-black">Host</span>
                  )}
                  {user.isActive ? (
                    <span className="text-xs text-spotify-green flex items-center">
                      <span className="w-2 h-2 bg-spotify-green rounded-full mr-1"></span>
                      Listening
                    </span>
                  ) : (
                    <span className="text-xs text-gray-400">Offline</span>
                  )}
                </div>
              </div>
            </div>
          ))}
          <button className="bg-gray-800/30 rounded-lg p-3 flex flex-col items-center justify-center h-full border-2 border-dashed border-gray-700 hover:border-gray-500">
            <UserPlus className="mb-2 text-gray-400" size={24} />
            <span className="font-minecraft text-sm text-gray-400">Invite</span>
          </button>
        </div>
      </div>
      
      {/* Queue */}
      <div className="px-6">
        <h3 className="font-minecraft text-lg text-white mb-3">Up Next (Vote for songs)</h3>
        <div className="space-y-1">
          {/* Current song */}
          <div className="bg-purple-900/30 rounded-md mb-4">
            <div className="flex justify-between items-center px-4 py-2">
              <span className="font-minecraft text-sm text-white">Now Playing</span>
            </div>
            <SongRow
              key={currentSong?.id}
              position={1}
              title={currentSong?.title || ""}
              artist={currentSong?.artist || ""}
              album={currentSong?.album || ""}
              duration={currentSong?.duration || ""}
              imageUrl={currentSong?.imageUrl || ""}
              isLiked={currentSong?.isLiked}
            />
            <div className="px-6 pb-2">
              <Progress value={progress} className="h-1 bg-gray-800" />
            </div>
          </div>

          {/* Upcoming songs with voting */}
          <h4 className="font-minecraft text-sm text-gray-300 mb-2 mt-4">Vote for upcoming songs</h4>
          {sortedUpcomingSongs.map((song, index) => (
            <div key={song.id} className="rounded-md bg-gray-800/40">
              <div className="flex justify-between items-center">
                <SongRow
                  key={song.id}
                  position={index + 2}
                  title={song.title}
                  artist={song.artist}
                  album={song.album}
                  duration={song.duration}
                  imageUrl={song.imageUrl}
                  isLiked={song.isLiked}
                />
                <div className="pr-4 flex items-center gap-2">
                  <button 
                    className={`px-2 py-1 rounded-md flex items-center gap-1 ${
                      userVotes[song.id] 
                        ? "bg-spotify-green/20 text-spotify-green" 
                        : "bg-gray-700 hover:bg-gray-600 text-white"
                    }`}
                    onClick={() => handleSongVote(song.id)}
                    disabled={!!userVotes[song.id]}
                  >
                    <ThumbsUp size={14} />
                    <span className="text-xs font-minecraft">{song.votes || 0}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Invite Dialog */}
      <Dialog open={showInviteDialog} onOpenChange={setShowInviteDialog}>
        <DialogContent className="bg-spotify-darkGray border border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="font-minecraft text-lg">Invite Friends</DialogTitle>
            <DialogDescription className="font-minecraft text-gray-300">
              Share this listening session with friends
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="bg-gray-800 p-3 rounded-md">
              <p className="text-sm font-minecraft mb-2">Invite Link</p>
              <div className="flex">
                <input 
                  type="text" 
                  value="https://spoticraft.com/collaborative/party-mix" 
                  readOnly
                  className="bg-gray-700 text-sm p-2 rounded-l-md flex-1 font-minecraft"
                />
                <Button 
                  className="bg-spotify-green rounded-l-none text-black"
                  onClick={() => {
                    navigator.clipboard.writeText("https://spoticraft.com/collaborative/party-mix");
                    toast.success("Link copied to clipboard!");
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-minecraft mb-2">Share via</p>
              <div className="grid grid-cols-3 gap-2">
                {['WhatsApp', 'Twitter', 'Email'].map(platform => (
                  <Button 
                    key={platform} 
                    className="bg-gray-800 hover:bg-gray-700 font-minecraft text-xs"
                    onClick={() => toast.success(`Sharing via ${platform}...`)}
                  >
                    {platform}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Permissions Dialog */}
      <Dialog open={showPermissionsDialog} onOpenChange={setShowPermissionsDialog}>
        <DialogContent className="bg-spotify-darkGray border border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="font-minecraft text-lg">Manage Permissions</DialogTitle>
            <DialogDescription className="font-minecraft text-gray-300">
              Control who can do what in this session
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="space-y-2">
              {[
                { text: "Who can add songs", value: "Everyone" },
                { text: "Who can skip songs", value: "Host Only" },
                { text: "Who can invite others", value: "Everyone" },
                { text: "Allow song requests", value: "Yes" },
                { text: "Allow voting for songs", value: "Yes" },
              ].map(setting => (
                <div key={setting.text} className="flex justify-between items-center p-2 hover:bg-gray-800 rounded">
                  <p className="font-minecraft text-sm">{setting.text}</p>
                  <Button 
                    variant="outline" 
                    className="bg-transparent border border-gray-600 hover:bg-gray-800 text-white text-xs h-8"
                  >
                    {setting.value} ▼
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-700 pt-4">
              <Button 
                className="w-full bg-spotify-green hover:bg-spotify-green/90 text-black font-minecraft"
                onClick={() => {
                  setShowPermissionsDialog(false);
                  toast.success("Settings saved successfully!");
                }}
              >
                Save Settings
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CollaborativePlaylist;
