import React from "react";
import { Heart, MoreHorizontal, Play } from "lucide-react";

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
  onOptionsClick 
}: SongRowProps) => {
  // Use position if provided, fall back to index, or default to 0
  const displayPosition = position !== undefined ? position : (index !== undefined ? index : 0);
  
  // Use imageUrl if provided, fall back to imageSrc
  const displayImage = imageUrl || imageSrc || "";

  return (
    <div className="group grid grid-cols-[16px_4fr_3fr_1fr] md:grid-cols-[16px_6fr_4fr_3fr_1fr] gap-4 px-4 py-2 items-center hover:bg-spotify-lightBlack rounded-none transition-colors duration-200">
      <div className="text-sm text-gray-400 group-hover:hidden font-minecraft">
        {displayPosition}
      </div>
      <button className="hidden group-hover:block text-white">
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
      
      <div className="flex items-center gap-8 justify-end">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className={`${isLiked ? "text-spotify-green" : "text-gray-400"} opacity-0 group-hover:opacity-100 hover:text-spotify-green transition-colors`}>
                <Heart size={16} fill={isLiked ? "currentColor" : "none"} />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-minecraft text-xs">{isLiked ? "Remove from Liked Songs" : "Add to Liked Songs"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <span className="text-sm text-gray-400 font-minecraft">{duration}</span>
      </div>
    </div>
  );
};

export default SongRow;
