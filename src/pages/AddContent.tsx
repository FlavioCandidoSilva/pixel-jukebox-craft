
import { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Music, Plus, Disc } from "lucide-react";
import AddSongForm from "@/components/forms/AddSongForm";
import { useToast } from "@/components/ui/use-toast";

const AddContent = () => {
  const [activeTab, setActiveTab] = useState("addSong");
  const { toast } = useToast();
  
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
          <h1 className="text-3xl md:text-4xl font-minecraft text-white">Add Content</h1>
        </div>
      </div>
      
      {/* Content Tabs */}
      <Tabs defaultValue="addSong" className="w-full" onValueChange={setActiveTab} value={activeTab}>
        <TabsList className="bg-spotify-lightBlack mb-6 border-b border-gray-800 w-full justify-start h-auto">
          <TabsTrigger 
            value="addSong" 
            className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3"
          >
            <Music size={16} className="mr-2" /> Add Song
          </TabsTrigger>
          <TabsTrigger 
            value="addPlaylist" 
            className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3"
          >
            <Disc size={16} className="mr-2" /> Create Playlist
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="addSong" className="mt-0">
          <div className="max-w-md mx-auto">
            <AddSongForm 
              onSuccess={() => {
                toast({
                  title: "Song Submitted",
                  description: "Your song has been submitted for review.",
                });
              }} 
            />
          </div>
        </TabsContent>
        
        <TabsContent value="addPlaylist" className="mt-0">
          <div className="max-w-md mx-auto">
            <div className="bg-spotify-lightBlack p-6 minecraft-card animate-fade-in">
              <h2 className="text-xl font-minecraft text-white mb-6">Create a New Playlist</h2>
              <p className="text-sm font-minecraft text-gray-400 mb-4">
                Creating a playlist is easy. Just give it a name, description, and start adding songs!
              </p>
              <Link to="/create-playlist">
                <Button className="w-full font-minecraft text-sm pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white border-craft-bedrock">
                  <Plus size={16} className="mr-2" /> Go to Create Playlist
                </Button>
              </Link>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AddContent;
