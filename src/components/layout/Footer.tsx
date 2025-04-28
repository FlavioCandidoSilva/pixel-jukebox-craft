
import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [volume, setVolume] = useState(75);
  const [progress, setProgress] = useState(40);

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-spotify-black h-20 border-t border-gray-800 z-30 px-4">
      <div className="max-w-screen-2xl mx-auto h-full flex items-center justify-between">
        {/* Minecraft grass detail on top of the music bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-craft-grass" style={{ 
          backgroundImage: 'repeating-linear-gradient(to right, transparent, transparent 8px, rgba(0,0,0,0.2) 8px, rgba(0,0,0,0.2) 16px)',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' 
        }}></div>
        
        {/* Now playing */}
        <div className="flex items-center gap-4 w-1/4">
          <div className="w-12 h-12 bg-craft-stone pixel-border shrink-0 hover-scale group cursor-pointer">
            <div className="w-full h-full bg-craft-dirt relative">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                alt="Album cover" 
                className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity"
                style={{imageRendering: 'pixelated'}}
              />
            </div>
          </div>
          <div className="truncate">
            <p className="text-sm text-white font-minecraft truncate animate-pulse">Minecraft OST - Sweden</p>
            <p className="text-xs text-gray-400 font-minecraft truncate">C418</p>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button 
                  className={cn(
                    "flex justify-center items-center h-8 w-8 rounded-full hover:bg-gray-800 transition-colors", 
                    isFavorite ? "text-spotify-green" : "text-gray-400"
                  )}
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart size={16} className={cn(isFavorite && "fill-spotify-green")} />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-minecraft text-xs">{isFavorite ? 'Remove from Liked Songs' : 'Add to Liked Songs'}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Player controls */}
        <div className="flex flex-col items-center w-2/4">
          <div className="flex items-center gap-4 mb-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="text-gray-400 hover:text-white transition-colors hover:scale-110">
                    <SkipBack size={18} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-minecraft text-xs">Previous</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-white p-1.5 rounded-full hover:scale-110 transition-transform"
                  >
                    {isPlaying ? <Pause size={18} className="text-black" /> : <Play size={18} className="text-black" />}
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-minecraft text-xs">{isPlaying ? 'Pause' : 'Play'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="text-gray-400 hover:text-white transition-colors hover:scale-110">
                    <SkipForward size={18} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-minecraft text-xs">Next</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          <div className="w-full max-w-md flex items-center gap-2">
            <span className="text-xs text-gray-400 font-minecraft">1:23</span>
            <div 
              className="h-1 bg-gray-600 flex-1 rounded-full overflow-hidden cursor-pointer group relative"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const percentage = (x / rect.width) * 100;
                setProgress(Math.max(0, Math.min(100, percentage)));
              }}
            >
              <div 
                className="h-full bg-spotify-green group-hover:bg-spotify-green transition-colors"
                style={{ width: `${progress}%` }}
              ></div>
              <div 
                className="absolute top-1/2 h-3 w-3 bg-white rounded-full -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ left: `${progress}%`, transform: 'translateX(-50%) translateY(-50%)' }}
              ></div>
            </div>
            <span className="text-xs text-gray-400 font-minecraft">3:45</span>
          </div>
        </div>

        {/* Volume control */}
        <div className="flex items-center gap-2 w-1/4 justify-end">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Volume2 size={18} />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-minecraft text-xs">Volume Control</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <div 
            className="w-24 h-1 bg-gray-600 rounded-full overflow-hidden cursor-pointer group relative"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const percentage = (x / rect.width) * 100;
              setVolume(Math.max(0, Math.min(100, percentage)));
            }}
          >
            <div 
              className="h-full bg-spotify-green group-hover:bg-spotify-green transition-colors"
              style={{ width: `${volume}%` }}
            ></div>
            <div 
              className="absolute top-1/2 h-3 w-3 bg-white rounded-full -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ left: `${volume}%`, transform: 'translateX(-50%) translateY(-50%)' }}
            ></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
