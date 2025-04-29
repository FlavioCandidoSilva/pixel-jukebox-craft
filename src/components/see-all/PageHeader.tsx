
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Filter } from "lucide-react";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
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
            <h1 className="text-3xl font-minecraft text-white">{title}</h1>
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
  );
};

export default PageHeader;
