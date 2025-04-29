
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Toast } from "@/components/ui/toast";
import { toast } from "sonner";
import { 
  Check, 
  X, 
  Info, 
  AlertTriangle, 
  Copy, 
  Play, 
  Heart, 
  Play as PlayIcon
} from "lucide-react";
import SongRow from "@/components/ui/SongRow";
import PlaylistCard from "@/components/ui/PlaylistCard";
import AlbumCard from "@/components/ui/AlbumCard";
import ArtistCard from "@/components/ui/ArtistCard";

const ComponentsShowcase = () => {
  const [currentTab, setCurrentTab] = useState("buttons");
  
  const showToast = (type: string) => {
    switch(type) {
      case "success":
        toast.success("This is a success toast", {
          description: "Something went well!"
        });
        break;
      case "error":
        toast.error("This is an error toast", {
          description: "Something went wrong!"
        });
        break;
      case "info":
        toast.info("This is an info toast", {
          description: "Just so you know"
        });
        break;
      case "warning":
        toast.warning("This is a warning toast", {
          description: "Be careful!"
        });
        break;
      default:
        toast("This is a default toast");
    }
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="relative">
        <div className="h-16 w-full bg-craft-grass/60 absolute top-0 left-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='4' height='4' fill='%235D8731'/%3E%3Crect x='4' width='4' height='4' fill='%2367943A'/%3E%3Crect x='8' width='4' height='4' fill='%235D8731'/%3E%3Crect x='12' width='4' height='4' fill='%2367943A'/%3E%3Crect y='4' width='4' height='4' fill='%2367943A'/%3E%3Crect x='4' y='4' width='4' height='4' fill='%235D8731'/%3E%3Crect x='8' y='4' width='4' height='4' fill='%2367943A'/%3E%3Crect x='12' y='4' width='4' height='4' fill='%235D8731'/%3E%3Crect y='8' width='4' height='4' fill='%235D8731'/%3E%3Crect x='4' y='8' width='4' height='4' fill='%2367943A'/%3E%3Crect x='8' y='8' width='4' height='4' fill='%235D8731'/%3E%3Crect x='12' y='8' width='4' height='4' fill='%2367943A'/%3E%3Crect y='12' width='4' height='4' fill='%2367943A'/%3E%3Crect x='4' y='12' width='4' height='4' fill='%235D8731'/%3E%3Crect x='8' y='12' width='4' height='4' fill='%2367943A'/%3E%3Crect x='12' y='12' width='4' height='4' fill='%235D8731'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            imageRendering: 'pixelated'
          }}
        ></div>
        <div className="relative pt-16 pb-6 px-6 bg-gradient-to-b from-craft-dirt/40 to-transparent">
          <h1 className="text-3xl font-minecraft text-white mb-2">Components Library</h1>
          <p className="font-minecraft text-gray-300 max-w-2xl">
            This page showcases all the UI components used throughout SpotiCraft. 
            Developers can use this as a reference for building new features.
          </p>
        </div>
      </div>

      {/* Component Showcase */}
      <div className="p-6">
        <Tabs defaultValue="buttons" onValueChange={setCurrentTab} value={currentTab}>
          <div className="mb-6 overflow-x-auto minecraft-scrollbar">
            <TabsList className="bg-spotify-lightBlack border-b border-gray-800 w-full justify-start h-auto">
              <TabsTrigger value="buttons" className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3">
                Buttons
              </TabsTrigger>
              <TabsTrigger value="inputs" className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3">
                Form Inputs
              </TabsTrigger>
              <TabsTrigger value="cards" className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3">
                Cards
              </TabsTrigger>
              <TabsTrigger value="notifications" className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3">
                Notifications
              </TabsTrigger>
              <TabsTrigger value="music" className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3">
                Music Components
              </TabsTrigger>
              <TabsTrigger value="misc" className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3">
                Miscellaneous
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Buttons */}
          <TabsContent value="buttons" className="animate-fade-in space-y-8">
            <Card className="minecraft-card">
              <CardHeader>
                <CardTitle className="font-minecraft">Standard Buttons</CardTitle>
                <CardDescription className="font-minecraft text-sm">
                  Various button styles used throughout the app
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-4">
                  <Button className="pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white border-craft-bedrock">
                    Primary Button
                  </Button>
                  <Button variant="outline" className="pixel-button bg-craft-stone hover:bg-craft-stone/80 text-white border-craft-bedrock">
                    Secondary Button
                  </Button>
                  <Button variant="destructive" className="pixel-button">
                    Destructive Button
                  </Button>
                  <Button variant="ghost" className="font-minecraft">
                    Ghost Button
                  </Button>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button size="sm" className="pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white border-craft-bedrock">
                    Small Button
                  </Button>
                  <Button size="sm" variant="outline" className="pixel-button bg-craft-stone hover:bg-craft-stone/80 text-white border-craft-bedrock">
                    Small Secondary
                  </Button>
                  <Button disabled className="pixel-button bg-gray-700 text-gray-400 cursor-not-allowed">
                    Disabled Button
                  </Button>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button size="sm" className="pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white border-craft-bedrock">
                    <Play size={16} className="mr-2" />
                    Play
                  </Button>
                  <Button size="sm" className="pixel-button bg-craft-stone hover:bg-craft-stone/80 text-white border-craft-bedrock">
                    <Heart size={16} className="mr-2" />
                    Like
                  </Button>
                </div>

                <div className="mt-4">
                  <h4 className="font-minecraft text-sm mb-2">Usage:</h4>
                  <pre className="bg-black p-4 rounded-md overflow-x-auto text-xs text-gray-300">
                    {`import { Button } from "@/components/ui/button";

<Button className="pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white border-craft-bedrock">
  Primary Button
</Button>`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Inputs */}
          <TabsContent value="inputs" className="animate-fade-in space-y-8">
            <Card className="minecraft-card">
              <CardHeader>
                <CardTitle className="font-minecraft">Form Elements</CardTitle>
                <CardDescription className="font-minecraft text-sm">
                  Input elements and form controls
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-minecraft text-lg">Text Input</h3>
                  <Input placeholder="Text input placeholder" className="pixel-input" />
                  <div className="mt-4">
                    <pre className="bg-black p-4 rounded-md overflow-x-auto text-xs text-gray-300">
                      {`import { Input } from "@/components/ui/input";

<Input placeholder="Text input placeholder" className="pixel-input" />`}
                    </pre>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-minecraft text-lg">Textarea</h3>
                  <Textarea placeholder="Textarea placeholder..." className="pixel-input min-h-[100px]" />
                  <div className="mt-4">
                    <pre className="bg-black p-4 rounded-md overflow-x-auto text-xs text-gray-300">
                      {`import { Textarea } from "@/components/ui/textarea";

<Textarea placeholder="Textarea placeholder..." className="pixel-input min-h-[100px]" />`}
                    </pre>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-minecraft text-lg">Select</h3>
                  <Select>
                    <SelectTrigger className="pixel-input">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <h3 className="font-minecraft text-lg">Switch</h3>
                  <div className="flex items-center gap-4">
                    <Switch id="switch-example" />
                    <label htmlFor="switch-example" className="font-minecraft text-sm">Toggle switch</label>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-minecraft text-lg">Slider</h3>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cards */}
          <TabsContent value="cards" className="animate-fade-in space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="minecraft-card">
                <CardHeader>
                  <CardTitle className="font-minecraft">Standard Card</CardTitle>
                  <CardDescription className="font-minecraft text-sm">
                    Basic card with title, description and content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-minecraft text-sm">This is a basic card component used for displaying content in contained sections.</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white border-craft-bedrock">
                    Card Action
                  </Button>
                </CardFooter>
              </Card>

              <div className="space-y-4">
                <h3 className="font-minecraft text-lg">Content Cards</h3>
                <div className="grid grid-cols-2 gap-4">
                  <PlaylistCard 
                    id="example-playlist" 
                    name="Example Playlist" 
                    description="This is an example playlist card"
                    imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475"
                  />
                  <AlbumCard
                    id="example-album"
                    name="Example Album"
                    artist="Sample Artist"
                    imageUrl="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications" className="animate-fade-in space-y-8">
            <Card className="minecraft-card">
              <CardHeader>
                <CardTitle className="font-minecraft">Toast Notifications</CardTitle>
                <CardDescription className="font-minecraft text-sm">
                  Popup notifications for alerts and feedback
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Button onClick={() => showToast("success")} className="pixel-button bg-green-600 hover:bg-green-700 text-white">
                    <Check size={16} className="mr-2" />
                    Success Toast
                  </Button>
                  <Button onClick={() => showToast("error")} className="pixel-button bg-red-600 hover:bg-red-700 text-white">
                    <X size={16} className="mr-2" />
                    Error Toast
                  </Button>
                  <Button onClick={() => showToast("info")} className="pixel-button bg-blue-600 hover:bg-blue-700 text-white">
                    <Info size={16} className="mr-2" />
                    Info Toast
                  </Button>
                  <Button onClick={() => showToast("warning")} className="pixel-button bg-yellow-600 hover:bg-yellow-700 text-white">
                    <AlertTriangle size={16} className="mr-2" />
                    Warning Toast
                  </Button>
                </div>

                <div className="mt-6">
                  <h4 className="font-minecraft text-sm mb-2">Usage:</h4>
                  <pre className="bg-black p-4 rounded-md overflow-x-auto text-xs text-gray-300">
                    {`import { toast } from "sonner";

// Basic toast
toast("Hello world");

// Success toast
toast.success("Success message", {
  description: "Operation completed successfully"
});`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card className="minecraft-card">
              <CardHeader>
                <CardTitle className="font-minecraft">Badges</CardTitle>
                <CardDescription className="font-minecraft text-sm">
                  Small status indicators and labels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Badge className="bg-craft-grass text-white">New</Badge>
                  <Badge variant="outline" className="border-craft-stone">Default</Badge>
                  <Badge variant="secondary" className="bg-craft-stone text-white">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Music Components */}
          <TabsContent value="music" className="animate-fade-in space-y-8">
            <Card className="minecraft-card">
              <CardHeader>
                <CardTitle className="font-minecraft">Song Row</CardTitle>
                <CardDescription className="font-minecraft text-sm">
                  Component used for displaying songs in lists
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 bg-spotify-lightBlack p-2">
                  <SongRow
                    title="Sweden"
                    artist="C418"
                    album="Minecraft Volume Alpha"
                    duration="3:35"
                    imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475"
                    index={1}
                  />
                  <SongRow
                    title="Wet Hands"
                    artist="C418"
                    album="Minecraft Volume Alpha"
                    duration="1:32"
                    imageUrl="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
                    index={2}
                    isLiked={true}
                  />
                </div>

                <div className="mt-6">
                  <h4 className="font-minecraft text-sm mb-2">Usage:</h4>
                  <pre className="bg-black p-4 rounded-md overflow-x-auto text-xs text-gray-300">
                    {`import SongRow from "@/components/ui/SongRow";

<SongRow
  title="Song Title"
  artist="Artist Name"
  album="Album Name"
  duration="3:45"
  imageUrl="path/to/image.jpg"
  index={1}
  isLiked={false}
/>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="minecraft-card">
                <CardHeader>
                  <CardTitle className="font-minecraft">Playlist Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <PlaylistCard 
                      id="example-playlist" 
                      name="Example Playlist" 
                      description="This is an example playlist"
                      imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="minecraft-card">
                <CardHeader>
                  <CardTitle className="font-minecraft">Album Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <AlbumCard
                      id="example-album"
                      name="Example Album"
                      artist="Sample Artist"
                      imageUrl="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="minecraft-card">
                <CardHeader>
                  <CardTitle className="font-minecraft">Artist Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <ArtistCard
                      id="example-artist"
                      name="Example Artist"
                      imageUrl="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Miscellaneous */}
          <TabsContent value="misc" className="animate-fade-in space-y-8">
            <Card className="minecraft-card">
              <CardHeader>
                <CardTitle className="font-minecraft">Helper Classes</CardTitle>
                <CardDescription className="font-minecraft text-sm">
                  Useful CSS classes for common styling patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-minecraft text-lg mb-2">Minecraft Font</h3>
                    <p className="font-minecraft">This text uses the minecraft font styling</p>
                    <pre className="bg-black p-2 mt-1 rounded-md overflow-x-auto text-xs text-gray-300">
                      {'<p className="font-minecraft">Minecraft styled text</p>'}
                    </pre>
                  </div>

                  <div>
                    <h3 className="font-minecraft text-lg mb-2">Pixel Border</h3>
                    <div className="w-16 h-16 bg-craft-stone pixel-border"></div>
                    <pre className="bg-black p-2 mt-1 rounded-md overflow-x-auto text-xs text-gray-300">
                      {'<div className="pixel-border">Pixelated border element</div>'}
                    </pre>
                  </div>

                  <div>
                    <h3 className="font-minecraft text-lg mb-2">Minecraft Card</h3>
                    <div className="w-full h-16 minecraft-card flex items-center justify-center">
                      <p className="font-minecraft">Minecraft styled card</p>
                    </div>
                    <pre className="bg-black p-2 mt-1 rounded-md overflow-x-auto text-xs text-gray-300">
                      {'<div className="minecraft-card">Card with minecraft styling</div>'}
                    </pre>
                  </div>

                  <div>
                    <h3 className="font-minecraft text-lg mb-2">Animations</h3>
                    <div className="flex flex-wrap gap-4">
                      <div className="animate-fade-in w-16 h-16 bg-craft-grass flex items-center justify-center font-minecraft text-white">
                        Fade In
                      </div>
                      <div className="hover-scale w-16 h-16 bg-craft-stone flex items-center justify-center font-minecraft text-white">
                        Hover Scale
                      </div>
                    </div>
                    <pre className="bg-black p-2 mt-1 rounded-md overflow-x-auto text-xs text-gray-300">
                      {'<div className="animate-fade-in">Fade in animation</div>\n<div className="hover-scale">Scales on hover</div>'}
                    </pre>
                  </div>

                  <div>
                    <h3 className="font-minecraft text-lg mb-2">Colors</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                      <div className="p-2 bg-craft-grass text-white font-minecraft text-xs text-center">craft-grass</div>
                      <div className="p-2 bg-craft-dirt text-white font-minecraft text-xs text-center">craft-dirt</div>
                      <div className="p-2 bg-craft-stone text-white font-minecraft text-xs text-center">craft-stone</div>
                      <div className="p-2 bg-craft-bedrock text-white font-minecraft text-xs text-center">craft-bedrock</div>
                      <div className="p-2 bg-spotify-green text-black font-minecraft text-xs text-center">spotify-green</div>
                      <div className="p-2 bg-spotify-black text-white font-minecraft text-xs text-center">spotify-black</div>
                      <div className="p-2 bg-spotify-lightBlack text-white font-minecraft text-xs text-center">spotify-lightBlack</div>
                      <div className="p-2 bg-spotify-darkGray text-white font-minecraft text-xs text-center">spotify-darkGray</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ComponentsShowcase;
