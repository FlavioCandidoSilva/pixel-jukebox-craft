
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PageHeader from "@/components/see-all/PageHeader";
import Pagination from "@/components/see-all/Pagination";
import AlbumGrid from "@/components/see-all/AlbumGrid";
import ArtistGrid from "@/components/see-all/ArtistGrid";
import PlaylistGrid from "@/components/see-all/PlaylistGrid";
import SongList from "@/components/see-all/SongList";
import { mockData } from "@/components/see-all/mockData";

type ContentData = {
  data: any[];
  title: string;
};

const SeeAll = () => {
  const { section } = useParams<{ section: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [sectionTitle, setSectionTitle] = useState("");
  const itemsPerPage = 12;
  
  useEffect(() => {
    const getSectionData = (): ContentData => {
      switch(section) {
        case "top-albums":
          return { data: mockData.topAlbums, title: "Top Albums" };
        case "featured-artists":
          return { data: mockData.featuredArtists, title: "Featured Artists" };
        case "new-releases":
          return { data: mockData.newReleases, title: "New Releases" };
        case "popular-playlists":
          return { data: mockData.popularPlaylists, title: "Popular Playlists" };
        case "trending-songs":
          return { data: mockData.trendingSongs, title: "Trending Songs" };
        default:
          return { data: [], title: "Content" };
      }
    };
    
    const { data, title } = getSectionData();
    setFilteredData(data);
    setSectionTitle(title);
    // Reset to first page when section changes
    setCurrentPage(1);
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
        return <AlbumGrid items={currentItems} />;
      case "featured-artists":
        return <ArtistGrid items={currentItems} />;
      case "new-releases":
        return <AlbumGrid items={currentItems.map(item => ({ 
          ...item, 
          artist: "Various Artists" 
        }))} />;
      case "popular-playlists":
        return <PlaylistGrid items={currentItems} />;
      case "trending-songs":
        return <SongList items={currentItems} />;
      default:
        return <div>Section not found</div>;
    }
  };

  return (
    <div className="pb-24">
      <PageHeader title={sectionTitle} />
      
      <div className="px-6 mt-6 animate-[fade-in_0.4s_ease-out]">
        {renderContent()}
      </div>
      
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevPage={goToPrevPage}
        onNextPage={goToNextPage}
      />
    </div>
  );
};

export default SeeAll;
