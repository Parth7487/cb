import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-16 sm:mt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Logo Section */}
        <div className="mb-12 sm:mb-16 text-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fc976f66d5bf2413d808cd3b62e8c250b%2F2b31d010576c47e495132cfad775dc10?format=webp&width=400"
            alt="CB GLOBAL Logo"
            className="h-32 sm:h-40 w-auto object-contain mx-auto mb-4"
          />
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Leading provider of innovative manufacturing and industrial solutions. Trusted by businesses worldwide for quality, reliability, and excellence.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-12">
          {/* Contact Details */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-5 text-yellow-500">Contact Information</h4>
            <div className="space-y-4">
              <a
                href="mailto:Sale@cbgloble.in"
                className="flex items-center gap-3 text-gray-300 hover:text-yellow-500 transition-colors text-xs sm:text-sm"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>Sale@cbgloble.in</span>
              </a>
              <a
                href="tel:+919724400442"
                className="flex items-center gap-3 text-gray-300 hover:text-yellow-500 transition-colors text-xs sm:text-sm"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+91 97244 00442</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300 text-xs sm:text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* WhatsApp & Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-5 text-yellow-500">Quick Links</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/919724400442?text=Hello%20CB%20GLOBAL%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products%20and%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-yellow-500 transition-colors text-xs sm:text-sm"
              >
                <MessageCircle className="w-5 h-5 flex-shrink-0" />
                <span>WhatsApp: +91 97244 00442</span>
              </a>
              <a
                href="/"
                className="block text-gray-300 hover:text-yellow-500 transition-colors text-xs sm:text-sm"
              >
                Home
              </a>
              <a
                href="/products"
                className="block text-gray-300 hover:text-yellow-500 transition-colors text-xs sm:text-sm"
              >
                Products & Services
              </a>
              <a
                href="/contact"
                className="block text-gray-300 hover:text-yellow-500 transition-colors text-xs sm:text-sm"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-5 text-yellow-500">Our Specialties</h4>
            <div className="space-y-2 text-gray-300 text-xs sm:text-sm">
              <p>• Consultancy Services</p>
              <p>• Blower Molding</p>
              <p>• Auxiliary Equipment</p>
              <p>• Industrial Solutions</p>
              <p>• Technical Support</p>
            </div>
          </div>
        </div>

        {/* Developer Credit & Copyright */}
        <div className="border-t border-gray-700 pt-8 sm:pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <p className="text-center sm:text-left text-gray-400 text-xs sm:text-sm">
              Designed and developed by <a href="https://shopifydevstudio.tech" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 font-semibold">Shopifydevstudio.tech</a>
            </p>
            <p className="text-center sm:text-right text-gray-400 text-xs sm:text-sm">
              &copy; {currentYear} CB GLOBAL. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
