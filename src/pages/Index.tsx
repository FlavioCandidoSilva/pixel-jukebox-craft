
import { useEffect, useState } from "react";
import { ChevronRight, Play, TrendingUp, Bell, Star } from "lucide-react";
import { Link } from "react-router-dom";
import AlbumCard from "@/components/ui/AlbumCard";
import PlaylistCard from "@/components/ui/PlaylistCard";
import CategoryCard from "@/components/ui/CategoryCard";
import ArtistCard from "@/components/ui/ArtistCard";
import FeaturedCarousel from "@/components/ui/FeaturedCarousel";
import { Button } from "@/components/ui/button";

const greeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

const carouselItems = [
  {
    id: "1",
    title: "New Release: Minecraft Nether Update OST",
    description: "Explore the mysterious and haunting sounds of the Nether with this exclusive soundtrack.",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    id: "2",
    title: "Featured Artist: Pixel Beats",
    description: "Discover the unique electronic sounds inspired by classic games.",
    imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
  },
  {
    id: "3",
    title: "SpotiCraft Exclusive: Mining Mix Vol. 3",
    description: "The perfect soundtrack for your mining adventures.",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
  }
];

const featuredPlaylists = [
  { id: "mining-mix", name: "Mining Mix", description: "Perfect tunes for your mining adventures", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
  { id: "redstone-beats", name: "Redstone Beats", description: "Electrifying rhythms for your redstone builds", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
  { id: "nether-jams", name: "Nether Jams", description: "Hot tracks for your Nether expeditions", imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
  { id: "village-vibes", name: "Village Vibes", description: "Relaxing tunes from the village", imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" },
  { id: "ender-dragon-ost", name: "Ender Dragon OST", description: "Epic battle music for the final boss", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
];

const newReleases = [
  { id: "c418-minecraft", name: "Minecraft Volume Alpha", artist: "C418", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
  { id: "note-blocks", name: "Note Block Symphonies", artist: "PixelBeats", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
  { id: "cave-sounds", name: "Mysterious Cave Sounds", artist: "Mojang Sound", imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
  { id: "pigstep", name: "Pigstep & Beyond", artist: "Lena Raine", imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" },
];

const topArtists = [
  { id: "c418", name: "C418", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
  { id: "lena-raine", name: "Lena Raine", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
  { id: "pixel-beats", name: "PixelBeats", imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
  { id: "noteblock-masters", name: "Noteblock Masters", imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" },
];

const categories = [
  { id: "ambient", name: "Ambient", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475", color: "#876443" },
  { id: "chiptune", name: "Chiptune", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5", color: "#5D8731" },
  { id: "retro-games", name: "Retro Games", imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", color: "#3D99F6" },
  { id: "synthwave", name: "Synthwave", imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b", color: "#D86D30" },
];

const listeningNow = [
  { username: "DiamondMiner", song: "Sweden", artist: "C418", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
  { username: "EnderSlayer", song: "Pigstep", artist: "Lena Raine", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
  { username: "RedstoneWizard", song: "Wet Hands", artist: "C418", imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
];

const Index = () => {
  const [currentGreeting, setCurrentGreeting] = useState(greeting());
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGreeting(greeting());
    }, 60000); // Update greeting every minute
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pb-24">
      {/* Header with greeting */}
      <header className="mb-8 pt-8 flex items-center justify-between">
        <h1 className="text-2xl font-minecraft text-white">{currentGreeting}</h1>
        
        {!isLoggedIn && (
          <div className="flex items-center gap-3">
            <Link to="/register">
              <button className="font-minecraft text-xs py-2 px-4 text-gray-300 hover:text-white transition-colors">
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button className="font-minecraft text-xs pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white border-craft-bedrock">
                Login
              </button>
            </Link>
          </div>
        )}
      </header>

      {/* Notification */}
      {showNotification && (
        <div className="relative bg-gradient-to-r from-craft-diamond/30 to-craft-dirt/30 p-4 mb-8 minecraft-card animate-fade-in">
          <button 
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
            onClick={() => setShowNotification(false)}
          >
            ×
          </button>
          <div className="flex items-center gap-3">
            <Bell size={20} className="text-craft-diamond" />
            <div>
              <h3 className="font-minecraft text-white text-sm">New releases available!</h3>
              <p className="font-minecraft text-xs text-gray-300">Check out the latest tracks from C418 and Lena Raine.</p>
            </div>
            <Link to="/see-all-albums" className="ml-auto">
              <Button 
                variant="outline" 
                size="sm"
                className="font-minecraft text-xs bg-craft-stone hover:bg-craft-stone/80 text-white"
              >
                Explore
              </Button>
            </Link>
          </div>
        </div>
      )}
      
      {/* Featured carousel */}
      <section className="mb-8 animate-fade-in">
        <FeaturedCarousel items={carouselItems} />
      </section>
      
      {/* Recently played section */}
      <section className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {featuredPlaylists.slice(0, 3).map((playlist) => (
            <Link
              key={playlist.id}
              to={`/playlist/${playlist.id}`}
              className="flex items-center bg-spotify-lightBlack hover:bg-gray-800 group transition-colors pixel-border overflow-hidden h-16 animate-slide-in"
            >
              <img
                src={playlist.imageUrl}
                alt={playlist.name}
                className="h-16 w-16 object-cover shrink-0"
                style={{ imageRendering: 'pixelated' }}
              />
              <span className="font-minecraft text-sm text-white px-4 truncate">{playlist.name}</span>
              <div className="ml-auto opacity-0 group-hover:opacity-100 bg-spotify-green p-2 rounded-full mr-2">
                <Play size={16} fill="black" stroke="black" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* What people are listening to */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-minecraft text-white">Live Listening Now</h2>
          <Link to="/community" className="text-sm font-minecraft text-gray-400 hover:text-white flex items-center">
            See all <ChevronRight size={16} />
          </Link>
        </div>
        <div className="flex flex-wrap gap-4">
          {listeningNow.map((user, index) => (
            <div key={index} className="bg-spotify-lightBlack p-3 rounded-sm flex items-center gap-3 animate-pulse">
              <div className="relative">
                <div className="w-10 h-10 bg-craft-stone">
                  <img 
                    src={user.imageUrl} 
                    alt={user.song}
                    className="w-full h-full object-cover"
                    style={{imageRendering: 'pixelated'}}
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-spotify-green rounded-full p-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-300 font-minecraft">{user.username}</p>
                <p className="text-sm text-white font-minecraft">{user.song} - {user.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Top tracks section */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-minecraft text-white flex items-center gap-2">
            <TrendingUp size={20} className="text-spotify-green" />
            Top Tracks
          </h2>
          <Link to="/top-music" className="text-sm font-minecraft text-gray-400 hover:text-white flex items-center">
            See all <ChevronRight size={16} />
          </Link>
        </div>
        <div className="bg-spotify-lightBlack minecraft-card p-4">
          {newReleases.slice(0, 3).map((track, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 p-2 hover:bg-gray-800 transition-colors group cursor-pointer"
            >
              <div className="w-6 text-center font-minecraft text-gray-400">{i + 1}</div>
              <img 
                src={track.imageUrl} 
                alt={track.name} 
                className="w-10 h-10 object-cover bg-craft-stone"
                style={{imageRendering: 'pixelated'}}
              />
              <div>
                <p className="font-minecraft text-sm text-white">{track.name}</p>
                <p className="font-minecraft text-xs text-gray-400">{track.artist}</p>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100">
                <button className="p-1.5 bg-spotify-green rounded-full">
                  <Play size={12} fill="black" stroke="black" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Featured playlists section */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-minecraft text-white">Featured Playlists</h2>
          <Link to="/see-all-playlists" className="text-sm font-minecraft text-gray-400 hover:text-white flex items-center">
            See all <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {featuredPlaylists.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              id={playlist.id}
              name={playlist.name}
              description={playlist.description}
              imageUrl={playlist.imageUrl}
            />
          ))}
        </div>
      </section>
      
      {/* New releases section */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-minecraft text-white">New Releases</h2>
          <Link to="/see-all-albums" className="text-sm font-minecraft text-gray-400 hover:text-white flex items-center">
            See all <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {newReleases.map((album) => (
            <AlbumCard
              key={album.id}
              id={album.id}
              name={album.name}
              artist={album.artist}
              imageUrl={album.imageUrl}
            />
          ))}
        </div>
      </section>
      
      {/* Top artists section */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-minecraft text-white">Top Artists</h2>
          <Link to="/see-all-artists" className="text-sm font-minecraft text-gray-400 hover:text-white flex items-center">
            See all <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {topArtists.map((artist) => (
            <ArtistCard
              key={artist.id}
              id={artist.id}
              name={artist.name}
              imageUrl={artist.imageUrl}
            />
          ))}
        </div>
      </section>
      
      {/* Categories section */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-minecraft text-white">Categories</h2>
          <Link to="/categories" className="text-sm font-minecraft text-gray-400 hover:text-white flex items-center">
            See all <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              name={category.name}
              imageUrl={category.imageUrl}
              backgroundColor={category.color}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
