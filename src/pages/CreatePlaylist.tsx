
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const playlistSchema = z.object({
  name: z.string().min(3, "Playlist name must be at least 3 characters"),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
});

type PlaylistValues = z.infer<typeof playlistSchema>;

const CreatePlaylist = () => {
  const navigate = useNavigate();
  
  const form = useForm<PlaylistValues>({
    resolver: zodResolver(playlistSchema),
    defaultValues: {
      name: "",
      description: "",
      imageUrl: "",
    },
  });

  const onSubmit = (data: PlaylistValues) => {
    console.log("Playlist created:", data);
    toast.success("Playlist created successfully!");
    navigate(`/playlist/${data.name.toLowerCase().replace(/\s+/g, '-')}`);
  };
  
  return (
    <div className="pb-12">
      <header className="mb-8 pt-8">
        <h1 className="text-2xl font-minecraft text-white">Create Playlist</h1>
      </header>
      
      <div className="bg-spotify-lightBlack minecraft-card p-6 max-w-2xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <div className="w-full aspect-square bg-craft-bedrock pixel-border flex items-center justify-center">
                  {form.watch("imageUrl") ? (
                    <img 
                      src={form.watch("imageUrl")} 
                      alt="Playlist cover" 
                      className="w-full h-full object-cover"
                      style={{imageRendering: 'pixelated'}}
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5";
                      }}
                    />
                  ) : (
                    <span className="text-4xl font-minecraft text-gray-500">+</span>
                  )}
                </div>
              </div>
              
              <div className="w-full md:w-2/3 space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-minecraft text-craft-diamond">Playlist Name</FormLabel>
                      <FormControl>
                        <Input 
                          className="pixel-input bg-craft-bedrock text-white" 
                          placeholder="My Awesome Playlist" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-craft-redstone font-minecraft text-xs" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-minecraft text-craft-diamond">Description (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          className="pixel-input bg-craft-bedrock text-white min-h-[100px]" 
                          placeholder="Describe your playlist..." 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-craft-redstone font-minecraft text-xs" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-minecraft text-craft-diamond">Cover Image URL (Optional)</FormLabel>
                      <FormControl>
                        <Input 
                          className="pixel-input bg-craft-bedrock text-white" 
                          placeholder="https://example.com/image.jpg" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-craft-redstone font-minecraft text-xs" />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate(-1)}
                className="font-minecraft pixel-button bg-craft-stone hover:bg-craft-stone/80 text-white border-craft-bedrock"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="font-minecraft pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white border-craft-bedrock"
              >
                Create Playlist
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreatePlaylist;
