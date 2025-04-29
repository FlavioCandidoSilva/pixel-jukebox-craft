
import React from "react";
import { Heart, MoreHorizontal, Play, Share2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface SongRowProps {
  position?: number;
  index?: number; // For backward compatibility
  title: string;
  artist: string;
  album: string;
  duration: string;
  imageUrl: string;
  imageSrc?: string; // Add this optional prop for backward compatibility
  isLiked?: boolean;
  onPlay?: () => void;
  onLike?: () => void;
  onOptionsClick?: () => void;
  onShare?: () => void;
}

const SongRow = ({ 
  position, 
  index, // For backward compatibility
  title, 
  artist, 
  album, 
  duration, 
  imageUrl, 
  imageSrc, // For backward compatibility
  isLiked = false,
  onPlay, 
  onLike, 
  onOptionsClick,
  onShare
}: SongRowProps) => {
  // Use position if provided, fall back to index, or default to 0
  const displayPosition = position !== undefined ? position : (index !== undefined ? index : 0);
  
  // Use imageUrl if provided, fall back to imageSrc
  const displayImage = imageUrl || imageSrc || "";

  const handleLike = () => {
    if (onLike) onLike();
  };

  const handlePlay = () => {
    if (onPlay) onPlay();
  };

  const handleShare = () => {
    if (onShare) onShare();
  };

  return (
    <div className="group grid grid-cols-[16px_4fr_3fr_1fr] md:grid-cols-[16px_6fr_4fr_3fr_1fr] gap-4 px-4 py-2 items-center hover:bg-spotify-lightBlack rounded-none transition-colors duration-200">
      <div className="text-sm text-gray-400 group-hover:hidden font-minecraft">
        {displayPosition}
      </div>
      <button className="hidden group-hover:block text-white" onClick={handlePlay}>
        <Play size={14} />
      </button>
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-craft-stone flex-shrink-0">
          <img 
            src={displayImage} 
            alt={title} 
            className="w-full h-full object-cover"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
        <div className="min-w-0">
          <p className="text-sm text-white truncate font-minecraft">{title}</p>
          <p className="text-xs text-gray-400 truncate font-minecraft">{artist}</p>
        </div>
      </div>
      
      <div className="hidden md:block">
        <p className="text-sm text-gray-400 truncate font-minecraft">{album}</p>
      </div>
      
      <div className="flex items-center gap-4 md:gap-8 justify-end">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button 
                className={`${isLiked ? "text-spotify-green" : "text-gray-400"} opacity-0 group-hover:opacity-100 hover:text-spotify-green transition-colors`}
                onClick={handleLike}
              >
                <Heart size={16} fill={isLiked ? "currentColor" : "none"} />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-minecraft text-xs">{isLiked ? "Remove from Liked Songs" : "Add to Liked Songs"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <span className="text-sm text-gray-400 font-minecraft">{duration}</span>
        
        <div className="opacity-0 group-hover:opacity-100">
          <DropdownMenu>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <MoreHorizontal size={16} />
                    </button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-minecraft text-xs">More Options</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <DropdownMenuContent className="bg-spotify-lightBlack border-gray-700 text-white font-minecraft">
              <DropdownMenuLabel>Song Options</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-gray-700" />
              <DropdownMenuItem className="text-sm cursor-pointer hover:bg-gray-700" onClick={handleLike}>
                {isLiked ? "Remove from Liked Songs" : "Add to Liked Songs"}
              </DropdownMenuItem>
              <DropdownMenuItem className="text-sm cursor-pointer hover:bg-gray-700" onClick={handleShare}>
                <Share2 size={14} className="mr-2" />
                Share
              </DropdownMenuItem>
              <DropdownMenuItem className="text-sm cursor-pointer hover:bg-gray-700">
                Add to Playlist
              </DropdownMenuItem>
              <DropdownMenuItem className="text-sm cursor-pointer hover:bg-gray-700">
                View Artist
              </DropdownMenuItem>
              <DropdownMenuItem className="text-sm cursor-pointer hover:bg-gray-700">
                View Album
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default SongRow;
