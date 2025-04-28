
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaylistCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  className?: string;
}

const PlaylistCard = ({ id, name, description, imageUrl, className }: PlaylistCardProps) => {
  return (
    <Link 
      to={`/playlist/${id}`}
      className={cn(
        "group bg-spotify-lightBlack p-4 rounded-none transition-colors hover:bg-gray-800 minecraft-card flex flex-col",
        className
      )}
    >
      <div className="relative mb-4">
        <div className="aspect-square w-full overflow-hidden pixel-border bg-craft-stone">
          <img 
            src={imageUrl} 
            alt={name} 
            className="object-cover w-full h-full"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
        <button className="absolute bottom-2 right-2 bg-spotify-green p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 shadow-lg">
          <Play size={16} fill="black" stroke="black" />
        </button>
      </div>
      
      <h3 className="font-minecraft text-sm text-white line-clamp-1">{name}</h3>
      <p className="font-minecraft text-xs text-gray-400 mt-1 line-clamp-2">
        {description}
      </p>
    </Link>
  );
};

export default PlaylistCard;
