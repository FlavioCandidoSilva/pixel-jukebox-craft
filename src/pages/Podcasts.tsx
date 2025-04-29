
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Podcast, Play, Star, Clock, User, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface PodcastProps {
  id: string;
  title: string;
  creator: string;
  description: string;
  imageUrl: string;
  episodes: EpisodeProps[];
  category: string;
}

interface EpisodeProps {
  id: string;
  title: string;
  duration: string;
  date: string;
  description: string;
}

const podcastData: PodcastProps[] = [
  {
    id: "minecraft-talks",
    title: "Minecraft Talks",
    creator: "Notch & Friends",
    description: "Weekly discussions about updates, builds, and Minecraft community news.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    category: "Gaming",
    episodes: [
      {
        id: "mt-ep1",
        title: "The History of Minecraft Music",
        duration: "45:28",
        date: "2023-05-15",
        description: "Exploring the evolution of Minecraft's iconic soundtrack with special guest C418."
      },
      {
        id: "mt-ep2",
        title: "Note Block Masterclass",
        duration: "38:15",
        date: "2023-05-22",
        description: "How to create amazing music using Minecraft's note blocks."
      },
      {
        id: "mt-ep3",
        title: "Meet Lena Raine",
        duration: "52:10",
        date: "2023-05-29",
        description: "Interview with composer Lena Raine about her work on the Nether Update."
      }
    ]
  },
  {
    id: "block-beats",
    title: "Block Beats",
    creator: "DJ Creeper",
    description: "Music production tips and tricks inspired by game soundtracks.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    category: "Music",
    episodes: [
      {
        id: "bb-ep1",
        title: "Sampling Minecraft Sounds",
        duration: "36:42",
        date: "2023-06-05",
        description: "How to incorporate Minecraft sound effects into your music productions."
      },
      {
        id: "bb-ep2",
        title: "Making Lo-Fi with Game Sounds",
        duration: "41:23",
        date: "2023-06-12",
        description: "Creating chill lo-fi beats using sounds from your favorite games."
      }
    ]
  },
  {
    id: "sound-explorers",
    title: "Sound Explorers",
    creator: "Audio Adventures Team",
    description: "Exploring the fascinating world of game audio design and music production.",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "Technology",
    episodes: [
      {
        id: "se-ep1",
        title: "The Psychology of Game Music",
        duration: "58:17",
        date: "2023-07-03",
        description: "How game music affects player emotions and experiences."
      },
      {
        id: "se-ep2",
        title: "Creating Ambient Soundscapes",
        duration: "45:56",
        date: "2023-07-10",
        description: "The art of designing immersive audio environments for virtual worlds."
      },
      {
        id: "se-ep3",
        title: "Interview: Minecraft Sound Design Team",
        duration: "62:28",
        date: "2023-07-17",
        description: "Behind the scenes with the folks who create Minecraft's distinctive sounds."
      }
    ]
  }
];

const categories = ["All", "Gaming", "Music", "Technology", "Education", "Entertainment"];

const Podcasts = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredPodcasts = podcastData.filter(podcast => 
    (activeCategory === "All" || podcast.category === activeCategory) &&
    (searchQuery === "" || 
      podcast.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      podcast.creator.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  return (
    <div className="pb-12">
      <div className="bg-gradient-to-b from-craft-dirt/30 to-transparent p-6 mb-6 animate-fade-in">
        <div className="flex items-center mb-2">
          <Podcast size={24} className="mr-2 text-craft-dirt" />
          <h1 className="text-3xl font-minecraft text-white">Podcasts</h1>
        </div>
        <p className="font-minecraft text-sm text-gray-300">
          Discover and listen to music podcasts from the Minecraft community
        </p>
        
        <div className="flex flex-wrap gap-4 items-center mt-6">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <Input
              placeholder="Search podcasts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pixel-input font-minecraft text-sm"
            />
          </div>
          
          <span className="text-sm font-minecraft text-gray-300 hidden md:inline">Filter:</span>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`font-minecraft text-xs ${
                  activeCategory === category 
                    ? 'bg-craft-dirt hover:bg-craft-dirt/80 text-white' 
                    : 'bg-transparent hover:bg-gray-800'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Coming Soon Notice */}
      <div className="bg-craft-grass/20 p-4 border-l-4 border-craft-grass mb-6 minecraft-card">
        <div className="flex items-start gap-3">
          <div className="bg-craft-grass text-white p-1 rounded-sm">
            <Podcast size={18} />
          </div>
          <div>
            <h3 className="font-minecraft text-white mb-1">Podcast Feature Coming Soon!</h3>
            <p className="font-minecraft text-xs text-gray-300">
              We're working hard to bring you full podcast functionality. For now, enjoy exploring our upcoming podcast collection!
            </p>
          </div>
        </div>
      </div>
      
      {/* Featured Podcast */}
      <div className="mb-10">
        <h2 className="text-xl font-minecraft text-white mb-4">Featured Podcast</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-spotify-lightBlack p-6 minecraft-card">
          <div className="pixel-border bg-craft-stone">
            <img 
              src={podcastData[0].imageUrl} 
              alt={podcastData[0].title} 
              className="w-full h-full object-cover"
              style={{imageRendering: 'pixelated'}}
            />
          </div>
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-craft-grass text-white text-xs font-minecraft px-2 py-1">
                {podcastData[0].category}
              </span>
              <div className="flex items-center text-yellow-400">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" className="text-gray-600" />
              </div>
            </div>
            <h3 className="text-2xl font-minecraft text-white mb-2">{podcastData[0].title}</h3>
            <div className="flex items-center gap-2 mb-4">
              <User size={14} className="text-gray-400" />
              <span className="text-sm text-gray-300 font-minecraft">{podcastData[0].creator}</span>
            </div>
            <p className="text-gray-300 font-minecraft text-sm mb-6">
              {podcastData[0].description}
            </p>
            
            <h4 className="font-minecraft text-white mb-3 text-sm flex items-center gap-2">
              <Clock size={14} /> Latest Episodes
            </h4>
            <div className="space-y-2">
              {podcastData[0].episodes.map(episode => (
                <div key={episode.id} className="flex items-center justify-between p-2 hover:bg-gray-800 transition-colors group">
                  <div className="flex items-center gap-3">
                    <button className="w-8 h-8 flex items-center justify-center bg-craft-grass text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play size={14} />
                    </button>
                    <div>
                      <h5 className="font-minecraft text-sm text-white">{episode.title}</h5>
                      <p className="font-minecraft text-xs text-gray-400">{episode.date}</p>
                    </div>
                  </div>
                  <span className="font-minecraft text-xs text-gray-400">{episode.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* All Podcasts */}
      <div>
        <h2 className="text-xl font-minecraft text-white mb-4">All Podcasts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPodcasts.map(podcast => (
            <div key={podcast.id} className="bg-spotify-lightBlack overflow-hidden minecraft-card hover-scale">
              <div className="w-full h-40 bg-craft-stone">
                <img 
                  src={podcast.imageUrl} 
                  alt={podcast.title} 
                  className="w-full h-full object-cover"
                  style={{imageRendering: 'pixelated'}}
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-gray-700 text-white text-xs font-minecraft px-2 py-0.5">
                    {podcast.category}
                  </span>
                  <span className="text-xs text-gray-400 font-minecraft">
                    {podcast.episodes.length} episodes
                  </span>
                </div>
                <h3 className="font-minecraft text-white mb-1">{podcast.title}</h3>
                <p className="font-minecraft text-xs text-gray-400 mb-3">By {podcast.creator}</p>
                <p className="font-minecraft text-sm text-gray-300 line-clamp-2 mb-4">
                  {podcast.description}
                </p>
                <Button className="w-full font-minecraft text-xs pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white border-craft-bedrock">
                  View Episodes
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredPodcasts.length === 0 && (
          <div className="text-center py-12">
            <Podcast size={48} className="mx-auto text-gray-600 mb-4" />
            <h3 className="font-minecraft text-white mb-2">No podcasts found</h3>
            <p className="font-minecraft text-sm text-gray-400">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Podcasts;
