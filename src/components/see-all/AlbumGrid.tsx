
import React from "react";
import AlbumCard from "@/components/ui/AlbumCard";
import { Link } from "react-router-dom";
import { Users } from "lucide-react";

interface AlbumGridProps {
  items: Array<{
    id: string;
    name: string;
    artist: string;
    imageUrl: string;
  }>;
  showLiveCollaborativeLink?: boolean;
}

const AlbumGrid: React.FC<AlbumGridProps> = ({ items, showLiveCollaborativeLink = false }) => {
  return (
    <div className="space-y-6">
      {showLiveCollaborativeLink && (
        <Link 
          to="/collaborative/party-mix" 
          className="block bg-gradient-to-r from-purple-900 to-indigo-800 hover:opacity-90 transition-opacity rounded-lg p-4 mb-6"
        >
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-purple-700 flex items-center justify-center">
              <Users size={24} className="text-white" />
            </div>
            <div>
              <h3 className="font-minecraft text-white text-lg">Live Collaborative Session</h3>
              <p className="font-minecraft text-purple-300 text-sm">Join friends listening together now</p>
            </div>
            <div className="ml-auto bg-purple-600 rounded-full px-3 py-1">
              <span className="text-white text-xs font-minecraft">5 online</span>
            </div>
          </div>
        </Link>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items.map(album => (
          <AlbumCard
            key={album.id}
            id={album.id}
            name={album.name}
            artist={album.artist}
            imageUrl={album.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default AlbumGrid;
