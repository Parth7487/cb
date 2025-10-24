import { Facebook, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white mt-16 sm:mt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F41fcf224af494ff39f001668f5d12037%2Fa7bbac811dad49abb27c07f6f52dd0b3?format=webp&width=150"
                alt="CB GLOBLE INDIA Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Revolutionizing the industry with cutting-edge technology and innovative solutions.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="mailto:Sale@cbgloble.in"
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors text-xs sm:text-sm"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                Sale@cbgloble.in
              </a>
              <a
                href="tel:+91000000000"
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors text-xs sm:text-sm"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                +91 (000) 000-0000
              </a>
              <div className="flex items-start gap-3 text-gray-300 text-xs sm:text-sm">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white p-2 rounded-lg hover:bg-primary/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white p-2 rounded-lg hover:bg-primary/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white p-2 rounded-lg hover:bg-primary/80 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <p className="text-center text-gray-400 text-xs sm:text-sm">
            &copy; {currentYear} CB GLOBLE INDIA. All rights reserved. | Designed with precision and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}
