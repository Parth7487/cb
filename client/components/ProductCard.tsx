import { Phone, ArrowRight } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  specs?: string[];
  onLearnMore?: () => void;
  onRequestCall?: () => void;
}

export default function ProductCard({
  image,
  title,
  description,
  specs = [],
  onLearnMore,
  onRequestCall,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
      {/* Image */}
      <div className="relative h-40 sm:h-48 overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-primary text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
          Featured
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 font-display">
          {title}
        </h3>
        <p className="text-muted-foreground text-xs sm:text-sm mb-4 flex-1">
          {description}
        </p>

        {/* Specs */}
        {specs.length > 0 && (
          <ul className="mb-6 space-y-2">
            {specs.map((spec, index) => (
              <li
                key={index}
                className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2"
              >
                <span className="text-primary font-bold flex-shrink-0">•</span>
                {spec}
              </li>
            ))}
          </ul>
        )}

        {/* Actions */}
        <div className="flex gap-2 sm:gap-3 mt-auto pt-4 border-t border-silver-light">
          <button
            onClick={onRequestCall}
            className="flex-1 bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-3 sm:px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm"
          >
            <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Request Call</span>
            <span className="sm:hidden">Call</span>
          </button>
          <button
            onClick={onLearnMore}
            className="flex-1 bg-secondary text-primary hover:bg-secondary/80 font-semibold py-2 px-3 sm:px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm"
          >
            <span className="hidden sm:inline">Learn More</span>
            <span className="sm:hidden">More</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
