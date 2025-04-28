
import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart } from "lucide-react";

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-spotify-black h-20 border-t border-gray-800 z-30 px-4">
      <div className="max-w-screen-2xl mx-auto h-full flex items-center justify-between">
        {/* Now playing */}
        <div className="flex items-center gap-4 w-1/4">
          <div className="w-12 h-12 bg-craft-stone pixel-border shrink-0">
            <div className="w-full h-full bg-craft-dirt"></div>
          </div>
          <div className="truncate">
            <p className="text-sm text-white font-minecraft truncate">Minecraft OST - Sweden</p>
            <p className="text-xs text-gray-400 font-minecraft truncate">C418</p>
          </div>
          <button className="text-gray-400 hover:text-spotify-green transition-colors">
            <Heart size={16} />
          </button>
        </div>

        {/* Player controls */}
        <div className="flex flex-col items-center w-2/4">
          <div className="flex items-center gap-4 mb-2">
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipBack size={18} />
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-white p-1.5 rounded-full hover:scale-105 transition-transform"
            >
              {isPlaying ? <Pause size={18} className="text-black" /> : <Play size={18} className="text-black" />}
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipForward size={18} />
            </button>
          </div>
          
          <div className="w-full max-w-md flex items-center gap-2">
            <span className="text-xs text-gray-400 font-minecraft">1:23</span>
            <div className="h-1 bg-gray-600 flex-1 rounded-full overflow-hidden cursor-pointer">
              <div className="h-full w-2/5 bg-spotify-green"></div>
            </div>
            <span className="text-xs text-gray-400 font-minecraft">3:45</span>
          </div>
        </div>

        {/* Volume control */}
        <div className="flex items-center gap-2 w-1/4 justify-end">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Volume2 size={18} />
          </button>
          <div className="w-24 h-1 bg-gray-600 rounded-full overflow-hidden cursor-pointer">
            <div className="h-full w-3/4 bg-spotify-green"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
