import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import CategoryCarousel from "@/components/CategoryCarousel";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Phone } from "lucide-react";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: "consultancy",
      name: "Consultancy",
      icon: "💼",
      description: "Expert advisory services for your industrial needs",
    },
    {
      id: "blower-molding",
      name: "Blower Molding",
      icon: "🔄",
      description: "Advanced blower and molding solutions",
    },
    {
      id: "auxiliary",
      name: "Auxiliary Equipment",
      icon: "⚙️",
      description: "Supporting equipment for operations",
    },
    {
      id: "machinery",
      name: "Industrial Machinery",
      icon: "🏭",
      description: "Heavy-duty industrial equipment",
    },
    {
      id: "technology",
      name: "Technology Solutions",
      icon: "💻",
      description: "Smart tech integration",
    },
    {
      id: "maintenance",
      name: "Maintenance Services",
      icon: "🔧",
      description: "Expert maintenance and support",
    },
  ];

  const products = [
    {
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
      title: "Smart Technology Solutions",
      description:
        "Advanced technology products designed for modern enterprises seeking cutting-edge solutions.",
      specs: [
        "Industry-leading performance",
        "Enterprise-grade reliability",
        "24/7 Support",
      ],
      category: "technology",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      title: "Blower Systems",
      description:
        "High-efficiency blower systems with precision molding capabilities.",
      specs: ["99.99% Uptime", "Energy efficient", "Custom designs"],
      category: "blower-molding",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f70e504f8?w=400&h=300&fit=crop",
      title: "Industrial Consultancy",
      description:
        "Expert guidance for optimizing your manufacturing processes.",
      specs: [
        "Real-time analysis",
        "Process optimization",
        "Training included",
      ],
      category: "consultancy",
    },
    {
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      title: "Auxiliary Equipment",
      description:
        "Complete range of auxiliary equipment to support your operations.",
      specs: ["High durability", "Easy integration", "Cost-effective"],
      category: "auxiliary",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
      title: "Heavy Machinery",
      description:
        "Industrial-grade machinery built for performance and longevity.",
      specs: [
        "Precision engineered",
        "Durable construction",
        "Global standards",
      ],
      category: "machinery",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
      title: "Maintenance & Support",
      description:
        "Comprehensive maintenance programs and technical support services.",
      specs: ["24/7 Availability", "Preventive care", "Expert technicians"],
      category: "maintenance",
    },
  ];

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  const handleRequestCall = (productTitle: string) => {
    const message = `I would like to request a call regarding: ${productTitle}`;
    const whatsappUrl = `https://wa.me/919724400442?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-gray-900 py-10 sm:py-14 px-3 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 font-display">
            Products & Services
          </h1>
          <p className="text-sm sm:text-base text-gray-300">
            Discover our comprehensive range of industrial solutions
          </p>
        </div>
      </section>

      {/* Category Carousel Section */}
      <section className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center font-display">
            Browse by Category
          </h2>
          <CategoryCarousel
            categories={categories}
            onCategoryClick={setSelectedCategory}
          />
          {selectedCategory && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg transition-colors text-sm sm:text-base"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="flex-1 py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {selectedCategory && (
            <p className="text-center text-muted-foreground mb-8 text-sm sm:text-base">
              Showing products in category:{" "}
              <span className="font-semibold text-foreground">
                {categories.find((c) => c.id === selectedCategory)?.name}
              </span>
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <ul className="space-y-1 mb-5">
                    {product.specs.map((spec, specIndex) => (
                      <li
                        key={specIndex}
                        className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <span className="text-blue-600">✓</span> {spec}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <button
                      onClick={() => handleRequestCall(product.title)}
                      className="flex-1 px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors text-xs sm:text-sm flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Request Call
                    </button>
                    <button
                      onClick={() => (window.location.href = "/contact")}
                      className="flex-1 px-4 py-2.5 border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold rounded-lg transition-colors text-xs sm:text-sm"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
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
