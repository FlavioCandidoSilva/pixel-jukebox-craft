
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-spotify-darkGray">
      {/* Creeper face using CSS grid */}
      <div className="grid grid-cols-8 gap-2 w-48 h-48 mb-8">
        {/* Row 1 */}
        <div className="bg-craft-grass"></div>
        <div className="bg-craft-grass"></div>
        <div className="bg-craft-grass"></div>
        <div className="bg-craft-grass"></div>
        <div className="bg-craft-grass"></div>
        <div className="bg-craft-grass"></div>
        <div className="bg-craft-grass"></div>
        <div className="bg-craft-grass"></div>
        
        {/* Row 2 */}
        <div className="bg-craft-grass"></div>
        <div className="bg-craft-grass"></div>
        <div className="bg-craft-grass"></div>
        <div className="bg-craft-grass"></div>
        <div className="bg-craft-grass"></div>
        <div className="bg-craft-grass"></div>
        <div className="bg-craft-grass"></div>
        <div className="bg-craft-grass"></div>
        
        {/* Row 3 */}
        <div className="bg-craft-grass"></div>
        <div className="bg-craft-grass"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="bg-craft-grass"></div>
        <div className="bg-craft-grass"></div>
        
        {/* Row 4 */}
        <div className="bg-craft-grass"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="bg-craft-grass"></div>
        
        {/* Row 5 */}
        <div className="bg-craft-grass"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="bg-craft-grass"></div>
        
        {/* Row 6 */}
        <div className="bg-craft-grass"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="bg-craft-grass"></div>
        
        {/* Row 7 */}
        <div className="bg-craft-grass"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="bg-craft-grass"></div>
        <div className="bg-craft-grass"></div>
        <div className="bg-black"></div>
        <div className="bg-black"></div>
        <div className="bg-craft-grass"></div>
        
        {/* Row 8 */}
        <div className="bg-craft-grass"></div>
        <div className="bg-craft-grass"></div>
        <div className="bg-craft-grass"></div>
        <div className="bg-craft-grass"></div>
        <div className="bg-craft-grass"></div>
        <div className="bg-craft-grass"></div>
        <div className="bg-craft-grass"></div>
        <div className="bg-craft-grass"></div>
      </div>
      
      <div className="text-center px-4">
        <h1 className="text-6xl font-minecraft mb-4 text-white">404</h1>
        <p className="text-xl text-craft-grass font-minecraft mb-6">SSSSSSSS... This page just exploded!</p>
        <p className="text-gray-400 font-minecraft mb-8">The page at {location.pathname} doesn't exist.</p>
        
        <div className="minecraft-card bg-spotify-lightBlack p-6 max-w-md mx-auto">
          <p className="text-white font-minecraft mb-4">Would you like to:</p>
          <div className="space-y-3">
            <Link to="/" className="block w-full pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white border-craft-bedrock py-2 px-4 text-center font-minecraft">
              Return to Home
            </Link>
            <Link to="/search" className="block w-full pixel-button bg-craft-stone hover:bg-craft-stone/80 text-white border-craft-bedrock py-2 px-4 text-center font-minecraft">
              Search for Music
            </Link>
          </div>
        </div>
      </div>
      
      <div className="animate-bounce mt-12">
        <span className="font-minecraft text-gray-500">↑</span>
        <p className="font-minecraft text-gray-500 text-xs">Careful! Creepers nearby...</p>
      </div>
    </div>
  );
};

export default NotFound;
