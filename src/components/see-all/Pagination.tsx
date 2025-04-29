
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage
}) => {
  if (totalPages <= 1) return null;
  
  return (
    <div className="flex justify-between items-center mt-8 px-6">
      <Button 
        onClick={onPrevPage}
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
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        className="pixel-button bg-craft-stone hover:bg-craft-stone/80 text-white disabled:opacity-50"
      >
        Next
        <ArrowRight size={16} className="ml-2" />
      </Button>
    </div>
  );
};

export default Pagination;
