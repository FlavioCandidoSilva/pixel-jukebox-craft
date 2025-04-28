
import { useState } from "react";
import { Link } from "react-router-dom";
import { Music, Disc, User } from "lucide-react";
import PlaylistCard from "@/components/ui/PlaylistCard";
import AlbumCard from "@/components/ui/AlbumCard";
import ArtistCard from "@/components/ui/ArtistCard";

type LibraryTab = 'playlists' | 'artists' | 'albums';

const Library = () => {
  const [activeTab, setActiveTab] = useState<LibraryTab>('playlists');
  
  const userPlaylists = [
    { id: "mining-mix", name: "Mining Mix", description: "Perfect tunes for your mining adventures", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { id: "redstone-beats", name: "Redstone Beats", description: "Electrifying rhythms for your redstone builds", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
    { id: "nether-jams", name: "Nether Jams", description: "Hot tracks for your Nether expeditions", imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
    { id: "village-vibes", name: "Village Vibes", description: "Relaxing tunes from the village", imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" },
  ];
  
  const followedArtists = [
    { id: "c418", name: "C418", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { id: "lena-raine", name: "Lena Raine", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
    { id: "pixel-beats", name: "PixelBeats", imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
  ];
  
  const savedAlbums = [
    { id: "c418-minecraft", name: "Minecraft Volume Alpha", artist: "C418", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { id: "note-blocks", name: "Note Block Symphonies", artist: "PixelBeats", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
  ];

  return (
    <div className="pb-12">
      <header className="mb-8 pt-4">
        <h1 className="text-2xl font-minecraft text-white mb-6">Your Library</h1>
        
        {/* Tab navigation */}
        <div className="flex border-b border-gray-800 mb-6">
          <TabButton 
            active={activeTab === 'playlists'} 
            onClick={() => setActiveTab('playlists')}
            icon={<Disc size={16} />}
            label="Playlists"
          />
          <TabButton 
            active={activeTab === 'artists'} 
            onClick={() => setActiveTab('artists')}
            icon={<User size={16} />}
            label="Artists"
          />
          <TabButton 
            active={activeTab === 'albums'} 
            onClick={() => setActiveTab('albums')}
            icon={<Music size={16} />}
            label="Albums"
          />
        </div>
      </header>
      
      {/* Content based on active tab */}
      {activeTab === 'playlists' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {userPlaylists.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              id={playlist.id}
              name={playlist.name}
              description={playlist.description}
              imageUrl={playlist.imageUrl}
            />
          ))}
          
          <Link
            to="/create-playlist"
            className="group bg-spotify-lightBlack p-4 rounded-none transition-colors hover:bg-gray-800 minecraft-card flex flex-col items-center justify-center aspect-square"
          >
            <div className="w-16 h-16 bg-craft-stone flex items-center justify-center mb-4 pixel-border">
              <span className="text-3xl text-white font-minecraft">+</span>
            </div>
            <span className="font-minecraft text-sm text-white">Create Playlist</span>
          </Link>
        </div>
      )}
      
      {activeTab === 'artists' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {followedArtists.map((artist) => (
            <ArtistCard
              key={artist.id}
              id={artist.id}
              name={artist.name}
              imageUrl={artist.imageUrl}
            />
          ))}
        </div>
      )}
      
      {activeTab === 'albums' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {savedAlbums.map((album) => (
            <AlbumCard
              key={album.id}
              id={album.id}
              name={album.name}
              artist={album.artist}
              imageUrl={album.imageUrl}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const TabButton = ({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 py-3 px-4 font-minecraft text-sm transition-colors ${
      active 
        ? 'border-b-2 border-spotify-green text-white' 
        : 'text-gray-400 hover:text-white'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default Library;
