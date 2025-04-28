
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Filter } from "lucide-react";
import ArtistCard from "@/components/ui/ArtistCard";

const SeeAllArtists = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample data - in a real app this would come from your API
  const artists = [
    {
      id: "c418",
      name: "C418",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      id: "lena-raine",
      name: "Lena Raine",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
    },
    {
      id: "pixel-beats",
      name: "PixelBeats",
      imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
    },
    {
      id: "craft-tunes",
      name: "CraftTunes",
      imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
    },
    {
      id: "note-blocks",
      name: "NoteBlocks",
      imageUrl: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3"
    },
    {
      id: "biome-sounds",
      name: "BiomeSounds",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      id: "ender-tunes",
      name: "EnderTunes",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
    },
    {
      id: "steve-dj",
      name: "Steve DJ",
      imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
    }
  ];
  
  // Filter artists based on search query
  const filteredArtists = artists.filter(artist => 
    artist.name.toLowerCase().includes(searchQuery.toLowerCase())
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
          <h1 className="text-3xl md:text-4xl font-minecraft text-white">All Artists</h1>
        </div>
        
        <div className="flex w-full md:w-auto">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
            <Input
              type="text"
              placeholder="Search artists..."
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
      
      {/* Artists Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredArtists.map((artist) => (
          <div key={artist.id} className="animate-scale-in hover-scale">
            <ArtistCard
              id={artist.id}
              name={artist.name}
              imageUrl={artist.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeeAllArtists;
