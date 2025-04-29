
import { useState } from "react";
import { Link } from "react-router-dom";
import { Edit, Music, Disc, User as UserIcon, Image, Users, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PlaylistCard from "@/components/ui/PlaylistCard";
import AlbumCard from "@/components/ui/AlbumCard";
import ArtistCard from "@/components/ui/ArtistCard";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("playlists");
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  
  const user = {
    username: "StevePlayer",
    email: "steve@minecraft.net",
    bio: "Just a casual miner who loves music while collecting diamonds!",
    followers: 23,
    following: 45,
    avatarUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    bannerUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    favoriteGenres: ["Ambient", "Chiptune", "Electronic"],
  };
  
  const followers = [
    { id: "1", username: "DiamondMiner", avatarUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { id: "2", username: "CreeperSlayer", avatarUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
    { id: "3", username: "EnderDragon", avatarUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
    { id: "4", username: "PiglinTrader", avatarUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" },
    { id: "5", username: "VillagerHmm", avatarUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22" },
  ];
  
  const following = [
    { id: "1", username: "C418Official", avatarUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { id: "2", username: "LenaRaine", avatarUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
    { id: "3", username: "NoteBlockMaster", avatarUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
    { id: "4", username: "DiscJockeyCreeper", avatarUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" },
  ];
  
  const userPlaylists = [
    { id: "mining-mix", name: "Mining Mix", description: "Perfect tunes for your mining adventures", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { id: "redstone-beats", name: "Redstone Beats", description: "Electrifying rhythms for your redstone builds", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
  ];
  
  const savedAlbums = [
    { id: "c418-minecraft", name: "Minecraft Volume Alpha", artist: "C418", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { id: "note-blocks", name: "Note Block Symphonies", artist: "PixelBeats", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
  ];
  
  const followedArtists = [
    { id: "c418", name: "C418", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { id: "lena-raine", name: "Lena Raine", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
  ];

  const handleEditProfile = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle profile update logic
    setShowEditProfile(false);
  };

  const handleChangeBanner = () => {
    // Handle banner upload logic
  };

  const handleChangeAvatar = () => {
    // Handle avatar upload logic
  };
  
  return (
    <div className="pb-12">
      {/* Profile banner */}
      <div 
        className="relative w-full h-48 bg-gradient-to-b from-craft-dirt/50 to-spotify-darkGray overflow-hidden"
      >
        {user.bannerUrl && (
          <img 
            src={user.bannerUrl} 
            alt="Profile banner" 
            className="w-full h-full object-cover opacity-60"
          />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-spotify-darkGray opacity-80"></div>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 border-none text-white"
          onClick={handleChangeBanner}
        >
          <Image size={14} className="mr-1" />
          Change Banner
        </Button>
      </div>
      
      {/* Profile header */}
      <div className="flex flex-col md:flex-row items-center gap-6 px-6 -mt-16 mb-8 relative z-10">
        <div className="relative">
          <div className="w-32 h-32 md:w-40 md:h-40 pixel-border bg-craft-stone overflow-hidden">
            <img 
              src={user.avatarUrl} 
              alt={user.username} 
              className="w-full h-full object-cover"
              style={{imageRendering: 'pixelated'}}
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            className="absolute bottom-2 right-2 bg-black/50 hover:bg-black/70 border-none rounded-full p-2 h-auto text-white"
            onClick={handleChangeAvatar}
          >
            <Image size={14} />
          </Button>
        </div>
        
        <div className="text-center md:text-left mt-4 md:mt-10">
          <div className="text-sm font-minecraft uppercase text-gray-400 mb-1">Profile</div>
          <h1 className="text-3xl md:text-5xl font-minecraft text-white mb-2">{user.username}</h1>
          {user.bio && (
            <p className="text-sm font-minecraft text-gray-300 mb-3 max-w-md">{user.bio}</p>
          )}
          <div className="flex flex-wrap gap-2 mb-4">
            {user.favoriteGenres.map((genre, index) => (
              <span 
                key={index}
                className="bg-spotify-lightBlack px-3 py-1 text-xs font-minecraft text-gray-300 inline-flex items-center"
              >
                <Star size={12} className="mr-1 text-spotify-green" />
                {genre}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mb-4 justify-center md:justify-start">
            <button
              onClick={() => setShowFollowers(true)}
              className="text-sm font-minecraft text-gray-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <span className="text-white">{user.followers}</span> Followers
            </button>
            <span className="text-gray-500">•</span>
            <button
              onClick={() => setShowFollowing(true)}
              className="text-sm font-minecraft text-gray-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <span className="text-white">{user.following}</span> Following
            </button>
          </div>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Button 
              onClick={() => setShowEditProfile(true)}
              className="font-minecraft text-xs pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white border-craft-bedrock"
              size="sm"
            >
              <Edit size={14} className="mr-1" /> Edit Profile
            </Button>
            <Link to="/logout">
              <Button 
                variant="outline" 
                size="sm"
                className="font-minecraft text-xs pixel-button bg-craft-stone hover:bg-craft-stone/80 text-white border-craft-bedrock"
              >
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <Tabs defaultValue="playlists" className="w-full" onValueChange={setActiveTab} value={activeTab}>
        <TabsList className="bg-spotify-lightBlack mb-6 border-b border-gray-800 w-full justify-start h-auto overflow-x-auto minecraft-scrollbar">
          <TabsTrigger 
            value="playlists" 
            className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3"
          >
            <Disc size={16} className="mr-2" /> Playlists
          </TabsTrigger>
          <TabsTrigger 
            value="artists" 
            className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3"
          >
            <UserIcon size={16} className="mr-2" /> Artists
          </TabsTrigger>
          <TabsTrigger 
            value="albums" 
            className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3"
          >
            <Music size={16} className="mr-2" /> Albums
          </TabsTrigger>
          <TabsTrigger 
            value="favorites" 
            className="font-minecraft text-sm data-[state=active]:text-spotify-green data-[state=active]:border-b-2 data-[state=active]:border-spotify-green rounded-none px-6 py-3"
          >
            <Heart size={16} className="mr-2" /> Favorites
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="playlists" className="mt-0 animate-fade-in">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {userPlaylists.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                id={playlist.id}
                name={playlist.name}
                description={playlist.description}
                imageUrl={playlist.imageUrl}
              />
            ))}
            <Link
              to="/create-playlist"
              className="group bg-spotify-lightBlack p-4 rounded-none transition-colors hover:bg-gray-800 minecraft-card flex flex-col items-center justify-center aspect-square"
            >
              <div className="w-16 h-16 bg-craft-stone flex items-center justify-center mb-4 pixel-border">
                <span className="text-3xl text-white font-minecraft">+</span>
              </div>
              <span className="font-minecraft text-sm text-white">Create Playlist</span>
            </Link>
          </div>
        </TabsContent>
        
        <TabsContent value="artists" className="mt-0 animate-fade-in">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {followedArtists.map((artist) => (
              <ArtistCard
                key={artist.id}
                id={artist.id}
                name={artist.name}
                imageUrl={artist.imageUrl}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="albums" className="mt-0 animate-fade-in">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {savedAlbums.map((album) => (
              <AlbumCard
                key={album.id}
                id={album.id}
                name={album.name}
                artist={album.artist}
                imageUrl={album.imageUrl}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="favorites" className="mt-0 animate-fade-in">
          <div className="bg-spotify-lightBlack minecraft-card p-4 mb-6">
            <h3 className="font-minecraft text-white mb-4 flex items-center">
              <Heart size={18} className="mr-2 text-spotify-green" />
              Favorite Songs
            </h3>
            <div className="space-y-2">
              {savedAlbums.slice(0, 5).map((song, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 p-2 hover:bg-gray-800 transition-colors group cursor-pointer"
                >
                  <div className="w-6 text-center font-minecraft text-gray-400">{i + 1}</div>
                  <img 
                    src={song.imageUrl} 
                    alt={song.name} 
                    className="w-10 h-10 object-cover"
                    style={{imageRendering: 'pixelated'}}
                  />
                  <div>
                    <p className="font-minecraft text-sm text-white">{song.name}</p>
                    <p className="font-minecraft text-xs text-gray-400">{song.artist}</p>
                  </div>
                  <div className="ml-auto">
                    <Heart size={16} className="fill-spotify-green text-spotify-green" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link 
                to="/liked-songs" 
                className="font-minecraft text-xs text-gray-400 hover:text-white transition-colors"
              >
                See all liked songs →
              </Link>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Followers Dialog */}
      <Dialog open={showFollowers} onOpenChange={setShowFollowers}>
        <DialogContent className="bg-spotify-black border-gray-700 minecraft-card">
          <DialogHeader>
            <DialogTitle className="font-minecraft text-white">Followers</DialogTitle>
          </DialogHeader>
          <div className="max-h-80 overflow-y-auto minecraft-scrollbar">
            {followers.map((follower) => (
              <Link 
                key={follower.id} 
                to={`/profile/${follower.id}`} 
                className="flex items-center gap-3 p-3 hover:bg-spotify-lightBlack transition-colors"
              >
                <div className="w-10 h-10 bg-craft-stone pixel-border overflow-hidden">
                  <img 
                    src={follower.avatarUrl} 
                    alt={follower.username}
                    className="w-full h-full object-cover"
                    style={{imageRendering: 'pixelated'}}
                  />
                </div>
                <span className="font-minecraft text-sm text-white">{follower.username}</span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="ml-auto font-minecraft text-xs bg-transparent"
                >
                  Follow Back
                </Button>
              </Link>
            ))}
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Following Dialog */}
      <Dialog open={showFollowing} onOpenChange={setShowFollowing}>
        <DialogContent className="bg-spotify-black border-gray-700 minecraft-card">
          <DialogHeader>
            <DialogTitle className="font-minecraft text-white">Following</DialogTitle>
          </DialogHeader>
          <div className="max-h-80 overflow-y-auto minecraft-scrollbar">
            {following.map((follow) => (
              <Link 
                key={follow.id} 
                to={`/profile/${follow.id}`} 
                className="flex items-center gap-3 p-3 hover:bg-spotify-lightBlack transition-colors"
              >
                <div className="w-10 h-10 bg-craft-stone pixel-border overflow-hidden">
                  <img 
                    src={follow.avatarUrl} 
                    alt={follow.username}
                    className="w-full h-full object-cover"
                    style={{imageRendering: 'pixelated'}}
                  />
                </div>
                <span className="font-minecraft text-sm text-white">{follow.username}</span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="ml-auto font-minecraft text-xs bg-transparent hover:bg-gray-800"
                >
                  Unfollow
                </Button>
              </Link>
            ))}
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Edit Profile Dialog */}
      <Dialog open={showEditProfile} onOpenChange={setShowEditProfile}>
        <DialogContent className="bg-spotify-black border-gray-700 minecraft-card">
          <DialogHeader>
            <DialogTitle className="font-minecraft text-white">Edit Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEditProfile} className="space-y-4">
            <div>
              <label htmlFor="username" className="font-minecraft text-sm text-gray-300 block mb-1">
                Username
              </label>
              <Input 
                id="username" 
                defaultValue={user.username} 
                className="pixel-input"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-minecraft text-sm text-gray-300 block mb-1">
                Email
              </label>
              <Input 
                id="email" 
                defaultValue={user.email} 
                className="pixel-input"
              />
            </div>
            <div>
              <label htmlFor="bio" className="font-minecraft text-sm text-gray-300 block mb-1">
                Biography
              </label>
              <Textarea 
                id="bio" 
                defaultValue={user.bio} 
                className="pixel-input min-h-[120px]"
              />
            </div>
            <div>
              <label className="font-minecraft text-sm text-gray-300 block mb-2">
                Favorite Music Genres
              </label>
              <div className="flex flex-wrap gap-2">
                {["Ambient", "Chiptune", "Electronic", "Soundtrack", "Lo-Fi", "Retro", "Indie"].map((genre) => (
                  <div 
                    key={genre} 
                    className={`px-3 py-1 border ${user.favoriteGenres.includes(genre) 
                      ? 'bg-craft-grass text-white' 
                      : 'bg-spotify-lightBlack text-gray-300 border-gray-700'} 
                      font-minecraft text-xs cursor-pointer hover:bg-gray-800 transition-colors`}
                  >
                    {genre}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <Button 
                type="submit" 
                className="font-minecraft text-xs pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white border-craft-bedrock"
              >
                Save Changes
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserProfile;
