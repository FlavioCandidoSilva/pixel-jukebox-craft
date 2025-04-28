
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import Search from "./pages/Search";
import Library from "./pages/Library";
import AlbumView from "./pages/AlbumView";
import PlaylistView from "./pages/PlaylistView";
import ArtistView from "./pages/ArtistView";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreatePlaylist from "./pages/CreatePlaylist";
import LikedSongs from "./pages/LikedSongs";
import PasswordReset from "./pages/PasswordReset";
import Admin from "./pages/Admin";
import AddContent from "./pages/AddContent";
import SeeAllPlaylists from "./pages/SeeAllPlaylists";
import SeeAllAlbums from "./pages/SeeAllAlbums";
import SeeAllArtists from "./pages/SeeAllArtists";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<Library />} />
            <Route path="/album/:albumId" element={<AlbumView />} />
            <Route path="/playlist/:playlistId" element={<PlaylistView />} />
            <Route path="/artist/:artistId" element={<ArtistView />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/create-playlist" element={<CreatePlaylist />} />
            <Route path="/liked-songs" element={<LikedSongs />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/add-content" element={<AddContent />} />
            <Route path="/see-all-playlists" element={<SeeAllPlaylists />} />
            <Route path="/see-all-albums" element={<SeeAllAlbums />} />
            <Route path="/see-all-artists" element={<SeeAllArtists />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
