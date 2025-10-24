import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Products() {
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
    },
    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      title: "Cloud Infrastructure",
      description:
        "Scalable cloud solutions that power your digital transformation journey.",
      specs: ["99.99% Uptime", "Global presence", "Unlimited scalability"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f70e504f8?w=400&h=300&fit=crop",
      title: "AI-Powered Analytics",
      description:
        "Harness the power of artificial intelligence to drive business insights.",
      specs: ["Real-time analytics", "Predictive modeling", "Custom dashboards"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      title: "Security Solutions",
      description:
        "Comprehensive cybersecurity suite to protect your digital assets.",
      specs: [
        "Military-grade encryption",
        "Threat detection",
        "Compliance ready",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
      title: "Web Development",
      description:
        "Custom web solutions built for performance and user experience.",
      specs: ["Responsive design", "SEO optimized", "Fast loading"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
      title: "Mobile Applications",
      description:
        "Native and cross-platform mobile apps that engage users.",
      specs: ["iOS & Android", "User-friendly interface", "Real-time sync"],
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-muted py-8 sm:py-12 px-3 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 font-display">
            Our Products & Services
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Comprehensive solutions tailored to meet your business needs
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="flex-1 py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                {...product}
                onRequestCall={() => {
                  window.location.href = "#contact";
                }}
                onLearnMore={() => {
                  console.log("Learn more about:", product.title);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
