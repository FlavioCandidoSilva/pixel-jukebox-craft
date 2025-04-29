
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, Music, User, Clock, Heart, Calendar } from "lucide-react";
import SongRow from "@/components/ui/SongRow";
import ArtistCard from "@/components/ui/ArtistCard";
import AlbumCard from "@/components/ui/AlbumCard";

const TopMusic = () => {
  const [timeRange, setTimeRange] = useState("week");
  
  const topSongs = [
    { id: "1", title: "Sweden", artist: "C418", album: "Minecraft Volume Alpha", duration: "3:35", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { id: "2", title: "Pigstep", artist: "Lena Raine", album: "Minecraft: Nether Update", duration: "2:28", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
    { id: "3", title: "Wet Hands", artist: "C418", album: "Minecraft Volume Alpha", duration: "1:32", imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
    { id: "4", title: "Living Mice", artist: "C418", album: "Minecraft Volume Alpha", duration: "2:57", imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" },
    { id: "5", title: "Haggstrom", artist: "C418", album: "Minecraft Volume Alpha", duration: "3:24", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { id: "6", title: "Key", artist: "C418", album: "Minecraft Volume Beta", duration: "1:05", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
    { id: "7", title: "Door", artist: "C418", album: "Minecraft Volume Beta", duration: "1:51", imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
    { id: "8", title: "Otherside", artist: "Lena Raine", album: "Minecraft: Caves & Cliffs", duration: "3:15", imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" },
    { id: "9", title: "Blocks", artist: "C418", album: "Minecraft Volume Alpha", duration: "3:32", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { id: "10", title: "Chirp", artist: "C418", album: "Minecraft Volume Beta", duration: "3:05", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
  ];
  
  const topArtists = [
    { id: "c418", name: "C418", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { id: "lena-raine", name: "Lena Raine", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
    { id: "pixel-beats", name: "PixelBeats", imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
    { id: "noteblock-masters", name: "Noteblock Masters", imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" },
    { id: "mojang-sound", name: "Mojang Sound", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
  ];
  
  const topAlbums = [
    { id: "c418-minecraft", name: "Minecraft Volume Alpha", artist: "C418", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { id: "note-blocks", name: "Minecraft Volume Beta", artist: "C418", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
    { id: "nether", name: "Minecraft: Nether Update", artist: "Lena Raine", imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
    { id: "caves", name: "Minecraft: Caves & Cliffs", artist: "Lena Raine", imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" },
    { id: "village", name: "Village & Pillage", artist: "Mojang Sound", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
  ];
  
  return (
    <div className="pb-12">
      <div className="bg-gradient-to-b from-craft-grass/20 to-transparent p-6 mb-6 animate-fade-in">
        <div className="flex items-center mb-2">
          <TrendingUp size={24} className="mr-2 text-spotify-green" />
          <h1 className="text-3xl font-minecraft text-white">Top Music</h1>
        </div>
        <p className="font-minecraft text-sm text-gray-300">Discover the most popular music on SpotiCraft</p>
        
        <div className="mt-6 flex items-center gap-4">
          <span className="text-sm font-minecraft text-gray-300">Time Range:</span>
          <Select
            value={timeRange}
            onValueChange={setTimeRange}
          >
            <SelectTrigger className="w-40 bg-spotify-lightBlack border-gray-700 font-minecraft text-xs">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent className="bg-spotify-black border-gray-700 font-minecraft">
              <SelectItem value="day" className="font-minecraft text-xs">Today</SelectItem>
              <SelectItem value="week" className="font-minecraft text-xs">This Week</SelectItem>
              <SelectItem value="month" className="font-minecraft text-xs">This Month</SelectItem>
              <SelectItem value="year" className="font-minecraft text-xs">This Year</SelectItem>
              <SelectItem value="all" className="font-minecraft text-xs">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Tabs defaultValue="songs" className="w-full">
        <TabsList className="bg-spotify-lightBlack mb-6 border-b border-gray-800 w-full justify-start h-auto overflow-x-auto minecraft-scrollbar">
          <TabsTrigger 
            value="songs" 
            className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3"
          >
            <Music size={16} className="mr-2" /> Top Songs
          </TabsTrigger>
          <TabsTrigger 
            value="artists" 
            className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3"
          >
            <User size={16} className="mr-2" /> Top Artists
          </TabsTrigger>
          <TabsTrigger 
            value="albums" 
            className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3"
          >
            <Calendar size={16} className="mr-2" /> Top Albums
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="songs" className="animate-fade-in">
          <div className="minecraft-card bg-spotify-lightBlack p-4 overflow-hidden">
            <div className="grid grid-cols-[16px_4fr_3fr_1fr] md:grid-cols-[16px_6fr_4fr_3fr_1fr] gap-4 px-4 py-3 border-b border-gray-800 mb-2">
              <div className="text-sm font-minecraft text-gray-400">#</div>
              <div className="text-sm font-minecraft text-gray-400">Title</div>
              <div className="hidden md:block text-sm font-minecraft text-gray-400">Album</div>
              <div></div>
              <div className="flex justify-end">
                <Clock size={16} className="text-gray-400" />
              </div>
            </div>
            
            <div className="max-h-[calc(100vh-350px)] overflow-y-auto minecraft-scrollbar">
              {topSongs.map((song, index) => (
                <SongRow
                  key={song.id}
                  index={index + 1}
                  title={song.title}
                  artist={song.artist}
                  album={song.album}
                  duration={song.duration}
                  imageUrl={song.imageUrl}
                />
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="artists" className="animate-fade-in">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {topArtists.map((artist, index) => (
              <div key={artist.id} className="relative">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-spotify-green text-black font-minecraft text-sm flex items-center justify-center z-10 pixel-border">
                  #{index + 1}
                </div>
                <ArtistCard
                  id={artist.id}
                  name={artist.name}
                  imageUrl={artist.imageUrl}
                />
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="albums" className="animate-fade-in">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {topAlbums.map((album, index) => (
              <div key={album.id} className="relative">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-spotify-green text-black font-minecraft text-sm flex items-center justify-center z-10 pixel-border">
                  #{index + 1}
                </div>
                <AlbumCard
                  id={album.id}
                  name={album.name}
                  artist={album.artist}
                  imageUrl={album.imageUrl}
                />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TopMusic;
