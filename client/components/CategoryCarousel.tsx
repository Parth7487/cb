import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

interface CategoryCarouselProps {
  categories: Category[];
  onCategoryClick?: (categoryId: string) => void;
}

export default function CategoryCarousel({ categories, onCategoryClick }: CategoryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [windowSize, setWindowSize] = useState<{ width: number } | null>(null);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % categories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, categories.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const getItemsPerView = () => {
    if (!windowSize) return 3;
    return windowSize.width < 640 ? 1 : windowSize.width < 1024 ? 2 : 3;
  };

  const itemsPerView = getItemsPerView();

  const getVisibleCategories = () => {
    const result = [];

    for (let i = 0; i < itemsPerView; i++) {
      result.push(categories[(currentIndex + i) % categories.length]);
    }

    return result;
  };

  return (
    <div className="w-full">
      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden bg-white rounded-lg">
          <div className="flex gap-4 sm:gap-6 p-4 sm:p-6">
            {getVisibleCategories().map((category) => (
              <div
                key={category.id}
                className="flex-1 min-w-0 cursor-pointer group"
                onClick={() => onCategoryClick?.(category.id)}
              >
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 sm:p-8 text-center hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center justify-center group-hover:from-yellow-100 group-hover:to-yellow-200">
                  <div className="text-5xl sm:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors line-clamp-2">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        {categories.length > itemsPerView && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </>
        )}
      </div>

      {/* Indicators */}
      {categories.length > itemsPerView && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(categories.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * itemsPerView)}
              className={`h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / itemsPerView) === index
                  ? "bg-blue-600 w-6"
                  : "bg-gray-300 w-2 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
