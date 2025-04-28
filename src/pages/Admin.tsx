
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Music, User, Plus, Disc, Calendar } from "lucide-react";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const songSchema = z.object({
  title: z.string().min(1, "Title is required"),
  duration: z.string().min(1, "Duration is required"),
  albumId: z.string().min(1, "Album is required"),
  artistIds: z.array(z.string()).min(1, "At least one artist is required"),
  genres: z.array(z.string()).min(1, "At least one genre is required"),
  url: z.string().url("Please enter a valid URL"),
  explicit: z.boolean().default(false),
  releaseDate: z.string().min(1, "Release date is required"),
});

const artistSchema = z.object({
  name: z.string().min(1, "Name is required"),
  genre: z.string().min(1, "Genre is required"),
  biography: z.string().nullable(),
});

const albumSchema = z.object({
  title: z.string().min(1, "Title is required"),
  releaseDate: z.string().min(1, "Release date is required"),
  artistId: z.string().min(1, "Artist is required"),
});

// Mock data for the dropdowns
const mockArtists = [
  { id: "1", name: "C418" },
  { id: "2", name: "Lena Raine" },
  { id: "3", name: "Notch" },
];

const mockAlbums = [
  { id: "1", title: "Minecraft Volume Alpha" },
  { id: "2", title: "Minecraft Volume Beta" },
  { id: "3", title: "Minecraft: Nether Update" },
];

const mockGenres = [
  { id: "1", name: "Ambient" },
  { id: "2", name: "Electronic" },
  { id: "3", name: "Soundtrack" },
  { id: "4", name: "Lo-fi" },
];

const Admin = () => {
  const [activeTab, setActiveTab] = useState("songs");

  // Song form
  const songForm = useForm<z.infer<typeof songSchema>>({
    resolver: zodResolver(songSchema),
    defaultValues: {
      title: "",
      duration: "",
      albumId: "",
      artistIds: [],
      genres: [],
      url: "",
      explicit: false,
      releaseDate: "",
    },
  });

  // Artist form
  const artistForm = useForm<z.infer<typeof artistSchema>>({
    resolver: zodResolver(artistSchema),
    defaultValues: {
      name: "",
      genre: "",
      biography: "",
    },
  });

  // Album form
  const albumForm = useForm<z.infer<typeof albumSchema>>({
    resolver: zodResolver(albumSchema),
    defaultValues: {
      title: "",
      releaseDate: "",
      artistId: "",
    },
  });

  // Submit handlers
  const onSongSubmit = (values: z.infer<typeof songSchema>) => {
    console.log(values);
    toast.success("Song added successfully!");
    songForm.reset();
  };

  const onArtistSubmit = (values: z.infer<typeof artistSchema>) => {
    console.log(values);
    toast.success("Artist added successfully!");
    artistForm.reset();
  };

  const onAlbumSubmit = (values: z.infer<typeof albumSchema>) => {
    console.log(values);
    toast.success("Album added successfully!");
    albumForm.reset();
  };

  return (
    <div className="pb-16">
      <div className="bg-gradient-to-b from-craft-grass/20 to-transparent p-6 mb-6">
        <h1 className="text-3xl font-minecraft text-white mb-2">Admin Dashboard</h1>
        <p className="font-minecraft text-sm text-gray-300">Manage songs, artists, and albums</p>
      </div>
      
      <div className="minecraft-card bg-spotify-lightBlack p-6 mb-8 animate-fade-in">
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-8 w-full max-w-md mx-auto">
            <TabsTrigger
              value="songs"
              className="data-[state=active]:bg-craft-grass data-[state=active]:text-white font-minecraft text-xs"
            >
              <Music size={16} className="mr-2" />
              Songs
            </TabsTrigger>
            <TabsTrigger
              value="artists"
              className="data-[state=active]:bg-craft-grass data-[state=active]:text-white font-minecraft text-xs"
            >
              <User size={16} className="mr-2" />
              Artists
            </TabsTrigger>
            <TabsTrigger
              value="albums"
              className="data-[state=active]:bg-craft-grass data-[state=active]:text-white font-minecraft text-xs"
            >
              <Disc size={16} className="mr-2" />
              Albums
            </TabsTrigger>
          </TabsList>
          
          {/* Songs Form */}
          <TabsContent value="songs" className="focus-visible:outline-none">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-minecraft text-xl text-white mb-4">Add New Song</h2>
              <Form {...songForm}>
                <form onSubmit={songForm.handleSubmit(onSongSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={songForm.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-minecraft">Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter song title" className="pixel-input" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={songForm.control}
                      name="duration"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-minecraft">Duration (mm:ss)</FormLabel>
                          <FormControl>
                            <Input placeholder="3:45" className="pixel-input" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={songForm.control}
                      name="albumId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-minecraft">Album</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="pixel-input">
                                <SelectValue placeholder="Select album" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {mockAlbums.map((album) => (
                                <SelectItem key={album.id} value={album.id}>
                                  {album.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={songForm.control}
                      name="releaseDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-minecraft">Release Date</FormLabel>
                          <FormControl>
                            <Input type="date" className="pixel-input" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={songForm.control}
                      name="url"
                      render={({ field }) => (
                        <FormItem className="col-span-full">
                          <FormLabel className="font-minecraft">Song URL</FormLabel>
                          <FormControl>
                            <Input placeholder="https://example.com/song.mp3" className="pixel-input" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="pt-4 flex justify-center">
                    <Button type="submit" className="pixel-button bg-craft-grass hover:bg-craft-grass/80">
                      <Plus size={16} />
                      Add Song
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </TabsContent>
          
          {/* Artists Form */}
          <TabsContent value="artists" className="focus-visible:outline-none">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-minecraft text-xl text-white mb-4">Add New Artist</h2>
              <Form {...artistForm}>
                <form onSubmit={artistForm.handleSubmit(onArtistSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={artistForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-minecraft">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter artist name" className="pixel-input" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={artistForm.control}
                      name="genre"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-minecraft">Main Genre</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter main genre" className="pixel-input" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={artistForm.control}
                      name="biography"
                      render={({ field }) => (
                        <FormItem className="col-span-full">
                          <FormLabel className="font-minecraft">Biography</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Enter artist biography" 
                              className="pixel-input min-h-[120px]" 
                              {...field} 
                              value={field.value || ''}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="pt-4 flex justify-center">
                    <Button type="submit" className="pixel-button bg-craft-grass hover:bg-craft-grass/80">
                      <Plus size={16} />
                      Add Artist
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </TabsContent>
          
          {/* Albums Form */}
          <TabsContent value="albums" className="focus-visible:outline-none">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-minecraft text-xl text-white mb-4">Add New Album</h2>
              <Form {...albumForm}>
                <form onSubmit={albumForm.handleSubmit(onAlbumSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={albumForm.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-minecraft">Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter album title" className="pixel-input" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={albumForm.control}
                      name="artistId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-minecraft">Artist</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="pixel-input">
                                <SelectValue placeholder="Select artist" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {mockArtists.map((artist) => (
                                <SelectItem key={artist.id} value={artist.id}>
                                  {artist.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={albumForm.control}
                      name="releaseDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-minecraft">Release Date</FormLabel>
                          <FormControl>
                            <Input type="date" className="pixel-input" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="pt-4 flex justify-center">
                    <Button type="submit" className="pixel-button bg-craft-grass hover:bg-craft-grass/80">
                      <Plus size={16} />
                      Add Album
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
