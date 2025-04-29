
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  items: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
  }[];
}

const FeaturedCarousel = ({ items }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Auto-advance carousel every 5 seconds
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, items.length]);

  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden minecraft-card">
      {/* Carousel items */}
      <div 
        className="h-full w-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className="min-w-full h-full relative flex-shrink-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${item.imageUrl})`,
                filter: 'brightness(0.6)',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10 w-full">
              <h2 className="text-xl md:text-3xl font-minecraft text-white mb-2 animate-fade-in">{item.title}</h2>
              <p className="text-sm md:text-base font-minecraft text-gray-300 mb-4 max-w-lg animate-fade-in">{item.description}</p>
              <button className="pixel-button bg-craft-grass hover:bg-craft-grass/80 text-white border-craft-bedrock">
                Listen Now
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <button 
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition"
        onClick={handlePrev}
      >
        <ChevronLeft />
      </button>
      
      <button 
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition"
        onClick={handleNext}
      >
        <ChevronRight />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`h-2 ${currentIndex === index ? 'w-6 bg-white' : 'w-2 bg-gray-400'} rounded-full transition-all duration-300`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCarousel;
