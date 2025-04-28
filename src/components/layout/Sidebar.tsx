
import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Search, BookOpen, Plus, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
        <div className="p-4">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-spotify-green pixel-border"></div>
            <h1 className="font-minecraft text-xl font-bold text-white">SpotiCraft</h1>
          </Link>
          
          <nav className="space-y-6">
            <div className="space-y-2">
              <NavLink to="/" icon={<Home size={20} />} label="Home" />
              <NavLink to="/search" icon={<Search size={20} />} label="Search" />
              <NavLink to="/library" icon={<BookOpen size={20} />} label="Your Library" />
            </div>
            
            <div className="pt-4">
              <h2 className="font-minecraft text-sm text-gray-400 mb-4">PLAYLISTS</h2>
              <div className="space-y-2">
                <NavLink to="/create-playlist" icon={<Plus size={20} />} label="Create Playlist" />
                <NavLink to="/liked-songs" icon={<Heart size={20} />} label="Liked Songs" />
              </div>
              
              <div className="border-t border-gray-800 my-4"></div>
              
              <div className="space-y-2 overflow-y-auto max-h-64 minecraft-scrollbar">
                <PlaylistLink name="Mining Mix" />
                <PlaylistLink name="Creeper Beats" />
                <PlaylistLink name="Nether Jams" />
                <PlaylistLink name="Redstone Rhythms" />
                <PlaylistLink name="Ender Dragon OST" />
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

const NavLink = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => (
  <Link to={to} className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors p-2 font-minecraft text-sm">
    {icon}
    <span>{label}</span>
  </Link>
);

const PlaylistLink = ({ name }: { name: string }) => (
  <Link to={`/playlist/${name.toLowerCase().replace(/\s+/g, '-')}`} className="block text-gray-400 hover:text-white transition-colors p-2 font-minecraft text-xs truncate">
    {name}
  </Link>
);

export default Sidebar;
