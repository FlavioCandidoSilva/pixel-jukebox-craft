
import { useEffect, useState } from "react";
import { ChevronRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import AlbumCard from "@/components/ui/AlbumCard";
import PlaylistCard from "@/components/ui/PlaylistCard";
import CategoryCard from "@/components/ui/CategoryCard";
import ArtistCard from "@/components/ui/ArtistCard";

const greeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

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

const Index = () => {
  const [currentGreeting, setCurrentGreeting] = useState(greeting());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGreeting(greeting());
    }, 60000); // Update greeting every minute
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pb-12">
      {/* Header with greeting */}
      <header className="mb-8 pt-8">
        <h1 className="text-2xl font-minecraft text-white">{currentGreeting}</h1>
      </header>
      
      {/* Recently played section */}
      <section className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {featuredPlaylists.slice(0, 3).map((playlist) => (
            <Link
              key={playlist.id}
              to={`/playlist/${playlist.id}`}
              className="flex items-center bg-spotify-lightBlack hover:bg-gray-800 group transition-colors pixel-border overflow-hidden h-16"
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
      
      {/* Featured playlists section */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-minecraft text-white">Featured Playlists</h2>
          <Link to="/playlists" className="text-sm font-minecraft text-gray-400 hover:text-white flex items-center">
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
          <Link to="/albums" className="text-sm font-minecraft text-gray-400 hover:text-white flex items-center">
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
          <Link to="/artists" className="text-sm font-minecraft text-gray-400 hover:text-white flex items-center">
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
