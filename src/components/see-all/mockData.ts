
export const mockData = {
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
