
import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import CategoryCard from "@/components/ui/CategoryCard";
import AlbumCard from "@/components/ui/AlbumCard";
import ArtistCard from "@/components/ui/ArtistCard";
import SongRow from "@/components/ui/SongRow";

const categories = [
  { id: "ambient", name: "Ambient", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475", color: "#876443" },
  { id: "chiptune", name: "Chiptune", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5", color: "#5D8731" },
  { id: "retro-games", name: "Retro Games", imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", color: "#3D99F6" },
  { id: "synthwave", name: "Synthwave", imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b", color: "#D86D30" },
  { id: "lo-fi", name: "Lo-Fi", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475", color: "#7F7F7F" },
  { id: "8-bit", name: "8-Bit", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5", color: "#FCDC5F" },
];

const mockSearchResults = {
  songs: [
    { id: "1", title: "Sweden", artist: "C418", album: "Minecraft Volume Alpha", duration: "3:35", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { id: "2", title: "Pigstep", artist: "Lena Raine", album: "Minecraft Nether Update", duration: "2:28", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
    { id: "3", title: "Diamond Dance", artist: "PixelBeats", album: "Note Block Symphonies", duration: "2:45", imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
  ],
  artists: [
    { id: "c418", name: "C418", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { id: "lena-raine", name: "Lena Raine", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
  ],
  albums: [
    { id: "c418-minecraft", name: "Minecraft Volume Alpha", artist: "C418", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { id: "note-blocks", name: "Note Block Symphonies", artist: "PixelBeats", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
  ]
};

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setHasSearched(true);
    }
  };

  return (
    <div className="pb-12">
      <header className="mb-8 pt-4">
        <form onSubmit={handleSearch} className="flex items-center gap-2 mx-auto max-w-xl bg-spotify-lightBlack rounded-none border-4 border-craft-stone p-2">
          <SearchIcon size={20} className="text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="What do you want to listen to?"
            className="bg-transparent border-none text-white placeholder:text-gray-400 font-minecraft text-sm flex-1 focus:outline-none"
          />
          <button type="submit" className="pixel-button text-xs py-1 px-3">
            Search
          </button>
        </form>
      </header>
      
      {hasSearched ? (
        <div className="space-y-8">
          {/* Songs results */}
          <section className="mb-8">
            <h2 className="text-xl font-minecraft text-white mb-4">Songs</h2>
            <div className="space-y-1">
              {mockSearchResults.songs.map((song, index) => (
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
          
          {/* Artists results */}
          <section className="mb-8">
            <h2 className="text-xl font-minecraft text-white mb-4">Artists</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {mockSearchResults.artists.map((artist) => (
                <ArtistCard
                  key={artist.id}
                  id={artist.id}
                  name={artist.name}
                  imageUrl={artist.imageUrl}
                />
              ))}
            </div>
          </section>
          
          {/* Albums results */}
          <section className="mb-8">
            <h2 className="text-xl font-minecraft text-white mb-4">Albums</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {mockSearchResults.albums.map((album) => (
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
      ) : (
        <div>
          <h2 className="text-xl font-minecraft text-white mb-4">Browse All</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                imageUrl={category.imageUrl}
                backgroundColor={category.color}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
