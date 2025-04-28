
import { Play, Heart } from "lucide-react";

interface SongRowProps {
  title: string;
  artist: string;
  album: string;
  duration: string;
  imageUrl: string;
  index: number;
}

const SongRow = ({ title, artist, album, duration, imageUrl, index }: SongRowProps) => {
  return (
    <div className="group grid grid-cols-[16px_4fr_3fr_1fr] md:grid-cols-[16px_6fr_4fr_3fr_1fr] gap-4 px-4 py-2 items-center hover:bg-spotify-lightBlack rounded-none">
      <div className="text-sm text-gray-400 group-hover:hidden font-minecraft">
        {index}
      </div>
      <button className="hidden group-hover:block text-white">
        <Play size={14} />
      </button>
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-craft-stone flex-shrink-0">
          <img 
            src={imageUrl} 
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
        <button className="text-gray-400 opacity-0 group-hover:opacity-100 hover:text-spotify-green transition-colors">
          <Heart size={16} />
        </button>
        <span className="text-sm text-gray-400 font-minecraft">{duration}</span>
      </div>
    </div>
  );
};

export default SongRow;
