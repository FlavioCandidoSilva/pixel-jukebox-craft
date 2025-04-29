import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AlbumCard from "@/components/ui/AlbumCard";
import ArtistCard from "@/components/ui/ArtistCard";
import PlaylistCard from "@/components/ui/PlaylistCard";
import SongRow from "@/components/ui/SongRow";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Filter } from "lucide-react";

const mockData = {
  topAlbums: Array.from({ length: 20 }, (_, i) => ({
    id: `album-${i + 1}`,
    name: `Album ${i + 1}`,
    artist: `Artist ${Math.floor(Math.random() * 10) + 1}`,
    imageUrl: `https://images.unsplash.com/photo-${1518770660439 + i}-4636190af475`,
  })),
  
  featuredArtists: Array.from({ length: 20 }, (_, i) => ({
    id: `artist-${i + 1}`,
    name: `Artist ${i + 1}`,
    imageUrl: `https://images.unsplash.com/photo-${1518770660439 + i + 10}-4636190af475`,
  })),
  
  newReleases: Array.from({ length: 20 }, (_, i) => ({
    id: `release-${i + 1}`,
    name: `New Release ${i + 1}`,
    description: `Fresh tunes from the pixel world`,
    imageUrl: `https://images.unsplash.com/photo-${1518770660439 + i + 20}-4636190af475`,
  })),
  
  popularPlaylists: Array.from({ length: 20 }, (_, i) => ({
    id: `playlist-${i + 1}`,
    name: `Playlist ${i + 1}`,
    description: `Popular community playlist`,
    imageUrl: `https://images.unsplash.com/photo-${1518770660439 + i + 30}-4636190af475`,
  })),
  
  trendingSongs: Array.from({ length: 20 }, (_, i) => ({
    id: `song-${i + 1}`,
    title: `Song Title ${i + 1}`,
    artist: `Artist ${Math.floor(Math.random() * 10) + 1}`,
    album: `Album ${Math.floor(Math.random() * 10) + 1}`,
    duration: `${Math.floor(Math.random() * 4) + 2}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    imageUrl: `https://images.unsplash.com/photo-${1518770660439 + i + 40}-4636190af475`,
  })),
};

const SeeAll = () => {
  const { section } = useParams<{ section: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [sectionData, setSectionData] = useState<any[]>([]);
  const [sectionTitle, setSectionTitle] = useState("");
  const itemsPerPage = 12;
  
  useEffect(() => {
    let data: any[] = [];
    let title = "";
    
    switch(section) {
      case "top-albums":
        data = mockData.topAlbums;
        title = "Top Albums";
        break;
      case "featured-artists":
        data = mockData.featuredArtists;
        title = "Featured Artists";
        break;
      case "new-releases":
        data = mockData.newReleases;
        title = "New Releases";
        break;
      case "popular-playlists":
        data = mockData.popularPlaylists;
        title = "Popular Playlists";
        break;
      case "trending-songs":
        data = mockData.trendingSongs;
        title = "Trending Songs";
        break;
      default:
        data = [];
        title = "Content";
    }
    
    setSectionData(data);
    setFilteredData(data);
    setSectionTitle(title);
  }, [section]);
  
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);
  
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(current => current + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(current => current - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const renderContent = () => {
    if (!section) return <div>Section not found</div>;
    
    switch(section) {
      case "top-albums":
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {currentItems.map(album => (
              <AlbumCard
                key={album.id}
                id={album.id}
                name={album.name}
                artist={album.artist}
                imageUrl={album.imageUrl}
              />
            ))}
          </div>
        );
      case "featured-artists":
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {currentItems.map(artist => (
              <ArtistCard
                key={artist.id}
                id={artist.id}
                name={artist.name}
                imageUrl={artist.imageUrl}
              />
            ))}
          </div>
        );
      case "new-releases":
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {currentItems.map(release => (
              <AlbumCard
                key={release.id}
                id={release.id}
                name={release.name}
                artist="Various Artists"
                imageUrl={release.imageUrl}
              />
            ))}
          </div>
        );
      case "popular-playlists":
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {currentItems.map(playlist => (
              <PlaylistCard
                key={playlist.id}
                id={playlist.id}
                name={playlist.name}
                description={playlist.description}
                imageUrl={playlist.imageUrl}
              />
            ))}
          </div>
        );
      case "trending-songs":
        return (
          <div className="flex flex-col gap-1">
            {currentItems.map((song, index) => (
              <SongRow
                key={song.id || index}
                position={index + 1}
                title={song.title}
                artist={song.artist}
                album={song.album}
                duration={song.duration}
                imageSrc={song.imageSrc}
                imageUrl={song.imageSrc}
                isLiked={song.isLiked}
              />
            ))}
          </div>
        );
      default:
        return <div>Section not found</div>;
    }
  };

  return (
    <div className="pb-24">
      <div className="relative">
        <div 
          className="h-16 w-full bg-craft-grass/60 absolute top-0 left-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='4' height='4' fill='%235D8731'/%3E%3Crect x='4' width='4' height='4' fill='%2367943A'/%3E%3Crect x='8' width='4' height='4' fill='%235D8731'/%3E%3Crect x='12' width='4' height='4' fill='%2367943A'/%3E%3Crect y='4' width='4' height='4' fill='%2367943A'/%3E%3Crect x='4' y='4' width='4' height='4' fill='%235D8731'/%3E%3Crect x='8' y='4' width='4' height='4' fill='%2367943A'/%3E%3Crect x='12' y='4' width='4' height='4' fill='%235D8731'/%3E%3Crect y='8' width='4' height='4' fill='%235D8731'/%3E%3Crect x='4' y='8' width='4' height='4' fill='%2367943A'/%3E%3Crect x='8' y='8' width='4' height='4' fill='%235D8731'/%3E%3Crect x='12' y='8' width='4' height='4' fill='%2367943A'/%3E%3Crect y='12' width='4' height='4' fill='%2367943A'/%3E%3Crect x='4' y='12' width='4' height='4' fill='%235D8731'/%3E%3Crect x='8' y='12' width='4' height='4' fill='%2367943A'/%3E%3Crect x='12' y='12' width='4' height='4' fill='%235D8731'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            imageRendering: 'pixelated'
          }}
        ></div>
        <div className="relative pt-16 pb-6 px-6 bg-gradient-to-b from-craft-dirt/40 to-transparent">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/" className="font-minecraft text-sm text-gray-400 hover:text-white mb-2 inline-block">
                <ArrowLeft size={16} className="inline mr-2" />
                Back to Home
              </Link>
              <h1 className="text-3xl font-minecraft text-white">{sectionTitle}</h1>
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="pixel-button bg-craft-stone hover:bg-craft-stone/80 text-white"
            >
              <Filter size={14} className="mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </div>
      
      <div className="px-6 mt-6 animate-[fade-in_0.4s_ease-out]">
        {renderContent()}
      </div>
      
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-8 px-6">
          <Button 
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="pixel-button bg-craft-stone hover:bg-craft-stone/80 text-white disabled:opacity-50"
          >
            <ArrowLeft size={16} className="mr-2" />
            Previous
          </Button>
          
          <span className="font-minecraft text-sm text-gray-300">
            Page {currentPage} of {totalPages}
          </span>
          
          <Button 
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="pixel-button bg-craft-stone hover:bg-craft-stone/80 text-white disabled:opacity-50"
          >
            Next
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default SeeAll;
