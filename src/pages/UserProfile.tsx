
import { User, Music, PlaySquare } from "lucide-react";
import PlaylistCard from "@/components/ui/PlaylistCard";

const UserProfile = () => {
  const userPlaylists = [
    { id: "mining-mix", name: "Mining Mix", description: "Perfect tunes for your mining adventures", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { id: "redstone-beats", name: "Redstone Beats", description: "Electrifying rhythms for your redstone builds", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
  ];

  return (
    <div className="pb-12">
      <header className="flex flex-col items-center bg-gradient-to-b from-craft-dirt/40 to-transparent p-8 text-center">
        <div className="w-48 h-48 rounded-none overflow-hidden pixel-border bg-craft-stone mb-6">
          {/* Minecraft-style user avatar */}
          <div className="w-full h-full grid grid-cols-8 grid-rows-8">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square"
                style={{
                  backgroundColor: [0, 1, 8, 9, 16, 17, 24, 25, 32, 33, 40, 41, 48, 49, 56, 57].includes(i)
                    ? '#866043'
                    : [2, 3, 10, 11, 18, 19, 26, 27, 34, 35, 42, 43, 50, 51, 58, 59].includes(i)
                    ? '#D86D30'
                    : i >= 20 && i <= 23 ? '#FCDC5F'
                    : i >= 28 && i <= 31 ? '#FCDC5F'
                    : '#5D8731',
                }}
              />
            ))}
          </div>
        </div>
        <h1 className="text-4xl font-minecraft text-white mb-2">SteveDigger64</h1>
        <div className="flex items-center justify-center gap-4 text-gray-300 font-minecraft text-sm">
          <div className="flex items-center gap-1">
            <PlaySquare size={16} />
            <span>2 Playlists</span>
          </div>
          <div className="flex items-center gap-1">
            <Music size={16} />
            <span>42 Songs</span>
          </div>
          <div className="flex items-center gap-1">
            <User size={16} />
            <span>5 Following</span>
          </div>
        </div>
      </header>
      
      <section className="px-6 py-8">
        <h2 className="text-xl font-minecraft text-white mb-6">Your Playlists</h2>
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
        </div>
      </section>
      
      <section className="px-6 py-8">
        <h2 className="text-xl font-minecraft text-white mb-6">Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-spotify-lightBlack minecraft-card p-6">
            <h3 className="font-minecraft text-white text-lg mb-4">Top Artists</h3>
            <ol className="space-y-3 font-minecraft">
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-spotify-green">1.</span>
                <span>C418</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-spotify-green">2.</span>
                <span>Lena Raine</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-spotify-green">3.</span>
                <span>PixelBeats</span>
              </li>
            </ol>
          </div>
          
          <div className="bg-spotify-lightBlack minecraft-card p-6">
            <h3 className="font-minecraft text-white text-lg mb-4">Top Songs</h3>
            <ol className="space-y-3 font-minecraft">
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-spotify-green">1.</span>
                <span>Sweden - C418</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-spotify-green">2.</span>
                <span>Pigstep - Lena Raine</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-spotify-green">3.</span>
                <span>Wet Hands - C418</span>
              </li>
            </ol>
          </div>
          
          <div className="bg-spotify-lightBlack minecraft-card p-6">
            <h3 className="font-minecraft text-white text-lg mb-4">Recently Played</h3>
            <ul className="space-y-3 font-minecraft">
              <li className="text-gray-300">Sweden - C418</li>
              <li className="text-gray-300">Diamond Dance - PixelBeats</li>
              <li className="text-gray-300">Diggy Diggy Hole - YOGSCAST</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
