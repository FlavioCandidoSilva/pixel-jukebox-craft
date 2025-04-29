
import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Share2, Sliders, RefreshCcw, Shuffle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Slider } from "@/components/ui/slider";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [volume, setVolume] = useState(75);
  const [progress, setProgress] = useState(40);
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [showEffectsDialog, setShowEffectsDialog] = useState(false);
  const [currentEffect, setCurrentEffect] = useState<string | null>(null);

  const effects = {
    slower: { name: "Slower", description: "Reduce playback speed" },
    remix: { name: "Remix", description: "Apply remix effects to current track" },
    equalizer: { name: "Equalizer", description: "Adjust audio frequencies" }
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-spotify-black h-20 border-t border-gray-800 z-30 px-4">
      <div className="max-w-screen-2xl mx-auto h-full flex items-center justify-between">
        {/* Now playing */}
        <div className="flex items-center gap-4 w-1/4 min-w-[200px]">
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
          <div className="flex gap-1">
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

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button 
                    className="flex justify-center items-center h-8 w-8 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
                    onClick={() => setShowShareDialog(true)}
                  >
                    <Share2 size={16} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-minecraft text-xs">Share</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button 
                    className="flex justify-center items-center h-8 w-8 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
                    onClick={() => setShowEffectsDialog(true)}
                  >
                    <Sliders size={16} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-minecraft text-xs">Audio Effects</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {/* Player controls */}
        <div className="flex flex-col items-center w-2/4 px-4">
          <div className="flex items-center gap-4 mb-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="text-gray-400 hover:text-white transition-colors hover:scale-110">
                    <Shuffle size={16} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-minecraft text-xs">Shuffle</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="text-gray-400 hover:text-white transition-colors hover:scale-110">
                    <SkipBack size={16} />
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
                    {isPlaying ? <Pause size={16} className="text-black" /> : <Play size={16} className="text-black" />}
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
                    <SkipForward size={16} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-minecraft text-xs">Next</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="text-gray-400 hover:text-white transition-colors hover:scale-110">
                    <RefreshCcw size={16} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-minecraft text-xs">Repeat</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          <div className="w-full max-w-md flex items-center gap-2 group">
            <span className="text-xs text-gray-400 font-minecraft">1:23</span>
            <div 
              className="h-1.5 bg-gray-700 flex-1 rounded-full overflow-hidden cursor-pointer group relative hover:h-2 transition-all"
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
                  <Volume2 size={16} />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-minecraft text-xs">Volume Control</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <div className="w-24 group">
            <Slider
              value={[volume]}
              max={100}
              step={1}
              className="group"
              onValueChange={(value) => setVolume(value[0])}
            />
          </div>
        </div>
      </div>

      {/* Share Dialog */}
      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent className="bg-spotify-darkGray border border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="font-minecraft text-lg">Share This Song</DialogTitle>
            <DialogDescription className="font-minecraft text-gray-300">
              Choose how you want to share "Minecraft OST - Sweden"
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {['WhatsApp', 'Twitter', 'Facebook', 'Copy Link', 'Email', 'Embed'].map((platform) => (
              <button 
                key={platform} 
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-md font-minecraft text-sm flex flex-col items-center justify-center gap-2"
              >
                {platform}
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Effects Dialog */}
      <Dialog open={showEffectsDialog} onOpenChange={setShowEffectsDialog}>
        <DialogContent className="bg-spotify-darkGray border border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="font-minecraft text-lg">Audio Effects</DialogTitle>
            <DialogDescription className="font-minecraft text-gray-300">
              Customize how your music sounds
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(effects).map(([key, effect]) => (
                <button 
                  key={key}
                  onClick={() => setCurrentEffect(currentEffect === key ? null : key)}
                  className={cn(
                    "p-2 rounded font-minecraft text-sm",
                    currentEffect === key 
                      ? "bg-spotify-green text-black" 
                      : "bg-gray-800 hover:bg-gray-700"
                  )}
                >
                  {effect.name}
                </button>
              ))}
            </div>
            
            {currentEffect && (
              <div className="bg-gray-900 p-3 rounded-md">
                <p className="font-minecraft text-sm mb-2">
                  {effects[currentEffect as keyof typeof effects].description}
                </p>
                <div className="space-y-3">
                  {currentEffect === 'equalizer' && (
                    <div className="grid grid-cols-5 gap-2">
                      {['Bass', 'Low', 'Mid', 'High', 'Treble'].map((band) => (
                        <div key={band} className="flex flex-col items-center">
                          <div className="h-20 w-full flex items-end justify-center">
                            <div className="w-3 bg-gray-700 hover:bg-spotify-green cursor-pointer rounded-t-sm"
                              style={{ height: `${40 + Math.random() * 60}%` }}
                            ></div>
                          </div>
                          <span className="text-xs mt-1">{band}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {currentEffect === 'slower' && (
                    <div>
                      <p className="text-xs mb-1">Playback Speed</p>
                      <Slider 
                        value={[80]} 
                        max={100} 
                        step={10} 
                        className="group" 
                      />
                      <div className="flex justify-between text-xs mt-1">
                        <span>0.5x</span>
                        <span>0.8x</span>
                        <span>1.0x</span>
                      </div>
                    </div>
                  )}
                  {currentEffect === 'remix' && (
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs mb-1">Effect Intensity</p>
                        <Slider value={[60]} max={100} className="group" />
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {['Echo', 'Reverb', 'Flanger', 'Phaser'].map((effect) => (
                          <button 
                            key={effect}
                            className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded text-xs"
                          >
                            {effect}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
