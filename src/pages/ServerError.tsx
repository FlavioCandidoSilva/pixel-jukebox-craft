
import { useEffect } from "react";
import { Link } from "react-router-dom";

interface ErrorProps {
  statusCode?: number;
  message?: string;
}

const ServerError = ({ statusCode = 500, message = "Internal Server Error" }: ErrorProps) => {
  useEffect(() => {
    console.error(`${statusCode} Error: ${message}`);
  }, [statusCode, message]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-spotify-darkGray px-4">
      {/* Broken pickaxe icon */}
      <div className="relative w-48 h-48 mb-8">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect x="2" y="2" width="2" height="2" fill="#8B8B8B" />
            <rect x="4" y="2" width="2" height="2" fill="#8B8B8B" />
            <rect x="6" y="2" width="2" height="2" fill="#8B8B8B" />
            <rect x="4" y="4" width="2" height="2" fill="#8B8B8B" />
            <rect x="6" y="4" width="2" height="2" fill="#8B8B8B" />
            <rect x="8" y="4" width="2" height="2" fill="#8B8B8B" />
            <rect x="6" y="6" width="2" height="2" fill="#8B8B8B" />
            <rect x="8" y="6" width="2" height="2" fill="#8B8B8B" />
            <rect x="10" y="6" width="2" height="2" fill="#8B8B8B" />
            <rect x="8" y="8" width="2" height="2" fill="#8B8B8B" />
            <rect x="10" y="8" width="2" height="2" fill="#8B8B8B" />
            <rect x="12" y="8" width="2" height="2" fill="#8B8B8B" />
            <rect x="10" y="10" width="2" height="2" fill="#8B8B8B" />
            <rect x="12" y="10" width="2" height="2" fill="#8B8B8B" />
            <rect x="14" y="10" width="2" height="2" fill="#8B8B8B" />
            <rect x="12" y="12" width="2" height="2" fill="#8B8B8B" />
            <rect x="14" y="12" width="2" height="2" fill="#8B8B8B" />
            <rect x="16" y="12" width="2" height="2" fill="#8B8B8B" />
            <rect x="14" y="14" width="2" height="2" fill="#8B8B8B" />
            <rect x="16" y="14" width="2" height="2" fill="#8B8B8B" />
            <rect x="18" y="14" width="2" height="2" fill="#8B8B8B" />
            <rect x="16" y="16" width="2" height="2" fill="#8B8B8B" />
            <rect x="18" y="16" width="2" height="2" fill="#8B8B8B" />
            <rect x="20" y="16" width="2" height="2" fill="#8B8B8B" />
            <rect x="18" y="18" width="2" height="2" fill="#653200" />
            <rect x="16" y="18" width="2" height="2" fill="#653200" />
            <rect x="14" y="18" width="2" height="2" fill="#653200" />
            <rect x="12" y="18" width="2" height="2" fill="#653200" />
            <rect x="10" y="20" width="2" height="2" fill="#653200" />
            <rect x="12" y="20" width="2" height="2" fill="#653200" />
            <rect x="14" y="20" width="2" height="2" fill="#653200" />
            <rect x="16" y="20" width="2" height="2" fill="#653200" />
            
            {/* Broken part */}
            <rect x="20" y="14" width="2" height="2" fill="#8B8B8B" className="opacity-50 animate-pulse" />
            <rect x="22" y="12" width="2" height="2" fill="#8B8B8B" className="opacity-50 animate-pulse" />
          </svg>
        </div>
      </div>
      
      <div className="text-center">
        <h1 className="text-6xl font-minecraft mb-4 text-red-500">{statusCode}</h1>
        <p className="text-xl text-red-400 font-minecraft mb-6">{message}</p>
        <p className="text-gray-400 font-minecraft mb-8">Your pickaxe broke while mining this page.</p>
        
        <div className="minecraft-card bg-spotify-lightBlack p-6 max-w-md mx-auto">
          <p className="text-white font-minecraft mb-4">What would you like to do?</p>
          <div className="space-y-3">
            <Link to="/" className="block w-full pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white border-craft-bedrock py-2 px-4 text-center font-minecraft">
              Return to Home
            </Link>
            <button onClick={() => window.location.reload()} className="block w-full pixel-button bg-craft-stone hover:bg-craft-stone/80 text-white border-craft-bedrock py-2 px-4 text-center font-minecraft">
              Try Again
            </button>
            <Link to="/support" className="block w-full text-center font-minecraft text-gray-400 hover:text-white transition-colors py-2">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="font-minecraft text-gray-500 text-xs">Error ID: {Math.random().toString(36).substring(2, 15)}</p>
      </div>
    </div>
  );
};

export default ServerError;
