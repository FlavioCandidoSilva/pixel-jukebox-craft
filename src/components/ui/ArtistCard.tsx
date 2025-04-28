
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ArtistCardProps {
  id: string;
  name: string;
  imageUrl: string;
  className?: string;
}

const ArtistCard = ({ id, name, imageUrl, className }: ArtistCardProps) => {
  return (
    <Link
      to={`/artist/${id}`}
      className={cn(
        "group bg-spotify-lightBlack p-4 rounded-none transition-colors hover:bg-gray-800 minecraft-card flex flex-col",
        className
      )}
    >
      <div className="aspect-square w-full mb-4 overflow-hidden pixel-border bg-craft-stone">
        <img
          src={imageUrl}
          alt={name}
          className="object-cover w-full h-full"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
      
      <h3 className="font-minecraft text-sm text-white line-clamp-1 text-center">{name}</h3>
      <p className="font-minecraft text-xs text-gray-400 mt-1 text-center">
        Artist
      </p>
    </Link>
  );
};

export default ArtistCard;
