import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SongRow from "@/components/ui/SongRow";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Plus, Music, Search, ArrowLeft, Image as ImageIcon, Loader2 } from "lucide-react";
import { toast } from "sonner";

const playlistSchema = z.object({
  name: z.string().min(1, "Playlist name is required"),
  description: z.string().optional(),
  isPublic: z.boolean().default(true),
});

// Mock songs for search results
const mockSongs = [
  { id: 1, title: "Sweden", artist: "C418", album: "Minecraft Volume Alpha", duration: "3:35", imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
  { id: 2, title: "Wet Hands", artist: "C418", album: "Minecraft Volume Alpha", duration: "1:32", imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
  { id: 3, title: "Haggstrom", artist: "C418", album: "Minecraft Volume Alpha", duration: "3:24", imageSrc: "https://images.unsplash.com/photo-1487958449943-2429e8be8625" },
  { id: 4, title: "Beginning", artist: "C418", album: "Minecraft Volume Alpha", duration: "1:54", imageSrc: "https://images.unsplash.com/photo-1501854140801-50d01698950b" },
  { id: 5, title: "Pigstep", artist: "Lena Raine", album: "Minecraft: Nether Update", duration: "2:28", imageSrc: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3" },
];

const CreatePlaylist = () => {
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [selectedSongs, setSelectedSongs] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const form = useForm<z.infer<typeof playlistSchema>>({
    resolver: zodResolver(playlistSchema),
    defaultValues: {
      name: "",
      description: "",
      isPublic: true,
    },
  });

  // Simulated file upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCoverImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Simulated search functionality
  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    setIsSearching(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const results = mockSongs.filter(song => 
        song.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        song.artist.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
      setIsSearching(false);
    }, 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const addSong = (song: any) => {
    if (!selectedSongs.some(s => s.id === song.id)) {
      setSelectedSongs([...selectedSongs, song]);
      toast.success(`Added "${song.title}" to playlist`);
    } else {
      toast.error(`"${song.title}" is already in your playlist`);
    }
  };

  const removeSong = (songId: number) => {
    setSelectedSongs(selectedSongs.filter(song => song.id !== songId));
    toast.success("Song removed from playlist");
  };

  const onSubmit = (values: z.infer<typeof playlistSchema>) => {
    if (selectedSongs.length === 0) {
      toast.error("Please add at least one song to your playlist");
      return;
    }

    const playlistData = {
      ...values,
      coverImage,
      songs: selectedSongs,
    };
    
    console.log("Creating playlist:", playlistData);
    toast.success("Playlist created successfully!");
    
    // Reset form after submission
    form.reset();
    setCoverImage(null);
    setSelectedSongs([]);
    setSearchResults([]);
    setSearchTerm("");
  };

  return (
    <div className="pb-24">
      {/* Header with Minecraft grass block texture */}
      <div className="relative">
        <div 
          className="h-16 w-full bg-craft-grass/60 absolute top-0 left-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='4' height='4' fill='%235D8731'/%3E%3Crect x='4' width='4' height='4' fill='%2367943A'/%3E%3Crect x='8' width='4' height='4' fill='%235D8731'/%3E%3Crect x='12' width='4' height='4' fill='%2367943A'/%3E%3Crect y='4' width='4' height='4' fill='%2367943A'/%3E%3Crect x='4' y='4' width='4' height='4' fill='%235D8731'/%3E%3Crect x='8' y='4' width='4' height='4' fill='%2367943A'/%3E%3Crect x='12' y='4' width='4' height='4' fill='%235D8731'/%3E%3Crect y='8' width='4' height='4' fill='%235D8731'/%3E%3Crect x='4' y='8' width='4' height='4' fill='%2367943A'/%3E%3Crect x='8' y='8' width='4' height='4' fill='%235D8731'/%3E%3Crect x='12' y='8' width='4' height='4' fill='%2367943A'/%3E%3Crect y='12' width='4' height='4' fill='%2367943A'/%3E%3Crect x='4' y='12' width='4' height='4' fill='%235D8731'/%3E%3Crect x='8' y='12' width='4' height='4' fill='%2367943A'/%3E%3Crect x='12' y='12' width='4' height='4' fill='%235D8731'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            imageRendering: 'pixelated'
          }}
        ></div>
        <div className="relative pt-16 pb-6 px-6 bg-gradient-to-b from-craft-dirt/40 to-transparent">
          <Link to="/" className="font-minecraft text-sm text-gray-400 hover:text-white mb-2 inline-block">
            <ArrowLeft size={16} className="inline mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-minecraft text-white">Create New Playlist</h1>
        </div>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Playlist Details Form */}
          <div className="lg:col-span-1 animate-[fade-in_0.3s_ease-out]">
            <div className="minecraft-card bg-spotify-lightBlack p-6">
              <h2 className="font-minecraft text-xl text-white mb-6">Playlist Details</h2>
              
              {/* Cover Image Upload */}
              <div className="mb-6">
                <div 
                  className="w-full aspect-square bg-craft-stone pixel-border mb-3 flex items-center justify-center overflow-hidden cursor-pointer relative hover:opacity-90 transition-opacity"
                  onClick={() => document.getElementById('cover-upload')?.click()}
                >
                  {coverImage ? (
                    <img 
                      src={coverImage} 
                      alt="Cover Preview" 
                      className="w-full h-full object-cover"
                      style={{ imageRendering: 'pixelated' }}
                    />
                  ) : (
                    <div className="text-center">
                      <ImageIcon size={40} className="mx-auto mb-2 text-gray-400" />
                      <p className="font-minecraft text-xs text-gray-400">Click to upload cover image</p>
                    </div>
                  )}
                </div>
                <input
                  id="cover-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
              
              {/* Playlist Form */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-minecraft text-sm">Playlist Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="My Awesome Playlist" 
                            className="pixel-input"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-minecraft text-sm">Description (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your playlist..." 
                            className="pixel-input min-h-[100px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white"
                    disabled={selectedSongs.length === 0}
                  >
                    <Plus size={16} className="mr-2" />
                    Create Playlist
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          
          {/* Song Selection */}
          <div className="lg:col-span-2 animate-[fade-in_0.5s_ease-out]">
            <div className="minecraft-card bg-spotify-lightBlack p-6 mb-8">
              <h2 className="font-minecraft text-xl text-white mb-4">Add Songs</h2>
              
              {/* Search Box */}
              <div className="relative mb-6">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for songs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="pl-10 pixel-input"
                />
                <Button 
                  onClick={handleSearch} 
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 px-3 pixel-button bg-craft-stone hover:bg-craft-stone/80 text-white"
                  disabled={isSearching}
                >
                  {isSearching ? <Loader2 size={16} className="animate-spin" /> : "Search"}
                </Button>
              </div>
              
              {/* Search Results */}
              {searchResults.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-minecraft text-sm text-gray-300 mb-2">Search Results</h3>
                  <div className="space-y-1 max-h-80 overflow-y-auto minecraft-scrollbar">
                    {searchResults.map((song) => (
                      <div 
                        key={`search-${song.id}`} 
                        className="group flex items-center hover:bg-gray-800 p-2 transition-colors"
                      >
                        <SongRow
                          title={song.title}
                          artist={song.artist}
                          album={song.album}
                          duration={song.duration}
                          imageSrc={song.imageSrc}
                          imageUrl={song.imageSrc} // Add this line to fix the TypeScript error
                        />
                        <Button 
                          onClick={() => addSong(song)} 
                          size="sm" 
                          className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white h-8 w-8 p-0"
                        >
                          <Plus size={16} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Selected Songs */}
              <div>
                <h3 className="font-minecraft text-sm text-gray-300 mb-2">
                  Playlist Songs ({selectedSongs.length})
                </h3>
                
                {selectedSongs.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-10 border-2 border-dashed border-gray-700 rounded-md">
                    <Music size={40} className="text-gray-500 mb-3" />
                    <p className="font-minecraft text-sm text-gray-500 mb-1">No songs added yet</p>
                    <p className="font-minecraft text-xs text-gray-600">Search for songs to add to your playlist</p>
                  </div>
                ) : (
                  <div className="space-y-1">
                    {selectedSongs.map((song, index) => (
                      <div 
                        key={`selected-${song.id}`} 
                        className="group flex items-center hover:bg-gray-800 p-2 transition-colors animate-[fade-in_0.3s_ease-out]"
                      >
                        <span className="font-minecraft text-gray-400 w-8 text-center">{index + 1}</span>
                        <SongRow
                          title={song.title}
                          artist={song.artist}
                          album={song.album}
                          duration={song.duration}
                          imageSrc={song.imageSrc}
                          imageUrl={song.imageSrc} // Add this line to fix the TypeScript error
                        />
                        <Button 
                          onClick={() => removeSong(song.id)} 
                          size="sm"
                          variant="destructive"
                          className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0"
                        >
                          <span className="text-lg">×</span>
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePlaylist;
