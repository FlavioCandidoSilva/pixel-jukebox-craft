
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, BookOpen, Plus, Heart, User, Music, Settings, LogOut, TrendingUp, Bot, Podcast, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);
  const location = useLocation();
  
  return (
    <>
      {/* Mobile menu toggle button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 block md:hidden bg-spotify-black p-2 rounded hover:bg-spotify-lightBlack transition-colors"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-0.5 bg-white mb-1.5"></div>
        <div className="w-6 h-0.5 bg-white mb-1.5"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 w-64 bg-spotify-black md:translate-x-0 transform transition-transform duration-200 z-40",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 flex flex-col h-full">
          <Link to="/" className="flex items-center gap-2 mb-8 group hover-scale">
            {/* SpotiCraft Logo */}
            <div className="w-8 h-8 bg-spotify-green pixel-border relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-minecraft text-white text-xs">SC</span>
              </div>
              <div className="absolute top-0 left-0 w-full h-1 bg-craft-grass"></div>
            </div>
            <h1 className="font-minecraft text-xl font-bold text-white group-hover:text-spotify-green transition-colors">SpotiCraft</h1>
          </Link>
          
          <nav className="space-y-6 flex-grow overflow-hidden">
            <div className="space-y-1">
              <NavLink to="/" icon={<Home size={20} />} label="Home" isActive={location.pathname === '/'} />
              <NavLink to="/search" icon={<Search size={20} />} label="Search" isActive={location.pathname === '/search'} />
              <NavLink to="/library" icon={<BookOpen size={20} />} label="Your Library" isActive={location.pathname === '/library'} />
            </div>
            
            <div className="space-y-1">
              <NavLink to="/top-music" icon={<TrendingUp size={20} />} label="Top Music" isActive={location.pathname === '/top-music'} />
              <NavLink 
                to="/ai-assistant" 
                icon={<Bot size={20} />} 
                label="AI Assistant" 
                isActive={location.pathname === '/ai-assistant'}
              />
              <NavLink 
                to="/podcasts" 
                icon={<Podcast size={20} />} 
                label="Podcasts" 
                isActive={location.pathname === '/podcasts'} 
                badge={<Badge className="bg-craft-grass text-xs">New</Badge>}
              />
              <NavLink 
                to="/notifications" 
                icon={<Bell size={20} />} 
                label="Notifications" 
                isActive={location.pathname === '/notifications'}
                badge={hasNotifications ? <div className="w-2 h-2 rounded-full bg-craft-grass"></div> : undefined}
              />
            </div>
            
            <div className="pt-4">
              <div className="space-y-1">
                <NavLink to="/add-content" icon={<Music size={20} />} label="Add Content" isActive={location.pathname === '/add-content'} />
                <NavLink to="/create-playlist" icon={<Plus size={20} />} label="Create Playlist" isActive={location.pathname === '/create-playlist'} />
                <NavLink to="/liked-songs" icon={<Heart size={20} />} label="Liked Songs" isActive={location.pathname === '/liked-songs'} />
                <NavLink to="/components" icon={<Settings size={20} />} label="Components" isActive={location.pathname === '/components'} />
              </div>
              
              <div className="border-t border-gray-800 my-4"></div>
              
              <h2 className="font-minecraft text-sm text-gray-400 mb-4 px-4">YOUR PLAYLISTS</h2>
              
              {/* Use ScrollArea component for better scrolling */}
              <ScrollArea className="h-52 pr-4">
                <div className="space-y-1">
                  <PlaylistLink name="Mining Mix" id="mining-mix" isActive={location.pathname === '/playlist/mining-mix'} />
                  <PlaylistLink name="Redstone Beats" id="redstone-beats" isActive={location.pathname === '/playlist/redstone-beats'} />
                  <PlaylistLink name="Nether Jams" id="nether-jams" isActive={location.pathname === '/playlist/nether-jams'} />
                  <PlaylistLink name="Village Vibes" id="village-vibes" isActive={location.pathname === '/playlist/village-vibes'} />
                  <PlaylistLink name="Ender Dragon OST" id="ender-dragon-ost" isActive={location.pathname === '/playlist/ender-dragon-ost'} />
                </div>
              </ScrollArea>
              
              <div className="mt-4 px-4">
                <Link to="/see-all-playlists" className="block text-xs font-minecraft text-gray-400 hover:text-white transition-colors">
                  See All Playlists →
                </Link>
              </div>
            </div>
          </nav>
          
          <div className="mt-auto pt-4 border-t border-gray-800 space-y-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link 
                    to="/admin" 
                    className="flex items-center gap-2 py-2 px-4 font-minecraft text-sm text-gray-400 hover:text-white transition-colors hover:bg-gray-800 rounded-sm"
                  >
                    <Settings size={16} />
                    <span>Admin</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-minecraft text-xs">Admin Dashboard</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <Link 
              to="/profile" 
              className="flex items-center gap-2 py-2 px-4 font-minecraft text-sm text-gray-400 hover:text-white transition-colors hover:bg-gray-800 rounded-sm"
            >
              <User size={16} />
              <span>Profile</span>
            </Link>
            
            <Link 
              to="/pricing" 
              className="flex items-center gap-2 py-2 px-4 font-minecraft text-sm text-gray-400 hover:text-white transition-colors hover:bg-gray-800 rounded-sm"
            >
              <Music size={16} />
              <span>Pricing</span>
            </Link>
            
            <Link 
              to="/login" 
              className="flex items-center gap-2 py-2 px-4 font-minecraft text-sm text-gray-400 hover:text-white transition-colors hover:bg-gray-800 rounded-sm"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

const NavLink = ({ to, icon, label, isActive, badge }: { to: string; icon: React.ReactNode; label: string; isActive: boolean; badge?: React.ReactNode }) => (
  <Link 
    to={to} 
    className={cn(
      "flex items-center gap-4 transition-colors p-2 font-minecraft text-sm rounded-sm hover-scale",
      isActive ? "text-white bg-gray-800" : "text-gray-400 hover:text-white hover:bg-gray-800/50"
    )}
  >
    {icon}
    <span>{label}</span>
    {badge && <div className="ml-auto">{badge}</div>}
  </Link>
);

const PlaylistLink = ({ name, id, isActive }: { name: string; id: string; isActive: boolean }) => (
  <Link 
    to={`/playlist/${id}`} 
    className={cn(
      "block p-2 font-minecraft text-xs truncate transition-colors hover-scale",
      isActive ? "text-white bg-gray-800" : "text-gray-400 hover:text-white hover:bg-gray-800/50"
    )}
  >
    {name}
  </Link>
);

export default Sidebar;
