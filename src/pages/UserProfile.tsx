
import { useState } from "react";
import { Link } from "react-router-dom";
import { Edit, Music, Disc, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PlaylistCard from "@/components/ui/PlaylistCard";
import AlbumCard from "@/components/ui/AlbumCard";
import ArtistCard from "@/components/ui/ArtistCard";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("playlists");
  
  const user = {
    username: "StevePlayer",
    email: "steve@minecraft.net",
    followers: 23,
    following: 45,
    avatarUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  };
  
  const userPlaylists = [
    { id: "mining-mix", name: "Mining Mix", description: "Perfect tunes for your mining adventures", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { id: "redstone-beats", name: "Redstone Beats", description: "Electrifying rhythms for your redstone builds", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
  ];
  
  const savedAlbums = [
    { id: "c418-minecraft", name: "Minecraft Volume Alpha", artist: "C418", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { id: "note-blocks", name: "Note Block Symphonies", artist: "PixelBeats", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
  ];
  
  const followedArtists = [
    { id: "c418", name: "C418", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { id: "lena-raine", name: "Lena Raine", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
  ];
  
  return (
    <div className="pb-12">
      {/* Profile header */}
      <div className="flex flex-col md:flex-row items-center gap-6 bg-gradient-to-b from-craft-dirt/50 to-spotify-darkGray p-6 mb-8 minecraft-card">
        <div className="w-32 h-32 md:w-40 md:h-40 pixel-border bg-craft-stone overflow-hidden">
          <img 
            src={user.avatarUrl} 
            alt={user.username} 
            className="w-full h-full object-cover"
            style={{imageRendering: 'pixelated'}}
          />
        </div>
        
        <div className="text-center md:text-left">
          <div className="text-sm font-minecraft uppercase text-gray-400 mb-1">Profile</div>
          <h1 className="text-3xl md:text-5xl font-minecraft text-white mb-2">{user.username}</h1>
          <div className="text-sm font-minecraft text-gray-300 mb-4">
            <span className="mr-4">{user.followers} Followers</span>
            <span>{user.following} Following</span>
          </div>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Button 
              className="font-minecraft text-xs pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white border-craft-bedrock"
              size="sm"
            >
              <Edit size={14} className="mr-1" /> Edit Profile
            </Button>
            <Link to="/logout">
              <Button 
                variant="outline" 
                size="sm"
                className="font-minecraft text-xs pixel-button bg-craft-stone hover:bg-craft-stone/80 text-white border-craft-bedrock"
              >
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <Tabs defaultValue="playlists" className="w-full" onValueChange={setActiveTab} value={activeTab}>
        <TabsList className="bg-spotify-lightBlack mb-6 border-b border-gray-800 w-full justify-start h-auto">
          <TabsTrigger 
            value="playlists" 
            className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3"
          >
            <Disc size={16} className="mr-2" /> Playlists
          </TabsTrigger>
          <TabsTrigger 
            value="artists" 
            className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3"
          >
            <UserIcon size={16} className="mr-2" /> Artists
          </TabsTrigger>
          <TabsTrigger 
            value="albums" 
            className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3"
          >
            <Music size={16} className="mr-2" /> Albums
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="playlists" className="mt-0">
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
        </TabsContent>
        
        <TabsContent value="artists" className="mt-0">
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
        </TabsContent>
        
        <TabsContent value="albums" className="mt-0">
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserProfile;
