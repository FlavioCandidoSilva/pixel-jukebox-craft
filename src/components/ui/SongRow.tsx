
import { Play, Heart } from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SongRowProps {
  title: string;
  artist: string;
  album: string;
  duration: string;
  imageUrl: string;
  index?: number;
  isLiked?: boolean;
  // For backward compatibility
  imageSrc?: string;
  position?: number;
}

const SongRow = ({ 
  title, 
  artist, 
  album, 
  duration, 
  imageUrl, 
  imageSrc, 
  index, 
  position, 
  isLiked = false 
}: SongRowProps) => {
  // Use imageUrl as the primary source, but fall back to imageSrc for backward compatibility
  const imageSource = imageUrl || imageSrc;
  // Use index as the primary display number, but fall back to position for backward compatibility
  const displayNumber = index !== undefined ? index : (position !== undefined ? position : "•");
  
  return (
    <div className="group grid grid-cols-[16px_4fr_3fr_1fr] md:grid-cols-[16px_6fr_4fr_3fr_1fr] gap-4 px-4 py-2 items-center hover:bg-spotify-lightBlack rounded-none transition-colors duration-200">
      <div className="text-sm text-gray-400 group-hover:hidden font-minecraft">
        {displayNumber}
      </div>
      <button className="hidden group-hover:block text-white">
        <Play size={14} />
      </button>
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-craft-stone flex-shrink-0">
          <img 
            src={imageSource} 
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
