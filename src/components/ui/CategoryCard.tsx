
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  id: string;
  name: string;
  imageUrl: string;
  className?: string;
  backgroundColor?: string;
}

const CategoryCard = ({ id, name, imageUrl, className, backgroundColor = "#272727" }: CategoryCardProps) => {
  return (
    <Link
      to={`/genre/${id}`}
      className={cn(
        "aspect-square relative overflow-hidden pixel-border",
        className
      )}
      style={{ backgroundColor }}
    >
      <h3 className="font-minecraft text-lg text-white absolute top-4 left-4 z-10 max-w-[80%]">
        {name}
      </h3>
      <div className="absolute bottom-0 right-0 w-3/5 h-3/5 transform rotate-25 translate-x-2 translate-y-2">
        <img
          src={imageUrl}
          alt={name}
          className="object-cover w-full h-full"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
    </Link>
  );
};

export default CategoryCard;
