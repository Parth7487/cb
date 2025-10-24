import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";

export default function Index() {
  const bannerImages = [
    "https://cdn.builder.io/api/v1/image/assets%2Fc976f66d5bf2413d808cd3b62e8c250b%2F14ffa90d4ee04170bd84167494f844fa?format=webp&width=1200",
    "https://cdn.builder.io/api/v1/image/assets%2Fc976f66d5bf2413d808cd3b62e8c250b%2Faa527544f0d44603804140324636ca9a?format=webp&width=1200",
    "https://cdn.builder.io/api/v1/image/assets%2Fc976f66d5bf2413d808cd3b62e8c250b%2Fa6d1b0a3f9c540f5aedf9f872cbbae2d?format=webp&width=1200",
    "https://cdn.builder.io/api/v1/image/assets%2Fc976f66d5bf2413d808cd3b62e8c250b%2F26c2abe8d3314205b702c8836d570ded?format=webp&width=1200",
    "https://cdn.builder.io/api/v1/image/assets%2Fc976f66d5bf2413d808cd3b62e8c250b%2Fb3a6e837560549008576434f2a4eb6c7?format=webp&width=1200",
    "https://cdn.builder.io/api/v1/image/assets%2Fc976f66d5bf2413d808cd3b62e8c250b%2F787d6b0868c2449ab381409327b33bf3?format=webp&width=1200",
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Banner */}
      <section className="w-full flex-1">
        <ImageCarousel
          images={bannerImages}
          autoPlay={true}
          interval={5000}
          showOverlay={true}
          overlayText="Revolutionizing the Industry with Cutting-Edge Technology"
        />
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 font-display">
                About CB GLOBAL
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                With over 15 years of expertise in the industry, CB GLOBAL is a leading provider of innovative manufacturing and industrial solutions. We are committed to delivering excellence and transforming businesses through cutting-edge technology and unparalleled service.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                Our comprehensive range of products and services spans consultancy, specialized machinery, and auxiliary equipment designed to meet the diverse needs of modern industries. We pride ourselves on quality, reliability, and customer-centric innovation.
              </p>
              <Link
                to="/about"
                className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg transition-colors duration-200 text-sm sm:text-base"
              >
                Read Full Story
              </Link>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=400&fit=crop"
                alt="JAGIVOHAN Manufacturing"
                className="rounded-lg shadow-lg w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 font-display">
            Discover Our Solutions
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
            Explore our comprehensive range of products and services designed to transform your business and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg transition-colors duration-200 text-sm sm:text-base"
            >
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold rounded-lg transition-colors duration-200 text-sm sm:text-base"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10 sm:mb-12 font-display">
            Why Choose CB GLOBAL
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { number: "100+", label: "Products" },
              { number: "50+", label: "Clients" },
              { number: "15+", label: "Years Experience" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 bg-yellow-600/20 rounded-lg hover:bg-yellow-600/30 transition-all border border-yellow-600/40"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500 mb-2 font-display">
                  {stat.number}
                </p>
                <p className="text-xs sm:text-sm text-gray-300 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
