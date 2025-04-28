
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Filter } from "lucide-react";
import PlaylistCard from "@/components/ui/PlaylistCard";

const SeeAllPlaylists = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample data - in a real app this would come from your API
  const playlists = [
    {
      id: "mining-mix",
      name: "Mining Mix",
      description: "Perfect tunes for your mining adventures",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      id: "redstone-beats",
      name: "Redstone Beats",
      description: "Electrifying rhythms for your redstone builds",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
    },
    {
      id: "nether-jams",
      name: "Nether Jams",
      description: "Hot tracks for your Nether expeditions",
      imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
    },
    {
      id: "village-vibes",
      name: "Village Vibes",
      description: "Peaceful tunes for village life",
      imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
    },
    {
      id: "ender-dragon-ost",
      name: "Ender Dragon OST",
      description: "Epic music for the final battle",
      imageUrl: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3"
    },
    {
      id: "underwater-tunes",
      name: "Underwater Tunes",
      description: "Perfect for ocean exploration",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      id: "cave-sounds",
      name: "Cave Sounds",
      description: "Eerie music for spelunking",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
    },
    {
      id: "end-city-vibes",
      name: "End City Vibes",
      description: "Ethereal sounds for End exploration",
      imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
    }
  ];
  
  // Filter playlists based on search query
  const filteredPlaylists = playlists.filter(playlist => 
    playlist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    playlist.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="pb-12 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-b from-craft-dirt/30 to-spotify-darkGray p-6 mb-8 minecraft-card">
        <div className="flex items-center">
          <Link to="/" className="mr-4">
            <Button variant="ghost" size="sm" className="font-minecraft text-white">
              <ArrowLeft size={16} className="mr-1" /> Back
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-minecraft text-white">All Playlists</h1>
        </div>
        
        <div className="flex w-full md:w-auto">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
            <Input
              type="text"
              placeholder="Search playlists..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pixel-input pl-10 w-full"
            />
          </div>
          <Button variant="outline" className="ml-2 pixel-button">
            <Filter size={16} />
          </Button>
        </div>
      </div>
      
      {/* Playlists Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredPlaylists.map((playlist) => (
          <div key={playlist.id} className="animate-scale-in hover-scale">
            <PlaylistCard
              id={playlist.id}
              name={playlist.name}
              description={playlist.description}
              imageUrl={playlist.imageUrl}
            />
          </div>
        ))}
        
        <Link
          to="/create-playlist"
          className="group bg-spotify-lightBlack p-4 rounded-none transition-colors hover:bg-gray-800 minecraft-card flex flex-col items-center justify-center aspect-square animate-scale-in hover-scale"
        >
          <div className="w-16 h-16 bg-craft-stone flex items-center justify-center mb-4 pixel-border">
            <span className="text-3xl text-white font-minecraft">+</span>
          </div>
          <span className="font-minecraft text-sm text-white">Create Playlist</span>
        </Link>
      </div>
    </div>
  );
};

export default SeeAllPlaylists;
