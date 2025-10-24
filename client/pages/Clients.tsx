import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Clients() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-gray-900 py-12 sm:py-16 px-3 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 font-display">
            Our Clients
          </h1>
          <p className="text-sm sm:text-base text-gray-300">
            Trusted by leading companies worldwide
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="flex-1 py-20 sm:py-24 lg:py-32 px-3 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-blue-100 rounded-full mb-6">
              <span className="text-4xl sm:text-5xl">🚀</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Coming Soon
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
            We&apos;re working on showcasing our amazing clients and their success stories. Check back soon to see the incredible partnerships and projects we&apos;ve worked on together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="px-6 sm:px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg transition-colors duration-200 text-sm sm:text-base"
            >
              Go Home
            </a>
            <a
              href="/contact"
              className="px-6 sm:px-8 py-3 border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold rounded-lg transition-colors duration-200 text-sm sm:text-base"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
