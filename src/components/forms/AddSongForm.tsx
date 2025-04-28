
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Save } from "lucide-react";

const songSchema = z.object({
  title: z.string().min(1, "Title is required"),
  duration: z.string().min(1, "Duration is required"),
  albumId: z.string().min(1, "Album is required"),
  artistsId: z.string().min(1, "Artist is required"),
  genres: z.string().min(1, "Genre is required"),
  url: z.string().url("Must be a valid URL"),
  explicit: z.boolean().default(false),
  releaseDate: z.string().min(1, "Release date is required"),
});

type SongFormValues = z.infer<typeof songSchema>;

interface AddSongFormProps {
  onSuccess?: () => void;
  isAdmin?: boolean;
}

const AddSongForm = ({ onSuccess, isAdmin = false }: AddSongFormProps) => {
  const { toast } = useToast();
  
  // Sample data - would come from your API
  const sampleAlbums = [
    { id: 1, title: "Minecraft Volume Alpha", artist: "C418" },
    { id: 2, title: "Minecraft Volume Beta", artist: "C418" },
    { id: 3, title: "Minecraft: Nether Update", artist: "Lena Raine" },
  ];
  
  const sampleArtists = [
    { id: 1, name: "C418", genre: "Electronic" },
    { id: 2, name: "Lena Raine", genre: "Electronic" },
  ];
  
  const form = useForm<SongFormValues>({
    resolver: zodResolver(songSchema),
    defaultValues: {
      title: "",
      duration: "",
      albumId: "",
      artistsId: "",
      genres: "",
      url: "",
      explicit: false,
      releaseDate: "",
    },
  });
  
  const onSubmit = (data: SongFormValues) => {
    console.log("Song form submitted:", data);
    toast({
      title: "Song Added",
      description: `Successfully added song: ${data.title}`,
    });
    form.reset();
    if (onSuccess) onSuccess();
  };
  
  return (
    <div className="bg-spotify-lightBlack p-6 minecraft-card animate-fade-in">
      <h2 className="text-xl font-minecraft text-white mb-6">Add New Song</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-minecraft text-sm">Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter song title" {...field} className="pixel-input" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-minecraft text-sm">Duration</FormLabel>
                  <FormControl>
                    <Input placeholder="3:45" {...field} className="pixel-input" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="releaseDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-minecraft text-sm">Release Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} className="pixel-input" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="albumId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-minecraft text-sm">Album</FormLabel>
                  <FormControl>
                    <select {...field} className="pixel-input w-full">
                      <option value="">Select album...</option>
                      {sampleAlbums.map(album => (
                        <option key={album.id} value={album.id}>{album.title}</option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="artistsId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-minecraft text-sm">Artist</FormLabel>
                  <FormControl>
                    <select {...field} className="pixel-input w-full">
                      <option value="">Select artist...</option>
                      {sampleArtists.map(artist => (
                        <option key={artist.id} value={artist.id}>{artist.name}</option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="genres"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-minecraft text-sm">Genres</FormLabel>
                <FormControl>
                  <Input placeholder="Electronic, Ambient" {...field} className="pixel-input" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-minecraft text-sm">Audio URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://example.com/song.mp3" {...field} className="pixel-input" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="explicit"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 space-y-0">
                <FormControl>
                  <input 
                    type="checkbox" 
                    checked={field.value} 
                    onChange={field.onChange} 
                    className="pixel-input h-4 w-4"
                  />
                </FormControl>
                <FormLabel className="font-minecraft text-sm">Explicit Content</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full font-minecraft text-sm pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white border-craft-bedrock">
            <Save size={16} className="mr-2" /> {isAdmin ? "Save Song" : "Submit Song"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddSongForm;
