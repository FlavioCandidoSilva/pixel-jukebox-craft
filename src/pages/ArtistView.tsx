
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Heart, Play } from "lucide-react";
import AlbumCard from "@/components/ui/AlbumCard";
import SongRow from "@/components/ui/SongRow";

interface Artist {
  id: string;
  name: string;
  bio: string;
  profileImage: string;
  popularSongs: Song[];
  albums: Album[];
}

interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  imageUrl: string;
}

interface Album {
  id: string;
  name: string;
  artist: string;
  imageUrl: string;
}

const mockArtists: Record<string, Artist> = {
  "c418": {
    id: "c418",
    name: "C418",
    bio: "Creator of the iconic Minecraft soundtrack that defined a generation of gamers.",
    profileImage: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    popularSongs: [
      { id: "1", title: "Sweden", artist: "C418", album: "Minecraft Volume Alpha", duration: "3:35", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
      { id: "2", title: "Subwoofer Lullaby", artist: "C418", album: "Minecraft Volume Alpha", duration: "3:28", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
      { id: "3", title: "Wet Hands", artist: "C418", album: "Minecraft Volume Alpha", duration: "1:30", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
      { id: "4", title: "Haggstrom", artist: "C418", album: "Minecraft Volume Alpha", duration: "3:24", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
      { id: "5", title: "Mice on Venus", artist: "C418", album: "Minecraft Volume Alpha", duration: "4:40", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    ],
    albums: [
      { id: "c418-minecraft", name: "Minecraft Volume Alpha", artist: "C418", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
      { id: "minecraft-beta", name: "Minecraft Volume Beta", artist: "C418", imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
    ]
  },
  "lena-raine": {
    id: "lena-raine",
    name: "Lena Raine",
    bio: "Composer of music for the Minecraft Nether Update and beyond.",
    profileImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    popularSongs: [
      { id: "1", title: "Pigstep", artist: "Lena Raine", album: "Minecraft Nether Update", duration: "2:28", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
      { id: "2", title: "Otherside", artist: "Lena Raine", album: "Minecraft Caves & Cliffs", duration: "3:15", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
    ],
    albums: [
      { id: "minecraft-nether", name: "Minecraft Nether Update", artist: "Lena Raine", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
    ]
  }
};

const ArtistView = () => {
  const { artistId } = useParams<{ artistId: string }>();
  const [artist, setArtist] = useState<Artist | null>(null);
  
  useEffect(() => {
    if (artistId && mockArtists[artistId]) {
      setArtist(mockArtists[artistId]);
    }
  }, [artistId]);
  
  if (!artist) {
    return (
      <div className="flex items-center justify-center h-80">
        <div className="font-minecraft text-white">Loading artist...</div>
      </div>
    );
  }

  return (
    <div className="pb-12">
      {/* Artist header */}
      <header className="flex flex-col items-center bg-gradient-to-b from-craft-water/40 to-transparent p-8 text-center">
        <div className="w-48 h-48 rounded-none overflow-hidden pixel-border mb-6">
          <img
            src={artist.profileImage}
            alt={artist.name}
            className="object-cover w-full h-full"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
        <h1 className="text-4xl font-minecraft text-white mb-2">{artist.name}</h1>
        <p className="text-sm text-gray-300 font-minecraft max-w-2xl mb-6">{artist.bio}</p>
      </header>
      
      {/* Action buttons */}
      <div className="flex items-center justify-center gap-6 p-6">
        <button className="bg-spotify-green p-4 rounded-full hover:scale-105 transition-transform">
          <Play size={24} fill="black" stroke="black" />
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <Heart size={24} />
        </button>
      </div>
      
      {/* Popular songs */}
      <section className="mb-8 px-4">
        <h2 className="text-xl font-minecraft text-white mb-4">Popular</h2>
        <div className="space-y-1">
          {artist.popularSongs.map((song, index) => (
            <SongRow
              key={song.id}
              title={song.title}
              artist={song.artist}
              album={song.album}
              duration={song.duration}
              imageUrl={song.imageUrl}
              index={index + 1}
            />
          ))}
        </div>
      </section>
      
      {/* Albums */}
      <section className="mb-8 px-4">
        <h2 className="text-xl font-minecraft text-white mb-4">Albums</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {artist.albums.map((album) => (
            <AlbumCard
              key={album.id}
              id={album.id}
              name={album.name}
              artist={album.artist}
              imageUrl={album.imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArtistView;
