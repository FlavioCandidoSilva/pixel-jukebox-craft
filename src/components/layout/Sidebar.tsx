
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, BookOpen, Plus, Heart, User } from "lucide-react";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  return (
    <>
      {/* Mobile menu toggle button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 block md:hidden bg-spotify-black p-2 rounded"
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
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-spotify-green pixel-border"></div>
            <h1 className="font-minecraft text-xl font-bold text-white">SpotiCraft</h1>
          </Link>
          
          <nav className="space-y-6 flex-grow overflow-y-auto minecraft-scrollbar">
            <div className="space-y-2">
              <NavLink to="/" icon={<Home size={20} />} label="Home" isActive={location.pathname === '/'} />
              <NavLink to="/search" icon={<Search size={20} />} label="Search" isActive={location.pathname === '/search'} />
              <NavLink to="/library" icon={<BookOpen size={20} />} label="Your Library" isActive={location.pathname === '/library'} />
            </div>
            
            <div className="pt-4">
              <h2 className="font-minecraft text-sm text-gray-400 mb-4">PLAYLISTS</h2>
              <div className="space-y-2">
                <NavLink to="/create-playlist" icon={<Plus size={20} />} label="Create Playlist" isActive={location.pathname === '/create-playlist'} />
                <NavLink to="/liked-songs" icon={<Heart size={20} />} label="Liked Songs" isActive={location.pathname === '/liked-songs'} />
              </div>
              
              <div className="border-t border-gray-800 my-4"></div>
              
              <div className="space-y-2 overflow-y-auto max-h-64 minecraft-scrollbar">
                <PlaylistLink name="Mining Mix" id="mining-mix" isActive={location.pathname === '/playlist/mining-mix'} />
                <PlaylistLink name="Redstone Beats" id="redstone-beats" isActive={location.pathname === '/playlist/redstone-beats'} />
                <PlaylistLink name="Nether Jams" id="nether-jams" isActive={location.pathname === '/playlist/nether-jams'} />
                <PlaylistLink name="Village Vibes" id="village-vibes" isActive={location.pathname === '/playlist/village-vibes'} />
                <PlaylistLink name="Ender Dragon OST" id="ender-dragon-ost" isActive={location.pathname === '/playlist/ender-dragon-ost'} />
              </div>
            </div>
          </nav>
          
          <div className="mt-auto pt-4 border-t border-gray-800">
            <Link 
              to="/login" 
              className="flex items-center gap-2 py-2 px-4 font-minecraft text-sm text-gray-400 hover:text-white transition-colors"
            >
              <User size={16} />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

const NavLink = ({ to, icon, label, isActive }: { to: string; icon: React.ReactNode; label: string; isActive: boolean }) => (
  <Link 
    to={to} 
    className={cn(
      "flex items-center gap-4 transition-colors p-2 font-minecraft text-sm",
      isActive ? "text-white bg-gray-800" : "text-gray-400 hover:text-white"
    )}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

const PlaylistLink = ({ name, id, isActive }: { name: string; id: string; isActive: boolean }) => (
  <Link 
    to={`/playlist/${id}`} 
    className={cn(
      "block p-2 font-minecraft text-xs truncate transition-colors",
      isActive ? "text-white bg-gray-800" : "text-gray-400 hover:text-white"
    )}
  >
    {name}
  </Link>
);

export default Sidebar;
